(ns exp.comb
  (:require [exp.futils :as u]
            [exp.type :as t :refer [t]]
            [exp.dispatch :as d]))

(-> (d/dispatcher
      {:conform (partial mapv t)
       :table {[:foo :bar] :foobar
               [:bar :foo] :barfoo
               [:foo :baz] :foobaz}})
    (d/dispatch [{:type :foo}{:type :bar}]))

(-> (d/dispatcher
      {:conform (partial mapv (juxt t identity))
       :match (fn [[pat1 pat2] [[t1 v1] [t2 v2]]]
                (and (if (fn? pat1) (pat1 v1) (= pat1 t1))
                     (if (fn? pat2) (pat2 v2) (= pat2 t2))))
       :table {[:foo :bar] :foobar
               [:bar :foo] :barfoo
               [:foo :baz] :foobaz
               [string? :foo] :strfoo
               [keyword? :bar] :kwbar
               [ident? ident?] :idid}})
    (d/dispatch
      #_[{:type :foo}{:type :bar}]
      #_[{:type :foo}{:type :bar}]
      #_["yop" {:type :foo}]
      ['yop :bob]))

(time (dotimes [_ 1000] (+ 1 1)))