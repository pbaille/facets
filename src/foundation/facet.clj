(ns foundation.facet
  "an implementation of facets using foundation.dispatch
   curently only for unary facets"
  (:require [foundation.dispatch :as d]
            [foundation.type :as t :refer [t]]))

;; helpers -------------------------------------------------

(defn select-first-present [m ks]
  (loop [[fk & rk] ks]
    (if-let [v (get m fk)]
      {fk v}
      (when (seq rk)
        (recur rk)))))

(defn derivations-chain [derivations x]
  (loop [ret [x]]
    (if-let [nxt (get derivations (last ret))]
      (recur (conj ret nxt))
      (vec (next ret)))))

(defn prefered-matches [prefs matches]
  (let [pats (set (keys matches))

        candidates
        (map (fn [[pat v]]
               [pat (apply disj pats pat (get prefs pat))])
             matches)

        prefered-pats
        (map first (filter (comp not seq second) candidates))]

    (select-keys matches prefered-pats)))

;; main ------------------------------------------------------

(def defaults
  {:type :facet
   :type-impls {}
   :struct-impls {}
   :derivations {}
   :prefs {}
   :dispatch
   (fn [{:keys [name type-impls struct-impls derivations prefs]} arg]
     (or
       ;; reified cases (arg own its impl)
       (name arg)
       (-> arg :facets name)
       (-> arg meta name)
       (-> arg meta :facets name)
       ;; regular dispatch
       (-> (d/serialize
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
                :prefer #(prefered-matches prefs %2)}))
           (d/dispatch arg))))})

(defn facet
  "facet constructor"
  [opts]
  (merge defaults opts))

(defn call
  "arity 2: call a facet on something,
   arity 1: turn facet into function"
  ([f]
   (partial call f))
  ([f arg]
   ((d/dispatch f arg) arg)))

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

    (mapv #(call f %)
          [{:type :foo}
           (with-meta [] {:type :bar})
           {:type :baz}
           "aze"
           'aze
           :aze])))
