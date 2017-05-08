(ns nemesis.dfn
  "followup of exp.dfn
   this function type can compile before knowing its arg,
   so only a changing in the binding-form or body forces you to recompile"
  (:refer-clojure :exclude [take compile])
  (:require [nemesis.destr :as d]
            [nemesis.maps :as f :refer [§]]))

;; ------------------------------------------------

(defn build-expr
  "make an evaluable fn form from this"
  [{::keys [binding-form body]}]
  `(fn ~'call*
     ([~'this]
       (let ~(d/destr binding-form (list ::args 'this))
         ~body))
     ([~'this ~'data]
       (~'call* (apply § ::f/into ~'this ~'data)))))

(defn compile
  "make f callable,
   have to recompile each time you alter binding-form or body
   you should not have to do this manually since it's part of dfn's swap implementation"
  [this]
  (assoc this
    ::f/call
    (clojure.core/eval (build-expr this))))

(defn re-compile?
  "check if dfn object needs to compile,
   used in swap implementation"
  [old new]
  (not= (select-keys old [::body ::binding-form])
        (select-keys new [::body ::binding-form])))

(defn swap*
  "swap implementation of dfn object"
  [this f & args]
  (let [ret (apply f this args)]
    (if (re-compile? this ret)
      (compile ret)
      ret)))

(def dfn0
  #::{:bind #(assoc %1 ::args %2)
      :args []
      ::f/into #(§ ::f/update %1 ::args conj %&)
      ::f/swap swap*
      ::f/apply #(§ ::f/call %1 (§ ::bind %1 (vec %&)))
      :binding-form 'args
      :body '(do args)})

(def dfn
  (f/map-constructor
    dfn0
    {:init compile}))

;; exemple ----------

(comment
  (f/§> (dfn {:binding-form '[:keys [a b c]]
              :body '(+ a b c)})
        (::f/swap assoc ::body '(* a b c))
        (::bind {:a 1 :b 2 :c 4})
        ::f/call))

