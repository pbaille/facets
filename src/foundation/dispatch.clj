(ns foundation.dispatch
  "a flexible dispatch mecanism")

;; matching helpers

(defn unresolvable-error! [matches]
  (throw (Exception. (str "cannot resolve between: " matches))))

(defn no-matches-err! [arg]
  (throw (Exception. (str "no dispatch value found for: " arg))))

(defn first-and-only! [[f & rst :as matches]]
  (if (seq rst)
    (unresolvable-error! matches)
    f))

;; simple

(defn simple-dispatcher-defaults
  "Not used yet"
  [opts]
  {:table {}
   :prefer identity
   :fail (constantly nil)
   :dispatch
   (fn [{:keys [fail table prefer]} arg]
     (let [matches (filter (fn [[k v]] ((:match k) k arg)) table)]
       (condp = (count matches)
         0 (fail)
         1 (-> matches first second)
         (-> matches (partial prefer arg) first-and-only! second))))})

;; defaults field

(def dispatcher0
  {:pre-filt identity
   :table {}
   :conform identity
   :match =
   :prefer unresolvable-error!
   :fail no-matches-err!
   ;;:dispatch dispatch
   })

;; API ---------------------------------

(defn dispatcher
  "dispatcher type"
  [opts]
  (merge dispatcher0 opts))

(defn dispatch
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
  [{:keys [dispatch conform match prefer table fail pre-filt] :as d} arg]
  (if dispatch
    (dispatch d arg)
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
        :else (->> matches (prefer conformed) first-and-only! val)))))

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
  {:dispatchers ds
   :dispatch
   (fn serial-dispatch [{[fd & rd :as ds] :dispatchers :as this} arg]
     (if-not fd
       (no-matches-err! arg)
       (dispatch (assoc fd :fail #(serial-dispatch (apply serialize rd) %))
                 arg)))})

;; tests ----------------------------

(comment
  (-> (dispatcher
        { ;; match either by equality either by predicate
         :match #(or (= %1 %2) (%1 %2))
         ;; prefer regular matches over pred matches
         :prefer (fn [_ matches] (remove (comp fn? key) matches))
         ;; dispatch table
         :table {:a :a
                 :b :b
                 keyword? :kw}})
      (dispatch :a))

  (-> (serialize
        (dispatcher {:table {:a :a :b :b}})
        (dispatcher {:match #(%1 %2)
                     :table {string? :str number? :num}}))
      #_(dispatch :a)
      (dispatch 12)))

;; dispatch END ------------------------------------------------------------------

;; Experiments, should not be here!

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
    (throw (Exception. "no dispatch found"))))

;;------------------------------------------------------

(do
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








