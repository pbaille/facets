(ns facets.core
  (:refer-clojure :exclude [extend-type reify]))

;; state ---------------------

; {type-kw constructor-fn}
(def types (atom {::any identity}))

; inheritence {type-kw #{parents-type-kws}}
(def derivations (atom {}))

; {facet-kw {type-kw implementation}}
(def facets (atom {}))

; {type type-alias}
(def aliases (atom {}))

; {prefered-type-kw #{type-kw}}
(def prefs (atom {}))

(defn pstate []
  (println "types: " @types)
  (println "facets: " @facets)
  (println "aliases: " @aliases)
  (println "prefs: " @prefs)
  (println "derivations: " @derivations))

(defn reset-all! []
  (reset! types {::any identity})
  (reset! derivations {})
  (reset! facets {})
  (reset! aliases {}))

;; helpers -------------------

(defn known-types []
  (set (keys @types)))

(defn known-type? [t] ((known-types) t))

(declare <alias)

(defn t
  "artity 2: assign type sym to e
   arity 1: get the type tag of e"
  ([e] (or (:type (meta e))
           (<alias (type e))))
  ([sym e] (vary-meta e assoc :type sym)))

(defn t?
  "check if e is of type sym"
  [sym e] (= sym (t e)))

(defn t=
  "check if all given args are of same type"
  [x & xs]
  (every? (partial t? (t x)) xs))

;; checking ------------------

#_(defn assert [& xs] true)

(defn assert-nskw [name]
  (assert (and (keyword name) (namespace name))
          (str "Please use namespaced keyword for declaring types! " name)))

(defn assert-new-type [name]
  (assert (not (get @types name))
          (str "Already existing type: " name)))

(defn assert-type [name]
  (assert (get @types name)
          (str "Unknown type: " name)))

(defn assert-new-facet [name]
  (assert (not (get @facets name))
          (str "Already existing facet: " name)))

(defn assert-facet [name]
  (assert (get @facets name)
          (str "Unknown facet: " name)))

(defn assert-type-impl-map [impl-map]
  (let [unknown-facets (seq (remove #(get @facets %) (keys impl-map)))]
    (assert (not unknown-facets)
            (str "there's unknown facets: "
                 unknown-facets
                 " in the given impl-map"))))

(defn assert-parents [parents]
  (let [unknown-parents (seq (remove known-type? parents))]
    (assert (not unknown-parents)
            (str "there's unknown parents types: "
                 unknown-parents
                 " in the given vector: "
                 parents))))

(defn assert-facet-impl-map [impl-map]
  (let [unknown-types (seq (remove known-type? (keys impl-map)))]
    (assert (not unknown-types)
            (str "there's unknown types: "
                 unknown-types
                 " in the given impl-map"))))

(defn assert-no-overides [old-impls new-impls]
  (let [known-impls (set (keys old-impls))
        overides (seq (keep known-impls (keys new-impls)))]
    (assert (not overides)
            (str "can't overide existing implementations for types: \n"
                 overides
                 "\n maybe it is time to create a new type."))))

(defn assert-existing-derivations [impl-map]
  (let [derivations (remove (comp fn? val) impl-map)
        unknown-types (remove known-type? derivations)]
    (assert (empty? unknown-types)
            (str "can't derive from unknown types: " unknown-types))))

(defn throw-alias-error
  ([matches]
   (throw
     (Exception.
       (str "unable to resolve prefered alias from: \n"
            matches))))
  ([matches type]
   (throw
     (Exception.
       (str "several aliases: \n"
            (pr-str matches)
            "\nmatch given type: \n"
            type
            "\nuse prefer function to register type preferences")))))

;; base ----------------------

(def any ::any)

(declare extend-facet)

(defn extend-type
  "assoc new facets implementation to existing type"
  [name impl-map]
  (assert-type name)
  (assert-type-impl-map impl-map)
  (map assert-facet (keys impl-map))
  (doseq [[f impl] impl-map]
    (extend-facet f {name impl})))

(defn- parse-declare-type-args [constructor impl-map & [parent]]
  (if (map? constructor) ; no constructor case
    {:constructor identity
     :impl-map constructor}
    {:impl-map (or impl-map {})
     :constructor (or constructor (get @types parent) identity)}))

(defn declare-type* [{:keys [id constructor facets spec gen]}]
  )

(defn declare-type
  "declare a new datatype, attaching it the given constructor
   and facets implementations.
   ex:
   (declare-type ::foo
     identity
     {:say-hello (fn [this] (println \"hello from foo\"))})"
  [name & [constructor impl-map]]
  (assert-nskw name)
  (assert-new-type name)
  (let [{:keys [constructor impl-map]}
        (parse-declare-type-args constructor impl-map)]
    (swap! types
           assoc
           name
           (fn [& args]
             (t name (apply constructor args))))
    (extend-type name impl-map)))

(defn declare-alias
  "register a type-alias
   ex:
   (declare-alias clojure.lang.PersistentVector ::vec)"
  [type sym]
  (when-not (known-type? sym)
    (declare-type sym))
  (swap! aliases assoc type sym))

(defn declare-aliases [hm]
  (doseq [[x y] hm]
    (declare-alias x y)))

(defn prefer
  "register a type preference,
   'type' will be prefered over 'types'"
  [type & types]
  (swap! prefs assoc type (set types)))

(defn- get-prefered-alias [xs type]
  (let [ret (reduce
              (fn [acc el]
                (if-let [to-remove (set (get @prefs el))]
                  (remove to-remove acc)
                  acc))
              xs
              xs)]
    (condp = (count ret)
      0 (throw-alias-error ret)
      1 (first ret)
      (throw-alias-error ret type))))

(defn <alias [type]
  (let [matches (filter
                  #(isa? type %)
                  (keys @aliases))
        aliases* (set (map (partial get @aliases) matches))]
    (condp = (count aliases*)
      0 nil
      1 (first aliases*)
      (get-prefered-alias aliases* type))))

(defn t>
  "generic constructor call.
   apply the constructor of type t to args"
  [t & args]
  (assert-type t)
  (apply (get @types t) args))

(defn extend-facet
  "assoc new implementations to existing facet"
  [name impl-map]
  (assert-facet name)
  (assert-facet-impl-map impl-map)
  (swap! facets
         update
         name
         (fn [old-impl-map]
           (assert-no-overides old-impl-map impl-map)
           (assert-existing-derivations impl-map)
           (merge old-impl-map impl-map))))

(defn extend-facets [m]
  (doseq [[n impls] m]
    (extend-facet n impls)))

(defn- no-default-handler [f]
  (fn [x & _]
    (throw
      (Exception.
        (str "no implementation of facet: "
             f
             " for type: "
             (t x))))))

(defn- register-default-impl [name impl-map]
  (swap! facets
         assoc-in
         [name ::any]
         (::any impl-map
           (no-default-handler name))))

(defn declare-facet
  "declare a new facet, just a fancy name for behavior or method
   ex:
   (declare-facet ::say-hello
     {::type1 (fn [x] (println \"hello from type 1\"))
      ::type2 (fn [x] (println \"hello from type 2\"))
      :default (fn [x] (println \"default hello from a type that doesn't implement ::say-hello))})"
  [name & [impl-map]]
  (assert-nskw name)
  (assert-new-facet name)
  (register-default-impl name impl-map)
  (extend-facet name (dissoc impl-map ::any)))

(defn declare-facets [m]
  (doseq [[kw impl-map] m]
    (declare-facet kw impl-map)))

(defn <fs
  "get all facets implementations for the given type"
  [t]
  (reduce
    (fn [acc [fname impls]]
      (if-let [i (get impls t)]
        (assoc acc fname i)
        acc))
    {}
    @facets))

(defn reified? [this]
  (and (-> this meta ::impl-map)
       (-> this meta ::parents)))

(defn derived-impl-map [parents impl-map]
  (merge (reduce
           (fn [acc p]
             (merge acc (<fs p)))
           {}
           (reverse parents))
         impl-map))

(defn reified->impls [this]
  (derived-impl-map
    (-> this meta ::parents reverse)
    (-> this meta ::impl-map)))

(defn <f
  "given a facet keyword and something,
   return the registered or default implementation"
  [facet this]
  (let [v (if (reified? this)
            (get (reified->impls this) facet)
            (or (get-in @facets [facet (t this)])
                (get (derived-impl-map (get @derivations (t this)) (<fs (t this)))
                     facet)))]
    (cond
      (fn? v) v
      (known-type? v) (<f facet v) ;should handle circular stuff here
      :else (get-in @facets [facet ::any]))))

(defn declare-derived-type
  "same as declare-type but inherit all impls of the given parents,
   unless overiden via impl-map parameter"
  [name parents & [constructor impl-map]]
  (assert-parents parents)
  (let [{:keys [constructor impl-map]}
        (parse-declare-type-args constructor impl-map (first parents))]
    (declare-type name constructor impl-map)
    (swap! derivations assoc name parents)))

(defn reify
  "anonymous type,
   that can inherit from one or several existing types"
  ([this parents-or-impl-map]
   (if (and (vector? parents-or-impl-map)
            (every? known-type? parents-or-impl-map))
     (reify this parents-or-impl-map {})
     (reify this [] parents-or-impl-map)))
  ([this parents impl-map]
   (vary-meta this
              assoc
              ::parents parents
              ::impl-map impl-map)))

(defn call
  "call facet f on args"
  [fk arg1 & args]
  (apply (<f fk arg1)
         arg1
         args))

(def § call)

;; exemples -----------------

(comment

  (declare-type ::mytype)

  (t (t> ::mytype [1 2 3]))

  (t? ::mytype (t> ::mytype [1 2 3]))

  (t= (t> ::mytype {:foo :bar}) (t> ::mytype [1 2 3]))

  (declare-type ::t1
                (fn [x] (println "t1 constructor") {:t1k x}))

  (declare-type ::t3
                (fn [x] (println "t3 constructor") {:t3k x}))

  (declare-alias clojure.lang.IPersistentVector ::ivec)
  (declare-alias clojure.lang.PersistentVector ::vec)

  (prefer ::ivec ::vec)

  (t [])

  (declare-facet ::f1
                 {::t1 (fn [this] :f1-t1)
                  ::vec (fn [this] :f1-vec)
                  ::any (fn [this] :f1-any)})

  (declare-derived-type ::t2 [::t3 ::t1])

  (println (§ ::f1 (t> ::t2 ["bla" {:a 1}])))

  (extend-facet ::f1
                {::t3 (fn [this] :f1-t3)})

  (println (§ ::f1 (t> ::t2 ["bla" {:a 1}])))

  (§ ::f1 (t> ::t1 "foo"))
  (§ ::f1 (t ::baz {:t "foo" 1 "bar"}))

  (known-type? ::t1)

  (every? known-type? [::t1])

  (§ ::f1 (reify [1 2 3] [::t3 ::t1]))

  ((::t2 @types) "yop")

  (§ ::f1 (t> ::t2 ["bla" {:a 1}]))

  (pstate)

  (§ ::f1 [1 2 3])

  (declare-alias clojure.lang.IPersistentVector ::vec)
  (declare-alias clojure.lang.IObj ::obj)

  (t [])

  (prefer ::vec ::obj)

  (t []))
