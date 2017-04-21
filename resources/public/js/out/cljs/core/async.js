// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args31178 = [];
var len__27904__auto___31184 = arguments.length;
var i__27905__auto___31185 = (0);
while(true){
if((i__27905__auto___31185 < len__27904__auto___31184)){
args31178.push((arguments[i__27905__auto___31185]));

var G__31186 = (i__27905__auto___31185 + (1));
i__27905__auto___31185 = G__31186;
continue;
} else {
}
break;
}

var G__31180 = args31178.length;
switch (G__31180) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31178.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31181 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31181 = (function (f,blockable,meta31182){
this.f = f;
this.blockable = blockable;
this.meta31182 = meta31182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31183,meta31182__$1){
var self__ = this;
var _31183__$1 = this;
return (new cljs.core.async.t_cljs$core$async31181(self__.f,self__.blockable,meta31182__$1));
});

cljs.core.async.t_cljs$core$async31181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31183){
var self__ = this;
var _31183__$1 = this;
return self__.meta31182;
});

cljs.core.async.t_cljs$core$async31181.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31181.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31182","meta31182",-222321250,null)], null);
});

cljs.core.async.t_cljs$core$async31181.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31181";

cljs.core.async.t_cljs$core$async31181.cljs$lang$ctorPrWriter = (function (this__27340__auto__,writer__27341__auto__,opt__27342__auto__){
return cljs.core._write.call(null,writer__27341__auto__,"cljs.core.async/t_cljs$core$async31181");
});

cljs.core.async.__GT_t_cljs$core$async31181 = (function cljs$core$async$__GT_t_cljs$core$async31181(f__$1,blockable__$1,meta31182){
return (new cljs.core.async.t_cljs$core$async31181(f__$1,blockable__$1,meta31182));
});

}

return (new cljs.core.async.t_cljs$core$async31181(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args31190 = [];
var len__27904__auto___31193 = arguments.length;
var i__27905__auto___31194 = (0);
while(true){
if((i__27905__auto___31194 < len__27904__auto___31193)){
args31190.push((arguments[i__27905__auto___31194]));

var G__31195 = (i__27905__auto___31194 + (1));
i__27905__auto___31194 = G__31195;
continue;
} else {
}
break;
}

var G__31192 = args31190.length;
switch (G__31192) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31190.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args31197 = [];
var len__27904__auto___31200 = arguments.length;
var i__27905__auto___31201 = (0);
while(true){
if((i__27905__auto___31201 < len__27904__auto___31200)){
args31197.push((arguments[i__27905__auto___31201]));

var G__31202 = (i__27905__auto___31201 + (1));
i__27905__auto___31201 = G__31202;
continue;
} else {
}
break;
}

var G__31199 = args31197.length;
switch (G__31199) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31197.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args31204 = [];
var len__27904__auto___31207 = arguments.length;
var i__27905__auto___31208 = (0);
while(true){
if((i__27905__auto___31208 < len__27904__auto___31207)){
args31204.push((arguments[i__27905__auto___31208]));

var G__31209 = (i__27905__auto___31208 + (1));
i__27905__auto___31208 = G__31209;
continue;
} else {
}
break;
}

var G__31206 = args31204.length;
switch (G__31206) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31204.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31211 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31211);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31211,ret){
return (function (){
return fn1.call(null,val_31211);
});})(val_31211,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args31212 = [];
var len__27904__auto___31215 = arguments.length;
var i__27905__auto___31216 = (0);
while(true){
if((i__27905__auto___31216 < len__27904__auto___31215)){
args31212.push((arguments[i__27905__auto___31216]));

var G__31217 = (i__27905__auto___31216 + (1));
i__27905__auto___31216 = G__31217;
continue;
} else {
}
break;
}

var G__31214 = args31212.length;
switch (G__31214) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31212.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6751__auto__)){
var ret = temp__6751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6751__auto__)){
var retb = temp__6751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6751__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6751__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__27704__auto___31219 = n;
var x_31220 = (0);
while(true){
if((x_31220 < n__27704__auto___31219)){
(a[x_31220] = (0));

var G__31221 = (x_31220 + (1));
x_31220 = G__31221;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31222 = (i + (1));
i = G__31222;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31226 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31226 = (function (flag,meta31227){
this.flag = flag;
this.meta31227 = meta31227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31228,meta31227__$1){
var self__ = this;
var _31228__$1 = this;
return (new cljs.core.async.t_cljs$core$async31226(self__.flag,meta31227__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31226.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31228){
var self__ = this;
var _31228__$1 = this;
return self__.meta31227;
});})(flag))
;

cljs.core.async.t_cljs$core$async31226.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31226.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31226.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31226.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31226.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31227","meta31227",2034213969,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31226.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31226";

cljs.core.async.t_cljs$core$async31226.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27340__auto__,writer__27341__auto__,opt__27342__auto__){
return cljs.core._write.call(null,writer__27341__auto__,"cljs.core.async/t_cljs$core$async31226");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31226 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31226(flag__$1,meta31227){
return (new cljs.core.async.t_cljs$core$async31226(flag__$1,meta31227));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31226(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31232 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31232 = (function (flag,cb,meta31233){
this.flag = flag;
this.cb = cb;
this.meta31233 = meta31233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31234,meta31233__$1){
var self__ = this;
var _31234__$1 = this;
return (new cljs.core.async.t_cljs$core$async31232(self__.flag,self__.cb,meta31233__$1));
});

cljs.core.async.t_cljs$core$async31232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31234){
var self__ = this;
var _31234__$1 = this;
return self__.meta31233;
});

cljs.core.async.t_cljs$core$async31232.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31232.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31233","meta31233",356270729,null)], null);
});

cljs.core.async.t_cljs$core$async31232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31232";

cljs.core.async.t_cljs$core$async31232.cljs$lang$ctorPrWriter = (function (this__27340__auto__,writer__27341__auto__,opt__27342__auto__){
return cljs.core._write.call(null,writer__27341__auto__,"cljs.core.async/t_cljs$core$async31232");
});

cljs.core.async.__GT_t_cljs$core$async31232 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31232(flag__$1,cb__$1,meta31233){
return (new cljs.core.async.t_cljs$core$async31232(flag__$1,cb__$1,meta31233));
});

}

return (new cljs.core.async.t_cljs$core$async31232(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31235_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31235_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31236_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31236_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26688__auto__ = wport;
if(cljs.core.truth_(or__26688__auto__)){
return or__26688__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31237 = (i + (1));
i = G__31237;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26688__auto__ = ret;
if(cljs.core.truth_(or__26688__auto__)){
return or__26688__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6753__auto__ = (function (){var and__26676__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26676__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26676__auto__;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var got = temp__6753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27911__auto__ = [];
var len__27904__auto___31243 = arguments.length;
var i__27905__auto___31244 = (0);
while(true){
if((i__27905__auto___31244 < len__27904__auto___31243)){
args__27911__auto__.push((arguments[i__27905__auto___31244]));

var G__31245 = (i__27905__auto___31244 + (1));
i__27905__auto___31244 = G__31245;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((1) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27912__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31240){
var map__31241 = p__31240;
var map__31241__$1 = ((((!((map__31241 == null)))?((((map__31241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31241.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31241):map__31241);
var opts = map__31241__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31238){
var G__31239 = cljs.core.first.call(null,seq31238);
var seq31238__$1 = cljs.core.next.call(null,seq31238);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31239,seq31238__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args31246 = [];
var len__27904__auto___31296 = arguments.length;
var i__27905__auto___31297 = (0);
while(true){
if((i__27905__auto___31297 < len__27904__auto___31296)){
args31246.push((arguments[i__27905__auto___31297]));

var G__31298 = (i__27905__auto___31297 + (1));
i__27905__auto___31297 = G__31298;
continue;
} else {
}
break;
}

var G__31248 = args31246.length;
switch (G__31248) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31246.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31119__auto___31300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto___31300){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto___31300){
return (function (state_31272){
var state_val_31273 = (state_31272[(1)]);
if((state_val_31273 === (7))){
var inst_31268 = (state_31272[(2)]);
var state_31272__$1 = state_31272;
var statearr_31274_31301 = state_31272__$1;
(statearr_31274_31301[(2)] = inst_31268);

(statearr_31274_31301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31273 === (1))){
var state_31272__$1 = state_31272;
var statearr_31275_31302 = state_31272__$1;
(statearr_31275_31302[(2)] = null);

(statearr_31275_31302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31273 === (4))){
var inst_31251 = (state_31272[(7)]);
var inst_31251__$1 = (state_31272[(2)]);
var inst_31252 = (inst_31251__$1 == null);
var state_31272__$1 = (function (){var statearr_31276 = state_31272;
(statearr_31276[(7)] = inst_31251__$1);

return statearr_31276;
})();
if(cljs.core.truth_(inst_31252)){
var statearr_31277_31303 = state_31272__$1;
(statearr_31277_31303[(1)] = (5));

} else {
var statearr_31278_31304 = state_31272__$1;
(statearr_31278_31304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31273 === (13))){
var state_31272__$1 = state_31272;
var statearr_31279_31305 = state_31272__$1;
(statearr_31279_31305[(2)] = null);

(statearr_31279_31305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31273 === (6))){
var inst_31251 = (state_31272[(7)]);
var state_31272__$1 = state_31272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31272__$1,(11),to,inst_31251);
} else {
if((state_val_31273 === (3))){
var inst_31270 = (state_31272[(2)]);
var state_31272__$1 = state_31272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31272__$1,inst_31270);
} else {
if((state_val_31273 === (12))){
var state_31272__$1 = state_31272;
var statearr_31280_31306 = state_31272__$1;
(statearr_31280_31306[(2)] = null);

(statearr_31280_31306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31273 === (2))){
var state_31272__$1 = state_31272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31272__$1,(4),from);
} else {
if((state_val_31273 === (11))){
var inst_31261 = (state_31272[(2)]);
var state_31272__$1 = state_31272;
if(cljs.core.truth_(inst_31261)){
var statearr_31281_31307 = state_31272__$1;
(statearr_31281_31307[(1)] = (12));

} else {
var statearr_31282_31308 = state_31272__$1;
(statearr_31282_31308[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31273 === (9))){
var state_31272__$1 = state_31272;
var statearr_31283_31309 = state_31272__$1;
(statearr_31283_31309[(2)] = null);

(statearr_31283_31309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31273 === (5))){
var state_31272__$1 = state_31272;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31284_31310 = state_31272__$1;
(statearr_31284_31310[(1)] = (8));

} else {
var statearr_31285_31311 = state_31272__$1;
(statearr_31285_31311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31273 === (14))){
var inst_31266 = (state_31272[(2)]);
var state_31272__$1 = state_31272;
var statearr_31286_31312 = state_31272__$1;
(statearr_31286_31312[(2)] = inst_31266);

(statearr_31286_31312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31273 === (10))){
var inst_31258 = (state_31272[(2)]);
var state_31272__$1 = state_31272;
var statearr_31287_31313 = state_31272__$1;
(statearr_31287_31313[(2)] = inst_31258);

(statearr_31287_31313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31273 === (8))){
var inst_31255 = cljs.core.async.close_BANG_.call(null,to);
var state_31272__$1 = state_31272;
var statearr_31288_31314 = state_31272__$1;
(statearr_31288_31314[(2)] = inst_31255);

(statearr_31288_31314[(1)] = (10));


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
});})(c__31119__auto___31300))
;
return ((function (switch__31005__auto__,c__31119__auto___31300){
return (function() {
var cljs$core$async$state_machine__31006__auto__ = null;
var cljs$core$async$state_machine__31006__auto____0 = (function (){
var statearr_31292 = [null,null,null,null,null,null,null,null];
(statearr_31292[(0)] = cljs$core$async$state_machine__31006__auto__);

(statearr_31292[(1)] = (1));

return statearr_31292;
});
var cljs$core$async$state_machine__31006__auto____1 = (function (state_31272){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_31272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e31293){if((e31293 instanceof Object)){
var ex__31009__auto__ = e31293;
var statearr_31294_31315 = state_31272;
(statearr_31294_31315[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31316 = state_31272;
state_31272 = G__31316;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
cljs$core$async$state_machine__31006__auto__ = function(state_31272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31006__auto____1.call(this,state_31272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31006__auto____0;
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31006__auto____1;
return cljs$core$async$state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto___31300))
})();
var state__31121__auto__ = (function (){var statearr_31295 = f__31120__auto__.call(null);
(statearr_31295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto___31300);

return statearr_31295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto___31300))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31504){
var vec__31505 = p__31504;
var v = cljs.core.nth.call(null,vec__31505,(0),null);
var p = cljs.core.nth.call(null,vec__31505,(1),null);
var job = vec__31505;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31119__auto___31691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto___31691,res,vec__31505,v,p,job,jobs,results){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto___31691,res,vec__31505,v,p,job,jobs,results){
return (function (state_31512){
var state_val_31513 = (state_31512[(1)]);
if((state_val_31513 === (1))){
var state_31512__$1 = state_31512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31512__$1,(2),res,v);
} else {
if((state_val_31513 === (2))){
var inst_31509 = (state_31512[(2)]);
var inst_31510 = cljs.core.async.close_BANG_.call(null,res);
var state_31512__$1 = (function (){var statearr_31514 = state_31512;
(statearr_31514[(7)] = inst_31509);

return statearr_31514;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31512__$1,inst_31510);
} else {
return null;
}
}
});})(c__31119__auto___31691,res,vec__31505,v,p,job,jobs,results))
;
return ((function (switch__31005__auto__,c__31119__auto___31691,res,vec__31505,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____0 = (function (){
var statearr_31518 = [null,null,null,null,null,null,null,null];
(statearr_31518[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__);

(statearr_31518[(1)] = (1));

return statearr_31518;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____1 = (function (state_31512){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_31512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e31519){if((e31519 instanceof Object)){
var ex__31009__auto__ = e31519;
var statearr_31520_31692 = state_31512;
(statearr_31520_31692[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31693 = state_31512;
state_31512 = G__31693;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__ = function(state_31512){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____1.call(this,state_31512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto___31691,res,vec__31505,v,p,job,jobs,results))
})();
var state__31121__auto__ = (function (){var statearr_31521 = f__31120__auto__.call(null);
(statearr_31521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto___31691);

return statearr_31521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto___31691,res,vec__31505,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31522){
var vec__31523 = p__31522;
var v = cljs.core.nth.call(null,vec__31523,(0),null);
var p = cljs.core.nth.call(null,vec__31523,(1),null);
var job = vec__31523;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__27704__auto___31694 = n;
var __31695 = (0);
while(true){
if((__31695 < n__27704__auto___31694)){
var G__31526_31696 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31526_31696) {
case "compute":
var c__31119__auto___31698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31695,c__31119__auto___31698,G__31526_31696,n__27704__auto___31694,jobs,results,process,async){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (__31695,c__31119__auto___31698,G__31526_31696,n__27704__auto___31694,jobs,results,process,async){
return (function (state_31539){
var state_val_31540 = (state_31539[(1)]);
if((state_val_31540 === (1))){
var state_31539__$1 = state_31539;
var statearr_31541_31699 = state_31539__$1;
(statearr_31541_31699[(2)] = null);

(statearr_31541_31699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31540 === (2))){
var state_31539__$1 = state_31539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31539__$1,(4),jobs);
} else {
if((state_val_31540 === (3))){
var inst_31537 = (state_31539[(2)]);
var state_31539__$1 = state_31539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31539__$1,inst_31537);
} else {
if((state_val_31540 === (4))){
var inst_31529 = (state_31539[(2)]);
var inst_31530 = process.call(null,inst_31529);
var state_31539__$1 = state_31539;
if(cljs.core.truth_(inst_31530)){
var statearr_31542_31700 = state_31539__$1;
(statearr_31542_31700[(1)] = (5));

} else {
var statearr_31543_31701 = state_31539__$1;
(statearr_31543_31701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31540 === (5))){
var state_31539__$1 = state_31539;
var statearr_31544_31702 = state_31539__$1;
(statearr_31544_31702[(2)] = null);

(statearr_31544_31702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31540 === (6))){
var state_31539__$1 = state_31539;
var statearr_31545_31703 = state_31539__$1;
(statearr_31545_31703[(2)] = null);

(statearr_31545_31703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31540 === (7))){
var inst_31535 = (state_31539[(2)]);
var state_31539__$1 = state_31539;
var statearr_31546_31704 = state_31539__$1;
(statearr_31546_31704[(2)] = inst_31535);

(statearr_31546_31704[(1)] = (3));


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
});})(__31695,c__31119__auto___31698,G__31526_31696,n__27704__auto___31694,jobs,results,process,async))
;
return ((function (__31695,switch__31005__auto__,c__31119__auto___31698,G__31526_31696,n__27704__auto___31694,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____0 = (function (){
var statearr_31550 = [null,null,null,null,null,null,null];
(statearr_31550[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__);

(statearr_31550[(1)] = (1));

return statearr_31550;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____1 = (function (state_31539){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_31539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e31551){if((e31551 instanceof Object)){
var ex__31009__auto__ = e31551;
var statearr_31552_31705 = state_31539;
(statearr_31552_31705[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31706 = state_31539;
state_31539 = G__31706;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__ = function(state_31539){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____1.call(this,state_31539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__;
})()
;})(__31695,switch__31005__auto__,c__31119__auto___31698,G__31526_31696,n__27704__auto___31694,jobs,results,process,async))
})();
var state__31121__auto__ = (function (){var statearr_31553 = f__31120__auto__.call(null);
(statearr_31553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto___31698);

return statearr_31553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(__31695,c__31119__auto___31698,G__31526_31696,n__27704__auto___31694,jobs,results,process,async))
);


break;
case "async":
var c__31119__auto___31707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31695,c__31119__auto___31707,G__31526_31696,n__27704__auto___31694,jobs,results,process,async){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (__31695,c__31119__auto___31707,G__31526_31696,n__27704__auto___31694,jobs,results,process,async){
return (function (state_31566){
var state_val_31567 = (state_31566[(1)]);
if((state_val_31567 === (1))){
var state_31566__$1 = state_31566;
var statearr_31568_31708 = state_31566__$1;
(statearr_31568_31708[(2)] = null);

(statearr_31568_31708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (2))){
var state_31566__$1 = state_31566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31566__$1,(4),jobs);
} else {
if((state_val_31567 === (3))){
var inst_31564 = (state_31566[(2)]);
var state_31566__$1 = state_31566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31566__$1,inst_31564);
} else {
if((state_val_31567 === (4))){
var inst_31556 = (state_31566[(2)]);
var inst_31557 = async.call(null,inst_31556);
var state_31566__$1 = state_31566;
if(cljs.core.truth_(inst_31557)){
var statearr_31569_31709 = state_31566__$1;
(statearr_31569_31709[(1)] = (5));

} else {
var statearr_31570_31710 = state_31566__$1;
(statearr_31570_31710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (5))){
var state_31566__$1 = state_31566;
var statearr_31571_31711 = state_31566__$1;
(statearr_31571_31711[(2)] = null);

(statearr_31571_31711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (6))){
var state_31566__$1 = state_31566;
var statearr_31572_31712 = state_31566__$1;
(statearr_31572_31712[(2)] = null);

(statearr_31572_31712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (7))){
var inst_31562 = (state_31566[(2)]);
var state_31566__$1 = state_31566;
var statearr_31573_31713 = state_31566__$1;
(statearr_31573_31713[(2)] = inst_31562);

(statearr_31573_31713[(1)] = (3));


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
});})(__31695,c__31119__auto___31707,G__31526_31696,n__27704__auto___31694,jobs,results,process,async))
;
return ((function (__31695,switch__31005__auto__,c__31119__auto___31707,G__31526_31696,n__27704__auto___31694,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____0 = (function (){
var statearr_31577 = [null,null,null,null,null,null,null];
(statearr_31577[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__);

(statearr_31577[(1)] = (1));

return statearr_31577;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____1 = (function (state_31566){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_31566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e31578){if((e31578 instanceof Object)){
var ex__31009__auto__ = e31578;
var statearr_31579_31714 = state_31566;
(statearr_31579_31714[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31715 = state_31566;
state_31566 = G__31715;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__ = function(state_31566){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____1.call(this,state_31566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__;
})()
;})(__31695,switch__31005__auto__,c__31119__auto___31707,G__31526_31696,n__27704__auto___31694,jobs,results,process,async))
})();
var state__31121__auto__ = (function (){var statearr_31580 = f__31120__auto__.call(null);
(statearr_31580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto___31707);

return statearr_31580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(__31695,c__31119__auto___31707,G__31526_31696,n__27704__auto___31694,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31716 = (__31695 + (1));
__31695 = G__31716;
continue;
} else {
}
break;
}

var c__31119__auto___31717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto___31717,jobs,results,process,async){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto___31717,jobs,results,process,async){
return (function (state_31602){
var state_val_31603 = (state_31602[(1)]);
if((state_val_31603 === (1))){
var state_31602__$1 = state_31602;
var statearr_31604_31718 = state_31602__$1;
(statearr_31604_31718[(2)] = null);

(statearr_31604_31718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (2))){
var state_31602__$1 = state_31602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31602__$1,(4),from);
} else {
if((state_val_31603 === (3))){
var inst_31600 = (state_31602[(2)]);
var state_31602__$1 = state_31602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31602__$1,inst_31600);
} else {
if((state_val_31603 === (4))){
var inst_31583 = (state_31602[(7)]);
var inst_31583__$1 = (state_31602[(2)]);
var inst_31584 = (inst_31583__$1 == null);
var state_31602__$1 = (function (){var statearr_31605 = state_31602;
(statearr_31605[(7)] = inst_31583__$1);

return statearr_31605;
})();
if(cljs.core.truth_(inst_31584)){
var statearr_31606_31719 = state_31602__$1;
(statearr_31606_31719[(1)] = (5));

} else {
var statearr_31607_31720 = state_31602__$1;
(statearr_31607_31720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (5))){
var inst_31586 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31602__$1 = state_31602;
var statearr_31608_31721 = state_31602__$1;
(statearr_31608_31721[(2)] = inst_31586);

(statearr_31608_31721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (6))){
var inst_31588 = (state_31602[(8)]);
var inst_31583 = (state_31602[(7)]);
var inst_31588__$1 = cljs.core.async.chan.call(null,(1));
var inst_31589 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31590 = [inst_31583,inst_31588__$1];
var inst_31591 = (new cljs.core.PersistentVector(null,2,(5),inst_31589,inst_31590,null));
var state_31602__$1 = (function (){var statearr_31609 = state_31602;
(statearr_31609[(8)] = inst_31588__$1);

return statearr_31609;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31602__$1,(8),jobs,inst_31591);
} else {
if((state_val_31603 === (7))){
var inst_31598 = (state_31602[(2)]);
var state_31602__$1 = state_31602;
var statearr_31610_31722 = state_31602__$1;
(statearr_31610_31722[(2)] = inst_31598);

(statearr_31610_31722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (8))){
var inst_31588 = (state_31602[(8)]);
var inst_31593 = (state_31602[(2)]);
var state_31602__$1 = (function (){var statearr_31611 = state_31602;
(statearr_31611[(9)] = inst_31593);

return statearr_31611;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31602__$1,(9),results,inst_31588);
} else {
if((state_val_31603 === (9))){
var inst_31595 = (state_31602[(2)]);
var state_31602__$1 = (function (){var statearr_31612 = state_31602;
(statearr_31612[(10)] = inst_31595);

return statearr_31612;
})();
var statearr_31613_31723 = state_31602__$1;
(statearr_31613_31723[(2)] = null);

(statearr_31613_31723[(1)] = (2));


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
});})(c__31119__auto___31717,jobs,results,process,async))
;
return ((function (switch__31005__auto__,c__31119__auto___31717,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____0 = (function (){
var statearr_31617 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31617[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__);

(statearr_31617[(1)] = (1));

return statearr_31617;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____1 = (function (state_31602){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_31602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e31618){if((e31618 instanceof Object)){
var ex__31009__auto__ = e31618;
var statearr_31619_31724 = state_31602;
(statearr_31619_31724[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31725 = state_31602;
state_31602 = G__31725;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__ = function(state_31602){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____1.call(this,state_31602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto___31717,jobs,results,process,async))
})();
var state__31121__auto__ = (function (){var statearr_31620 = f__31120__auto__.call(null);
(statearr_31620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto___31717);

return statearr_31620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto___31717,jobs,results,process,async))
);


var c__31119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto__,jobs,results,process,async){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto__,jobs,results,process,async){
return (function (state_31658){
var state_val_31659 = (state_31658[(1)]);
if((state_val_31659 === (7))){
var inst_31654 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
var statearr_31660_31726 = state_31658__$1;
(statearr_31660_31726[(2)] = inst_31654);

(statearr_31660_31726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (20))){
var state_31658__$1 = state_31658;
var statearr_31661_31727 = state_31658__$1;
(statearr_31661_31727[(2)] = null);

(statearr_31661_31727[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (1))){
var state_31658__$1 = state_31658;
var statearr_31662_31728 = state_31658__$1;
(statearr_31662_31728[(2)] = null);

(statearr_31662_31728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (4))){
var inst_31623 = (state_31658[(7)]);
var inst_31623__$1 = (state_31658[(2)]);
var inst_31624 = (inst_31623__$1 == null);
var state_31658__$1 = (function (){var statearr_31663 = state_31658;
(statearr_31663[(7)] = inst_31623__$1);

return statearr_31663;
})();
if(cljs.core.truth_(inst_31624)){
var statearr_31664_31729 = state_31658__$1;
(statearr_31664_31729[(1)] = (5));

} else {
var statearr_31665_31730 = state_31658__$1;
(statearr_31665_31730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (15))){
var inst_31636 = (state_31658[(8)]);
var state_31658__$1 = state_31658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31658__$1,(18),to,inst_31636);
} else {
if((state_val_31659 === (21))){
var inst_31649 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
var statearr_31666_31731 = state_31658__$1;
(statearr_31666_31731[(2)] = inst_31649);

(statearr_31666_31731[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (13))){
var inst_31651 = (state_31658[(2)]);
var state_31658__$1 = (function (){var statearr_31667 = state_31658;
(statearr_31667[(9)] = inst_31651);

return statearr_31667;
})();
var statearr_31668_31732 = state_31658__$1;
(statearr_31668_31732[(2)] = null);

(statearr_31668_31732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (6))){
var inst_31623 = (state_31658[(7)]);
var state_31658__$1 = state_31658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31658__$1,(11),inst_31623);
} else {
if((state_val_31659 === (17))){
var inst_31644 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
if(cljs.core.truth_(inst_31644)){
var statearr_31669_31733 = state_31658__$1;
(statearr_31669_31733[(1)] = (19));

} else {
var statearr_31670_31734 = state_31658__$1;
(statearr_31670_31734[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (3))){
var inst_31656 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31658__$1,inst_31656);
} else {
if((state_val_31659 === (12))){
var inst_31633 = (state_31658[(10)]);
var state_31658__$1 = state_31658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31658__$1,(14),inst_31633);
} else {
if((state_val_31659 === (2))){
var state_31658__$1 = state_31658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31658__$1,(4),results);
} else {
if((state_val_31659 === (19))){
var state_31658__$1 = state_31658;
var statearr_31671_31735 = state_31658__$1;
(statearr_31671_31735[(2)] = null);

(statearr_31671_31735[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (11))){
var inst_31633 = (state_31658[(2)]);
var state_31658__$1 = (function (){var statearr_31672 = state_31658;
(statearr_31672[(10)] = inst_31633);

return statearr_31672;
})();
var statearr_31673_31736 = state_31658__$1;
(statearr_31673_31736[(2)] = null);

(statearr_31673_31736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (9))){
var state_31658__$1 = state_31658;
var statearr_31674_31737 = state_31658__$1;
(statearr_31674_31737[(2)] = null);

(statearr_31674_31737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (5))){
var state_31658__$1 = state_31658;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31675_31738 = state_31658__$1;
(statearr_31675_31738[(1)] = (8));

} else {
var statearr_31676_31739 = state_31658__$1;
(statearr_31676_31739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (14))){
var inst_31636 = (state_31658[(8)]);
var inst_31638 = (state_31658[(11)]);
var inst_31636__$1 = (state_31658[(2)]);
var inst_31637 = (inst_31636__$1 == null);
var inst_31638__$1 = cljs.core.not.call(null,inst_31637);
var state_31658__$1 = (function (){var statearr_31677 = state_31658;
(statearr_31677[(8)] = inst_31636__$1);

(statearr_31677[(11)] = inst_31638__$1);

return statearr_31677;
})();
if(inst_31638__$1){
var statearr_31678_31740 = state_31658__$1;
(statearr_31678_31740[(1)] = (15));

} else {
var statearr_31679_31741 = state_31658__$1;
(statearr_31679_31741[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (16))){
var inst_31638 = (state_31658[(11)]);
var state_31658__$1 = state_31658;
var statearr_31680_31742 = state_31658__$1;
(statearr_31680_31742[(2)] = inst_31638);

(statearr_31680_31742[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (10))){
var inst_31630 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
var statearr_31681_31743 = state_31658__$1;
(statearr_31681_31743[(2)] = inst_31630);

(statearr_31681_31743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (18))){
var inst_31641 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
var statearr_31682_31744 = state_31658__$1;
(statearr_31682_31744[(2)] = inst_31641);

(statearr_31682_31744[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (8))){
var inst_31627 = cljs.core.async.close_BANG_.call(null,to);
var state_31658__$1 = state_31658;
var statearr_31683_31745 = state_31658__$1;
(statearr_31683_31745[(2)] = inst_31627);

(statearr_31683_31745[(1)] = (10));


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
});})(c__31119__auto__,jobs,results,process,async))
;
return ((function (switch__31005__auto__,c__31119__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____0 = (function (){
var statearr_31687 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31687[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__);

(statearr_31687[(1)] = (1));

return statearr_31687;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____1 = (function (state_31658){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_31658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e31688){if((e31688 instanceof Object)){
var ex__31009__auto__ = e31688;
var statearr_31689_31746 = state_31658;
(statearr_31689_31746[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31747 = state_31658;
state_31658 = G__31747;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__ = function(state_31658){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____1.call(this,state_31658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31006__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto__,jobs,results,process,async))
})();
var state__31121__auto__ = (function (){var statearr_31690 = f__31120__auto__.call(null);
(statearr_31690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto__);

return statearr_31690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto__,jobs,results,process,async))
);

return c__31119__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args31748 = [];
var len__27904__auto___31751 = arguments.length;
var i__27905__auto___31752 = (0);
while(true){
if((i__27905__auto___31752 < len__27904__auto___31751)){
args31748.push((arguments[i__27905__auto___31752]));

var G__31753 = (i__27905__auto___31752 + (1));
i__27905__auto___31752 = G__31753;
continue;
} else {
}
break;
}

var G__31750 = args31748.length;
switch (G__31750) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31748.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args31755 = [];
var len__27904__auto___31758 = arguments.length;
var i__27905__auto___31759 = (0);
while(true){
if((i__27905__auto___31759 < len__27904__auto___31758)){
args31755.push((arguments[i__27905__auto___31759]));

var G__31760 = (i__27905__auto___31759 + (1));
i__27905__auto___31759 = G__31760;
continue;
} else {
}
break;
}

var G__31757 = args31755.length;
switch (G__31757) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31755.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args31762 = [];
var len__27904__auto___31815 = arguments.length;
var i__27905__auto___31816 = (0);
while(true){
if((i__27905__auto___31816 < len__27904__auto___31815)){
args31762.push((arguments[i__27905__auto___31816]));

var G__31817 = (i__27905__auto___31816 + (1));
i__27905__auto___31816 = G__31817;
continue;
} else {
}
break;
}

var G__31764 = args31762.length;
switch (G__31764) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31762.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31119__auto___31819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto___31819,tc,fc){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto___31819,tc,fc){
return (function (state_31790){
var state_val_31791 = (state_31790[(1)]);
if((state_val_31791 === (7))){
var inst_31786 = (state_31790[(2)]);
var state_31790__$1 = state_31790;
var statearr_31792_31820 = state_31790__$1;
(statearr_31792_31820[(2)] = inst_31786);

(statearr_31792_31820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (1))){
var state_31790__$1 = state_31790;
var statearr_31793_31821 = state_31790__$1;
(statearr_31793_31821[(2)] = null);

(statearr_31793_31821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (4))){
var inst_31767 = (state_31790[(7)]);
var inst_31767__$1 = (state_31790[(2)]);
var inst_31768 = (inst_31767__$1 == null);
var state_31790__$1 = (function (){var statearr_31794 = state_31790;
(statearr_31794[(7)] = inst_31767__$1);

return statearr_31794;
})();
if(cljs.core.truth_(inst_31768)){
var statearr_31795_31822 = state_31790__$1;
(statearr_31795_31822[(1)] = (5));

} else {
var statearr_31796_31823 = state_31790__$1;
(statearr_31796_31823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (13))){
var state_31790__$1 = state_31790;
var statearr_31797_31824 = state_31790__$1;
(statearr_31797_31824[(2)] = null);

(statearr_31797_31824[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (6))){
var inst_31767 = (state_31790[(7)]);
var inst_31773 = p.call(null,inst_31767);
var state_31790__$1 = state_31790;
if(cljs.core.truth_(inst_31773)){
var statearr_31798_31825 = state_31790__$1;
(statearr_31798_31825[(1)] = (9));

} else {
var statearr_31799_31826 = state_31790__$1;
(statearr_31799_31826[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (3))){
var inst_31788 = (state_31790[(2)]);
var state_31790__$1 = state_31790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31790__$1,inst_31788);
} else {
if((state_val_31791 === (12))){
var state_31790__$1 = state_31790;
var statearr_31800_31827 = state_31790__$1;
(statearr_31800_31827[(2)] = null);

(statearr_31800_31827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (2))){
var state_31790__$1 = state_31790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31790__$1,(4),ch);
} else {
if((state_val_31791 === (11))){
var inst_31767 = (state_31790[(7)]);
var inst_31777 = (state_31790[(2)]);
var state_31790__$1 = state_31790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31790__$1,(8),inst_31777,inst_31767);
} else {
if((state_val_31791 === (9))){
var state_31790__$1 = state_31790;
var statearr_31801_31828 = state_31790__$1;
(statearr_31801_31828[(2)] = tc);

(statearr_31801_31828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (5))){
var inst_31770 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31771 = cljs.core.async.close_BANG_.call(null,fc);
var state_31790__$1 = (function (){var statearr_31802 = state_31790;
(statearr_31802[(8)] = inst_31770);

return statearr_31802;
})();
var statearr_31803_31829 = state_31790__$1;
(statearr_31803_31829[(2)] = inst_31771);

(statearr_31803_31829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (14))){
var inst_31784 = (state_31790[(2)]);
var state_31790__$1 = state_31790;
var statearr_31804_31830 = state_31790__$1;
(statearr_31804_31830[(2)] = inst_31784);

(statearr_31804_31830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (10))){
var state_31790__$1 = state_31790;
var statearr_31805_31831 = state_31790__$1;
(statearr_31805_31831[(2)] = fc);

(statearr_31805_31831[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (8))){
var inst_31779 = (state_31790[(2)]);
var state_31790__$1 = state_31790;
if(cljs.core.truth_(inst_31779)){
var statearr_31806_31832 = state_31790__$1;
(statearr_31806_31832[(1)] = (12));

} else {
var statearr_31807_31833 = state_31790__$1;
(statearr_31807_31833[(1)] = (13));

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
});})(c__31119__auto___31819,tc,fc))
;
return ((function (switch__31005__auto__,c__31119__auto___31819,tc,fc){
return (function() {
var cljs$core$async$state_machine__31006__auto__ = null;
var cljs$core$async$state_machine__31006__auto____0 = (function (){
var statearr_31811 = [null,null,null,null,null,null,null,null,null];
(statearr_31811[(0)] = cljs$core$async$state_machine__31006__auto__);

(statearr_31811[(1)] = (1));

return statearr_31811;
});
var cljs$core$async$state_machine__31006__auto____1 = (function (state_31790){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_31790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e31812){if((e31812 instanceof Object)){
var ex__31009__auto__ = e31812;
var statearr_31813_31834 = state_31790;
(statearr_31813_31834[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31835 = state_31790;
state_31790 = G__31835;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
cljs$core$async$state_machine__31006__auto__ = function(state_31790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31006__auto____1.call(this,state_31790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31006__auto____0;
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31006__auto____1;
return cljs$core$async$state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto___31819,tc,fc))
})();
var state__31121__auto__ = (function (){var statearr_31814 = f__31120__auto__.call(null);
(statearr_31814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto___31819);

return statearr_31814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto___31819,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto__){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto__){
return (function (state_31899){
var state_val_31900 = (state_31899[(1)]);
if((state_val_31900 === (7))){
var inst_31895 = (state_31899[(2)]);
var state_31899__$1 = state_31899;
var statearr_31901_31922 = state_31899__$1;
(statearr_31901_31922[(2)] = inst_31895);

(statearr_31901_31922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (1))){
var inst_31879 = init;
var state_31899__$1 = (function (){var statearr_31902 = state_31899;
(statearr_31902[(7)] = inst_31879);

return statearr_31902;
})();
var statearr_31903_31923 = state_31899__$1;
(statearr_31903_31923[(2)] = null);

(statearr_31903_31923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (4))){
var inst_31882 = (state_31899[(8)]);
var inst_31882__$1 = (state_31899[(2)]);
var inst_31883 = (inst_31882__$1 == null);
var state_31899__$1 = (function (){var statearr_31904 = state_31899;
(statearr_31904[(8)] = inst_31882__$1);

return statearr_31904;
})();
if(cljs.core.truth_(inst_31883)){
var statearr_31905_31924 = state_31899__$1;
(statearr_31905_31924[(1)] = (5));

} else {
var statearr_31906_31925 = state_31899__$1;
(statearr_31906_31925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (6))){
var inst_31886 = (state_31899[(9)]);
var inst_31879 = (state_31899[(7)]);
var inst_31882 = (state_31899[(8)]);
var inst_31886__$1 = f.call(null,inst_31879,inst_31882);
var inst_31887 = cljs.core.reduced_QMARK_.call(null,inst_31886__$1);
var state_31899__$1 = (function (){var statearr_31907 = state_31899;
(statearr_31907[(9)] = inst_31886__$1);

return statearr_31907;
})();
if(inst_31887){
var statearr_31908_31926 = state_31899__$1;
(statearr_31908_31926[(1)] = (8));

} else {
var statearr_31909_31927 = state_31899__$1;
(statearr_31909_31927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (3))){
var inst_31897 = (state_31899[(2)]);
var state_31899__$1 = state_31899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31899__$1,inst_31897);
} else {
if((state_val_31900 === (2))){
var state_31899__$1 = state_31899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31899__$1,(4),ch);
} else {
if((state_val_31900 === (9))){
var inst_31886 = (state_31899[(9)]);
var inst_31879 = inst_31886;
var state_31899__$1 = (function (){var statearr_31910 = state_31899;
(statearr_31910[(7)] = inst_31879);

return statearr_31910;
})();
var statearr_31911_31928 = state_31899__$1;
(statearr_31911_31928[(2)] = null);

(statearr_31911_31928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (5))){
var inst_31879 = (state_31899[(7)]);
var state_31899__$1 = state_31899;
var statearr_31912_31929 = state_31899__$1;
(statearr_31912_31929[(2)] = inst_31879);

(statearr_31912_31929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (10))){
var inst_31893 = (state_31899[(2)]);
var state_31899__$1 = state_31899;
var statearr_31913_31930 = state_31899__$1;
(statearr_31913_31930[(2)] = inst_31893);

(statearr_31913_31930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (8))){
var inst_31886 = (state_31899[(9)]);
var inst_31889 = cljs.core.deref.call(null,inst_31886);
var state_31899__$1 = state_31899;
var statearr_31914_31931 = state_31899__$1;
(statearr_31914_31931[(2)] = inst_31889);

(statearr_31914_31931[(1)] = (10));


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
});})(c__31119__auto__))
;
return ((function (switch__31005__auto__,c__31119__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31006__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31006__auto____0 = (function (){
var statearr_31918 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31918[(0)] = cljs$core$async$reduce_$_state_machine__31006__auto__);

(statearr_31918[(1)] = (1));

return statearr_31918;
});
var cljs$core$async$reduce_$_state_machine__31006__auto____1 = (function (state_31899){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_31899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e31919){if((e31919 instanceof Object)){
var ex__31009__auto__ = e31919;
var statearr_31920_31932 = state_31899;
(statearr_31920_31932[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31933 = state_31899;
state_31899 = G__31933;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31006__auto__ = function(state_31899){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31006__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31006__auto____1.call(this,state_31899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31006__auto____0;
cljs$core$async$reduce_$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31006__auto____1;
return cljs$core$async$reduce_$_state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto__))
})();
var state__31121__auto__ = (function (){var statearr_31921 = f__31120__auto__.call(null);
(statearr_31921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto__);

return statearr_31921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto__))
);

return c__31119__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args31934 = [];
var len__27904__auto___31986 = arguments.length;
var i__27905__auto___31987 = (0);
while(true){
if((i__27905__auto___31987 < len__27904__auto___31986)){
args31934.push((arguments[i__27905__auto___31987]));

var G__31988 = (i__27905__auto___31987 + (1));
i__27905__auto___31987 = G__31988;
continue;
} else {
}
break;
}

var G__31936 = args31934.length;
switch (G__31936) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31934.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto__){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto__){
return (function (state_31961){
var state_val_31962 = (state_31961[(1)]);
if((state_val_31962 === (7))){
var inst_31943 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
var statearr_31963_31990 = state_31961__$1;
(statearr_31963_31990[(2)] = inst_31943);

(statearr_31963_31990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (1))){
var inst_31937 = cljs.core.seq.call(null,coll);
var inst_31938 = inst_31937;
var state_31961__$1 = (function (){var statearr_31964 = state_31961;
(statearr_31964[(7)] = inst_31938);

return statearr_31964;
})();
var statearr_31965_31991 = state_31961__$1;
(statearr_31965_31991[(2)] = null);

(statearr_31965_31991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (4))){
var inst_31938 = (state_31961[(7)]);
var inst_31941 = cljs.core.first.call(null,inst_31938);
var state_31961__$1 = state_31961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31961__$1,(7),ch,inst_31941);
} else {
if((state_val_31962 === (13))){
var inst_31955 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
var statearr_31966_31992 = state_31961__$1;
(statearr_31966_31992[(2)] = inst_31955);

(statearr_31966_31992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (6))){
var inst_31946 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
if(cljs.core.truth_(inst_31946)){
var statearr_31967_31993 = state_31961__$1;
(statearr_31967_31993[(1)] = (8));

} else {
var statearr_31968_31994 = state_31961__$1;
(statearr_31968_31994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (3))){
var inst_31959 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31961__$1,inst_31959);
} else {
if((state_val_31962 === (12))){
var state_31961__$1 = state_31961;
var statearr_31969_31995 = state_31961__$1;
(statearr_31969_31995[(2)] = null);

(statearr_31969_31995[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (2))){
var inst_31938 = (state_31961[(7)]);
var state_31961__$1 = state_31961;
if(cljs.core.truth_(inst_31938)){
var statearr_31970_31996 = state_31961__$1;
(statearr_31970_31996[(1)] = (4));

} else {
var statearr_31971_31997 = state_31961__$1;
(statearr_31971_31997[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (11))){
var inst_31952 = cljs.core.async.close_BANG_.call(null,ch);
var state_31961__$1 = state_31961;
var statearr_31972_31998 = state_31961__$1;
(statearr_31972_31998[(2)] = inst_31952);

(statearr_31972_31998[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (9))){
var state_31961__$1 = state_31961;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31973_31999 = state_31961__$1;
(statearr_31973_31999[(1)] = (11));

} else {
var statearr_31974_32000 = state_31961__$1;
(statearr_31974_32000[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (5))){
var inst_31938 = (state_31961[(7)]);
var state_31961__$1 = state_31961;
var statearr_31975_32001 = state_31961__$1;
(statearr_31975_32001[(2)] = inst_31938);

(statearr_31975_32001[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (10))){
var inst_31957 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
var statearr_31976_32002 = state_31961__$1;
(statearr_31976_32002[(2)] = inst_31957);

(statearr_31976_32002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (8))){
var inst_31938 = (state_31961[(7)]);
var inst_31948 = cljs.core.next.call(null,inst_31938);
var inst_31938__$1 = inst_31948;
var state_31961__$1 = (function (){var statearr_31977 = state_31961;
(statearr_31977[(7)] = inst_31938__$1);

return statearr_31977;
})();
var statearr_31978_32003 = state_31961__$1;
(statearr_31978_32003[(2)] = null);

(statearr_31978_32003[(1)] = (2));


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
});})(c__31119__auto__))
;
return ((function (switch__31005__auto__,c__31119__auto__){
return (function() {
var cljs$core$async$state_machine__31006__auto__ = null;
var cljs$core$async$state_machine__31006__auto____0 = (function (){
var statearr_31982 = [null,null,null,null,null,null,null,null];
(statearr_31982[(0)] = cljs$core$async$state_machine__31006__auto__);

(statearr_31982[(1)] = (1));

return statearr_31982;
});
var cljs$core$async$state_machine__31006__auto____1 = (function (state_31961){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_31961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e31983){if((e31983 instanceof Object)){
var ex__31009__auto__ = e31983;
var statearr_31984_32004 = state_31961;
(statearr_31984_32004[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32005 = state_31961;
state_31961 = G__32005;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
cljs$core$async$state_machine__31006__auto__ = function(state_31961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31006__auto____1.call(this,state_31961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31006__auto____0;
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31006__auto____1;
return cljs$core$async$state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto__))
})();
var state__31121__auto__ = (function (){var statearr_31985 = f__31120__auto__.call(null);
(statearr_31985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto__);

return statearr_31985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto__))
);

return c__31119__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27401__auto__ = (((_ == null))?null:_);
var m__27402__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27401__auto__)]);
if(!((m__27402__auto__ == null))){
return m__27402__auto__.call(null,_);
} else {
var m__27402__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27402__auto____$1 == null))){
return m__27402__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27401__auto__ = (((m == null))?null:m);
var m__27402__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27401__auto__)]);
if(!((m__27402__auto__ == null))){
return m__27402__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27402__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27402__auto____$1 == null))){
return m__27402__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27401__auto__ = (((m == null))?null:m);
var m__27402__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27401__auto__)]);
if(!((m__27402__auto__ == null))){
return m__27402__auto__.call(null,m,ch);
} else {
var m__27402__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27402__auto____$1 == null))){
return m__27402__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27401__auto__ = (((m == null))?null:m);
var m__27402__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27401__auto__)]);
if(!((m__27402__auto__ == null))){
return m__27402__auto__.call(null,m);
} else {
var m__27402__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27402__auto____$1 == null))){
return m__27402__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32231 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32231 = (function (ch,cs,meta32232){
this.ch = ch;
this.cs = cs;
this.meta32232 = meta32232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32233,meta32232__$1){
var self__ = this;
var _32233__$1 = this;
return (new cljs.core.async.t_cljs$core$async32231(self__.ch,self__.cs,meta32232__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32231.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32233){
var self__ = this;
var _32233__$1 = this;
return self__.meta32232;
});})(cs))
;

cljs.core.async.t_cljs$core$async32231.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32231.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32231.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32231.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32231.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32231.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32231.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32232","meta32232",-1938997632,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32231.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32231";

cljs.core.async.t_cljs$core$async32231.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27340__auto__,writer__27341__auto__,opt__27342__auto__){
return cljs.core._write.call(null,writer__27341__auto__,"cljs.core.async/t_cljs$core$async32231");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32231 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32231(ch__$1,cs__$1,meta32232){
return (new cljs.core.async.t_cljs$core$async32231(ch__$1,cs__$1,meta32232));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32231(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31119__auto___32456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto___32456,cs,m,dchan,dctr,done){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto___32456,cs,m,dchan,dctr,done){
return (function (state_32368){
var state_val_32369 = (state_32368[(1)]);
if((state_val_32369 === (7))){
var inst_32364 = (state_32368[(2)]);
var state_32368__$1 = state_32368;
var statearr_32370_32457 = state_32368__$1;
(statearr_32370_32457[(2)] = inst_32364);

(statearr_32370_32457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (20))){
var inst_32267 = (state_32368[(7)]);
var inst_32279 = cljs.core.first.call(null,inst_32267);
var inst_32280 = cljs.core.nth.call(null,inst_32279,(0),null);
var inst_32281 = cljs.core.nth.call(null,inst_32279,(1),null);
var state_32368__$1 = (function (){var statearr_32371 = state_32368;
(statearr_32371[(8)] = inst_32280);

return statearr_32371;
})();
if(cljs.core.truth_(inst_32281)){
var statearr_32372_32458 = state_32368__$1;
(statearr_32372_32458[(1)] = (22));

} else {
var statearr_32373_32459 = state_32368__$1;
(statearr_32373_32459[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (27))){
var inst_32309 = (state_32368[(9)]);
var inst_32311 = (state_32368[(10)]);
var inst_32236 = (state_32368[(11)]);
var inst_32316 = (state_32368[(12)]);
var inst_32316__$1 = cljs.core._nth.call(null,inst_32309,inst_32311);
var inst_32317 = cljs.core.async.put_BANG_.call(null,inst_32316__$1,inst_32236,done);
var state_32368__$1 = (function (){var statearr_32374 = state_32368;
(statearr_32374[(12)] = inst_32316__$1);

return statearr_32374;
})();
if(cljs.core.truth_(inst_32317)){
var statearr_32375_32460 = state_32368__$1;
(statearr_32375_32460[(1)] = (30));

} else {
var statearr_32376_32461 = state_32368__$1;
(statearr_32376_32461[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (1))){
var state_32368__$1 = state_32368;
var statearr_32377_32462 = state_32368__$1;
(statearr_32377_32462[(2)] = null);

(statearr_32377_32462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (24))){
var inst_32267 = (state_32368[(7)]);
var inst_32286 = (state_32368[(2)]);
var inst_32287 = cljs.core.next.call(null,inst_32267);
var inst_32245 = inst_32287;
var inst_32246 = null;
var inst_32247 = (0);
var inst_32248 = (0);
var state_32368__$1 = (function (){var statearr_32378 = state_32368;
(statearr_32378[(13)] = inst_32248);

(statearr_32378[(14)] = inst_32286);

(statearr_32378[(15)] = inst_32247);

(statearr_32378[(16)] = inst_32246);

(statearr_32378[(17)] = inst_32245);

return statearr_32378;
})();
var statearr_32379_32463 = state_32368__$1;
(statearr_32379_32463[(2)] = null);

(statearr_32379_32463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (39))){
var state_32368__$1 = state_32368;
var statearr_32383_32464 = state_32368__$1;
(statearr_32383_32464[(2)] = null);

(statearr_32383_32464[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (4))){
var inst_32236 = (state_32368[(11)]);
var inst_32236__$1 = (state_32368[(2)]);
var inst_32237 = (inst_32236__$1 == null);
var state_32368__$1 = (function (){var statearr_32384 = state_32368;
(statearr_32384[(11)] = inst_32236__$1);

return statearr_32384;
})();
if(cljs.core.truth_(inst_32237)){
var statearr_32385_32465 = state_32368__$1;
(statearr_32385_32465[(1)] = (5));

} else {
var statearr_32386_32466 = state_32368__$1;
(statearr_32386_32466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (15))){
var inst_32248 = (state_32368[(13)]);
var inst_32247 = (state_32368[(15)]);
var inst_32246 = (state_32368[(16)]);
var inst_32245 = (state_32368[(17)]);
var inst_32263 = (state_32368[(2)]);
var inst_32264 = (inst_32248 + (1));
var tmp32380 = inst_32247;
var tmp32381 = inst_32246;
var tmp32382 = inst_32245;
var inst_32245__$1 = tmp32382;
var inst_32246__$1 = tmp32381;
var inst_32247__$1 = tmp32380;
var inst_32248__$1 = inst_32264;
var state_32368__$1 = (function (){var statearr_32387 = state_32368;
(statearr_32387[(13)] = inst_32248__$1);

(statearr_32387[(18)] = inst_32263);

(statearr_32387[(15)] = inst_32247__$1);

(statearr_32387[(16)] = inst_32246__$1);

(statearr_32387[(17)] = inst_32245__$1);

return statearr_32387;
})();
var statearr_32388_32467 = state_32368__$1;
(statearr_32388_32467[(2)] = null);

(statearr_32388_32467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (21))){
var inst_32290 = (state_32368[(2)]);
var state_32368__$1 = state_32368;
var statearr_32392_32468 = state_32368__$1;
(statearr_32392_32468[(2)] = inst_32290);

(statearr_32392_32468[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (31))){
var inst_32316 = (state_32368[(12)]);
var inst_32320 = done.call(null,null);
var inst_32321 = cljs.core.async.untap_STAR_.call(null,m,inst_32316);
var state_32368__$1 = (function (){var statearr_32393 = state_32368;
(statearr_32393[(19)] = inst_32320);

return statearr_32393;
})();
var statearr_32394_32469 = state_32368__$1;
(statearr_32394_32469[(2)] = inst_32321);

(statearr_32394_32469[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (32))){
var inst_32309 = (state_32368[(9)]);
var inst_32311 = (state_32368[(10)]);
var inst_32308 = (state_32368[(20)]);
var inst_32310 = (state_32368[(21)]);
var inst_32323 = (state_32368[(2)]);
var inst_32324 = (inst_32311 + (1));
var tmp32389 = inst_32309;
var tmp32390 = inst_32308;
var tmp32391 = inst_32310;
var inst_32308__$1 = tmp32390;
var inst_32309__$1 = tmp32389;
var inst_32310__$1 = tmp32391;
var inst_32311__$1 = inst_32324;
var state_32368__$1 = (function (){var statearr_32395 = state_32368;
(statearr_32395[(9)] = inst_32309__$1);

(statearr_32395[(10)] = inst_32311__$1);

(statearr_32395[(20)] = inst_32308__$1);

(statearr_32395[(21)] = inst_32310__$1);

(statearr_32395[(22)] = inst_32323);

return statearr_32395;
})();
var statearr_32396_32470 = state_32368__$1;
(statearr_32396_32470[(2)] = null);

(statearr_32396_32470[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (40))){
var inst_32336 = (state_32368[(23)]);
var inst_32340 = done.call(null,null);
var inst_32341 = cljs.core.async.untap_STAR_.call(null,m,inst_32336);
var state_32368__$1 = (function (){var statearr_32397 = state_32368;
(statearr_32397[(24)] = inst_32340);

return statearr_32397;
})();
var statearr_32398_32471 = state_32368__$1;
(statearr_32398_32471[(2)] = inst_32341);

(statearr_32398_32471[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (33))){
var inst_32327 = (state_32368[(25)]);
var inst_32329 = cljs.core.chunked_seq_QMARK_.call(null,inst_32327);
var state_32368__$1 = state_32368;
if(inst_32329){
var statearr_32399_32472 = state_32368__$1;
(statearr_32399_32472[(1)] = (36));

} else {
var statearr_32400_32473 = state_32368__$1;
(statearr_32400_32473[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (13))){
var inst_32257 = (state_32368[(26)]);
var inst_32260 = cljs.core.async.close_BANG_.call(null,inst_32257);
var state_32368__$1 = state_32368;
var statearr_32401_32474 = state_32368__$1;
(statearr_32401_32474[(2)] = inst_32260);

(statearr_32401_32474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (22))){
var inst_32280 = (state_32368[(8)]);
var inst_32283 = cljs.core.async.close_BANG_.call(null,inst_32280);
var state_32368__$1 = state_32368;
var statearr_32402_32475 = state_32368__$1;
(statearr_32402_32475[(2)] = inst_32283);

(statearr_32402_32475[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (36))){
var inst_32327 = (state_32368[(25)]);
var inst_32331 = cljs.core.chunk_first.call(null,inst_32327);
var inst_32332 = cljs.core.chunk_rest.call(null,inst_32327);
var inst_32333 = cljs.core.count.call(null,inst_32331);
var inst_32308 = inst_32332;
var inst_32309 = inst_32331;
var inst_32310 = inst_32333;
var inst_32311 = (0);
var state_32368__$1 = (function (){var statearr_32403 = state_32368;
(statearr_32403[(9)] = inst_32309);

(statearr_32403[(10)] = inst_32311);

(statearr_32403[(20)] = inst_32308);

(statearr_32403[(21)] = inst_32310);

return statearr_32403;
})();
var statearr_32404_32476 = state_32368__$1;
(statearr_32404_32476[(2)] = null);

(statearr_32404_32476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (41))){
var inst_32327 = (state_32368[(25)]);
var inst_32343 = (state_32368[(2)]);
var inst_32344 = cljs.core.next.call(null,inst_32327);
var inst_32308 = inst_32344;
var inst_32309 = null;
var inst_32310 = (0);
var inst_32311 = (0);
var state_32368__$1 = (function (){var statearr_32405 = state_32368;
(statearr_32405[(9)] = inst_32309);

(statearr_32405[(10)] = inst_32311);

(statearr_32405[(20)] = inst_32308);

(statearr_32405[(21)] = inst_32310);

(statearr_32405[(27)] = inst_32343);

return statearr_32405;
})();
var statearr_32406_32477 = state_32368__$1;
(statearr_32406_32477[(2)] = null);

(statearr_32406_32477[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (43))){
var state_32368__$1 = state_32368;
var statearr_32407_32478 = state_32368__$1;
(statearr_32407_32478[(2)] = null);

(statearr_32407_32478[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (29))){
var inst_32352 = (state_32368[(2)]);
var state_32368__$1 = state_32368;
var statearr_32408_32479 = state_32368__$1;
(statearr_32408_32479[(2)] = inst_32352);

(statearr_32408_32479[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (44))){
var inst_32361 = (state_32368[(2)]);
var state_32368__$1 = (function (){var statearr_32409 = state_32368;
(statearr_32409[(28)] = inst_32361);

return statearr_32409;
})();
var statearr_32410_32480 = state_32368__$1;
(statearr_32410_32480[(2)] = null);

(statearr_32410_32480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (6))){
var inst_32300 = (state_32368[(29)]);
var inst_32299 = cljs.core.deref.call(null,cs);
var inst_32300__$1 = cljs.core.keys.call(null,inst_32299);
var inst_32301 = cljs.core.count.call(null,inst_32300__$1);
var inst_32302 = cljs.core.reset_BANG_.call(null,dctr,inst_32301);
var inst_32307 = cljs.core.seq.call(null,inst_32300__$1);
var inst_32308 = inst_32307;
var inst_32309 = null;
var inst_32310 = (0);
var inst_32311 = (0);
var state_32368__$1 = (function (){var statearr_32411 = state_32368;
(statearr_32411[(9)] = inst_32309);

(statearr_32411[(29)] = inst_32300__$1);

(statearr_32411[(10)] = inst_32311);

(statearr_32411[(20)] = inst_32308);

(statearr_32411[(21)] = inst_32310);

(statearr_32411[(30)] = inst_32302);

return statearr_32411;
})();
var statearr_32412_32481 = state_32368__$1;
(statearr_32412_32481[(2)] = null);

(statearr_32412_32481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (28))){
var inst_32308 = (state_32368[(20)]);
var inst_32327 = (state_32368[(25)]);
var inst_32327__$1 = cljs.core.seq.call(null,inst_32308);
var state_32368__$1 = (function (){var statearr_32413 = state_32368;
(statearr_32413[(25)] = inst_32327__$1);

return statearr_32413;
})();
if(inst_32327__$1){
var statearr_32414_32482 = state_32368__$1;
(statearr_32414_32482[(1)] = (33));

} else {
var statearr_32415_32483 = state_32368__$1;
(statearr_32415_32483[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (25))){
var inst_32311 = (state_32368[(10)]);
var inst_32310 = (state_32368[(21)]);
var inst_32313 = (inst_32311 < inst_32310);
var inst_32314 = inst_32313;
var state_32368__$1 = state_32368;
if(cljs.core.truth_(inst_32314)){
var statearr_32416_32484 = state_32368__$1;
(statearr_32416_32484[(1)] = (27));

} else {
var statearr_32417_32485 = state_32368__$1;
(statearr_32417_32485[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (34))){
var state_32368__$1 = state_32368;
var statearr_32418_32486 = state_32368__$1;
(statearr_32418_32486[(2)] = null);

(statearr_32418_32486[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (17))){
var state_32368__$1 = state_32368;
var statearr_32419_32487 = state_32368__$1;
(statearr_32419_32487[(2)] = null);

(statearr_32419_32487[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (3))){
var inst_32366 = (state_32368[(2)]);
var state_32368__$1 = state_32368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32368__$1,inst_32366);
} else {
if((state_val_32369 === (12))){
var inst_32295 = (state_32368[(2)]);
var state_32368__$1 = state_32368;
var statearr_32420_32488 = state_32368__$1;
(statearr_32420_32488[(2)] = inst_32295);

(statearr_32420_32488[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (2))){
var state_32368__$1 = state_32368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32368__$1,(4),ch);
} else {
if((state_val_32369 === (23))){
var state_32368__$1 = state_32368;
var statearr_32421_32489 = state_32368__$1;
(statearr_32421_32489[(2)] = null);

(statearr_32421_32489[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (35))){
var inst_32350 = (state_32368[(2)]);
var state_32368__$1 = state_32368;
var statearr_32422_32490 = state_32368__$1;
(statearr_32422_32490[(2)] = inst_32350);

(statearr_32422_32490[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (19))){
var inst_32267 = (state_32368[(7)]);
var inst_32271 = cljs.core.chunk_first.call(null,inst_32267);
var inst_32272 = cljs.core.chunk_rest.call(null,inst_32267);
var inst_32273 = cljs.core.count.call(null,inst_32271);
var inst_32245 = inst_32272;
var inst_32246 = inst_32271;
var inst_32247 = inst_32273;
var inst_32248 = (0);
var state_32368__$1 = (function (){var statearr_32423 = state_32368;
(statearr_32423[(13)] = inst_32248);

(statearr_32423[(15)] = inst_32247);

(statearr_32423[(16)] = inst_32246);

(statearr_32423[(17)] = inst_32245);

return statearr_32423;
})();
var statearr_32424_32491 = state_32368__$1;
(statearr_32424_32491[(2)] = null);

(statearr_32424_32491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (11))){
var inst_32267 = (state_32368[(7)]);
var inst_32245 = (state_32368[(17)]);
var inst_32267__$1 = cljs.core.seq.call(null,inst_32245);
var state_32368__$1 = (function (){var statearr_32425 = state_32368;
(statearr_32425[(7)] = inst_32267__$1);

return statearr_32425;
})();
if(inst_32267__$1){
var statearr_32426_32492 = state_32368__$1;
(statearr_32426_32492[(1)] = (16));

} else {
var statearr_32427_32493 = state_32368__$1;
(statearr_32427_32493[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (9))){
var inst_32297 = (state_32368[(2)]);
var state_32368__$1 = state_32368;
var statearr_32428_32494 = state_32368__$1;
(statearr_32428_32494[(2)] = inst_32297);

(statearr_32428_32494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (5))){
var inst_32243 = cljs.core.deref.call(null,cs);
var inst_32244 = cljs.core.seq.call(null,inst_32243);
var inst_32245 = inst_32244;
var inst_32246 = null;
var inst_32247 = (0);
var inst_32248 = (0);
var state_32368__$1 = (function (){var statearr_32429 = state_32368;
(statearr_32429[(13)] = inst_32248);

(statearr_32429[(15)] = inst_32247);

(statearr_32429[(16)] = inst_32246);

(statearr_32429[(17)] = inst_32245);

return statearr_32429;
})();
var statearr_32430_32495 = state_32368__$1;
(statearr_32430_32495[(2)] = null);

(statearr_32430_32495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (14))){
var state_32368__$1 = state_32368;
var statearr_32431_32496 = state_32368__$1;
(statearr_32431_32496[(2)] = null);

(statearr_32431_32496[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (45))){
var inst_32358 = (state_32368[(2)]);
var state_32368__$1 = state_32368;
var statearr_32432_32497 = state_32368__$1;
(statearr_32432_32497[(2)] = inst_32358);

(statearr_32432_32497[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (26))){
var inst_32300 = (state_32368[(29)]);
var inst_32354 = (state_32368[(2)]);
var inst_32355 = cljs.core.seq.call(null,inst_32300);
var state_32368__$1 = (function (){var statearr_32433 = state_32368;
(statearr_32433[(31)] = inst_32354);

return statearr_32433;
})();
if(inst_32355){
var statearr_32434_32498 = state_32368__$1;
(statearr_32434_32498[(1)] = (42));

} else {
var statearr_32435_32499 = state_32368__$1;
(statearr_32435_32499[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (16))){
var inst_32267 = (state_32368[(7)]);
var inst_32269 = cljs.core.chunked_seq_QMARK_.call(null,inst_32267);
var state_32368__$1 = state_32368;
if(inst_32269){
var statearr_32436_32500 = state_32368__$1;
(statearr_32436_32500[(1)] = (19));

} else {
var statearr_32437_32501 = state_32368__$1;
(statearr_32437_32501[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (38))){
var inst_32347 = (state_32368[(2)]);
var state_32368__$1 = state_32368;
var statearr_32438_32502 = state_32368__$1;
(statearr_32438_32502[(2)] = inst_32347);

(statearr_32438_32502[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (30))){
var state_32368__$1 = state_32368;
var statearr_32439_32503 = state_32368__$1;
(statearr_32439_32503[(2)] = null);

(statearr_32439_32503[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (10))){
var inst_32248 = (state_32368[(13)]);
var inst_32246 = (state_32368[(16)]);
var inst_32256 = cljs.core._nth.call(null,inst_32246,inst_32248);
var inst_32257 = cljs.core.nth.call(null,inst_32256,(0),null);
var inst_32258 = cljs.core.nth.call(null,inst_32256,(1),null);
var state_32368__$1 = (function (){var statearr_32440 = state_32368;
(statearr_32440[(26)] = inst_32257);

return statearr_32440;
})();
if(cljs.core.truth_(inst_32258)){
var statearr_32441_32504 = state_32368__$1;
(statearr_32441_32504[(1)] = (13));

} else {
var statearr_32442_32505 = state_32368__$1;
(statearr_32442_32505[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (18))){
var inst_32293 = (state_32368[(2)]);
var state_32368__$1 = state_32368;
var statearr_32443_32506 = state_32368__$1;
(statearr_32443_32506[(2)] = inst_32293);

(statearr_32443_32506[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (42))){
var state_32368__$1 = state_32368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32368__$1,(45),dchan);
} else {
if((state_val_32369 === (37))){
var inst_32236 = (state_32368[(11)]);
var inst_32327 = (state_32368[(25)]);
var inst_32336 = (state_32368[(23)]);
var inst_32336__$1 = cljs.core.first.call(null,inst_32327);
var inst_32337 = cljs.core.async.put_BANG_.call(null,inst_32336__$1,inst_32236,done);
var state_32368__$1 = (function (){var statearr_32444 = state_32368;
(statearr_32444[(23)] = inst_32336__$1);

return statearr_32444;
})();
if(cljs.core.truth_(inst_32337)){
var statearr_32445_32507 = state_32368__$1;
(statearr_32445_32507[(1)] = (39));

} else {
var statearr_32446_32508 = state_32368__$1;
(statearr_32446_32508[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (8))){
var inst_32248 = (state_32368[(13)]);
var inst_32247 = (state_32368[(15)]);
var inst_32250 = (inst_32248 < inst_32247);
var inst_32251 = inst_32250;
var state_32368__$1 = state_32368;
if(cljs.core.truth_(inst_32251)){
var statearr_32447_32509 = state_32368__$1;
(statearr_32447_32509[(1)] = (10));

} else {
var statearr_32448_32510 = state_32368__$1;
(statearr_32448_32510[(1)] = (11));

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
});})(c__31119__auto___32456,cs,m,dchan,dctr,done))
;
return ((function (switch__31005__auto__,c__31119__auto___32456,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31006__auto__ = null;
var cljs$core$async$mult_$_state_machine__31006__auto____0 = (function (){
var statearr_32452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32452[(0)] = cljs$core$async$mult_$_state_machine__31006__auto__);

(statearr_32452[(1)] = (1));

return statearr_32452;
});
var cljs$core$async$mult_$_state_machine__31006__auto____1 = (function (state_32368){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_32368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e32453){if((e32453 instanceof Object)){
var ex__31009__auto__ = e32453;
var statearr_32454_32511 = state_32368;
(statearr_32454_32511[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32512 = state_32368;
state_32368 = G__32512;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31006__auto__ = function(state_32368){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31006__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31006__auto____1.call(this,state_32368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31006__auto____0;
cljs$core$async$mult_$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31006__auto____1;
return cljs$core$async$mult_$_state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto___32456,cs,m,dchan,dctr,done))
})();
var state__31121__auto__ = (function (){var statearr_32455 = f__31120__auto__.call(null);
(statearr_32455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto___32456);

return statearr_32455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto___32456,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args32513 = [];
var len__27904__auto___32516 = arguments.length;
var i__27905__auto___32517 = (0);
while(true){
if((i__27905__auto___32517 < len__27904__auto___32516)){
args32513.push((arguments[i__27905__auto___32517]));

var G__32518 = (i__27905__auto___32517 + (1));
i__27905__auto___32517 = G__32518;
continue;
} else {
}
break;
}

var G__32515 = args32513.length;
switch (G__32515) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32513.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27401__auto__ = (((m == null))?null:m);
var m__27402__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27401__auto__)]);
if(!((m__27402__auto__ == null))){
return m__27402__auto__.call(null,m,ch);
} else {
var m__27402__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27402__auto____$1 == null))){
return m__27402__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27401__auto__ = (((m == null))?null:m);
var m__27402__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27401__auto__)]);
if(!((m__27402__auto__ == null))){
return m__27402__auto__.call(null,m,ch);
} else {
var m__27402__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27402__auto____$1 == null))){
return m__27402__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27401__auto__ = (((m == null))?null:m);
var m__27402__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27401__auto__)]);
if(!((m__27402__auto__ == null))){
return m__27402__auto__.call(null,m);
} else {
var m__27402__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27402__auto____$1 == null))){
return m__27402__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27401__auto__ = (((m == null))?null:m);
var m__27402__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27401__auto__)]);
if(!((m__27402__auto__ == null))){
return m__27402__auto__.call(null,m,state_map);
} else {
var m__27402__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27402__auto____$1 == null))){
return m__27402__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27401__auto__ = (((m == null))?null:m);
var m__27402__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27401__auto__)]);
if(!((m__27402__auto__ == null))){
return m__27402__auto__.call(null,m,mode);
} else {
var m__27402__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27402__auto____$1 == null))){
return m__27402__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27911__auto__ = [];
var len__27904__auto___32530 = arguments.length;
var i__27905__auto___32531 = (0);
while(true){
if((i__27905__auto___32531 < len__27904__auto___32530)){
args__27911__auto__.push((arguments[i__27905__auto___32531]));

var G__32532 = (i__27905__auto___32531 + (1));
i__27905__auto___32531 = G__32532;
continue;
} else {
}
break;
}

var argseq__27912__auto__ = ((((3) < args__27911__auto__.length))?(new cljs.core.IndexedSeq(args__27911__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27912__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32524){
var map__32525 = p__32524;
var map__32525__$1 = ((((!((map__32525 == null)))?((((map__32525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32525):map__32525);
var opts = map__32525__$1;
var statearr_32527_32533 = state;
(statearr_32527_32533[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__32525,map__32525__$1,opts){
return (function (val){
var statearr_32528_32534 = state;
(statearr_32528_32534[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32525,map__32525__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_32529_32535 = state;
(statearr_32529_32535[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32520){
var G__32521 = cljs.core.first.call(null,seq32520);
var seq32520__$1 = cljs.core.next.call(null,seq32520);
var G__32522 = cljs.core.first.call(null,seq32520__$1);
var seq32520__$2 = cljs.core.next.call(null,seq32520__$1);
var G__32523 = cljs.core.first.call(null,seq32520__$2);
var seq32520__$3 = cljs.core.next.call(null,seq32520__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32521,G__32522,G__32523,seq32520__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32703 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32703 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32704){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32704 = meta32704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32705,meta32704__$1){
var self__ = this;
var _32705__$1 = this;
return (new cljs.core.async.t_cljs$core$async32703(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32704__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32705){
var self__ = this;
var _32705__$1 = this;
return self__.meta32704;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32703.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32703.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32703.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32703.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32703.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32703.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32703.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32703.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32704","meta32704",1293875826,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32703";

cljs.core.async.t_cljs$core$async32703.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27340__auto__,writer__27341__auto__,opt__27342__auto__){
return cljs.core._write.call(null,writer__27341__auto__,"cljs.core.async/t_cljs$core$async32703");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32703 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32703(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32704){
return (new cljs.core.async.t_cljs$core$async32703(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32704));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32703(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31119__auto___32870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto___32870,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto___32870,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32807){
var state_val_32808 = (state_32807[(1)]);
if((state_val_32808 === (7))){
var inst_32722 = (state_32807[(2)]);
var state_32807__$1 = state_32807;
var statearr_32809_32871 = state_32807__$1;
(statearr_32809_32871[(2)] = inst_32722);

(statearr_32809_32871[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (20))){
var inst_32734 = (state_32807[(7)]);
var state_32807__$1 = state_32807;
var statearr_32810_32872 = state_32807__$1;
(statearr_32810_32872[(2)] = inst_32734);

(statearr_32810_32872[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (27))){
var state_32807__$1 = state_32807;
var statearr_32811_32873 = state_32807__$1;
(statearr_32811_32873[(2)] = null);

(statearr_32811_32873[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (1))){
var inst_32709 = (state_32807[(8)]);
var inst_32709__$1 = calc_state.call(null);
var inst_32711 = (inst_32709__$1 == null);
var inst_32712 = cljs.core.not.call(null,inst_32711);
var state_32807__$1 = (function (){var statearr_32812 = state_32807;
(statearr_32812[(8)] = inst_32709__$1);

return statearr_32812;
})();
if(inst_32712){
var statearr_32813_32874 = state_32807__$1;
(statearr_32813_32874[(1)] = (2));

} else {
var statearr_32814_32875 = state_32807__$1;
(statearr_32814_32875[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (24))){
var inst_32767 = (state_32807[(9)]);
var inst_32758 = (state_32807[(10)]);
var inst_32781 = (state_32807[(11)]);
var inst_32781__$1 = inst_32758.call(null,inst_32767);
var state_32807__$1 = (function (){var statearr_32815 = state_32807;
(statearr_32815[(11)] = inst_32781__$1);

return statearr_32815;
})();
if(cljs.core.truth_(inst_32781__$1)){
var statearr_32816_32876 = state_32807__$1;
(statearr_32816_32876[(1)] = (29));

} else {
var statearr_32817_32877 = state_32807__$1;
(statearr_32817_32877[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (4))){
var inst_32725 = (state_32807[(2)]);
var state_32807__$1 = state_32807;
if(cljs.core.truth_(inst_32725)){
var statearr_32818_32878 = state_32807__$1;
(statearr_32818_32878[(1)] = (8));

} else {
var statearr_32819_32879 = state_32807__$1;
(statearr_32819_32879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (15))){
var inst_32752 = (state_32807[(2)]);
var state_32807__$1 = state_32807;
if(cljs.core.truth_(inst_32752)){
var statearr_32820_32880 = state_32807__$1;
(statearr_32820_32880[(1)] = (19));

} else {
var statearr_32821_32881 = state_32807__$1;
(statearr_32821_32881[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (21))){
var inst_32757 = (state_32807[(12)]);
var inst_32757__$1 = (state_32807[(2)]);
var inst_32758 = cljs.core.get.call(null,inst_32757__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32759 = cljs.core.get.call(null,inst_32757__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32760 = cljs.core.get.call(null,inst_32757__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32807__$1 = (function (){var statearr_32822 = state_32807;
(statearr_32822[(13)] = inst_32759);

(statearr_32822[(12)] = inst_32757__$1);

(statearr_32822[(10)] = inst_32758);

return statearr_32822;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32807__$1,(22),inst_32760);
} else {
if((state_val_32808 === (31))){
var inst_32789 = (state_32807[(2)]);
var state_32807__$1 = state_32807;
if(cljs.core.truth_(inst_32789)){
var statearr_32823_32882 = state_32807__$1;
(statearr_32823_32882[(1)] = (32));

} else {
var statearr_32824_32883 = state_32807__$1;
(statearr_32824_32883[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (32))){
var inst_32766 = (state_32807[(14)]);
var state_32807__$1 = state_32807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32807__$1,(35),out,inst_32766);
} else {
if((state_val_32808 === (33))){
var inst_32757 = (state_32807[(12)]);
var inst_32734 = inst_32757;
var state_32807__$1 = (function (){var statearr_32825 = state_32807;
(statearr_32825[(7)] = inst_32734);

return statearr_32825;
})();
var statearr_32826_32884 = state_32807__$1;
(statearr_32826_32884[(2)] = null);

(statearr_32826_32884[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (13))){
var inst_32734 = (state_32807[(7)]);
var inst_32741 = inst_32734.cljs$lang$protocol_mask$partition0$;
var inst_32742 = (inst_32741 & (64));
var inst_32743 = inst_32734.cljs$core$ISeq$;
var inst_32744 = (cljs.core.PROTOCOL_SENTINEL === inst_32743);
var inst_32745 = (inst_32742) || (inst_32744);
var state_32807__$1 = state_32807;
if(cljs.core.truth_(inst_32745)){
var statearr_32827_32885 = state_32807__$1;
(statearr_32827_32885[(1)] = (16));

} else {
var statearr_32828_32886 = state_32807__$1;
(statearr_32828_32886[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (22))){
var inst_32767 = (state_32807[(9)]);
var inst_32766 = (state_32807[(14)]);
var inst_32765 = (state_32807[(2)]);
var inst_32766__$1 = cljs.core.nth.call(null,inst_32765,(0),null);
var inst_32767__$1 = cljs.core.nth.call(null,inst_32765,(1),null);
var inst_32768 = (inst_32766__$1 == null);
var inst_32769 = cljs.core._EQ_.call(null,inst_32767__$1,change);
var inst_32770 = (inst_32768) || (inst_32769);
var state_32807__$1 = (function (){var statearr_32829 = state_32807;
(statearr_32829[(9)] = inst_32767__$1);

(statearr_32829[(14)] = inst_32766__$1);

return statearr_32829;
})();
if(cljs.core.truth_(inst_32770)){
var statearr_32830_32887 = state_32807__$1;
(statearr_32830_32887[(1)] = (23));

} else {
var statearr_32831_32888 = state_32807__$1;
(statearr_32831_32888[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (36))){
var inst_32757 = (state_32807[(12)]);
var inst_32734 = inst_32757;
var state_32807__$1 = (function (){var statearr_32832 = state_32807;
(statearr_32832[(7)] = inst_32734);

return statearr_32832;
})();
var statearr_32833_32889 = state_32807__$1;
(statearr_32833_32889[(2)] = null);

(statearr_32833_32889[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (29))){
var inst_32781 = (state_32807[(11)]);
var state_32807__$1 = state_32807;
var statearr_32834_32890 = state_32807__$1;
(statearr_32834_32890[(2)] = inst_32781);

(statearr_32834_32890[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (6))){
var state_32807__$1 = state_32807;
var statearr_32835_32891 = state_32807__$1;
(statearr_32835_32891[(2)] = false);

(statearr_32835_32891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (28))){
var inst_32777 = (state_32807[(2)]);
var inst_32778 = calc_state.call(null);
var inst_32734 = inst_32778;
var state_32807__$1 = (function (){var statearr_32836 = state_32807;
(statearr_32836[(15)] = inst_32777);

(statearr_32836[(7)] = inst_32734);

return statearr_32836;
})();
var statearr_32837_32892 = state_32807__$1;
(statearr_32837_32892[(2)] = null);

(statearr_32837_32892[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (25))){
var inst_32803 = (state_32807[(2)]);
var state_32807__$1 = state_32807;
var statearr_32838_32893 = state_32807__$1;
(statearr_32838_32893[(2)] = inst_32803);

(statearr_32838_32893[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (34))){
var inst_32801 = (state_32807[(2)]);
var state_32807__$1 = state_32807;
var statearr_32839_32894 = state_32807__$1;
(statearr_32839_32894[(2)] = inst_32801);

(statearr_32839_32894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (17))){
var state_32807__$1 = state_32807;
var statearr_32840_32895 = state_32807__$1;
(statearr_32840_32895[(2)] = false);

(statearr_32840_32895[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (3))){
var state_32807__$1 = state_32807;
var statearr_32841_32896 = state_32807__$1;
(statearr_32841_32896[(2)] = false);

(statearr_32841_32896[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (12))){
var inst_32805 = (state_32807[(2)]);
var state_32807__$1 = state_32807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32807__$1,inst_32805);
} else {
if((state_val_32808 === (2))){
var inst_32709 = (state_32807[(8)]);
var inst_32714 = inst_32709.cljs$lang$protocol_mask$partition0$;
var inst_32715 = (inst_32714 & (64));
var inst_32716 = inst_32709.cljs$core$ISeq$;
var inst_32717 = (cljs.core.PROTOCOL_SENTINEL === inst_32716);
var inst_32718 = (inst_32715) || (inst_32717);
var state_32807__$1 = state_32807;
if(cljs.core.truth_(inst_32718)){
var statearr_32842_32897 = state_32807__$1;
(statearr_32842_32897[(1)] = (5));

} else {
var statearr_32843_32898 = state_32807__$1;
(statearr_32843_32898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (23))){
var inst_32766 = (state_32807[(14)]);
var inst_32772 = (inst_32766 == null);
var state_32807__$1 = state_32807;
if(cljs.core.truth_(inst_32772)){
var statearr_32844_32899 = state_32807__$1;
(statearr_32844_32899[(1)] = (26));

} else {
var statearr_32845_32900 = state_32807__$1;
(statearr_32845_32900[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (35))){
var inst_32792 = (state_32807[(2)]);
var state_32807__$1 = state_32807;
if(cljs.core.truth_(inst_32792)){
var statearr_32846_32901 = state_32807__$1;
(statearr_32846_32901[(1)] = (36));

} else {
var statearr_32847_32902 = state_32807__$1;
(statearr_32847_32902[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (19))){
var inst_32734 = (state_32807[(7)]);
var inst_32754 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32734);
var state_32807__$1 = state_32807;
var statearr_32848_32903 = state_32807__$1;
(statearr_32848_32903[(2)] = inst_32754);

(statearr_32848_32903[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (11))){
var inst_32734 = (state_32807[(7)]);
var inst_32738 = (inst_32734 == null);
var inst_32739 = cljs.core.not.call(null,inst_32738);
var state_32807__$1 = state_32807;
if(inst_32739){
var statearr_32849_32904 = state_32807__$1;
(statearr_32849_32904[(1)] = (13));

} else {
var statearr_32850_32905 = state_32807__$1;
(statearr_32850_32905[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (9))){
var inst_32709 = (state_32807[(8)]);
var state_32807__$1 = state_32807;
var statearr_32851_32906 = state_32807__$1;
(statearr_32851_32906[(2)] = inst_32709);

(statearr_32851_32906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (5))){
var state_32807__$1 = state_32807;
var statearr_32852_32907 = state_32807__$1;
(statearr_32852_32907[(2)] = true);

(statearr_32852_32907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (14))){
var state_32807__$1 = state_32807;
var statearr_32853_32908 = state_32807__$1;
(statearr_32853_32908[(2)] = false);

(statearr_32853_32908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (26))){
var inst_32767 = (state_32807[(9)]);
var inst_32774 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32767);
var state_32807__$1 = state_32807;
var statearr_32854_32909 = state_32807__$1;
(statearr_32854_32909[(2)] = inst_32774);

(statearr_32854_32909[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (16))){
var state_32807__$1 = state_32807;
var statearr_32855_32910 = state_32807__$1;
(statearr_32855_32910[(2)] = true);

(statearr_32855_32910[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (38))){
var inst_32797 = (state_32807[(2)]);
var state_32807__$1 = state_32807;
var statearr_32856_32911 = state_32807__$1;
(statearr_32856_32911[(2)] = inst_32797);

(statearr_32856_32911[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (30))){
var inst_32759 = (state_32807[(13)]);
var inst_32767 = (state_32807[(9)]);
var inst_32758 = (state_32807[(10)]);
var inst_32784 = cljs.core.empty_QMARK_.call(null,inst_32758);
var inst_32785 = inst_32759.call(null,inst_32767);
var inst_32786 = cljs.core.not.call(null,inst_32785);
var inst_32787 = (inst_32784) && (inst_32786);
var state_32807__$1 = state_32807;
var statearr_32857_32912 = state_32807__$1;
(statearr_32857_32912[(2)] = inst_32787);

(statearr_32857_32912[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (10))){
var inst_32709 = (state_32807[(8)]);
var inst_32730 = (state_32807[(2)]);
var inst_32731 = cljs.core.get.call(null,inst_32730,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32732 = cljs.core.get.call(null,inst_32730,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32733 = cljs.core.get.call(null,inst_32730,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32734 = inst_32709;
var state_32807__$1 = (function (){var statearr_32858 = state_32807;
(statearr_32858[(16)] = inst_32731);

(statearr_32858[(7)] = inst_32734);

(statearr_32858[(17)] = inst_32732);

(statearr_32858[(18)] = inst_32733);

return statearr_32858;
})();
var statearr_32859_32913 = state_32807__$1;
(statearr_32859_32913[(2)] = null);

(statearr_32859_32913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (18))){
var inst_32749 = (state_32807[(2)]);
var state_32807__$1 = state_32807;
var statearr_32860_32914 = state_32807__$1;
(statearr_32860_32914[(2)] = inst_32749);

(statearr_32860_32914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (37))){
var state_32807__$1 = state_32807;
var statearr_32861_32915 = state_32807__$1;
(statearr_32861_32915[(2)] = null);

(statearr_32861_32915[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32808 === (8))){
var inst_32709 = (state_32807[(8)]);
var inst_32727 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32709);
var state_32807__$1 = state_32807;
var statearr_32862_32916 = state_32807__$1;
(statearr_32862_32916[(2)] = inst_32727);

(statearr_32862_32916[(1)] = (10));


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
});})(c__31119__auto___32870,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31005__auto__,c__31119__auto___32870,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31006__auto__ = null;
var cljs$core$async$mix_$_state_machine__31006__auto____0 = (function (){
var statearr_32866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32866[(0)] = cljs$core$async$mix_$_state_machine__31006__auto__);

(statearr_32866[(1)] = (1));

return statearr_32866;
});
var cljs$core$async$mix_$_state_machine__31006__auto____1 = (function (state_32807){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_32807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e32867){if((e32867 instanceof Object)){
var ex__31009__auto__ = e32867;
var statearr_32868_32917 = state_32807;
(statearr_32868_32917[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32918 = state_32807;
state_32807 = G__32918;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31006__auto__ = function(state_32807){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31006__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31006__auto____1.call(this,state_32807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31006__auto____0;
cljs$core$async$mix_$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31006__auto____1;
return cljs$core$async$mix_$_state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto___32870,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31121__auto__ = (function (){var statearr_32869 = f__31120__auto__.call(null);
(statearr_32869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto___32870);

return statearr_32869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto___32870,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27401__auto__ = (((p == null))?null:p);
var m__27402__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27401__auto__)]);
if(!((m__27402__auto__ == null))){
return m__27402__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27402__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27402__auto____$1 == null))){
return m__27402__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27401__auto__ = (((p == null))?null:p);
var m__27402__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27401__auto__)]);
if(!((m__27402__auto__ == null))){
return m__27402__auto__.call(null,p,v,ch);
} else {
var m__27402__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27402__auto____$1 == null))){
return m__27402__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args32919 = [];
var len__27904__auto___32922 = arguments.length;
var i__27905__auto___32923 = (0);
while(true){
if((i__27905__auto___32923 < len__27904__auto___32922)){
args32919.push((arguments[i__27905__auto___32923]));

var G__32924 = (i__27905__auto___32923 + (1));
i__27905__auto___32923 = G__32924;
continue;
} else {
}
break;
}

var G__32921 = args32919.length;
switch (G__32921) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32919.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27401__auto__ = (((p == null))?null:p);
var m__27402__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27401__auto__)]);
if(!((m__27402__auto__ == null))){
return m__27402__auto__.call(null,p);
} else {
var m__27402__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27402__auto____$1 == null))){
return m__27402__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27401__auto__ = (((p == null))?null:p);
var m__27402__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27401__auto__)]);
if(!((m__27402__auto__ == null))){
return m__27402__auto__.call(null,p,v);
} else {
var m__27402__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27402__auto____$1 == null))){
return m__27402__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args32927 = [];
var len__27904__auto___33052 = arguments.length;
var i__27905__auto___33053 = (0);
while(true){
if((i__27905__auto___33053 < len__27904__auto___33052)){
args32927.push((arguments[i__27905__auto___33053]));

var G__33054 = (i__27905__auto___33053 + (1));
i__27905__auto___33053 = G__33054;
continue;
} else {
}
break;
}

var G__32929 = args32927.length;
switch (G__32929) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32927.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26688__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26688__auto__)){
return or__26688__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26688__auto__,mults){
return (function (p1__32926_SHARP_){
if(cljs.core.truth_(p1__32926_SHARP_.call(null,topic))){
return p1__32926_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32926_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26688__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32930 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32930 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32931){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32931 = meta32931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32932,meta32931__$1){
var self__ = this;
var _32932__$1 = this;
return (new cljs.core.async.t_cljs$core$async32930(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32931__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32932){
var self__ = this;
var _32932__$1 = this;
return self__.meta32931;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6753__auto__)){
var m = temp__6753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32930.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32930.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32931","meta32931",-1767650568,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32930.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32930";

cljs.core.async.t_cljs$core$async32930.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27340__auto__,writer__27341__auto__,opt__27342__auto__){
return cljs.core._write.call(null,writer__27341__auto__,"cljs.core.async/t_cljs$core$async32930");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32930 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32930(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32931){
return (new cljs.core.async.t_cljs$core$async32930(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32931));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32930(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31119__auto___33056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto___33056,mults,ensure_mult,p){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto___33056,mults,ensure_mult,p){
return (function (state_33004){
var state_val_33005 = (state_33004[(1)]);
if((state_val_33005 === (7))){
var inst_33000 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
var statearr_33006_33057 = state_33004__$1;
(statearr_33006_33057[(2)] = inst_33000);

(statearr_33006_33057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (20))){
var state_33004__$1 = state_33004;
var statearr_33007_33058 = state_33004__$1;
(statearr_33007_33058[(2)] = null);

(statearr_33007_33058[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (1))){
var state_33004__$1 = state_33004;
var statearr_33008_33059 = state_33004__$1;
(statearr_33008_33059[(2)] = null);

(statearr_33008_33059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (24))){
var inst_32983 = (state_33004[(7)]);
var inst_32992 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32983);
var state_33004__$1 = state_33004;
var statearr_33009_33060 = state_33004__$1;
(statearr_33009_33060[(2)] = inst_32992);

(statearr_33009_33060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (4))){
var inst_32935 = (state_33004[(8)]);
var inst_32935__$1 = (state_33004[(2)]);
var inst_32936 = (inst_32935__$1 == null);
var state_33004__$1 = (function (){var statearr_33010 = state_33004;
(statearr_33010[(8)] = inst_32935__$1);

return statearr_33010;
})();
if(cljs.core.truth_(inst_32936)){
var statearr_33011_33061 = state_33004__$1;
(statearr_33011_33061[(1)] = (5));

} else {
var statearr_33012_33062 = state_33004__$1;
(statearr_33012_33062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (15))){
var inst_32977 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
var statearr_33013_33063 = state_33004__$1;
(statearr_33013_33063[(2)] = inst_32977);

(statearr_33013_33063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (21))){
var inst_32997 = (state_33004[(2)]);
var state_33004__$1 = (function (){var statearr_33014 = state_33004;
(statearr_33014[(9)] = inst_32997);

return statearr_33014;
})();
var statearr_33015_33064 = state_33004__$1;
(statearr_33015_33064[(2)] = null);

(statearr_33015_33064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (13))){
var inst_32959 = (state_33004[(10)]);
var inst_32961 = cljs.core.chunked_seq_QMARK_.call(null,inst_32959);
var state_33004__$1 = state_33004;
if(inst_32961){
var statearr_33016_33065 = state_33004__$1;
(statearr_33016_33065[(1)] = (16));

} else {
var statearr_33017_33066 = state_33004__$1;
(statearr_33017_33066[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (22))){
var inst_32989 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
if(cljs.core.truth_(inst_32989)){
var statearr_33018_33067 = state_33004__$1;
(statearr_33018_33067[(1)] = (23));

} else {
var statearr_33019_33068 = state_33004__$1;
(statearr_33019_33068[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (6))){
var inst_32935 = (state_33004[(8)]);
var inst_32985 = (state_33004[(11)]);
var inst_32983 = (state_33004[(7)]);
var inst_32983__$1 = topic_fn.call(null,inst_32935);
var inst_32984 = cljs.core.deref.call(null,mults);
var inst_32985__$1 = cljs.core.get.call(null,inst_32984,inst_32983__$1);
var state_33004__$1 = (function (){var statearr_33020 = state_33004;
(statearr_33020[(11)] = inst_32985__$1);

(statearr_33020[(7)] = inst_32983__$1);

return statearr_33020;
})();
if(cljs.core.truth_(inst_32985__$1)){
var statearr_33021_33069 = state_33004__$1;
(statearr_33021_33069[(1)] = (19));

} else {
var statearr_33022_33070 = state_33004__$1;
(statearr_33022_33070[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (25))){
var inst_32994 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
var statearr_33023_33071 = state_33004__$1;
(statearr_33023_33071[(2)] = inst_32994);

(statearr_33023_33071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (17))){
var inst_32959 = (state_33004[(10)]);
var inst_32968 = cljs.core.first.call(null,inst_32959);
var inst_32969 = cljs.core.async.muxch_STAR_.call(null,inst_32968);
var inst_32970 = cljs.core.async.close_BANG_.call(null,inst_32969);
var inst_32971 = cljs.core.next.call(null,inst_32959);
var inst_32945 = inst_32971;
var inst_32946 = null;
var inst_32947 = (0);
var inst_32948 = (0);
var state_33004__$1 = (function (){var statearr_33024 = state_33004;
(statearr_33024[(12)] = inst_32970);

(statearr_33024[(13)] = inst_32947);

(statearr_33024[(14)] = inst_32948);

(statearr_33024[(15)] = inst_32945);

(statearr_33024[(16)] = inst_32946);

return statearr_33024;
})();
var statearr_33025_33072 = state_33004__$1;
(statearr_33025_33072[(2)] = null);

(statearr_33025_33072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (3))){
var inst_33002 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33004__$1,inst_33002);
} else {
if((state_val_33005 === (12))){
var inst_32979 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
var statearr_33026_33073 = state_33004__$1;
(statearr_33026_33073[(2)] = inst_32979);

(statearr_33026_33073[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (2))){
var state_33004__$1 = state_33004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33004__$1,(4),ch);
} else {
if((state_val_33005 === (23))){
var state_33004__$1 = state_33004;
var statearr_33027_33074 = state_33004__$1;
(statearr_33027_33074[(2)] = null);

(statearr_33027_33074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (19))){
var inst_32935 = (state_33004[(8)]);
var inst_32985 = (state_33004[(11)]);
var inst_32987 = cljs.core.async.muxch_STAR_.call(null,inst_32985);
var state_33004__$1 = state_33004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33004__$1,(22),inst_32987,inst_32935);
} else {
if((state_val_33005 === (11))){
var inst_32959 = (state_33004[(10)]);
var inst_32945 = (state_33004[(15)]);
var inst_32959__$1 = cljs.core.seq.call(null,inst_32945);
var state_33004__$1 = (function (){var statearr_33028 = state_33004;
(statearr_33028[(10)] = inst_32959__$1);

return statearr_33028;
})();
if(inst_32959__$1){
var statearr_33029_33075 = state_33004__$1;
(statearr_33029_33075[(1)] = (13));

} else {
var statearr_33030_33076 = state_33004__$1;
(statearr_33030_33076[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (9))){
var inst_32981 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
var statearr_33031_33077 = state_33004__$1;
(statearr_33031_33077[(2)] = inst_32981);

(statearr_33031_33077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (5))){
var inst_32942 = cljs.core.deref.call(null,mults);
var inst_32943 = cljs.core.vals.call(null,inst_32942);
var inst_32944 = cljs.core.seq.call(null,inst_32943);
var inst_32945 = inst_32944;
var inst_32946 = null;
var inst_32947 = (0);
var inst_32948 = (0);
var state_33004__$1 = (function (){var statearr_33032 = state_33004;
(statearr_33032[(13)] = inst_32947);

(statearr_33032[(14)] = inst_32948);

(statearr_33032[(15)] = inst_32945);

(statearr_33032[(16)] = inst_32946);

return statearr_33032;
})();
var statearr_33033_33078 = state_33004__$1;
(statearr_33033_33078[(2)] = null);

(statearr_33033_33078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (14))){
var state_33004__$1 = state_33004;
var statearr_33037_33079 = state_33004__$1;
(statearr_33037_33079[(2)] = null);

(statearr_33037_33079[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (16))){
var inst_32959 = (state_33004[(10)]);
var inst_32963 = cljs.core.chunk_first.call(null,inst_32959);
var inst_32964 = cljs.core.chunk_rest.call(null,inst_32959);
var inst_32965 = cljs.core.count.call(null,inst_32963);
var inst_32945 = inst_32964;
var inst_32946 = inst_32963;
var inst_32947 = inst_32965;
var inst_32948 = (0);
var state_33004__$1 = (function (){var statearr_33038 = state_33004;
(statearr_33038[(13)] = inst_32947);

(statearr_33038[(14)] = inst_32948);

(statearr_33038[(15)] = inst_32945);

(statearr_33038[(16)] = inst_32946);

return statearr_33038;
})();
var statearr_33039_33080 = state_33004__$1;
(statearr_33039_33080[(2)] = null);

(statearr_33039_33080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (10))){
var inst_32947 = (state_33004[(13)]);
var inst_32948 = (state_33004[(14)]);
var inst_32945 = (state_33004[(15)]);
var inst_32946 = (state_33004[(16)]);
var inst_32953 = cljs.core._nth.call(null,inst_32946,inst_32948);
var inst_32954 = cljs.core.async.muxch_STAR_.call(null,inst_32953);
var inst_32955 = cljs.core.async.close_BANG_.call(null,inst_32954);
var inst_32956 = (inst_32948 + (1));
var tmp33034 = inst_32947;
var tmp33035 = inst_32945;
var tmp33036 = inst_32946;
var inst_32945__$1 = tmp33035;
var inst_32946__$1 = tmp33036;
var inst_32947__$1 = tmp33034;
var inst_32948__$1 = inst_32956;
var state_33004__$1 = (function (){var statearr_33040 = state_33004;
(statearr_33040[(13)] = inst_32947__$1);

(statearr_33040[(14)] = inst_32948__$1);

(statearr_33040[(15)] = inst_32945__$1);

(statearr_33040[(16)] = inst_32946__$1);

(statearr_33040[(17)] = inst_32955);

return statearr_33040;
})();
var statearr_33041_33081 = state_33004__$1;
(statearr_33041_33081[(2)] = null);

(statearr_33041_33081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (18))){
var inst_32974 = (state_33004[(2)]);
var state_33004__$1 = state_33004;
var statearr_33042_33082 = state_33004__$1;
(statearr_33042_33082[(2)] = inst_32974);

(statearr_33042_33082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33005 === (8))){
var inst_32947 = (state_33004[(13)]);
var inst_32948 = (state_33004[(14)]);
var inst_32950 = (inst_32948 < inst_32947);
var inst_32951 = inst_32950;
var state_33004__$1 = state_33004;
if(cljs.core.truth_(inst_32951)){
var statearr_33043_33083 = state_33004__$1;
(statearr_33043_33083[(1)] = (10));

} else {
var statearr_33044_33084 = state_33004__$1;
(statearr_33044_33084[(1)] = (11));

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
});})(c__31119__auto___33056,mults,ensure_mult,p))
;
return ((function (switch__31005__auto__,c__31119__auto___33056,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31006__auto__ = null;
var cljs$core$async$state_machine__31006__auto____0 = (function (){
var statearr_33048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33048[(0)] = cljs$core$async$state_machine__31006__auto__);

(statearr_33048[(1)] = (1));

return statearr_33048;
});
var cljs$core$async$state_machine__31006__auto____1 = (function (state_33004){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_33004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e33049){if((e33049 instanceof Object)){
var ex__31009__auto__ = e33049;
var statearr_33050_33085 = state_33004;
(statearr_33050_33085[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33086 = state_33004;
state_33004 = G__33086;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
cljs$core$async$state_machine__31006__auto__ = function(state_33004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31006__auto____1.call(this,state_33004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31006__auto____0;
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31006__auto____1;
return cljs$core$async$state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto___33056,mults,ensure_mult,p))
})();
var state__31121__auto__ = (function (){var statearr_33051 = f__31120__auto__.call(null);
(statearr_33051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto___33056);

return statearr_33051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto___33056,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args33087 = [];
var len__27904__auto___33090 = arguments.length;
var i__27905__auto___33091 = (0);
while(true){
if((i__27905__auto___33091 < len__27904__auto___33090)){
args33087.push((arguments[i__27905__auto___33091]));

var G__33092 = (i__27905__auto___33091 + (1));
i__27905__auto___33091 = G__33092;
continue;
} else {
}
break;
}

var G__33089 = args33087.length;
switch (G__33089) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33087.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args33094 = [];
var len__27904__auto___33097 = arguments.length;
var i__27905__auto___33098 = (0);
while(true){
if((i__27905__auto___33098 < len__27904__auto___33097)){
args33094.push((arguments[i__27905__auto___33098]));

var G__33099 = (i__27905__auto___33098 + (1));
i__27905__auto___33098 = G__33099;
continue;
} else {
}
break;
}

var G__33096 = args33094.length;
switch (G__33096) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33094.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args33101 = [];
var len__27904__auto___33172 = arguments.length;
var i__27905__auto___33173 = (0);
while(true){
if((i__27905__auto___33173 < len__27904__auto___33172)){
args33101.push((arguments[i__27905__auto___33173]));

var G__33174 = (i__27905__auto___33173 + (1));
i__27905__auto___33173 = G__33174;
continue;
} else {
}
break;
}

var G__33103 = args33101.length;
switch (G__33103) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33101.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31119__auto___33176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto___33176,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto___33176,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33142){
var state_val_33143 = (state_33142[(1)]);
if((state_val_33143 === (7))){
var state_33142__$1 = state_33142;
var statearr_33144_33177 = state_33142__$1;
(statearr_33144_33177[(2)] = null);

(statearr_33144_33177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (1))){
var state_33142__$1 = state_33142;
var statearr_33145_33178 = state_33142__$1;
(statearr_33145_33178[(2)] = null);

(statearr_33145_33178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (4))){
var inst_33106 = (state_33142[(7)]);
var inst_33108 = (inst_33106 < cnt);
var state_33142__$1 = state_33142;
if(cljs.core.truth_(inst_33108)){
var statearr_33146_33179 = state_33142__$1;
(statearr_33146_33179[(1)] = (6));

} else {
var statearr_33147_33180 = state_33142__$1;
(statearr_33147_33180[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (15))){
var inst_33138 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33148_33181 = state_33142__$1;
(statearr_33148_33181[(2)] = inst_33138);

(statearr_33148_33181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (13))){
var inst_33131 = cljs.core.async.close_BANG_.call(null,out);
var state_33142__$1 = state_33142;
var statearr_33149_33182 = state_33142__$1;
(statearr_33149_33182[(2)] = inst_33131);

(statearr_33149_33182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (6))){
var state_33142__$1 = state_33142;
var statearr_33150_33183 = state_33142__$1;
(statearr_33150_33183[(2)] = null);

(statearr_33150_33183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (3))){
var inst_33140 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33142__$1,inst_33140);
} else {
if((state_val_33143 === (12))){
var inst_33128 = (state_33142[(8)]);
var inst_33128__$1 = (state_33142[(2)]);
var inst_33129 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33128__$1);
var state_33142__$1 = (function (){var statearr_33151 = state_33142;
(statearr_33151[(8)] = inst_33128__$1);

return statearr_33151;
})();
if(cljs.core.truth_(inst_33129)){
var statearr_33152_33184 = state_33142__$1;
(statearr_33152_33184[(1)] = (13));

} else {
var statearr_33153_33185 = state_33142__$1;
(statearr_33153_33185[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (2))){
var inst_33105 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33106 = (0);
var state_33142__$1 = (function (){var statearr_33154 = state_33142;
(statearr_33154[(7)] = inst_33106);

(statearr_33154[(9)] = inst_33105);

return statearr_33154;
})();
var statearr_33155_33186 = state_33142__$1;
(statearr_33155_33186[(2)] = null);

(statearr_33155_33186[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (11))){
var inst_33106 = (state_33142[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33142,(10),Object,null,(9));
var inst_33115 = chs__$1.call(null,inst_33106);
var inst_33116 = done.call(null,inst_33106);
var inst_33117 = cljs.core.async.take_BANG_.call(null,inst_33115,inst_33116);
var state_33142__$1 = state_33142;
var statearr_33156_33187 = state_33142__$1;
(statearr_33156_33187[(2)] = inst_33117);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33142__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (9))){
var inst_33106 = (state_33142[(7)]);
var inst_33119 = (state_33142[(2)]);
var inst_33120 = (inst_33106 + (1));
var inst_33106__$1 = inst_33120;
var state_33142__$1 = (function (){var statearr_33157 = state_33142;
(statearr_33157[(10)] = inst_33119);

(statearr_33157[(7)] = inst_33106__$1);

return statearr_33157;
})();
var statearr_33158_33188 = state_33142__$1;
(statearr_33158_33188[(2)] = null);

(statearr_33158_33188[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (5))){
var inst_33126 = (state_33142[(2)]);
var state_33142__$1 = (function (){var statearr_33159 = state_33142;
(statearr_33159[(11)] = inst_33126);

return statearr_33159;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33142__$1,(12),dchan);
} else {
if((state_val_33143 === (14))){
var inst_33128 = (state_33142[(8)]);
var inst_33133 = cljs.core.apply.call(null,f,inst_33128);
var state_33142__$1 = state_33142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33142__$1,(16),out,inst_33133);
} else {
if((state_val_33143 === (16))){
var inst_33135 = (state_33142[(2)]);
var state_33142__$1 = (function (){var statearr_33160 = state_33142;
(statearr_33160[(12)] = inst_33135);

return statearr_33160;
})();
var statearr_33161_33189 = state_33142__$1;
(statearr_33161_33189[(2)] = null);

(statearr_33161_33189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (10))){
var inst_33110 = (state_33142[(2)]);
var inst_33111 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33142__$1 = (function (){var statearr_33162 = state_33142;
(statearr_33162[(13)] = inst_33110);

return statearr_33162;
})();
var statearr_33163_33190 = state_33142__$1;
(statearr_33163_33190[(2)] = inst_33111);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33142__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (8))){
var inst_33124 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33164_33191 = state_33142__$1;
(statearr_33164_33191[(2)] = inst_33124);

(statearr_33164_33191[(1)] = (5));


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
});})(c__31119__auto___33176,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31005__auto__,c__31119__auto___33176,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31006__auto__ = null;
var cljs$core$async$state_machine__31006__auto____0 = (function (){
var statearr_33168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33168[(0)] = cljs$core$async$state_machine__31006__auto__);

(statearr_33168[(1)] = (1));

return statearr_33168;
});
var cljs$core$async$state_machine__31006__auto____1 = (function (state_33142){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_33142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e33169){if((e33169 instanceof Object)){
var ex__31009__auto__ = e33169;
var statearr_33170_33192 = state_33142;
(statearr_33170_33192[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33193 = state_33142;
state_33142 = G__33193;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
cljs$core$async$state_machine__31006__auto__ = function(state_33142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31006__auto____1.call(this,state_33142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31006__auto____0;
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31006__auto____1;
return cljs$core$async$state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto___33176,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31121__auto__ = (function (){var statearr_33171 = f__31120__auto__.call(null);
(statearr_33171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto___33176);

return statearr_33171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto___33176,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args33195 = [];
var len__27904__auto___33253 = arguments.length;
var i__27905__auto___33254 = (0);
while(true){
if((i__27905__auto___33254 < len__27904__auto___33253)){
args33195.push((arguments[i__27905__auto___33254]));

var G__33255 = (i__27905__auto___33254 + (1));
i__27905__auto___33254 = G__33255;
continue;
} else {
}
break;
}

var G__33197 = args33195.length;
switch (G__33197) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33195.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31119__auto___33257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto___33257,out){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto___33257,out){
return (function (state_33229){
var state_val_33230 = (state_33229[(1)]);
if((state_val_33230 === (7))){
var inst_33208 = (state_33229[(7)]);
var inst_33209 = (state_33229[(8)]);
var inst_33208__$1 = (state_33229[(2)]);
var inst_33209__$1 = cljs.core.nth.call(null,inst_33208__$1,(0),null);
var inst_33210 = cljs.core.nth.call(null,inst_33208__$1,(1),null);
var inst_33211 = (inst_33209__$1 == null);
var state_33229__$1 = (function (){var statearr_33231 = state_33229;
(statearr_33231[(7)] = inst_33208__$1);

(statearr_33231[(9)] = inst_33210);

(statearr_33231[(8)] = inst_33209__$1);

return statearr_33231;
})();
if(cljs.core.truth_(inst_33211)){
var statearr_33232_33258 = state_33229__$1;
(statearr_33232_33258[(1)] = (8));

} else {
var statearr_33233_33259 = state_33229__$1;
(statearr_33233_33259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (1))){
var inst_33198 = cljs.core.vec.call(null,chs);
var inst_33199 = inst_33198;
var state_33229__$1 = (function (){var statearr_33234 = state_33229;
(statearr_33234[(10)] = inst_33199);

return statearr_33234;
})();
var statearr_33235_33260 = state_33229__$1;
(statearr_33235_33260[(2)] = null);

(statearr_33235_33260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (4))){
var inst_33199 = (state_33229[(10)]);
var state_33229__$1 = state_33229;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33229__$1,(7),inst_33199);
} else {
if((state_val_33230 === (6))){
var inst_33225 = (state_33229[(2)]);
var state_33229__$1 = state_33229;
var statearr_33236_33261 = state_33229__$1;
(statearr_33236_33261[(2)] = inst_33225);

(statearr_33236_33261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (3))){
var inst_33227 = (state_33229[(2)]);
var state_33229__$1 = state_33229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33229__$1,inst_33227);
} else {
if((state_val_33230 === (2))){
var inst_33199 = (state_33229[(10)]);
var inst_33201 = cljs.core.count.call(null,inst_33199);
var inst_33202 = (inst_33201 > (0));
var state_33229__$1 = state_33229;
if(cljs.core.truth_(inst_33202)){
var statearr_33238_33262 = state_33229__$1;
(statearr_33238_33262[(1)] = (4));

} else {
var statearr_33239_33263 = state_33229__$1;
(statearr_33239_33263[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (11))){
var inst_33199 = (state_33229[(10)]);
var inst_33218 = (state_33229[(2)]);
var tmp33237 = inst_33199;
var inst_33199__$1 = tmp33237;
var state_33229__$1 = (function (){var statearr_33240 = state_33229;
(statearr_33240[(11)] = inst_33218);

(statearr_33240[(10)] = inst_33199__$1);

return statearr_33240;
})();
var statearr_33241_33264 = state_33229__$1;
(statearr_33241_33264[(2)] = null);

(statearr_33241_33264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (9))){
var inst_33209 = (state_33229[(8)]);
var state_33229__$1 = state_33229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33229__$1,(11),out,inst_33209);
} else {
if((state_val_33230 === (5))){
var inst_33223 = cljs.core.async.close_BANG_.call(null,out);
var state_33229__$1 = state_33229;
var statearr_33242_33265 = state_33229__$1;
(statearr_33242_33265[(2)] = inst_33223);

(statearr_33242_33265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (10))){
var inst_33221 = (state_33229[(2)]);
var state_33229__$1 = state_33229;
var statearr_33243_33266 = state_33229__$1;
(statearr_33243_33266[(2)] = inst_33221);

(statearr_33243_33266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (8))){
var inst_33208 = (state_33229[(7)]);
var inst_33210 = (state_33229[(9)]);
var inst_33199 = (state_33229[(10)]);
var inst_33209 = (state_33229[(8)]);
var inst_33213 = (function (){var cs = inst_33199;
var vec__33204 = inst_33208;
var v = inst_33209;
var c = inst_33210;
return ((function (cs,vec__33204,v,c,inst_33208,inst_33210,inst_33199,inst_33209,state_val_33230,c__31119__auto___33257,out){
return (function (p1__33194_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33194_SHARP_);
});
;})(cs,vec__33204,v,c,inst_33208,inst_33210,inst_33199,inst_33209,state_val_33230,c__31119__auto___33257,out))
})();
var inst_33214 = cljs.core.filterv.call(null,inst_33213,inst_33199);
var inst_33199__$1 = inst_33214;
var state_33229__$1 = (function (){var statearr_33244 = state_33229;
(statearr_33244[(10)] = inst_33199__$1);

return statearr_33244;
})();
var statearr_33245_33267 = state_33229__$1;
(statearr_33245_33267[(2)] = null);

(statearr_33245_33267[(1)] = (2));


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
});})(c__31119__auto___33257,out))
;
return ((function (switch__31005__auto__,c__31119__auto___33257,out){
return (function() {
var cljs$core$async$state_machine__31006__auto__ = null;
var cljs$core$async$state_machine__31006__auto____0 = (function (){
var statearr_33249 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33249[(0)] = cljs$core$async$state_machine__31006__auto__);

(statearr_33249[(1)] = (1));

return statearr_33249;
});
var cljs$core$async$state_machine__31006__auto____1 = (function (state_33229){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_33229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e33250){if((e33250 instanceof Object)){
var ex__31009__auto__ = e33250;
var statearr_33251_33268 = state_33229;
(statearr_33251_33268[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33269 = state_33229;
state_33229 = G__33269;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
cljs$core$async$state_machine__31006__auto__ = function(state_33229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31006__auto____1.call(this,state_33229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31006__auto____0;
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31006__auto____1;
return cljs$core$async$state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto___33257,out))
})();
var state__31121__auto__ = (function (){var statearr_33252 = f__31120__auto__.call(null);
(statearr_33252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto___33257);

return statearr_33252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto___33257,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args33270 = [];
var len__27904__auto___33319 = arguments.length;
var i__27905__auto___33320 = (0);
while(true){
if((i__27905__auto___33320 < len__27904__auto___33319)){
args33270.push((arguments[i__27905__auto___33320]));

var G__33321 = (i__27905__auto___33320 + (1));
i__27905__auto___33320 = G__33321;
continue;
} else {
}
break;
}

var G__33272 = args33270.length;
switch (G__33272) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33270.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31119__auto___33323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto___33323,out){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto___33323,out){
return (function (state_33296){
var state_val_33297 = (state_33296[(1)]);
if((state_val_33297 === (7))){
var inst_33278 = (state_33296[(7)]);
var inst_33278__$1 = (state_33296[(2)]);
var inst_33279 = (inst_33278__$1 == null);
var inst_33280 = cljs.core.not.call(null,inst_33279);
var state_33296__$1 = (function (){var statearr_33298 = state_33296;
(statearr_33298[(7)] = inst_33278__$1);

return statearr_33298;
})();
if(inst_33280){
var statearr_33299_33324 = state_33296__$1;
(statearr_33299_33324[(1)] = (8));

} else {
var statearr_33300_33325 = state_33296__$1;
(statearr_33300_33325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (1))){
var inst_33273 = (0);
var state_33296__$1 = (function (){var statearr_33301 = state_33296;
(statearr_33301[(8)] = inst_33273);

return statearr_33301;
})();
var statearr_33302_33326 = state_33296__$1;
(statearr_33302_33326[(2)] = null);

(statearr_33302_33326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (4))){
var state_33296__$1 = state_33296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33296__$1,(7),ch);
} else {
if((state_val_33297 === (6))){
var inst_33291 = (state_33296[(2)]);
var state_33296__$1 = state_33296;
var statearr_33303_33327 = state_33296__$1;
(statearr_33303_33327[(2)] = inst_33291);

(statearr_33303_33327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (3))){
var inst_33293 = (state_33296[(2)]);
var inst_33294 = cljs.core.async.close_BANG_.call(null,out);
var state_33296__$1 = (function (){var statearr_33304 = state_33296;
(statearr_33304[(9)] = inst_33293);

return statearr_33304;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33296__$1,inst_33294);
} else {
if((state_val_33297 === (2))){
var inst_33273 = (state_33296[(8)]);
var inst_33275 = (inst_33273 < n);
var state_33296__$1 = state_33296;
if(cljs.core.truth_(inst_33275)){
var statearr_33305_33328 = state_33296__$1;
(statearr_33305_33328[(1)] = (4));

} else {
var statearr_33306_33329 = state_33296__$1;
(statearr_33306_33329[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (11))){
var inst_33273 = (state_33296[(8)]);
var inst_33283 = (state_33296[(2)]);
var inst_33284 = (inst_33273 + (1));
var inst_33273__$1 = inst_33284;
var state_33296__$1 = (function (){var statearr_33307 = state_33296;
(statearr_33307[(8)] = inst_33273__$1);

(statearr_33307[(10)] = inst_33283);

return statearr_33307;
})();
var statearr_33308_33330 = state_33296__$1;
(statearr_33308_33330[(2)] = null);

(statearr_33308_33330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (9))){
var state_33296__$1 = state_33296;
var statearr_33309_33331 = state_33296__$1;
(statearr_33309_33331[(2)] = null);

(statearr_33309_33331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (5))){
var state_33296__$1 = state_33296;
var statearr_33310_33332 = state_33296__$1;
(statearr_33310_33332[(2)] = null);

(statearr_33310_33332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (10))){
var inst_33288 = (state_33296[(2)]);
var state_33296__$1 = state_33296;
var statearr_33311_33333 = state_33296__$1;
(statearr_33311_33333[(2)] = inst_33288);

(statearr_33311_33333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33297 === (8))){
var inst_33278 = (state_33296[(7)]);
var state_33296__$1 = state_33296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33296__$1,(11),out,inst_33278);
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
});})(c__31119__auto___33323,out))
;
return ((function (switch__31005__auto__,c__31119__auto___33323,out){
return (function() {
var cljs$core$async$state_machine__31006__auto__ = null;
var cljs$core$async$state_machine__31006__auto____0 = (function (){
var statearr_33315 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33315[(0)] = cljs$core$async$state_machine__31006__auto__);

(statearr_33315[(1)] = (1));

return statearr_33315;
});
var cljs$core$async$state_machine__31006__auto____1 = (function (state_33296){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_33296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e33316){if((e33316 instanceof Object)){
var ex__31009__auto__ = e33316;
var statearr_33317_33334 = state_33296;
(statearr_33317_33334[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33335 = state_33296;
state_33296 = G__33335;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
cljs$core$async$state_machine__31006__auto__ = function(state_33296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31006__auto____1.call(this,state_33296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31006__auto____0;
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31006__auto____1;
return cljs$core$async$state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto___33323,out))
})();
var state__31121__auto__ = (function (){var statearr_33318 = f__31120__auto__.call(null);
(statearr_33318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto___33323);

return statearr_33318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto___33323,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33343 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33343 = (function (f,ch,meta33344){
this.f = f;
this.ch = ch;
this.meta33344 = meta33344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33345,meta33344__$1){
var self__ = this;
var _33345__$1 = this;
return (new cljs.core.async.t_cljs$core$async33343(self__.f,self__.ch,meta33344__$1));
});

cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33345){
var self__ = this;
var _33345__$1 = this;
return self__.meta33344;
});

cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33346 = (function (f,ch,meta33344,_,fn1,meta33347){
this.f = f;
this.ch = ch;
this.meta33344 = meta33344;
this._ = _;
this.fn1 = fn1;
this.meta33347 = meta33347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33348,meta33347__$1){
var self__ = this;
var _33348__$1 = this;
return (new cljs.core.async.t_cljs$core$async33346(self__.f,self__.ch,self__.meta33344,self__._,self__.fn1,meta33347__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33346.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33348){
var self__ = this;
var _33348__$1 = this;
return self__.meta33347;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33346.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33346.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33346.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33346.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33336_SHARP_){
return f1.call(null,(((p1__33336_SHARP_ == null))?null:self__.f.call(null,p1__33336_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33346.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33344","meta33344",-214089141,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33343","cljs.core.async/t_cljs$core$async33343",-772442413,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33347","meta33347",-317149357,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33346";

cljs.core.async.t_cljs$core$async33346.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27340__auto__,writer__27341__auto__,opt__27342__auto__){
return cljs.core._write.call(null,writer__27341__auto__,"cljs.core.async/t_cljs$core$async33346");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33346 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33346(f__$1,ch__$1,meta33344__$1,___$2,fn1__$1,meta33347){
return (new cljs.core.async.t_cljs$core$async33346(f__$1,ch__$1,meta33344__$1,___$2,fn1__$1,meta33347));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33346(self__.f,self__.ch,self__.meta33344,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26676__auto__ = ret;
if(cljs.core.truth_(and__26676__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26676__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33344","meta33344",-214089141,null)], null);
});

cljs.core.async.t_cljs$core$async33343.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33343";

cljs.core.async.t_cljs$core$async33343.cljs$lang$ctorPrWriter = (function (this__27340__auto__,writer__27341__auto__,opt__27342__auto__){
return cljs.core._write.call(null,writer__27341__auto__,"cljs.core.async/t_cljs$core$async33343");
});

cljs.core.async.__GT_t_cljs$core$async33343 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33343(f__$1,ch__$1,meta33344){
return (new cljs.core.async.t_cljs$core$async33343(f__$1,ch__$1,meta33344));
});

}

return (new cljs.core.async.t_cljs$core$async33343(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33352 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33352 = (function (f,ch,meta33353){
this.f = f;
this.ch = ch;
this.meta33353 = meta33353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33354,meta33353__$1){
var self__ = this;
var _33354__$1 = this;
return (new cljs.core.async.t_cljs$core$async33352(self__.f,self__.ch,meta33353__$1));
});

cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33354){
var self__ = this;
var _33354__$1 = this;
return self__.meta33353;
});

cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33353","meta33353",-241501213,null)], null);
});

cljs.core.async.t_cljs$core$async33352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33352";

cljs.core.async.t_cljs$core$async33352.cljs$lang$ctorPrWriter = (function (this__27340__auto__,writer__27341__auto__,opt__27342__auto__){
return cljs.core._write.call(null,writer__27341__auto__,"cljs.core.async/t_cljs$core$async33352");
});

cljs.core.async.__GT_t_cljs$core$async33352 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33352(f__$1,ch__$1,meta33353){
return (new cljs.core.async.t_cljs$core$async33352(f__$1,ch__$1,meta33353));
});

}

return (new cljs.core.async.t_cljs$core$async33352(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33358 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33358 = (function (p,ch,meta33359){
this.p = p;
this.ch = ch;
this.meta33359 = meta33359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33360,meta33359__$1){
var self__ = this;
var _33360__$1 = this;
return (new cljs.core.async.t_cljs$core$async33358(self__.p,self__.ch,meta33359__$1));
});

cljs.core.async.t_cljs$core$async33358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33360){
var self__ = this;
var _33360__$1 = this;
return self__.meta33359;
});

cljs.core.async.t_cljs$core$async33358.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33358.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33358.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33358.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33358.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33358.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33358.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33359","meta33359",1777569556,null)], null);
});

cljs.core.async.t_cljs$core$async33358.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33358";

cljs.core.async.t_cljs$core$async33358.cljs$lang$ctorPrWriter = (function (this__27340__auto__,writer__27341__auto__,opt__27342__auto__){
return cljs.core._write.call(null,writer__27341__auto__,"cljs.core.async/t_cljs$core$async33358");
});

cljs.core.async.__GT_t_cljs$core$async33358 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33358(p__$1,ch__$1,meta33359){
return (new cljs.core.async.t_cljs$core$async33358(p__$1,ch__$1,meta33359));
});

}

return (new cljs.core.async.t_cljs$core$async33358(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args33361 = [];
var len__27904__auto___33405 = arguments.length;
var i__27905__auto___33406 = (0);
while(true){
if((i__27905__auto___33406 < len__27904__auto___33405)){
args33361.push((arguments[i__27905__auto___33406]));

var G__33407 = (i__27905__auto___33406 + (1));
i__27905__auto___33406 = G__33407;
continue;
} else {
}
break;
}

var G__33363 = args33361.length;
switch (G__33363) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33361.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31119__auto___33409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto___33409,out){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto___33409,out){
return (function (state_33384){
var state_val_33385 = (state_33384[(1)]);
if((state_val_33385 === (7))){
var inst_33380 = (state_33384[(2)]);
var state_33384__$1 = state_33384;
var statearr_33386_33410 = state_33384__$1;
(statearr_33386_33410[(2)] = inst_33380);

(statearr_33386_33410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (1))){
var state_33384__$1 = state_33384;
var statearr_33387_33411 = state_33384__$1;
(statearr_33387_33411[(2)] = null);

(statearr_33387_33411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (4))){
var inst_33366 = (state_33384[(7)]);
var inst_33366__$1 = (state_33384[(2)]);
var inst_33367 = (inst_33366__$1 == null);
var state_33384__$1 = (function (){var statearr_33388 = state_33384;
(statearr_33388[(7)] = inst_33366__$1);

return statearr_33388;
})();
if(cljs.core.truth_(inst_33367)){
var statearr_33389_33412 = state_33384__$1;
(statearr_33389_33412[(1)] = (5));

} else {
var statearr_33390_33413 = state_33384__$1;
(statearr_33390_33413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (6))){
var inst_33366 = (state_33384[(7)]);
var inst_33371 = p.call(null,inst_33366);
var state_33384__$1 = state_33384;
if(cljs.core.truth_(inst_33371)){
var statearr_33391_33414 = state_33384__$1;
(statearr_33391_33414[(1)] = (8));

} else {
var statearr_33392_33415 = state_33384__$1;
(statearr_33392_33415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (3))){
var inst_33382 = (state_33384[(2)]);
var state_33384__$1 = state_33384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33384__$1,inst_33382);
} else {
if((state_val_33385 === (2))){
var state_33384__$1 = state_33384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33384__$1,(4),ch);
} else {
if((state_val_33385 === (11))){
var inst_33374 = (state_33384[(2)]);
var state_33384__$1 = state_33384;
var statearr_33393_33416 = state_33384__$1;
(statearr_33393_33416[(2)] = inst_33374);

(statearr_33393_33416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (9))){
var state_33384__$1 = state_33384;
var statearr_33394_33417 = state_33384__$1;
(statearr_33394_33417[(2)] = null);

(statearr_33394_33417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (5))){
var inst_33369 = cljs.core.async.close_BANG_.call(null,out);
var state_33384__$1 = state_33384;
var statearr_33395_33418 = state_33384__$1;
(statearr_33395_33418[(2)] = inst_33369);

(statearr_33395_33418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (10))){
var inst_33377 = (state_33384[(2)]);
var state_33384__$1 = (function (){var statearr_33396 = state_33384;
(statearr_33396[(8)] = inst_33377);

return statearr_33396;
})();
var statearr_33397_33419 = state_33384__$1;
(statearr_33397_33419[(2)] = null);

(statearr_33397_33419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (8))){
var inst_33366 = (state_33384[(7)]);
var state_33384__$1 = state_33384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33384__$1,(11),out,inst_33366);
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
});})(c__31119__auto___33409,out))
;
return ((function (switch__31005__auto__,c__31119__auto___33409,out){
return (function() {
var cljs$core$async$state_machine__31006__auto__ = null;
var cljs$core$async$state_machine__31006__auto____0 = (function (){
var statearr_33401 = [null,null,null,null,null,null,null,null,null];
(statearr_33401[(0)] = cljs$core$async$state_machine__31006__auto__);

(statearr_33401[(1)] = (1));

return statearr_33401;
});
var cljs$core$async$state_machine__31006__auto____1 = (function (state_33384){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_33384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e33402){if((e33402 instanceof Object)){
var ex__31009__auto__ = e33402;
var statearr_33403_33420 = state_33384;
(statearr_33403_33420[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33421 = state_33384;
state_33384 = G__33421;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
cljs$core$async$state_machine__31006__auto__ = function(state_33384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31006__auto____1.call(this,state_33384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31006__auto____0;
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31006__auto____1;
return cljs$core$async$state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto___33409,out))
})();
var state__31121__auto__ = (function (){var statearr_33404 = f__31120__auto__.call(null);
(statearr_33404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto___33409);

return statearr_33404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto___33409,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args33422 = [];
var len__27904__auto___33425 = arguments.length;
var i__27905__auto___33426 = (0);
while(true){
if((i__27905__auto___33426 < len__27904__auto___33425)){
args33422.push((arguments[i__27905__auto___33426]));

var G__33427 = (i__27905__auto___33426 + (1));
i__27905__auto___33426 = G__33427;
continue;
} else {
}
break;
}

var G__33424 = args33422.length;
switch (G__33424) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33422.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto__){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto__){
return (function (state_33594){
var state_val_33595 = (state_33594[(1)]);
if((state_val_33595 === (7))){
var inst_33590 = (state_33594[(2)]);
var state_33594__$1 = state_33594;
var statearr_33596_33637 = state_33594__$1;
(statearr_33596_33637[(2)] = inst_33590);

(statearr_33596_33637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (20))){
var inst_33560 = (state_33594[(7)]);
var inst_33571 = (state_33594[(2)]);
var inst_33572 = cljs.core.next.call(null,inst_33560);
var inst_33546 = inst_33572;
var inst_33547 = null;
var inst_33548 = (0);
var inst_33549 = (0);
var state_33594__$1 = (function (){var statearr_33597 = state_33594;
(statearr_33597[(8)] = inst_33571);

(statearr_33597[(9)] = inst_33548);

(statearr_33597[(10)] = inst_33549);

(statearr_33597[(11)] = inst_33546);

(statearr_33597[(12)] = inst_33547);

return statearr_33597;
})();
var statearr_33598_33638 = state_33594__$1;
(statearr_33598_33638[(2)] = null);

(statearr_33598_33638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (1))){
var state_33594__$1 = state_33594;
var statearr_33599_33639 = state_33594__$1;
(statearr_33599_33639[(2)] = null);

(statearr_33599_33639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (4))){
var inst_33535 = (state_33594[(13)]);
var inst_33535__$1 = (state_33594[(2)]);
var inst_33536 = (inst_33535__$1 == null);
var state_33594__$1 = (function (){var statearr_33600 = state_33594;
(statearr_33600[(13)] = inst_33535__$1);

return statearr_33600;
})();
if(cljs.core.truth_(inst_33536)){
var statearr_33601_33640 = state_33594__$1;
(statearr_33601_33640[(1)] = (5));

} else {
var statearr_33602_33641 = state_33594__$1;
(statearr_33602_33641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (15))){
var state_33594__$1 = state_33594;
var statearr_33606_33642 = state_33594__$1;
(statearr_33606_33642[(2)] = null);

(statearr_33606_33642[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (21))){
var state_33594__$1 = state_33594;
var statearr_33607_33643 = state_33594__$1;
(statearr_33607_33643[(2)] = null);

(statearr_33607_33643[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (13))){
var inst_33548 = (state_33594[(9)]);
var inst_33549 = (state_33594[(10)]);
var inst_33546 = (state_33594[(11)]);
var inst_33547 = (state_33594[(12)]);
var inst_33556 = (state_33594[(2)]);
var inst_33557 = (inst_33549 + (1));
var tmp33603 = inst_33548;
var tmp33604 = inst_33546;
var tmp33605 = inst_33547;
var inst_33546__$1 = tmp33604;
var inst_33547__$1 = tmp33605;
var inst_33548__$1 = tmp33603;
var inst_33549__$1 = inst_33557;
var state_33594__$1 = (function (){var statearr_33608 = state_33594;
(statearr_33608[(9)] = inst_33548__$1);

(statearr_33608[(10)] = inst_33549__$1);

(statearr_33608[(11)] = inst_33546__$1);

(statearr_33608[(14)] = inst_33556);

(statearr_33608[(12)] = inst_33547__$1);

return statearr_33608;
})();
var statearr_33609_33644 = state_33594__$1;
(statearr_33609_33644[(2)] = null);

(statearr_33609_33644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (22))){
var state_33594__$1 = state_33594;
var statearr_33610_33645 = state_33594__$1;
(statearr_33610_33645[(2)] = null);

(statearr_33610_33645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (6))){
var inst_33535 = (state_33594[(13)]);
var inst_33544 = f.call(null,inst_33535);
var inst_33545 = cljs.core.seq.call(null,inst_33544);
var inst_33546 = inst_33545;
var inst_33547 = null;
var inst_33548 = (0);
var inst_33549 = (0);
var state_33594__$1 = (function (){var statearr_33611 = state_33594;
(statearr_33611[(9)] = inst_33548);

(statearr_33611[(10)] = inst_33549);

(statearr_33611[(11)] = inst_33546);

(statearr_33611[(12)] = inst_33547);

return statearr_33611;
})();
var statearr_33612_33646 = state_33594__$1;
(statearr_33612_33646[(2)] = null);

(statearr_33612_33646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (17))){
var inst_33560 = (state_33594[(7)]);
var inst_33564 = cljs.core.chunk_first.call(null,inst_33560);
var inst_33565 = cljs.core.chunk_rest.call(null,inst_33560);
var inst_33566 = cljs.core.count.call(null,inst_33564);
var inst_33546 = inst_33565;
var inst_33547 = inst_33564;
var inst_33548 = inst_33566;
var inst_33549 = (0);
var state_33594__$1 = (function (){var statearr_33613 = state_33594;
(statearr_33613[(9)] = inst_33548);

(statearr_33613[(10)] = inst_33549);

(statearr_33613[(11)] = inst_33546);

(statearr_33613[(12)] = inst_33547);

return statearr_33613;
})();
var statearr_33614_33647 = state_33594__$1;
(statearr_33614_33647[(2)] = null);

(statearr_33614_33647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (3))){
var inst_33592 = (state_33594[(2)]);
var state_33594__$1 = state_33594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33594__$1,inst_33592);
} else {
if((state_val_33595 === (12))){
var inst_33580 = (state_33594[(2)]);
var state_33594__$1 = state_33594;
var statearr_33615_33648 = state_33594__$1;
(statearr_33615_33648[(2)] = inst_33580);

(statearr_33615_33648[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (2))){
var state_33594__$1 = state_33594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33594__$1,(4),in$);
} else {
if((state_val_33595 === (23))){
var inst_33588 = (state_33594[(2)]);
var state_33594__$1 = state_33594;
var statearr_33616_33649 = state_33594__$1;
(statearr_33616_33649[(2)] = inst_33588);

(statearr_33616_33649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (19))){
var inst_33575 = (state_33594[(2)]);
var state_33594__$1 = state_33594;
var statearr_33617_33650 = state_33594__$1;
(statearr_33617_33650[(2)] = inst_33575);

(statearr_33617_33650[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (11))){
var inst_33546 = (state_33594[(11)]);
var inst_33560 = (state_33594[(7)]);
var inst_33560__$1 = cljs.core.seq.call(null,inst_33546);
var state_33594__$1 = (function (){var statearr_33618 = state_33594;
(statearr_33618[(7)] = inst_33560__$1);

return statearr_33618;
})();
if(inst_33560__$1){
var statearr_33619_33651 = state_33594__$1;
(statearr_33619_33651[(1)] = (14));

} else {
var statearr_33620_33652 = state_33594__$1;
(statearr_33620_33652[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (9))){
var inst_33582 = (state_33594[(2)]);
var inst_33583 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33594__$1 = (function (){var statearr_33621 = state_33594;
(statearr_33621[(15)] = inst_33582);

return statearr_33621;
})();
if(cljs.core.truth_(inst_33583)){
var statearr_33622_33653 = state_33594__$1;
(statearr_33622_33653[(1)] = (21));

} else {
var statearr_33623_33654 = state_33594__$1;
(statearr_33623_33654[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (5))){
var inst_33538 = cljs.core.async.close_BANG_.call(null,out);
var state_33594__$1 = state_33594;
var statearr_33624_33655 = state_33594__$1;
(statearr_33624_33655[(2)] = inst_33538);

(statearr_33624_33655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (14))){
var inst_33560 = (state_33594[(7)]);
var inst_33562 = cljs.core.chunked_seq_QMARK_.call(null,inst_33560);
var state_33594__$1 = state_33594;
if(inst_33562){
var statearr_33625_33656 = state_33594__$1;
(statearr_33625_33656[(1)] = (17));

} else {
var statearr_33626_33657 = state_33594__$1;
(statearr_33626_33657[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (16))){
var inst_33578 = (state_33594[(2)]);
var state_33594__$1 = state_33594;
var statearr_33627_33658 = state_33594__$1;
(statearr_33627_33658[(2)] = inst_33578);

(statearr_33627_33658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (10))){
var inst_33549 = (state_33594[(10)]);
var inst_33547 = (state_33594[(12)]);
var inst_33554 = cljs.core._nth.call(null,inst_33547,inst_33549);
var state_33594__$1 = state_33594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33594__$1,(13),out,inst_33554);
} else {
if((state_val_33595 === (18))){
var inst_33560 = (state_33594[(7)]);
var inst_33569 = cljs.core.first.call(null,inst_33560);
var state_33594__$1 = state_33594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33594__$1,(20),out,inst_33569);
} else {
if((state_val_33595 === (8))){
var inst_33548 = (state_33594[(9)]);
var inst_33549 = (state_33594[(10)]);
var inst_33551 = (inst_33549 < inst_33548);
var inst_33552 = inst_33551;
var state_33594__$1 = state_33594;
if(cljs.core.truth_(inst_33552)){
var statearr_33628_33659 = state_33594__$1;
(statearr_33628_33659[(1)] = (10));

} else {
var statearr_33629_33660 = state_33594__$1;
(statearr_33629_33660[(1)] = (11));

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
});})(c__31119__auto__))
;
return ((function (switch__31005__auto__,c__31119__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31006__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31006__auto____0 = (function (){
var statearr_33633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33633[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31006__auto__);

(statearr_33633[(1)] = (1));

return statearr_33633;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31006__auto____1 = (function (state_33594){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_33594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e33634){if((e33634 instanceof Object)){
var ex__31009__auto__ = e33634;
var statearr_33635_33661 = state_33594;
(statearr_33635_33661[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33662 = state_33594;
state_33594 = G__33662;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31006__auto__ = function(state_33594){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31006__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31006__auto____1.call(this,state_33594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31006__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31006__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto__))
})();
var state__31121__auto__ = (function (){var statearr_33636 = f__31120__auto__.call(null);
(statearr_33636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto__);

return statearr_33636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto__))
);

return c__31119__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33663 = [];
var len__27904__auto___33666 = arguments.length;
var i__27905__auto___33667 = (0);
while(true){
if((i__27905__auto___33667 < len__27904__auto___33666)){
args33663.push((arguments[i__27905__auto___33667]));

var G__33668 = (i__27905__auto___33667 + (1));
i__27905__auto___33667 = G__33668;
continue;
} else {
}
break;
}

var G__33665 = args33663.length;
switch (G__33665) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33663.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args33670 = [];
var len__27904__auto___33673 = arguments.length;
var i__27905__auto___33674 = (0);
while(true){
if((i__27905__auto___33674 < len__27904__auto___33673)){
args33670.push((arguments[i__27905__auto___33674]));

var G__33675 = (i__27905__auto___33674 + (1));
i__27905__auto___33674 = G__33675;
continue;
} else {
}
break;
}

var G__33672 = args33670.length;
switch (G__33672) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33670.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args33677 = [];
var len__27904__auto___33728 = arguments.length;
var i__27905__auto___33729 = (0);
while(true){
if((i__27905__auto___33729 < len__27904__auto___33728)){
args33677.push((arguments[i__27905__auto___33729]));

var G__33730 = (i__27905__auto___33729 + (1));
i__27905__auto___33729 = G__33730;
continue;
} else {
}
break;
}

var G__33679 = args33677.length;
switch (G__33679) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33677.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31119__auto___33732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto___33732,out){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto___33732,out){
return (function (state_33703){
var state_val_33704 = (state_33703[(1)]);
if((state_val_33704 === (7))){
var inst_33698 = (state_33703[(2)]);
var state_33703__$1 = state_33703;
var statearr_33705_33733 = state_33703__$1;
(statearr_33705_33733[(2)] = inst_33698);

(statearr_33705_33733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33704 === (1))){
var inst_33680 = null;
var state_33703__$1 = (function (){var statearr_33706 = state_33703;
(statearr_33706[(7)] = inst_33680);

return statearr_33706;
})();
var statearr_33707_33734 = state_33703__$1;
(statearr_33707_33734[(2)] = null);

(statearr_33707_33734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33704 === (4))){
var inst_33683 = (state_33703[(8)]);
var inst_33683__$1 = (state_33703[(2)]);
var inst_33684 = (inst_33683__$1 == null);
var inst_33685 = cljs.core.not.call(null,inst_33684);
var state_33703__$1 = (function (){var statearr_33708 = state_33703;
(statearr_33708[(8)] = inst_33683__$1);

return statearr_33708;
})();
if(inst_33685){
var statearr_33709_33735 = state_33703__$1;
(statearr_33709_33735[(1)] = (5));

} else {
var statearr_33710_33736 = state_33703__$1;
(statearr_33710_33736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33704 === (6))){
var state_33703__$1 = state_33703;
var statearr_33711_33737 = state_33703__$1;
(statearr_33711_33737[(2)] = null);

(statearr_33711_33737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33704 === (3))){
var inst_33700 = (state_33703[(2)]);
var inst_33701 = cljs.core.async.close_BANG_.call(null,out);
var state_33703__$1 = (function (){var statearr_33712 = state_33703;
(statearr_33712[(9)] = inst_33700);

return statearr_33712;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33703__$1,inst_33701);
} else {
if((state_val_33704 === (2))){
var state_33703__$1 = state_33703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33703__$1,(4),ch);
} else {
if((state_val_33704 === (11))){
var inst_33683 = (state_33703[(8)]);
var inst_33692 = (state_33703[(2)]);
var inst_33680 = inst_33683;
var state_33703__$1 = (function (){var statearr_33713 = state_33703;
(statearr_33713[(10)] = inst_33692);

(statearr_33713[(7)] = inst_33680);

return statearr_33713;
})();
var statearr_33714_33738 = state_33703__$1;
(statearr_33714_33738[(2)] = null);

(statearr_33714_33738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33704 === (9))){
var inst_33683 = (state_33703[(8)]);
var state_33703__$1 = state_33703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33703__$1,(11),out,inst_33683);
} else {
if((state_val_33704 === (5))){
var inst_33680 = (state_33703[(7)]);
var inst_33683 = (state_33703[(8)]);
var inst_33687 = cljs.core._EQ_.call(null,inst_33683,inst_33680);
var state_33703__$1 = state_33703;
if(inst_33687){
var statearr_33716_33739 = state_33703__$1;
(statearr_33716_33739[(1)] = (8));

} else {
var statearr_33717_33740 = state_33703__$1;
(statearr_33717_33740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33704 === (10))){
var inst_33695 = (state_33703[(2)]);
var state_33703__$1 = state_33703;
var statearr_33718_33741 = state_33703__$1;
(statearr_33718_33741[(2)] = inst_33695);

(statearr_33718_33741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33704 === (8))){
var inst_33680 = (state_33703[(7)]);
var tmp33715 = inst_33680;
var inst_33680__$1 = tmp33715;
var state_33703__$1 = (function (){var statearr_33719 = state_33703;
(statearr_33719[(7)] = inst_33680__$1);

return statearr_33719;
})();
var statearr_33720_33742 = state_33703__$1;
(statearr_33720_33742[(2)] = null);

(statearr_33720_33742[(1)] = (2));


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
});})(c__31119__auto___33732,out))
;
return ((function (switch__31005__auto__,c__31119__auto___33732,out){
return (function() {
var cljs$core$async$state_machine__31006__auto__ = null;
var cljs$core$async$state_machine__31006__auto____0 = (function (){
var statearr_33724 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33724[(0)] = cljs$core$async$state_machine__31006__auto__);

(statearr_33724[(1)] = (1));

return statearr_33724;
});
var cljs$core$async$state_machine__31006__auto____1 = (function (state_33703){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_33703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e33725){if((e33725 instanceof Object)){
var ex__31009__auto__ = e33725;
var statearr_33726_33743 = state_33703;
(statearr_33726_33743[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33744 = state_33703;
state_33703 = G__33744;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
cljs$core$async$state_machine__31006__auto__ = function(state_33703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31006__auto____1.call(this,state_33703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31006__auto____0;
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31006__auto____1;
return cljs$core$async$state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto___33732,out))
})();
var state__31121__auto__ = (function (){var statearr_33727 = f__31120__auto__.call(null);
(statearr_33727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto___33732);

return statearr_33727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto___33732,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33745 = [];
var len__27904__auto___33815 = arguments.length;
var i__27905__auto___33816 = (0);
while(true){
if((i__27905__auto___33816 < len__27904__auto___33815)){
args33745.push((arguments[i__27905__auto___33816]));

var G__33817 = (i__27905__auto___33816 + (1));
i__27905__auto___33816 = G__33817;
continue;
} else {
}
break;
}

var G__33747 = args33745.length;
switch (G__33747) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33745.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31119__auto___33819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto___33819,out){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto___33819,out){
return (function (state_33785){
var state_val_33786 = (state_33785[(1)]);
if((state_val_33786 === (7))){
var inst_33781 = (state_33785[(2)]);
var state_33785__$1 = state_33785;
var statearr_33787_33820 = state_33785__$1;
(statearr_33787_33820[(2)] = inst_33781);

(statearr_33787_33820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (1))){
var inst_33748 = (new Array(n));
var inst_33749 = inst_33748;
var inst_33750 = (0);
var state_33785__$1 = (function (){var statearr_33788 = state_33785;
(statearr_33788[(7)] = inst_33749);

(statearr_33788[(8)] = inst_33750);

return statearr_33788;
})();
var statearr_33789_33821 = state_33785__$1;
(statearr_33789_33821[(2)] = null);

(statearr_33789_33821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (4))){
var inst_33753 = (state_33785[(9)]);
var inst_33753__$1 = (state_33785[(2)]);
var inst_33754 = (inst_33753__$1 == null);
var inst_33755 = cljs.core.not.call(null,inst_33754);
var state_33785__$1 = (function (){var statearr_33790 = state_33785;
(statearr_33790[(9)] = inst_33753__$1);

return statearr_33790;
})();
if(inst_33755){
var statearr_33791_33822 = state_33785__$1;
(statearr_33791_33822[(1)] = (5));

} else {
var statearr_33792_33823 = state_33785__$1;
(statearr_33792_33823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (15))){
var inst_33775 = (state_33785[(2)]);
var state_33785__$1 = state_33785;
var statearr_33793_33824 = state_33785__$1;
(statearr_33793_33824[(2)] = inst_33775);

(statearr_33793_33824[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (13))){
var state_33785__$1 = state_33785;
var statearr_33794_33825 = state_33785__$1;
(statearr_33794_33825[(2)] = null);

(statearr_33794_33825[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (6))){
var inst_33750 = (state_33785[(8)]);
var inst_33771 = (inst_33750 > (0));
var state_33785__$1 = state_33785;
if(cljs.core.truth_(inst_33771)){
var statearr_33795_33826 = state_33785__$1;
(statearr_33795_33826[(1)] = (12));

} else {
var statearr_33796_33827 = state_33785__$1;
(statearr_33796_33827[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (3))){
var inst_33783 = (state_33785[(2)]);
var state_33785__$1 = state_33785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33785__$1,inst_33783);
} else {
if((state_val_33786 === (12))){
var inst_33749 = (state_33785[(7)]);
var inst_33773 = cljs.core.vec.call(null,inst_33749);
var state_33785__$1 = state_33785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33785__$1,(15),out,inst_33773);
} else {
if((state_val_33786 === (2))){
var state_33785__$1 = state_33785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33785__$1,(4),ch);
} else {
if((state_val_33786 === (11))){
var inst_33765 = (state_33785[(2)]);
var inst_33766 = (new Array(n));
var inst_33749 = inst_33766;
var inst_33750 = (0);
var state_33785__$1 = (function (){var statearr_33797 = state_33785;
(statearr_33797[(7)] = inst_33749);

(statearr_33797[(8)] = inst_33750);

(statearr_33797[(10)] = inst_33765);

return statearr_33797;
})();
var statearr_33798_33828 = state_33785__$1;
(statearr_33798_33828[(2)] = null);

(statearr_33798_33828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (9))){
var inst_33749 = (state_33785[(7)]);
var inst_33763 = cljs.core.vec.call(null,inst_33749);
var state_33785__$1 = state_33785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33785__$1,(11),out,inst_33763);
} else {
if((state_val_33786 === (5))){
var inst_33749 = (state_33785[(7)]);
var inst_33750 = (state_33785[(8)]);
var inst_33758 = (state_33785[(11)]);
var inst_33753 = (state_33785[(9)]);
var inst_33757 = (inst_33749[inst_33750] = inst_33753);
var inst_33758__$1 = (inst_33750 + (1));
var inst_33759 = (inst_33758__$1 < n);
var state_33785__$1 = (function (){var statearr_33799 = state_33785;
(statearr_33799[(11)] = inst_33758__$1);

(statearr_33799[(12)] = inst_33757);

return statearr_33799;
})();
if(cljs.core.truth_(inst_33759)){
var statearr_33800_33829 = state_33785__$1;
(statearr_33800_33829[(1)] = (8));

} else {
var statearr_33801_33830 = state_33785__$1;
(statearr_33801_33830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (14))){
var inst_33778 = (state_33785[(2)]);
var inst_33779 = cljs.core.async.close_BANG_.call(null,out);
var state_33785__$1 = (function (){var statearr_33803 = state_33785;
(statearr_33803[(13)] = inst_33778);

return statearr_33803;
})();
var statearr_33804_33831 = state_33785__$1;
(statearr_33804_33831[(2)] = inst_33779);

(statearr_33804_33831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (10))){
var inst_33769 = (state_33785[(2)]);
var state_33785__$1 = state_33785;
var statearr_33805_33832 = state_33785__$1;
(statearr_33805_33832[(2)] = inst_33769);

(statearr_33805_33832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33786 === (8))){
var inst_33749 = (state_33785[(7)]);
var inst_33758 = (state_33785[(11)]);
var tmp33802 = inst_33749;
var inst_33749__$1 = tmp33802;
var inst_33750 = inst_33758;
var state_33785__$1 = (function (){var statearr_33806 = state_33785;
(statearr_33806[(7)] = inst_33749__$1);

(statearr_33806[(8)] = inst_33750);

return statearr_33806;
})();
var statearr_33807_33833 = state_33785__$1;
(statearr_33807_33833[(2)] = null);

(statearr_33807_33833[(1)] = (2));


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
});})(c__31119__auto___33819,out))
;
return ((function (switch__31005__auto__,c__31119__auto___33819,out){
return (function() {
var cljs$core$async$state_machine__31006__auto__ = null;
var cljs$core$async$state_machine__31006__auto____0 = (function (){
var statearr_33811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33811[(0)] = cljs$core$async$state_machine__31006__auto__);

(statearr_33811[(1)] = (1));

return statearr_33811;
});
var cljs$core$async$state_machine__31006__auto____1 = (function (state_33785){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_33785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e33812){if((e33812 instanceof Object)){
var ex__31009__auto__ = e33812;
var statearr_33813_33834 = state_33785;
(statearr_33813_33834[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33835 = state_33785;
state_33785 = G__33835;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
cljs$core$async$state_machine__31006__auto__ = function(state_33785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31006__auto____1.call(this,state_33785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31006__auto____0;
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31006__auto____1;
return cljs$core$async$state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto___33819,out))
})();
var state__31121__auto__ = (function (){var statearr_33814 = f__31120__auto__.call(null);
(statearr_33814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto___33819);

return statearr_33814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto___33819,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33836 = [];
var len__27904__auto___33910 = arguments.length;
var i__27905__auto___33911 = (0);
while(true){
if((i__27905__auto___33911 < len__27904__auto___33910)){
args33836.push((arguments[i__27905__auto___33911]));

var G__33912 = (i__27905__auto___33911 + (1));
i__27905__auto___33911 = G__33912;
continue;
} else {
}
break;
}

var G__33838 = args33836.length;
switch (G__33838) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33836.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31119__auto___33914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31119__auto___33914,out){
return (function (){
var f__31120__auto__ = (function (){var switch__31005__auto__ = ((function (c__31119__auto___33914,out){
return (function (state_33880){
var state_val_33881 = (state_33880[(1)]);
if((state_val_33881 === (7))){
var inst_33876 = (state_33880[(2)]);
var state_33880__$1 = state_33880;
var statearr_33882_33915 = state_33880__$1;
(statearr_33882_33915[(2)] = inst_33876);

(statearr_33882_33915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (1))){
var inst_33839 = [];
var inst_33840 = inst_33839;
var inst_33841 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33880__$1 = (function (){var statearr_33883 = state_33880;
(statearr_33883[(7)] = inst_33840);

(statearr_33883[(8)] = inst_33841);

return statearr_33883;
})();
var statearr_33884_33916 = state_33880__$1;
(statearr_33884_33916[(2)] = null);

(statearr_33884_33916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (4))){
var inst_33844 = (state_33880[(9)]);
var inst_33844__$1 = (state_33880[(2)]);
var inst_33845 = (inst_33844__$1 == null);
var inst_33846 = cljs.core.not.call(null,inst_33845);
var state_33880__$1 = (function (){var statearr_33885 = state_33880;
(statearr_33885[(9)] = inst_33844__$1);

return statearr_33885;
})();
if(inst_33846){
var statearr_33886_33917 = state_33880__$1;
(statearr_33886_33917[(1)] = (5));

} else {
var statearr_33887_33918 = state_33880__$1;
(statearr_33887_33918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (15))){
var inst_33870 = (state_33880[(2)]);
var state_33880__$1 = state_33880;
var statearr_33888_33919 = state_33880__$1;
(statearr_33888_33919[(2)] = inst_33870);

(statearr_33888_33919[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (13))){
var state_33880__$1 = state_33880;
var statearr_33889_33920 = state_33880__$1;
(statearr_33889_33920[(2)] = null);

(statearr_33889_33920[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (6))){
var inst_33840 = (state_33880[(7)]);
var inst_33865 = inst_33840.length;
var inst_33866 = (inst_33865 > (0));
var state_33880__$1 = state_33880;
if(cljs.core.truth_(inst_33866)){
var statearr_33890_33921 = state_33880__$1;
(statearr_33890_33921[(1)] = (12));

} else {
var statearr_33891_33922 = state_33880__$1;
(statearr_33891_33922[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (3))){
var inst_33878 = (state_33880[(2)]);
var state_33880__$1 = state_33880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33880__$1,inst_33878);
} else {
if((state_val_33881 === (12))){
var inst_33840 = (state_33880[(7)]);
var inst_33868 = cljs.core.vec.call(null,inst_33840);
var state_33880__$1 = state_33880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33880__$1,(15),out,inst_33868);
} else {
if((state_val_33881 === (2))){
var state_33880__$1 = state_33880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33880__$1,(4),ch);
} else {
if((state_val_33881 === (11))){
var inst_33844 = (state_33880[(9)]);
var inst_33848 = (state_33880[(10)]);
var inst_33858 = (state_33880[(2)]);
var inst_33859 = [];
var inst_33860 = inst_33859.push(inst_33844);
var inst_33840 = inst_33859;
var inst_33841 = inst_33848;
var state_33880__$1 = (function (){var statearr_33892 = state_33880;
(statearr_33892[(11)] = inst_33860);

(statearr_33892[(7)] = inst_33840);

(statearr_33892[(8)] = inst_33841);

(statearr_33892[(12)] = inst_33858);

return statearr_33892;
})();
var statearr_33893_33923 = state_33880__$1;
(statearr_33893_33923[(2)] = null);

(statearr_33893_33923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (9))){
var inst_33840 = (state_33880[(7)]);
var inst_33856 = cljs.core.vec.call(null,inst_33840);
var state_33880__$1 = state_33880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33880__$1,(11),out,inst_33856);
} else {
if((state_val_33881 === (5))){
var inst_33841 = (state_33880[(8)]);
var inst_33844 = (state_33880[(9)]);
var inst_33848 = (state_33880[(10)]);
var inst_33848__$1 = f.call(null,inst_33844);
var inst_33849 = cljs.core._EQ_.call(null,inst_33848__$1,inst_33841);
var inst_33850 = cljs.core.keyword_identical_QMARK_.call(null,inst_33841,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33851 = (inst_33849) || (inst_33850);
var state_33880__$1 = (function (){var statearr_33894 = state_33880;
(statearr_33894[(10)] = inst_33848__$1);

return statearr_33894;
})();
if(cljs.core.truth_(inst_33851)){
var statearr_33895_33924 = state_33880__$1;
(statearr_33895_33924[(1)] = (8));

} else {
var statearr_33896_33925 = state_33880__$1;
(statearr_33896_33925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (14))){
var inst_33873 = (state_33880[(2)]);
var inst_33874 = cljs.core.async.close_BANG_.call(null,out);
var state_33880__$1 = (function (){var statearr_33898 = state_33880;
(statearr_33898[(13)] = inst_33873);

return statearr_33898;
})();
var statearr_33899_33926 = state_33880__$1;
(statearr_33899_33926[(2)] = inst_33874);

(statearr_33899_33926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (10))){
var inst_33863 = (state_33880[(2)]);
var state_33880__$1 = state_33880;
var statearr_33900_33927 = state_33880__$1;
(statearr_33900_33927[(2)] = inst_33863);

(statearr_33900_33927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33881 === (8))){
var inst_33840 = (state_33880[(7)]);
var inst_33844 = (state_33880[(9)]);
var inst_33848 = (state_33880[(10)]);
var inst_33853 = inst_33840.push(inst_33844);
var tmp33897 = inst_33840;
var inst_33840__$1 = tmp33897;
var inst_33841 = inst_33848;
var state_33880__$1 = (function (){var statearr_33901 = state_33880;
(statearr_33901[(7)] = inst_33840__$1);

(statearr_33901[(14)] = inst_33853);

(statearr_33901[(8)] = inst_33841);

return statearr_33901;
})();
var statearr_33902_33928 = state_33880__$1;
(statearr_33902_33928[(2)] = null);

(statearr_33902_33928[(1)] = (2));


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
});})(c__31119__auto___33914,out))
;
return ((function (switch__31005__auto__,c__31119__auto___33914,out){
return (function() {
var cljs$core$async$state_machine__31006__auto__ = null;
var cljs$core$async$state_machine__31006__auto____0 = (function (){
var statearr_33906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33906[(0)] = cljs$core$async$state_machine__31006__auto__);

(statearr_33906[(1)] = (1));

return statearr_33906;
});
var cljs$core$async$state_machine__31006__auto____1 = (function (state_33880){
while(true){
var ret_value__31007__auto__ = (function (){try{while(true){
var result__31008__auto__ = switch__31005__auto__.call(null,state_33880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31008__auto__;
}
break;
}
}catch (e33907){if((e33907 instanceof Object)){
var ex__31009__auto__ = e33907;
var statearr_33908_33929 = state_33880;
(statearr_33908_33929[(5)] = ex__31009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33930 = state_33880;
state_33880 = G__33930;
continue;
} else {
return ret_value__31007__auto__;
}
break;
}
});
cljs$core$async$state_machine__31006__auto__ = function(state_33880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31006__auto____1.call(this,state_33880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31006__auto____0;
cljs$core$async$state_machine__31006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31006__auto____1;
return cljs$core$async$state_machine__31006__auto__;
})()
;})(switch__31005__auto__,c__31119__auto___33914,out))
})();
var state__31121__auto__ = (function (){var statearr_33909 = f__31120__auto__.call(null);
(statearr_33909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31119__auto___33914);

return statearr_33909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31121__auto__);
});})(c__31119__auto___33914,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1486282651553