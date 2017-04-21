(ns facets.core2)

(defprotocol IThing
  (-fn [x])
  (-upd [x f])
  (-eseq [x])
  (-val [x])
  (-zero [x])
  (-build [x]))

()
