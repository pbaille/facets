// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__26688__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26688__auto__){
return or__26688__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__26688__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__26688__auto__)){
return or__26688__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34065_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34065_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34070 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34071 = null;
var count__34072 = (0);
var i__34073 = (0);
while(true){
if((i__34073 < count__34072)){
var n = cljs.core._nth.call(null,chunk__34071,i__34073);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34074 = seq__34070;
var G__34075 = chunk__34071;
var G__34076 = count__34072;
var G__34077 = (i__34073 + (1));
seq__34070 = G__34074;
chunk__34071 = G__34075;
count__34072 = G__34076;
i__34073 = G__34077;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__34070);
if(temp__6753__auto__){
var seq__34070__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34070__$1)){
var c__27594__auto__ = cljs.core.chunk_first.call(null,seq__34070__$1);
var G__34078 = cljs.core.chunk_rest.call(null,seq__34070__$1);
var G__34079 = c__27594__auto__;
var G__34080 = cljs.core.count.call(null,c__27594__auto__);
var G__34081 = (0);
seq__34070 = G__34078;
chunk__34071 = G__34079;
count__34072 = G__34080;
i__34073 = G__34081;
continue;
} else {
var n = cljs.core.first.call(null,seq__34070__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34082 = cljs.core.next.call(null,seq__34070__$1);
var G__34083 = null;
var G__34084 = (0);
var G__34085 = (0);
seq__34070 = G__34082;
chunk__34071 = G__34083;
count__34072 = G__34084;
i__34073 = G__34085;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34136_34147 = cljs.core.seq.call(null,deps);
var chunk__34137_34148 = null;
var count__34138_34149 = (0);
var i__34139_34150 = (0);
while(true){
if((i__34139_34150 < count__34138_34149)){
var dep_34151 = cljs.core._nth.call(null,chunk__34137_34148,i__34139_34150);
topo_sort_helper_STAR_.call(null,dep_34151,(depth + (1)),state);

var G__34152 = seq__34136_34147;
var G__34153 = chunk__34137_34148;
var G__34154 = count__34138_34149;
var G__34155 = (i__34139_34150 + (1));
seq__34136_34147 = G__34152;
chunk__34137_34148 = G__34153;
count__34138_34149 = G__34154;
i__34139_34150 = G__34155;
continue;
} else {
var temp__6753__auto___34156 = cljs.core.seq.call(null,seq__34136_34147);
if(temp__6753__auto___34156){
var seq__34136_34157__$1 = temp__6753__auto___34156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34136_34157__$1)){
var c__27594__auto___34158 = cljs.core.chunk_first.call(null,seq__34136_34157__$1);
var G__34159 = cljs.core.chunk_rest.call(null,seq__34136_34157__$1);
var G__34160 = c__27594__auto___34158;
var G__34161 = cljs.core.count.call(null,c__27594__auto___34158);
var G__34162 = (0);
seq__34136_34147 = G__34159;
chunk__34137_34148 = G__34160;
count__34138_34149 = G__34161;
i__34139_34150 = G__34162;
continue;
} else {
var dep_34163 = cljs.core.first.call(null,seq__34136_34157__$1);
topo_sort_helper_STAR_.call(null,dep_34163,(depth + (1)),state);

var G__34164 = cljs.core.next.call(null,seq__34136_34157__$1);
var G__34165 = null;
var G__34166 = (0);
var G__34167 = (0);
seq__34136_34147 = G__34164;
chunk__34137_34148 = G__34165;
count__34138_34149 = G__34166;
i__34139_34150 = G__34167;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34140){
var vec__34144 = p__34140;
var seq__34145 = cljs.core.seq.call(null,vec__34144);
var first__34146 = cljs.core.first.call(null,seq__34145);
var seq__34145__$1 = cljs.core.next.call(null,seq__34145);
var x = first__34146;
var xs = seq__34145__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34144,seq__34145,first__34146,seq__34145__$1,x,xs,get_deps__$1){
return (function (p1__34086_SHARP_){
return clojure.set.difference.call(null,p1__34086_SHARP_,x);
});})(vec__34144,seq__34145,first__34146,seq__34145__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34180 = cljs.core.seq.call(null,provides);
var chunk__34181 = null;
var count__34182 = (0);
var i__34183 = (0);
while(true){
if((i__34183 < count__34182)){
var prov = cljs.core._nth.call(null,chunk__34181,i__34183);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34184_34192 = cljs.core.seq.call(null,requires);
var chunk__34185_34193 = null;
var count__34186_34194 = (0);
var i__34187_34195 = (0);
while(true){
if((i__34187_34195 < count__34186_34194)){
var req_34196 = cljs.core._nth.call(null,chunk__34185_34193,i__34187_34195);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34196,prov);

var G__34197 = seq__34184_34192;
var G__34198 = chunk__34185_34193;
var G__34199 = count__34186_34194;
var G__34200 = (i__34187_34195 + (1));
seq__34184_34192 = G__34197;
chunk__34185_34193 = G__34198;
count__34186_34194 = G__34199;
i__34187_34195 = G__34200;
continue;
} else {
var temp__6753__auto___34201 = cljs.core.seq.call(null,seq__34184_34192);
if(temp__6753__auto___34201){
var seq__34184_34202__$1 = temp__6753__auto___34201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34184_34202__$1)){
var c__27594__auto___34203 = cljs.core.chunk_first.call(null,seq__34184_34202__$1);
var G__34204 = cljs.core.chunk_rest.call(null,seq__34184_34202__$1);
var G__34205 = c__27594__auto___34203;
var G__34206 = cljs.core.count.call(null,c__27594__auto___34203);
var G__34207 = (0);
seq__34184_34192 = G__34204;
chunk__34185_34193 = G__34205;
count__34186_34194 = G__34206;
i__34187_34195 = G__34207;
continue;
} else {
var req_34208 = cljs.core.first.call(null,seq__34184_34202__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34208,prov);

var G__34209 = cljs.core.next.call(null,seq__34184_34202__$1);
var G__34210 = null;
var G__34211 = (0);
var G__34212 = (0);
seq__34184_34192 = G__34209;
chunk__34185_34193 = G__34210;
count__34186_34194 = G__34211;
i__34187_34195 = G__34212;
continue;
}
} else {
}
}
break;
}

var G__34213 = seq__34180;
var G__34214 = chunk__34181;
var G__34215 = count__34182;
var G__34216 = (i__34183 + (1));
seq__34180 = G__34213;
chunk__34181 = G__34214;
count__34182 = G__34215;
i__34183 = G__34216;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__34180);
if(temp__6753__auto__){
var seq__34180__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34180__$1)){
var c__27594__auto__ = cljs.core.chunk_first.call(null,seq__34180__$1);
var G__34217 = cljs.core.chunk_rest.call(null,seq__34180__$1);
var G__34218 = c__27594__auto__;
var G__34219 = cljs.core.count.call(null,c__27594__auto__);
var G__34220 = (0);
seq__34180 = G__34217;
chunk__34181 = G__34218;
count__34182 = G__34219;
i__34183 = G__34220;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34180__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34188_34221 = cljs.core.seq.call(null,requires);
var chunk__34189_34222 = null;
var count__34190_34223 = (0);
var i__34191_34224 = (0);
while(true){
if((i__34191_34224 < count__34190_34223)){
var req_34225 = cljs.core._nth.call(null,chunk__34189_34222,i__34191_34224);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34225,prov);

var G__34226 = seq__34188_34221;
var G__34227 = chunk__34189_34222;
var G__34228 = count__34190_34223;
var G__34229 = (i__34191_34224 + (1));
seq__34188_34221 = G__34226;
chunk__34189_34222 = G__34227;
count__34190_34223 = G__34228;
i__34191_34224 = G__34229;
continue;
} else {
var temp__6753__auto___34230__$1 = cljs.core.seq.call(null,seq__34188_34221);
if(temp__6753__auto___34230__$1){
var seq__34188_34231__$1 = temp__6753__auto___34230__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34188_34231__$1)){
var c__27594__auto___34232 = cljs.core.chunk_first.call(null,seq__34188_34231__$1);
var G__34233 = cljs.core.chunk_rest.call(null,seq__34188_34231__$1);
var G__34234 = c__27594__auto___34232;
var G__34235 = cljs.core.count.call(null,c__27594__auto___34232);
var G__34236 = (0);
seq__34188_34221 = G__34233;
chunk__34189_34222 = G__34234;
count__34190_34223 = G__34235;
i__34191_34224 = G__34236;
continue;
} else {
var req_34237 = cljs.core.first.call(null,seq__34188_34231__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34237,prov);

var G__34238 = cljs.core.next.call(null,seq__34188_34231__$1);
var G__34239 = null;
var G__34240 = (0);
var G__34241 = (0);
seq__34188_34221 = G__34238;
chunk__34189_34222 = G__34239;
count__34190_34223 = G__34240;
i__34191_34224 = G__34241;
continue;
}
} else {
}
}
break;
}

var G__34242 = cljs.core.next.call(null,seq__34180__$1);
var G__34243 = null;
var G__34244 = (0);
var G__34245 = (0);
seq__34180 = G__34242;
chunk__34181 = G__34243;
count__34182 = G__34244;
i__34183 = G__34245;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34250_34254 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34251_34255 = null;
var count__34252_34256 = (0);
var i__34253_34257 = (0);
while(true){
if((i__34253_34257 < count__34252_34256)){
var ns_34258 = cljs.core._nth.call(null,chunk__34251_34255,i__34253_34257);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34258);

var G__34259 = seq__34250_34254;
var G__34260 = chunk__34251_34255;
var G__34261 = count__34252_34256;
var G__34262 = (i__34253_34257 + (1));
seq__34250_34254 = G__34259;
chunk__34251_34255 = G__34260;
count__34252_34256 = G__34261;
i__34253_34257 = G__34262;
continue;
} else {
var temp__6753__auto___34263 = cljs.core.seq.call(null,seq__34250_34254);
if(temp__6753__auto___34263){
var seq__34250_34264__$1 = temp__6753__auto___34263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34250_34264__$1)){
var c__27594__auto___34265 = cljs.core.chunk_first.call(null,seq__34250_34264__$1);
var G__34266 = cljs.core.chunk_rest.call(null,seq__34250_34264__$1);
var G__34267 = c__27594__auto___34265;
var G__34268 = cljs.core.count.call(null,c__27594__auto___34265);
var G__34269 = (0);
seq__34250_34254 = G__34266;
chunk__34251_34255 = G__34267;
count__34252_34256 = G__34268;
i__34253_34257 = G__34269;
continue;
} else {
var ns_34270 = cljs.core.first.call(null,seq__34250_34264__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34270);

var G__34271 = cljs.core.next.call(null,seq__34250_34264__$1);
var G__34272 = null;
var G__34273 = (0);
var G__34274 = (0);
seq__34250_34254 = G__34271;
chunk__34251_34255 = G__34272;
count__34252_34256 = G__34273;
i__34253_34257 = G__34274;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__26688__auto__ = goog.require__;
if(cljs.core.truth_(or__26688__auto__)){
return or__26688__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34275__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34276__i = 0, G__34276__a = new Array(arguments.length -  0);
while (G__34276__i < G__34276__a.length) {G__34276__a[G__34276__i] = arguments[G__34276__i + 0]; ++G__34276__i;}
  args = new cljs.core.IndexedSeq(G__34276__a,0);
} 
return G__34275__delegate.call(this,args);};
G__34275.cljs$lang$maxFixedArity = 0;
G__34275.cljs$lang$applyTo = (function (arglist__34277){
var args = cljs.core.seq(arglist__34277);
return G__34275__delegate(args);
});
G__34275.cljs$core$IFn$_invoke$arity$variadic = G__34275__delegate;
return G__34275;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34279 = cljs.core._EQ_;
var expr__34280 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34279.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34280))){
var path_parts = ((function (pred__34279,expr__34280){
return (function (p1__34278_SHARP_){
return clojure.string.split.call(null,p1__34278_SHARP_,/[\/\\]/);
});})(pred__34279,expr__34280))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__34279,expr__34280){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34282){if((e34282 instanceof Error)){
var e = e34282;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34282;

}
}})());
});
;})(path_parts,sep,root,pred__34279,expr__34280))
} else {
if(cljs.core.truth_(pred__34279.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34280))){
return ((function (pred__34279,expr__34280){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__34279,expr__34280){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34279,expr__34280))
);

return deferred.addErrback(((function (deferred,pred__34279,expr__34280){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34279,expr__34280))
);
});
;})(pred__34279,expr__34280))
} else {
return ((function (pred__34279,expr__34280){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34279,expr__34280))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34283,callback){
var map__34286 = p__34283;
var map__34286__$1 = ((((!((map__34286 == null)))?((((map__34286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34286):map__34286);
var file_msg = map__34286__$1;
var request_url = cljs.core.get.call(null,map__34286__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34286,map__34286__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34286,map__34286__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto__){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto__){
return (function (state_34310){
var state_val_34311 = (state_34310[(1)]);
if((state_val_34311 === (7))){
var inst_34306 = (state_34310[(2)]);
var state_34310__$1 = state_34310;
var statearr_34312_34332 = state_34310__$1;
(statearr_34312_34332[(2)] = inst_34306);

(statearr_34312_34332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (1))){
var state_34310__$1 = state_34310;
var statearr_34313_34333 = state_34310__$1;
(statearr_34313_34333[(2)] = null);

(statearr_34313_34333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (4))){
var inst_34290 = (state_34310[(7)]);
var inst_34290__$1 = (state_34310[(2)]);
var state_34310__$1 = (function (){var statearr_34314 = state_34310;
(statearr_34314[(7)] = inst_34290__$1);

return statearr_34314;
})();
if(cljs.core.truth_(inst_34290__$1)){
var statearr_34315_34334 = state_34310__$1;
(statearr_34315_34334[(1)] = (5));

} else {
var statearr_34316_34335 = state_34310__$1;
(statearr_34316_34335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (6))){
var state_34310__$1 = state_34310;
var statearr_34317_34336 = state_34310__$1;
(statearr_34317_34336[(2)] = null);

(statearr_34317_34336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (3))){
var inst_34308 = (state_34310[(2)]);
var state_34310__$1 = state_34310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34310__$1,inst_34308);
} else {
if((state_val_34311 === (2))){
var state_34310__$1 = state_34310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34310__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34311 === (11))){
var inst_34302 = (state_34310[(2)]);
var state_34310__$1 = (function (){var statearr_34318 = state_34310;
(statearr_34318[(8)] = inst_34302);

return statearr_34318;
})();
var statearr_34319_34337 = state_34310__$1;
(statearr_34319_34337[(2)] = null);

(statearr_34319_34337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (9))){
var inst_34294 = (state_34310[(9)]);
var inst_34296 = (state_34310[(10)]);
var inst_34298 = inst_34296.call(null,inst_34294);
var state_34310__$1 = state_34310;
var statearr_34320_34338 = state_34310__$1;
(statearr_34320_34338[(2)] = inst_34298);

(statearr_34320_34338[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (5))){
var inst_34290 = (state_34310[(7)]);
var inst_34292 = figwheel.client.file_reloading.blocking_load.call(null,inst_34290);
var state_34310__$1 = state_34310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34310__$1,(8),inst_34292);
} else {
if((state_val_34311 === (10))){
var inst_34294 = (state_34310[(9)]);
var inst_34300 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34294);
var state_34310__$1 = state_34310;
var statearr_34321_34339 = state_34310__$1;
(statearr_34321_34339[(2)] = inst_34300);

(statearr_34321_34339[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (8))){
var inst_34296 = (state_34310[(10)]);
var inst_34290 = (state_34310[(7)]);
var inst_34294 = (state_34310[(2)]);
var inst_34295 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34296__$1 = cljs.core.get.call(null,inst_34295,inst_34290);
var state_34310__$1 = (function (){var statearr_34322 = state_34310;
(statearr_34322[(9)] = inst_34294);

(statearr_34322[(10)] = inst_34296__$1);

return statearr_34322;
})();
if(cljs.core.truth_(inst_34296__$1)){
var statearr_34323_34340 = state_34310__$1;
(statearr_34323_34340[(1)] = (9));

} else {
var statearr_34324_34341 = state_34310__$1;
(statearr_34324_34341[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31119__auto__))
;
return ((function (switch__31005__auto__,c__31119__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31006__auto__ = null;
var figwheel$client$file_reloading$state_machine__31006__auto____0 = (function (){
var statearr_34328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34328[(0)] = figwheel$client$file_reloading$state_machine__31006__auto__);

(statearr_34328[(1)] = (1));

return statearr_34328;
});
var figwheel$client$file_reloading$state_machine__31006__auto____1 = (function (state_34310){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_34310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e34329){if((e34329 instanceof Object)){
var ex__31009__auto__ = e34329;
var statearr_34330_34342 = state_34310;
(statearr_34330_34342[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34343 = state_34310;
state_34310 = G__34343;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31006__auto__ = function(state_34310){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31006__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31006__auto____1.call(this,state_34310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31006__auto____0;
figwheel$client$file_reloading$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31006__auto____1;
return figwheel$client$file_reloading$state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto__))
})();
var state__31121__auto__ = (function (){var statearr_34331 = f__31120__auto__.call(null);
(statearr_34331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto__);

return statearr_34331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto__))
);

return c__31119__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34344,callback){
var map__34347 = p__34344;
var map__34347__$1 = ((((!((map__34347 == null)))?((((map__34347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34347):map__34347);
var file_msg = map__34347__$1;
var namespace = cljs.core.get.call(null,map__34347__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34347,map__34347__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34347,map__34347__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34349){
var map__34352 = p__34349;
var map__34352__$1 = ((((!((map__34352 == null)))?((((map__34352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34352.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34352):map__34352);
var file_msg = map__34352__$1;
var namespace = cljs.core.get.call(null,map__34352__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26676__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__26676__auto__){
var or__26688__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26688__auto__)){
return or__26688__auto__;
} else {
var or__26688__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26688__auto____$1)){
return or__26688__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26676__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34354,callback){
var map__34357 = p__34354;
var map__34357__$1 = ((((!((map__34357 == null)))?((((map__34357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34357.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34357):map__34357);
var file_msg = map__34357__$1;
var request_url = cljs.core.get.call(null,map__34357__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34357__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31119__auto___34461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto___34461,out){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto___34461,out){
return (function (state_34443){
var state_val_34444 = (state_34443[(1)]);
if((state_val_34444 === (1))){
var inst_34417 = cljs.core.seq.call(null,files);
var inst_34418 = cljs.core.first.call(null,inst_34417);
var inst_34419 = cljs.core.next.call(null,inst_34417);
var inst_34420 = files;
var state_34443__$1 = (function (){var statearr_34445 = state_34443;
(statearr_34445[(7)] = inst_34420);

(statearr_34445[(8)] = inst_34418);

(statearr_34445[(9)] = inst_34419);

return statearr_34445;
})();
var statearr_34446_34462 = state_34443__$1;
(statearr_34446_34462[(2)] = null);

(statearr_34446_34462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (2))){
var inst_34420 = (state_34443[(7)]);
var inst_34426 = (state_34443[(10)]);
var inst_34425 = cljs.core.seq.call(null,inst_34420);
var inst_34426__$1 = cljs.core.first.call(null,inst_34425);
var inst_34427 = cljs.core.next.call(null,inst_34425);
var inst_34428 = (inst_34426__$1 == null);
var inst_34429 = cljs.core.not.call(null,inst_34428);
var state_34443__$1 = (function (){var statearr_34447 = state_34443;
(statearr_34447[(11)] = inst_34427);

(statearr_34447[(10)] = inst_34426__$1);

return statearr_34447;
})();
if(inst_34429){
var statearr_34448_34463 = state_34443__$1;
(statearr_34448_34463[(1)] = (4));

} else {
var statearr_34449_34464 = state_34443__$1;
(statearr_34449_34464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (3))){
var inst_34441 = (state_34443[(2)]);
var state_34443__$1 = state_34443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34443__$1,inst_34441);
} else {
if((state_val_34444 === (4))){
var inst_34426 = (state_34443[(10)]);
var inst_34431 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34426);
var state_34443__$1 = state_34443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34443__$1,(7),inst_34431);
} else {
if((state_val_34444 === (5))){
var inst_34437 = cljs.core.async.close_BANG_.call(null,out);
var state_34443__$1 = state_34443;
var statearr_34450_34465 = state_34443__$1;
(statearr_34450_34465[(2)] = inst_34437);

(statearr_34450_34465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (6))){
var inst_34439 = (state_34443[(2)]);
var state_34443__$1 = state_34443;
var statearr_34451_34466 = state_34443__$1;
(statearr_34451_34466[(2)] = inst_34439);

(statearr_34451_34466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (7))){
var inst_34427 = (state_34443[(11)]);
var inst_34433 = (state_34443[(2)]);
var inst_34434 = cljs.core.async.put_BANG_.call(null,out,inst_34433);
var inst_34420 = inst_34427;
var state_34443__$1 = (function (){var statearr_34452 = state_34443;
(statearr_34452[(12)] = inst_34434);

(statearr_34452[(7)] = inst_34420);

return statearr_34452;
})();
var statearr_34453_34467 = state_34443__$1;
(statearr_34453_34467[(2)] = null);

(statearr_34453_34467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__31119__auto___34461,out))
;
return ((function (switch__31005__auto__,c__31119__auto___34461,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31006__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31006__auto____0 = (function (){
var statearr_34457 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34457[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31006__auto__);

(statearr_34457[(1)] = (1));

return statearr_34457;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31006__auto____1 = (function (state_34443){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_34443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e34458){if((e34458 instanceof Object)){
var ex__31009__auto__ = e34458;
var statearr_34459_34468 = state_34443;
(statearr_34459_34468[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34469 = state_34443;
state_34443 = G__34469;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31006__auto__ = function(state_34443){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31006__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31006__auto____1.call(this,state_34443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31006__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31006__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto___34461,out))
})();
var state__31121__auto__ = (function (){var statearr_34460 = f__31120__auto__.call(null);
(statearr_34460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto___34461);

return statearr_34460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto___34461,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34470,opts){
var map__34474 = p__34470;
var map__34474__$1 = ((((!((map__34474 == null)))?((((map__34474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34474):map__34474);
var eval_body = cljs.core.get.call(null,map__34474__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34474__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26676__auto__ = eval_body;
if(cljs.core.truth_(and__26676__auto__)){
return typeof eval_body === 'string';
} else {
return and__26676__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34476){var e = e34476;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34477_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34477_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6751__auto__)){
var file_msg = temp__6751__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34486){
var vec__34487 = p__34486;
var k = cljs.core.nth.call(null,vec__34487,(0),null);
var v = cljs.core.nth.call(null,vec__34487,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34490){
var vec__34491 = p__34490;
var k = cljs.core.nth.call(null,vec__34491,(0),null);
var v = cljs.core.nth.call(null,vec__34491,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34497,p__34498){
var map__34746 = p__34497;
var map__34746__$1 = ((((!((map__34746 == null)))?((((map__34746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34746.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34746):map__34746);
var opts = map__34746__$1;
var before_jsload = cljs.core.get.call(null,map__34746__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34746__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34746__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34747 = p__34498;
var map__34747__$1 = ((((!((map__34747 == null)))?((((map__34747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34747):map__34747);
var msg = map__34747__$1;
var files = cljs.core.get.call(null,map__34747__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34747__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34747__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto__,map__34746,map__34746__$1,opts,before_jsload,on_jsload,reload_dependents,map__34747,map__34747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto__,map__34746,map__34746__$1,opts,before_jsload,on_jsload,reload_dependents,map__34747,map__34747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34901){
var state_val_34902 = (state_34901[(1)]);
if((state_val_34902 === (7))){
var inst_34761 = (state_34901[(7)]);
var inst_34763 = (state_34901[(8)]);
var inst_34764 = (state_34901[(9)]);
var inst_34762 = (state_34901[(10)]);
var inst_34769 = cljs.core._nth.call(null,inst_34762,inst_34764);
var inst_34770 = figwheel.client.file_reloading.eval_body.call(null,inst_34769,opts);
var inst_34771 = (inst_34764 + (1));
var tmp34903 = inst_34761;
var tmp34904 = inst_34763;
var tmp34905 = inst_34762;
var inst_34761__$1 = tmp34903;
var inst_34762__$1 = tmp34905;
var inst_34763__$1 = tmp34904;
var inst_34764__$1 = inst_34771;
var state_34901__$1 = (function (){var statearr_34906 = state_34901;
(statearr_34906[(7)] = inst_34761__$1);

(statearr_34906[(8)] = inst_34763__$1);

(statearr_34906[(11)] = inst_34770);

(statearr_34906[(9)] = inst_34764__$1);

(statearr_34906[(10)] = inst_34762__$1);

return statearr_34906;
})();
var statearr_34907_34993 = state_34901__$1;
(statearr_34907_34993[(2)] = null);

(statearr_34907_34993[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (20))){
var inst_34804 = (state_34901[(12)]);
var inst_34812 = figwheel.client.file_reloading.sort_files.call(null,inst_34804);
var state_34901__$1 = state_34901;
var statearr_34908_34994 = state_34901__$1;
(statearr_34908_34994[(2)] = inst_34812);

(statearr_34908_34994[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (27))){
var state_34901__$1 = state_34901;
var statearr_34909_34995 = state_34901__$1;
(statearr_34909_34995[(2)] = null);

(statearr_34909_34995[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (1))){
var inst_34753 = (state_34901[(13)]);
var inst_34750 = before_jsload.call(null,files);
var inst_34751 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34752 = (function (){return ((function (inst_34753,inst_34750,inst_34751,state_val_34902,c__31119__auto__,map__34746,map__34746__$1,opts,before_jsload,on_jsload,reload_dependents,map__34747,map__34747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34494_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34494_SHARP_);
});
;})(inst_34753,inst_34750,inst_34751,state_val_34902,c__31119__auto__,map__34746,map__34746__$1,opts,before_jsload,on_jsload,reload_dependents,map__34747,map__34747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34753__$1 = cljs.core.filter.call(null,inst_34752,files);
var inst_34754 = cljs.core.not_empty.call(null,inst_34753__$1);
var state_34901__$1 = (function (){var statearr_34910 = state_34901;
(statearr_34910[(14)] = inst_34751);

(statearr_34910[(15)] = inst_34750);

(statearr_34910[(13)] = inst_34753__$1);

return statearr_34910;
})();
if(cljs.core.truth_(inst_34754)){
var statearr_34911_34996 = state_34901__$1;
(statearr_34911_34996[(1)] = (2));

} else {
var statearr_34912_34997 = state_34901__$1;
(statearr_34912_34997[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (24))){
var state_34901__$1 = state_34901;
var statearr_34913_34998 = state_34901__$1;
(statearr_34913_34998[(2)] = null);

(statearr_34913_34998[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (39))){
var inst_34854 = (state_34901[(16)]);
var state_34901__$1 = state_34901;
var statearr_34914_34999 = state_34901__$1;
(statearr_34914_34999[(2)] = inst_34854);

(statearr_34914_34999[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (46))){
var inst_34896 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
var statearr_34915_35000 = state_34901__$1;
(statearr_34915_35000[(2)] = inst_34896);

(statearr_34915_35000[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (4))){
var inst_34798 = (state_34901[(2)]);
var inst_34799 = cljs.core.List.EMPTY;
var inst_34800 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34799);
var inst_34801 = (function (){return ((function (inst_34798,inst_34799,inst_34800,state_val_34902,c__31119__auto__,map__34746,map__34746__$1,opts,before_jsload,on_jsload,reload_dependents,map__34747,map__34747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34495_SHARP_){
var and__26676__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34495_SHARP_);
if(cljs.core.truth_(and__26676__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34495_SHARP_));
} else {
return and__26676__auto__;
}
});
;})(inst_34798,inst_34799,inst_34800,state_val_34902,c__31119__auto__,map__34746,map__34746__$1,opts,before_jsload,on_jsload,reload_dependents,map__34747,map__34747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34802 = cljs.core.filter.call(null,inst_34801,files);
var inst_34803 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34804 = cljs.core.concat.call(null,inst_34802,inst_34803);
var state_34901__$1 = (function (){var statearr_34916 = state_34901;
(statearr_34916[(17)] = inst_34798);

(statearr_34916[(18)] = inst_34800);

(statearr_34916[(12)] = inst_34804);

return statearr_34916;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34917_35001 = state_34901__$1;
(statearr_34917_35001[(1)] = (16));

} else {
var statearr_34918_35002 = state_34901__$1;
(statearr_34918_35002[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (15))){
var inst_34788 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
var statearr_34919_35003 = state_34901__$1;
(statearr_34919_35003[(2)] = inst_34788);

(statearr_34919_35003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (21))){
var inst_34814 = (state_34901[(19)]);
var inst_34814__$1 = (state_34901[(2)]);
var inst_34815 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34814__$1);
var state_34901__$1 = (function (){var statearr_34920 = state_34901;
(statearr_34920[(19)] = inst_34814__$1);

return statearr_34920;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34901__$1,(22),inst_34815);
} else {
if((state_val_34902 === (31))){
var inst_34899 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34901__$1,inst_34899);
} else {
if((state_val_34902 === (32))){
var inst_34854 = (state_34901[(16)]);
var inst_34859 = inst_34854.cljs$lang$protocol_mask$partition0$;
var inst_34860 = (inst_34859 & (64));
var inst_34861 = inst_34854.cljs$core$ISeq$;
var inst_34862 = (cljs.core.PROTOCOL_SENTINEL === inst_34861);
var inst_34863 = (inst_34860) || (inst_34862);
var state_34901__$1 = state_34901;
if(cljs.core.truth_(inst_34863)){
var statearr_34921_35004 = state_34901__$1;
(statearr_34921_35004[(1)] = (35));

} else {
var statearr_34922_35005 = state_34901__$1;
(statearr_34922_35005[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (40))){
var inst_34876 = (state_34901[(20)]);
var inst_34875 = (state_34901[(2)]);
var inst_34876__$1 = cljs.core.get.call(null,inst_34875,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34877 = cljs.core.get.call(null,inst_34875,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34878 = cljs.core.not_empty.call(null,inst_34876__$1);
var state_34901__$1 = (function (){var statearr_34923 = state_34901;
(statearr_34923[(20)] = inst_34876__$1);

(statearr_34923[(21)] = inst_34877);

return statearr_34923;
})();
if(cljs.core.truth_(inst_34878)){
var statearr_34924_35006 = state_34901__$1;
(statearr_34924_35006[(1)] = (41));

} else {
var statearr_34925_35007 = state_34901__$1;
(statearr_34925_35007[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (33))){
var state_34901__$1 = state_34901;
var statearr_34926_35008 = state_34901__$1;
(statearr_34926_35008[(2)] = false);

(statearr_34926_35008[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (13))){
var inst_34774 = (state_34901[(22)]);
var inst_34778 = cljs.core.chunk_first.call(null,inst_34774);
var inst_34779 = cljs.core.chunk_rest.call(null,inst_34774);
var inst_34780 = cljs.core.count.call(null,inst_34778);
var inst_34761 = inst_34779;
var inst_34762 = inst_34778;
var inst_34763 = inst_34780;
var inst_34764 = (0);
var state_34901__$1 = (function (){var statearr_34927 = state_34901;
(statearr_34927[(7)] = inst_34761);

(statearr_34927[(8)] = inst_34763);

(statearr_34927[(9)] = inst_34764);

(statearr_34927[(10)] = inst_34762);

return statearr_34927;
})();
var statearr_34928_35009 = state_34901__$1;
(statearr_34928_35009[(2)] = null);

(statearr_34928_35009[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (22))){
var inst_34818 = (state_34901[(23)]);
var inst_34822 = (state_34901[(24)]);
var inst_34814 = (state_34901[(19)]);
var inst_34817 = (state_34901[(25)]);
var inst_34817__$1 = (state_34901[(2)]);
var inst_34818__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34817__$1);
var inst_34819 = (function (){var all_files = inst_34814;
var res_SINGLEQUOTE_ = inst_34817__$1;
var res = inst_34818__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34818,inst_34822,inst_34814,inst_34817,inst_34817__$1,inst_34818__$1,state_val_34902,c__31119__auto__,map__34746,map__34746__$1,opts,before_jsload,on_jsload,reload_dependents,map__34747,map__34747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34496_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34496_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34818,inst_34822,inst_34814,inst_34817,inst_34817__$1,inst_34818__$1,state_val_34902,c__31119__auto__,map__34746,map__34746__$1,opts,before_jsload,on_jsload,reload_dependents,map__34747,map__34747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34820 = cljs.core.filter.call(null,inst_34819,inst_34817__$1);
var inst_34821 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34822__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34821);
var inst_34823 = cljs.core.not_empty.call(null,inst_34822__$1);
var state_34901__$1 = (function (){var statearr_34929 = state_34901;
(statearr_34929[(23)] = inst_34818__$1);

(statearr_34929[(24)] = inst_34822__$1);

(statearr_34929[(25)] = inst_34817__$1);

(statearr_34929[(26)] = inst_34820);

return statearr_34929;
})();
if(cljs.core.truth_(inst_34823)){
var statearr_34930_35010 = state_34901__$1;
(statearr_34930_35010[(1)] = (23));

} else {
var statearr_34931_35011 = state_34901__$1;
(statearr_34931_35011[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (36))){
var state_34901__$1 = state_34901;
var statearr_34932_35012 = state_34901__$1;
(statearr_34932_35012[(2)] = false);

(statearr_34932_35012[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (41))){
var inst_34876 = (state_34901[(20)]);
var inst_34880 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34881 = cljs.core.map.call(null,inst_34880,inst_34876);
var inst_34882 = cljs.core.pr_str.call(null,inst_34881);
var inst_34883 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34882)].join('');
var inst_34884 = figwheel.client.utils.log.call(null,inst_34883);
var state_34901__$1 = state_34901;
var statearr_34933_35013 = state_34901__$1;
(statearr_34933_35013[(2)] = inst_34884);

(statearr_34933_35013[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (43))){
var inst_34877 = (state_34901[(21)]);
var inst_34887 = (state_34901[(2)]);
var inst_34888 = cljs.core.not_empty.call(null,inst_34877);
var state_34901__$1 = (function (){var statearr_34934 = state_34901;
(statearr_34934[(27)] = inst_34887);

return statearr_34934;
})();
if(cljs.core.truth_(inst_34888)){
var statearr_34935_35014 = state_34901__$1;
(statearr_34935_35014[(1)] = (44));

} else {
var statearr_34936_35015 = state_34901__$1;
(statearr_34936_35015[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (29))){
var inst_34818 = (state_34901[(23)]);
var inst_34822 = (state_34901[(24)]);
var inst_34814 = (state_34901[(19)]);
var inst_34817 = (state_34901[(25)]);
var inst_34820 = (state_34901[(26)]);
var inst_34854 = (state_34901[(16)]);
var inst_34850 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34853 = (function (){var all_files = inst_34814;
var res_SINGLEQUOTE_ = inst_34817;
var res = inst_34818;
var files_not_loaded = inst_34820;
var dependencies_that_loaded = inst_34822;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34818,inst_34822,inst_34814,inst_34817,inst_34820,inst_34854,inst_34850,state_val_34902,c__31119__auto__,map__34746,map__34746__$1,opts,before_jsload,on_jsload,reload_dependents,map__34747,map__34747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34852){
var map__34937 = p__34852;
var map__34937__$1 = ((((!((map__34937 == null)))?((((map__34937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34937.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34937):map__34937);
var namespace = cljs.core.get.call(null,map__34937__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34818,inst_34822,inst_34814,inst_34817,inst_34820,inst_34854,inst_34850,state_val_34902,c__31119__auto__,map__34746,map__34746__$1,opts,before_jsload,on_jsload,reload_dependents,map__34747,map__34747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34854__$1 = cljs.core.group_by.call(null,inst_34853,inst_34820);
var inst_34856 = (inst_34854__$1 == null);
var inst_34857 = cljs.core.not.call(null,inst_34856);
var state_34901__$1 = (function (){var statearr_34939 = state_34901;
(statearr_34939[(28)] = inst_34850);

(statearr_34939[(16)] = inst_34854__$1);

return statearr_34939;
})();
if(inst_34857){
var statearr_34940_35016 = state_34901__$1;
(statearr_34940_35016[(1)] = (32));

} else {
var statearr_34941_35017 = state_34901__$1;
(statearr_34941_35017[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (44))){
var inst_34877 = (state_34901[(21)]);
var inst_34890 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34877);
var inst_34891 = cljs.core.pr_str.call(null,inst_34890);
var inst_34892 = [cljs.core.str("not required: "),cljs.core.str(inst_34891)].join('');
var inst_34893 = figwheel.client.utils.log.call(null,inst_34892);
var state_34901__$1 = state_34901;
var statearr_34942_35018 = state_34901__$1;
(statearr_34942_35018[(2)] = inst_34893);

(statearr_34942_35018[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (6))){
var inst_34795 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
var statearr_34943_35019 = state_34901__$1;
(statearr_34943_35019[(2)] = inst_34795);

(statearr_34943_35019[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (28))){
var inst_34820 = (state_34901[(26)]);
var inst_34847 = (state_34901[(2)]);
var inst_34848 = cljs.core.not_empty.call(null,inst_34820);
var state_34901__$1 = (function (){var statearr_34944 = state_34901;
(statearr_34944[(29)] = inst_34847);

return statearr_34944;
})();
if(cljs.core.truth_(inst_34848)){
var statearr_34945_35020 = state_34901__$1;
(statearr_34945_35020[(1)] = (29));

} else {
var statearr_34946_35021 = state_34901__$1;
(statearr_34946_35021[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (25))){
var inst_34818 = (state_34901[(23)]);
var inst_34834 = (state_34901[(2)]);
var inst_34835 = cljs.core.not_empty.call(null,inst_34818);
var state_34901__$1 = (function (){var statearr_34947 = state_34901;
(statearr_34947[(30)] = inst_34834);

return statearr_34947;
})();
if(cljs.core.truth_(inst_34835)){
var statearr_34948_35022 = state_34901__$1;
(statearr_34948_35022[(1)] = (26));

} else {
var statearr_34949_35023 = state_34901__$1;
(statearr_34949_35023[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (34))){
var inst_34870 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
if(cljs.core.truth_(inst_34870)){
var statearr_34950_35024 = state_34901__$1;
(statearr_34950_35024[(1)] = (38));

} else {
var statearr_34951_35025 = state_34901__$1;
(statearr_34951_35025[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (17))){
var state_34901__$1 = state_34901;
var statearr_34952_35026 = state_34901__$1;
(statearr_34952_35026[(2)] = recompile_dependents);

(statearr_34952_35026[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (3))){
var state_34901__$1 = state_34901;
var statearr_34953_35027 = state_34901__$1;
(statearr_34953_35027[(2)] = null);

(statearr_34953_35027[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (12))){
var inst_34791 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
var statearr_34954_35028 = state_34901__$1;
(statearr_34954_35028[(2)] = inst_34791);

(statearr_34954_35028[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (2))){
var inst_34753 = (state_34901[(13)]);
var inst_34760 = cljs.core.seq.call(null,inst_34753);
var inst_34761 = inst_34760;
var inst_34762 = null;
var inst_34763 = (0);
var inst_34764 = (0);
var state_34901__$1 = (function (){var statearr_34955 = state_34901;
(statearr_34955[(7)] = inst_34761);

(statearr_34955[(8)] = inst_34763);

(statearr_34955[(9)] = inst_34764);

(statearr_34955[(10)] = inst_34762);

return statearr_34955;
})();
var statearr_34956_35029 = state_34901__$1;
(statearr_34956_35029[(2)] = null);

(statearr_34956_35029[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (23))){
var inst_34818 = (state_34901[(23)]);
var inst_34822 = (state_34901[(24)]);
var inst_34814 = (state_34901[(19)]);
var inst_34817 = (state_34901[(25)]);
var inst_34820 = (state_34901[(26)]);
var inst_34825 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34827 = (function (){var all_files = inst_34814;
var res_SINGLEQUOTE_ = inst_34817;
var res = inst_34818;
var files_not_loaded = inst_34820;
var dependencies_that_loaded = inst_34822;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34818,inst_34822,inst_34814,inst_34817,inst_34820,inst_34825,state_val_34902,c__31119__auto__,map__34746,map__34746__$1,opts,before_jsload,on_jsload,reload_dependents,map__34747,map__34747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34826){
var map__34957 = p__34826;
var map__34957__$1 = ((((!((map__34957 == null)))?((((map__34957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34957):map__34957);
var request_url = cljs.core.get.call(null,map__34957__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34818,inst_34822,inst_34814,inst_34817,inst_34820,inst_34825,state_val_34902,c__31119__auto__,map__34746,map__34746__$1,opts,before_jsload,on_jsload,reload_dependents,map__34747,map__34747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34828 = cljs.core.reverse.call(null,inst_34822);
var inst_34829 = cljs.core.map.call(null,inst_34827,inst_34828);
var inst_34830 = cljs.core.pr_str.call(null,inst_34829);
var inst_34831 = figwheel.client.utils.log.call(null,inst_34830);
var state_34901__$1 = (function (){var statearr_34959 = state_34901;
(statearr_34959[(31)] = inst_34825);

return statearr_34959;
})();
var statearr_34960_35030 = state_34901__$1;
(statearr_34960_35030[(2)] = inst_34831);

(statearr_34960_35030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (35))){
var state_34901__$1 = state_34901;
var statearr_34961_35031 = state_34901__$1;
(statearr_34961_35031[(2)] = true);

(statearr_34961_35031[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (19))){
var inst_34804 = (state_34901[(12)]);
var inst_34810 = figwheel.client.file_reloading.expand_files.call(null,inst_34804);
var state_34901__$1 = state_34901;
var statearr_34962_35032 = state_34901__$1;
(statearr_34962_35032[(2)] = inst_34810);

(statearr_34962_35032[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (11))){
var state_34901__$1 = state_34901;
var statearr_34963_35033 = state_34901__$1;
(statearr_34963_35033[(2)] = null);

(statearr_34963_35033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (9))){
var inst_34793 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
var statearr_34964_35034 = state_34901__$1;
(statearr_34964_35034[(2)] = inst_34793);

(statearr_34964_35034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (5))){
var inst_34763 = (state_34901[(8)]);
var inst_34764 = (state_34901[(9)]);
var inst_34766 = (inst_34764 < inst_34763);
var inst_34767 = inst_34766;
var state_34901__$1 = state_34901;
if(cljs.core.truth_(inst_34767)){
var statearr_34965_35035 = state_34901__$1;
(statearr_34965_35035[(1)] = (7));

} else {
var statearr_34966_35036 = state_34901__$1;
(statearr_34966_35036[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (14))){
var inst_34774 = (state_34901[(22)]);
var inst_34783 = cljs.core.first.call(null,inst_34774);
var inst_34784 = figwheel.client.file_reloading.eval_body.call(null,inst_34783,opts);
var inst_34785 = cljs.core.next.call(null,inst_34774);
var inst_34761 = inst_34785;
var inst_34762 = null;
var inst_34763 = (0);
var inst_34764 = (0);
var state_34901__$1 = (function (){var statearr_34967 = state_34901;
(statearr_34967[(32)] = inst_34784);

(statearr_34967[(7)] = inst_34761);

(statearr_34967[(8)] = inst_34763);

(statearr_34967[(9)] = inst_34764);

(statearr_34967[(10)] = inst_34762);

return statearr_34967;
})();
var statearr_34968_35037 = state_34901__$1;
(statearr_34968_35037[(2)] = null);

(statearr_34968_35037[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (45))){
var state_34901__$1 = state_34901;
var statearr_34969_35038 = state_34901__$1;
(statearr_34969_35038[(2)] = null);

(statearr_34969_35038[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (26))){
var inst_34818 = (state_34901[(23)]);
var inst_34822 = (state_34901[(24)]);
var inst_34814 = (state_34901[(19)]);
var inst_34817 = (state_34901[(25)]);
var inst_34820 = (state_34901[(26)]);
var inst_34837 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34839 = (function (){var all_files = inst_34814;
var res_SINGLEQUOTE_ = inst_34817;
var res = inst_34818;
var files_not_loaded = inst_34820;
var dependencies_that_loaded = inst_34822;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34818,inst_34822,inst_34814,inst_34817,inst_34820,inst_34837,state_val_34902,c__31119__auto__,map__34746,map__34746__$1,opts,before_jsload,on_jsload,reload_dependents,map__34747,map__34747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34838){
var map__34970 = p__34838;
var map__34970__$1 = ((((!((map__34970 == null)))?((((map__34970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34970):map__34970);
var namespace = cljs.core.get.call(null,map__34970__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34970__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34818,inst_34822,inst_34814,inst_34817,inst_34820,inst_34837,state_val_34902,c__31119__auto__,map__34746,map__34746__$1,opts,before_jsload,on_jsload,reload_dependents,map__34747,map__34747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34840 = cljs.core.map.call(null,inst_34839,inst_34818);
var inst_34841 = cljs.core.pr_str.call(null,inst_34840);
var inst_34842 = figwheel.client.utils.log.call(null,inst_34841);
var inst_34843 = (function (){var all_files = inst_34814;
var res_SINGLEQUOTE_ = inst_34817;
var res = inst_34818;
var files_not_loaded = inst_34820;
var dependencies_that_loaded = inst_34822;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34818,inst_34822,inst_34814,inst_34817,inst_34820,inst_34837,inst_34839,inst_34840,inst_34841,inst_34842,state_val_34902,c__31119__auto__,map__34746,map__34746__$1,opts,before_jsload,on_jsload,reload_dependents,map__34747,map__34747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34818,inst_34822,inst_34814,inst_34817,inst_34820,inst_34837,inst_34839,inst_34840,inst_34841,inst_34842,state_val_34902,c__31119__auto__,map__34746,map__34746__$1,opts,before_jsload,on_jsload,reload_dependents,map__34747,map__34747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34844 = setTimeout(inst_34843,(10));
var state_34901__$1 = (function (){var statearr_34972 = state_34901;
(statearr_34972[(33)] = inst_34837);

(statearr_34972[(34)] = inst_34842);

return statearr_34972;
})();
var statearr_34973_35039 = state_34901__$1;
(statearr_34973_35039[(2)] = inst_34844);

(statearr_34973_35039[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (16))){
var state_34901__$1 = state_34901;
var statearr_34974_35040 = state_34901__$1;
(statearr_34974_35040[(2)] = reload_dependents);

(statearr_34974_35040[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (38))){
var inst_34854 = (state_34901[(16)]);
var inst_34872 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34854);
var state_34901__$1 = state_34901;
var statearr_34975_35041 = state_34901__$1;
(statearr_34975_35041[(2)] = inst_34872);

(statearr_34975_35041[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (30))){
var state_34901__$1 = state_34901;
var statearr_34976_35042 = state_34901__$1;
(statearr_34976_35042[(2)] = null);

(statearr_34976_35042[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (10))){
var inst_34774 = (state_34901[(22)]);
var inst_34776 = cljs.core.chunked_seq_QMARK_.call(null,inst_34774);
var state_34901__$1 = state_34901;
if(inst_34776){
var statearr_34977_35043 = state_34901__$1;
(statearr_34977_35043[(1)] = (13));

} else {
var statearr_34978_35044 = state_34901__$1;
(statearr_34978_35044[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (18))){
var inst_34808 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
if(cljs.core.truth_(inst_34808)){
var statearr_34979_35045 = state_34901__$1;
(statearr_34979_35045[(1)] = (19));

} else {
var statearr_34980_35046 = state_34901__$1;
(statearr_34980_35046[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (42))){
var state_34901__$1 = state_34901;
var statearr_34981_35047 = state_34901__$1;
(statearr_34981_35047[(2)] = null);

(statearr_34981_35047[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (37))){
var inst_34867 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
var statearr_34982_35048 = state_34901__$1;
(statearr_34982_35048[(2)] = inst_34867);

(statearr_34982_35048[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (8))){
var inst_34774 = (state_34901[(22)]);
var inst_34761 = (state_34901[(7)]);
var inst_34774__$1 = cljs.core.seq.call(null,inst_34761);
var state_34901__$1 = (function (){var statearr_34983 = state_34901;
(statearr_34983[(22)] = inst_34774__$1);

return statearr_34983;
})();
if(inst_34774__$1){
var statearr_34984_35049 = state_34901__$1;
(statearr_34984_35049[(1)] = (10));

} else {
var statearr_34985_35050 = state_34901__$1;
(statearr_34985_35050[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31119__auto__,map__34746,map__34746__$1,opts,before_jsload,on_jsload,reload_dependents,map__34747,map__34747__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31005__auto__,c__31119__auto__,map__34746,map__34746__$1,opts,before_jsload,on_jsload,reload_dependents,map__34747,map__34747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31006__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31006__auto____0 = (function (){
var statearr_34989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34989[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31006__auto__);

(statearr_34989[(1)] = (1));

return statearr_34989;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31006__auto____1 = (function (state_34901){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_34901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e34990){if((e34990 instanceof Object)){
var ex__31009__auto__ = e34990;
var statearr_34991_35051 = state_34901;
(statearr_34991_35051[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35052 = state_34901;
state_34901 = G__35052;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31006__auto__ = function(state_34901){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31006__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31006__auto____1.call(this,state_34901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31006__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31006__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto__,map__34746,map__34746__$1,opts,before_jsload,on_jsload,reload_dependents,map__34747,map__34747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31121__auto__ = (function (){var statearr_34992 = f__31120__auto__.call(null);
(statearr_34992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto__);

return statearr_34992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto__,map__34746,map__34746__$1,opts,before_jsload,on_jsload,reload_dependents,map__34747,map__34747__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31119__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35055,link){
var map__35058 = p__35055;
var map__35058__$1 = ((((!((map__35058 == null)))?((((map__35058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35058):map__35058);
var file = cljs.core.get.call(null,map__35058__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__35058,map__35058__$1,file){
return (function (p1__35053_SHARP_,p2__35054_SHARP_){
if(cljs.core._EQ_.call(null,p1__35053_SHARP_,p2__35054_SHARP_)){
return p1__35053_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__35058,map__35058__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35064){
var map__35065 = p__35064;
var map__35065__$1 = ((((!((map__35065 == null)))?((((map__35065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35065):map__35065);
var match_length = cljs.core.get.call(null,map__35065__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35065__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35060_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35060_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6753__auto__)){
var res = temp__6753__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args35067 = [];
var len__27904__auto___35070 = arguments.length;
var i__27905__auto___35071 = (0);
while(true){
if((i__27905__auto___35071 < len__27904__auto___35070)){
args35067.push((arguments[i__27905__auto___35071]));

var G__35072 = (i__27905__auto___35071 + (1));
i__27905__auto___35071 = G__35072;
continue;
} else {
}
break;
}

var G__35069 = args35067.length;
switch (G__35069) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35067.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35074_SHARP_,p2__35075_SHARP_){
return cljs.core.assoc.call(null,p1__35074_SHARP_,cljs.core.get.call(null,p2__35075_SHARP_,key),p2__35075_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35076){
var map__35079 = p__35076;
var map__35079__$1 = ((((!((map__35079 == null)))?((((map__35079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35079):map__35079);
var f_data = map__35079__$1;
var file = cljs.core.get.call(null,map__35079__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6753__auto__)){
var link = temp__6753__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35081,p__35082){
var map__35091 = p__35081;
var map__35091__$1 = ((((!((map__35091 == null)))?((((map__35091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35091):map__35091);
var opts = map__35091__$1;
var on_cssload = cljs.core.get.call(null,map__35091__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35092 = p__35082;
var map__35092__$1 = ((((!((map__35092 == null)))?((((map__35092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35092):map__35092);
var files_msg = map__35092__$1;
var files = cljs.core.get.call(null,map__35092__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35095_35099 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__35096_35100 = null;
var count__35097_35101 = (0);
var i__35098_35102 = (0);
while(true){
if((i__35098_35102 < count__35097_35101)){
var f_35103 = cljs.core._nth.call(null,chunk__35096_35100,i__35098_35102);
figwheel.client.file_reloading.reload_css_file.call(null,f_35103);

var G__35104 = seq__35095_35099;
var G__35105 = chunk__35096_35100;
var G__35106 = count__35097_35101;
var G__35107 = (i__35098_35102 + (1));
seq__35095_35099 = G__35104;
chunk__35096_35100 = G__35105;
count__35097_35101 = G__35106;
i__35098_35102 = G__35107;
continue;
} else {
var temp__6753__auto___35108 = cljs.core.seq.call(null,seq__35095_35099);
if(temp__6753__auto___35108){
var seq__35095_35109__$1 = temp__6753__auto___35108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35095_35109__$1)){
var c__27594__auto___35110 = cljs.core.chunk_first.call(null,seq__35095_35109__$1);
var G__35111 = cljs.core.chunk_rest.call(null,seq__35095_35109__$1);
var G__35112 = c__27594__auto___35110;
var G__35113 = cljs.core.count.call(null,c__27594__auto___35110);
var G__35114 = (0);
seq__35095_35099 = G__35111;
chunk__35096_35100 = G__35112;
count__35097_35101 = G__35113;
i__35098_35102 = G__35114;
continue;
} else {
var f_35115 = cljs.core.first.call(null,seq__35095_35109__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35115);

var G__35116 = cljs.core.next.call(null,seq__35095_35109__$1);
var G__35117 = null;
var G__35118 = (0);
var G__35119 = (0);
seq__35095_35099 = G__35116;
chunk__35096_35100 = G__35117;
count__35097_35101 = G__35118;
i__35098_35102 = G__35119;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__35091,map__35091__$1,opts,on_cssload,map__35092,map__35092__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__35091,map__35091__$1,opts,on_cssload,map__35092,map__35092__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1486282652289