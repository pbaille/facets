(ns facets.datac
  (:import [clojure.lang Fn MapEntry IPersistentVector IPersistentList Iterate LongRange LazySeq IPersistentMap IPersistentSet Keyword Symbol Repeat Cycle Cons])
  (:require [facets.core :as f :refer [t t? t= t> <f <fs]]))

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

(declare §)

(defn eseq [x] (<f ::eseq x))

(def eseq->seq (partial map second))

(defn zip-eseqs
  "zip two eseq together taking care of their potential lazyness"
  [x y]
  ; is there a way to avoid this crap?
  ; TODO issus here when one of the two being lazy and not the other
  (let [lx (lazy? x)
        ly (lazy? y)]
    (cond
      (and lx ly) (eseq> (map #(§ (val %1) %2) x y) :lazy)
      ly (throw (Exception. "cannot zip a lazy eseq over a not lazy one"))
      lx (let [hy (into {} y)] (eseq> (map #(§ % (find hy (key %))) x) :lazy))
      :else (eseq> (seq (merge-with § (into {} x) (into {} y)))))))

(defn juxt*
  "potential bug here, § function takes only two args"
  [& args]
  (fn [& xs] (mapv #(apply § % xs) args)))

;; facets

(defn declare-facets [m]
  (doseq [[kw impl-map] m]
    (f/declare-facet kw impl-map)))

(declare-facets
  {::fn {f/any #(constantly %)}
   ::zero {f/any identity}
   ::val {f/any identity}
   ::alt {f/any (fn [x f] (f x))}
   ::eseq {f/any #(eseq> (list (mentry 0 %)))}
   ::build {f/any (fn [_ y] (get (into {} y) 0))}})

(defn conj-op
  "if x has no op metadata assign given op to it,
  else conj given op to already present ops"
  [x op]
  (let [opx (:op (meta x))
        op (if opx (conj opx op) [op])]
    (vary-meta x assoc :op op)))

(defn clear-op
  "clear the op metadata"
  [x]
  (vary-meta x dissoc :op))

(declare c)

(defn §
  "simple application, base operator
  (§ inc 1) <=> (inc 1)"
  ([x] (conj-op x §))
  ([x y]
   (let [op (:op (meta x))]
     (if op
       ((apply c op) (clear-op x) y)
       (f/§ ::alt y (f/§ ::fn x))))))

(defn f [g] (fn [a b] (g b a)))

(defn $
  "distribution operator, behaves like map function but conserve context
  ($ inc [1 2]) => [2 3]"
  ([x] (conj-op x $))
  ([x y]
   (f/§ ::build y (map (partial § x) (f/§ ::eseq y)))))

(defn &
  "zipping operator
  (& [inc dec] [0 0]) => [1 -1]"
  ([x] (conj-op x &))
  ([x y]
   (f/§ ::build y (zip-eseqs (f/§ ::eseq x) (f/§ ::eseq y)))))

(defn ◊
  "wrapping operator
  (◊ [] (list 1 2)) => [1 2]
  (◊ [12 13 14] (list 1 2)) => [1 2]"
  ([x] (conj-op x ◊))
  ([x y]
   (f/§ ::build x (f/§ ::eseq y))))

(defn <<
  "slurp operator, a bit like merge function
  (<< [] (list 1 2)) => [1 2]
  (<< [12 13 14] (list 1 2)) => [1 2 14]"
  ([x] (conj-op x <<))
  ([x y]
   (f/§ ::build x (eseq> (concat (f/§ ::eseq x) (f/§ ::eseq y))))))

(defn o
  "zero operator, return this context without any content"
  [x] (f/§ ::zero x))

(defn v
  "get the value of x"
  [x] (f/§ ::val x))

;; extend natives

(f/declare-alias nil ::nil)
(f/declare-alias Fn ::fn)
(f/declare-alias Number ::num)
(f/declare-alias String ::string)
(f/declare-alias Keyword ::kw)
(f/declare-alias Symbol ::sym)
(f/declare-alias MapEntry ::mentry)
(f/declare-alias IPersistentVector ::vec)
(f/declare-alias IPersistentMap ::map)
(f/declare-alias IPersistentList ::set)

(f/extend-facet ::fn
                {::nil (fn [_ x] x)
                 ::fn identity
                 ::mentry (fn [x y] (mentry (key x) (§ (val x) y)))
                 ::vec (fn [x y] ((apply juxt* x) y))
                 ::map (fn [x y] (into {} (map #(§ % y) x)))
                 ::set (fn [x y] (set ((apply juxt* x) y)))
                 ::list (fn [x y] (apply list ((apply juxt* x) y)))
                 ::lazy (fn [x y] (map #(§ % y) x))})

(f/extend-facet ::zero
                {::eseq (fn [_] (eseq> ()))
                 ::fn (fn [_] identity)
                 ::number (fn [_] 0)
                 ::string (fn [_] "")
                 ::kw (fn [_] (keyword ""))
                 ::sym (fn [_] (symbol ""))
                 ::mentry (fn [x] (mentry (key x) nil))
                 ::vec (fn [_] [])
                 ::map (fn [_] {})
                 ::set (fn [_] #{})
                 ::list (fn [_] ())
                 ::lazy (fn [_] (lazy-seq))})

(f/extend-facet ::val {::mentry val})

(f/extend-facet ::alt
                {::nil (constantly nil)
                 ::mentry (fn [x f] (mentry (key x) (§ f (val x))))})

(f/extend-facet ::eseq
                {::nil (fn [_] (eseq> ()))
                 ::eseq identity
                 ::mentry #(eseq> (list %))
                 ::vec #(eseq> (map-indexed mentry %))
                 ::map #(eseq> (map identity %))
                 ::set #(eseq> (map-indexed mentry %))
                 ::list #(eseq> (map-indexed mentry %))
                 ::lazy #(eseq> (map-indexed mentry %) :lazy)})

(f/extend-facet ::build
                {::nil (constantly nil)
                 ::eseq identity
                 ::mentry (fn [x y] (find (into {} y) (key x)))
                 ::eseq (fn [_ x] (eseq->vec x))
                 ::map (fn [_ x] (eseq->hm x))
                 ::set (fn [_ x] (set (map second x)))
                 ::list (fn [_ x] (apply list (map second x)))
                 ::lazy (fn [_ x] (map second x))})




