(ns exp.navigator)

(defn throw* [& xs]
  (throw (Exception. (apply str xs))))

(def k constantly)

(defn § [k x & xs]
  (if-let [f (k x)]
    (apply f x xs)
    (throw* "§: no impl of " k " for " x)))

(defn id-matchable [x]
  {:match #(= x %2)
   :value (k x)})

(defn f* [f]
  {:match #(f %2)
   :call #(apply f (next %&))
   :value (k f)})

(defn match-table [table]
  {:value (k table)
   :swap (fn [_ f & args] (match-table (apply f table args)))
   :get (fn [_ x]
          (let [ms (filter (fn [[k v]] (§ :match k x)) table)]
            (condp = (count ms)
              0 (throw* "no match")
              1 (§ :call (-> ms first val) x)
              (throw* "multi match"))))})

(def mt1
  (match-table
    {(id-matchable :foo) (f* (fn [_] :foo!))
     (id-matchable :bar) (f* (fn [_] :bar!))
     (f* string?) (f* (fn [x] x))}))

(§ :get mt1 :foo)
(§ :get mt1 :bar)
(§ :get mt1 1)
(§ :get mt1 "zer")

(def simple-scope
  {:env {:yop "yop" :sub {:yop "yip" :bar "bar"}}
   :pos [:sub]
   :program [:yop]})

(defn simple-get [{:keys [env pos program]}]
  (let [sub (get-in env pos)]
    (if-let [c (get sub (first program))]
      c
      (if-let [npos (seq (next pos))]
        (simple-get {:env env :pos npos :program pr})
        ::not-found))))

(simple-get
  {:env {:yop "yop" :sub {:yop "yip" :bar "bar"}}
   :pos [:sub]
   :program [:yop]})

(defrecord F [fn arity]
  clojure.lang.IFn
  (invoke [this that]
    (F. (partial fn that) (dec arity))))

(def step1
  {:eval
   identity

   :match
   (fn [x y]
     (cond
       (keyword? x) (= x y)
       (fn? x) (x y)))

   :link
   assoc

   :swap
   (fn [x f & args] (apply f x args))

   :resolve
   (fn [x y]
     (if-let [v ((:dive x) x y)]
       v
       (throw (Exception. "cannot resolve"))))

   :call
   (fn [x m args]
     (if-let [f ((:resolve x) x m)]
       (apply f x args)
       (throw (Exception. "cannot resolve"))))

   :dive
   (fn [x y]
     (let [matches (filter (fn [[k v]] ((:match x) k y)) x)]
       (condp = (count matches)
         0 ::not-found
         1 ((-> matches first val) x y)
         (throw (Exception. "multi matches")))))})

(defn compile1 [env]
  (fn [& xs]
    (reduce
      (fn [env x]
        (if (keyword? x) (partial ((:get)))))
      env
      xs)))

(-> step1)
