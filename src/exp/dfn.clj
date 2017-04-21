(ns exp.dfn
  "first attempt to a dynamic function type,
   a function that can be manipulated more deeply than a regular one,
   all the steps leading to evaluation are decoupled:
   take args, do bindings, compile expr, eval
   But it is slow... calling eval on each call is really slow,
   so i've made exp.dfn2 that can compile before knowing its argument"
  (:refer-clojure :exclude [take eval compile apply]))

(alias 'c 'clojure.core)

;; ------------------------------------------------

(defn take
  "take some data to work with"
  ([f] f)
  ([f data]
   ((:take f) f data)))

(defn compile
  "link bindings to body producing an evaluable expression,
   then associate it to the :expr field"
  [{:keys [bindings bind body take] :as f}]
  (assoc f
    :expr
    `(let [~(vec (keys bindings)) ~(vec (vals bindings))]
       ~body)))

(defn eval
  "evaluate compiled dfn"
  [{:keys [eval expr] :as f}]
  (if expr
    (eval expr)
    (throw (Exception. "not yet compiled"))))

(defn bind
  "build evaluation local bindings"
  [f]
  (assoc f :bindings ((:bind f) f)))

(def call
  (comp eval compile bind take))

(defn call*
  "variadic version of call, if defined use :apply field"
  [f & args]
  ((:apply f call) f (vec args)))

(def defaults
  {:take #(assoc %1 :data %2)
   :eval c/eval
   :data nil
   :expr nil
   :bindings {}
   :bind (fn [f] {'data (:data f)})
   :body '(do data)})

(def dfn (partial merge defaults))

;; exemple ----------

(comment
  ;; default case, do nothing
  (eval (compile (bind (take (dfn) {:yop :yop})))) ;=> {:yop :yop}

  (compile (dfn))

  ;;destructuration exemple
  (def fun (dfn {:bind (destr {:pat ['a 'b]})
                 :bindings {'b 2}
                 :body '(+ a b)}))

  (c/eval (compile (bind (take fun [1 2]))))

  (call fun [1 2]) ;=> 3

  ;applied call
  (call* fun 1 2) ;=> 3
  )
