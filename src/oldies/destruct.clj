(ns oldies.destruct
  "deprecated see exp.destr instead"
  (:refer-clojure :exclude [destructure]))

(defprotocol IDestructure
  (-destructure [this data]))

(extend-protocol IDestructure

  clojure.lang.PersistentVector
  (-destructure [this data]
    (let [gvec (gensym "vec")
          gseq (gensym "seq")
          gfirst (gensym "first")
          has-rest (some #{'&} this)]
      (loop [ret (let [ret [gvec data]]
                   (if has-rest
                     (conj ret gseq (list `seq gvec))
                     ret))
             n 0
             bs this
             seen-rest? false]
        (if-let [firstb (first (seq bs))]
          (condp = firstb
            '& (recur (into ret (-destructure (second bs) gseq))
                      n
                      (nnext bs)
                      true)
            :as (into ret (-destructure (second bs) gvec))
            (if seen-rest?
              (throw (new Exception "Unsupported binding form, only :as can follow & parameter"))
              (recur (into (if has-rest
                             (conj ret
                                   gfirst `(first ~gseq)
                                   gseq `(next ~gseq))
                             ret)
                           (-destructure firstb
                                         (if has-rest
                                           gfirst
                                           (list `nth gvec n nil))))
                     (inc n)
                     (next bs)
                     seen-rest?)))
          ret))))

  clojure.lang.PersistentArrayMap
  (-destructure [this data]
    (let [gmap (gensym "map")
          gmapseq (with-meta gmap {:tag 'clojure.lang.ISeq})
          defaults (:or this {})
          as (:as this)]
      (loop [ret (let [ret [gmap `(if-let [v# (seq? ~data)] (clojure.lang.PersistentHashMap/create v#) ~data)]]
                   (if as
                     (conj ret as gmap)
                     ret))
             bes (let [transforms
                       (reduce
                         (fn [transforms mk]
                           (if (keyword? mk)
                             (let [mkns (namespace mk)
                                   mkn (name mk)]
                               (condp = mkn
                                 "keys" (assoc transforms mk #(keyword (or mkns (namespace %)) (name %)))
                                 "syms" (assoc transforms mk #(list `quote (symbol (or mkns (namespace %)) (name %))))
                                 "strs" (assoc transforms mk str)
                                 transforms))
                             transforms))
                         {}
                         (keys this))]
                   (reduce
                     (fn [bes entry]
                       (reduce #(assoc %1 %2 ((val entry) %2))
                               (dissoc bes (key entry))
                               ((key entry) bes)))
                     (dissoc this :as :or)
                     transforms))]
        (if (seq bes)
          (let [bb (key (first bes))
                bk (val (first bes))
                local (if (instance? clojure.lang.Named bb) (with-meta (symbol nil (name bb)) (meta bb)) bb)
                bv (list `get gmap bk (defaults local))]
            (recur (if (ident? bb)
                     (conj ret local bv)
                     (into ret (-destructure bb bv)))
                   (next bes)))
          ret))))

  clojure.lang.Symbol
  (-destructure [this data]
    [this data]))

(defn destructure
  ([bindings]
    (apply destructure bindings))
  ([this data]
   (if (satisfies? IDestructure this)
     (-destructure this data)
     (throw (Exception. (str this " doesn't implement IDestructure")))))
  ([this data & nxts]
   (into (destructure this data)
         (destructure nxts))))

(defmacro bind
  "same as let but use IDestructure protocol"
  {:added "1.0", :special-form true, :forms '[(let [bindings*] exprs*)]}
  [bindings & body]
  (assert (vector? bindings) "a vector for its binding")
  (assert (even? (count bindings)) "an even number of forms in binding vector")
  `(let* ~(destructure bindings) ~@body))

(defn- maybe-destructured
  "copied from core, slightly modified"
  [params body]
  (if (every? symbol? params)
    (cons params body)
    (loop [params params
           new-params (with-meta [] (meta params))
           lets []]
      (if params
        (if (symbol? (first params))
          (recur (next params) (conj new-params (first params)) lets)
          (let [gparam (gensym "p__")]
            (recur (next params) (conj new-params gparam)
                   (-> lets (conj (first params)) (conj gparam)))))
        `(~new-params
           (bind ~lets
             ~@body))))))

(defmacro bfn
  "same as fn but use IDestructure protocol"
  {:added "1.0", :special-form true,
   :forms '[(fn name? [params* ] exprs*) (fn name? ([params* ] exprs*)+)]}
  [& sigs]
  (let [name (if (symbol? (first sigs)) (first sigs) nil)
        sigs (if name (next sigs) sigs)
        sigs (if (vector? (first sigs))
               (list sigs)
               (if (seq? (first sigs))
                 sigs
                 ;; Assume single arity syntax
                 (throw (IllegalArgumentException.
                          (if (seq sigs)
                            (str "Parameter declaration "
                                 (first sigs)
                                 " should be a vector")
                            (str "Parameter declaration missing"))))))
        psig (fn* [sig]
               ;; Ensure correct type before destructuring sig
               (when (not (seq? sig))
                 (throw (IllegalArgumentException.
                          (str "Invalid signature " sig
                               " should be a list"))))
               (let [[params & body] sig
                     _ (when (not (vector? params))
                         (throw (IllegalArgumentException.
                                  (if (seq? (first sigs))
                                    (str "Parameter declaration " params
                                         " should be a vector")
                                    (str "Invalid signature " sig
                                         " should be a list")))))
                     conds (when (and (next body) (map? (first body)))
                             (first body))
                     body (if conds (next body) body)
                     conds (or conds (meta params))
                     pre (:pre conds)
                     post (:post conds)
                     body (if post
                            `((let [~'% ~(if (< 1 (count body))
                                           `(do ~@body)
                                           (first body))]
                                ~@(map (fn* [c] `(assert ~c)) post)
                                ~'%))
                            body)
                     body (if pre
                            (concat (map (fn* [c] `(assert ~c)) pre)
                                    body)
                            body)]
                 (maybe-destructured params body)))
        new-sigs (map psig sigs)]
    (with-meta
      (if name
        (list* 'fn* name new-sigs)
        (cons 'fn* new-sigs))
      (meta &form))))

(defmacro bloop
  "same as loop but use IDestructure protocol"
  {:added "1.0", :special-form true, :forms '[(bloop [bindings*] exprs*)]}
  [bindings & body]

  (assert (vector? bindings) "a vector for its binding")
  (assert (even? (count bindings)) "an even number of forms in binding vector")

  (let [db (destructure bindings)]
    (if (= db bindings)
      `(loop* ~bindings ~@body)
      (let [vs (take-nth 2 (drop 1 bindings))
            bs (take-nth 2 bindings)
            gs (map (fn [b] (if (symbol? b) b (gensym))) bs)
            bfs (reduce (fn [ret [b v g]]
                           (if (symbol? b)
                             (conj ret g v)
                             (conj ret g v b g)))
                         [] (map vector bs vs gs))]
        `(let ~bfs
           (loop* ~(vec (interleave gs gs))
             (bind ~(vec (interleave bs gs))
               ~@body)))))))

(comment
  (-destructure 'a 1)
  (-destructure '[a b & d :as c] [1 2])
  (-destructure '{a :a} {:a 1})
  (eval
    `(let ~(-destructure '{a :a [c d & e :as b] :b :as all}
                         {:a 1 :b [2 3 4 5]})
       [~'a ~'b ~'c ~'d ~'e ~'all]))

  (bind [{a :a} {:a [1]} [& r :as b] a] b)
  ((bfn [{a :a}] a) {:a 1})
  (bloop [{a :a} {:a 1}] a))
