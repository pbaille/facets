(ns facets.datac-test
  (:require [clojure.test :refer :all]
            [facets.datac :refer :all]))


(testing "§"
         (is (= (§ nil 1) 1))
         (is (= (§ :pouet nil) nil))
         (is (= (§ inc (mentry :a 1)) (mentry :a 2)))
         (is (= (§ inc 1) 2))
         (is (= (§ (mentry :a inc) 2) (mentry :a 3)))
         (is (= (§ (mentry :a 1) 2) (mentry :a 1)))
         (is (= (§ (mentry :a (mentry :b inc)) 2) (mentry :a (mentry :b 3))))
         (is (= (§ 42 2) 42))
         (is (= (§ 42 (mentry :a 1)) (mentry :a 42)))
         (is (= (§ [inc dec] 1) [2 0]))
         (is (= (§ [inc dec] (mentry :a 1)) (mentry :a [2 0])))
         (is (= (§ {:a inc :b dec} 2) {:a 3, :b 1}))
         (is (= (§ #{inc dec} 0) #{1 -1}))
         (is (= (§ (list inc dec) 0) (list 1 -1)))
         (is (= (§ (list [inc dec] [dec inc] {:a [[inc dec] dec] :b dec}) 1)
                (list [2 0] [0 2] {:a [[2 0] 0], :b 0}))))

(testing "$"
         (is (= ($ nil 1) 1))
         (is (= ($ :pouet nil) nil))
         (is (= ($ 2 1) 2))
         (is (= ($ 2 (mentry :a 1)) (mentry :a 2)))
         (is (= ($ 2 inc) 2))
         (is (= ($ inc 1) 2))
         (is (= ($ inc (mentry :a 1)) (mentry :a 2)))
         (is (= ($ (mentry :a inc) (mentry :a 1)) (mentry :a (mentry :a 2))))
         (is (= ($ (mentry :a inc) 2) (mentry :a 3)))
         (is (= ($ (mentry :a 1) inc) (mentry :a 1)))
         (is (= ($ inc [0 1]) [1 2]))
         (is (= ($ [inc dec] [0 1]) [[1 -1] [2 0]]))
         (is (= ($ (mentry :a inc) [1 2])) [(mentry :a 2) (mentry :a 3)]))

(testing "&"
         (is (= (& :bob 2) :bob))
         (is (= (& inc 2) 3))
         (is (= (& 1 inc) 1))
         (is (= (& nil :zux) :zux))
         (is (= (& 1 [0 0 0]) [1 0 0]))
         (is (= (& [inc dec] 1) 2))
         (is (= (& partial inc) inc))
         (is (= (& (mentry 2 inc) [0 0 0 0]) [0 0 1 0]))
         (is (= (& [inc dec inc dec] [0 0 0 0]) [1 -1 1 -1]))
         (is (= (& {:a inc :b dec} {:a 1 :b 1}) {:a 2, :b 0}))
         (is (= (& {2 inc} [0 0 0 0]) [0 0 1 0]))
         (is (= (& [[inc dec] [dec inc]] [1 2]) [[2 0] [1 3]]))
         (is (= (take 10 (& (repeat inc) (range))) (take 10 (next (range)))))
         (is (= (& {0 dec} #{1 2 3 4}) #{0 4 3 2})))

(testing "◊"
         (is (= (◊ 1 {0 2 :a 3}) 2))
         (is (= (◊ nil 1) nil))
         (is (= (◊ [] 1) [1]))
         (is (= (◊ [1 2 3] (list 3 4)) [3 4]))
         (is (= (◊ {} [:a :b :c]) {2 :c, 1 :b, 0 :a}))
         (is (= (◊ [] {:a 1 2 0}) [nil nil 0]))
         (is (= (◊ #{} [0 0 1]) #{0 1})))

(testing "<<"
         (is (= (<< 1 {0 2 :a 3}) 2))
         (is (= (<< nil 1) nil))
         (is (= (<< [] 1) [1]))
         (is (= (<< [1 2 3] (list 3 4)) [3 4 3]))
         (is (= (<< {} [:a :b :c]) {2 :c, 1 :b, 0 :a}))
         (is (= (<< [] {:a 1 2 0}) [nil nil 0]))
         (is (= (<< #{} [0 0 1]) #{0 1})))


(testing "c"
  (is (= ((c $ $) [inc dec] [[1 2] [3 4]])
         [[[2 0] [3 1]] [[4 2] [5 3]]]))
  (is (= (f$ [1 2 3] inc) [2 3 4]))
  (is (= ($$ inc [[0 1] [2 3]])) [[1 2] [3 4]])
  (is (= (&$ {:a inc :b dec} {:a [1 2] :b [2 3]}) {:b [1 2] :a [2 3]}))
  (is (= (&& {:a [dec inc] :b [inc dec]} {:a [1 2] :b [2 3]}) {:a [0 3] :b [3 2]}))
  (is (= ((c & & $) {:a [dec inc]} {:a [[1 2] [1 2]]}) {:a [[0 1] [2 3]]}))
  (is (= ((c & $ $) {:a inc} {:a [[1 2] [3 4]]}) {:a [[2 3] [4 5]]}))
  (is (= (take 10 (&$ (repeat inc) (repeat (range 10)))) (take 10 (repeat (next (range 11)))))))


(testing "!"
  (is (= (§ (! [inc dec]) 1) [inc dec])))

(testing "s>"
  (is (= (§ (s> [inc dec inc]) 0) 1))
  (is (= ($ (s> [inc dec inc inc]) [0 1 2 3])
         [2 3 4 5]))
  (is (= (& (s> [inc dec inc [inc dec]]) [0 1 2 3])
         [[2 0] 1 2 3]))
  (is (= ($ (s> [[inc dec] ($ [inc dec])]) [0 1 2 3])
         [[[2 0] [0 -2]] [[3 1] [1 -1]] [[4 2] [2 0]] [[5 3] [3 1]]]))
  (is (= (§ (§ (partial * 5) (s> [inc dec inc])) 0) 5))
  (is (= (§ ($ (partial * 2) (s> [inc dec inc])) 0) 2)))

(testing "r>"
  (is (= (§ (r> [inc inc inc]) 0) (list 0 1 2 3)))
  (is (= (§ (§ reverse (r> [inc inc inc])) 0) (list 3 2 1 0))))

(testing "cr>"
  (is (= (take 10 (§ (cr> [inc dec]) 0)) (take 10 (cycle [0 1]))))
  (is (= (take 10 (§ (§$ inc (cr> [inc dec])) 0)) (take 10 (cycle [1 2])))))
