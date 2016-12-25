# FOO

### Functionaly Object Oriented

Pseudo types and polymorphism for clj and cljs.

I would love feedback on this, good or bad.

### Why?

- Creating new types easily.
- Extend core types without having to write painful deftypes
- Share implementations.

## Usage

### Simple Types

```clojure
(ns myns 
  (:require [foo.core :as f :refer [t t? t=]]))
```

- Attach a type to something

```clojure
(t :fancy-vector [1 2 3])
;=> [1 2 3]

;lets give it a name: 
(def fancy (t :fancy-vector [1 2 3]))
```

It just add the given type to the metadata of the given thing.  
Note that the given thing should support metadata.  
You can still use your thing as regular clojure thing one as long as you take care of preserving metas.

- Asking for type:

the `t` funtion can also tell you the type of the given thing.

```clojure
(t fancy)
; => :fancy-vector
```

- Check type

the `t?` funtion can tell you if a thing is of type t.

```clojure
(t? :fancy-vector fancy)
; => true
```

the `t=` can test if several things are of same type. 

```clojure
(t= fancy
    (t :fancy-vector []))
; true
```

### Type registry

```clojure
(ns myns 
  (:require [foo.core :as f :refer [t t? t= t>]]))
```

- Declare a simple type called mytype:

```clojure
(f/declare-type ::fancy-vector)
```

Register a type in the global type registry.  
note that you have to use namespaced keywords.

- Create an instance of mytype:

```clojure
(t> ::fancy-vector [1 2 3])
```

Like with `t` you can instantiate a type. 

- Declare a type with a constructor function

You can pass a function as 2nd argument to declare-type, to specify a "constructor"

```clojure
(f/declare-type ::mytype 
  (fn [x] {:data x :other :stuff}))
  
(def my-instance (t> ::mytype "yo"))

my-instance
;=> {:data "yo" :other :stuff}

(t my-instance)
;=> ::mytype

(t? ::mytype my-instance)
;=> true
```

That's all for the moment for types but more to come.

### Facets

It is just a fancy name for functions, after all a function is just a view over some data, so it fits I think/hope...

- Declaring a facet

```clojure
(f/declare-facet ::f1)
```

Just add this facet id to the global registry. Well, not very useful so far...

- With implementations

When declaring a facet we can provide implementations for our types.

```clojure
(declare-facet ::f1
  {::mytype (fn [x] (assoc x :some :thing))})
```
- With default case 

You can provide a default case if you want: 

```clojure
(declare-facet ::f1
  {f/any identity})
```
f/any represent the defaut type.

- Extending

```clojure
(declare-type ::type1)

(extend-facet ::f1
  {::t1 (fn [x] implementation...)})
```

- Getting a specific implementation

```clojure
(<f ::f1 my-instance)
;=> <myinstance implementation of ::f1>
```

- Getting all facets implementations for a type 

```clojure
(<fs ::mytype)
;=> <implementation map {facet-id implementation}>
```

Work In Progress...


## Disclaimer

Early stage of development, performance optimisations are not yet adressed, error handling should be correct but i've not written any tests yet.

## License

Copyright © 2016 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
