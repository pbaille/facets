;; DEPRECATED
;; look at exp.dispatch instead

(ns oldies.pred-dispatch)

(defn pfn
  ([opts]
   (if (vector? opts)
     (apply pfn opts)
     (merge {:pred (constantly true)
             :fn identity
             :name (gensym)}
            opts)))
  ([name pred f]
   {:pred pred :fn f :name name}))

(defn pdispatch [name & [pfns prefs]]
  {:name name
   :pfns (mapv pfn pfns)
   :prefs (or prefs [])})

(defn- pfn-idx [f pfn-name]
  (let [idx (count (take-while #(not= pfn-name (:name %)) (:pfns f)))]
    (when (> (count (:pfns f)) idx) idx)))

(defn check-prefs [f [x y]]
  (if (every? (fn [[a b]] (> (pfn-idx f b) (pfn-idx f a)))
              (:prefs f))
    f
    (throw (Exception. (str "cannot prefer " x " over " y
                            "\nprefs: " (butlast (:prefs f)))))))

(defn vinsert [v idx & vls]
  (vec (concat (subvec v 0 idx) vls (subvec v idx))))

(defn- rem-idx [v idx]
  (vec (concat (subvec v 0 idx) (subvec v (inc idx)))))

(defn prefer [f pfn1 pfn2]
  (let [i1 (pfn-idx f pfn1)
        i2 (pfn-idx f pfn2)]
    (if (> i1 i2)
      (check-prefs (-> f
                       (update :prefs conj [pfn1 pfn2])
                       (update :pfns rem-idx i2)
                       (update :pfns vinsert i1 (get-in f [:pfns i2])))
                   [pfn1 pfn2])
      f)))

(defn pd-call [f & args]
  (if-let [pfn (first (drop-while
                        #(not (apply (:pred %) args))
                        (:pfns f)))]
    (apply (:fn pfn) args)
    (throw (Exception. "no matches"))))

(def f1 (atom (pdispatch
                :yop
                [[:num? number? (constantly :num)]
                 [:int? int? (constantly :int)]
                 [:even? even? (constantly :even)]]
                [])))

(println (pd-call @f1 2))
(swap! f1 prefer :even? :num?)
(println (pd-call @f1 2))
(swap! f1 prefer :even? :int?)
(println (pd-call @f1 2))

(def xxx
  {:pre identity
   :match #(apply %1 %2)
   :xs [{:name :int :val int? :impl (constantly :int)}
        {:name :even :val even? :impl (constantly :even)}]
   :prefs []})

(defn xcall [x & args]
  (let [args ((:pre x) args)]
    (if-let [pfn (first (drop-while
                          #(not ((:match x) (:val %) args))
                          (:xs x)))]
      (apply (:impl pfn) args)
      (throw (Exception. "no matches")))))

(xcall xxx 2)


