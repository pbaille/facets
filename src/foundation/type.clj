(ns foundation.type
  (:refer-clojure :exclude [type]))

(defn t [x]
  (let [typ (or (:type x)
                (some-> x meta :type)
                (clojure.core/type x))]
    (:value typ typ)))

(defn type [v]
  {:type :type
   :value v})

(defn type? [x]
  (or (keyword? x)
      (= :type (t x))))
