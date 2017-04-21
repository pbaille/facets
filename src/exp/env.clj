(ns exp.env
  (:require [exp.dispatch :as d]
            [exp.type :as t :refer [t]]))

(def defaults
  {:type :env
   :facets {}
   :derivations {}
   :prefs {}
   :types {}})


(defn <f
  "get"
  [env f this]
  (or (f this)
      (-> this meta f)
      (let [f (-> env :facets f)
            t (t this)]
        (-> (d/dispatcher
              {:conform t
               :table type-impls}))
        (-> (d/serialize
              (d/dispatcher
                {:conform t
                 :table type-impls})
              (d/dispatcher
                {:conform #(conj (derivations-chain derivations (t %)) (type %))
                 :match #(contains? (set %2) %1)
                 :prefer #(select-first-present %2 %1)
                 :table type-impls})
              (d/dispatcher
                {:conform identity
                 :table struct-impls
                 :match #(%1 %2)
                 :prefer #(prefered-matches prefs %2)}))
            (d/dispatch arg)))))
