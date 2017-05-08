(ns nemesis.bootstrap)

(defn t=
  "type checker,
   static version, must be redefined later"
  ([t] #(t= t %))
  ([t x]
   (= t (:type x))))

(defn n
  "bottom type of the system, holds a clojure value"
  [x]
  {:type :native
   :value x})

(defn h
  "little helper to build a native map"
  [& xs]
  (n (apply hash-map xs)))

(defn n?
  "native type pred"
  [x]
  (or (t= :native x)
      (not (map? x))))

(def !n (complement n?))

(defn t>
  "attach a type to something"
  ([t] #(t> t %))
  ([t x]
   (if (n? x)
     {:type t :value x}
     (assoc x :type t))))

(def f (t> :facet))





(defn v
  "bottom type"
  [x]
  {:type :value
   :value x})

(defn v? [x]
  (= :value (:type x)))

(defn <v [x]
  )

(defn f? [x]
  (= :facet (:type x)))

(declare v)

(def identity-facet
  {:type :facet
   :value identity})

(defn f
  "arity 1: attach the :facet type to a function
   arity 2: execute a facet on something"
  ([this] (assoc identity-facet :value ))
  ([this that] ((v this) that)))

(defn t
  "arity 1: create a type object
   arity 2: attach a type object to something"
  ([this]
   (if (= :type (:type this))
     this
     {:type :type :value this}))
  ([this that]
   (if (:value that)
     (assoc that :type this)
     {:type this :value that})))

(defn v [x]
  (if-let [v* (:value x)]
    (if (f? v*)
      (f v* x)
      v*)
    x))

(v {:type :foo
    :pouet 42
    :value {:type :facet
            :value (fn [x] (:pouet x :foo-default-value))}})

(v {:type :foo
    :value :pouet})

(v [1 2 3])

;; 3 all with {:kw fns}

(defn v [x]
  (if-not (map? x)
    x
    (cond
      (contains? x :value) (:value x)
      (contains? x :realize) (:value ((:realize x) x))
      :else x)))

(defn t [x]
  (if-let [t (:type x)]
    (t x)
    x))

;; duals

;; realized
;; sequantial



