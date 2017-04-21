// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29347){
var map__29372 = p__29347;
var map__29372__$1 = ((((!((map__29372 == null)))?((((map__29372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29372):map__29372);
var m = map__29372__$1;
var n = cljs.core.get.call(null,map__29372__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29372__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29374_29396 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29375_29397 = null;
var count__29376_29398 = (0);
var i__29377_29399 = (0);
while(true){
if((i__29377_29399 < count__29376_29398)){
var f_29400 = cljs.core._nth.call(null,chunk__29375_29397,i__29377_29399);
cljs.core.println.call(null,"  ",f_29400);

var G__29401 = seq__29374_29396;
var G__29402 = chunk__29375_29397;
var G__29403 = count__29376_29398;
var G__29404 = (i__29377_29399 + (1));
seq__29374_29396 = G__29401;
chunk__29375_29397 = G__29402;
count__29376_29398 = G__29403;
i__29377_29399 = G__29404;
continue;
} else {
var temp__6753__auto___29405 = cljs.core.seq.call(null,seq__29374_29396);
if(temp__6753__auto___29405){
var seq__29374_29406__$1 = temp__6753__auto___29405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29374_29406__$1)){
var c__27594__auto___29407 = cljs.core.chunk_first.call(null,seq__29374_29406__$1);
var G__29408 = cljs.core.chunk_rest.call(null,seq__29374_29406__$1);
var G__29409 = c__27594__auto___29407;
var G__29410 = cljs.core.count.call(null,c__27594__auto___29407);
var G__29411 = (0);
seq__29374_29396 = G__29408;
chunk__29375_29397 = G__29409;
count__29376_29398 = G__29410;
i__29377_29399 = G__29411;
continue;
} else {
var f_29412 = cljs.core.first.call(null,seq__29374_29406__$1);
cljs.core.println.call(null,"  ",f_29412);

var G__29413 = cljs.core.next.call(null,seq__29374_29406__$1);
var G__29414 = null;
var G__29415 = (0);
var G__29416 = (0);
seq__29374_29396 = G__29413;
chunk__29375_29397 = G__29414;
count__29376_29398 = G__29415;
i__29377_29399 = G__29416;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29417 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26688__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26688__auto__)){
return or__26688__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29417);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29417)))?cljs.core.second.call(null,arglists_29417):arglists_29417));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29378_29418 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29379_29419 = null;
var count__29380_29420 = (0);
var i__29381_29421 = (0);
while(true){
if((i__29381_29421 < count__29380_29420)){
var vec__29382_29422 = cljs.core._nth.call(null,chunk__29379_29419,i__29381_29421);
var name_29423 = cljs.core.nth.call(null,vec__29382_29422,(0),null);
var map__29385_29424 = cljs.core.nth.call(null,vec__29382_29422,(1),null);
var map__29385_29425__$1 = ((((!((map__29385_29424 == null)))?((((map__29385_29424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29385_29424.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29385_29424):map__29385_29424);
var doc_29426 = cljs.core.get.call(null,map__29385_29425__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29427 = cljs.core.get.call(null,map__29385_29425__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29423);

cljs.core.println.call(null," ",arglists_29427);

if(cljs.core.truth_(doc_29426)){
cljs.core.println.call(null," ",doc_29426);
} else {
}

var G__29428 = seq__29378_29418;
var G__29429 = chunk__29379_29419;
var G__29430 = count__29380_29420;
var G__29431 = (i__29381_29421 + (1));
seq__29378_29418 = G__29428;
chunk__29379_29419 = G__29429;
count__29380_29420 = G__29430;
i__29381_29421 = G__29431;
continue;
} else {
var temp__6753__auto___29432 = cljs.core.seq.call(null,seq__29378_29418);
if(temp__6753__auto___29432){
var seq__29378_29433__$1 = temp__6753__auto___29432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29378_29433__$1)){
var c__27594__auto___29434 = cljs.core.chunk_first.call(null,seq__29378_29433__$1);
var G__29435 = cljs.core.chunk_rest.call(null,seq__29378_29433__$1);
var G__29436 = c__27594__auto___29434;
var G__29437 = cljs.core.count.call(null,c__27594__auto___29434);
var G__29438 = (0);
seq__29378_29418 = G__29435;
chunk__29379_29419 = G__29436;
count__29380_29420 = G__29437;
i__29381_29421 = G__29438;
continue;
} else {
var vec__29387_29439 = cljs.core.first.call(null,seq__29378_29433__$1);
var name_29440 = cljs.core.nth.call(null,vec__29387_29439,(0),null);
var map__29390_29441 = cljs.core.nth.call(null,vec__29387_29439,(1),null);
var map__29390_29442__$1 = ((((!((map__29390_29441 == null)))?((((map__29390_29441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29390_29441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29390_29441):map__29390_29441);
var doc_29443 = cljs.core.get.call(null,map__29390_29442__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29444 = cljs.core.get.call(null,map__29390_29442__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29440);

cljs.core.println.call(null," ",arglists_29444);

if(cljs.core.truth_(doc_29443)){
cljs.core.println.call(null," ",doc_29443);
} else {
}

var G__29445 = cljs.core.next.call(null,seq__29378_29433__$1);
var G__29446 = null;
var G__29447 = (0);
var G__29448 = (0);
seq__29378_29418 = G__29445;
chunk__29379_29419 = G__29446;
count__29380_29420 = G__29447;
i__29381_29421 = G__29448;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6753__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6753__auto__)){
var fnspec = temp__6753__auto__;
cljs.core.print.call(null,"Spec");

var seq__29392 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29393 = null;
var count__29394 = (0);
var i__29395 = (0);
while(true){
if((i__29395 < count__29394)){
var role = cljs.core._nth.call(null,chunk__29393,i__29395);
var temp__6753__auto___29449__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___29449__$1)){
var spec_29450 = temp__6753__auto___29449__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29450));
} else {
}

var G__29451 = seq__29392;
var G__29452 = chunk__29393;
var G__29453 = count__29394;
var G__29454 = (i__29395 + (1));
seq__29392 = G__29451;
chunk__29393 = G__29452;
count__29394 = G__29453;
i__29395 = G__29454;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__29392);
if(temp__6753__auto____$1){
var seq__29392__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29392__$1)){
var c__27594__auto__ = cljs.core.chunk_first.call(null,seq__29392__$1);
var G__29455 = cljs.core.chunk_rest.call(null,seq__29392__$1);
var G__29456 = c__27594__auto__;
var G__29457 = cljs.core.count.call(null,c__27594__auto__);
var G__29458 = (0);
seq__29392 = G__29455;
chunk__29393 = G__29456;
count__29394 = G__29457;
i__29395 = G__29458;
continue;
} else {
var role = cljs.core.first.call(null,seq__29392__$1);
var temp__6753__auto___29459__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___29459__$2)){
var spec_29460 = temp__6753__auto___29459__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29460));
} else {
}

var G__29461 = cljs.core.next.call(null,seq__29392__$1);
var G__29462 = null;
var G__29463 = (0);
var G__29464 = (0);
seq__29392 = G__29461;
chunk__29393 = G__29462;
count__29394 = G__29463;
i__29395 = G__29464;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1486282648963