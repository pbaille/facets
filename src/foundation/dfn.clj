(ns foundation.dfn
  "followup of exp.dfn
   this function type can compile before knowing its arg,
   so only a changing in the binding-form or body forces you to recompile"
  (:refer-clojure :exclude [take compile])
  (:require [foundation.destr :as d]))

;; ------------------------------------------------

(defn take
  "take some data to work with,
   by default just assoc data into f under the :data key"
  ([f] f)
  ([f data]
   ((:take f) f data)))

(defn compile
  "make f callable,
   have to recompile each time you alter binding-form, body or take"
  [{:keys [destructure binding-form bind body take data] :as f}]
  (assoc f
    :call
    (clojure.core/eval
      `(fn ~'call*
         ([~'this]
           (let ~(if destructure
                   (destructure (list :data 'this))
                   (d/destr binding-form (list :data 'this)))
             ~body))
         ([~'this ~'data]
           (~'call* (take ~'this ~'data)))))))

(defn call
  ([f]
   (if-let [c (:call f)]
     (c f)
     (call (compile f))))
  ([f data]
   (call (take f data))))

(def defaults
  {:take #(assoc %1 :data %2)
   :data nil
   :binding-form 'data
   :body '(do data)})

(def dfn (partial merge defaults))

;; utils -------------

(defn dswap
  "little helpers to swap data field"
  [f & args]
  (apply update f :data args))

;; exemple ----------

(comment
  (call (dfn {:binding-form '[:keys [a b c]]
              :body '(+ a b c)})
        {:a 1 :b 2 :c 3}))

