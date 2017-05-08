(ns nemesis.utils
  (:require [clojure.set]))

(defn keys-auto-namespacer
  [hm]
  (fn [obj]
    (clojure.set/rename-keys
      obj
      (into {}
            (map (juxt (comp keyword str name) identity)
                 (keys hm))))))
