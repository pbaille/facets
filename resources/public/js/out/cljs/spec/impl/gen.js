// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__27340__auto__,writer__27341__auto__,opt__27342__auto__){
return cljs.core._write.call(null,writer__27341__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28017 = arguments.length;
var i__27905__auto___28018 = (0);
while(true){
if((i__27905__auto___28018 < len__27904__auto___28017)){
args__27911__auto__.push((arguments[i__27905__auto___28018]));

var G__28019 = (i__27905__auto___28018 + (1));
i__27905__auto___28018 = G__28019;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq28016){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28016));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28021 = arguments.length;
var i__27905__auto___28022 = (0);
while(true){
if((i__27905__auto___28022 < len__27904__auto___28021)){
args__27911__auto__.push((arguments[i__27905__auto___28022]));

var G__28023 = (i__27905__auto___28022 + (1));
i__27905__auto___28022 = G__28023;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq28020){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28020));
});

var g_QMARK__28024 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_28025 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__28024){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__28024))
,null));
var mkg_28026 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__28024,g_28025){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__28024,g_28025))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__28024,g_28025,mkg_28026){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__28024).call(null,x);
});})(g_QMARK__28024,g_28025,mkg_28026))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__28024,g_28025,mkg_28026){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_28026).call(null,gfn);
});})(g_QMARK__28024,g_28025,mkg_28026))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__28024,g_28025,mkg_28026){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_28025).call(null,generator);
});})(g_QMARK__28024,g_28025,mkg_28026))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__27988__auto___28045 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__27988__auto___28045){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28046 = arguments.length;
var i__27905__auto___28047 = (0);
while(true){
if((i__27905__auto___28047 < len__27904__auto___28046)){
args__27911__auto__.push((arguments[i__27905__auto___28047]));

var G__28048 = (i__27905__auto___28047 + (1));
i__27905__auto___28047 = G__28048;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__27988__auto___28045))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27988__auto___28045){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27988__auto___28045),args);
});})(g__27988__auto___28045))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__27988__auto___28045){
return (function (seq28027){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28027));
});})(g__27988__auto___28045))
;


var g__27988__auto___28049 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__27988__auto___28049){
return (function cljs$spec$impl$gen$list(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28050 = arguments.length;
var i__27905__auto___28051 = (0);
while(true){
if((i__27905__auto___28051 < len__27904__auto___28050)){
args__27911__auto__.push((arguments[i__27905__auto___28051]));

var G__28052 = (i__27905__auto___28051 + (1));
i__27905__auto___28051 = G__28052;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__27988__auto___28049))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27988__auto___28049){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27988__auto___28049),args);
});})(g__27988__auto___28049))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__27988__auto___28049){
return (function (seq28028){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28028));
});})(g__27988__auto___28049))
;


var g__27988__auto___28053 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__27988__auto___28053){
return (function cljs$spec$impl$gen$map(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28054 = arguments.length;
var i__27905__auto___28055 = (0);
while(true){
if((i__27905__auto___28055 < len__27904__auto___28054)){
args__27911__auto__.push((arguments[i__27905__auto___28055]));

var G__28056 = (i__27905__auto___28055 + (1));
i__27905__auto___28055 = G__28056;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__27988__auto___28053))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27988__auto___28053){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27988__auto___28053),args);
});})(g__27988__auto___28053))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__27988__auto___28053){
return (function (seq28029){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28029));
});})(g__27988__auto___28053))
;


var g__27988__auto___28057 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__27988__auto___28057){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28058 = arguments.length;
var i__27905__auto___28059 = (0);
while(true){
if((i__27905__auto___28059 < len__27904__auto___28058)){
args__27911__auto__.push((arguments[i__27905__auto___28059]));

var G__28060 = (i__27905__auto___28059 + (1));
i__27905__auto___28059 = G__28060;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__27988__auto___28057))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27988__auto___28057){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27988__auto___28057),args);
});})(g__27988__auto___28057))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__27988__auto___28057){
return (function (seq28030){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28030));
});})(g__27988__auto___28057))
;


var g__27988__auto___28061 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__27988__auto___28061){
return (function cljs$spec$impl$gen$set(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28062 = arguments.length;
var i__27905__auto___28063 = (0);
while(true){
if((i__27905__auto___28063 < len__27904__auto___28062)){
args__27911__auto__.push((arguments[i__27905__auto___28063]));

var G__28064 = (i__27905__auto___28063 + (1));
i__27905__auto___28063 = G__28064;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__27988__auto___28061))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27988__auto___28061){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27988__auto___28061),args);
});})(g__27988__auto___28061))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__27988__auto___28061){
return (function (seq28031){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28031));
});})(g__27988__auto___28061))
;


var g__27988__auto___28065 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__27988__auto___28065){
return (function cljs$spec$impl$gen$vector(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28066 = arguments.length;
var i__27905__auto___28067 = (0);
while(true){
if((i__27905__auto___28067 < len__27904__auto___28066)){
args__27911__auto__.push((arguments[i__27905__auto___28067]));

var G__28068 = (i__27905__auto___28067 + (1));
i__27905__auto___28067 = G__28068;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__27988__auto___28065))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27988__auto___28065){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27988__auto___28065),args);
});})(g__27988__auto___28065))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__27988__auto___28065){
return (function (seq28032){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28032));
});})(g__27988__auto___28065))
;


var g__27988__auto___28069 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__27988__auto___28069){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28070 = arguments.length;
var i__27905__auto___28071 = (0);
while(true){
if((i__27905__auto___28071 < len__27904__auto___28070)){
args__27911__auto__.push((arguments[i__27905__auto___28071]));

var G__28072 = (i__27905__auto___28071 + (1));
i__27905__auto___28071 = G__28072;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__27988__auto___28069))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27988__auto___28069){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27988__auto___28069),args);
});})(g__27988__auto___28069))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__27988__auto___28069){
return (function (seq28033){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28033));
});})(g__27988__auto___28069))
;


var g__27988__auto___28073 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__27988__auto___28073){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28074 = arguments.length;
var i__27905__auto___28075 = (0);
while(true){
if((i__27905__auto___28075 < len__27904__auto___28074)){
args__27911__auto__.push((arguments[i__27905__auto___28075]));

var G__28076 = (i__27905__auto___28075 + (1));
i__27905__auto___28075 = G__28076;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__27988__auto___28073))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27988__auto___28073){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27988__auto___28073),args);
});})(g__27988__auto___28073))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__27988__auto___28073){
return (function (seq28034){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28034));
});})(g__27988__auto___28073))
;


var g__27988__auto___28077 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__27988__auto___28077){
return (function cljs$spec$impl$gen$elements(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28078 = arguments.length;
var i__27905__auto___28079 = (0);
while(true){
if((i__27905__auto___28079 < len__27904__auto___28078)){
args__27911__auto__.push((arguments[i__27905__auto___28079]));

var G__28080 = (i__27905__auto___28079 + (1));
i__27905__auto___28079 = G__28080;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__27988__auto___28077))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27988__auto___28077){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27988__auto___28077),args);
});})(g__27988__auto___28077))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__27988__auto___28077){
return (function (seq28035){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28035));
});})(g__27988__auto___28077))
;


var g__27988__auto___28081 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__27988__auto___28081){
return (function cljs$spec$impl$gen$bind(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28082 = arguments.length;
var i__27905__auto___28083 = (0);
while(true){
if((i__27905__auto___28083 < len__27904__auto___28082)){
args__27911__auto__.push((arguments[i__27905__auto___28083]));

var G__28084 = (i__27905__auto___28083 + (1));
i__27905__auto___28083 = G__28084;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__27988__auto___28081))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27988__auto___28081){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27988__auto___28081),args);
});})(g__27988__auto___28081))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__27988__auto___28081){
return (function (seq28036){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28036));
});})(g__27988__auto___28081))
;


var g__27988__auto___28085 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__27988__auto___28085){
return (function cljs$spec$impl$gen$choose(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28086 = arguments.length;
var i__27905__auto___28087 = (0);
while(true){
if((i__27905__auto___28087 < len__27904__auto___28086)){
args__27911__auto__.push((arguments[i__27905__auto___28087]));

var G__28088 = (i__27905__auto___28087 + (1));
i__27905__auto___28087 = G__28088;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__27988__auto___28085))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27988__auto___28085){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27988__auto___28085),args);
});})(g__27988__auto___28085))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__27988__auto___28085){
return (function (seq28037){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28037));
});})(g__27988__auto___28085))
;


var g__27988__auto___28089 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__27988__auto___28089){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28090 = arguments.length;
var i__27905__auto___28091 = (0);
while(true){
if((i__27905__auto___28091 < len__27904__auto___28090)){
args__27911__auto__.push((arguments[i__27905__auto___28091]));

var G__28092 = (i__27905__auto___28091 + (1));
i__27905__auto___28091 = G__28092;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__27988__auto___28089))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27988__auto___28089){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27988__auto___28089),args);
});})(g__27988__auto___28089))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__27988__auto___28089){
return (function (seq28038){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28038));
});})(g__27988__auto___28089))
;


var g__27988__auto___28093 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__27988__auto___28093){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28094 = arguments.length;
var i__27905__auto___28095 = (0);
while(true){
if((i__27905__auto___28095 < len__27904__auto___28094)){
args__27911__auto__.push((arguments[i__27905__auto___28095]));

var G__28096 = (i__27905__auto___28095 + (1));
i__27905__auto___28095 = G__28096;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__27988__auto___28093))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27988__auto___28093){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27988__auto___28093),args);
});})(g__27988__auto___28093))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__27988__auto___28093){
return (function (seq28039){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28039));
});})(g__27988__auto___28093))
;


var g__27988__auto___28097 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__27988__auto___28097){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28098 = arguments.length;
var i__27905__auto___28099 = (0);
while(true){
if((i__27905__auto___28099 < len__27904__auto___28098)){
args__27911__auto__.push((arguments[i__27905__auto___28099]));

var G__28100 = (i__27905__auto___28099 + (1));
i__27905__auto___28099 = G__28100;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__27988__auto___28097))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27988__auto___28097){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27988__auto___28097),args);
});})(g__27988__auto___28097))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__27988__auto___28097){
return (function (seq28040){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28040));
});})(g__27988__auto___28097))
;


var g__27988__auto___28101 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__27988__auto___28101){
return (function cljs$spec$impl$gen$sample(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28102 = arguments.length;
var i__27905__auto___28103 = (0);
while(true){
if((i__27905__auto___28103 < len__27904__auto___28102)){
args__27911__auto__.push((arguments[i__27905__auto___28103]));

var G__28104 = (i__27905__auto___28103 + (1));
i__27905__auto___28103 = G__28104;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__27988__auto___28101))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27988__auto___28101){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27988__auto___28101),args);
});})(g__27988__auto___28101))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__27988__auto___28101){
return (function (seq28041){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28041));
});})(g__27988__auto___28101))
;


var g__27988__auto___28105 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__27988__auto___28105){
return (function cljs$spec$impl$gen$return(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28106 = arguments.length;
var i__27905__auto___28107 = (0);
while(true){
if((i__27905__auto___28107 < len__27904__auto___28106)){
args__27911__auto__.push((arguments[i__27905__auto___28107]));

var G__28108 = (i__27905__auto___28107 + (1));
i__27905__auto___28107 = G__28108;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__27988__auto___28105))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27988__auto___28105){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27988__auto___28105),args);
});})(g__27988__auto___28105))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__27988__auto___28105){
return (function (seq28042){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28042));
});})(g__27988__auto___28105))
;


var g__27988__auto___28109 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__27988__auto___28109){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28110 = arguments.length;
var i__27905__auto___28111 = (0);
while(true){
if((i__27905__auto___28111 < len__27904__auto___28110)){
args__27911__auto__.push((arguments[i__27905__auto___28111]));

var G__28112 = (i__27905__auto___28111 + (1));
i__27905__auto___28111 = G__28112;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__27988__auto___28109))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27988__auto___28109){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27988__auto___28109),args);
});})(g__27988__auto___28109))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__27988__auto___28109){
return (function (seq28043){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28043));
});})(g__27988__auto___28109))
;


var g__27988__auto___28113 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__27988__auto___28113){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28114 = arguments.length;
var i__27905__auto___28115 = (0);
while(true){
if((i__27905__auto___28115 < len__27904__auto___28114)){
args__27911__auto__.push((arguments[i__27905__auto___28115]));

var G__28116 = (i__27905__auto___28115 + (1));
i__27905__auto___28115 = G__28116;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__27988__auto___28113))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27988__auto___28113){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27988__auto___28113),args);
});})(g__27988__auto___28113))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__27988__auto___28113){
return (function (seq28044){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28044));
});})(g__27988__auto___28113))
;

var g__28001__auto___28138 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__28001__auto___28138){
return (function cljs$spec$impl$gen$any(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28139 = arguments.length;
var i__27905__auto___28140 = (0);
while(true){
if((i__27905__auto___28140 < len__27904__auto___28139)){
args__27911__auto__.push((arguments[i__27905__auto___28140]));

var G__28141 = (i__27905__auto___28140 + (1));
i__27905__auto___28140 = G__28141;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__28001__auto___28138))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28001__auto___28138){
return (function (args){
return cljs.core.deref.call(null,g__28001__auto___28138);
});})(g__28001__auto___28138))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__28001__auto___28138){
return (function (seq28117){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28117));
});})(g__28001__auto___28138))
;


var g__28001__auto___28142 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__28001__auto___28142){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28143 = arguments.length;
var i__27905__auto___28144 = (0);
while(true){
if((i__27905__auto___28144 < len__27904__auto___28143)){
args__27911__auto__.push((arguments[i__27905__auto___28144]));

var G__28145 = (i__27905__auto___28144 + (1));
i__27905__auto___28144 = G__28145;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__28001__auto___28142))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28001__auto___28142){
return (function (args){
return cljs.core.deref.call(null,g__28001__auto___28142);
});})(g__28001__auto___28142))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__28001__auto___28142){
return (function (seq28118){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28118));
});})(g__28001__auto___28142))
;


var g__28001__auto___28146 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__28001__auto___28146){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28147 = arguments.length;
var i__27905__auto___28148 = (0);
while(true){
if((i__27905__auto___28148 < len__27904__auto___28147)){
args__27911__auto__.push((arguments[i__27905__auto___28148]));

var G__28149 = (i__27905__auto___28148 + (1));
i__27905__auto___28148 = G__28149;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__28001__auto___28146))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28001__auto___28146){
return (function (args){
return cljs.core.deref.call(null,g__28001__auto___28146);
});})(g__28001__auto___28146))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__28001__auto___28146){
return (function (seq28119){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28119));
});})(g__28001__auto___28146))
;


var g__28001__auto___28150 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__28001__auto___28150){
return (function cljs$spec$impl$gen$char(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28151 = arguments.length;
var i__27905__auto___28152 = (0);
while(true){
if((i__27905__auto___28152 < len__27904__auto___28151)){
args__27911__auto__.push((arguments[i__27905__auto___28152]));

var G__28153 = (i__27905__auto___28152 + (1));
i__27905__auto___28152 = G__28153;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__28001__auto___28150))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28001__auto___28150){
return (function (args){
return cljs.core.deref.call(null,g__28001__auto___28150);
});})(g__28001__auto___28150))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__28001__auto___28150){
return (function (seq28120){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28120));
});})(g__28001__auto___28150))
;


var g__28001__auto___28154 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__28001__auto___28154){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28155 = arguments.length;
var i__27905__auto___28156 = (0);
while(true){
if((i__27905__auto___28156 < len__27904__auto___28155)){
args__27911__auto__.push((arguments[i__27905__auto___28156]));

var G__28157 = (i__27905__auto___28156 + (1));
i__27905__auto___28156 = G__28157;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__28001__auto___28154))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28001__auto___28154){
return (function (args){
return cljs.core.deref.call(null,g__28001__auto___28154);
});})(g__28001__auto___28154))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__28001__auto___28154){
return (function (seq28121){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28121));
});})(g__28001__auto___28154))
;


var g__28001__auto___28158 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__28001__auto___28158){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28159 = arguments.length;
var i__27905__auto___28160 = (0);
while(true){
if((i__27905__auto___28160 < len__27904__auto___28159)){
args__27911__auto__.push((arguments[i__27905__auto___28160]));

var G__28161 = (i__27905__auto___28160 + (1));
i__27905__auto___28160 = G__28161;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__28001__auto___28158))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28001__auto___28158){
return (function (args){
return cljs.core.deref.call(null,g__28001__auto___28158);
});})(g__28001__auto___28158))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__28001__auto___28158){
return (function (seq28122){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28122));
});})(g__28001__auto___28158))
;


var g__28001__auto___28162 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__28001__auto___28162){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28163 = arguments.length;
var i__27905__auto___28164 = (0);
while(true){
if((i__27905__auto___28164 < len__27904__auto___28163)){
args__27911__auto__.push((arguments[i__27905__auto___28164]));

var G__28165 = (i__27905__auto___28164 + (1));
i__27905__auto___28164 = G__28165;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__28001__auto___28162))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28001__auto___28162){
return (function (args){
return cljs.core.deref.call(null,g__28001__auto___28162);
});})(g__28001__auto___28162))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__28001__auto___28162){
return (function (seq28123){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28123));
});})(g__28001__auto___28162))
;


var g__28001__auto___28166 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__28001__auto___28166){
return (function cljs$spec$impl$gen$double(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28167 = arguments.length;
var i__27905__auto___28168 = (0);
while(true){
if((i__27905__auto___28168 < len__27904__auto___28167)){
args__27911__auto__.push((arguments[i__27905__auto___28168]));

var G__28169 = (i__27905__auto___28168 + (1));
i__27905__auto___28168 = G__28169;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__28001__auto___28166))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28001__auto___28166){
return (function (args){
return cljs.core.deref.call(null,g__28001__auto___28166);
});})(g__28001__auto___28166))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__28001__auto___28166){
return (function (seq28124){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28124));
});})(g__28001__auto___28166))
;


var g__28001__auto___28170 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__28001__auto___28170){
return (function cljs$spec$impl$gen$int(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28171 = arguments.length;
var i__27905__auto___28172 = (0);
while(true){
if((i__27905__auto___28172 < len__27904__auto___28171)){
args__27911__auto__.push((arguments[i__27905__auto___28172]));

var G__28173 = (i__27905__auto___28172 + (1));
i__27905__auto___28172 = G__28173;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__28001__auto___28170))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28001__auto___28170){
return (function (args){
return cljs.core.deref.call(null,g__28001__auto___28170);
});})(g__28001__auto___28170))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__28001__auto___28170){
return (function (seq28125){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28125));
});})(g__28001__auto___28170))
;


var g__28001__auto___28174 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__28001__auto___28174){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28175 = arguments.length;
var i__27905__auto___28176 = (0);
while(true){
if((i__27905__auto___28176 < len__27904__auto___28175)){
args__27911__auto__.push((arguments[i__27905__auto___28176]));

var G__28177 = (i__27905__auto___28176 + (1));
i__27905__auto___28176 = G__28177;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__28001__auto___28174))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28001__auto___28174){
return (function (args){
return cljs.core.deref.call(null,g__28001__auto___28174);
});})(g__28001__auto___28174))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__28001__auto___28174){
return (function (seq28126){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28126));
});})(g__28001__auto___28174))
;


var g__28001__auto___28178 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__28001__auto___28178){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28179 = arguments.length;
var i__27905__auto___28180 = (0);
while(true){
if((i__27905__auto___28180 < len__27904__auto___28179)){
args__27911__auto__.push((arguments[i__27905__auto___28180]));

var G__28181 = (i__27905__auto___28180 + (1));
i__27905__auto___28180 = G__28181;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__28001__auto___28178))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28001__auto___28178){
return (function (args){
return cljs.core.deref.call(null,g__28001__auto___28178);
});})(g__28001__auto___28178))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__28001__auto___28178){
return (function (seq28127){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28127));
});})(g__28001__auto___28178))
;


var g__28001__auto___28182 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__28001__auto___28182){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28183 = arguments.length;
var i__27905__auto___28184 = (0);
while(true){
if((i__27905__auto___28184 < len__27904__auto___28183)){
args__27911__auto__.push((arguments[i__27905__auto___28184]));

var G__28185 = (i__27905__auto___28184 + (1));
i__27905__auto___28184 = G__28185;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__28001__auto___28182))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28001__auto___28182){
return (function (args){
return cljs.core.deref.call(null,g__28001__auto___28182);
});})(g__28001__auto___28182))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__28001__auto___28182){
return (function (seq28128){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28128));
});})(g__28001__auto___28182))
;


var g__28001__auto___28186 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__28001__auto___28186){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28187 = arguments.length;
var i__27905__auto___28188 = (0);
while(true){
if((i__27905__auto___28188 < len__27904__auto___28187)){
args__27911__auto__.push((arguments[i__27905__auto___28188]));

var G__28189 = (i__27905__auto___28188 + (1));
i__27905__auto___28188 = G__28189;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__28001__auto___28186))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28001__auto___28186){
return (function (args){
return cljs.core.deref.call(null,g__28001__auto___28186);
});})(g__28001__auto___28186))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__28001__auto___28186){
return (function (seq28129){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28129));
});})(g__28001__auto___28186))
;


var g__28001__auto___28190 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__28001__auto___28190){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28191 = arguments.length;
var i__27905__auto___28192 = (0);
while(true){
if((i__27905__auto___28192 < len__27904__auto___28191)){
args__27911__auto__.push((arguments[i__27905__auto___28192]));

var G__28193 = (i__27905__auto___28192 + (1));
i__27905__auto___28192 = G__28193;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__28001__auto___28190))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28001__auto___28190){
return (function (args){
return cljs.core.deref.call(null,g__28001__auto___28190);
});})(g__28001__auto___28190))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__28001__auto___28190){
return (function (seq28130){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28130));
});})(g__28001__auto___28190))
;


var g__28001__auto___28194 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__28001__auto___28194){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28195 = arguments.length;
var i__27905__auto___28196 = (0);
while(true){
if((i__27905__auto___28196 < len__27904__auto___28195)){
args__27911__auto__.push((arguments[i__27905__auto___28196]));

var G__28197 = (i__27905__auto___28196 + (1));
i__27905__auto___28196 = G__28197;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__28001__auto___28194))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28001__auto___28194){
return (function (args){
return cljs.core.deref.call(null,g__28001__auto___28194);
});})(g__28001__auto___28194))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__28001__auto___28194){
return (function (seq28131){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28131));
});})(g__28001__auto___28194))
;


var g__28001__auto___28198 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__28001__auto___28198){
return (function cljs$spec$impl$gen$string(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28199 = arguments.length;
var i__27905__auto___28200 = (0);
while(true){
if((i__27905__auto___28200 < len__27904__auto___28199)){
args__27911__auto__.push((arguments[i__27905__auto___28200]));

var G__28201 = (i__27905__auto___28200 + (1));
i__27905__auto___28200 = G__28201;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__28001__auto___28198))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28001__auto___28198){
return (function (args){
return cljs.core.deref.call(null,g__28001__auto___28198);
});})(g__28001__auto___28198))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__28001__auto___28198){
return (function (seq28132){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28132));
});})(g__28001__auto___28198))
;


var g__28001__auto___28202 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__28001__auto___28202){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28203 = arguments.length;
var i__27905__auto___28204 = (0);
while(true){
if((i__27905__auto___28204 < len__27904__auto___28203)){
args__27911__auto__.push((arguments[i__27905__auto___28204]));

var G__28205 = (i__27905__auto___28204 + (1));
i__27905__auto___28204 = G__28205;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__28001__auto___28202))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28001__auto___28202){
return (function (args){
return cljs.core.deref.call(null,g__28001__auto___28202);
});})(g__28001__auto___28202))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__28001__auto___28202){
return (function (seq28133){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28133));
});})(g__28001__auto___28202))
;


var g__28001__auto___28206 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__28001__auto___28206){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28207 = arguments.length;
var i__27905__auto___28208 = (0);
while(true){
if((i__27905__auto___28208 < len__27904__auto___28207)){
args__27911__auto__.push((arguments[i__27905__auto___28208]));

var G__28209 = (i__27905__auto___28208 + (1));
i__27905__auto___28208 = G__28209;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__28001__auto___28206))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28001__auto___28206){
return (function (args){
return cljs.core.deref.call(null,g__28001__auto___28206);
});})(g__28001__auto___28206))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__28001__auto___28206){
return (function (seq28134){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28134));
});})(g__28001__auto___28206))
;


var g__28001__auto___28210 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__28001__auto___28210){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28211 = arguments.length;
var i__27905__auto___28212 = (0);
while(true){
if((i__27905__auto___28212 < len__27904__auto___28211)){
args__27911__auto__.push((arguments[i__27905__auto___28212]));

var G__28213 = (i__27905__auto___28212 + (1));
i__27905__auto___28212 = G__28213;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__28001__auto___28210))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28001__auto___28210){
return (function (args){
return cljs.core.deref.call(null,g__28001__auto___28210);
});})(g__28001__auto___28210))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__28001__auto___28210){
return (function (seq28135){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28135));
});})(g__28001__auto___28210))
;


var g__28001__auto___28214 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__28001__auto___28214){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28215 = arguments.length;
var i__27905__auto___28216 = (0);
while(true){
if((i__27905__auto___28216 < len__27904__auto___28215)){
args__27911__auto__.push((arguments[i__27905__auto___28216]));

var G__28217 = (i__27905__auto___28216 + (1));
i__27905__auto___28216 = G__28217;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__28001__auto___28214))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28001__auto___28214){
return (function (args){
return cljs.core.deref.call(null,g__28001__auto___28214);
});})(g__28001__auto___28214))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__28001__auto___28214){
return (function (seq28136){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28136));
});})(g__28001__auto___28214))
;


var g__28001__auto___28218 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__28001__auto___28218){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28219 = arguments.length;
var i__27905__auto___28220 = (0);
while(true){
if((i__27905__auto___28220 < len__27904__auto___28219)){
args__27911__auto__.push((arguments[i__27905__auto___28220]));

var G__28221 = (i__27905__auto___28220 + (1));
i__27905__auto___28220 = G__28221;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});})(g__28001__auto___28218))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28001__auto___28218){
return (function (args){
return cljs.core.deref.call(null,g__28001__auto___28218);
});})(g__28001__auto___28218))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__28001__auto___28218){
return (function (seq28137){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28137));
});})(g__28001__auto___28218))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__27911__auto__ = [];
var len__27904__auto___28224 = arguments.length;
var i__27905__auto___28225 = (0);
while(true){
if((i__27905__auto___28225 < len__27904__auto___28224)){
args__27911__auto__.push((arguments[i__27905__auto___28225]));

var G__28226 = (i__27905__auto___28225 + (1));
i__27905__auto___28225 = G__28226;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__28222_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__28222_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq28223){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28223));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__28227_SHARP_){
return (new Date(p1__28227_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1486282646585