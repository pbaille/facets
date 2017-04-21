(ns facets.core-test
  (:require #?(:cljs [cljs.test :as t :refer-macros [is are deftest testing]]
               :clj [clojure.test :as t :refer [is are deftest testing] :include-macros true])
                    [facets.core :as f :refer [t t? t=]]))

(def e #?(:cljs js/Error
          :clj  Exception))

(testing "simple types"

  (is (= (t (t ::foo []))
         ::foo))

  (is (t? ::foo (t ::foo [])))

  (is (t= (t ::foo [])
          (t ::foo ())
          (t ::foo #{}))))

(f/reset-all!)
(f/declare-type ::foo)
(f/declare-facet ::f1)
(f/declare-facet ::f2)

(f/declare-alias #?(:cljs PersistentVector
                    :clj  clojure.lang.PersistentVector)
                 ::vec)

(f/declare-alias #?(:cljs IMeta
                    :clj  clojure.lang.IObj)
                 ::obj)

(f/extend-type ::foo {::f1 (fn [x] :f1-foo)})

(f/extend-facet ::f1 {::vec (fn [x] :f1-vec)})
(f/extend-facet ::f2 {::vec (fn [x] :f2-vec)
                      ::obj (fn [x] :f2-obj)})

(f/prefer ::vec ::obj)

(testing "declare-type"

  (is (thrown? e (f/declare-type :foo))
      "use namespaced kw")

  (is (f/known-type? ::foo)
      "registration has occured")

  (is (thrown? e (f/declare-type ::foo))
      "can't declare already existing type")

  )

(testing "declare-facet"

  (is (thrown? e (f/declare-facet :f1))
      "use namespaced kw")

  (is (::f1 @f/facets)
      "registration has occured")

  (is (thrown? e (f/declare-facet ::f1))
      "can't declare already existing facet")

  )

(testing "extend-type"

  (is (thrown? e (f/extend-type ::bar {::f1 (fn [x] :f1-foo)}))
      "cannot extend unregistered type")

  (is (thrown? e (f/extend-type ::foo {::f3 (fn [x] :f1-foo)}))
      "cannot implement unregistered facet"))

(testing "extend-facet"

  (is (thrown? e (f/extend-facet ::f3 {::foo (fn [x] :f1-foo)}))
      "cannot extend unregistered facet")

  (is (thrown? e (f/extend-facet ::f1 {::bar (fn [x] :f1-foo)}))
      "cannot implement facet for unregistered type"))

(testing "aliases"
  (is (and (t? ::obj #{})
           (t? ::vec []))
      "alias is properly registered")

  (is (= :f1-vec (f/call ::f1 []))
      "alias is used for dispatch"))

(testing "prefer"
  (is (= :f2-vec (f/call ::f2 [])))
  (is (= :f2-obj (f/call ::f2 #{}))))




