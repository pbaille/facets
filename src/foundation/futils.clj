(ns foundation.futils)

(defn p [& xs]
  (doseq [x xs]
    (clojure.pprint/pprint x))
  (last xs))

(def k constantly)
(def always (k true))
(def never (k false))
(defn arg1 [x & _] x)
(defn arg2 [_ x & _] x)
(defn call [f & xs] (apply f xs))
(defn flip [f] (fn [a b] (f b a)))
(def fcall (flip call))