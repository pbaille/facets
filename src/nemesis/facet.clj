(ns nemesis.facet
  "an implementation of facets using nemesis.dispatch
   curently only for unary facets"
  (:require [nemesis.dispatch :as d]
            [nemesis.type :as t :refer [t]]
            [nemesis.maps :as f :refer [§]]))

;; helpers -------------------------------------------------

(defn select-first-present
  [m ks]
  (loop [[fk & rk] ks]
    (if-let [v (get m fk)]
      {fk v}
      (when (seq rk)
        (recur rk)))))

(defn derivations-chain
  [derivations x]
  (loop [ret [x]]
    (if-let [nxt (get derivations (last ret))]
      (recur (conj ret nxt))
      (vec (next ret)))))

(defn prefered-matches
  [prefs matches]
  (let [pats (set (keys matches))

        candidates
        (map (fn [[pat v]]
               [pat (apply disj pats pat (get prefs pat))])
             matches)

        prefered-pats
        (map first (filter (comp not seq second) candidates))]

    (select-keys matches prefered-pats)))

;; main ------------------------------------------------------

(def facet0
  #::{:type :facet
      :type-impls {}
      :struct-impls {}
      :derivations {}
      :prefs {}
      ::f/call d/dispatched-fn-call
      ::d/dispatch
      (fn [{::keys [type-impls struct-impls derivations prefs] n :name} arg]
        (or
          ;; reified cases (arg own its impl)
          (n arg)
          (-> arg :facets n)
          (-> arg meta n)
          (-> arg meta :facets n)
          ;; regular dispatch
          (let [

                disp (d/serialize
                       ;; direct type match
                       (d/dispatcher
                         {:conform t
                          :table type-impls})
                       ;; derived type match
                       (d/dispatcher
                         {:conform #(conj (derivations-chain derivations (t %)) (type %))
                          :match #(contains? (set %2) %1)
                          :prefer #(select-first-present %2 %1)
                          :table type-impls})
                       ;; structural type match
                       (d/dispatcher
                         {:conform identity
                          :table struct-impls
                          :match #(%1 %2)
                          :prefer #(prefered-matches prefs %2)}))]
            (§ ::d/dispatch disp arg))))})

(def facet
  (f/map-constructor facet0))

;; test -------------------------------------------------------------

(comment
  (let [k constantly
        f (facet {:name :f1

                  :type-impls
                  {:foo (k :foo)
                   :bar (k :bar)}

                  :struct-impls
                  {string? (k :str)
                   keyword? (k :kw)
                   ident? (k :ident)}

                  :derivations
                  {:baz :bob
                   :bob :bar
                   :bar :foo}

                  :prefs
                  {keyword? #{ident?}
                   string? #{ident?}}})]

    f

    (§ ::d/dispatch f {:type :bar})

    (mapv #(§ ::f/call f %)
          [{:type :foo}
           (with-meta [] {:type :bar})
           {:type :baz :f1 (k "overiden!")}
           {:type :baz}
           "aze"
           'aze
           :aze])))
