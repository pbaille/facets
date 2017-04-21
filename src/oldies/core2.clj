(ns facets.core2
  (:require [com.rpl.specter :as s]
            [clojure.spec :as cs])
  (:import (clojure.lang IFn)))

(defn pred [x]
  (cond
    (fn? x) x
    (vector? x) #(every? (fn [p] (p %)) (flatten x))
    (instance? IFn x) x))

(defrecord PCheck [path pred]
  IFn
  (invoke [x v] (every? pred (s/select path v))))

(defrecord SType [closes]
  IFn
  (invoke [x v] (every? #(% v) closes)))

(defn st [& xs]
  (SType.
    (reduce
      (fn [acc el]
        (cond
          (map? el) (vec (concat acc (:closes (apply st el))))
          (fn? el) (conj acc (PCheck. [] el))
          (vector? el) (conj acc (PCheck. (first el) (pred (second el))))
          :else (throw (Exception. "Boo!"))))
      []
      xs)))

(def st1 (st {:a int? [:b :c] [string? (partial = "aze")]}
             map?
             [:a (partial = 1)]
             [[:a] [(partial = 1) int?]]))

(st1 {:a 1 :b {:c "aze"}})

(cs/conform int? "aze")

(cs/form
  (cs/or :name string?
         :id int?))

(merge #::{:bar 1} #:baz{:qux "foo"})

;; base --------------------

(defprotocol IFun
  (-fun [x]))

(defmulti fun-multi #(:type (meta %)))

(def sd-fun (SpecDispatcher.
              :sd
              {int? (fn [x] :int-case)
               even? (fn [x] :even-case)
               ident? (fn [x] :ident-case)
               keyword? (fn [x] :kw-case)}
              {even? #{int?}}))

;; impls -------------------

(extend-protocol IFun
  String
  (-fun [x] :str-fun))

(defmethod fun-multi :foo [x] :foo-fun)
(defmethod fun-multi :default [x] (sd-fun x))

(defn fun [x]
  (if (satisfies? IFun x)
    (-fun x)
    (fun-multi x)))

;; tests -------------------

(comment
  (fun "zer")
  (fun (with-meta [] {:type :foo}))
  (fun 1))

;---------------------------------------------------------------------------

(defprotocol IFacet
  (-prefer [_ _ _])
  (-reg-impl [_ _ _]))

(defn choose-impl [])

(defrecord Facet [name static-impls dyn-impls prefs]
  IFn
  (invoke [_ that]
    ()))

(defrecord Dispatcher [fns tags])


