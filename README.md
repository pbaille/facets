# FACETS

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

##### Attach a type to something

```clojure
(t :fancy-vector [1 2 3])
;=> [1 2 3]

;lets give it a name: 
(def fancy (t :fancy-vector [1 2 3]))
```

It just add the given type to the metadata of the given thing.  
Note that the given thing should support metadata.  
You can still use your thing as regular clojure thing one as long as you take care of preserving metas.

##### Asking for type:

the `t` funtion can also tell you the type of the given thing.

```clojure
(t fancy)
; => :fancy-vector
```

##### Check type

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

##### Declare a simple type called mytype:

```clojure
(f/declare-type ::fancy-vector)
```

Register a type in the global type registry.  
note that you have to use namespaced keywords.

##### Create an instance of mytype:

```clojure
(t> ::fancy-vector [1 2 3])
```

Like with `t` you can instantiate a type. 

##### Declare a type with a constructor function

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

##### Declaring a facet

```clojure
(f/declare-facet ::f1)
```

Just add this facet id to the global registry. Well, not very useful so far...

##### With implementations

When declaring a facet we can provide implementations for our types.

```clojure
(declare-facet ::f1
  {::mytype (fn [x] (assoc x :some :thing))})
```
##### With default case 

You can provide a default case if you want: 

```clojure
(declare-facet ::f1
  {f/any identity})
```
f/any represent the defaut type.

##### Extending

```clojure
;; creating a type to extend
(f/declare-type ::type1)

(f/extend-facet ::f1
  {::type1 (fn [x] implementation...)})
```

##### Getting a specific implementation

```clojure
(<f ::f1 my-instance)
;=> <myinstance implementation of ::f1>
```

##### Getting all facets implementations for a type 

```clojure
(<fs ::mytype)
;=> <implementation map {facet-id implementation}>
```

### Aliases

If you want to extend builtin clojure types to implement some facets, you can declare aliases.

```clojure
(f/declare-alias clojure.lang.PersistentVector ::vec)
```

So now all instances of PersistentVector will be treated as `::vec` 

```clojure
(t [])
;=> ::vec
```

Aliases are resolved using the same strategy used by multimethods, via `isa?` function.

```clojure
(f/declare-alias clojure.lang.IObj ::obj)

(t ())
;=> ::obj

(t #{})
;=> ::obj
```

In this case all objects that inherit IObj will be treated as ::obj

If a type match several aliases, an error is thrown

```clojure
(t [])
;=> CompilerException java.lang.Exception: 
several aliases: 
(::obj ::vec)
match given type: 
class clojure.lang.PersistentVector
use prefer function to register type preferences
```

In this case, as error message explains, use `prefer` function

```clojure
(f/prefer ::vec ::obj)

(t [])
;=> ::vec 
```

### Inheritence 

You can create a new type derived from an existing type.

```clojure
(f/declare-derived-type ::derived-vec [::vec])
```

This new inherit all the facets implementations of its parent

```clojure
(f/declare-derived-type ::derived-type [::parent1 ::parent2])
```

You can specify several parents, first in the list are prioritary over next ones.  
Here if `::parent1` and `::parent2` both implement `::facet1` , the implementation of parent1 would be used.  
When deriving a type, the constructor is also inherited from parents unless specified as 3rd argument.

```clojure 
(f/declare-derived-type ::derived-type 
  [::parent1 ::parent2]
  (fn [& args] constructor-implementation...))
```

As with `declare-type` you can provide an implementation-map, that overides inherited implementations.

```clojure 
;; with constructor
(f/declare-derived-type ::derived-type 
  [::parent1 ::parent2]
  (fn [& args] constructor-implementation...)
  {::facet1 (fn [x] implementation...)})
  
;; without constructor
(f/declare-derived-type ::derived-type 
  [::parent1 ::parent2]
  {::facet1 (fn [x] implementation...)})
```

You can do inheritence with facets to.

```clojure 
(f/declare-facet ::facet1 
  {::type1 (fn [x] type1 implementation of facet1)
   ::type2 ::type1}
```

Here `::type2` use the implementation of `::type1` for `::facet1`

You can do this with `declare-type` and `declare-derived-type` to.

```clojure 
(f/declare-type ::type3
  {::facet1 ::type1}
```
Here the `::type1` implementation of `::facet1` will be used

### Anonymous types

You can create anonymous types instances with the `reify`

passing it some parents:

```clojure
(f/reify {:some :thing} [::type1 ::type2])
```

passing it an implementation-map:

```clojure
(f/reify {:some :thing}
   {::facet1 <implementation>})
```

Or both:

```clojure
(f/reify {:some :thing}
  [::type1 ::type2]
  {::facet1 <implementation>})
```

Under the hood it just attach some metas to the thing wrapped.

You can test if something is reified

```clojure 
(f/reified? x)
```

`<f`and `<fs` functions works on reified as well.

### Using facets

```clojure
(§ ::facet1 type1-instance args...)
```

### Macros

There is certainly good macros to write over all this, I haven't do it for now.

### Concrete usage

Please see the [datac source](https://github.com/pbaille/facets/blob/master/src/facets/datac.clj) and [docs](https://github.com/pbaille/facets/blob/master/datac.md) to have a concrete exemple of how facets can be used 

## Disclaimer

Early stage of development, performance optimisations are not yet adressed, error handling should be correct but i've not written any tests yet.

## License

Copyright © 2016 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
