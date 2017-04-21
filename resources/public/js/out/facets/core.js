// Compiled by ClojureScript 1.9.293 {}
goog.provide('facets.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
facets.core.types = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("facets.core","any","facets.core/any",-1690940080),cljs.core.identity], null));
facets.core.derivations = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
facets.core.facets = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
facets.core.aliases = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
facets.core.prefs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
facets.core.pstate = (function facets$core$pstate(){
cljs.core.println.call(null,"types: ",cljs.core.deref.call(null,facets.core.types));

cljs.core.println.call(null,"facets: ",cljs.core.deref.call(null,facets.core.facets));

cljs.core.println.call(null,"aliases: ",cljs.core.deref.call(null,facets.core.aliases));

cljs.core.println.call(null,"prefs: ",cljs.core.deref.call(null,facets.core.prefs));

return cljs.core.println.call(null,"derivations: ",cljs.core.deref.call(null,facets.core.derivations));
});
facets.core.reset_all_BANG_ = (function facets$core$reset_all_BANG_(){
cljs.core.reset_BANG_.call(null,facets.core.types,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("facets.core","any","facets.core/any",-1690940080),cljs.core.identity], null));

cljs.core.reset_BANG_.call(null,facets.core.derivations,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_.call(null,facets.core.facets,cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.reset_BANG_.call(null,facets.core.aliases,cljs.core.PersistentArrayMap.EMPTY);
});
facets.core.err = (function facets$core$err(s){
return (new Error(s));
});
facets.core.known_types = (function facets$core$known_types(){
return cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,facets.core.types)));
});
facets.core.known_type_QMARK_ = (function facets$core$known_type_QMARK_(t){
return facets.core.known_types.call(null).call(null,t);
});

/**
 * artity 2: assign type sym to e
 * arity 1: get the type tag of e
 */
facets.core.t = (function facets$core$t(var_args){
var args38662 = [];
var len__27904__auto___38665 = arguments.length;
var i__27905__auto___38666 = (0);
while(true){
if((i__27905__auto___38666 < len__27904__auto___38665)){
args38662.push((arguments[i__27905__auto___38666]));

var G__38667 = (i__27905__auto___38666 + (1));
i__27905__auto___38666 = G__38667;
continue;
} else {
}
break;
}

var G__38664 = args38662.length;
switch (G__38664) {
case 1:
return facets.core.t.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return facets.core.t.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38662.length)].join('')));

}
});

facets.core.t.cljs$core$IFn$_invoke$arity$1 = (function (e){
var or__26688__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,e));
if(cljs.core.truth_(or__26688__auto__)){
return or__26688__auto__;
} else {
return facets.core._LT_alias.call(null,cljs.core.type.call(null,e));
}
});

facets.core.t.cljs$core$IFn$_invoke$arity$2 = (function (sym,e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"type","type",1174270348),sym);
});

facets.core.t.cljs$lang$maxFixedArity = 2;

/**
 * check if e is of type sym
 */
facets.core.t_QMARK_ = (function facets$core$t_QMARK_(sym,e){
var typ = cljs.core.type.call(null,e);
return (cljs.core._EQ_.call(null,sym,facets.core.t.call(null,e))) || (cljs.core.contains_QMARK_.call(null,facets.core._LT_aliases.call(null,typ),sym)) || (cljs.core.isa_QMARK_.call(null,typ,sym));
});
/**
 * check if all given args are of same type
 */
facets.core.t_EQ_ = (function facets$core$t_EQ_(var_args){
var args__27911__auto__ = [];
var len__27904__auto___38671 = arguments.length;
var i__27905__auto___38672 = (0);
while(true){
if((i__27905__auto___38672 < len__27904__auto___38671)){
args__27911__auto__.push((arguments[i__27905__auto___38672]));

var G__38673 = (i__27905__auto___38672 + (1));
i__27905__auto___38672 = G__38673;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((1) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((1)),(0),null)):null);
return facets.core.t_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27912__auto__);
});

facets.core.t_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,xs){
return cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,facets.core.t_QMARK_,facets.core.t.call(null,x)),xs);
});

facets.core.t_EQ_.cljs$lang$maxFixedArity = (1);

facets.core.t_EQ_.cljs$lang$applyTo = (function (seq38669){
var G__38670 = cljs.core.first.call(null,seq38669);
var seq38669__$1 = cljs.core.next.call(null,seq38669);
return facets.core.t_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__38670,seq38669__$1);
});

facets.core.assert_nskw = (function facets$core$assert_nskw(name){
if(cljs.core.truth_((function (){var and__26676__auto__ = cljs.core.keyword.call(null,name);
if(cljs.core.truth_(and__26676__auto__)){
return cljs.core.namespace.call(null,name);
} else {
return and__26676__auto__;
}
})())){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Please use namespaced keyword for declaring types! "),cljs.core.str(name)].join('')),cljs.core.str("\n"),cljs.core.str("(and (keyword name) (namespace name))")].join('')));
}
});
facets.core.assert_new_type = (function facets$core$assert_new_type(name){
if(cljs.core.not.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,facets.core.types),name))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Already existing type: "),cljs.core.str(name)].join('')),cljs.core.str("\n"),cljs.core.str("(not (get (clojure.core/deref types) name))")].join('')));
}
});
facets.core.assert_type = (function facets$core$assert_type(name){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,facets.core.types),name))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Unknown type: "),cljs.core.str(name)].join('')),cljs.core.str("\n"),cljs.core.str("(get (clojure.core/deref types) name)")].join('')));
}
});
facets.core.assert_new_facet = (function facets$core$assert_new_facet(name){
if(cljs.core.not.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,facets.core.facets),name))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Already existing facet: "),cljs.core.str(name)].join('')),cljs.core.str("\n"),cljs.core.str("(not (get (clojure.core/deref facets) name))")].join('')));
}
});
facets.core.assert_facet = (function facets$core$assert_facet(name){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,facets.core.facets),name))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Unknown facet: "),cljs.core.str(name)].join('')),cljs.core.str("\n"),cljs.core.str("(get (clojure.core/deref facets) name)")].join('')));
}
});
facets.core.assert_type_impl_map = (function facets$core$assert_type_impl_map(impl_map){
var unknown_facets = cljs.core.seq.call(null,cljs.core.remove.call(null,(function (p1__38674_SHARP_){
return cljs.core.get.call(null,cljs.core.deref.call(null,facets.core.facets),p1__38674_SHARP_);
}),cljs.core.keys.call(null,impl_map)));
if(cljs.core.not.call(null,unknown_facets)){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("there's unknown facets: "),cljs.core.str(unknown_facets),cljs.core.str(" in the given impl-map")].join('')),cljs.core.str("\n"),cljs.core.str("(not unknown-facets)")].join('')));
}
});
facets.core.assert_parents = (function facets$core$assert_parents(parents){
var unknown_parents = cljs.core.seq.call(null,cljs.core.remove.call(null,facets.core.known_type_QMARK_,parents));
if(cljs.core.not.call(null,unknown_parents)){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("there's unknown parents types: "),cljs.core.str(unknown_parents),cljs.core.str(" in the given vector: "),cljs.core.str(parents)].join('')),cljs.core.str("\n"),cljs.core.str("(not unknown-parents)")].join('')));
}
});
facets.core.assert_facet_impl_map = (function facets$core$assert_facet_impl_map(impl_map){
var unknown_types = cljs.core.seq.call(null,cljs.core.remove.call(null,facets.core.known_type_QMARK_,cljs.core.keys.call(null,impl_map)));
if(cljs.core.not.call(null,unknown_types)){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("there's unknown types: "),cljs.core.str(unknown_types),cljs.core.str(" in the given impl-map")].join('')),cljs.core.str("\n"),cljs.core.str("(not unknown-types)")].join('')));
}
});
facets.core.assert_no_overides = (function facets$core$assert_no_overides(old_impls,new_impls){
var known_impls = cljs.core.set.call(null,cljs.core.keys.call(null,old_impls));
var overides = cljs.core.seq.call(null,cljs.core.keep.call(null,known_impls,cljs.core.keys.call(null,new_impls)));
if(cljs.core.not.call(null,overides)){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("can't overide existing implementations for types: \n"),cljs.core.str(overides),cljs.core.str("\n maybe it is time to create a new type.")].join('')),cljs.core.str("\n"),cljs.core.str("(not overides)")].join('')));
}
});
facets.core.assert_existing_derivations = (function facets$core$assert_existing_derivations(impl_map){
var derivations = cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.fn_QMARK_,cljs.core.val),impl_map);
var unknown_types = cljs.core.remove.call(null,facets.core.known_type_QMARK_,derivations);
if(cljs.core.empty_QMARK_.call(null,unknown_types)){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("can't derive from unknown types: "),cljs.core.str(unknown_types)].join('')),cljs.core.str("\n"),cljs.core.str("(empty? unknown-types)")].join('')));
}
});
facets.core.throw_alias_error = (function facets$core$throw_alias_error(var_args){
var args38675 = [];
var len__27904__auto___38678 = arguments.length;
var i__27905__auto___38679 = (0);
while(true){
if((i__27905__auto___38679 < len__27904__auto___38678)){
args38675.push((arguments[i__27905__auto___38679]));

var G__38680 = (i__27905__auto___38679 + (1));
i__27905__auto___38679 = G__38680;
continue;
} else {
}
break;
}

var G__38677 = args38675.length;
switch (G__38677) {
case 1:
return facets.core.throw_alias_error.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return facets.core.throw_alias_error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38675.length)].join('')));

}
});

facets.core.throw_alias_error.cljs$core$IFn$_invoke$arity$1 = (function (matches){
throw facets.core.err.call(null,[cljs.core.str("unable to resolve prefered alias from: \n"),cljs.core.str(matches)].join(''));
});

facets.core.throw_alias_error.cljs$core$IFn$_invoke$arity$2 = (function (matches,type){
throw facets.core.err.call(null,[cljs.core.str("several aliases: \n"),cljs.core.str(cljs.core.pr_str.call(null,matches)),cljs.core.str("\n are matching the given type: "),cljs.core.str(type),cljs.core.str("\nuse prefer function to register type preferences")].join(''));
});

facets.core.throw_alias_error.cljs$lang$maxFixedArity = 2;

facets.core.any = new cljs.core.Keyword("facets.core","any","facets.core/any",-1690940080);
/**
 * assoc new facets implementation to existing type
 */
facets.core.extend_type = (function facets$core$extend_type(name,impl_map){
facets.core.assert_type.call(null,name);

facets.core.assert_type_impl_map.call(null,impl_map);

var seq__38692 = cljs.core.seq.call(null,impl_map);
var chunk__38693 = null;
var count__38694 = (0);
var i__38695 = (0);
while(true){
if((i__38695 < count__38694)){
var vec__38696 = cljs.core._nth.call(null,chunk__38693,i__38695);
var f = cljs.core.nth.call(null,vec__38696,(0),null);
var impl = cljs.core.nth.call(null,vec__38696,(1),null);
facets.core.extend_facet.call(null,f,cljs.core.PersistentArrayMap.fromArray([name,impl], true, false));

var G__38702 = seq__38692;
var G__38703 = chunk__38693;
var G__38704 = count__38694;
var G__38705 = (i__38695 + (1));
seq__38692 = G__38702;
chunk__38693 = G__38703;
count__38694 = G__38704;
i__38695 = G__38705;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__38692);
if(temp__6753__auto__){
var seq__38692__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38692__$1)){
var c__27594__auto__ = cljs.core.chunk_first.call(null,seq__38692__$1);
var G__38706 = cljs.core.chunk_rest.call(null,seq__38692__$1);
var G__38707 = c__27594__auto__;
var G__38708 = cljs.core.count.call(null,c__27594__auto__);
var G__38709 = (0);
seq__38692 = G__38706;
chunk__38693 = G__38707;
count__38694 = G__38708;
i__38695 = G__38709;
continue;
} else {
var vec__38699 = cljs.core.first.call(null,seq__38692__$1);
var f = cljs.core.nth.call(null,vec__38699,(0),null);
var impl = cljs.core.nth.call(null,vec__38699,(1),null);
facets.core.extend_facet.call(null,f,cljs.core.PersistentArrayMap.fromArray([name,impl], true, false));

var G__38710 = cljs.core.next.call(null,seq__38692__$1);
var G__38711 = null;
var G__38712 = (0);
var G__38713 = (0);
seq__38692 = G__38710;
chunk__38693 = G__38711;
count__38694 = G__38712;
i__38695 = G__38713;
continue;
}
} else {
return null;
}
}
break;
}
});
facets.core.parse_declare_type_args = (function facets$core$parse_declare_type_args(var_args){
var args__27911__auto__ = [];
var len__27904__auto___38721 = arguments.length;
var i__27905__auto___38722 = (0);
while(true){
if((i__27905__auto___38722 < len__27904__auto___38721)){
args__27911__auto__.push((arguments[i__27905__auto___38722]));

var G__38723 = (i__27905__auto___38722 + (1));
i__27905__auto___38722 = G__38723;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((2) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((2)),(0),null)):null);
return facets.core.parse_declare_type_args.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27912__auto__);
});

facets.core.parse_declare_type_args.cljs$core$IFn$_invoke$arity$variadic = (function (constructor$,impl_map,p__38717){
var vec__38718 = p__38717;
var parent = cljs.core.nth.call(null,vec__38718,(0),null);
if(cljs.core.map_QMARK_.call(null,constructor$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constructor","constructor",-1953928811),cljs.core.identity,new cljs.core.Keyword(null,"impl-map","impl-map",1331626719),constructor$], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl-map","impl-map",1331626719),(function (){var or__26688__auto__ = impl_map;
if(cljs.core.truth_(or__26688__auto__)){
return or__26688__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),(function (){var or__26688__auto__ = constructor$;
if(cljs.core.truth_(or__26688__auto__)){
return or__26688__auto__;
} else {
var or__26688__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,facets.core.types),parent);
if(cljs.core.truth_(or__26688__auto____$1)){
return or__26688__auto____$1;
} else {
return cljs.core.identity;
}
}
})()], null);
}
});

facets.core.parse_declare_type_args.cljs$lang$maxFixedArity = (2);

facets.core.parse_declare_type_args.cljs$lang$applyTo = (function (seq38714){
var G__38715 = cljs.core.first.call(null,seq38714);
var seq38714__$1 = cljs.core.next.call(null,seq38714);
var G__38716 = cljs.core.first.call(null,seq38714__$1);
var seq38714__$2 = cljs.core.next.call(null,seq38714__$1);
return facets.core.parse_declare_type_args.cljs$core$IFn$_invoke$arity$variadic(G__38715,G__38716,seq38714__$2);
});

facets.core.declare_type_STAR_ = (function facets$core$declare_type_STAR_(p__38724){
var map__38727 = p__38724;
var map__38727__$1 = ((((!((map__38727 == null)))?((((map__38727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38727.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38727):map__38727);
var id = cljs.core.get.call(null,map__38727__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var constructor$ = cljs.core.get.call(null,map__38727__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var facets__$1 = cljs.core.get.call(null,map__38727__$1,new cljs.core.Keyword(null,"facets","facets",-2061519464));
var spec = cljs.core.get.call(null,map__38727__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var gen = cljs.core.get.call(null,map__38727__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return null;
});
/**
 * declare a new datatype, attaching it the given constructor
 * and facets implementations.
 * ex:
 * (declare-type ::foo
 *   identity
 *   {:say-hello (fn [this] (println "hello from foo"))})
 */
facets.core.declare_type = (function facets$core$declare_type(var_args){
var args__27911__auto__ = [];
var len__27904__auto___38737 = arguments.length;
var i__27905__auto___38738 = (0);
while(true){
if((i__27905__auto___38738 < len__27904__auto___38737)){
args__27911__auto__.push((arguments[i__27905__auto___38738]));

var G__38739 = (i__27905__auto___38738 + (1));
i__27905__auto___38738 = G__38739;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((1) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((1)),(0),null)):null);
return facets.core.declare_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27912__auto__);
});

facets.core.declare_type.cljs$core$IFn$_invoke$arity$variadic = (function (name,p__38731){
var vec__38732 = p__38731;
var constructor$ = cljs.core.nth.call(null,vec__38732,(0),null);
var impl_map = cljs.core.nth.call(null,vec__38732,(1),null);
facets.core.assert_nskw.call(null,name);

facets.core.assert_new_type.call(null,name);

var map__38735 = facets.core.parse_declare_type_args.call(null,constructor$,impl_map);
var map__38735__$1 = ((((!((map__38735 == null)))?((((map__38735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38735):map__38735);
var constructor$__$1 = cljs.core.get.call(null,map__38735__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var impl_map__$1 = cljs.core.get.call(null,map__38735__$1,new cljs.core.Keyword(null,"impl-map","impl-map",1331626719));
cljs.core.swap_BANG_.call(null,facets.core.types,cljs.core.assoc,name,((function (map__38735,map__38735__$1,constructor$__$1,impl_map__$1,vec__38732,constructor$,impl_map){
return (function() { 
var G__38740__delegate = function (args){
return facets.core.t.call(null,name,cljs.core.apply.call(null,constructor$__$1,args));
};
var G__38740 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38741__i = 0, G__38741__a = new Array(arguments.length -  0);
while (G__38741__i < G__38741__a.length) {G__38741__a[G__38741__i] = arguments[G__38741__i + 0]; ++G__38741__i;}
  args = new cljs.core.IndexedSeq(G__38741__a,0);
} 
return G__38740__delegate.call(this,args);};
G__38740.cljs$lang$maxFixedArity = 0;
G__38740.cljs$lang$applyTo = (function (arglist__38742){
var args = cljs.core.seq(arglist__38742);
return G__38740__delegate(args);
});
G__38740.cljs$core$IFn$_invoke$arity$variadic = G__38740__delegate;
return G__38740;
})()
;})(map__38735,map__38735__$1,constructor$__$1,impl_map__$1,vec__38732,constructor$,impl_map))
);

facets.core.extend_type.call(null,name,impl_map__$1);

return name;
});

facets.core.declare_type.cljs$lang$maxFixedArity = (1);

facets.core.declare_type.cljs$lang$applyTo = (function (seq38729){
var G__38730 = cljs.core.first.call(null,seq38729);
var seq38729__$1 = cljs.core.next.call(null,seq38729);
return facets.core.declare_type.cljs$core$IFn$_invoke$arity$variadic(G__38730,seq38729__$1);
});

/**
 * register a type-alias
 * ex:
 * (declare-alias clojure.lang.PersistentVector ::vec)
 */
facets.core.declare_alias = (function facets$core$declare_alias(type,sym){
if(cljs.core.truth_(facets.core.known_type_QMARK_.call(null,sym))){
} else {
facets.core.declare_type.call(null,sym);
}

return cljs.core.swap_BANG_.call(null,facets.core.aliases,cljs.core.assoc,type,sym);
});
facets.core.declare_aliases = (function facets$core$declare_aliases(hm){
var seq__38753 = cljs.core.seq.call(null,hm);
var chunk__38754 = null;
var count__38755 = (0);
var i__38756 = (0);
while(true){
if((i__38756 < count__38755)){
var vec__38757 = cljs.core._nth.call(null,chunk__38754,i__38756);
var x = cljs.core.nth.call(null,vec__38757,(0),null);
var y = cljs.core.nth.call(null,vec__38757,(1),null);
facets.core.declare_alias.call(null,x,y);

var G__38763 = seq__38753;
var G__38764 = chunk__38754;
var G__38765 = count__38755;
var G__38766 = (i__38756 + (1));
seq__38753 = G__38763;
chunk__38754 = G__38764;
count__38755 = G__38765;
i__38756 = G__38766;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__38753);
if(temp__6753__auto__){
var seq__38753__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38753__$1)){
var c__27594__auto__ = cljs.core.chunk_first.call(null,seq__38753__$1);
var G__38767 = cljs.core.chunk_rest.call(null,seq__38753__$1);
var G__38768 = c__27594__auto__;
var G__38769 = cljs.core.count.call(null,c__27594__auto__);
var G__38770 = (0);
seq__38753 = G__38767;
chunk__38754 = G__38768;
count__38755 = G__38769;
i__38756 = G__38770;
continue;
} else {
var vec__38760 = cljs.core.first.call(null,seq__38753__$1);
var x = cljs.core.nth.call(null,vec__38760,(0),null);
var y = cljs.core.nth.call(null,vec__38760,(1),null);
facets.core.declare_alias.call(null,x,y);

var G__38771 = cljs.core.next.call(null,seq__38753__$1);
var G__38772 = null;
var G__38773 = (0);
var G__38774 = (0);
seq__38753 = G__38771;
chunk__38754 = G__38772;
count__38755 = G__38773;
i__38756 = G__38774;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * register a type preference,
 * 'type' will be prefered over 'types'
 */
facets.core.prefer = (function facets$core$prefer(var_args){
var args__27911__auto__ = [];
var len__27904__auto___38777 = arguments.length;
var i__27905__auto___38778 = (0);
while(true){
if((i__27905__auto___38778 < len__27904__auto___38777)){
args__27911__auto__.push((arguments[i__27905__auto___38778]));

var G__38779 = (i__27905__auto___38778 + (1));
i__27905__auto___38778 = G__38779;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((1) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((1)),(0),null)):null);
return facets.core.prefer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27912__auto__);
});

facets.core.prefer.cljs$core$IFn$_invoke$arity$variadic = (function (type,types){
return cljs.core.swap_BANG_.call(null,facets.core.prefs,cljs.core.assoc,type,cljs.core.set.call(null,types));
});

facets.core.prefer.cljs$lang$maxFixedArity = (1);

facets.core.prefer.cljs$lang$applyTo = (function (seq38775){
var G__38776 = cljs.core.first.call(null,seq38775);
var seq38775__$1 = cljs.core.next.call(null,seq38775);
return facets.core.prefer.cljs$core$IFn$_invoke$arity$variadic(G__38776,seq38775__$1);
});

facets.core.get_prefered_alias = (function facets$core$get_prefered_alias(xs,type){
var ret = cljs.core.reduce.call(null,(function (acc,el){
var temp__6751__auto__ = cljs.core.set.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,facets.core.prefs),el));
if(cljs.core.truth_(temp__6751__auto__)){
var to_remove = temp__6751__auto__;
return cljs.core.remove.call(null,to_remove,acc);
} else {
return acc;
}
}),xs,xs);
var pred__38783 = cljs.core._EQ_;
var expr__38784 = cljs.core.count.call(null,ret);
if(cljs.core.truth_(pred__38783.call(null,(0),expr__38784))){
return facets.core.throw_alias_error.call(null,ret);
} else {
if(cljs.core.truth_(pred__38783.call(null,(1),expr__38784))){
return cljs.core.first.call(null,ret);
} else {
return facets.core.throw_alias_error.call(null,ret,type);
}
}
});
/**
 * return a set of all matched aliases for a given type
 */
facets.core._LT_aliases = (function facets$core$_LT_aliases(type){
var matches = cljs.core.filter.call(null,(function (p1__38786_SHARP_){
var or__26688__auto__ = cljs.core.isa_QMARK_.call(null,type,p1__38786_SHARP_);
if(or__26688__auto__){
return or__26688__auto__;
} else {
if(!((type == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === type.facets$core$p1__38786_SHARP_$))){
return true;
} else {
if((!type.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,p1__38786_SHARP_,type);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,p1__38786_SHARP_,type);
}
}
}),cljs.core.keys.call(null,cljs.core.deref.call(null,facets.core.aliases)));
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.get,cljs.core.deref.call(null,facets.core.aliases)),matches));
});
facets.core._LT_alias = (function facets$core$_LT_alias(type){
var aliases_STAR_ = facets.core._LT_aliases.call(null,type);
var pred__38794 = cljs.core._EQ_;
var expr__38795 = cljs.core.count.call(null,aliases_STAR_);
if(cljs.core.truth_(pred__38794.call(null,(0),expr__38795))){
return null;
} else {
if(cljs.core.truth_(pred__38794.call(null,(1),expr__38795))){
return cljs.core.first.call(null,aliases_STAR_);
} else {
return facets.core.get_prefered_alias.call(null,aliases_STAR_,type);
}
}
});
/**
 * generic constructor call.
 * apply the constructor of type t to args
 */
facets.core.t_GT_ = (function facets$core$t_GT_(var_args){
var args__27911__auto__ = [];
var len__27904__auto___38799 = arguments.length;
var i__27905__auto___38800 = (0);
while(true){
if((i__27905__auto___38800 < len__27904__auto___38799)){
args__27911__auto__.push((arguments[i__27905__auto___38800]));

var G__38801 = (i__27905__auto___38800 + (1));
i__27905__auto___38800 = G__38801;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((1) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((1)),(0),null)):null);
return facets.core.t_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27912__auto__);
});

facets.core.t_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (t,args){
facets.core.assert_type.call(null,t);

return cljs.core.apply.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,facets.core.types),t),args);
});

facets.core.t_GT_.cljs$lang$maxFixedArity = (1);

facets.core.t_GT_.cljs$lang$applyTo = (function (seq38797){
var G__38798 = cljs.core.first.call(null,seq38797);
var seq38797__$1 = cljs.core.next.call(null,seq38797);
return facets.core.t_GT_.cljs$core$IFn$_invoke$arity$variadic(G__38798,seq38797__$1);
});

/**
 * assoc new implementations to existing facet
 */
facets.core.extend_facet = (function facets$core$extend_facet(name,impl_map){
facets.core.assert_facet.call(null,name);

facets.core.assert_facet_impl_map.call(null,impl_map);

return cljs.core.swap_BANG_.call(null,facets.core.facets,cljs.core.update,name,(function (old_impl_map){
facets.core.assert_no_overides.call(null,old_impl_map,impl_map);

facets.core.assert_existing_derivations.call(null,impl_map);

return cljs.core.merge.call(null,old_impl_map,impl_map);
}));
});
facets.core.extend_facets = (function facets$core$extend_facets(m){
var seq__38812 = cljs.core.seq.call(null,m);
var chunk__38813 = null;
var count__38814 = (0);
var i__38815 = (0);
while(true){
if((i__38815 < count__38814)){
var vec__38816 = cljs.core._nth.call(null,chunk__38813,i__38815);
var n = cljs.core.nth.call(null,vec__38816,(0),null);
var impls = cljs.core.nth.call(null,vec__38816,(1),null);
facets.core.extend_facet.call(null,n,impls);

var G__38822 = seq__38812;
var G__38823 = chunk__38813;
var G__38824 = count__38814;
var G__38825 = (i__38815 + (1));
seq__38812 = G__38822;
chunk__38813 = G__38823;
count__38814 = G__38824;
i__38815 = G__38825;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__38812);
if(temp__6753__auto__){
var seq__38812__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38812__$1)){
var c__27594__auto__ = cljs.core.chunk_first.call(null,seq__38812__$1);
var G__38826 = cljs.core.chunk_rest.call(null,seq__38812__$1);
var G__38827 = c__27594__auto__;
var G__38828 = cljs.core.count.call(null,c__27594__auto__);
var G__38829 = (0);
seq__38812 = G__38826;
chunk__38813 = G__38827;
count__38814 = G__38828;
i__38815 = G__38829;
continue;
} else {
var vec__38819 = cljs.core.first.call(null,seq__38812__$1);
var n = cljs.core.nth.call(null,vec__38819,(0),null);
var impls = cljs.core.nth.call(null,vec__38819,(1),null);
facets.core.extend_facet.call(null,n,impls);

var G__38830 = cljs.core.next.call(null,seq__38812__$1);
var G__38831 = null;
var G__38832 = (0);
var G__38833 = (0);
seq__38812 = G__38830;
chunk__38813 = G__38831;
count__38814 = G__38832;
i__38815 = G__38833;
continue;
}
} else {
return null;
}
}
break;
}
});
facets.core.no_default_handler = (function facets$core$no_default_handler(f){
return (function() { 
var G__38834__delegate = function (x,_){
throw facets.core.err.call(null,[cljs.core.str("no implementation of facet: "),cljs.core.str(f),cljs.core.str(" for type: "),cljs.core.str(facets.core.t.call(null,x))].join(''));
};
var G__38834 = function (x,var_args){
var _ = null;
if (arguments.length > 1) {
var G__38835__i = 0, G__38835__a = new Array(arguments.length -  1);
while (G__38835__i < G__38835__a.length) {G__38835__a[G__38835__i] = arguments[G__38835__i + 1]; ++G__38835__i;}
  _ = new cljs.core.IndexedSeq(G__38835__a,0);
} 
return G__38834__delegate.call(this,x,_);};
G__38834.cljs$lang$maxFixedArity = 1;
G__38834.cljs$lang$applyTo = (function (arglist__38836){
var x = cljs.core.first(arglist__38836);
var _ = cljs.core.rest(arglist__38836);
return G__38834__delegate(x,_);
});
G__38834.cljs$core$IFn$_invoke$arity$variadic = G__38834__delegate;
return G__38834;
})()
;
});
facets.core.register_default_impl = (function facets$core$register_default_impl(name,impl_map){
return cljs.core.swap_BANG_.call(null,facets.core.facets,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword("facets.core","any","facets.core/any",-1690940080)], null),new cljs.core.Keyword("facets.core","any","facets.core/any",-1690940080).cljs$core$IFn$_invoke$arity$2(impl_map,facets.core.no_default_handler.call(null,name)));
});
/**
 * declare a new facet, just a fancy name for behavior or method
 * ex:
 * (declare-facet ::say-hello
 *   {::type1 (fn [x] (println "hello from type 1"))
 *    ::type2 (fn [x] (println "hello from type 2"))
 *    :default (fn [x] (println "default hello from a type that doesn't implement ::say-hello))})
 */
facets.core.declare_facet = (function facets$core$declare_facet(var_args){
var args__27911__auto__ = [];
var len__27904__auto___38843 = arguments.length;
var i__27905__auto___38844 = (0);
while(true){
if((i__27905__auto___38844 < len__27904__auto___38843)){
args__27911__auto__.push((arguments[i__27905__auto___38844]));

var G__38845 = (i__27905__auto___38844 + (1));
i__27905__auto___38844 = G__38845;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((1) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((1)),(0),null)):null);
return facets.core.declare_facet.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27912__auto__);
});

facets.core.declare_facet.cljs$core$IFn$_invoke$arity$variadic = (function (name,p__38839){
var vec__38840 = p__38839;
var impl_map = cljs.core.nth.call(null,vec__38840,(0),null);
facets.core.assert_nskw.call(null,name);

facets.core.assert_new_facet.call(null,name);

facets.core.register_default_impl.call(null,name,impl_map);

facets.core.extend_facet.call(null,name,cljs.core.dissoc.call(null,impl_map,new cljs.core.Keyword("facets.core","any","facets.core/any",-1690940080)));

return name;
});

facets.core.declare_facet.cljs$lang$maxFixedArity = (1);

facets.core.declare_facet.cljs$lang$applyTo = (function (seq38837){
var G__38838 = cljs.core.first.call(null,seq38837);
var seq38837__$1 = cljs.core.next.call(null,seq38837);
return facets.core.declare_facet.cljs$core$IFn$_invoke$arity$variadic(G__38838,seq38837__$1);
});

facets.core.declare_facets = (function facets$core$declare_facets(m){
var seq__38856 = cljs.core.seq.call(null,m);
var chunk__38857 = null;
var count__38858 = (0);
var i__38859 = (0);
while(true){
if((i__38859 < count__38858)){
var vec__38860 = cljs.core._nth.call(null,chunk__38857,i__38859);
var kw = cljs.core.nth.call(null,vec__38860,(0),null);
var impl_map = cljs.core.nth.call(null,vec__38860,(1),null);
facets.core.declare_facet.call(null,kw,impl_map);

var G__38866 = seq__38856;
var G__38867 = chunk__38857;
var G__38868 = count__38858;
var G__38869 = (i__38859 + (1));
seq__38856 = G__38866;
chunk__38857 = G__38867;
count__38858 = G__38868;
i__38859 = G__38869;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__38856);
if(temp__6753__auto__){
var seq__38856__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38856__$1)){
var c__27594__auto__ = cljs.core.chunk_first.call(null,seq__38856__$1);
var G__38870 = cljs.core.chunk_rest.call(null,seq__38856__$1);
var G__38871 = c__27594__auto__;
var G__38872 = cljs.core.count.call(null,c__27594__auto__);
var G__38873 = (0);
seq__38856 = G__38870;
chunk__38857 = G__38871;
count__38858 = G__38872;
i__38859 = G__38873;
continue;
} else {
var vec__38863 = cljs.core.first.call(null,seq__38856__$1);
var kw = cljs.core.nth.call(null,vec__38863,(0),null);
var impl_map = cljs.core.nth.call(null,vec__38863,(1),null);
facets.core.declare_facet.call(null,kw,impl_map);

var G__38874 = cljs.core.next.call(null,seq__38856__$1);
var G__38875 = null;
var G__38876 = (0);
var G__38877 = (0);
seq__38856 = G__38874;
chunk__38857 = G__38875;
count__38858 = G__38876;
i__38859 = G__38877;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * get all facets implementations for the given type
 */
facets.core._LT_fs = (function facets$core$_LT_fs(t){
return cljs.core.reduce.call(null,(function (acc,p__38882){
var vec__38883 = p__38882;
var fname = cljs.core.nth.call(null,vec__38883,(0),null);
var impls = cljs.core.nth.call(null,vec__38883,(1),null);
var temp__6751__auto__ = cljs.core.get.call(null,impls,t);
if(cljs.core.truth_(temp__6751__auto__)){
var i = temp__6751__auto__;
return cljs.core.assoc.call(null,acc,fname,i);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref.call(null,facets.core.facets));
});
facets.core.reified_QMARK_ = (function facets$core$reified_QMARK_(this$){
var and__26676__auto__ = new cljs.core.Keyword("facets.core","impl-map","facets.core/impl-map",1259813422).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$));
if(cljs.core.truth_(and__26676__auto__)){
return new cljs.core.Keyword("facets.core","parents","facets.core/parents",984510694).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$));
} else {
return and__26676__auto__;
}
});
facets.core.derived_impl_map = (function facets$core$derived_impl_map(parents,impl_map){
return cljs.core.merge.call(null,cljs.core.reduce.call(null,(function (acc,p){
return cljs.core.merge.call(null,acc,facets.core._LT_fs.call(null,p));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,parents)),impl_map);
});
facets.core.reified__GT_impls = (function facets$core$reified__GT_impls(this$){
return facets.core.derived_impl_map.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword("facets.core","parents","facets.core/parents",984510694).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$))),new cljs.core.Keyword("facets.core","impl-map","facets.core/impl-map",1259813422).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$)));
});
/**
 * given a facet keyword and something,
 * return the registered or default implementation
 */
facets.core._LT_f = (function facets$core$_LT_f(facet,this$){
var v = (cljs.core.truth_(facets.core.reified_QMARK_.call(null,this$))?cljs.core.get.call(null,facets.core.reified__GT_impls.call(null,this$),facet):(function (){var or__26688__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,facets.core.facets),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [facet,facets.core.t.call(null,this$)], null));
if(cljs.core.truth_(or__26688__auto__)){
return or__26688__auto__;
} else {
return cljs.core.get.call(null,facets.core.derived_impl_map.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,facets.core.derivations),facets.core.t.call(null,this$)),facets.core._LT_fs.call(null,facets.core.t.call(null,this$))),facet);
}
})());
if(cljs.core.fn_QMARK_.call(null,v)){
return v;
} else {
if(cljs.core.truth_(facets.core.known_type_QMARK_.call(null,v))){
return facets.core._LT_f.call(null,facet,v);
} else {
return cljs.core.get_in.call(null,cljs.core.deref.call(null,facets.core.facets),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [facet,new cljs.core.Keyword("facets.core","any","facets.core/any",-1690940080)], null));

}
}
});
/**
 * same as declare-type but inherit all impls of the given parents,
 * unless overiden via impl-map parameter
 */
facets.core.declare_derived_type = (function facets$core$declare_derived_type(var_args){
var args__27911__auto__ = [];
var len__27904__auto___38895 = arguments.length;
var i__27905__auto___38896 = (0);
while(true){
if((i__27905__auto___38896 < len__27904__auto___38895)){
args__27911__auto__.push((arguments[i__27905__auto___38896]));

var G__38897 = (i__27905__auto___38896 + (1));
i__27905__auto___38896 = G__38897;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((2) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((2)),(0),null)):null);
return facets.core.declare_derived_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27912__auto__);
});

facets.core.declare_derived_type.cljs$core$IFn$_invoke$arity$variadic = (function (name,parents,p__38889){
var vec__38890 = p__38889;
var constructor$ = cljs.core.nth.call(null,vec__38890,(0),null);
var impl_map = cljs.core.nth.call(null,vec__38890,(1),null);
facets.core.assert_parents.call(null,parents);

var map__38893 = facets.core.parse_declare_type_args.call(null,constructor$,impl_map,cljs.core.first.call(null,parents));
var map__38893__$1 = ((((!((map__38893 == null)))?((((map__38893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38893):map__38893);
var constructor$__$1 = cljs.core.get.call(null,map__38893__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var impl_map__$1 = cljs.core.get.call(null,map__38893__$1,new cljs.core.Keyword(null,"impl-map","impl-map",1331626719));
facets.core.declare_type.call(null,name,constructor$__$1,impl_map__$1);

return cljs.core.swap_BANG_.call(null,facets.core.derivations,cljs.core.assoc,name,parents);
});

facets.core.declare_derived_type.cljs$lang$maxFixedArity = (2);

facets.core.declare_derived_type.cljs$lang$applyTo = (function (seq38886){
var G__38887 = cljs.core.first.call(null,seq38886);
var seq38886__$1 = cljs.core.next.call(null,seq38886);
var G__38888 = cljs.core.first.call(null,seq38886__$1);
var seq38886__$2 = cljs.core.next.call(null,seq38886__$1);
return facets.core.declare_derived_type.cljs$core$IFn$_invoke$arity$variadic(G__38887,G__38888,seq38886__$2);
});

/**
 * anonymous type,
 * that can inherit from one or several existing types
 */
facets.core.reify = (function facets$core$reify(var_args){
var args38898 = [];
var len__27904__auto___38901 = arguments.length;
var i__27905__auto___38902 = (0);
while(true){
if((i__27905__auto___38902 < len__27904__auto___38901)){
args38898.push((arguments[i__27905__auto___38902]));

var G__38903 = (i__27905__auto___38902 + (1));
i__27905__auto___38902 = G__38903;
continue;
} else {
}
break;
}

var G__38900 = args38898.length;
switch (G__38900) {
case 2:
return facets.core.reify.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return facets.core.reify.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38898.length)].join('')));

}
});

facets.core.reify.cljs$core$IFn$_invoke$arity$2 = (function (this$,parents_or_impl_map){
if((cljs.core.vector_QMARK_.call(null,parents_or_impl_map)) && (cljs.core.every_QMARK_.call(null,facets.core.known_type_QMARK_,parents_or_impl_map))){
return facets.core.reify.call(null,this$,parents_or_impl_map,cljs.core.PersistentArrayMap.EMPTY);
} else {
return facets.core.reify.call(null,this$,cljs.core.PersistentVector.EMPTY,parents_or_impl_map);
}
});

facets.core.reify.cljs$core$IFn$_invoke$arity$3 = (function (this$,parents,impl_map){
return cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword("facets.core","parents","facets.core/parents",984510694),parents,new cljs.core.Keyword("facets.core","impl-map","facets.core/impl-map",1259813422),impl_map);
});

facets.core.reify.cljs$lang$maxFixedArity = 3;

/**
 * call facet f on args
 */
facets.core.call = (function facets$core$call(var_args){
var args__27911__auto__ = [];
var len__27904__auto___38908 = arguments.length;
var i__27905__auto___38909 = (0);
while(true){
if((i__27905__auto___38909 < len__27904__auto___38908)){
args__27911__auto__.push((arguments[i__27905__auto___38909]));

var G__38910 = (i__27905__auto___38909 + (1));
i__27905__auto___38909 = G__38910;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((2) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((2)),(0),null)):null);
return facets.core.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27912__auto__);
});

facets.core.call.cljs$core$IFn$_invoke$arity$variadic = (function (fk,arg1,args){
return cljs.core.apply.call(null,facets.core._LT_f.call(null,fk,arg1),arg1,args);
});

facets.core.call.cljs$lang$maxFixedArity = (2);

facets.core.call.cljs$lang$applyTo = (function (seq38905){
var G__38906 = cljs.core.first.call(null,seq38905);
var seq38905__$1 = cljs.core.next.call(null,seq38905);
var G__38907 = cljs.core.first.call(null,seq38905__$1);
var seq38905__$2 = cljs.core.next.call(null,seq38905__$1);
return facets.core.call.cljs$core$IFn$_invoke$arity$variadic(G__38906,G__38907,seq38905__$2);
});

/**
 * maybe it should be a way to improve perfs,
 * at some point, when the user has defined all his types,
 * we could compile the dispatch mecanism from the current state, and return a faster call-fn...
 * Maybe it is not possible...
 */
facets.core.compiled_call = (function facets$core$compiled_call(){
throw facets.core.err.call(null,"Not Implemented yet");
});

//# sourceMappingURL=core.js.map?rel=1486394662184