// Compiled by ClojureScript 1.9.293 {}
goog.provide('facets.core_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('facets.core');
facets.core_test.e = Error;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"simple types");

try{try{var values__37217__auto___37469 = (function (){var x__27617__auto__ = facets.core.t.call(null,facets.core.t.call(null,new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.PersistentVector.EMPTY));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794)),x__27617__auto__);
})();
var result__37218__auto___37470 = cljs.core.apply.call(null,cljs.core._EQ_,values__37217__auto___37469);
if(cljs.core.truth_(result__37218__auto___37470)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"t","t",242699008,null),cljs.core.list(new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__37217__auto___37469),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"t","t",242699008,null),cljs.core.list(new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__27617__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__37217__auto___37469);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27617__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e37466){var t__37255__auto___37471 = e37466;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"t","t",242699008,null),cljs.core.list(new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794)),new cljs.core.Keyword(null,"actual","actual",107306363),t__37255__auto___37471,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__37217__auto___37472 = cljs.core._conj.call(null,(function (){var x__27617__auto__ = facets.core.t.call(null,new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.PersistentVector.EMPTY);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27617__auto__);
})(),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794));
var result__37218__auto___37473 = cljs.core.apply.call(null,facets.core.t_QMARK_,values__37217__auto___37472);
if(cljs.core.truth_(result__37218__auto___37473)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"t?","t?",-2042555639,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.list(new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,facets.core.t_QMARK_,values__37217__auto___37472),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"t?","t?",-2042555639,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.list(new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__27617__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"t?","t?",-2042555639,null),values__37217__auto___37472);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27617__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e37467){var t__37255__auto___37474 = e37467;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"t?","t?",-2042555639,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.list(new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),t__37255__auto___37474,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__37217__auto___37475 = (function (){var x__27617__auto__ = facets.core.t.call(null,new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.PersistentVector.EMPTY);
return cljs.core._conj.call(null,(function (){var x__27617__auto____$1 = facets.core.t.call(null,new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.List.EMPTY);
return cljs.core._conj.call(null,(function (){var x__27617__auto____$2 = facets.core.t.call(null,new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.PersistentHashSet.EMPTY);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27617__auto____$2);
})(),x__27617__auto____$1);
})(),x__27617__auto__);
})();
var result__37218__auto___37476 = cljs.core.apply.call(null,facets.core.t_EQ_,values__37217__auto___37475);
if(cljs.core.truth_(result__37218__auto___37476)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"t=","t=",2122218014,null),cljs.core.list(new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.PersistentVector.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.List.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,facets.core.t_EQ_,values__37217__auto___37475),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"t=","t=",2122218014,null),cljs.core.list(new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.PersistentVector.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.List.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__27617__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"t=","t=",2122218014,null),values__37217__auto___37475);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27617__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e37468){var t__37255__auto___37477 = e37468;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"t=","t=",2122218014,null),cljs.core.list(new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.PersistentVector.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.List.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),t__37255__auto___37477,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}facets.core.reset_all_BANG_.call(null);
facets.core.declare_type.call(null,new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794));
facets.core.declare_facet.call(null,new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597));
facets.core.declare_facet.call(null,new cljs.core.Keyword("facets.core-test","f2","facets.core-test/f2",-649283394));
facets.core.declare_alias.call(null,cljs.core.PersistentVector,new cljs.core.Keyword("facets.core-test","vec","facets.core-test/vec",-1770412645));
facets.core.declare_alias.call(null,cljs.core.IMeta,new cljs.core.Keyword("facets.core-test","obj","facets.core-test/obj",2029331276));
facets.core.extend_type.call(null,new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597),(function (x){
return new cljs.core.Keyword(null,"f1-foo","f1-foo",-131435652);
})], null));
facets.core.extend_facet.call(null,new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("facets.core-test","vec","facets.core-test/vec",-1770412645),(function (x){
return new cljs.core.Keyword(null,"f1-vec","f1-vec",832353811);
})], null));
facets.core.extend_facet.call(null,new cljs.core.Keyword("facets.core-test","f2","facets.core-test/f2",-649283394),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("facets.core-test","vec","facets.core-test/vec",-1770412645),(function (x){
return new cljs.core.Keyword(null,"f2-vec","f2-vec",1315622454);
}),new cljs.core.Keyword("facets.core-test","obj","facets.core-test/obj",2029331276),(function (x){
return new cljs.core.Keyword(null,"f2-obj","f2-obj",-365342780);
})], null));
facets.core.prefer.call(null,new cljs.core.Keyword("facets.core-test","vec","facets.core-test/vec",-1770412645),new cljs.core.Keyword("facets.core-test","obj","facets.core-test/obj",2029331276));
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"declare-type");

try{try{try{facets.core.declare_type.call(null,new cljs.core.Keyword(null,"foo","foo",1268894036));

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","declare-type","f/declare-type",1605291344,null),new cljs.core.Keyword(null,"foo","foo",1268894036))),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),"use namespaced kw"], null));
}catch (e37479){if((e37479 instanceof facets.core_test.e)){
var e__37244__auto___37483 = e37479;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","declare-type","f/declare-type",1605291344,null),new cljs.core.Keyword(null,"foo","foo",1268894036))),new cljs.core.Keyword(null,"actual","actual",107306363),e__37244__auto___37483,new cljs.core.Keyword(null,"message","message",-406056002),"use namespaced kw"], null));

} else {
throw e37479;

}
}}catch (e37478){var t__37255__auto___37484 = e37478;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","declare-type","f/declare-type",1605291344,null),new cljs.core.Keyword(null,"foo","foo",1268894036))),new cljs.core.Keyword(null,"actual","actual",107306363),t__37255__auto___37484,new cljs.core.Keyword(null,"message","message",-406056002),"use namespaced kw"], null));
}
try{var values__37217__auto___37485 = cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794));
var result__37218__auto___37486 = cljs.core.apply.call(null,facets.core.known_type_QMARK_,values__37217__auto___37485);
if(cljs.core.truth_(result__37218__auto___37486)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("f","known-type?","f/known-type?",-607121876,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,facets.core.known_type_QMARK_,values__37217__auto___37485),new cljs.core.Keyword(null,"message","message",-406056002),"registration has occured"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("f","known-type?","f/known-type?",-607121876,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__27617__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("f","known-type?","f/known-type?",-607121876,null),values__37217__auto___37485);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27617__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"registration has occured"], null));
}

}catch (e37480){var t__37255__auto___37487 = e37480;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("f","known-type?","f/known-type?",-607121876,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794)),new cljs.core.Keyword(null,"actual","actual",107306363),t__37255__auto___37487,new cljs.core.Keyword(null,"message","message",-406056002),"registration has occured"], null));
}
try{try{facets.core.declare_type.call(null,new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794));

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","declare-type","f/declare-type",1605291344,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794))),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),"can't declare already existing type"], null));
}catch (e37482){if((e37482 instanceof facets.core_test.e)){
var e__37244__auto___37488 = e37482;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","declare-type","f/declare-type",1605291344,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794))),new cljs.core.Keyword(null,"actual","actual",107306363),e__37244__auto___37488,new cljs.core.Keyword(null,"message","message",-406056002),"can't declare already existing type"], null));

} else {
throw e37482;

}
}}catch (e37481){var t__37255__auto___37489 = e37481;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","declare-type","f/declare-type",1605291344,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794))),new cljs.core.Keyword(null,"actual","actual",107306363),t__37255__auto___37489,new cljs.core.Keyword(null,"message","message",-406056002),"can't declare already existing type"], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"declare-facet");

try{try{try{facets.core.declare_facet.call(null,new cljs.core.Keyword(null,"f1","f1",1714532389));

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","declare-facet","f/declare-facet",840444944,null),new cljs.core.Keyword(null,"f1","f1",1714532389))),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),"use namespaced kw"], null));
}catch (e37491){if((e37491 instanceof facets.core_test.e)){
var e__37244__auto___37495 = e37491;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","declare-facet","f/declare-facet",840444944,null),new cljs.core.Keyword(null,"f1","f1",1714532389))),new cljs.core.Keyword(null,"actual","actual",107306363),e__37244__auto___37495,new cljs.core.Keyword(null,"message","message",-406056002),"use namespaced kw"], null));

} else {
throw e37491;

}
}}catch (e37490){var t__37255__auto___37496 = e37490;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","declare-facet","f/declare-facet",840444944,null),new cljs.core.Keyword(null,"f1","f1",1714532389))),new cljs.core.Keyword(null,"actual","actual",107306363),t__37255__auto___37496,new cljs.core.Keyword(null,"message","message",-406056002),"use namespaced kw"], null));
}
try{var value__37220__auto___37497 = new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,facets.core.facets));
if(cljs.core.truth_(value__37220__auto___37497)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("f","facets","f/facets",-420988043,null))),new cljs.core.Keyword(null,"actual","actual",107306363),value__37220__auto___37497,new cljs.core.Keyword(null,"message","message",-406056002),"registration has occured"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("f","facets","f/facets",-420988043,null))),new cljs.core.Keyword(null,"actual","actual",107306363),value__37220__auto___37497,new cljs.core.Keyword(null,"message","message",-406056002),"registration has occured"], null));
}

}catch (e37492){var t__37255__auto___37498 = e37492;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("f","facets","f/facets",-420988043,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__37255__auto___37498,new cljs.core.Keyword(null,"message","message",-406056002),"registration has occured"], null));
}
try{try{facets.core.declare_facet.call(null,new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597));

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","declare-facet","f/declare-facet",840444944,null),new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597))),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),"can't declare already existing facet"], null));
}catch (e37494){if((e37494 instanceof facets.core_test.e)){
var e__37244__auto___37499 = e37494;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","declare-facet","f/declare-facet",840444944,null),new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597))),new cljs.core.Keyword(null,"actual","actual",107306363),e__37244__auto___37499,new cljs.core.Keyword(null,"message","message",-406056002),"can't declare already existing facet"], null));

} else {
throw e37494;

}
}}catch (e37493){var t__37255__auto___37500 = e37493;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","declare-facet","f/declare-facet",840444944,null),new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597))),new cljs.core.Keyword(null,"actual","actual",107306363),t__37255__auto___37500,new cljs.core.Keyword(null,"message","message",-406056002),"can't declare already existing facet"], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"extend-type");

try{try{try{facets.core.extend_type.call(null,new cljs.core.Keyword("facets.core-test","bar","facets.core-test/bar",1330590326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597),(function (x){
return new cljs.core.Keyword(null,"f1-foo","f1-foo",-131435652);
})], null));

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","extend-type","f/extend-type",1123355787,null),new cljs.core.Keyword("facets.core-test","bar","facets.core-test/bar",1330590326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.Keyword(null,"f1-foo","f1-foo",-131435652))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),"cannot extend unregistered type"], null));
}catch (e37502){if((e37502 instanceof facets.core_test.e)){
var e__37244__auto___37505 = e37502;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","extend-type","f/extend-type",1123355787,null),new cljs.core.Keyword("facets.core-test","bar","facets.core-test/bar",1330590326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.Keyword(null,"f1-foo","f1-foo",-131435652))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),e__37244__auto___37505,new cljs.core.Keyword(null,"message","message",-406056002),"cannot extend unregistered type"], null));

} else {
throw e37502;

}
}}catch (e37501){var t__37255__auto___37506 = e37501;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","extend-type","f/extend-type",1123355787,null),new cljs.core.Keyword("facets.core-test","bar","facets.core-test/bar",1330590326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.Keyword(null,"f1-foo","f1-foo",-131435652))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__37255__auto___37506,new cljs.core.Keyword(null,"message","message",-406056002),"cannot extend unregistered type"], null));
}
try{try{facets.core.extend_type.call(null,new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("facets.core-test","f3","facets.core-test/f3",850737061),(function (x){
return new cljs.core.Keyword(null,"f1-foo","f1-foo",-131435652);
})], null));

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","extend-type","f/extend-type",1123355787,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("facets.core-test","f3","facets.core-test/f3",850737061),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.Keyword(null,"f1-foo","f1-foo",-131435652))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),"cannot implement unregistered facet"], null));
}catch (e37504){if((e37504 instanceof facets.core_test.e)){
var e__37244__auto___37507 = e37504;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","extend-type","f/extend-type",1123355787,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("facets.core-test","f3","facets.core-test/f3",850737061),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.Keyword(null,"f1-foo","f1-foo",-131435652))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),e__37244__auto___37507,new cljs.core.Keyword(null,"message","message",-406056002),"cannot implement unregistered facet"], null));

} else {
throw e37504;

}
}}catch (e37503){var t__37255__auto___37508 = e37503;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","extend-type","f/extend-type",1123355787,null),new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("facets.core-test","f3","facets.core-test/f3",850737061),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.Keyword(null,"f1-foo","f1-foo",-131435652))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__37255__auto___37508,new cljs.core.Keyword(null,"message","message",-406056002),"cannot implement unregistered facet"], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"extend-facet");

try{try{try{facets.core.extend_facet.call(null,new cljs.core.Keyword("facets.core-test","f3","facets.core-test/f3",850737061),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),(function (x){
return new cljs.core.Keyword(null,"f1-foo","f1-foo",-131435652);
})], null));

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","extend-facet","f/extend-facet",1572289552,null),new cljs.core.Keyword("facets.core-test","f3","facets.core-test/f3",850737061),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.Keyword(null,"f1-foo","f1-foo",-131435652))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),"cannot extend unregistered facet"], null));
}catch (e37510){if((e37510 instanceof facets.core_test.e)){
var e__37244__auto___37513 = e37510;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","extend-facet","f/extend-facet",1572289552,null),new cljs.core.Keyword("facets.core-test","f3","facets.core-test/f3",850737061),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.Keyword(null,"f1-foo","f1-foo",-131435652))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),e__37244__auto___37513,new cljs.core.Keyword(null,"message","message",-406056002),"cannot extend unregistered facet"], null));

} else {
throw e37510;

}
}}catch (e37509){var t__37255__auto___37514 = e37509;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","extend-facet","f/extend-facet",1572289552,null),new cljs.core.Keyword("facets.core-test","f3","facets.core-test/f3",850737061),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("facets.core-test","foo","facets.core-test/foo",217277794),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.Keyword(null,"f1-foo","f1-foo",-131435652))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__37255__auto___37514,new cljs.core.Keyword(null,"message","message",-406056002),"cannot extend unregistered facet"], null));
}
try{try{facets.core.extend_facet.call(null,new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("facets.core-test","bar","facets.core-test/bar",1330590326),(function (x){
return new cljs.core.Keyword(null,"f1-foo","f1-foo",-131435652);
})], null));

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","extend-facet","f/extend-facet",1572289552,null),new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("facets.core-test","bar","facets.core-test/bar",1330590326),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.Keyword(null,"f1-foo","f1-foo",-131435652))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),null,new cljs.core.Keyword(null,"message","message",-406056002),"cannot implement facet for unregistered type"], null));
}catch (e37512){if((e37512 instanceof facets.core_test.e)){
var e__37244__auto___37515 = e37512;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","extend-facet","f/extend-facet",1572289552,null),new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("facets.core-test","bar","facets.core-test/bar",1330590326),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.Keyword(null,"f1-foo","f1-foo",-131435652))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),e__37244__auto___37515,new cljs.core.Keyword(null,"message","message",-406056002),"cannot implement facet for unregistered type"], null));

} else {
throw e37512;

}
}}catch (e37511){var t__37255__auto___37516 = e37511;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),cljs.core.list(new cljs.core.Symbol("f","extend-facet","f/extend-facet",1572289552,null),new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("facets.core-test","bar","facets.core-test/bar",1330590326),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.Keyword(null,"f1-foo","f1-foo",-131435652))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__37255__auto___37516,new cljs.core.Keyword(null,"message","message",-406056002),"cannot implement facet for unregistered type"], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"aliases");

try{try{var value__37220__auto___37519 = (function (){var and__26676__auto__ = facets.core.t_QMARK_.call(null,new cljs.core.Keyword("facets.core-test","obj","facets.core-test/obj",2029331276),cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(and__26676__auto__)){
return facets.core.t_QMARK_.call(null,new cljs.core.Keyword("facets.core-test","vec","facets.core-test/vec",-1770412645),cljs.core.PersistentVector.EMPTY);
} else {
return and__26676__auto__;
}
})();
if(cljs.core.truth_(value__37220__auto___37519)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"t?","t?",-2042555639,null),new cljs.core.Keyword("facets.core-test","obj","facets.core-test/obj",2029331276),cljs.core.PersistentHashSet.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"t?","t?",-2042555639,null),new cljs.core.Keyword("facets.core-test","vec","facets.core-test/vec",-1770412645),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),value__37220__auto___37519,new cljs.core.Keyword(null,"message","message",-406056002),"alias is properly registered"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"t?","t?",-2042555639,null),new cljs.core.Keyword("facets.core-test","obj","facets.core-test/obj",2029331276),cljs.core.PersistentHashSet.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"t?","t?",-2042555639,null),new cljs.core.Keyword("facets.core-test","vec","facets.core-test/vec",-1770412645),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),value__37220__auto___37519,new cljs.core.Keyword(null,"message","message",-406056002),"alias is properly registered"], null));
}

}catch (e37517){var t__37255__auto___37520 = e37517;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"t?","t?",-2042555639,null),new cljs.core.Keyword("facets.core-test","obj","facets.core-test/obj",2029331276),cljs.core.PersistentHashSet.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"t?","t?",-2042555639,null),new cljs.core.Keyword("facets.core-test","vec","facets.core-test/vec",-1770412645),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),t__37255__auto___37520,new cljs.core.Keyword(null,"message","message",-406056002),"alias is properly registered"], null));
}
try{var values__37217__auto___37521 = cljs.core._conj.call(null,(function (){var x__27617__auto__ = facets.core.call.call(null,new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597),cljs.core.PersistentVector.EMPTY);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27617__auto__);
})(),new cljs.core.Keyword(null,"f1-vec","f1-vec",832353811));
var result__37218__auto___37522 = cljs.core.apply.call(null,cljs.core._EQ_,values__37217__auto___37521);
if(cljs.core.truth_(result__37218__auto___37522)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"f1-vec","f1-vec",832353811),cljs.core.list(new cljs.core.Symbol("f","call","f/call",1120531627,null),new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__37217__auto___37521),new cljs.core.Keyword(null,"message","message",-406056002),"alias is used for dispatch"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"f1-vec","f1-vec",832353811),cljs.core.list(new cljs.core.Symbol("f","call","f/call",1120531627,null),new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__27617__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__37217__auto___37521);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27617__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"alias is used for dispatch"], null));
}

}catch (e37518){var t__37255__auto___37523 = e37518;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"f1-vec","f1-vec",832353811),cljs.core.list(new cljs.core.Symbol("f","call","f/call",1120531627,null),new cljs.core.Keyword("facets.core-test","f1","facets.core-test/f1",-1612659597),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),t__37255__auto___37523,new cljs.core.Keyword(null,"message","message",-406056002),"alias is used for dispatch"], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"prefer");

try{try{var values__37217__auto___37526 = cljs.core._conj.call(null,(function (){var x__27617__auto__ = facets.core.call.call(null,new cljs.core.Keyword("facets.core-test","f2","facets.core-test/f2",-649283394),cljs.core.PersistentVector.EMPTY);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27617__auto__);
})(),new cljs.core.Keyword(null,"f2-vec","f2-vec",1315622454));
var result__37218__auto___37527 = cljs.core.apply.call(null,cljs.core._EQ_,values__37217__auto___37526);
if(cljs.core.truth_(result__37218__auto___37527)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"f2-vec","f2-vec",1315622454),cljs.core.list(new cljs.core.Symbol("f","call","f/call",1120531627,null),new cljs.core.Keyword("facets.core-test","f2","facets.core-test/f2",-649283394),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__37217__auto___37526),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"f2-vec","f2-vec",1315622454),cljs.core.list(new cljs.core.Symbol("f","call","f/call",1120531627,null),new cljs.core.Keyword("facets.core-test","f2","facets.core-test/f2",-649283394),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__27617__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__37217__auto___37526);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27617__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e37524){var t__37255__auto___37528 = e37524;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"f2-vec","f2-vec",1315622454),cljs.core.list(new cljs.core.Symbol("f","call","f/call",1120531627,null),new cljs.core.Keyword("facets.core-test","f2","facets.core-test/f2",-649283394),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),t__37255__auto___37528,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__37217__auto___37529 = cljs.core._conj.call(null,(function (){var x__27617__auto__ = facets.core.call.call(null,new cljs.core.Keyword("facets.core-test","f2","facets.core-test/f2",-649283394),cljs.core.PersistentHashSet.EMPTY);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27617__auto__);
})(),new cljs.core.Keyword(null,"f2-obj","f2-obj",-365342780));
var result__37218__auto___37530 = cljs.core.apply.call(null,cljs.core._EQ_,values__37217__auto___37529);
if(cljs.core.truth_(result__37218__auto___37530)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"f2-obj","f2-obj",-365342780),cljs.core.list(new cljs.core.Symbol("f","call","f/call",1120531627,null),new cljs.core.Keyword("facets.core-test","f2","facets.core-test/f2",-649283394),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__37217__auto___37529),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"f2-obj","f2-obj",-365342780),cljs.core.list(new cljs.core.Symbol("f","call","f/call",1120531627,null),new cljs.core.Keyword("facets.core-test","f2","facets.core-test/f2",-649283394),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__27617__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__37217__auto___37529);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27617__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e37525){var t__37255__auto___37531 = e37525;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"f2-obj","f2-obj",-365342780),cljs.core.list(new cljs.core.Symbol("f","call","f/call",1120531627,null),new cljs.core.Keyword("facets.core-test","f2","facets.core-test/f2",-649283394),cljs.core.PersistentHashSet.EMPTY)),new cljs.core.Keyword(null,"actual","actual",107306363),t__37255__auto___37531,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}var type_37533 = cljs.core.type.call(null,"nil");
cljs.core.filter.call(null,((function (type_37533){
return (function (p1__37532_SHARP_){
return cljs.core.isa_QMARK_.call(null,type_37533,p1__37532_SHARP_);
});})(type_37533))
,cljs.core.keys.call(null,cljs.core.deref.call(null,facets.core.aliases)));
facets.core.declare_facet.call(null,new cljs.core.Keyword("facets.core-test","fff","facets.core-test/fff",112675914),cljs.core.PersistentArrayMap.fromArray([cljs.core.IMeta,(function (x){
return x;
})], true, false));

/**
 * @interface
 */
facets.core_test.Yo = function(){};

facets.core_test.yo = (function facets$core_test$yo(x){
if((!((x == null))) && (!((x.facets$core_test$Yo$yo$arity$1 == null)))){
return x.facets$core_test$Yo$yo$arity$1(x);
} else {
var x__27401__auto__ = (((x == null))?null:x);
var m__27402__auto__ = (facets.core_test.yo[goog.typeOf(x__27401__auto__)]);
if(!((m__27402__auto__ == null))){
return m__27402__auto__.call(null,x);
} else {
var m__27402__auto____$1 = (facets.core_test.yo["_"]);
if(!((m__27402__auto____$1 == null))){
return m__27402__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"Yo.yo",x);
}
}
}
});

cljs.core.IMeta.prototype.facets$core_test$Yo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IMeta.prototype.facets$core_test$Yo$yo$arity$1 = (function (x){
var x__$1 = this;
return "IMeta yo";
});
facets.core_test.yo.call(null,cljs.core.PersistentVector.EMPTY);

//# sourceMappingURL=core_test.js.map?rel=1486292490212