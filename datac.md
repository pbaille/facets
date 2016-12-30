# Datac

A clojure library for data combinations


## Overview

datac is born of some frustrations when writing clojure code, it is hard to believe I know...
there several ideas that puzzled me a lot
the bluring between function and values is really a good thing in certain cases but not always I think.
for instance sometimes you want a function be treated as its return value instead of beeing treated as the value of a transformation
also function as value are really opaque and their transformation is really limited

in our langage what we manipulate is really I think at the fundamental level, just representations of things
representations of values, representations of transformations etc...

so if we treat our awesome clojure litterals and home made datatypes as representations it could bring some flexibility and potential prolific generalisations

a representation should have several attributes (further named facets) in order to operate with other representations

a concrete value
a potential action on other representations
a defined way to receive given transformations
a way to bring back our representation to an universal format
a way to build it from this universal format
a way to obtain its zero/identity value
and certainly many others that I haven't found yet

all those attributes can be viewed as protocols that any piece of data should implement
not only at the class level but potentialy at the instance level

my implementation of this mecanism doesn't use protocols because there's to much limitations with it
for instance, a vector should represent several different types of data
and protocols can only dispatch it as PersistentVector, I know that I can create some custom vectors with deftype but really it's too much ceremony in many cases

With this in mind I've created a little lib called facets, that handle those pseudo type and dispatch stuff.

on top of those behaviors we can build several new operators that give us some generic and flexible way to work with our datatypes, here is the builtin ones

§ invocation
$ distribution
& zipping
v value
o zero (empty context)
<< slurp
◊ wrap

### Usage 

add this to your dependencies vector in project.clj

```clojure
TODO
```

then require it 

```

(require TODO)

($ inc {:a 1 :b 2})
;=> {:a 2, :b 3}

=======

(ns my-ns 
  ;; ...
  (:require TODO))
($ inc {:a 1 :b 2})
;=> {:a 2, :b 3}

```

### Feedback 

please give me feedback, positive or negative, it will help me to improve this library and future ones. thank you

### invocation (sort of)

the ```§``` operator represent invocation, it takes any combination of two arguments, and sort of invoke the first arg on the second arg

- for functions nothing fancy

```clojure
(§ inc 1) ;=> 2
```

- for nil it's like identity function

```clojure
(§ nil :anything) ;=> :anything
``` 

- for core collections types:

```clojure
(§ [inc dec] 0) ;=> [1 -1]

(§ {:a inc :b dec} 0) ;=> {:b -1, :a 1}

(§ (list inc dec) 0) ;=> (1 -1)

(§ #{inc dec} 0) ;=> #{1 -1}
```

- for anything else, just ignore second argument 

```clojure
(§ 1 :bar) ;=> 1
``` 

### distribution 

the ```$``` operator is like clojure.core/map but preserve context

- on non sequential types it behaves as §

```clojure
($ :foo 2) ;=> :foo

($ inc 2) ;=> 3

($ nil 2) ;=> 2
```

- on core collections:

```clojure
($ inc [1 2 3]) ;=> [2 3 4]

($ inc {:a 1 :b 2}) ;=> {:a 2, :b 3}

($ inc (range)) ;=> (1 2 3 4 5 ...)

($ inc #{1 2 3}) ;=> #{4 3 2}
```
- taking advantage of new core collection's invocation behavior

```clojure
($ {:a inc :b dec} (range))
;=> ({:b -1, :a 1} {:b 0, :a 2} {:b 1, :a 3}...)

($ [inc dec] {:a 1 :b 2})
;=> {:a [2 0], :b [3 1]}
```

### zipping 

the ```&``` operator is for zipping together two pieces of data

- with non sequential data it behave like ```§```

```clojure
(& :bob 2) ;=> :bob

(& inc 2) ;=> 3

(& nil :zux) ;=> :zux
```

- when only one of the arg is sequential it do what it can

```clojure
(& 1 [0 0 0]) ;=> [1 0 0]
(& [inc dec] 1) ;=> 2
```

- when the two args are collections 

```clojure
(& [inc dec inc dec] [0 0 0 0])
;=> [1 -1 1 -1]

(& {:a inc :b dec} {:a 1 :b 1})
;=>  {:a 2, :b 0}

(& {2 inc} [0 0 0 0])
;=> [0 0 1 0]

(& [[inc dec][dec inc]] [1 2])
;=> [[2 0] [1 3]]

(& {4 dec} #{1 2 3 4})
;=> #{1 3 2}
```

### zero 

the ```o``` return the identity value of any data

```clojure
(o 42) ;=> 0
(o [1 2 3]) ;=> []
(o #{1 2 3}) ;=> #{}
(o {:a 1}) ;=> {}
(o (range)) ;=> ()
(o "hi!") ;=> ""
(o inc) ;=> #<core$identity clojure.core$identity@306f6c8>
```

### wrapping

the ```◊``` put the value of his second arg into the context of his first arg,
you may not often use it directly, but the implementation of distribution and zipping rely on it, and when we'll see how to extend our own types to datac operators it will be useful.
on osx you can type it with ```alt+v```

- on nil it returns nil

```clojure
(◊ nil 1) ;=> nil
```
- on functions it wrap second arg in a function that always returns it

```clojure
(◊ inc 1) ;=> (constantly 1)

```
- on core collections  

```clojure  
(◊ [] 1) ;=> [1]

(◊ [1 2 3] (list 1 2))
;=> [1 2]

(◊ {} [:a :b :c])
;=> {2 :c, 1 :b, 0 :a}

(◊ #{} [0 0 1])
;=> #{0 1}

```

- on anything else it will return second args unchanged

```clojure
(◊ 1 inc) ;=> inc
(◊ "aze" [1 2]) ;=> [1 2]
```

#### alt
  
the ```alt``` operator is not intended to be used directly, but ```§``` use it under the cover, it lets you specify the way that an arbitrary function should be applied on your data.

```clojure 
(§ func my-data) <=> (alt my-data func)
```

## more...

all those operators have their flipped equivalents

```clojure
(= ($ inc [1 2 3])
   (f$ [1 2 3] inc))
```

and are curried. sort of... 

```clojure
(= (§ ($ inc) [1 2 3])
   ($ inc [1 2 3]))
```

## usage beyond defaults

Since this library is built on top of my facets library, maybe you should look at it first.
Your own types can join the party to. Just have to provide implementations for previously mentioned facets

```clojure
; define a type that always return himself when applied to anything

(f/declare-type 
   ::konst 
   {::fn (fn [x] (constantly x))})
   
; just an helper for instanciate it
(defn k [x] (f/t> ::konst x))

; now I can use it 
(§ (k {:some :thing}) [1 2 3]) ;=> {:some :thing}

; pretty useless but hope you see the point
```

But you don't have to register a new type if you don't want to, like in clojure core you can reify.

```clojure
; same thing that above but with anonymous type

(§ (f/reify {:some :thing}
            {::fn (fn [x] (constantly x))}) 
   [1 2 3]) ;=> {:some :thing}
```

#### Sharing facets implementations

the Facets library has facilities for inheritence and implementation sharing, if it doesn't scares you.

```clojure
; using the ::konst type defined above 
(f/reify {:some :thing}
         [::konst]
         {::alt (fn [this trans] this)})

; we've created a new type that inherit ::konst implementation of ::fn and implements ::alt facet (making it unalterable)
```

### eseq abstraction

the eseq abstraction is the common denominator in datac, all data can be expressed via it.
eseq stands for "map-entries sequence", let's see it in action: 

- on collections 

```clojure
(eseq [1 2 3]) ;=> ([0 1] [1 2] [2 3])
(eseq (list 1 2 3)) ;=> ([0 1] [1 2] [2 3])
(eseq (range)) ;=> ([0 0] [1 1] [2 2] ...)
(eseq #{:aze :ert}) ;=> ([:aze :aze] [:ert :ert])
(eseq {:a 1 :b 2}) ;=> ([:a 1][:b 2])
```

- on nil 

```clojure
(eseq nil) ;=> ()
```

- on non sequentials

```clojure
(eseq 1) ;=> ([0 1])
(eseq (MapEntry. :a 0)) ;=> ([:a 0])
```

All main operators implementations lays on this abstraction, so by extending your type to it, you can benefit from almost all of datac functionalities.

like any operators , you can extand any instance or type to it 

## Motivation

I like clojure core data types a lot and want to use them as often as possible, being capable to just insert a behavior in it when needed really seems to make sense to me at the moment.

Avoiding to use defrecord and deftype when not really needed

A way to represent computations as raw data instead of functions
 
```clojure
(def stats {:max (partial apply max) 
            :min (partial apply min) })

(§ stats [0 1 2 3 4]) 
;=> {:min 0, :max 4}

(§ (assoc stats :sum (partial reduce +))
   [0 9 6 78 2])
;=> {:min 0, :max 78, :sum 95}
    
```

## more concrete examples 

You can look at the end of the datac namespace, how it is used for creating new types (stack, reductions...)








