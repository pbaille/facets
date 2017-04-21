(ns exp.specfn
  (:require [clojure.spec :as s]))

(s/conform (s/cat :first int? :rest (s/* int?)) (range 20))

(s/def ::yo (s/alt :kw keyword? :str string?))
(s/def ::bar keyword?)
