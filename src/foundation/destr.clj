(ns foundation.destr
  "an extensible implementation of destructuring"
  (:require [com.rpl.specter :as s]
            [foundation.maps :as f :refer [§]]
            [foundation.dispatch :as d]))

(declare destr)

(def builtin-cmds
  {:as
   (fn [[_ s] seed] [s seed])

   :keys
   (fn [[k syms] seed]
     (let [ns* (namespace k)]
       (reduce (fn [ret sym]
                 (conj ret sym `(get ~seed ~(keyword ns* (name sym)))))
               []
               syms)))

   :syms
   (fn [[k syms] seed]
     (let [ns* (namespace k)]
       (reduce (fn [ret sym]
                 (conj ret sym `(get ~seed ~(symbol ns* (name sym)))))
               []
               syms)))

   :strs
   (fn [[_ syms] seed]
     (reduce (fn [ret sym]
               (conj ret sym `(get ~seed ~(name sym))))
             []
             syms))

   :get
   (fn [[_ k sym] seed] [sym `(get ~seed ~k)])

   :pick
   (fn [[_ pat f] seed] (destr pat `(~f ~seed)))

   :picks
   (fn [[_ m] seed]
     (reduce
       (fn [acc [pat f]]
         (into acc (destr [:pick pat f] seed)))
       []
       m))

   :zip
   (fn [[_ & xs] seed]
     (reduce
       (fn [acc [idx pat]]
         (into acc (destr pat `(get ~seed ~idx))))
       []
       (map-indexed vector xs)))

   :zip&
   (fn [[_ & xs] seed]
     (vec (concat (destr (into [:zip] (butlast xs)) seed)
                  (destr (last xs) `(drop ~(dec (count xs)) ~seed)))))

   :or
   (fn [[_ m] seed]
     (reduce
       (fn [acc [k v]]
         (conj acc k `(or ~k ~v)))
       []
       m))

   :sf
   (fn [[_ pat s] seed]
     (destr [:pick pat #(first (s/select % s))]
            seed))})

(def cmds-dispatcher
  (atom
    (d/dispatcher
      {:conform #(-> % first name keyword)
       :table builtin-cmds})))

(defn do-cmd [cmd seed]
  (println (§ ::f/dispatch @cmds-dispatcher cmd))
  ((§ ::d/dispatch @cmds-dispatcher cmd) cmd seed))

;; extension -------------------------------------------------

(defprotocol IDestructure
  (-destr [this that]))

(defn declare-cmd [k f]
  (swap! cmds-dispatcher update :table assoc k f))

(defn dissoc-cmd [k]
  (swap! cmds-dispatcher update :table dissoc k))

;; api -------------------------------------------------------

(defn destr [pat seed]
  (cond

    (satisfies? IDestructure pat) (-destr pat seed)

    (symbol? pat) [pat seed]

    (map? pat)
    (reduce
      (fn [acc [pat getter-or-arg]]
        (if (keyword? pat)
          (into acc (destr [pat getter-or-arg] seed))
          (into acc (destr pat (list getter-or-arg seed)))))
      []
      ;; just put :or cmd at the end...
      (sort-by #(= :or (key %)) pat))

    (vector? pat)
    (if (keyword? (first pat))
      (do-cmd pat seed)
      (reduce into [] (map #(destr % seed) pat)))))

(comment
  (destr 'a 'seed)
  (destr '[:keys [b a]] 'seed)
  (destr '[::keys [b a]] 'seed)
  (destr '[:syms [b a]] 'seed)
  (destr '[::syms [b a]] 'seed)
  (destr '[:strs [b a]] 'seed)
  (destr '[:zip a b] 'seed)
  (destr '[:zip [:keys [b c]] a] 'seed)
  (destr '[:zip& [:keys [b c]] a [:keys [d e]]] 'seed)
  (destr '[:or {a 10 b 11}] 'seed)
  (destr '[:sf a [:a :b :c]] 'seed)
  (destr '{a :a b :b c :c :as t :or {a 10 c 12}} 'seed)
  (destr '[[:sf blob [:a :b :c]] [:as yop] [:keys [a e f]]] 'seed))
