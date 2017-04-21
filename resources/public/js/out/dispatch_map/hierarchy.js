// Compiled by ClojureScript 1.9.293 {}
goog.provide('dispatch_map.hierarchy');
goog.require('cljs.core');

/**
 * @interface
 */
dispatch_map.hierarchy.IHierarchy = function(){};

dispatch_map.hierarchy._isa = (function dispatch_map$hierarchy$_isa(this$,child,parent){
if((!((this$ == null))) && (!((this$.dispatch_map$hierarchy$IHierarchy$_isa$arity$3 == null)))){
return this$.dispatch_map$hierarchy$IHierarchy$_isa$arity$3(this$,child,parent);
} else {
var x__27401__auto__ = (((this$ == null))?null:this$);
var m__27402__auto__ = (dispatch_map.hierarchy._isa[goog.typeOf(x__27401__auto__)]);
if(!((m__27402__auto__ == null))){
return m__27402__auto__.call(null,this$,child,parent);
} else {
var m__27402__auto____$1 = (dispatch_map.hierarchy._isa["_"]);
if(!((m__27402__auto____$1 == null))){
return m__27402__auto____$1.call(null,this$,child,parent);
} else {
throw cljs.core.missing_protocol.call(null,"IHierarchy.-isa",this$);
}
}
}
});

/**
 * Returns true if (= child parent), or child is directly or
 *   indirectly derived from parent in hierarchy.
 */
dispatch_map.hierarchy.isa_QMARK_ = (function dispatch_map$hierarchy$isa_QMARK_(hierarchy,child,parent){
if(((!((hierarchy == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === hierarchy.dispatch_map$hierarchy$IHierarchy$)))?true:(((!hierarchy.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,dispatch_map.hierarchy.IHierarchy,hierarchy):false)):cljs.core.native_satisfies_QMARK_.call(null,dispatch_map.hierarchy.IHierarchy,hierarchy))){
return dispatch_map.hierarchy._isa.call(null,hierarchy,child,parent);
} else {
return cljs.core.isa_QMARK_.call(null,hierarchy,child,parent);
}
});

//# sourceMappingURL=hierarchy.js.map?rel=1486304143031