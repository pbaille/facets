(ns foundation.maps
  (:require [foundation.futils :as fu]
            [foundation.transparent-function :refer [tfn]]))

(def k (tfn [x] (constantly x)))

(declare §)

(def obj0
  (with-meta
    #::{:value fu/arg1
        :call fu/arg1
        :match =
        :get get
        :print #(vary-meta % dissoc :type)
        :obj true}
    {:type ::obj}))

(defmethod print-method ::obj
  [x w]
  (print-method (§ ::print x) w))

(defn obj
  ([x]
   (cond
     (map? x)
     (merge obj0 x)
     (fn? x)
     (letfn [(fcall [this & args] (apply (§ ::value this) args))]
       (assoc obj0
         ::value (k x)
         ::call fcall
         ::match fcall))
     :else
     (assoc obj0
       ::call (k x)
       ::value (k x)
       ::match #(= (§ ::value %1) (§ ::value %2)))))
  ([x & xs]
   (obj (apply hash-map (cons x xs)))))

(defn obj?
  [x]
  (::obj x))

(declare getter)

(meta #'get)

(defn focus
  "like get-in but keep a ref to parent
  ex:
  (focus {:foo 1 :bar 2 :baz {:niac {:nem :bob}}} [:baz :niac])
  =>
  {:nem :bob
   ::parent {:niac {:nem :bob}
             ::parent {:foo 1, :bar 2, :baz {:niac {:nem :bob}}}}}"
  [this [fp & rp :as path]]
  (if fp
    (focus (assoc ((getter this) this fp) ::parent this)
           (vec rp))
    this))

(defn unfocus
  "focus counterpart
   (unfocus (focus x y)) <=> x"
  [this]
  (if-let [p (::parent this)]
    (unfocus p)
    this))

(defn getter
  "get the get impl of this"
  [this]
  (or (and (map? this) (::get this))
      (if-let [p (::parent this)]
        (getter p)
        get)))

(defn resolve*
  "try to find arg in this, if not found search in successive parents
  ex:
  (resolve*
   (focus {:foo {:bar {:nop :bib} :baz 0 :niac :bub}
           :niac :bob}
          [:foo :bar])
   :niac)
  =>
  :bub"
  [this arg & [not-found]]
  (or (and (::resolve this) ((::resolve this) this arg not-found))
      (when-let [get-fn (getter this)]
        (get-fn this arg))
      (if-let [p (::parent this)]
        (resolve* p arg)
        (or not-found ::not-found))))

(comment
  (resolve* {::baz "iop"} ::baz "yop")
  (focus {:foo {:bar {:nop :bib} :baz 0 :niac :bub}
          :niac :bob}
         [:foo :bar])
  (resolve*
    (focus {:foo {:bar {:nop :bib} :baz 0 :niax :bub}
            :niac :bob}
           [:foo :bar])
    :niac))

(defn §
  "call operator:
   call k on this with given args"
  [k this & args]
  (if (obj? this)
    (if-let [f (resolve* this k)]
      (if (fn? f)
        (apply f this args)
        (apply § ::call f this args))
      (throw (Exception. (str "no field " k " in " this))))
    (apply § k (obj this) args)))

(comment
  ((::resolve obj0) obj0 ::call)
  (§ ::value (obj int?))
  (§ ::call (obj int?) 1)
  (§ ::match (obj int?) 1)
  (§ ::match int? 1)
  (§ ::match 1 11)
  (§ ::match string? :get)
  (§ ::get {:foo 12} :foo)

  (do (obj {:baz "zer"}))

  (clojure.pprint/pprint (tfn [x] (+ x x)))
  (§ "foo"
     (obj :foo 42
          string? (fn [this & args] "string")
          ::get
          (fn [this key]
            (println key (first (filter #(§ ::match % key) (keys this))))
            (get this (first (filter #(§ ::match % key) (keys this))))))
     ::get)

  (§ ::call
     (obj :foo 42
          ::call (fn [{:keys [foo]} & args] (apply + foo args)))
     12)

  (§ ::call
     (obj ::call 123)
     12)

  (§ "foo"
     (obj :foo 42
          (fn yop [& args] (println args)) (fn [this & args] "string")
          ::get (fn [this key] (get this (first (filter #(§ ::match % key) (keys this))))))
     12)

  (§ ::call
     (obj ::call (obj :a 1 :b 2))
     12)

  (§ ::match int? 1))

(defmacro defmap
  ([name args body]
   `(defmap ~name "no doc :(" ~args ~body))
  ([name doc args body]
   `(defn ~name
      ~doc
      ([x#]
        (let [~args [x#]]
          (obj ~body)))
      ([x# & {:as xs#}]
        (merge (~name x#) xs#)))))

(macroexpand
  '(defmap v
           [x]
           {:value (k x)}))

(defmap v
        [x]
        {:value (k x)})

(defmap const [x] ())

(v 12 :yop "aze")

(defmap t
        [s]
        {:type (k s)})

(defn t
  "arity1: build a type object
   arity2: give an object of type s holding value v"
  ([s]
   (merge
     obj0
     {::type :type
      ::value (k s)
      ::call (fn [& _] (t s))}))
  ([s v]
   {::type (k (t s))
    ::value (k v)
    ::call (fn [& _] (t s v))}))

(defn value
  [x & kvs]
  (t :value
     assoc
     ;:type (t)
     :value (k x)
     :call #(k x)
     kvs))

(defn f0
  "type to represent a function that take no arguments
   bottom case of curried functions, see 'fx' function"
  [f]
  (value f
         :realize (fn [this] (this))
         :arity 0))

(defn f
  "curried function type, takes args until arity 0,
   then it can be realized.
   ex: (§ :realize (§ :into (cfn 3 +) 1 1 5))"
  [arity f]
  (if (or (not arity)
          (zero? arity))
    (f0 f)
    (value f
           :into (fn [this x] (f (dec arity) (partial this x)))
           :arity arity)))

(defn cfn [arity f]
  (obj :call []))

(clojure.repl/source get)

((fn [& {:as opts}] opts) :aze 1 :cvb 2)