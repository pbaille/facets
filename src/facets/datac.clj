(ns facets.datac
  (:import [clojure.lang Fn MapEntry IPersistentVector IPersistentList Iterate LongRange LazySeq IPersistentMap IPersistentSet Keyword Symbol Repeat Cycle Cons])
  (:require [facets.core :as f :refer [t t? t= t> <f <fs]]))

(f/reset-all!)

;; helpers -----

(defn mentry [k v] (MapEntry. k v))

(defn eseq>
  "given an eseq x, just add ::eseq type tag and other given tags to metadata"
  [x & mtags]
  (let [tagmap (apply hash-map (mapcat #(vector % true) mtags))]
    (with-meta x (merge tagmap {:type ::eseq}))))

(defn- lazy? [eseq]
  (:lazy (meta eseq)))

(defn eseq->hm
  "convert an eseq to hashmap"
  [x]
  (reduce #(assoc %1 (key %2) (val %2)) {} x))

(defn eseq->vec
  "convert an eseq to vector"
  [x]
  (reduce
    (fn [r [k v]]
      (if (integer? k)
        (let [c (count r)]
          (if (> c k)
            (assoc r k v)
            (conj (apply conj r (take (- k c) (repeat nil))) v)))
        r))
    []
    x))

(defn eseq [x] (f/call ::eseq x))

(def eseq->seq (partial map second))

(declare §)

(defn zip-eseqs
  "zip two eseq together taking care of their potential lazyness"
  [x y]
  ;; certainly the most ugly fn of this namespace
  (let [lx (lazy? x)
        ly (lazy? y)]
    (cond
      (and lx ly) (eseq> (map #(§ (val %1) %2) x y) :lazy)
      ly (throw (Exception. "cannot zip a lazy eseq over a not lazy one"))
      lx (let [hy (into {} y)] (eseq> (map #(§ % (find hy (key %))) x) :lazy))
      :else (eseq> (seq (merge-with § (into {} x) (into {} y)))))))

(defn juxt* [xs]
  (fn [x] (mapv #(§ % x) xs)))

;; op manipulation --------------

(defn conj-op
  "if x has no op metadata assign given op to it,
  else conj given op to already present ops"
  [x op]
  (let [opx (::op (meta x))
        op (if opx (conj opx op) [op])]
    (vary-meta x assoc ::op op)))

(defn clear-op
  "clear the op metadata"
  [x]
  (vary-meta x dissoc ::op))

(declare c)

;; main ops defs ----------------

(defn §
  "simple application, base operator
  (§ inc 1) <=> (inc 1)"
  ([x] (conj-op x §))
  ([x y]
   (let [op (::op (meta x))]
     (if op
       ((apply c op) (clear-op x) y)
       (f/call ::alt y (f/call ::fn x))))))

(defn f
  "flipped application operator,
   like § but args reversed"
  ([x] (conj-op x f))
  ([x y]
   (§ y x)))

(defn $
  "distribution operator, behaves like map function but conserve context
  ($ inc [1 2]) => [2 3]"
  ([x] (conj-op x $))
  ([x y]
   (f/call ::build y (map (partial § x) (f/call ::eseq y)))))

(defn &
  "zipping operator
  (& [inc dec] [0 0]) => [1 -1]"
  ([x] (conj-op x &))
  ([x y]
   (f/call ::build y (zip-eseqs (f/call ::eseq x) (f/call ::eseq y)))))

(defn ◊
  "wrapping operator
   a bit like (into (empty x) y)
  (◊ [] (list 1 2)) => [1 2]
  (◊ [12 13 14] (list 1 2)) => [1 2]"
  ([x] (conj-op x ◊))
  ([x y]
   (f/call ::build x (f/call ::eseq y))))

(defn <<
  "slurp operator, a bit like merge function
  (<< [] (list 1 2)) => [1 2]
  (<< [12 13 14] (list 1 2)) => [1 2 14]"
  ([x] (conj-op x <<))
  ([x y]
   (f/call ::build x (eseq> (concat (f/call ::eseq x) (f/call ::eseq y))))))

(defn o
  "zero operator, return this context without any content"
  [x] (f/call ::zero x))

(defn v
  "get the value of x,
   for most types it just return x
   can be used as a realisation operation, kind of like deref"
  [x] (f/call ::val x))

;; extend natives -----------------

(f/declare-type ::eseq)

(f/declare-aliases
  {nil ::nil
   Fn ::fn
   Number ::num
   String ::string
   Keyword ::kw
   Symbol ::sym
   MapEntry ::mentry
   IPersistentVector ::vec
   IPersistentMap ::map
   IPersistentList ::list
   IPersistentSet ::set
   Repeat ::lazy
   Cycle ::lazy
   LazySeq ::lazy
   Cons ::lazy
   Iterate ::lazy
   LongRange ::lazy})

(f/prefer ::mentry ::vec)

(f/declare-facets
  {::fn
   {::nil (fn [_] identity)
    ::fn (fn [x] (fn [y] (x y)))
    ::mentry (fn [x] (fn [y] (mentry (key x) (§ (val x) y))))
    ::vec (fn [x] (fn [y] ((juxt* x) y)))
    ::map (fn [x] (fn [y] (into {} (map #(§ % y) x))))
    ::set (fn [x] (fn [y] (set ((juxt* x) y))))
    ::list (fn [x] (fn [y] (apply list ((juxt* x) y))))
    ::lazy (fn [x] (fn [y] (map #(§ % y) x)))
    f/any (fn [x] (constantly x))}

   ::zero
   {::eseq (fn [_] (eseq> ()))
    ::fn (fn [_] identity)
    ::num (fn [_] 0)
    ::string (fn [_] "")
    ::kw (fn [_] (keyword ""))
    ::sym (fn [_] (symbol ""))
    ::mentry (fn [x] (mentry (key x) nil))
    ::vec (fn [_] [])
    ::map (fn [_] {})
    ::set (fn [_] #{})
    ::list (fn [_] ())
    ::lazy (fn [_] (lazy-seq))
    f/any identity}

   ::val
   {::mentry val
    f/any identity}

   ::alt
   {::nil (constantly nil)
    ::mentry (fn [x f] (mentry (key x) (§ f (val x))))
    f/any (fn [x f] (f x))}

   ::eseq
   {::nil (fn [_] (eseq> ()))
    ::eseq identity
    ::mentry #(eseq> (list %))
    ::vec #(eseq> (map-indexed mentry %))
    ::map #(eseq> (map identity %))
    ::set #(eseq> (map-indexed mentry %))
    ::list #(eseq> (map-indexed mentry %))
    ::lazy #(eseq> (map-indexed mentry %) :lazy)
    f/any #(eseq> (list (mentry 0 %)))}

   ::build
   {::nil (constantly nil)
    ::eseq identity
    ::mentry (fn [x y] (find (into {} y) (key x)))
    ::vec (fn [_ x] (eseq->vec x))
    ::map (fn [_ x] (eseq->hm x))
    ::set (fn [_ x] (set (map second x)))
    ::list (fn [_ x] (apply list (map second x)))
    ::lazy (fn [_ x] (map second x))
    f/any (fn [_ y] (get (into {} y) 0))}})

;; composition operator --------------

(defn c
  "compose several operators together, handy to operate on nested structures
  (= ((c $ $) [inc dec] [[1 2] [3 4]])
     [[[2 0] [3 1]] [[4 2] [5 3]]])"
  [op & ops]
  (fn [x y]
    (if (seq ops)
      (cond
        (= op &) (& ($ #(partial (apply c ops) %) x) y)
        (= op f) (§ (partial (apply c ops) y) x)
        :else (op (partial (apply c ops) x) y))
      (op x y))))

(def f$ (c f $)) (def && (c & &)) (def $$ (c $ $)) (def §& (c § &))
(def f& (c f &)) (def &$ (c & $)) (def $& (c $ &)) (def §$ (c § $))
(def ff (c f f)) (def &f (c & f)) (def $f (c $ f)) (def §f (c § f))

;; extras types -----------------------

(defn !
  "make a data always return itself when applied to anything"
  [x]
  (f/reify x
           {::fn (fn [x] (constantly x))}))


(defn- seq-type-base [f]
  {::eseq (fn [x] (eseq (list x)))
   ::build (fn [_ y] (-> y eseq->seq f))})

(defn s> [x] (t> ::stack x))

(f/declare-type ::stack
                (assoc (seq-type-base s>)
                  ::fn (fn [x] #(reduce f % x))
                  ::alt (fn [x y] (s> (conj (vec x) y)))))


(defn r> [x] (t> ::reductions x))

(f/declare-type ::reductions
                (assoc (seq-type-base r>)
                  ::fn (fn [x] #(reductions f % x))
                  ::alt (fn [x y] (s> [x y]))))


(defn cr> [x] (t> ::cyclic-reductions x))

(f/declare-type ::cyclic-reductions
                (assoc (seq-type-base cr>)
                  ::fn (fn [x] #(reductions f % (cycle x)))
                  ::alt (fn [x y] (s> [x y]))))

