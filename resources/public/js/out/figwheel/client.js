// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args37159 = [];
var len__27904__auto___37162 = arguments.length;
var i__27905__auto___37163 = (0);
while(true){
if((i__27905__auto___37163 < len__27904__auto___37162)){
args37159.push((arguments[i__27905__auto___37163]));

var G__37164 = (i__27905__auto___37163 + (1));
i__27905__auto___37163 = G__37164;
continue;
} else {
}
break;
}

var G__37161 = args37159.length;
switch (G__37161) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37159.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27911__auto__ = [];
var len__27904__auto___37167 = arguments.length;
var i__27905__auto___37168 = (0);
while(true){
if((i__27905__auto___37168 < len__27904__auto___37167)){
args__27911__auto__.push((arguments[i__27905__auto___37168]));

var G__37169 = (i__27905__auto___37168 + (1));
i__27905__auto___37168 = G__37169;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37166){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37166));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27911__auto__ = [];
var len__27904__auto___37171 = arguments.length;
var i__27905__auto___37172 = (0);
while(true){
if((i__27905__auto___37172 < len__27904__auto___37171)){
args__27911__auto__.push((arguments[i__27905__auto___37172]));

var G__37173 = (i__27905__auto___37172 + (1));
i__27905__auto___37172 = G__37173;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37170){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37170));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__37174 = cljs.core._EQ_;
var expr__37175 = (function (){var or__26688__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e37178){if((e37178 instanceof Error)){
var e = e37178;
return false;
} else {
throw e37178;

}
}})();
if(cljs.core.truth_(or__26688__auto__)){
return or__26688__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__37174.call(null,"true",expr__37175))){
return true;
} else {
if(cljs.core.truth_(pred__37174.call(null,"false",expr__37175))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37175)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e37180){if((e37180 instanceof Error)){
var e = e37180;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e37180;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37181){
var map__37184 = p__37181;
var map__37184__$1 = ((((!((map__37184 == null)))?((((map__37184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37184):map__37184);
var message = cljs.core.get.call(null,map__37184__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37184__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__26688__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26688__auto__)){
return or__26688__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__26676__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__26676__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__26676__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31119__auto___37346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto___37346,ch){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto___37346,ch){
return (function (state_37315){
var state_val_37316 = (state_37315[(1)]);
if((state_val_37316 === (7))){
var inst_37311 = (state_37315[(2)]);
var state_37315__$1 = state_37315;
var statearr_37317_37347 = state_37315__$1;
(statearr_37317_37347[(2)] = inst_37311);

(statearr_37317_37347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (1))){
var state_37315__$1 = state_37315;
var statearr_37318_37348 = state_37315__$1;
(statearr_37318_37348[(2)] = null);

(statearr_37318_37348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (4))){
var inst_37268 = (state_37315[(7)]);
var inst_37268__$1 = (state_37315[(2)]);
var state_37315__$1 = (function (){var statearr_37319 = state_37315;
(statearr_37319[(7)] = inst_37268__$1);

return statearr_37319;
})();
if(cljs.core.truth_(inst_37268__$1)){
var statearr_37320_37349 = state_37315__$1;
(statearr_37320_37349[(1)] = (5));

} else {
var statearr_37321_37350 = state_37315__$1;
(statearr_37321_37350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (15))){
var inst_37275 = (state_37315[(8)]);
var inst_37290 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37275);
var inst_37291 = cljs.core.first.call(null,inst_37290);
var inst_37292 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37291);
var inst_37293 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37292)].join('');
var inst_37294 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37293);
var state_37315__$1 = state_37315;
var statearr_37322_37351 = state_37315__$1;
(statearr_37322_37351[(2)] = inst_37294);

(statearr_37322_37351[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (13))){
var inst_37299 = (state_37315[(2)]);
var state_37315__$1 = state_37315;
var statearr_37323_37352 = state_37315__$1;
(statearr_37323_37352[(2)] = inst_37299);

(statearr_37323_37352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (6))){
var state_37315__$1 = state_37315;
var statearr_37324_37353 = state_37315__$1;
(statearr_37324_37353[(2)] = null);

(statearr_37324_37353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (17))){
var inst_37297 = (state_37315[(2)]);
var state_37315__$1 = state_37315;
var statearr_37325_37354 = state_37315__$1;
(statearr_37325_37354[(2)] = inst_37297);

(statearr_37325_37354[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (3))){
var inst_37313 = (state_37315[(2)]);
var state_37315__$1 = state_37315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37315__$1,inst_37313);
} else {
if((state_val_37316 === (12))){
var inst_37274 = (state_37315[(9)]);
var inst_37288 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37274,opts);
var state_37315__$1 = state_37315;
if(cljs.core.truth_(inst_37288)){
var statearr_37326_37355 = state_37315__$1;
(statearr_37326_37355[(1)] = (15));

} else {
var statearr_37327_37356 = state_37315__$1;
(statearr_37327_37356[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (2))){
var state_37315__$1 = state_37315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37315__$1,(4),ch);
} else {
if((state_val_37316 === (11))){
var inst_37275 = (state_37315[(8)]);
var inst_37280 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37281 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37275);
var inst_37282 = cljs.core.async.timeout.call(null,(1000));
var inst_37283 = [inst_37281,inst_37282];
var inst_37284 = (new cljs.core.PersistentVector(null,2,(5),inst_37280,inst_37283,null));
var state_37315__$1 = state_37315;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37315__$1,(14),inst_37284);
} else {
if((state_val_37316 === (9))){
var inst_37275 = (state_37315[(8)]);
var inst_37301 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37302 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37275);
var inst_37303 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37302);
var inst_37304 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37303)].join('');
var inst_37305 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37304);
var state_37315__$1 = (function (){var statearr_37328 = state_37315;
(statearr_37328[(10)] = inst_37301);

return statearr_37328;
})();
var statearr_37329_37357 = state_37315__$1;
(statearr_37329_37357[(2)] = inst_37305);

(statearr_37329_37357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (5))){
var inst_37268 = (state_37315[(7)]);
var inst_37270 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37271 = (new cljs.core.PersistentArrayMap(null,2,inst_37270,null));
var inst_37272 = (new cljs.core.PersistentHashSet(null,inst_37271,null));
var inst_37273 = figwheel.client.focus_msgs.call(null,inst_37272,inst_37268);
var inst_37274 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37273);
var inst_37275 = cljs.core.first.call(null,inst_37273);
var inst_37276 = figwheel.client.autoload_QMARK_.call(null);
var state_37315__$1 = (function (){var statearr_37330 = state_37315;
(statearr_37330[(8)] = inst_37275);

(statearr_37330[(9)] = inst_37274);

return statearr_37330;
})();
if(cljs.core.truth_(inst_37276)){
var statearr_37331_37358 = state_37315__$1;
(statearr_37331_37358[(1)] = (8));

} else {
var statearr_37332_37359 = state_37315__$1;
(statearr_37332_37359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (14))){
var inst_37286 = (state_37315[(2)]);
var state_37315__$1 = state_37315;
var statearr_37333_37360 = state_37315__$1;
(statearr_37333_37360[(2)] = inst_37286);

(statearr_37333_37360[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (16))){
var state_37315__$1 = state_37315;
var statearr_37334_37361 = state_37315__$1;
(statearr_37334_37361[(2)] = null);

(statearr_37334_37361[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (10))){
var inst_37307 = (state_37315[(2)]);
var state_37315__$1 = (function (){var statearr_37335 = state_37315;
(statearr_37335[(11)] = inst_37307);

return statearr_37335;
})();
var statearr_37336_37362 = state_37315__$1;
(statearr_37336_37362[(2)] = null);

(statearr_37336_37362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37316 === (8))){
var inst_37274 = (state_37315[(9)]);
var inst_37278 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37274,opts);
var state_37315__$1 = state_37315;
if(cljs.core.truth_(inst_37278)){
var statearr_37337_37363 = state_37315__$1;
(statearr_37337_37363[(1)] = (11));

} else {
var statearr_37338_37364 = state_37315__$1;
(statearr_37338_37364[(1)] = (12));

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
});})(c__31119__auto___37346,ch))
;
return ((function (switch__31005__auto__,c__31119__auto___37346,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31006__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31006__auto____0 = (function (){
var statearr_37342 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37342[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31006__auto__);

(statearr_37342[(1)] = (1));

return statearr_37342;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31006__auto____1 = (function (state_37315){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_37315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e37343){if((e37343 instanceof Object)){
var ex__31009__auto__ = e37343;
var statearr_37344_37365 = state_37315;
(statearr_37344_37365[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37366 = state_37315;
state_37315 = G__37366;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31006__auto__ = function(state_37315){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31006__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31006__auto____1.call(this,state_37315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31006__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31006__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto___37346,ch))
})();
var state__31121__auto__ = (function (){var statearr_37345 = f__31120__auto__.call(null);
(statearr_37345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto___37346);

return statearr_37345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto___37346,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37367_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37367_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37370 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37370){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37369){if((e37369 instanceof Error)){
var e = e37369;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37370], null));
} else {
var e = e37369;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37370))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37371){
var map__37380 = p__37371;
var map__37380__$1 = ((((!((map__37380 == null)))?((((map__37380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37380):map__37380);
var opts = map__37380__$1;
var build_id = cljs.core.get.call(null,map__37380__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37380,map__37380__$1,opts,build_id){
return (function (p__37382){
var vec__37383 = p__37382;
var seq__37384 = cljs.core.seq.call(null,vec__37383);
var first__37385 = cljs.core.first.call(null,seq__37384);
var seq__37384__$1 = cljs.core.next.call(null,seq__37384);
var map__37386 = first__37385;
var map__37386__$1 = ((((!((map__37386 == null)))?((((map__37386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37386):map__37386);
var msg = map__37386__$1;
var msg_name = cljs.core.get.call(null,map__37386__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37384__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37383,seq__37384,first__37385,seq__37384__$1,map__37386,map__37386__$1,msg,msg_name,_,map__37380,map__37380__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37383,seq__37384,first__37385,seq__37384__$1,map__37386,map__37386__$1,msg,msg_name,_,map__37380,map__37380__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37380,map__37380__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37394){
var vec__37395 = p__37394;
var seq__37396 = cljs.core.seq.call(null,vec__37395);
var first__37397 = cljs.core.first.call(null,seq__37396);
var seq__37396__$1 = cljs.core.next.call(null,seq__37396);
var map__37398 = first__37397;
var map__37398__$1 = ((((!((map__37398 == null)))?((((map__37398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37398.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37398):map__37398);
var msg = map__37398__$1;
var msg_name = cljs.core.get.call(null,map__37398__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37396__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37400){
var map__37412 = p__37400;
var map__37412__$1 = ((((!((map__37412 == null)))?((((map__37412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37412):map__37412);
var on_compile_warning = cljs.core.get.call(null,map__37412__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37412__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37412,map__37412__$1,on_compile_warning,on_compile_fail){
return (function (p__37414){
var vec__37415 = p__37414;
var seq__37416 = cljs.core.seq.call(null,vec__37415);
var first__37417 = cljs.core.first.call(null,seq__37416);
var seq__37416__$1 = cljs.core.next.call(null,seq__37416);
var map__37418 = first__37417;
var map__37418__$1 = ((((!((map__37418 == null)))?((((map__37418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37418):map__37418);
var msg = map__37418__$1;
var msg_name = cljs.core.get.call(null,map__37418__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37416__$1;
var pred__37420 = cljs.core._EQ_;
var expr__37421 = msg_name;
if(cljs.core.truth_(pred__37420.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37421))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37420.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37421))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37412,map__37412__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto__,msg_hist,msg_names,msg){
return (function (state_37649){
var state_val_37650 = (state_37649[(1)]);
if((state_val_37650 === (7))){
var inst_37569 = (state_37649[(2)]);
var state_37649__$1 = state_37649;
if(cljs.core.truth_(inst_37569)){
var statearr_37651_37701 = state_37649__$1;
(statearr_37651_37701[(1)] = (8));

} else {
var statearr_37652_37702 = state_37649__$1;
(statearr_37652_37702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (20))){
var inst_37643 = (state_37649[(2)]);
var state_37649__$1 = state_37649;
var statearr_37653_37703 = state_37649__$1;
(statearr_37653_37703[(2)] = inst_37643);

(statearr_37653_37703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (27))){
var inst_37639 = (state_37649[(2)]);
var state_37649__$1 = state_37649;
var statearr_37654_37704 = state_37649__$1;
(statearr_37654_37704[(2)] = inst_37639);

(statearr_37654_37704[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (1))){
var inst_37562 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37649__$1 = state_37649;
if(cljs.core.truth_(inst_37562)){
var statearr_37655_37705 = state_37649__$1;
(statearr_37655_37705[(1)] = (2));

} else {
var statearr_37656_37706 = state_37649__$1;
(statearr_37656_37706[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (24))){
var inst_37641 = (state_37649[(2)]);
var state_37649__$1 = state_37649;
var statearr_37657_37707 = state_37649__$1;
(statearr_37657_37707[(2)] = inst_37641);

(statearr_37657_37707[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (4))){
var inst_37647 = (state_37649[(2)]);
var state_37649__$1 = state_37649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37649__$1,inst_37647);
} else {
if((state_val_37650 === (15))){
var inst_37645 = (state_37649[(2)]);
var state_37649__$1 = state_37649;
var statearr_37658_37708 = state_37649__$1;
(statearr_37658_37708[(2)] = inst_37645);

(statearr_37658_37708[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (21))){
var inst_37598 = (state_37649[(2)]);
var inst_37599 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37600 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37599);
var state_37649__$1 = (function (){var statearr_37659 = state_37649;
(statearr_37659[(7)] = inst_37598);

return statearr_37659;
})();
var statearr_37660_37709 = state_37649__$1;
(statearr_37660_37709[(2)] = inst_37600);

(statearr_37660_37709[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (31))){
var inst_37628 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37649__$1 = state_37649;
if(cljs.core.truth_(inst_37628)){
var statearr_37661_37710 = state_37649__$1;
(statearr_37661_37710[(1)] = (34));

} else {
var statearr_37662_37711 = state_37649__$1;
(statearr_37662_37711[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (32))){
var inst_37637 = (state_37649[(2)]);
var state_37649__$1 = state_37649;
var statearr_37663_37712 = state_37649__$1;
(statearr_37663_37712[(2)] = inst_37637);

(statearr_37663_37712[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (33))){
var inst_37624 = (state_37649[(2)]);
var inst_37625 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37626 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37625);
var state_37649__$1 = (function (){var statearr_37664 = state_37649;
(statearr_37664[(8)] = inst_37624);

return statearr_37664;
})();
var statearr_37665_37713 = state_37649__$1;
(statearr_37665_37713[(2)] = inst_37626);

(statearr_37665_37713[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (13))){
var inst_37583 = figwheel.client.heads_up.clear.call(null);
var state_37649__$1 = state_37649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37649__$1,(16),inst_37583);
} else {
if((state_val_37650 === (22))){
var inst_37604 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37605 = figwheel.client.heads_up.append_warning_message.call(null,inst_37604);
var state_37649__$1 = state_37649;
var statearr_37666_37714 = state_37649__$1;
(statearr_37666_37714[(2)] = inst_37605);

(statearr_37666_37714[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (36))){
var inst_37635 = (state_37649[(2)]);
var state_37649__$1 = state_37649;
var statearr_37667_37715 = state_37649__$1;
(statearr_37667_37715[(2)] = inst_37635);

(statearr_37667_37715[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (29))){
var inst_37615 = (state_37649[(2)]);
var inst_37616 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37617 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37616);
var state_37649__$1 = (function (){var statearr_37668 = state_37649;
(statearr_37668[(9)] = inst_37615);

return statearr_37668;
})();
var statearr_37669_37716 = state_37649__$1;
(statearr_37669_37716[(2)] = inst_37617);

(statearr_37669_37716[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (6))){
var inst_37564 = (state_37649[(10)]);
var state_37649__$1 = state_37649;
var statearr_37670_37717 = state_37649__$1;
(statearr_37670_37717[(2)] = inst_37564);

(statearr_37670_37717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (28))){
var inst_37611 = (state_37649[(2)]);
var inst_37612 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37613 = figwheel.client.heads_up.display_warning.call(null,inst_37612);
var state_37649__$1 = (function (){var statearr_37671 = state_37649;
(statearr_37671[(11)] = inst_37611);

return statearr_37671;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37649__$1,(29),inst_37613);
} else {
if((state_val_37650 === (25))){
var inst_37609 = figwheel.client.heads_up.clear.call(null);
var state_37649__$1 = state_37649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37649__$1,(28),inst_37609);
} else {
if((state_val_37650 === (34))){
var inst_37630 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37649__$1 = state_37649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37649__$1,(37),inst_37630);
} else {
if((state_val_37650 === (17))){
var inst_37589 = (state_37649[(2)]);
var inst_37590 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37591 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37590);
var state_37649__$1 = (function (){var statearr_37672 = state_37649;
(statearr_37672[(12)] = inst_37589);

return statearr_37672;
})();
var statearr_37673_37718 = state_37649__$1;
(statearr_37673_37718[(2)] = inst_37591);

(statearr_37673_37718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (3))){
var inst_37581 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37649__$1 = state_37649;
if(cljs.core.truth_(inst_37581)){
var statearr_37674_37719 = state_37649__$1;
(statearr_37674_37719[(1)] = (13));

} else {
var statearr_37675_37720 = state_37649__$1;
(statearr_37675_37720[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (12))){
var inst_37577 = (state_37649[(2)]);
var state_37649__$1 = state_37649;
var statearr_37676_37721 = state_37649__$1;
(statearr_37676_37721[(2)] = inst_37577);

(statearr_37676_37721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (2))){
var inst_37564 = (state_37649[(10)]);
var inst_37564__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37649__$1 = (function (){var statearr_37677 = state_37649;
(statearr_37677[(10)] = inst_37564__$1);

return statearr_37677;
})();
if(cljs.core.truth_(inst_37564__$1)){
var statearr_37678_37722 = state_37649__$1;
(statearr_37678_37722[(1)] = (5));

} else {
var statearr_37679_37723 = state_37649__$1;
(statearr_37679_37723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (23))){
var inst_37607 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37649__$1 = state_37649;
if(cljs.core.truth_(inst_37607)){
var statearr_37680_37724 = state_37649__$1;
(statearr_37680_37724[(1)] = (25));

} else {
var statearr_37681_37725 = state_37649__$1;
(statearr_37681_37725[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (35))){
var state_37649__$1 = state_37649;
var statearr_37682_37726 = state_37649__$1;
(statearr_37682_37726[(2)] = null);

(statearr_37682_37726[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (19))){
var inst_37602 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37649__$1 = state_37649;
if(cljs.core.truth_(inst_37602)){
var statearr_37683_37727 = state_37649__$1;
(statearr_37683_37727[(1)] = (22));

} else {
var statearr_37684_37728 = state_37649__$1;
(statearr_37684_37728[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (11))){
var inst_37573 = (state_37649[(2)]);
var state_37649__$1 = state_37649;
var statearr_37685_37729 = state_37649__$1;
(statearr_37685_37729[(2)] = inst_37573);

(statearr_37685_37729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (9))){
var inst_37575 = figwheel.client.heads_up.clear.call(null);
var state_37649__$1 = state_37649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37649__$1,(12),inst_37575);
} else {
if((state_val_37650 === (5))){
var inst_37566 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37649__$1 = state_37649;
var statearr_37686_37730 = state_37649__$1;
(statearr_37686_37730[(2)] = inst_37566);

(statearr_37686_37730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (14))){
var inst_37593 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37649__$1 = state_37649;
if(cljs.core.truth_(inst_37593)){
var statearr_37687_37731 = state_37649__$1;
(statearr_37687_37731[(1)] = (18));

} else {
var statearr_37688_37732 = state_37649__$1;
(statearr_37688_37732[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (26))){
var inst_37619 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37649__$1 = state_37649;
if(cljs.core.truth_(inst_37619)){
var statearr_37689_37733 = state_37649__$1;
(statearr_37689_37733[(1)] = (30));

} else {
var statearr_37690_37734 = state_37649__$1;
(statearr_37690_37734[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (16))){
var inst_37585 = (state_37649[(2)]);
var inst_37586 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37587 = figwheel.client.heads_up.display_exception.call(null,inst_37586);
var state_37649__$1 = (function (){var statearr_37691 = state_37649;
(statearr_37691[(13)] = inst_37585);

return statearr_37691;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37649__$1,(17),inst_37587);
} else {
if((state_val_37650 === (30))){
var inst_37621 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37622 = figwheel.client.heads_up.display_warning.call(null,inst_37621);
var state_37649__$1 = state_37649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37649__$1,(33),inst_37622);
} else {
if((state_val_37650 === (10))){
var inst_37579 = (state_37649[(2)]);
var state_37649__$1 = state_37649;
var statearr_37692_37735 = state_37649__$1;
(statearr_37692_37735[(2)] = inst_37579);

(statearr_37692_37735[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (18))){
var inst_37595 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37596 = figwheel.client.heads_up.display_exception.call(null,inst_37595);
var state_37649__$1 = state_37649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37649__$1,(21),inst_37596);
} else {
if((state_val_37650 === (37))){
var inst_37632 = (state_37649[(2)]);
var state_37649__$1 = state_37649;
var statearr_37693_37736 = state_37649__$1;
(statearr_37693_37736[(2)] = inst_37632);

(statearr_37693_37736[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37650 === (8))){
var inst_37571 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37649__$1 = state_37649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37649__$1,(11),inst_37571);
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
});})(c__31119__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31005__auto__,c__31119__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31006__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31006__auto____0 = (function (){
var statearr_37697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37697[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31006__auto__);

(statearr_37697[(1)] = (1));

return statearr_37697;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31006__auto____1 = (function (state_37649){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_37649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e37698){if((e37698 instanceof Object)){
var ex__31009__auto__ = e37698;
var statearr_37699_37737 = state_37649;
(statearr_37699_37737[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37738 = state_37649;
state_37649 = G__37738;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31006__auto__ = function(state_37649){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31006__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31006__auto____1.call(this,state_37649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31006__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31006__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto__,msg_hist,msg_names,msg))
})();
var state__31121__auto__ = (function (){var statearr_37700 = f__31120__auto__.call(null);
(statearr_37700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto__);

return statearr_37700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto__,msg_hist,msg_names,msg))
);

return c__31119__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31119__auto___37801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto___37801,ch){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto___37801,ch){
return (function (state_37784){
var state_val_37785 = (state_37784[(1)]);
if((state_val_37785 === (1))){
var state_37784__$1 = state_37784;
var statearr_37786_37802 = state_37784__$1;
(statearr_37786_37802[(2)] = null);

(statearr_37786_37802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37785 === (2))){
var state_37784__$1 = state_37784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37784__$1,(4),ch);
} else {
if((state_val_37785 === (3))){
var inst_37782 = (state_37784[(2)]);
var state_37784__$1 = state_37784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37784__$1,inst_37782);
} else {
if((state_val_37785 === (4))){
var inst_37772 = (state_37784[(7)]);
var inst_37772__$1 = (state_37784[(2)]);
var state_37784__$1 = (function (){var statearr_37787 = state_37784;
(statearr_37787[(7)] = inst_37772__$1);

return statearr_37787;
})();
if(cljs.core.truth_(inst_37772__$1)){
var statearr_37788_37803 = state_37784__$1;
(statearr_37788_37803[(1)] = (5));

} else {
var statearr_37789_37804 = state_37784__$1;
(statearr_37789_37804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37785 === (5))){
var inst_37772 = (state_37784[(7)]);
var inst_37774 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37772);
var state_37784__$1 = state_37784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37784__$1,(8),inst_37774);
} else {
if((state_val_37785 === (6))){
var state_37784__$1 = state_37784;
var statearr_37790_37805 = state_37784__$1;
(statearr_37790_37805[(2)] = null);

(statearr_37790_37805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37785 === (7))){
var inst_37780 = (state_37784[(2)]);
var state_37784__$1 = state_37784;
var statearr_37791_37806 = state_37784__$1;
(statearr_37791_37806[(2)] = inst_37780);

(statearr_37791_37806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37785 === (8))){
var inst_37776 = (state_37784[(2)]);
var state_37784__$1 = (function (){var statearr_37792 = state_37784;
(statearr_37792[(8)] = inst_37776);

return statearr_37792;
})();
var statearr_37793_37807 = state_37784__$1;
(statearr_37793_37807[(2)] = null);

(statearr_37793_37807[(1)] = (2));


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
});})(c__31119__auto___37801,ch))
;
return ((function (switch__31005__auto__,c__31119__auto___37801,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31006__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31006__auto____0 = (function (){
var statearr_37797 = [null,null,null,null,null,null,null,null,null];
(statearr_37797[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31006__auto__);

(statearr_37797[(1)] = (1));

return statearr_37797;
});
var figwheel$client$heads_up_plugin_$_state_machine__31006__auto____1 = (function (state_37784){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_37784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e37798){if((e37798 instanceof Object)){
var ex__31009__auto__ = e37798;
var statearr_37799_37808 = state_37784;
(statearr_37799_37808[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37809 = state_37784;
state_37784 = G__37809;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31006__auto__ = function(state_37784){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31006__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31006__auto____1.call(this,state_37784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31006__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31006__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto___37801,ch))
})();
var state__31121__auto__ = (function (){var statearr_37800 = f__31120__auto__.call(null);
(statearr_37800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto___37801);

return statearr_37800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto___37801,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto__){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto__){
return (function (state_37830){
var state_val_37831 = (state_37830[(1)]);
if((state_val_37831 === (1))){
var inst_37825 = cljs.core.async.timeout.call(null,(3000));
var state_37830__$1 = state_37830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37830__$1,(2),inst_37825);
} else {
if((state_val_37831 === (2))){
var inst_37827 = (state_37830[(2)]);
var inst_37828 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37830__$1 = (function (){var statearr_37832 = state_37830;
(statearr_37832[(7)] = inst_37827);

return statearr_37832;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37830__$1,inst_37828);
} else {
return null;
}
}
});})(c__31119__auto__))
;
return ((function (switch__31005__auto__,c__31119__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31006__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31006__auto____0 = (function (){
var statearr_37836 = [null,null,null,null,null,null,null,null];
(statearr_37836[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31006__auto__);

(statearr_37836[(1)] = (1));

return statearr_37836;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31006__auto____1 = (function (state_37830){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_37830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e37837){if((e37837 instanceof Object)){
var ex__31009__auto__ = e37837;
var statearr_37838_37840 = state_37830;
(statearr_37838_37840[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37841 = state_37830;
state_37830 = G__37841;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31006__auto__ = function(state_37830){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31006__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31006__auto____1.call(this,state_37830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31006__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31006__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto__))
})();
var state__31121__auto__ = (function (){var statearr_37839 = f__31120__auto__.call(null);
(statearr_37839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto__);

return statearr_37839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto__))
);

return c__31119__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6753__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6753__auto__)){
var figwheel_version = temp__6753__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto__,figwheel_version,temp__6753__auto__){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto__,figwheel_version,temp__6753__auto__){
return (function (state_37864){
var state_val_37865 = (state_37864[(1)]);
if((state_val_37865 === (1))){
var inst_37858 = cljs.core.async.timeout.call(null,(2000));
var state_37864__$1 = state_37864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37864__$1,(2),inst_37858);
} else {
if((state_val_37865 === (2))){
var inst_37860 = (state_37864[(2)]);
var inst_37861 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37862 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37861);
var state_37864__$1 = (function (){var statearr_37866 = state_37864;
(statearr_37866[(7)] = inst_37860);

return statearr_37866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37864__$1,inst_37862);
} else {
return null;
}
}
});})(c__31119__auto__,figwheel_version,temp__6753__auto__))
;
return ((function (switch__31005__auto__,c__31119__auto__,figwheel_version,temp__6753__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31006__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31006__auto____0 = (function (){
var statearr_37870 = [null,null,null,null,null,null,null,null];
(statearr_37870[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31006__auto__);

(statearr_37870[(1)] = (1));

return statearr_37870;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31006__auto____1 = (function (state_37864){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_37864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e37871){if((e37871 instanceof Object)){
var ex__31009__auto__ = e37871;
var statearr_37872_37874 = state_37864;
(statearr_37872_37874[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37875 = state_37864;
state_37864 = G__37875;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31006__auto__ = function(state_37864){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31006__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31006__auto____1.call(this,state_37864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31006__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31006__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto__,figwheel_version,temp__6753__auto__))
})();
var state__31121__auto__ = (function (){var statearr_37873 = f__31120__auto__.call(null);
(statearr_37873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto__);

return statearr_37873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto__,figwheel_version,temp__6753__auto__))
);

return c__31119__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37876){
var map__37880 = p__37876;
var map__37880__$1 = ((((!((map__37880 == null)))?((((map__37880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37880):map__37880);
var file = cljs.core.get.call(null,map__37880__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37880__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37880__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37882 = "";
var G__37882__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37882),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37882);
var G__37882__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37882__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37882__$1);
if(cljs.core.truth_((function (){var and__26676__auto__ = line;
if(cljs.core.truth_(and__26676__auto__)){
return column;
} else {
return and__26676__auto__;
}
})())){
return [cljs.core.str(G__37882__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37882__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37883){
var map__37890 = p__37883;
var map__37890__$1 = ((((!((map__37890 == null)))?((((map__37890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37890):map__37890);
var ed = map__37890__$1;
var formatted_exception = cljs.core.get.call(null,map__37890__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37890__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37890__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37892_37896 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37893_37897 = null;
var count__37894_37898 = (0);
var i__37895_37899 = (0);
while(true){
if((i__37895_37899 < count__37894_37898)){
var msg_37900 = cljs.core._nth.call(null,chunk__37893_37897,i__37895_37899);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37900);

var G__37901 = seq__37892_37896;
var G__37902 = chunk__37893_37897;
var G__37903 = count__37894_37898;
var G__37904 = (i__37895_37899 + (1));
seq__37892_37896 = G__37901;
chunk__37893_37897 = G__37902;
count__37894_37898 = G__37903;
i__37895_37899 = G__37904;
continue;
} else {
var temp__6753__auto___37905 = cljs.core.seq.call(null,seq__37892_37896);
if(temp__6753__auto___37905){
var seq__37892_37906__$1 = temp__6753__auto___37905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37892_37906__$1)){
var c__27594__auto___37907 = cljs.core.chunk_first.call(null,seq__37892_37906__$1);
var G__37908 = cljs.core.chunk_rest.call(null,seq__37892_37906__$1);
var G__37909 = c__27594__auto___37907;
var G__37910 = cljs.core.count.call(null,c__27594__auto___37907);
var G__37911 = (0);
seq__37892_37896 = G__37908;
chunk__37893_37897 = G__37909;
count__37894_37898 = G__37910;
i__37895_37899 = G__37911;
continue;
} else {
var msg_37912 = cljs.core.first.call(null,seq__37892_37906__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37912);

var G__37913 = cljs.core.next.call(null,seq__37892_37906__$1);
var G__37914 = null;
var G__37915 = (0);
var G__37916 = (0);
seq__37892_37896 = G__37913;
chunk__37893_37897 = G__37914;
count__37894_37898 = G__37915;
i__37895_37899 = G__37916;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37917){
var map__37920 = p__37917;
var map__37920__$1 = ((((!((map__37920 == null)))?((((map__37920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37920):map__37920);
var w = map__37920__$1;
var message = cljs.core.get.call(null,map__37920__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__26676__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__26676__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__26676__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37932 = cljs.core.seq.call(null,plugins);
var chunk__37933 = null;
var count__37934 = (0);
var i__37935 = (0);
while(true){
if((i__37935 < count__37934)){
var vec__37936 = cljs.core._nth.call(null,chunk__37933,i__37935);
var k = cljs.core.nth.call(null,vec__37936,(0),null);
var plugin = cljs.core.nth.call(null,vec__37936,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37942 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37932,chunk__37933,count__37934,i__37935,pl_37942,vec__37936,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37942.call(null,msg_hist);
});})(seq__37932,chunk__37933,count__37934,i__37935,pl_37942,vec__37936,k,plugin))
);
} else {
}

var G__37943 = seq__37932;
var G__37944 = chunk__37933;
var G__37945 = count__37934;
var G__37946 = (i__37935 + (1));
seq__37932 = G__37943;
chunk__37933 = G__37944;
count__37934 = G__37945;
i__37935 = G__37946;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__37932);
if(temp__6753__auto__){
var seq__37932__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37932__$1)){
var c__27594__auto__ = cljs.core.chunk_first.call(null,seq__37932__$1);
var G__37947 = cljs.core.chunk_rest.call(null,seq__37932__$1);
var G__37948 = c__27594__auto__;
var G__37949 = cljs.core.count.call(null,c__27594__auto__);
var G__37950 = (0);
seq__37932 = G__37947;
chunk__37933 = G__37948;
count__37934 = G__37949;
i__37935 = G__37950;
continue;
} else {
var vec__37939 = cljs.core.first.call(null,seq__37932__$1);
var k = cljs.core.nth.call(null,vec__37939,(0),null);
var plugin = cljs.core.nth.call(null,vec__37939,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37951 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37932,chunk__37933,count__37934,i__37935,pl_37951,vec__37939,k,plugin,seq__37932__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37951.call(null,msg_hist);
});})(seq__37932,chunk__37933,count__37934,i__37935,pl_37951,vec__37939,k,plugin,seq__37932__$1,temp__6753__auto__))
);
} else {
}

var G__37952 = cljs.core.next.call(null,seq__37932__$1);
var G__37953 = null;
var G__37954 = (0);
var G__37955 = (0);
seq__37932 = G__37952;
chunk__37933 = G__37953;
count__37934 = G__37954;
i__37935 = G__37955;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37956 = [];
var len__27904__auto___37963 = arguments.length;
var i__27905__auto___37964 = (0);
while(true){
if((i__27905__auto___37964 < len__27904__auto___37963)){
args37956.push((arguments[i__27905__auto___37964]));

var G__37965 = (i__27905__auto___37964 + (1));
i__27905__auto___37964 = G__37965;
continue;
} else {
}
break;
}

var G__37958 = args37956.length;
switch (G__37958) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37956.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37959_37967 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37960_37968 = null;
var count__37961_37969 = (0);
var i__37962_37970 = (0);
while(true){
if((i__37962_37970 < count__37961_37969)){
var msg_37971 = cljs.core._nth.call(null,chunk__37960_37968,i__37962_37970);
figwheel.client.socket.handle_incoming_message.call(null,msg_37971);

var G__37972 = seq__37959_37967;
var G__37973 = chunk__37960_37968;
var G__37974 = count__37961_37969;
var G__37975 = (i__37962_37970 + (1));
seq__37959_37967 = G__37972;
chunk__37960_37968 = G__37973;
count__37961_37969 = G__37974;
i__37962_37970 = G__37975;
continue;
} else {
var temp__6753__auto___37976 = cljs.core.seq.call(null,seq__37959_37967);
if(temp__6753__auto___37976){
var seq__37959_37977__$1 = temp__6753__auto___37976;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37959_37977__$1)){
var c__27594__auto___37978 = cljs.core.chunk_first.call(null,seq__37959_37977__$1);
var G__37979 = cljs.core.chunk_rest.call(null,seq__37959_37977__$1);
var G__37980 = c__27594__auto___37978;
var G__37981 = cljs.core.count.call(null,c__27594__auto___37978);
var G__37982 = (0);
seq__37959_37967 = G__37979;
chunk__37960_37968 = G__37980;
count__37961_37969 = G__37981;
i__37962_37970 = G__37982;
continue;
} else {
var msg_37983 = cljs.core.first.call(null,seq__37959_37977__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37983);

var G__37984 = cljs.core.next.call(null,seq__37959_37977__$1);
var G__37985 = null;
var G__37986 = (0);
var G__37987 = (0);
seq__37959_37967 = G__37984;
chunk__37960_37968 = G__37985;
count__37961_37969 = G__37986;
i__37962_37970 = G__37987;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27911__auto__ = [];
var len__27904__auto___37992 = arguments.length;
var i__27905__auto___37993 = (0);
while(true){
if((i__27905__auto___37993 < len__27904__auto___37992)){
args__27911__auto__.push((arguments[i__27905__auto___37993]));

var G__37994 = (i__27905__auto___37993 + (1));
i__27905__auto___37993 = G__37994;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((0) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27912__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37989){
var map__37990 = p__37989;
var map__37990__$1 = ((((!((map__37990 == null)))?((((map__37990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37990):map__37990);
var opts = map__37990__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37988){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37988));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37996){if((e37996 instanceof Error)){
var e = e37996;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37996;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38000){
var map__38001 = p__38000;
var map__38001__$1 = ((((!((map__38001 == null)))?((((map__38001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38001):map__38001);
var msg_name = cljs.core.get.call(null,map__38001__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1486282654956