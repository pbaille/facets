(ns foundation.transparent-function
  (:require [clojure pprint string]))

(defmacro tfn
  "Creates a function with additional metadata including the local variables names and values that
  are in scope and the function code."
  [& parts]
  (let [ks (keys &env)]
    `(vary-meta
       (fn ~@parts)
       assoc
       :type ::tfn
       :tfn? true
       :locals (zipmap '~ks [~@ks])
       :code '~&form)))

(defmacro deftfn
  [name & parts]
  `(def ~name (tfn ~@parts)))

(defn tfn?
  "Returns true if the function is a transparent function."
  [f]
  (true? (:tfn? (meta f))))

(def ^:private print-order-map
  "Mapping of metadata keys to the order they should be displayed."
  {:locals 0
   :code 1})

(def ^:private sorted-map-by-print-order
  "Helper sorted map whose keys are sorted in the order to be printed."
  (sorted-map-by #(compare (print-order-map %1) (print-order-map %2))))

(defn- displayable-value
  "Converts a value for display."
  [v]
  (let [types (ancestors (type v))]
    (cond
      (tfn? v)
      (let [{:keys [locals code]} (meta v)
            print-locals (into {} (for [[k v] locals] [k (displayable-value v)]))]
        (assoc sorted-map-by-print-order :locals print-locals :code code))

      (types clojure.lang.IFn)
      (-> v
          type
          .getName
          (clojure.string/replace "$" "/")
          (clojure.string/replace "clojure.core/" "")
          symbol)
      :else
      v)))

;; Implementation of pretty print simple dispatch for displaying transparent functions.
(defmethod clojure.pprint/simple-dispatch clojure.lang.AFunction [v]
  (if (tfn? v)
    (clojure.pprint/simple-dispatch (displayable-value v))
    (pr v)))

(defmethod print-method ::tfn
  [x w]
  (print-method (symbol (str "fn:" (pr-str (displayable-value x)))) w))
