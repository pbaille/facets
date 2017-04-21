(require '[figwheel-sidecar.repl :as r]
         '[figwheel-sidecar.repl-api :as ra])

(ra/start-figwheel!
  {:figwheel-options {:css-dirs ["resources/public/css"]
                      :server-port 5005}
   :build-ids ["dev"]
   :all-builds
                     [{:id "dev"
                       :figwheel true
                       :source-paths ["src"]
                       :compiler {:main 'facets.core
                                  :asset-path "js/out"
                                  :output-to "resources/public/js/out/main.js"
                                  :output-dir "resources/public/js/out"
                                  :verbose true}}]})

(ra/cljs-repl)
