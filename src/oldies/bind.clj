(ns oldies.bind
  (:require [com.rpl.specter :as s])
  (:import [clojure.lang PersistentVector PersistentArrayMap Symbol Keyword MapEntry]))

(defprotocol IBind
  "a protocol for objects that can produce a binding-map of type {Symbol Value}"
  (-bind [this data]))

(defn bind-cmd [[k arg] data]
  ())

(defrecord Cmd [key arg])

(defmulti bind-cmd (fn [[k _] _] (-> k name keyword)))

(defmethod bind-cmd :as [[_ a] data]
  (-bind a data))

(defmethod bind-cmd :or [[_ m] data]
  ;; TODO conjed strategy
  m)

(defmethod bind-cmd :keys [[k syms] data]
  (let [ns* (namespace k)]
    (reduce (fn [ret sym]
              (assoc ret sym (get data (keyword ns* (name sym)))))
            {}
            syms)))

(defmethod bind-cmd :syms [[k syms] data]
  (let [ns* (namespace k)]
    (reduce (fn [ret sym]
              (assoc ret sym (get data (symbol ns* (name sym)))))
            {}
            syms)))

(defmethod bind-cmd :strs [[_ syms] data]
  (reduce (fn [ret sym]
            (assoc ret sym (get data (name sym))))
          {}
          syms))

(defmethod bind-cmd :zip [[_ {:keys [xs &]}] data]
  (let [c (count xs)]
    (reduce conj
            {& (drop c data)}
            (map -bind xs data))))

(defmethod bind-cmd :get [[_ m] data]
  (reduce
    (fn [ret [pat k]]
      (into ret (-bind pat (get data k))))
    {}
    m))

(defmethod bind-cmd :pick [[_ m] data]
  (reduce
    (fn [ret [pat f]]
      (into ret (-bind pat (f data))))
    {}
    m))

(defmethod bind-cmd :in [[_ m] data]
  (bind-cmd [:pick
             (into {} (map (fn [[k v]] [k #(first (s/select v %))]) m))]
            data))

(defmethod bind-cmd :in* [[_ m] data]
  (bind-cmd [:pick
             (into {} (map (fn [[k v]] [k #(s/select v %)]) m))]
            data))

(defmethod bind-cmd :vec [[_ v] data]
  (loop [ret {}
         [fv sv & rv :as v] v]
    (cond
      (not fv) ret
      (keyword? fv) (recur (into ret (bind-cmd [fv sv] data)) rv)
      :else
      (let [xs (take-while (comp not keyword?) v)
            rv (drop-while (comp not keyword?) v)
            rst (second (drop-while (partial not= '&) xs))
            xs (take-while (partial not= '&) xs)]
        (recur
          (into ret (bind-cmd [:zip {:xs xs :& rst}] data))
          rv)))))

(comment
  (bind-cmd '[:vec [x y & z :as all :keys [a b] :in {e [:c :d :e]}]]
            {:a 1 :b 2 :c {:d {:e 3}}}))

(extend-protocol IBind
  PersistentVector
  (-bind [this data]
    (bind-cmd [:vec this] data))

  PersistentArrayMap
  (-bind [this data]
    (let [defaults (:or this {})])
    (reduce
      (fn [ret [kb vb]]
        (cond
          (symbol? kb) (assoc ret kb (get data vb))
          (keyword? kb) (let [ns* (namespace kb)
                              name* (name kb)]
                          (condp = name*
                            "keys" (reduce (fn [ret x] (assoc ret x (get data (keyword ns* (name x))))) ret vb)
                            "syms" (reduce (fn [ret x] (assoc ret x (get data (symbol ns* (name x))))) ret vb)
                            "strs" (reduce (fn [ret x] (assoc ret x (get data x))) ret vb)))))
      {}
      this))

  MapEntry
  (-bind [this data]
    )

  Symbol
  (-bind [this data]
    {this data})

  Cmd
  (-bind [this data]
    (bind-cmd this data)))

(comment
  (-bind 'a 1)
  (-bind '[a b c & xs :as v] [1 2 3 4])
  (-bind '{a :a [b c] :b} [1 2 3 4])

  (destructure '[[a b c :as [d e f :as [g h i]]] [1 2 3]]))

#_(let [{"strs" [yop] ::keys [bob]} {"yop" 1 ::bob 2}] [bob yop])