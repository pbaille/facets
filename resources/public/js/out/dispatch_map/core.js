// Compiled by ClojureScript 1.9.293 {}
goog.provide('dispatch_map.core');
goog.require('cljs.core');
goog.require('dispatch_map.hierarchy');





/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dispatch_map.core.DispatchCache = (function (hierarchy,table,__meta,__extmap,__hash){
this.hierarchy = hierarchy;
this.table = table;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dispatch_map.core.DispatchCache.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27358__auto__,k__27359__auto__){
var self__ = this;
var this__27358__auto____$1 = this;
return cljs.core._lookup.call(null,this__27358__auto____$1,k__27359__auto__,null);
});

dispatch_map.core.DispatchCache.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27360__auto__,k38157,else__27361__auto__){
var self__ = this;
var this__27360__auto____$1 = this;
var G__38159 = (((k38157 instanceof cljs.core.Keyword))?k38157.fqn:null);
switch (G__38159) {
case "hierarchy":
return self__.hierarchy;

break;
case "table":
return self__.table;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k38157,else__27361__auto__);

}
});

dispatch_map.core.DispatchCache.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27372__auto__,writer__27373__auto__,opts__27374__auto__){
var self__ = this;
var this__27372__auto____$1 = this;
var pr_pair__27375__auto__ = ((function (this__27372__auto____$1){
return (function (keyval__27376__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27373__auto__,cljs.core.pr_writer,""," ","",opts__27374__auto__,keyval__27376__auto__);
});})(this__27372__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27373__auto__,pr_pair__27375__auto__,"#dispatch-map.core.DispatchCache{",", ","}",opts__27374__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),self__.hierarchy],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"table","table",-564943036),self__.table],null))], null),self__.__extmap));
});

dispatch_map.core.DispatchCache.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dispatch_map.core.DispatchCache.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38156){
var self__ = this;
var G__38156__$1 = this;
return (new cljs.core.RecordIter((0),G__38156__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Keyword(null,"table","table",-564943036)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dispatch_map.core.DispatchCache.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27356__auto__){
var self__ = this;
var this__27356__auto____$1 = this;
return self__.__meta;
});

dispatch_map.core.DispatchCache.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27352__auto__){
var self__ = this;
var this__27352__auto____$1 = this;
return (new dispatch_map.core.DispatchCache(self__.hierarchy,self__.table,self__.__meta,self__.__extmap,self__.__hash));
});

dispatch_map.core.DispatchCache.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27362__auto__){
var self__ = this;
var this__27362__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

dispatch_map.core.DispatchCache.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27353__auto__){
var self__ = this;
var this__27353__auto____$1 = this;
var h__27125__auto__ = self__.__hash;
if(!((h__27125__auto__ == null))){
return h__27125__auto__;
} else {
var h__27125__auto____$1 = cljs.core.hash_imap.call(null,this__27353__auto____$1);
self__.__hash = h__27125__auto____$1;

return h__27125__auto____$1;
}
});

dispatch_map.core.DispatchCache.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27354__auto__,other__27355__auto__){
var self__ = this;
var this__27354__auto____$1 = this;
if(cljs.core.truth_((function (){var and__26676__auto__ = other__27355__auto__;
if(cljs.core.truth_(and__26676__auto__)){
var and__26676__auto____$1 = (this__27354__auto____$1.constructor === other__27355__auto__.constructor);
if(and__26676__auto____$1){
return cljs.core.equiv_map.call(null,this__27354__auto____$1,other__27355__auto__);
} else {
return and__26676__auto____$1;
}
} else {
return and__26676__auto__;
}
})())){
return true;
} else {
return false;
}
});

dispatch_map.core.DispatchCache.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27367__auto__,k__27368__auto__){
var self__ = this;
var this__27367__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table","table",-564943036),null,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),null], null), null),k__27368__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27367__auto____$1),self__.__meta),k__27368__auto__);
} else {
return (new dispatch_map.core.DispatchCache(self__.hierarchy,self__.table,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27368__auto__)),null));
}
});

dispatch_map.core.DispatchCache.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27365__auto__,k__27366__auto__,G__38156){
var self__ = this;
var this__27365__auto____$1 = this;
var pred__38160 = cljs.core.keyword_identical_QMARK_;
var expr__38161 = k__27366__auto__;
if(cljs.core.truth_(pred__38160.call(null,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),expr__38161))){
return (new dispatch_map.core.DispatchCache(G__38156,self__.table,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__38160.call(null,new cljs.core.Keyword(null,"table","table",-564943036),expr__38161))){
return (new dispatch_map.core.DispatchCache(self__.hierarchy,G__38156,self__.__meta,self__.__extmap,null));
} else {
return (new dispatch_map.core.DispatchCache(self__.hierarchy,self__.table,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27366__auto__,G__38156),null));
}
}
});

dispatch_map.core.DispatchCache.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27370__auto__){
var self__ = this;
var this__27370__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),self__.hierarchy],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"table","table",-564943036),self__.table],null))], null),self__.__extmap));
});

dispatch_map.core.DispatchCache.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27357__auto__,G__38156){
var self__ = this;
var this__27357__auto____$1 = this;
return (new dispatch_map.core.DispatchCache(self__.hierarchy,self__.table,G__38156,self__.__extmap,self__.__hash));
});

dispatch_map.core.DispatchCache.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27363__auto__,entry__27364__auto__){
var self__ = this;
var this__27363__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27364__auto__)){
return cljs.core._assoc.call(null,this__27363__auto____$1,cljs.core._nth.call(null,entry__27364__auto__,(0)),cljs.core._nth.call(null,entry__27364__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27363__auto____$1,entry__27364__auto__);
}
});

dispatch_map.core.DispatchCache.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hierarchy","hierarchy",587061186,null),new cljs.core.Symbol(null,"table","table",1075588491,null)], null);
});

dispatch_map.core.DispatchCache.cljs$lang$type = true;

dispatch_map.core.DispatchCache.cljs$lang$ctorPrSeq = (function (this__27394__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dispatch-map.core/DispatchCache");
});

dispatch_map.core.DispatchCache.cljs$lang$ctorPrWriter = (function (this__27394__auto__,writer__27395__auto__){
return cljs.core._write.call(null,writer__27395__auto__,"dispatch-map.core/DispatchCache");
});

dispatch_map.core.__GT_DispatchCache = (function dispatch_map$core$__GT_DispatchCache(hierarchy,table){
return (new dispatch_map.core.DispatchCache(hierarchy,table,null,null,null));
});

dispatch_map.core.map__GT_DispatchCache = (function dispatch_map$core$map__GT_DispatchCache(G__38158){
return (new dispatch_map.core.DispatchCache(new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341).cljs$core$IFn$_invoke$arity$1(G__38158),new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(G__38158),null,cljs.core.dissoc.call(null,G__38158,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Keyword(null,"table","table",-564943036)),null));
});


/**
 * @interface
 */
dispatch_map.core.IDispatch = function(){};

dispatch_map.core._dispatch_fn = (function dispatch_map$core$_dispatch_fn(this$){
if((!((this$ == null))) && (!((this$.dispatch_map$core$IDispatch$_dispatch_fn$arity$1 == null)))){
return this$.dispatch_map$core$IDispatch$_dispatch_fn$arity$1(this$);
} else {
var x__27401__auto__ = (((this$ == null))?null:this$);
var m__27402__auto__ = (dispatch_map.core._dispatch_fn[goog.typeOf(x__27401__auto__)]);
if(!((m__27402__auto__ == null))){
return m__27402__auto__.call(null,this$);
} else {
var m__27402__auto____$1 = (dispatch_map.core._dispatch_fn["_"]);
if(!((m__27402__auto____$1 == null))){
return m__27402__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDispatch.-dispatch-fn",this$);
}
}
}
});

dispatch_map.core._hierarchy = (function dispatch_map$core$_hierarchy(this$){
if((!((this$ == null))) && (!((this$.dispatch_map$core$IDispatch$_hierarchy$arity$1 == null)))){
return this$.dispatch_map$core$IDispatch$_hierarchy$arity$1(this$);
} else {
var x__27401__auto__ = (((this$ == null))?null:this$);
var m__27402__auto__ = (dispatch_map.core._hierarchy[goog.typeOf(x__27401__auto__)]);
if(!((m__27402__auto__ == null))){
return m__27402__auto__.call(null,this$);
} else {
var m__27402__auto____$1 = (dispatch_map.core._hierarchy["_"]);
if(!((m__27402__auto____$1 == null))){
return m__27402__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDispatch.-hierarchy",this$);
}
}
}
});

dispatch_map.core._find_dispatched = (function dispatch_map$core$_find_dispatched(this$,dispatch_val){
if((!((this$ == null))) && (!((this$.dispatch_map$core$IDispatch$_find_dispatched$arity$2 == null)))){
return this$.dispatch_map$core$IDispatch$_find_dispatched$arity$2(this$,dispatch_val);
} else {
var x__27401__auto__ = (((this$ == null))?null:this$);
var m__27402__auto__ = (dispatch_map.core._find_dispatched[goog.typeOf(x__27401__auto__)]);
if(!((m__27402__auto__ == null))){
return m__27402__auto__.call(null,this$,dispatch_val);
} else {
var m__27402__auto____$1 = (dispatch_map.core._find_dispatched["_"]);
if(!((m__27402__auto____$1 == null))){
return m__27402__auto____$1.call(null,this$,dispatch_val);
} else {
throw cljs.core.missing_protocol.call(null,"IDispatch.-find-dispatched",this$);
}
}
}
});

dispatch_map.core._prefer = (function dispatch_map$core$_prefer(this$,dispatch_val_x,dispatch_val_y){
if((!((this$ == null))) && (!((this$.dispatch_map$core$IDispatch$_prefer$arity$3 == null)))){
return this$.dispatch_map$core$IDispatch$_prefer$arity$3(this$,dispatch_val_x,dispatch_val_y);
} else {
var x__27401__auto__ = (((this$ == null))?null:this$);
var m__27402__auto__ = (dispatch_map.core._prefer[goog.typeOf(x__27401__auto__)]);
if(!((m__27402__auto__ == null))){
return m__27402__auto__.call(null,this$,dispatch_val_x,dispatch_val_y);
} else {
var m__27402__auto____$1 = (dispatch_map.core._prefer["_"]);
if(!((m__27402__auto____$1 == null))){
return m__27402__auto____$1.call(null,this$,dispatch_val_x,dispatch_val_y);
} else {
throw cljs.core.missing_protocol.call(null,"IDispatch.-prefer",this$);
}
}
}
});

dispatch_map.core._preferences = (function dispatch_map$core$_preferences(this$){
if((!((this$ == null))) && (!((this$.dispatch_map$core$IDispatch$_preferences$arity$1 == null)))){
return this$.dispatch_map$core$IDispatch$_preferences$arity$1(this$);
} else {
var x__27401__auto__ = (((this$ == null))?null:this$);
var m__27402__auto__ = (dispatch_map.core._preferences[goog.typeOf(x__27401__auto__)]);
if(!((m__27402__auto__ == null))){
return m__27402__auto__.call(null,this$);
} else {
var m__27402__auto____$1 = (dispatch_map.core._preferences["_"]);
if(!((m__27402__auto____$1 == null))){
return m__27402__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDispatch.-preferences",this$);
}
}
}
});


/**
* @constructor
 * @implements {clojure.lang.ILookup}
 * @implements {clojure.lang.IFn}
 * @implements {dispatch_map.core.IDispatch}
 * @implements {clojure.lang.IPersistentMap}
 * @implements {clojure.lang.Associative}
 * @implements {clojure.lang.Counted}
 * @implements {clojure.lang.IPersistentCollection}
 * @implements {clojure.lang.Seqable}
 * @implements {java.lang.Iterable}
 * @implements {java.util.Map}
 * @implements {dispatch_map.core.Object}
*/
dispatch_map.core.DispatchMap = (function (dispatch_fn,hierarchy,m,preferences,cache){
this.dispatch_fn = dispatch_fn;
this.hierarchy = hierarchy;
this.m = m;
this.preferences = preferences;
this.cache = cache;
})
dispatch_map.core.DispatchMap.prototype.clojure$lang$Associative$ = cljs.core.PROTOCOL_SENTINEL;

dispatch_map.core.DispatchMap.prototype.clojure$lang$Associative$containsKey$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return self__.m.containsKey(k);
});

dispatch_map.core.DispatchMap.prototype.clojure$lang$Associative$entryAt$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return dispatch_map.core._find_dispatched.call(null,this$__$1,self__.dispatch_fn.call(null,k));
});

dispatch_map.core.DispatchMap.prototype.hashCode = (function (){
var self__ = this;
var this$ = this;
return (((cljs.core.hash.call(null,self__.dispatch_fn) ^ cljs.core.hash.call(null,self__.hierarchy)) ^ cljs.core.hash.call(null,self__.m)) ^ cljs.core.hash.call(null,self__.preferences));
});

dispatch_map.core.DispatchMap.prototype.equals = (function (obj){
var self__ = this;
var this$ = this;
return this$.equiv(obj);
});

dispatch_map.core.DispatchMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str("#<DispatchMap "),cljs.core.str(cljs.core.pr_str.call(null,self__.m)),cljs.core.str(">")].join('');
});

dispatch_map.core.DispatchMap.prototype.java$util$Map$ = cljs.core.PROTOCOL_SENTINEL;

dispatch_map.core.DispatchMap.prototype.java$util$Map$put$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
throw (new dispatch_map.core.UnsupportedOperationException());
});

dispatch_map.core.DispatchMap.prototype.java$util$Map$keySet$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.set.call(null,cljs.core.keys.call(null,this$__$1));
});

dispatch_map.core.DispatchMap.prototype.java$util$Map$entrySet$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.set.call(null,cljs.core.seq.call(null,this$__$1));
});

dispatch_map.core.DispatchMap.prototype.java$util$Map$clear$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
throw (new dispatch_map.core.UnsupportedOperationException());
});

dispatch_map.core.DispatchMap.prototype.java$util$Map$remove$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
throw (new dispatch_map.core.UnsupportedOperationException());
});

dispatch_map.core.DispatchMap.prototype.java$util$Map$get$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.valAt(k);
});

dispatch_map.core.DispatchMap.prototype.java$util$Map$isEmpty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.empty_QMARK_.call(null,this$__$1);
});

dispatch_map.core.DispatchMap.prototype.java$util$Map$putAll$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
throw (new dispatch_map.core.UnsupportedOperationException());
});

dispatch_map.core.DispatchMap.prototype.java$util$Map$size$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count.call(null,this$__$1);
});

dispatch_map.core.DispatchMap.prototype.java$util$Map$values$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.vals.call(null,this$__$1);
});

dispatch_map.core.DispatchMap.prototype.clojure$lang$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

dispatch_map.core.DispatchMap.prototype.clojure$lang$ILookup$valAt$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.valAt(k,null);
});

dispatch_map.core.DispatchMap.prototype.clojure$lang$ILookup$valAt$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var temp__6751__auto__ = this$__$1.entryAt(k);
if(cljs.core.truth_(temp__6751__auto__)){
var entry = temp__6751__auto__;
return entry.val();
} else {
return not_found;
}
});

dispatch_map.core.DispatchMap.prototype.clojure$lang$IPersistentCollection$ = cljs.core.PROTOCOL_SENTINEL;

dispatch_map.core.DispatchMap.prototype.clojure$lang$IPersistentCollection$cons$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return dispatch_map.core.update_map.call(null,this$__$1,self__.m.cons(o));
});

dispatch_map.core.DispatchMap.prototype.clojure$lang$IPersistentCollection$empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return dispatch_map.core.update_map.call(null,this$__$1,cljs.core.PersistentArrayMap.EMPTY);
});

dispatch_map.core.DispatchMap.prototype.clojure$lang$IPersistentCollection$equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return (cljs.core.isa_QMARK_.call(null,dispatch_map.core.class$.call(null,o),dispatch_map.core.DispatchMap)) && (cljs.core._EQ_.call(null,self__.dispatch_fn,o.dispatch_fn())) && (cljs.core._EQ_.call(null,self__.hierarchy,o.hierarchy())) && (cljs.core._EQ_.call(null,self__.m,o.m())) && (cljs.core._EQ_.call(null,self__.preferences,o.preferences()));
});

dispatch_map.core.DispatchMap.prototype.dispatch_map$core$IDispatch$ = cljs.core.PROTOCOL_SENTINEL;

dispatch_map.core.DispatchMap.prototype.dispatch_map$core$IDispatch$_dispatch_fn$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.dispatch_fn;
});

dispatch_map.core.DispatchMap.prototype.dispatch_map$core$IDispatch$_hierarchy$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.hierarchy;
});

dispatch_map.core.DispatchMap.prototype.dispatch_map$core$IDispatch$_find_dispatched$arity$2 = (function (this$,dispatch_val){
var self__ = this;
var this$__$1 = this;
var c = cljs.core.deref.call(null,self__.cache);
if(cljs.core._EQ_.call(null,c.hierarchy(),cljs.core.deref.call(null,self__.hierarchy))){
} else {
dispatch_map.core.reset_cache_BANG_.call(null,this$__$1);
}

var entry = cljs.core.get.call(null,c.table(),dispatch_val,new cljs.core.Keyword("dispatch-map.core","not-found","dispatch-map.core/not-found",-1076730504));
if(cljs.core._EQ_.call(null,entry,new cljs.core.Keyword("dispatch-map.core","not-found","dispatch-map.core/not-found",-1076730504))){
var c__$1 = cljs.core.swap_BANG_.call(null,self__.cache,((function (entry,c,this$__$1){
return (function (p1__38164_SHARP_){
return dispatch_map.core.cache_best.call(null,this$__$1,p1__38164_SHARP_,dispatch_val);
});})(entry,c,this$__$1))
);
return cljs.core.get.call(null,c__$1.table(),dispatch_val);
} else {
return entry;
}
});

dispatch_map.core.DispatchMap.prototype.dispatch_map$core$IDispatch$_prefer$arity$3 = (function (this$,dispatch_val_x,dispatch_val_y){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(dispatch_map.core.prefers_QMARK_.call(null,this$__$1,dispatch_val_y,dispatch_val_x))){
throw (new dispatch_map.core.Exception([cljs.core.str("Preference conflict: "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else {
}

var preferences_STAR_ = cljs.core.update_in.call(null,self__.preferences,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dispatch_val_x], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y);
return (new dispatch_map.core.DispatchMap(self__.dispatch_fn,self__.hierarchy,self__.m,preferences_STAR_,cljs.core.atom.call(null,dispatch_map.core.empty_cache.call(null,this$__$1))));
});

dispatch_map.core.DispatchMap.prototype.dispatch_map$core$IDispatch$_preferences$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.preferences;
});

dispatch_map.core.DispatchMap.prototype.clojure$lang$IFn$ = cljs.core.PROTOCOL_SENTINEL;

dispatch_map.core.DispatchMap.prototype.clojure$lang$IFn$invoke$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.valAt(key);
});

dispatch_map.core.DispatchMap.prototype.clojure$lang$IFn$invoke$arity$3 = (function (this$,key,not_found){
var self__ = this;
var this$__$1 = this;
return this$__$1.valAt(key,not_found);
});

dispatch_map.core.DispatchMap.prototype.clojure$lang$Counted$ = cljs.core.PROTOCOL_SENTINEL;

dispatch_map.core.DispatchMap.prototype.clojure$lang$Counted$count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.m.count();
});

dispatch_map.core.DispatchMap.prototype.clojure$lang$IPersistentMap$ = cljs.core.PROTOCOL_SENTINEL;

dispatch_map.core.DispatchMap.prototype.clojure$lang$IPersistentMap$assoc$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
return dispatch_map.core.update_map.call(null,this$__$1,self__.m.assoc(k,v));
});

dispatch_map.core.DispatchMap.prototype.clojure$lang$IPersistentMap$assocEx$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
return dispatch_map.core.update_map.call(null,this$__$1,self__.m.assocEx(k,v));
});

dispatch_map.core.DispatchMap.prototype.clojure$lang$IPersistentMap$without$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return dispatch_map.core.update_map.call(null,this$__$1,self__.m.without(k));
});

dispatch_map.core.DispatchMap.prototype.clojure$lang$Seqable$ = cljs.core.PROTOCOL_SENTINEL;

dispatch_map.core.DispatchMap.prototype.clojure$lang$Seqable$seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.m.seq();
});

dispatch_map.core.DispatchMap.prototype.java$lang$Iterable$ = cljs.core.PROTOCOL_SENTINEL;

dispatch_map.core.DispatchMap.prototype.java$lang$Iterable$iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.m.iterator();
});

dispatch_map.core.DispatchMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"hierarchy","hierarchy",587061186,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"preferences","preferences",1156219316,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)], null);
});

dispatch_map.core.DispatchMap.cljs$lang$type = true;

dispatch_map.core.DispatchMap.cljs$lang$ctorStr = "dispatch-map.core/DispatchMap";

dispatch_map.core.DispatchMap.cljs$lang$ctorPrWriter = (function (this__27340__auto__,writer__27341__auto__,opt__27342__auto__){
return cljs.core._write.call(null,writer__27341__auto__,"dispatch-map.core/DispatchMap");
});

dispatch_map.core.__GT_DispatchMap = (function dispatch_map$core$__GT_DispatchMap(dispatch_fn,hierarchy,m,preferences,cache){
return (new dispatch_map.core.DispatchMap(dispatch_fn,hierarchy,m,preferences,cache));
});

dispatch_map.core.empty_cache = (function dispatch_map$core$empty_cache(dm){
return (new dispatch_map.core.DispatchCache(cljs.core.deref.call(null,dm.hierarchy()),cljs.core.PersistentArrayMap.EMPTY,null,null,null));
});
dispatch_map.core.reset_cache_BANG_ = (function dispatch_map$core$reset_cache_BANG_(dm){
return cljs.core.reset_BANG_.call(null,dm.cache(),dispatch_map.core.empty_cache.call(null,dm));
});
dispatch_map.core.update_map = (function dispatch_map$core$update_map(dm,m){
return (new dispatch_map.core.DispatchMap(dm.dispatch_fn(),dm.hierarchy(),m,dm.preferences(),cljs.core.atom.call(null,dispatch_map.core.empty_cache.call(null,dm))));
});
dispatch_map.core.prefers_QMARK_ = (function dispatch_map$core$prefers_QMARK_(dm,x,y){
var or__26688__auto__ = cljs.core.contains_QMARK_.call(null,dm.preferences().call(null,x),y);
if(or__26688__auto__){
return or__26688__auto__;
} else {
var or__26688__auto____$1 = cljs.core.some.call(null,((function (or__26688__auto__){
return (function (p1__38165_SHARP_){
return dispatch_map.core.prefers_QMARK_.call(null,dm,x,p1__38165_SHARP_);
});})(or__26688__auto__))
,cljs.core.parents.call(null,y));
if(cljs.core.truth_(or__26688__auto____$1)){
return or__26688__auto____$1;
} else {
return cljs.core.some.call(null,((function (or__26688__auto____$1,or__26688__auto__){
return (function (p1__38166_SHARP_){
return dispatch_map.core.prefers_QMARK_.call(null,dm,p1__38166_SHARP_,y);
});})(or__26688__auto____$1,or__26688__auto__))
,cljs.core.parents.call(null,x));
}
}
});
dispatch_map.core.dominates_QMARK_ = (function dispatch_map$core$dominates_QMARK_(dm,hierarchy,x,y){
var or__26688__auto__ = dispatch_map.core.prefers_QMARK_.call(null,dm,x,y);
if(cljs.core.truth_(or__26688__auto__)){
return or__26688__auto__;
} else {
return dispatch_map.hierarchy.isa_QMARK_.call(null,hierarchy,x,y);
}
});
dispatch_map.core.find_best = (function dispatch_map$core$find_best(dm,hierarchy,dispatch_val){
return cljs.core.reduce.call(null,(function (best,entry){
if(cljs.core.truth_(dispatch_map.hierarchy.isa_QMARK_.call(null,hierarchy,dispatch_val,cljs.core.key.call(null,entry)))){
var best_STAR_ = (cljs.core.truth_((function (){var or__26688__auto__ = cljs.core.not.call(null,best);
if(or__26688__auto__){
return or__26688__auto__;
} else {
return dispatch_map.core.dominates_QMARK_.call(null,dm,hierarchy,cljs.core.key.call(null,entry),cljs.core.key.call(null,best));
}
})())?entry:best);
if(cljs.core.truth_(dispatch_map.core.dominates_QMARK_.call(null,dm,hierarchy,cljs.core.key.call(null,best_STAR_),cljs.core.key.call(null,entry)))){
} else {
throw (new dispatch_map.core.IllegalArgumentException([cljs.core.str("Multiple keys match: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(cljs.core.key.call(null,entry)),cljs.core.str(" and "),cljs.core.str(cljs.core.key.call(null,best_STAR_)),cljs.core.str(", but neither is preferred")].join('')));
}

return best_STAR_;
} else {
return best;
}
}),null,dm.m());
});
dispatch_map.core.cache_best = (function dispatch_map$core$cache_best(dm,cache,dispatch_val){
var hierarchy = cache.hierarchy();
var entry = dispatch_map.core.find_best.call(null,dm,hierarchy,dispatch_val);
var table = cljs.core.assoc.call(null,cache.table(),dispatch_val,entry);
return (new dispatch_map.core.DispatchCache(hierarchy,table,null,null,null));
});
