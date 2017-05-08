(ns nemesis.dispatch
  "a flexible dispatch mecanism"
  (:require [nemesis.maps :as f :refer [§]]))

;; matching helpers

(defn unresolvable-error! [matches]
  (throw (Exception. (str "cannot resolve between: " matches))))

(defn no-matches-err! [arg]
  (throw (Exception. (str "no dispatch value found for: " arg))))

(defn first-and-only! [[f & rst :as matches]]
  (if (seq rst)
    (unresolvable-error! matches)
    f))

;; defaults field

(defn default-dispatch
  "ex:
  (-> (dispatcher
        {;; match either by equality either by predicate
         :match #(or (= %1 %2) (%1 %2))

         ;; prefer regular matches over pred matches
         :prefer (fn [_ matches] (remove (comp fn? key) matches))

         ;; dispatch table
         :table {:a :a
                 :b :b
                 keyword? :kw}})

      (dispatch :a))"
  [{::keys [conform match prefer table fail pre-filt] :as d} arg]
  (let [conformed (conform arg)
        [fm & rm :as matches]
        (reduce
          (fn [acc [pat v]]
            (if (match pat conformed)
              (assoc acc pat v)
              acc))
          {}
          (pre-filt table))]
    (cond
      (not fm) (fail arg)
      (not (seq rm)) (val fm)
      :else (->> matches (prefer conformed) first-and-only! val))))

(def dispatcher0
  #::{:pre-filt identity
      :table {}
      :conform identity
      :match =
      :prefer unresolvable-error!
      :fail no-matches-err!
      :dispatch default-dispatch})

;; API ---------------------------------

(def dispatcher
  "dispatcher type"
  (f/map-constructor dispatcher0))

(defn dispatched-fn-call
  [this arg]
  ((§ ::dispatch this arg) this arg))

(def dispatched-fn
  "a dispatcher that can be called"
  (f/map-constructor
    (assoc dispatcher0
      ::f/call dispatched-fn-call)))

(defn serialize

  "serialize several dispatchers into one
   ex:
   (-> (serialize

         ;; regular dispatcher
         (dispatcher {:table {:a :a :b :b}})

         ;; predicate dispatcher
         (dispatcher {:match #(%1 %2)
                      :table {string? :str number? :num}}))

     ;; (dispatch :a)
     (dispatch 12))"

  [& ds]
  {::dispatchers ds
   ::dispatch
   (fn serial-dispatch [{[fd & rd :as ds] ::dispatchers :as this} arg]
     (if-not fd
       (no-matches-err! arg)
       (§ ::dispatch
          (assoc fd ::fail #(serial-dispatch (apply serialize rd) %))
          arg)))})



;; tests ----------------------------





(comment

  (§ ::f/call
     (dispatched-fn
       {;; match either by equality either by predicate
        :match #(or (= %1 %2) (%1 %2))
        ;; prefer regular matches over pred matches
        :prefer (fn [_ matches] (remove (comp fn? key) matches))
        ;; dispatch table
        :table {:a :a
                :b :b
                keyword? (fn [this kw] [kw this])}})
     :afk)

  (§ ::dispatch (dispatcher
                  {:table {:a :a :b :b}})
     :a)

  (§ ::dispatch
     (serialize
       (dispatcher
         {:table {:a :a :b :b}})
       (dispatcher
         {:match #(%1 %2)
          :table {string? :str number? :num}}))
     #_:a
     "aze"
     ))

;; dispatch END ------------------------------------------------------------------

;; Experiments, should not be here!

(comment
  (declare c>)

  (def env
    (atom
      {:links
       (dispatcher
         {:pre-filt
          (fn [table [k _]]
            (filter (fn [[_ v]] (contains? v k))
                    table))
          :match
          (fn [matcher [k arg]] (matcher arg))
          :table {}
          :fail {}})
       :combinators
       {}}))

  (defn f> [f arg]
    (if-let [f* (f arg)]
      (f* arg)
      (if-let [f* (f (dispatch (:links @env) [f arg]))]
        (f* arg)
        (throw (Exception. "no dispatch found")))))

  (defn reg-link! [link table]
    (swap! env update :links assoc link table))

  (defn swap-link! [link f & args]
    (apply swap! env update-in [:links link] f args))

  (defn merge-link! [link m]
    (swap-link! link merge m))

  (def combinator-defaults
    {:right (constantly identity)
     :left identity
     })

  (defn combinator [opts])

  (defn c> [f a1 a2]
    (if-let [{:keys [right left]} (f (:combinators @env))]
      ((f> right a1) (f> left a2))
      (throw (Exception. "no dispatch found")))))

;;------------------------------------------------------

(comment
  (defn ◊
    "assoc some implementations to x
     bs:: {kw impl}"
    [x bs]
    (vary-meta x update :facets merge bs))

  (defn <f
    "get the implementation of 'k' in x"
    [x k]
    (get-in (meta x) [:facets k]))

  (defn §
    "apply x's implementation of 'k' on x,
    if some args, apply the result of the previous computation to first args etc...
    until args is empty"
    [k x & args]
    (if-let [f (<f x k)]
      (if (seq args)
        (reduce #(§ k %1 %2) (f x (first args)) (next args))
        (f x))
      (throw (Exception. (str "cannot do that: " k x)))))

  (defn f0
    "type to represent a function that take no arguments
     bottom case of curried functions, see 'fx' function"
    [f]
    (◊ f {:realize (fn [this] (this))
          :arity 0}))

  (defn cfn
    "curried function type, takes args until arity 0,
     then it can be realized.
     ex: (§ :realize (§ :into (cfn 3 +) 1 1 5))"
    [arity f]
    (if (or (not arity)
            (zero? arity))
      (f0 f)
      (◊ f {:into (fn [this x] (cfn (dec arity) (partial this x)))
            :arity arity})))

  (def f1 (partial cfn 1))
  (def f2 (partial cfn 2))
  (def f3 (partial cfn 3)))

;; All with maps again...


(+ 1 1)





