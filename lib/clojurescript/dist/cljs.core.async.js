var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
require("./cljs.core.js");
require("./cljs.core.async.impl.protocols.js");
require("./cljs.core.async.impl.channels.js");
require("./cljs.core.async.impl.buffers.js");
require("./cljs.core.async.impl.timers.js");
require("./cljs.core.async.impl.dispatch.js");
require("./cljs.core.async.impl.ioc_helpers.js");
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;

goog.dependencies_.written["cljs.core.async.js"] = true;

goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28656 = arguments.length;
switch (G__28656) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28657 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28657 = (function (f,blockable,meta28658){
this.f = f;
this.blockable = blockable;
this.meta28658 = meta28658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28659,meta28658__$1){
var self__ = this;
var _28659__$1 = this;
return (new cljs.core.async.t_cljs$core$async28657(self__.f,self__.blockable,meta28658__$1));
});

cljs.core.async.t_cljs$core$async28657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28659){
var self__ = this;
var _28659__$1 = this;
return self__.meta28658;
});

cljs.core.async.t_cljs$core$async28657.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28657.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28657.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28657.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28657.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28658","meta28658",905778634,null)], null);
});

cljs.core.async.t_cljs$core$async28657.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28657";

cljs.core.async.t_cljs$core$async28657.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async28657");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28657.
 */
cljs.core.async.__GT_t_cljs$core$async28657 = (function cljs$core$async$__GT_t_cljs$core$async28657(f__$1,blockable__$1,meta28658){
return (new cljs.core.async.t_cljs$core$async28657(f__$1,blockable__$1,meta28658));
});

}

return (new cljs.core.async.t_cljs$core$async28657(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__28673 = arguments.length;
switch (G__28673) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__28676 = arguments.length;
switch (G__28676) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__28685 = arguments.length;
switch (G__28685) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_28696 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_28696) : fn1.call(null,val_28696));
} else {
cljs.core.async.impl.dispatch.run(((function (val_28696,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_28696) : fn1.call(null,val_28696));
});})(val_28696,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__28774 = arguments.length;
switch (G__28774) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___28776 = n;
var x_28777 = (0);
while(true){
if((x_28777 < n__4376__auto___28776)){
(a[x_28777] = (0));

var G__28778 = (x_28777 + (1));
x_28777 = G__28778;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__28779 = (i + (1));
i = G__28779;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async28780 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28780 = (function (flag,meta28781){
this.flag = flag;
this.meta28781 = meta28781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28782,meta28781__$1){
var self__ = this;
var _28782__$1 = this;
return (new cljs.core.async.t_cljs$core$async28780(self__.flag,meta28781__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28780.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28782){
var self__ = this;
var _28782__$1 = this;
return self__.meta28781;
});})(flag))
;

cljs.core.async.t_cljs$core$async28780.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28780.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28780.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28780.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28780.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28781","meta28781",517651658,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28780.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28780";

cljs.core.async.t_cljs$core$async28780.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async28780");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28780.
 */
cljs.core.async.__GT_t_cljs$core$async28780 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28780(flag__$1,meta28781){
return (new cljs.core.async.t_cljs$core$async28780(flag__$1,meta28781));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28780(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28783 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28783 = (function (flag,cb,meta28784){
this.flag = flag;
this.cb = cb;
this.meta28784 = meta28784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28785,meta28784__$1){
var self__ = this;
var _28785__$1 = this;
return (new cljs.core.async.t_cljs$core$async28783(self__.flag,self__.cb,meta28784__$1));
});

cljs.core.async.t_cljs$core$async28783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28785){
var self__ = this;
var _28785__$1 = this;
return self__.meta28784;
});

cljs.core.async.t_cljs$core$async28783.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28783.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async28783.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28783.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28784","meta28784",-434754772,null)], null);
});

cljs.core.async.t_cljs$core$async28783.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28783";

cljs.core.async.t_cljs$core$async28783.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async28783");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28783.
 */
cljs.core.async.__GT_t_cljs$core$async28783 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28783(flag__$1,cb__$1,meta28784){
return (new cljs.core.async.t_cljs$core$async28783(flag__$1,cb__$1,meta28784));
});

}

return (new cljs.core.async.t_cljs$core$async28783(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28786_SHARP_){
var G__28788 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28786_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28788) : fret.call(null,G__28788));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28787_SHARP_){
var G__28789 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28787_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28789) : fret.call(null,G__28789));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28790 = (i + (1));
i = G__28790;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4502__auto__ = [];
var len__4499__auto___28796 = arguments.length;
var i__4500__auto___28797 = (0);
while(true){
if((i__4500__auto___28797 < len__4499__auto___28796)){
args__4502__auto__.push((arguments[i__4500__auto___28797]));

var G__28798 = (i__4500__auto___28797 + (1));
i__4500__auto___28797 = G__28798;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28793){
var map__28794 = p__28793;
var map__28794__$1 = ((((!((map__28794 == null)))?(((((map__28794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28794):map__28794);
var opts = map__28794__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28791){
var G__28792 = cljs.core.first(seq28791);
var seq28791__$1 = cljs.core.next(seq28791);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28792,seq28791__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__28800 = arguments.length;
switch (G__28800) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28598__auto___28846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28598__auto___28846){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (c__28598__auto___28846){
return (function (state_28824){
var state_val_28825 = (state_28824[(1)]);
if((state_val_28825 === (7))){
var inst_28820 = (state_28824[(2)]);
var state_28824__$1 = state_28824;
var statearr_28826_28847 = state_28824__$1;
(statearr_28826_28847[(2)] = inst_28820);

(statearr_28826_28847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (1))){
var state_28824__$1 = state_28824;
var statearr_28827_28848 = state_28824__$1;
(statearr_28827_28848[(2)] = null);

(statearr_28827_28848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (4))){
var inst_28803 = (state_28824[(7)]);
var inst_28803__$1 = (state_28824[(2)]);
var inst_28804 = (inst_28803__$1 == null);
var state_28824__$1 = (function (){var statearr_28828 = state_28824;
(statearr_28828[(7)] = inst_28803__$1);

return statearr_28828;
})();
if(cljs.core.truth_(inst_28804)){
var statearr_28829_28849 = state_28824__$1;
(statearr_28829_28849[(1)] = (5));

} else {
var statearr_28830_28850 = state_28824__$1;
(statearr_28830_28850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (13))){
var state_28824__$1 = state_28824;
var statearr_28831_28851 = state_28824__$1;
(statearr_28831_28851[(2)] = null);

(statearr_28831_28851[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (6))){
var inst_28803 = (state_28824[(7)]);
var state_28824__$1 = state_28824;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28824__$1,(11),to,inst_28803);
} else {
if((state_val_28825 === (3))){
var inst_28822 = (state_28824[(2)]);
var state_28824__$1 = state_28824;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28824__$1,inst_28822);
} else {
if((state_val_28825 === (12))){
var state_28824__$1 = state_28824;
var statearr_28832_28852 = state_28824__$1;
(statearr_28832_28852[(2)] = null);

(statearr_28832_28852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (2))){
var state_28824__$1 = state_28824;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28824__$1,(4),from);
} else {
if((state_val_28825 === (11))){
var inst_28813 = (state_28824[(2)]);
var state_28824__$1 = state_28824;
if(cljs.core.truth_(inst_28813)){
var statearr_28833_28853 = state_28824__$1;
(statearr_28833_28853[(1)] = (12));

} else {
var statearr_28834_28854 = state_28824__$1;
(statearr_28834_28854[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (9))){
var state_28824__$1 = state_28824;
var statearr_28835_28855 = state_28824__$1;
(statearr_28835_28855[(2)] = null);

(statearr_28835_28855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (5))){
var state_28824__$1 = state_28824;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28836_28856 = state_28824__$1;
(statearr_28836_28856[(1)] = (8));

} else {
var statearr_28837_28857 = state_28824__$1;
(statearr_28837_28857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (14))){
var inst_28818 = (state_28824[(2)]);
var state_28824__$1 = state_28824;
var statearr_28838_28858 = state_28824__$1;
(statearr_28838_28858[(2)] = inst_28818);

(statearr_28838_28858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (10))){
var inst_28810 = (state_28824[(2)]);
var state_28824__$1 = state_28824;
var statearr_28839_28859 = state_28824__$1;
(statearr_28839_28859[(2)] = inst_28810);

(statearr_28839_28859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28825 === (8))){
var inst_28807 = cljs.core.async.close_BANG_(to);
var state_28824__$1 = state_28824;
var statearr_28840_28860 = state_28824__$1;
(statearr_28840_28860[(2)] = inst_28807);

(statearr_28840_28860[(1)] = (10));


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
});})(c__28598__auto___28846))
;
return ((function (switch__28366__auto__,c__28598__auto___28846){
return (function() {
var cljs$core$async$state_machine__28367__auto__ = null;
var cljs$core$async$state_machine__28367__auto____0 = (function (){
var statearr_28841 = [null,null,null,null,null,null,null,null];
(statearr_28841[(0)] = cljs$core$async$state_machine__28367__auto__);

(statearr_28841[(1)] = (1));

return statearr_28841;
});
var cljs$core$async$state_machine__28367__auto____1 = (function (state_28824){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_28824);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e28842){if((e28842 instanceof Object)){
var ex__28370__auto__ = e28842;
var statearr_28843_28861 = state_28824;
(statearr_28843_28861[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28842;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28862 = state_28824;
state_28824 = G__28862;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
cljs$core$async$state_machine__28367__auto__ = function(state_28824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28367__auto____1.call(this,state_28824);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28367__auto____0;
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28367__auto____1;
return cljs$core$async$state_machine__28367__auto__;
})()
;})(switch__28366__auto__,c__28598__auto___28846))
})();
var state__28600__auto__ = (function (){var statearr_28844 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_28844[(6)] = c__28598__auto___28846);

return statearr_28844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(c__28598__auto___28846))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__28863){
var vec__28864 = p__28863;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28864,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28864,(1),null);
var job = vec__28864;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28598__auto___29035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28598__auto___29035,res,vec__28864,v,p,job,jobs,results){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (c__28598__auto___29035,res,vec__28864,v,p,job,jobs,results){
return (function (state_28871){
var state_val_28872 = (state_28871[(1)]);
if((state_val_28872 === (1))){
var state_28871__$1 = state_28871;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28871__$1,(2),res,v);
} else {
if((state_val_28872 === (2))){
var inst_28868 = (state_28871[(2)]);
var inst_28869 = cljs.core.async.close_BANG_(res);
var state_28871__$1 = (function (){var statearr_28873 = state_28871;
(statearr_28873[(7)] = inst_28868);

return statearr_28873;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28871__$1,inst_28869);
} else {
return null;
}
}
});})(c__28598__auto___29035,res,vec__28864,v,p,job,jobs,results))
;
return ((function (switch__28366__auto__,c__28598__auto___29035,res,vec__28864,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____0 = (function (){
var statearr_28874 = [null,null,null,null,null,null,null,null];
(statearr_28874[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__);

(statearr_28874[(1)] = (1));

return statearr_28874;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____1 = (function (state_28871){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_28871);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e28875){if((e28875 instanceof Object)){
var ex__28370__auto__ = e28875;
var statearr_28876_29036 = state_28871;
(statearr_28876_29036[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28875;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29037 = state_28871;
state_28871 = G__29037;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__ = function(state_28871){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____1.call(this,state_28871);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__;
})()
;})(switch__28366__auto__,c__28598__auto___29035,res,vec__28864,v,p,job,jobs,results))
})();
var state__28600__auto__ = (function (){var statearr_28877 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_28877[(6)] = c__28598__auto___29035);

return statearr_28877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(c__28598__auto___29035,res,vec__28864,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28878){
var vec__28879 = p__28878;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28879,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28879,(1),null);
var job = vec__28879;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___29038 = n;
var __29039 = (0);
while(true){
if((__29039 < n__4376__auto___29038)){
var G__28882_29040 = type;
var G__28882_29041__$1 = (((G__28882_29040 instanceof cljs.core.Keyword))?G__28882_29040.fqn:null);
switch (G__28882_29041__$1) {
case "compute":
var c__28598__auto___29043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29039,c__28598__auto___29043,G__28882_29040,G__28882_29041__$1,n__4376__auto___29038,jobs,results,process,async){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (__29039,c__28598__auto___29043,G__28882_29040,G__28882_29041__$1,n__4376__auto___29038,jobs,results,process,async){
return (function (state_28895){
var state_val_28896 = (state_28895[(1)]);
if((state_val_28896 === (1))){
var state_28895__$1 = state_28895;
var statearr_28897_29044 = state_28895__$1;
(statearr_28897_29044[(2)] = null);

(statearr_28897_29044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (2))){
var state_28895__$1 = state_28895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28895__$1,(4),jobs);
} else {
if((state_val_28896 === (3))){
var inst_28893 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28895__$1,inst_28893);
} else {
if((state_val_28896 === (4))){
var inst_28885 = (state_28895[(2)]);
var inst_28886 = process(inst_28885);
var state_28895__$1 = state_28895;
if(cljs.core.truth_(inst_28886)){
var statearr_28898_29045 = state_28895__$1;
(statearr_28898_29045[(1)] = (5));

} else {
var statearr_28899_29046 = state_28895__$1;
(statearr_28899_29046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (5))){
var state_28895__$1 = state_28895;
var statearr_28900_29047 = state_28895__$1;
(statearr_28900_29047[(2)] = null);

(statearr_28900_29047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (6))){
var state_28895__$1 = state_28895;
var statearr_28901_29048 = state_28895__$1;
(statearr_28901_29048[(2)] = null);

(statearr_28901_29048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (7))){
var inst_28891 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
var statearr_28902_29049 = state_28895__$1;
(statearr_28902_29049[(2)] = inst_28891);

(statearr_28902_29049[(1)] = (3));


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
});})(__29039,c__28598__auto___29043,G__28882_29040,G__28882_29041__$1,n__4376__auto___29038,jobs,results,process,async))
;
return ((function (__29039,switch__28366__auto__,c__28598__auto___29043,G__28882_29040,G__28882_29041__$1,n__4376__auto___29038,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____0 = (function (){
var statearr_28903 = [null,null,null,null,null,null,null];
(statearr_28903[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__);

(statearr_28903[(1)] = (1));

return statearr_28903;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____1 = (function (state_28895){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_28895);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e28904){if((e28904 instanceof Object)){
var ex__28370__auto__ = e28904;
var statearr_28905_29050 = state_28895;
(statearr_28905_29050[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28904;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29051 = state_28895;
state_28895 = G__29051;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__ = function(state_28895){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____1.call(this,state_28895);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__;
})()
;})(__29039,switch__28366__auto__,c__28598__auto___29043,G__28882_29040,G__28882_29041__$1,n__4376__auto___29038,jobs,results,process,async))
})();
var state__28600__auto__ = (function (){var statearr_28906 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_28906[(6)] = c__28598__auto___29043);

return statearr_28906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(__29039,c__28598__auto___29043,G__28882_29040,G__28882_29041__$1,n__4376__auto___29038,jobs,results,process,async))
);


break;
case "async":
var c__28598__auto___29052 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29039,c__28598__auto___29052,G__28882_29040,G__28882_29041__$1,n__4376__auto___29038,jobs,results,process,async){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (__29039,c__28598__auto___29052,G__28882_29040,G__28882_29041__$1,n__4376__auto___29038,jobs,results,process,async){
return (function (state_28919){
var state_val_28920 = (state_28919[(1)]);
if((state_val_28920 === (1))){
var state_28919__$1 = state_28919;
var statearr_28921_29053 = state_28919__$1;
(statearr_28921_29053[(2)] = null);

(statearr_28921_29053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (2))){
var state_28919__$1 = state_28919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28919__$1,(4),jobs);
} else {
if((state_val_28920 === (3))){
var inst_28917 = (state_28919[(2)]);
var state_28919__$1 = state_28919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28919__$1,inst_28917);
} else {
if((state_val_28920 === (4))){
var inst_28909 = (state_28919[(2)]);
var inst_28910 = async(inst_28909);
var state_28919__$1 = state_28919;
if(cljs.core.truth_(inst_28910)){
var statearr_28922_29054 = state_28919__$1;
(statearr_28922_29054[(1)] = (5));

} else {
var statearr_28923_29055 = state_28919__$1;
(statearr_28923_29055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (5))){
var state_28919__$1 = state_28919;
var statearr_28924_29056 = state_28919__$1;
(statearr_28924_29056[(2)] = null);

(statearr_28924_29056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (6))){
var state_28919__$1 = state_28919;
var statearr_28925_29057 = state_28919__$1;
(statearr_28925_29057[(2)] = null);

(statearr_28925_29057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (7))){
var inst_28915 = (state_28919[(2)]);
var state_28919__$1 = state_28919;
var statearr_28926_29058 = state_28919__$1;
(statearr_28926_29058[(2)] = inst_28915);

(statearr_28926_29058[(1)] = (3));


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
});})(__29039,c__28598__auto___29052,G__28882_29040,G__28882_29041__$1,n__4376__auto___29038,jobs,results,process,async))
;
return ((function (__29039,switch__28366__auto__,c__28598__auto___29052,G__28882_29040,G__28882_29041__$1,n__4376__auto___29038,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____0 = (function (){
var statearr_28927 = [null,null,null,null,null,null,null];
(statearr_28927[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__);

(statearr_28927[(1)] = (1));

return statearr_28927;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____1 = (function (state_28919){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_28919);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e28928){if((e28928 instanceof Object)){
var ex__28370__auto__ = e28928;
var statearr_28929_29059 = state_28919;
(statearr_28929_29059[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28928;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29060 = state_28919;
state_28919 = G__29060;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__ = function(state_28919){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____1.call(this,state_28919);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__;
})()
;})(__29039,switch__28366__auto__,c__28598__auto___29052,G__28882_29040,G__28882_29041__$1,n__4376__auto___29038,jobs,results,process,async))
})();
var state__28600__auto__ = (function (){var statearr_28930 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_28930[(6)] = c__28598__auto___29052);

return statearr_28930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(__29039,c__28598__auto___29052,G__28882_29040,G__28882_29041__$1,n__4376__auto___29038,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28882_29041__$1)].join('')));

}

var G__29061 = (__29039 + (1));
__29039 = G__29061;
continue;
} else {
}
break;
}

var c__28598__auto___29062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28598__auto___29062,jobs,results,process,async){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (c__28598__auto___29062,jobs,results,process,async){
return (function (state_28952){
var state_val_28953 = (state_28952[(1)]);
if((state_val_28953 === (1))){
var state_28952__$1 = state_28952;
var statearr_28954_29063 = state_28952__$1;
(statearr_28954_29063[(2)] = null);

(statearr_28954_29063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28953 === (2))){
var state_28952__$1 = state_28952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28952__$1,(4),from);
} else {
if((state_val_28953 === (3))){
var inst_28950 = (state_28952[(2)]);
var state_28952__$1 = state_28952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28952__$1,inst_28950);
} else {
if((state_val_28953 === (4))){
var inst_28933 = (state_28952[(7)]);
var inst_28933__$1 = (state_28952[(2)]);
var inst_28934 = (inst_28933__$1 == null);
var state_28952__$1 = (function (){var statearr_28955 = state_28952;
(statearr_28955[(7)] = inst_28933__$1);

return statearr_28955;
})();
if(cljs.core.truth_(inst_28934)){
var statearr_28956_29064 = state_28952__$1;
(statearr_28956_29064[(1)] = (5));

} else {
var statearr_28957_29065 = state_28952__$1;
(statearr_28957_29065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28953 === (5))){
var inst_28936 = cljs.core.async.close_BANG_(jobs);
var state_28952__$1 = state_28952;
var statearr_28958_29066 = state_28952__$1;
(statearr_28958_29066[(2)] = inst_28936);

(statearr_28958_29066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28953 === (6))){
var inst_28938 = (state_28952[(8)]);
var inst_28933 = (state_28952[(7)]);
var inst_28938__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28939 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28940 = [inst_28933,inst_28938__$1];
var inst_28941 = (new cljs.core.PersistentVector(null,2,(5),inst_28939,inst_28940,null));
var state_28952__$1 = (function (){var statearr_28959 = state_28952;
(statearr_28959[(8)] = inst_28938__$1);

return statearr_28959;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28952__$1,(8),jobs,inst_28941);
} else {
if((state_val_28953 === (7))){
var inst_28948 = (state_28952[(2)]);
var state_28952__$1 = state_28952;
var statearr_28960_29067 = state_28952__$1;
(statearr_28960_29067[(2)] = inst_28948);

(statearr_28960_29067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28953 === (8))){
var inst_28938 = (state_28952[(8)]);
var inst_28943 = (state_28952[(2)]);
var state_28952__$1 = (function (){var statearr_28961 = state_28952;
(statearr_28961[(9)] = inst_28943);

return statearr_28961;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28952__$1,(9),results,inst_28938);
} else {
if((state_val_28953 === (9))){
var inst_28945 = (state_28952[(2)]);
var state_28952__$1 = (function (){var statearr_28962 = state_28952;
(statearr_28962[(10)] = inst_28945);

return statearr_28962;
})();
var statearr_28963_29068 = state_28952__$1;
(statearr_28963_29068[(2)] = null);

(statearr_28963_29068[(1)] = (2));


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
});})(c__28598__auto___29062,jobs,results,process,async))
;
return ((function (switch__28366__auto__,c__28598__auto___29062,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____0 = (function (){
var statearr_28964 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28964[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__);

(statearr_28964[(1)] = (1));

return statearr_28964;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____1 = (function (state_28952){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_28952);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e28965){if((e28965 instanceof Object)){
var ex__28370__auto__ = e28965;
var statearr_28966_29069 = state_28952;
(statearr_28966_29069[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28965;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29070 = state_28952;
state_28952 = G__29070;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__ = function(state_28952){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____1.call(this,state_28952);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__;
})()
;})(switch__28366__auto__,c__28598__auto___29062,jobs,results,process,async))
})();
var state__28600__auto__ = (function (){var statearr_28967 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_28967[(6)] = c__28598__auto___29062);

return statearr_28967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(c__28598__auto___29062,jobs,results,process,async))
);


var c__28598__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28598__auto__,jobs,results,process,async){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (c__28598__auto__,jobs,results,process,async){
return (function (state_29005){
var state_val_29006 = (state_29005[(1)]);
if((state_val_29006 === (7))){
var inst_29001 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
var statearr_29007_29071 = state_29005__$1;
(statearr_29007_29071[(2)] = inst_29001);

(statearr_29007_29071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (20))){
var state_29005__$1 = state_29005;
var statearr_29008_29072 = state_29005__$1;
(statearr_29008_29072[(2)] = null);

(statearr_29008_29072[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (1))){
var state_29005__$1 = state_29005;
var statearr_29009_29073 = state_29005__$1;
(statearr_29009_29073[(2)] = null);

(statearr_29009_29073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (4))){
var inst_28970 = (state_29005[(7)]);
var inst_28970__$1 = (state_29005[(2)]);
var inst_28971 = (inst_28970__$1 == null);
var state_29005__$1 = (function (){var statearr_29010 = state_29005;
(statearr_29010[(7)] = inst_28970__$1);

return statearr_29010;
})();
if(cljs.core.truth_(inst_28971)){
var statearr_29011_29074 = state_29005__$1;
(statearr_29011_29074[(1)] = (5));

} else {
var statearr_29012_29075 = state_29005__$1;
(statearr_29012_29075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (15))){
var inst_28983 = (state_29005[(8)]);
var state_29005__$1 = state_29005;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29005__$1,(18),to,inst_28983);
} else {
if((state_val_29006 === (21))){
var inst_28996 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
var statearr_29013_29076 = state_29005__$1;
(statearr_29013_29076[(2)] = inst_28996);

(statearr_29013_29076[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (13))){
var inst_28998 = (state_29005[(2)]);
var state_29005__$1 = (function (){var statearr_29014 = state_29005;
(statearr_29014[(9)] = inst_28998);

return statearr_29014;
})();
var statearr_29015_29077 = state_29005__$1;
(statearr_29015_29077[(2)] = null);

(statearr_29015_29077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (6))){
var inst_28970 = (state_29005[(7)]);
var state_29005__$1 = state_29005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29005__$1,(11),inst_28970);
} else {
if((state_val_29006 === (17))){
var inst_28991 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
if(cljs.core.truth_(inst_28991)){
var statearr_29016_29078 = state_29005__$1;
(statearr_29016_29078[(1)] = (19));

} else {
var statearr_29017_29079 = state_29005__$1;
(statearr_29017_29079[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (3))){
var inst_29003 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29005__$1,inst_29003);
} else {
if((state_val_29006 === (12))){
var inst_28980 = (state_29005[(10)]);
var state_29005__$1 = state_29005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29005__$1,(14),inst_28980);
} else {
if((state_val_29006 === (2))){
var state_29005__$1 = state_29005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29005__$1,(4),results);
} else {
if((state_val_29006 === (19))){
var state_29005__$1 = state_29005;
var statearr_29018_29080 = state_29005__$1;
(statearr_29018_29080[(2)] = null);

(statearr_29018_29080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (11))){
var inst_28980 = (state_29005[(2)]);
var state_29005__$1 = (function (){var statearr_29019 = state_29005;
(statearr_29019[(10)] = inst_28980);

return statearr_29019;
})();
var statearr_29020_29081 = state_29005__$1;
(statearr_29020_29081[(2)] = null);

(statearr_29020_29081[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (9))){
var state_29005__$1 = state_29005;
var statearr_29021_29082 = state_29005__$1;
(statearr_29021_29082[(2)] = null);

(statearr_29021_29082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (5))){
var state_29005__$1 = state_29005;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29022_29083 = state_29005__$1;
(statearr_29022_29083[(1)] = (8));

} else {
var statearr_29023_29084 = state_29005__$1;
(statearr_29023_29084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (14))){
var inst_28983 = (state_29005[(8)]);
var inst_28985 = (state_29005[(11)]);
var inst_28983__$1 = (state_29005[(2)]);
var inst_28984 = (inst_28983__$1 == null);
var inst_28985__$1 = cljs.core.not(inst_28984);
var state_29005__$1 = (function (){var statearr_29024 = state_29005;
(statearr_29024[(8)] = inst_28983__$1);

(statearr_29024[(11)] = inst_28985__$1);

return statearr_29024;
})();
if(inst_28985__$1){
var statearr_29025_29085 = state_29005__$1;
(statearr_29025_29085[(1)] = (15));

} else {
var statearr_29026_29086 = state_29005__$1;
(statearr_29026_29086[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (16))){
var inst_28985 = (state_29005[(11)]);
var state_29005__$1 = state_29005;
var statearr_29027_29087 = state_29005__$1;
(statearr_29027_29087[(2)] = inst_28985);

(statearr_29027_29087[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (10))){
var inst_28977 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
var statearr_29028_29088 = state_29005__$1;
(statearr_29028_29088[(2)] = inst_28977);

(statearr_29028_29088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (18))){
var inst_28988 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
var statearr_29029_29089 = state_29005__$1;
(statearr_29029_29089[(2)] = inst_28988);

(statearr_29029_29089[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (8))){
var inst_28974 = cljs.core.async.close_BANG_(to);
var state_29005__$1 = state_29005;
var statearr_29030_29090 = state_29005__$1;
(statearr_29030_29090[(2)] = inst_28974);

(statearr_29030_29090[(1)] = (10));


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
});})(c__28598__auto__,jobs,results,process,async))
;
return ((function (switch__28366__auto__,c__28598__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____0 = (function (){
var statearr_29031 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29031[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__);

(statearr_29031[(1)] = (1));

return statearr_29031;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____1 = (function (state_29005){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_29005);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e29032){if((e29032 instanceof Object)){
var ex__28370__auto__ = e29032;
var statearr_29033_29091 = state_29005;
(statearr_29033_29091[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29032;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29092 = state_29005;
state_29005 = G__29092;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__ = function(state_29005){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____1.call(this,state_29005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28367__auto__;
})()
;})(switch__28366__auto__,c__28598__auto__,jobs,results,process,async))
})();
var state__28600__auto__ = (function (){var statearr_29034 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_29034[(6)] = c__28598__auto__);

return statearr_29034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(c__28598__auto__,jobs,results,process,async))
);

return c__28598__auto__;
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
var G__29094 = arguments.length;
switch (G__29094) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__29097 = arguments.length;
switch (G__29097) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__29100 = arguments.length;
switch (G__29100) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__28598__auto___29149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28598__auto___29149,tc,fc){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (c__28598__auto___29149,tc,fc){
return (function (state_29126){
var state_val_29127 = (state_29126[(1)]);
if((state_val_29127 === (7))){
var inst_29122 = (state_29126[(2)]);
var state_29126__$1 = state_29126;
var statearr_29128_29150 = state_29126__$1;
(statearr_29128_29150[(2)] = inst_29122);

(statearr_29128_29150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29127 === (1))){
var state_29126__$1 = state_29126;
var statearr_29129_29151 = state_29126__$1;
(statearr_29129_29151[(2)] = null);

(statearr_29129_29151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29127 === (4))){
var inst_29103 = (state_29126[(7)]);
var inst_29103__$1 = (state_29126[(2)]);
var inst_29104 = (inst_29103__$1 == null);
var state_29126__$1 = (function (){var statearr_29130 = state_29126;
(statearr_29130[(7)] = inst_29103__$1);

return statearr_29130;
})();
if(cljs.core.truth_(inst_29104)){
var statearr_29131_29152 = state_29126__$1;
(statearr_29131_29152[(1)] = (5));

} else {
var statearr_29132_29153 = state_29126__$1;
(statearr_29132_29153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29127 === (13))){
var state_29126__$1 = state_29126;
var statearr_29133_29154 = state_29126__$1;
(statearr_29133_29154[(2)] = null);

(statearr_29133_29154[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29127 === (6))){
var inst_29103 = (state_29126[(7)]);
var inst_29109 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29103) : p.call(null,inst_29103));
var state_29126__$1 = state_29126;
if(cljs.core.truth_(inst_29109)){
var statearr_29134_29155 = state_29126__$1;
(statearr_29134_29155[(1)] = (9));

} else {
var statearr_29135_29156 = state_29126__$1;
(statearr_29135_29156[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29127 === (3))){
var inst_29124 = (state_29126[(2)]);
var state_29126__$1 = state_29126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29126__$1,inst_29124);
} else {
if((state_val_29127 === (12))){
var state_29126__$1 = state_29126;
var statearr_29136_29157 = state_29126__$1;
(statearr_29136_29157[(2)] = null);

(statearr_29136_29157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29127 === (2))){
var state_29126__$1 = state_29126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29126__$1,(4),ch);
} else {
if((state_val_29127 === (11))){
var inst_29103 = (state_29126[(7)]);
var inst_29113 = (state_29126[(2)]);
var state_29126__$1 = state_29126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29126__$1,(8),inst_29113,inst_29103);
} else {
if((state_val_29127 === (9))){
var state_29126__$1 = state_29126;
var statearr_29137_29158 = state_29126__$1;
(statearr_29137_29158[(2)] = tc);

(statearr_29137_29158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29127 === (5))){
var inst_29106 = cljs.core.async.close_BANG_(tc);
var inst_29107 = cljs.core.async.close_BANG_(fc);
var state_29126__$1 = (function (){var statearr_29138 = state_29126;
(statearr_29138[(8)] = inst_29106);

return statearr_29138;
})();
var statearr_29139_29159 = state_29126__$1;
(statearr_29139_29159[(2)] = inst_29107);

(statearr_29139_29159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29127 === (14))){
var inst_29120 = (state_29126[(2)]);
var state_29126__$1 = state_29126;
var statearr_29140_29160 = state_29126__$1;
(statearr_29140_29160[(2)] = inst_29120);

(statearr_29140_29160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29127 === (10))){
var state_29126__$1 = state_29126;
var statearr_29141_29161 = state_29126__$1;
(statearr_29141_29161[(2)] = fc);

(statearr_29141_29161[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29127 === (8))){
var inst_29115 = (state_29126[(2)]);
var state_29126__$1 = state_29126;
if(cljs.core.truth_(inst_29115)){
var statearr_29142_29162 = state_29126__$1;
(statearr_29142_29162[(1)] = (12));

} else {
var statearr_29143_29163 = state_29126__$1;
(statearr_29143_29163[(1)] = (13));

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
});})(c__28598__auto___29149,tc,fc))
;
return ((function (switch__28366__auto__,c__28598__auto___29149,tc,fc){
return (function() {
var cljs$core$async$state_machine__28367__auto__ = null;
var cljs$core$async$state_machine__28367__auto____0 = (function (){
var statearr_29144 = [null,null,null,null,null,null,null,null,null];
(statearr_29144[(0)] = cljs$core$async$state_machine__28367__auto__);

(statearr_29144[(1)] = (1));

return statearr_29144;
});
var cljs$core$async$state_machine__28367__auto____1 = (function (state_29126){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_29126);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e29145){if((e29145 instanceof Object)){
var ex__28370__auto__ = e29145;
var statearr_29146_29164 = state_29126;
(statearr_29146_29164[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29145;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29165 = state_29126;
state_29126 = G__29165;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
cljs$core$async$state_machine__28367__auto__ = function(state_29126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28367__auto____1.call(this,state_29126);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28367__auto____0;
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28367__auto____1;
return cljs$core$async$state_machine__28367__auto__;
})()
;})(switch__28366__auto__,c__28598__auto___29149,tc,fc))
})();
var state__28600__auto__ = (function (){var statearr_29147 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_29147[(6)] = c__28598__auto___29149);

return statearr_29147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(c__28598__auto___29149,tc,fc))
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
var c__28598__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28598__auto__){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (c__28598__auto__){
return (function (state_29186){
var state_val_29187 = (state_29186[(1)]);
if((state_val_29187 === (7))){
var inst_29182 = (state_29186[(2)]);
var state_29186__$1 = state_29186;
var statearr_29188_29206 = state_29186__$1;
(statearr_29188_29206[(2)] = inst_29182);

(statearr_29188_29206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29187 === (1))){
var inst_29166 = init;
var state_29186__$1 = (function (){var statearr_29189 = state_29186;
(statearr_29189[(7)] = inst_29166);

return statearr_29189;
})();
var statearr_29190_29207 = state_29186__$1;
(statearr_29190_29207[(2)] = null);

(statearr_29190_29207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29187 === (4))){
var inst_29169 = (state_29186[(8)]);
var inst_29169__$1 = (state_29186[(2)]);
var inst_29170 = (inst_29169__$1 == null);
var state_29186__$1 = (function (){var statearr_29191 = state_29186;
(statearr_29191[(8)] = inst_29169__$1);

return statearr_29191;
})();
if(cljs.core.truth_(inst_29170)){
var statearr_29192_29208 = state_29186__$1;
(statearr_29192_29208[(1)] = (5));

} else {
var statearr_29193_29209 = state_29186__$1;
(statearr_29193_29209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29187 === (6))){
var inst_29173 = (state_29186[(9)]);
var inst_29166 = (state_29186[(7)]);
var inst_29169 = (state_29186[(8)]);
var inst_29173__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29166,inst_29169) : f.call(null,inst_29166,inst_29169));
var inst_29174 = cljs.core.reduced_QMARK_(inst_29173__$1);
var state_29186__$1 = (function (){var statearr_29194 = state_29186;
(statearr_29194[(9)] = inst_29173__$1);

return statearr_29194;
})();
if(inst_29174){
var statearr_29195_29210 = state_29186__$1;
(statearr_29195_29210[(1)] = (8));

} else {
var statearr_29196_29211 = state_29186__$1;
(statearr_29196_29211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29187 === (3))){
var inst_29184 = (state_29186[(2)]);
var state_29186__$1 = state_29186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29186__$1,inst_29184);
} else {
if((state_val_29187 === (2))){
var state_29186__$1 = state_29186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29186__$1,(4),ch);
} else {
if((state_val_29187 === (9))){
var inst_29173 = (state_29186[(9)]);
var inst_29166 = inst_29173;
var state_29186__$1 = (function (){var statearr_29197 = state_29186;
(statearr_29197[(7)] = inst_29166);

return statearr_29197;
})();
var statearr_29198_29212 = state_29186__$1;
(statearr_29198_29212[(2)] = null);

(statearr_29198_29212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29187 === (5))){
var inst_29166 = (state_29186[(7)]);
var state_29186__$1 = state_29186;
var statearr_29199_29213 = state_29186__$1;
(statearr_29199_29213[(2)] = inst_29166);

(statearr_29199_29213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29187 === (10))){
var inst_29180 = (state_29186[(2)]);
var state_29186__$1 = state_29186;
var statearr_29200_29214 = state_29186__$1;
(statearr_29200_29214[(2)] = inst_29180);

(statearr_29200_29214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29187 === (8))){
var inst_29173 = (state_29186[(9)]);
var inst_29176 = cljs.core.deref(inst_29173);
var state_29186__$1 = state_29186;
var statearr_29201_29215 = state_29186__$1;
(statearr_29201_29215[(2)] = inst_29176);

(statearr_29201_29215[(1)] = (10));


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
});})(c__28598__auto__))
;
return ((function (switch__28366__auto__,c__28598__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28367__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28367__auto____0 = (function (){
var statearr_29202 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29202[(0)] = cljs$core$async$reduce_$_state_machine__28367__auto__);

(statearr_29202[(1)] = (1));

return statearr_29202;
});
var cljs$core$async$reduce_$_state_machine__28367__auto____1 = (function (state_29186){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_29186);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e29203){if((e29203 instanceof Object)){
var ex__28370__auto__ = e29203;
var statearr_29204_29216 = state_29186;
(statearr_29204_29216[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29203;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29217 = state_29186;
state_29186 = G__29217;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28367__auto__ = function(state_29186){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28367__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28367__auto____1.call(this,state_29186);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28367__auto____0;
cljs$core$async$reduce_$_state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28367__auto____1;
return cljs$core$async$reduce_$_state_machine__28367__auto__;
})()
;})(switch__28366__auto__,c__28598__auto__))
})();
var state__28600__auto__ = (function (){var statearr_29205 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_29205[(6)] = c__28598__auto__);

return statearr_29205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(c__28598__auto__))
);

return c__28598__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28598__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28598__auto__,f__$1){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (c__28598__auto__,f__$1){
return (function (state_29223){
var state_val_29224 = (state_29223[(1)]);
if((state_val_29224 === (1))){
var inst_29218 = cljs.core.async.reduce(f__$1,init,ch);
var state_29223__$1 = state_29223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29223__$1,(2),inst_29218);
} else {
if((state_val_29224 === (2))){
var inst_29220 = (state_29223[(2)]);
var inst_29221 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29220) : f__$1.call(null,inst_29220));
var state_29223__$1 = state_29223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29223__$1,inst_29221);
} else {
return null;
}
}
});})(c__28598__auto__,f__$1))
;
return ((function (switch__28366__auto__,c__28598__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28367__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28367__auto____0 = (function (){
var statearr_29225 = [null,null,null,null,null,null,null];
(statearr_29225[(0)] = cljs$core$async$transduce_$_state_machine__28367__auto__);

(statearr_29225[(1)] = (1));

return statearr_29225;
});
var cljs$core$async$transduce_$_state_machine__28367__auto____1 = (function (state_29223){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_29223);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e29226){if((e29226 instanceof Object)){
var ex__28370__auto__ = e29226;
var statearr_29227_29229 = state_29223;
(statearr_29227_29229[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29226;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29230 = state_29223;
state_29223 = G__29230;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28367__auto__ = function(state_29223){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28367__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28367__auto____1.call(this,state_29223);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28367__auto____0;
cljs$core$async$transduce_$_state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28367__auto____1;
return cljs$core$async$transduce_$_state_machine__28367__auto__;
})()
;})(switch__28366__auto__,c__28598__auto__,f__$1))
})();
var state__28600__auto__ = (function (){var statearr_29228 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_29228[(6)] = c__28598__auto__);

return statearr_29228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(c__28598__auto__,f__$1))
);

return c__28598__auto__;
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
var G__29232 = arguments.length;
switch (G__29232) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28598__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28598__auto__){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (c__28598__auto__){
return (function (state_29257){
var state_val_29258 = (state_29257[(1)]);
if((state_val_29258 === (7))){
var inst_29239 = (state_29257[(2)]);
var state_29257__$1 = state_29257;
var statearr_29259_29280 = state_29257__$1;
(statearr_29259_29280[(2)] = inst_29239);

(statearr_29259_29280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (1))){
var inst_29233 = cljs.core.seq(coll);
var inst_29234 = inst_29233;
var state_29257__$1 = (function (){var statearr_29260 = state_29257;
(statearr_29260[(7)] = inst_29234);

return statearr_29260;
})();
var statearr_29261_29281 = state_29257__$1;
(statearr_29261_29281[(2)] = null);

(statearr_29261_29281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (4))){
var inst_29234 = (state_29257[(7)]);
var inst_29237 = cljs.core.first(inst_29234);
var state_29257__$1 = state_29257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29257__$1,(7),ch,inst_29237);
} else {
if((state_val_29258 === (13))){
var inst_29251 = (state_29257[(2)]);
var state_29257__$1 = state_29257;
var statearr_29262_29282 = state_29257__$1;
(statearr_29262_29282[(2)] = inst_29251);

(statearr_29262_29282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (6))){
var inst_29242 = (state_29257[(2)]);
var state_29257__$1 = state_29257;
if(cljs.core.truth_(inst_29242)){
var statearr_29263_29283 = state_29257__$1;
(statearr_29263_29283[(1)] = (8));

} else {
var statearr_29264_29284 = state_29257__$1;
(statearr_29264_29284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (3))){
var inst_29255 = (state_29257[(2)]);
var state_29257__$1 = state_29257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29257__$1,inst_29255);
} else {
if((state_val_29258 === (12))){
var state_29257__$1 = state_29257;
var statearr_29265_29285 = state_29257__$1;
(statearr_29265_29285[(2)] = null);

(statearr_29265_29285[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (2))){
var inst_29234 = (state_29257[(7)]);
var state_29257__$1 = state_29257;
if(cljs.core.truth_(inst_29234)){
var statearr_29266_29286 = state_29257__$1;
(statearr_29266_29286[(1)] = (4));

} else {
var statearr_29267_29287 = state_29257__$1;
(statearr_29267_29287[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (11))){
var inst_29248 = cljs.core.async.close_BANG_(ch);
var state_29257__$1 = state_29257;
var statearr_29268_29288 = state_29257__$1;
(statearr_29268_29288[(2)] = inst_29248);

(statearr_29268_29288[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (9))){
var state_29257__$1 = state_29257;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29269_29289 = state_29257__$1;
(statearr_29269_29289[(1)] = (11));

} else {
var statearr_29270_29290 = state_29257__$1;
(statearr_29270_29290[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (5))){
var inst_29234 = (state_29257[(7)]);
var state_29257__$1 = state_29257;
var statearr_29271_29291 = state_29257__$1;
(statearr_29271_29291[(2)] = inst_29234);

(statearr_29271_29291[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (10))){
var inst_29253 = (state_29257[(2)]);
var state_29257__$1 = state_29257;
var statearr_29272_29292 = state_29257__$1;
(statearr_29272_29292[(2)] = inst_29253);

(statearr_29272_29292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29258 === (8))){
var inst_29234 = (state_29257[(7)]);
var inst_29244 = cljs.core.next(inst_29234);
var inst_29234__$1 = inst_29244;
var state_29257__$1 = (function (){var statearr_29273 = state_29257;
(statearr_29273[(7)] = inst_29234__$1);

return statearr_29273;
})();
var statearr_29274_29293 = state_29257__$1;
(statearr_29274_29293[(2)] = null);

(statearr_29274_29293[(1)] = (2));


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
});})(c__28598__auto__))
;
return ((function (switch__28366__auto__,c__28598__auto__){
return (function() {
var cljs$core$async$state_machine__28367__auto__ = null;
var cljs$core$async$state_machine__28367__auto____0 = (function (){
var statearr_29275 = [null,null,null,null,null,null,null,null];
(statearr_29275[(0)] = cljs$core$async$state_machine__28367__auto__);

(statearr_29275[(1)] = (1));

return statearr_29275;
});
var cljs$core$async$state_machine__28367__auto____1 = (function (state_29257){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_29257);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e29276){if((e29276 instanceof Object)){
var ex__28370__auto__ = e29276;
var statearr_29277_29294 = state_29257;
(statearr_29277_29294[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29276;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29295 = state_29257;
state_29257 = G__29295;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
cljs$core$async$state_machine__28367__auto__ = function(state_29257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28367__auto____1.call(this,state_29257);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28367__auto____0;
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28367__auto____1;
return cljs$core$async$state_machine__28367__auto__;
})()
;})(switch__28366__auto__,c__28598__auto__))
})();
var state__28600__auto__ = (function (){var statearr_29278 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_29278[(6)] = c__28598__auto__);

return statearr_29278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(c__28598__auto__))
);

return c__28598__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29296 = (function (ch,cs,meta29297){
this.ch = ch;
this.cs = cs;
this.meta29297 = meta29297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29298,meta29297__$1){
var self__ = this;
var _29298__$1 = this;
return (new cljs.core.async.t_cljs$core$async29296(self__.ch,self__.cs,meta29297__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29298){
var self__ = this;
var _29298__$1 = this;
return self__.meta29297;
});})(cs))
;

cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29296.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29297","meta29297",-674787472,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29296.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29296";

cljs.core.async.t_cljs$core$async29296.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async29296");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29296.
 */
cljs.core.async.__GT_t_cljs$core$async29296 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29296(ch__$1,cs__$1,meta29297){
return (new cljs.core.async.t_cljs$core$async29296(ch__$1,cs__$1,meta29297));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29296(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28598__auto___29518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28598__auto___29518,cs,m,dchan,dctr,done){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (c__28598__auto___29518,cs,m,dchan,dctr,done){
return (function (state_29433){
var state_val_29434 = (state_29433[(1)]);
if((state_val_29434 === (7))){
var inst_29429 = (state_29433[(2)]);
var state_29433__$1 = state_29433;
var statearr_29435_29519 = state_29433__$1;
(statearr_29435_29519[(2)] = inst_29429);

(statearr_29435_29519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (20))){
var inst_29332 = (state_29433[(7)]);
var inst_29344 = cljs.core.first(inst_29332);
var inst_29345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29344,(0),null);
var inst_29346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29344,(1),null);
var state_29433__$1 = (function (){var statearr_29436 = state_29433;
(statearr_29436[(8)] = inst_29345);

return statearr_29436;
})();
if(cljs.core.truth_(inst_29346)){
var statearr_29437_29520 = state_29433__$1;
(statearr_29437_29520[(1)] = (22));

} else {
var statearr_29438_29521 = state_29433__$1;
(statearr_29438_29521[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (27))){
var inst_29374 = (state_29433[(9)]);
var inst_29381 = (state_29433[(10)]);
var inst_29301 = (state_29433[(11)]);
var inst_29376 = (state_29433[(12)]);
var inst_29381__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29374,inst_29376);
var inst_29382 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29381__$1,inst_29301,done);
var state_29433__$1 = (function (){var statearr_29439 = state_29433;
(statearr_29439[(10)] = inst_29381__$1);

return statearr_29439;
})();
if(cljs.core.truth_(inst_29382)){
var statearr_29440_29522 = state_29433__$1;
(statearr_29440_29522[(1)] = (30));

} else {
var statearr_29441_29523 = state_29433__$1;
(statearr_29441_29523[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (1))){
var state_29433__$1 = state_29433;
var statearr_29442_29524 = state_29433__$1;
(statearr_29442_29524[(2)] = null);

(statearr_29442_29524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (24))){
var inst_29332 = (state_29433[(7)]);
var inst_29351 = (state_29433[(2)]);
var inst_29352 = cljs.core.next(inst_29332);
var inst_29310 = inst_29352;
var inst_29311 = null;
var inst_29312 = (0);
var inst_29313 = (0);
var state_29433__$1 = (function (){var statearr_29443 = state_29433;
(statearr_29443[(13)] = inst_29311);

(statearr_29443[(14)] = inst_29351);

(statearr_29443[(15)] = inst_29313);

(statearr_29443[(16)] = inst_29310);

(statearr_29443[(17)] = inst_29312);

return statearr_29443;
})();
var statearr_29444_29525 = state_29433__$1;
(statearr_29444_29525[(2)] = null);

(statearr_29444_29525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (39))){
var state_29433__$1 = state_29433;
var statearr_29448_29526 = state_29433__$1;
(statearr_29448_29526[(2)] = null);

(statearr_29448_29526[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (4))){
var inst_29301 = (state_29433[(11)]);
var inst_29301__$1 = (state_29433[(2)]);
var inst_29302 = (inst_29301__$1 == null);
var state_29433__$1 = (function (){var statearr_29449 = state_29433;
(statearr_29449[(11)] = inst_29301__$1);

return statearr_29449;
})();
if(cljs.core.truth_(inst_29302)){
var statearr_29450_29527 = state_29433__$1;
(statearr_29450_29527[(1)] = (5));

} else {
var statearr_29451_29528 = state_29433__$1;
(statearr_29451_29528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (15))){
var inst_29311 = (state_29433[(13)]);
var inst_29313 = (state_29433[(15)]);
var inst_29310 = (state_29433[(16)]);
var inst_29312 = (state_29433[(17)]);
var inst_29328 = (state_29433[(2)]);
var inst_29329 = (inst_29313 + (1));
var tmp29445 = inst_29311;
var tmp29446 = inst_29310;
var tmp29447 = inst_29312;
var inst_29310__$1 = tmp29446;
var inst_29311__$1 = tmp29445;
var inst_29312__$1 = tmp29447;
var inst_29313__$1 = inst_29329;
var state_29433__$1 = (function (){var statearr_29452 = state_29433;
(statearr_29452[(13)] = inst_29311__$1);

(statearr_29452[(15)] = inst_29313__$1);

(statearr_29452[(18)] = inst_29328);

(statearr_29452[(16)] = inst_29310__$1);

(statearr_29452[(17)] = inst_29312__$1);

return statearr_29452;
})();
var statearr_29453_29529 = state_29433__$1;
(statearr_29453_29529[(2)] = null);

(statearr_29453_29529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (21))){
var inst_29355 = (state_29433[(2)]);
var state_29433__$1 = state_29433;
var statearr_29457_29530 = state_29433__$1;
(statearr_29457_29530[(2)] = inst_29355);

(statearr_29457_29530[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (31))){
var inst_29381 = (state_29433[(10)]);
var inst_29385 = done(null);
var inst_29386 = cljs.core.async.untap_STAR_(m,inst_29381);
var state_29433__$1 = (function (){var statearr_29458 = state_29433;
(statearr_29458[(19)] = inst_29385);

return statearr_29458;
})();
var statearr_29459_29531 = state_29433__$1;
(statearr_29459_29531[(2)] = inst_29386);

(statearr_29459_29531[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (32))){
var inst_29374 = (state_29433[(9)]);
var inst_29375 = (state_29433[(20)]);
var inst_29373 = (state_29433[(21)]);
var inst_29376 = (state_29433[(12)]);
var inst_29388 = (state_29433[(2)]);
var inst_29389 = (inst_29376 + (1));
var tmp29454 = inst_29374;
var tmp29455 = inst_29375;
var tmp29456 = inst_29373;
var inst_29373__$1 = tmp29456;
var inst_29374__$1 = tmp29454;
var inst_29375__$1 = tmp29455;
var inst_29376__$1 = inst_29389;
var state_29433__$1 = (function (){var statearr_29460 = state_29433;
(statearr_29460[(9)] = inst_29374__$1);

(statearr_29460[(20)] = inst_29375__$1);

(statearr_29460[(21)] = inst_29373__$1);

(statearr_29460[(22)] = inst_29388);

(statearr_29460[(12)] = inst_29376__$1);

return statearr_29460;
})();
var statearr_29461_29532 = state_29433__$1;
(statearr_29461_29532[(2)] = null);

(statearr_29461_29532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (40))){
var inst_29401 = (state_29433[(23)]);
var inst_29405 = done(null);
var inst_29406 = cljs.core.async.untap_STAR_(m,inst_29401);
var state_29433__$1 = (function (){var statearr_29462 = state_29433;
(statearr_29462[(24)] = inst_29405);

return statearr_29462;
})();
var statearr_29463_29533 = state_29433__$1;
(statearr_29463_29533[(2)] = inst_29406);

(statearr_29463_29533[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (33))){
var inst_29392 = (state_29433[(25)]);
var inst_29394 = cljs.core.chunked_seq_QMARK_(inst_29392);
var state_29433__$1 = state_29433;
if(inst_29394){
var statearr_29464_29534 = state_29433__$1;
(statearr_29464_29534[(1)] = (36));

} else {
var statearr_29465_29535 = state_29433__$1;
(statearr_29465_29535[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (13))){
var inst_29322 = (state_29433[(26)]);
var inst_29325 = cljs.core.async.close_BANG_(inst_29322);
var state_29433__$1 = state_29433;
var statearr_29466_29536 = state_29433__$1;
(statearr_29466_29536[(2)] = inst_29325);

(statearr_29466_29536[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (22))){
var inst_29345 = (state_29433[(8)]);
var inst_29348 = cljs.core.async.close_BANG_(inst_29345);
var state_29433__$1 = state_29433;
var statearr_29467_29537 = state_29433__$1;
(statearr_29467_29537[(2)] = inst_29348);

(statearr_29467_29537[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (36))){
var inst_29392 = (state_29433[(25)]);
var inst_29396 = cljs.core.chunk_first(inst_29392);
var inst_29397 = cljs.core.chunk_rest(inst_29392);
var inst_29398 = cljs.core.count(inst_29396);
var inst_29373 = inst_29397;
var inst_29374 = inst_29396;
var inst_29375 = inst_29398;
var inst_29376 = (0);
var state_29433__$1 = (function (){var statearr_29468 = state_29433;
(statearr_29468[(9)] = inst_29374);

(statearr_29468[(20)] = inst_29375);

(statearr_29468[(21)] = inst_29373);

(statearr_29468[(12)] = inst_29376);

return statearr_29468;
})();
var statearr_29469_29538 = state_29433__$1;
(statearr_29469_29538[(2)] = null);

(statearr_29469_29538[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (41))){
var inst_29392 = (state_29433[(25)]);
var inst_29408 = (state_29433[(2)]);
var inst_29409 = cljs.core.next(inst_29392);
var inst_29373 = inst_29409;
var inst_29374 = null;
var inst_29375 = (0);
var inst_29376 = (0);
var state_29433__$1 = (function (){var statearr_29470 = state_29433;
(statearr_29470[(9)] = inst_29374);

(statearr_29470[(27)] = inst_29408);

(statearr_29470[(20)] = inst_29375);

(statearr_29470[(21)] = inst_29373);

(statearr_29470[(12)] = inst_29376);

return statearr_29470;
})();
var statearr_29471_29539 = state_29433__$1;
(statearr_29471_29539[(2)] = null);

(statearr_29471_29539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (43))){
var state_29433__$1 = state_29433;
var statearr_29472_29540 = state_29433__$1;
(statearr_29472_29540[(2)] = null);

(statearr_29472_29540[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (29))){
var inst_29417 = (state_29433[(2)]);
var state_29433__$1 = state_29433;
var statearr_29473_29541 = state_29433__$1;
(statearr_29473_29541[(2)] = inst_29417);

(statearr_29473_29541[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (44))){
var inst_29426 = (state_29433[(2)]);
var state_29433__$1 = (function (){var statearr_29474 = state_29433;
(statearr_29474[(28)] = inst_29426);

return statearr_29474;
})();
var statearr_29475_29542 = state_29433__$1;
(statearr_29475_29542[(2)] = null);

(statearr_29475_29542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (6))){
var inst_29365 = (state_29433[(29)]);
var inst_29364 = cljs.core.deref(cs);
var inst_29365__$1 = cljs.core.keys(inst_29364);
var inst_29366 = cljs.core.count(inst_29365__$1);
var inst_29367 = cljs.core.reset_BANG_(dctr,inst_29366);
var inst_29372 = cljs.core.seq(inst_29365__$1);
var inst_29373 = inst_29372;
var inst_29374 = null;
var inst_29375 = (0);
var inst_29376 = (0);
var state_29433__$1 = (function (){var statearr_29476 = state_29433;
(statearr_29476[(9)] = inst_29374);

(statearr_29476[(20)] = inst_29375);

(statearr_29476[(21)] = inst_29373);

(statearr_29476[(30)] = inst_29367);

(statearr_29476[(29)] = inst_29365__$1);

(statearr_29476[(12)] = inst_29376);

return statearr_29476;
})();
var statearr_29477_29543 = state_29433__$1;
(statearr_29477_29543[(2)] = null);

(statearr_29477_29543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (28))){
var inst_29373 = (state_29433[(21)]);
var inst_29392 = (state_29433[(25)]);
var inst_29392__$1 = cljs.core.seq(inst_29373);
var state_29433__$1 = (function (){var statearr_29478 = state_29433;
(statearr_29478[(25)] = inst_29392__$1);

return statearr_29478;
})();
if(inst_29392__$1){
var statearr_29479_29544 = state_29433__$1;
(statearr_29479_29544[(1)] = (33));

} else {
var statearr_29480_29545 = state_29433__$1;
(statearr_29480_29545[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (25))){
var inst_29375 = (state_29433[(20)]);
var inst_29376 = (state_29433[(12)]);
var inst_29378 = (inst_29376 < inst_29375);
var inst_29379 = inst_29378;
var state_29433__$1 = state_29433;
if(cljs.core.truth_(inst_29379)){
var statearr_29481_29546 = state_29433__$1;
(statearr_29481_29546[(1)] = (27));

} else {
var statearr_29482_29547 = state_29433__$1;
(statearr_29482_29547[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (34))){
var state_29433__$1 = state_29433;
var statearr_29483_29548 = state_29433__$1;
(statearr_29483_29548[(2)] = null);

(statearr_29483_29548[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (17))){
var state_29433__$1 = state_29433;
var statearr_29484_29549 = state_29433__$1;
(statearr_29484_29549[(2)] = null);

(statearr_29484_29549[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (3))){
var inst_29431 = (state_29433[(2)]);
var state_29433__$1 = state_29433;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29433__$1,inst_29431);
} else {
if((state_val_29434 === (12))){
var inst_29360 = (state_29433[(2)]);
var state_29433__$1 = state_29433;
var statearr_29485_29550 = state_29433__$1;
(statearr_29485_29550[(2)] = inst_29360);

(statearr_29485_29550[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (2))){
var state_29433__$1 = state_29433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29433__$1,(4),ch);
} else {
if((state_val_29434 === (23))){
var state_29433__$1 = state_29433;
var statearr_29486_29551 = state_29433__$1;
(statearr_29486_29551[(2)] = null);

(statearr_29486_29551[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (35))){
var inst_29415 = (state_29433[(2)]);
var state_29433__$1 = state_29433;
var statearr_29487_29552 = state_29433__$1;
(statearr_29487_29552[(2)] = inst_29415);

(statearr_29487_29552[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (19))){
var inst_29332 = (state_29433[(7)]);
var inst_29336 = cljs.core.chunk_first(inst_29332);
var inst_29337 = cljs.core.chunk_rest(inst_29332);
var inst_29338 = cljs.core.count(inst_29336);
var inst_29310 = inst_29337;
var inst_29311 = inst_29336;
var inst_29312 = inst_29338;
var inst_29313 = (0);
var state_29433__$1 = (function (){var statearr_29488 = state_29433;
(statearr_29488[(13)] = inst_29311);

(statearr_29488[(15)] = inst_29313);

(statearr_29488[(16)] = inst_29310);

(statearr_29488[(17)] = inst_29312);

return statearr_29488;
})();
var statearr_29489_29553 = state_29433__$1;
(statearr_29489_29553[(2)] = null);

(statearr_29489_29553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (11))){
var inst_29332 = (state_29433[(7)]);
var inst_29310 = (state_29433[(16)]);
var inst_29332__$1 = cljs.core.seq(inst_29310);
var state_29433__$1 = (function (){var statearr_29490 = state_29433;
(statearr_29490[(7)] = inst_29332__$1);

return statearr_29490;
})();
if(inst_29332__$1){
var statearr_29491_29554 = state_29433__$1;
(statearr_29491_29554[(1)] = (16));

} else {
var statearr_29492_29555 = state_29433__$1;
(statearr_29492_29555[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (9))){
var inst_29362 = (state_29433[(2)]);
var state_29433__$1 = state_29433;
var statearr_29493_29556 = state_29433__$1;
(statearr_29493_29556[(2)] = inst_29362);

(statearr_29493_29556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (5))){
var inst_29308 = cljs.core.deref(cs);
var inst_29309 = cljs.core.seq(inst_29308);
var inst_29310 = inst_29309;
var inst_29311 = null;
var inst_29312 = (0);
var inst_29313 = (0);
var state_29433__$1 = (function (){var statearr_29494 = state_29433;
(statearr_29494[(13)] = inst_29311);

(statearr_29494[(15)] = inst_29313);

(statearr_29494[(16)] = inst_29310);

(statearr_29494[(17)] = inst_29312);

return statearr_29494;
})();
var statearr_29495_29557 = state_29433__$1;
(statearr_29495_29557[(2)] = null);

(statearr_29495_29557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (14))){
var state_29433__$1 = state_29433;
var statearr_29496_29558 = state_29433__$1;
(statearr_29496_29558[(2)] = null);

(statearr_29496_29558[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (45))){
var inst_29423 = (state_29433[(2)]);
var state_29433__$1 = state_29433;
var statearr_29497_29559 = state_29433__$1;
(statearr_29497_29559[(2)] = inst_29423);

(statearr_29497_29559[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (26))){
var inst_29365 = (state_29433[(29)]);
var inst_29419 = (state_29433[(2)]);
var inst_29420 = cljs.core.seq(inst_29365);
var state_29433__$1 = (function (){var statearr_29498 = state_29433;
(statearr_29498[(31)] = inst_29419);

return statearr_29498;
})();
if(inst_29420){
var statearr_29499_29560 = state_29433__$1;
(statearr_29499_29560[(1)] = (42));

} else {
var statearr_29500_29561 = state_29433__$1;
(statearr_29500_29561[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (16))){
var inst_29332 = (state_29433[(7)]);
var inst_29334 = cljs.core.chunked_seq_QMARK_(inst_29332);
var state_29433__$1 = state_29433;
if(inst_29334){
var statearr_29501_29562 = state_29433__$1;
(statearr_29501_29562[(1)] = (19));

} else {
var statearr_29502_29563 = state_29433__$1;
(statearr_29502_29563[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (38))){
var inst_29412 = (state_29433[(2)]);
var state_29433__$1 = state_29433;
var statearr_29503_29564 = state_29433__$1;
(statearr_29503_29564[(2)] = inst_29412);

(statearr_29503_29564[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (30))){
var state_29433__$1 = state_29433;
var statearr_29504_29565 = state_29433__$1;
(statearr_29504_29565[(2)] = null);

(statearr_29504_29565[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (10))){
var inst_29311 = (state_29433[(13)]);
var inst_29313 = (state_29433[(15)]);
var inst_29321 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29311,inst_29313);
var inst_29322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29321,(0),null);
var inst_29323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29321,(1),null);
var state_29433__$1 = (function (){var statearr_29505 = state_29433;
(statearr_29505[(26)] = inst_29322);

return statearr_29505;
})();
if(cljs.core.truth_(inst_29323)){
var statearr_29506_29566 = state_29433__$1;
(statearr_29506_29566[(1)] = (13));

} else {
var statearr_29507_29567 = state_29433__$1;
(statearr_29507_29567[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (18))){
var inst_29358 = (state_29433[(2)]);
var state_29433__$1 = state_29433;
var statearr_29508_29568 = state_29433__$1;
(statearr_29508_29568[(2)] = inst_29358);

(statearr_29508_29568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (42))){
var state_29433__$1 = state_29433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29433__$1,(45),dchan);
} else {
if((state_val_29434 === (37))){
var inst_29301 = (state_29433[(11)]);
var inst_29401 = (state_29433[(23)]);
var inst_29392 = (state_29433[(25)]);
var inst_29401__$1 = cljs.core.first(inst_29392);
var inst_29402 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29401__$1,inst_29301,done);
var state_29433__$1 = (function (){var statearr_29509 = state_29433;
(statearr_29509[(23)] = inst_29401__$1);

return statearr_29509;
})();
if(cljs.core.truth_(inst_29402)){
var statearr_29510_29569 = state_29433__$1;
(statearr_29510_29569[(1)] = (39));

} else {
var statearr_29511_29570 = state_29433__$1;
(statearr_29511_29570[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (8))){
var inst_29313 = (state_29433[(15)]);
var inst_29312 = (state_29433[(17)]);
var inst_29315 = (inst_29313 < inst_29312);
var inst_29316 = inst_29315;
var state_29433__$1 = state_29433;
if(cljs.core.truth_(inst_29316)){
var statearr_29512_29571 = state_29433__$1;
(statearr_29512_29571[(1)] = (10));

} else {
var statearr_29513_29572 = state_29433__$1;
(statearr_29513_29572[(1)] = (11));

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
});})(c__28598__auto___29518,cs,m,dchan,dctr,done))
;
return ((function (switch__28366__auto__,c__28598__auto___29518,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28367__auto__ = null;
var cljs$core$async$mult_$_state_machine__28367__auto____0 = (function (){
var statearr_29514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29514[(0)] = cljs$core$async$mult_$_state_machine__28367__auto__);

(statearr_29514[(1)] = (1));

return statearr_29514;
});
var cljs$core$async$mult_$_state_machine__28367__auto____1 = (function (state_29433){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_29433);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e29515){if((e29515 instanceof Object)){
var ex__28370__auto__ = e29515;
var statearr_29516_29573 = state_29433;
(statearr_29516_29573[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29515;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29574 = state_29433;
state_29433 = G__29574;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28367__auto__ = function(state_29433){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28367__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28367__auto____1.call(this,state_29433);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28367__auto____0;
cljs$core$async$mult_$_state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28367__auto____1;
return cljs$core$async$mult_$_state_machine__28367__auto__;
})()
;})(switch__28366__auto__,c__28598__auto___29518,cs,m,dchan,dctr,done))
})();
var state__28600__auto__ = (function (){var statearr_29517 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_29517[(6)] = c__28598__auto___29518);

return statearr_29517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(c__28598__auto___29518,cs,m,dchan,dctr,done))
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
var G__29576 = arguments.length;
switch (G__29576) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto__.call(null,m,state_map));
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto__.call(null,m,mode));
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29588 = arguments.length;
var i__4500__auto___29589 = (0);
while(true){
if((i__4500__auto___29589 < len__4499__auto___29588)){
args__4502__auto__.push((arguments[i__4500__auto___29589]));

var G__29590 = (i__4500__auto___29589 + (1));
i__4500__auto___29589 = G__29590;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29582){
var map__29583 = p__29582;
var map__29583__$1 = ((((!((map__29583 == null)))?(((((map__29583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29583):map__29583);
var opts = map__29583__$1;
var statearr_29585_29591 = state;
(statearr_29585_29591[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__29583,map__29583__$1,opts){
return (function (val){
var statearr_29586_29592 = state;
(statearr_29586_29592[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__29583,map__29583__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_29587_29593 = state;
(statearr_29587_29593[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29578){
var G__29579 = cljs.core.first(seq29578);
var seq29578__$1 = cljs.core.next(seq29578);
var G__29580 = cljs.core.first(seq29578__$1);
var seq29578__$2 = cljs.core.next(seq29578__$1);
var G__29581 = cljs.core.first(seq29578__$2);
var seq29578__$3 = cljs.core.next(seq29578__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29579,G__29580,G__29581,seq29578__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29594 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29594 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta29595){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta29595 = meta29595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29596,meta29595__$1){
var self__ = this;
var _29596__$1 = this;
return (new cljs.core.async.t_cljs$core$async29594(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta29595__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29594.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29596){
var self__ = this;
var _29596__$1 = this;
return self__.meta29595;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29594.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29594.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29594.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29594.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29594.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29594.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29594.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29594.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29594.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta29595","meta29595",901872779,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29594.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29594";

cljs.core.async.t_cljs$core$async29594.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async29594");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29594.
 */
cljs.core.async.__GT_t_cljs$core$async29594 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29594(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29595){
return (new cljs.core.async.t_cljs$core$async29594(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29595));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29594(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28598__auto___29758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28598__auto___29758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (c__28598__auto___29758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29698){
var state_val_29699 = (state_29698[(1)]);
if((state_val_29699 === (7))){
var inst_29613 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
var statearr_29700_29759 = state_29698__$1;
(statearr_29700_29759[(2)] = inst_29613);

(statearr_29700_29759[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (20))){
var inst_29625 = (state_29698[(7)]);
var state_29698__$1 = state_29698;
var statearr_29701_29760 = state_29698__$1;
(statearr_29701_29760[(2)] = inst_29625);

(statearr_29701_29760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (27))){
var state_29698__$1 = state_29698;
var statearr_29702_29761 = state_29698__$1;
(statearr_29702_29761[(2)] = null);

(statearr_29702_29761[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (1))){
var inst_29600 = (state_29698[(8)]);
var inst_29600__$1 = calc_state();
var inst_29602 = (inst_29600__$1 == null);
var inst_29603 = cljs.core.not(inst_29602);
var state_29698__$1 = (function (){var statearr_29703 = state_29698;
(statearr_29703[(8)] = inst_29600__$1);

return statearr_29703;
})();
if(inst_29603){
var statearr_29704_29762 = state_29698__$1;
(statearr_29704_29762[(1)] = (2));

} else {
var statearr_29705_29763 = state_29698__$1;
(statearr_29705_29763[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (24))){
var inst_29649 = (state_29698[(9)]);
var inst_29658 = (state_29698[(10)]);
var inst_29672 = (state_29698[(11)]);
var inst_29672__$1 = (inst_29649.cljs$core$IFn$_invoke$arity$1 ? inst_29649.cljs$core$IFn$_invoke$arity$1(inst_29658) : inst_29649.call(null,inst_29658));
var state_29698__$1 = (function (){var statearr_29706 = state_29698;
(statearr_29706[(11)] = inst_29672__$1);

return statearr_29706;
})();
if(cljs.core.truth_(inst_29672__$1)){
var statearr_29707_29764 = state_29698__$1;
(statearr_29707_29764[(1)] = (29));

} else {
var statearr_29708_29765 = state_29698__$1;
(statearr_29708_29765[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (4))){
var inst_29616 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
if(cljs.core.truth_(inst_29616)){
var statearr_29709_29766 = state_29698__$1;
(statearr_29709_29766[(1)] = (8));

} else {
var statearr_29710_29767 = state_29698__$1;
(statearr_29710_29767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (15))){
var inst_29643 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
if(cljs.core.truth_(inst_29643)){
var statearr_29711_29768 = state_29698__$1;
(statearr_29711_29768[(1)] = (19));

} else {
var statearr_29712_29769 = state_29698__$1;
(statearr_29712_29769[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (21))){
var inst_29648 = (state_29698[(12)]);
var inst_29648__$1 = (state_29698[(2)]);
var inst_29649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29648__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29648__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29648__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29698__$1 = (function (){var statearr_29713 = state_29698;
(statearr_29713[(9)] = inst_29649);

(statearr_29713[(12)] = inst_29648__$1);

(statearr_29713[(13)] = inst_29650);

return statearr_29713;
})();
return cljs.core.async.ioc_alts_BANG_(state_29698__$1,(22),inst_29651);
} else {
if((state_val_29699 === (31))){
var inst_29680 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
if(cljs.core.truth_(inst_29680)){
var statearr_29714_29770 = state_29698__$1;
(statearr_29714_29770[(1)] = (32));

} else {
var statearr_29715_29771 = state_29698__$1;
(statearr_29715_29771[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (32))){
var inst_29657 = (state_29698[(14)]);
var state_29698__$1 = state_29698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29698__$1,(35),out,inst_29657);
} else {
if((state_val_29699 === (33))){
var inst_29648 = (state_29698[(12)]);
var inst_29625 = inst_29648;
var state_29698__$1 = (function (){var statearr_29716 = state_29698;
(statearr_29716[(7)] = inst_29625);

return statearr_29716;
})();
var statearr_29717_29772 = state_29698__$1;
(statearr_29717_29772[(2)] = null);

(statearr_29717_29772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (13))){
var inst_29625 = (state_29698[(7)]);
var inst_29632 = inst_29625.cljs$lang$protocol_mask$partition0$;
var inst_29633 = (inst_29632 & (64));
var inst_29634 = inst_29625.cljs$core$ISeq$;
var inst_29635 = (cljs.core.PROTOCOL_SENTINEL === inst_29634);
var inst_29636 = ((inst_29633) || (inst_29635));
var state_29698__$1 = state_29698;
if(cljs.core.truth_(inst_29636)){
var statearr_29718_29773 = state_29698__$1;
(statearr_29718_29773[(1)] = (16));

} else {
var statearr_29719_29774 = state_29698__$1;
(statearr_29719_29774[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (22))){
var inst_29657 = (state_29698[(14)]);
var inst_29658 = (state_29698[(10)]);
var inst_29656 = (state_29698[(2)]);
var inst_29657__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29656,(0),null);
var inst_29658__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29656,(1),null);
var inst_29659 = (inst_29657__$1 == null);
var inst_29660 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29658__$1,change);
var inst_29661 = ((inst_29659) || (inst_29660));
var state_29698__$1 = (function (){var statearr_29720 = state_29698;
(statearr_29720[(14)] = inst_29657__$1);

(statearr_29720[(10)] = inst_29658__$1);

return statearr_29720;
})();
if(cljs.core.truth_(inst_29661)){
var statearr_29721_29775 = state_29698__$1;
(statearr_29721_29775[(1)] = (23));

} else {
var statearr_29722_29776 = state_29698__$1;
(statearr_29722_29776[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (36))){
var inst_29648 = (state_29698[(12)]);
var inst_29625 = inst_29648;
var state_29698__$1 = (function (){var statearr_29723 = state_29698;
(statearr_29723[(7)] = inst_29625);

return statearr_29723;
})();
var statearr_29724_29777 = state_29698__$1;
(statearr_29724_29777[(2)] = null);

(statearr_29724_29777[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (29))){
var inst_29672 = (state_29698[(11)]);
var state_29698__$1 = state_29698;
var statearr_29725_29778 = state_29698__$1;
(statearr_29725_29778[(2)] = inst_29672);

(statearr_29725_29778[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (6))){
var state_29698__$1 = state_29698;
var statearr_29726_29779 = state_29698__$1;
(statearr_29726_29779[(2)] = false);

(statearr_29726_29779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (28))){
var inst_29668 = (state_29698[(2)]);
var inst_29669 = calc_state();
var inst_29625 = inst_29669;
var state_29698__$1 = (function (){var statearr_29727 = state_29698;
(statearr_29727[(15)] = inst_29668);

(statearr_29727[(7)] = inst_29625);

return statearr_29727;
})();
var statearr_29728_29780 = state_29698__$1;
(statearr_29728_29780[(2)] = null);

(statearr_29728_29780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (25))){
var inst_29694 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
var statearr_29729_29781 = state_29698__$1;
(statearr_29729_29781[(2)] = inst_29694);

(statearr_29729_29781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (34))){
var inst_29692 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
var statearr_29730_29782 = state_29698__$1;
(statearr_29730_29782[(2)] = inst_29692);

(statearr_29730_29782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (17))){
var state_29698__$1 = state_29698;
var statearr_29731_29783 = state_29698__$1;
(statearr_29731_29783[(2)] = false);

(statearr_29731_29783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (3))){
var state_29698__$1 = state_29698;
var statearr_29732_29784 = state_29698__$1;
(statearr_29732_29784[(2)] = false);

(statearr_29732_29784[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (12))){
var inst_29696 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29698__$1,inst_29696);
} else {
if((state_val_29699 === (2))){
var inst_29600 = (state_29698[(8)]);
var inst_29605 = inst_29600.cljs$lang$protocol_mask$partition0$;
var inst_29606 = (inst_29605 & (64));
var inst_29607 = inst_29600.cljs$core$ISeq$;
var inst_29608 = (cljs.core.PROTOCOL_SENTINEL === inst_29607);
var inst_29609 = ((inst_29606) || (inst_29608));
var state_29698__$1 = state_29698;
if(cljs.core.truth_(inst_29609)){
var statearr_29733_29785 = state_29698__$1;
(statearr_29733_29785[(1)] = (5));

} else {
var statearr_29734_29786 = state_29698__$1;
(statearr_29734_29786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (23))){
var inst_29657 = (state_29698[(14)]);
var inst_29663 = (inst_29657 == null);
var state_29698__$1 = state_29698;
if(cljs.core.truth_(inst_29663)){
var statearr_29735_29787 = state_29698__$1;
(statearr_29735_29787[(1)] = (26));

} else {
var statearr_29736_29788 = state_29698__$1;
(statearr_29736_29788[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (35))){
var inst_29683 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
if(cljs.core.truth_(inst_29683)){
var statearr_29737_29789 = state_29698__$1;
(statearr_29737_29789[(1)] = (36));

} else {
var statearr_29738_29790 = state_29698__$1;
(statearr_29738_29790[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (19))){
var inst_29625 = (state_29698[(7)]);
var inst_29645 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_29625);
var state_29698__$1 = state_29698;
var statearr_29739_29791 = state_29698__$1;
(statearr_29739_29791[(2)] = inst_29645);

(statearr_29739_29791[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (11))){
var inst_29625 = (state_29698[(7)]);
var inst_29629 = (inst_29625 == null);
var inst_29630 = cljs.core.not(inst_29629);
var state_29698__$1 = state_29698;
if(inst_29630){
var statearr_29740_29792 = state_29698__$1;
(statearr_29740_29792[(1)] = (13));

} else {
var statearr_29741_29793 = state_29698__$1;
(statearr_29741_29793[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (9))){
var inst_29600 = (state_29698[(8)]);
var state_29698__$1 = state_29698;
var statearr_29742_29794 = state_29698__$1;
(statearr_29742_29794[(2)] = inst_29600);

(statearr_29742_29794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (5))){
var state_29698__$1 = state_29698;
var statearr_29743_29795 = state_29698__$1;
(statearr_29743_29795[(2)] = true);

(statearr_29743_29795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (14))){
var state_29698__$1 = state_29698;
var statearr_29744_29796 = state_29698__$1;
(statearr_29744_29796[(2)] = false);

(statearr_29744_29796[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (26))){
var inst_29658 = (state_29698[(10)]);
var inst_29665 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_29658);
var state_29698__$1 = state_29698;
var statearr_29745_29797 = state_29698__$1;
(statearr_29745_29797[(2)] = inst_29665);

(statearr_29745_29797[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (16))){
var state_29698__$1 = state_29698;
var statearr_29746_29798 = state_29698__$1;
(statearr_29746_29798[(2)] = true);

(statearr_29746_29798[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (38))){
var inst_29688 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
var statearr_29747_29799 = state_29698__$1;
(statearr_29747_29799[(2)] = inst_29688);

(statearr_29747_29799[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (30))){
var inst_29649 = (state_29698[(9)]);
var inst_29650 = (state_29698[(13)]);
var inst_29658 = (state_29698[(10)]);
var inst_29675 = cljs.core.empty_QMARK_(inst_29649);
var inst_29676 = (inst_29650.cljs$core$IFn$_invoke$arity$1 ? inst_29650.cljs$core$IFn$_invoke$arity$1(inst_29658) : inst_29650.call(null,inst_29658));
var inst_29677 = cljs.core.not(inst_29676);
var inst_29678 = ((inst_29675) && (inst_29677));
var state_29698__$1 = state_29698;
var statearr_29748_29800 = state_29698__$1;
(statearr_29748_29800[(2)] = inst_29678);

(statearr_29748_29800[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (10))){
var inst_29600 = (state_29698[(8)]);
var inst_29621 = (state_29698[(2)]);
var inst_29622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29621,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29621,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29621,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29625 = inst_29600;
var state_29698__$1 = (function (){var statearr_29749 = state_29698;
(statearr_29749[(16)] = inst_29623);

(statearr_29749[(17)] = inst_29624);

(statearr_29749[(7)] = inst_29625);

(statearr_29749[(18)] = inst_29622);

return statearr_29749;
})();
var statearr_29750_29801 = state_29698__$1;
(statearr_29750_29801[(2)] = null);

(statearr_29750_29801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (18))){
var inst_29640 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
var statearr_29751_29802 = state_29698__$1;
(statearr_29751_29802[(2)] = inst_29640);

(statearr_29751_29802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (37))){
var state_29698__$1 = state_29698;
var statearr_29752_29803 = state_29698__$1;
(statearr_29752_29803[(2)] = null);

(statearr_29752_29803[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (8))){
var inst_29600 = (state_29698[(8)]);
var inst_29618 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_29600);
var state_29698__$1 = state_29698;
var statearr_29753_29804 = state_29698__$1;
(statearr_29753_29804[(2)] = inst_29618);

(statearr_29753_29804[(1)] = (10));


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
});})(c__28598__auto___29758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28366__auto__,c__28598__auto___29758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28367__auto__ = null;
var cljs$core$async$mix_$_state_machine__28367__auto____0 = (function (){
var statearr_29754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29754[(0)] = cljs$core$async$mix_$_state_machine__28367__auto__);

(statearr_29754[(1)] = (1));

return statearr_29754;
});
var cljs$core$async$mix_$_state_machine__28367__auto____1 = (function (state_29698){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_29698);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e29755){if((e29755 instanceof Object)){
var ex__28370__auto__ = e29755;
var statearr_29756_29805 = state_29698;
(statearr_29756_29805[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29755;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29806 = state_29698;
state_29698 = G__29806;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28367__auto__ = function(state_29698){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28367__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28367__auto____1.call(this,state_29698);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28367__auto____0;
cljs$core$async$mix_$_state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28367__auto____1;
return cljs$core$async$mix_$_state_machine__28367__auto__;
})()
;})(switch__28366__auto__,c__28598__auto___29758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28600__auto__ = (function (){var statearr_29757 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_29757[(6)] = c__28598__auto___29758);

return statearr_29757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(c__28598__auto___29758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto__.call(null,p,v,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29808 = arguments.length;
switch (G__29808) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto__.call(null,p));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto__.call(null,p,v));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__29812 = arguments.length;
switch (G__29812) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3922__auto__,mults){
return (function (p1__29810_SHARP_){
if(cljs.core.truth_((p1__29810_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__29810_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__29810_SHARP_.call(null,topic)))){
return p1__29810_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__29810_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29813 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29813 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29814){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29814 = meta29814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29815,meta29814__$1){
var self__ = this;
var _29815__$1 = this;
return (new cljs.core.async.t_cljs$core$async29813(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29814__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29815){
var self__ = this;
var _29815__$1 = this;
return self__.meta29814;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29813.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29813.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29813.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29813.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29813.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29813.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29813.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29813.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29814","meta29814",-1155157021,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29813.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29813";

cljs.core.async.t_cljs$core$async29813.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async29813");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29813.
 */
cljs.core.async.__GT_t_cljs$core$async29813 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29813(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29814){
return (new cljs.core.async.t_cljs$core$async29813(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29814));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29813(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28598__auto___29933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28598__auto___29933,mults,ensure_mult,p){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (c__28598__auto___29933,mults,ensure_mult,p){
return (function (state_29887){
var state_val_29888 = (state_29887[(1)]);
if((state_val_29888 === (7))){
var inst_29883 = (state_29887[(2)]);
var state_29887__$1 = state_29887;
var statearr_29889_29934 = state_29887__$1;
(statearr_29889_29934[(2)] = inst_29883);

(statearr_29889_29934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (20))){
var state_29887__$1 = state_29887;
var statearr_29890_29935 = state_29887__$1;
(statearr_29890_29935[(2)] = null);

(statearr_29890_29935[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (1))){
var state_29887__$1 = state_29887;
var statearr_29891_29936 = state_29887__$1;
(statearr_29891_29936[(2)] = null);

(statearr_29891_29936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (24))){
var inst_29866 = (state_29887[(7)]);
var inst_29875 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_29866);
var state_29887__$1 = state_29887;
var statearr_29892_29937 = state_29887__$1;
(statearr_29892_29937[(2)] = inst_29875);

(statearr_29892_29937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (4))){
var inst_29818 = (state_29887[(8)]);
var inst_29818__$1 = (state_29887[(2)]);
var inst_29819 = (inst_29818__$1 == null);
var state_29887__$1 = (function (){var statearr_29893 = state_29887;
(statearr_29893[(8)] = inst_29818__$1);

return statearr_29893;
})();
if(cljs.core.truth_(inst_29819)){
var statearr_29894_29938 = state_29887__$1;
(statearr_29894_29938[(1)] = (5));

} else {
var statearr_29895_29939 = state_29887__$1;
(statearr_29895_29939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (15))){
var inst_29860 = (state_29887[(2)]);
var state_29887__$1 = state_29887;
var statearr_29896_29940 = state_29887__$1;
(statearr_29896_29940[(2)] = inst_29860);

(statearr_29896_29940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (21))){
var inst_29880 = (state_29887[(2)]);
var state_29887__$1 = (function (){var statearr_29897 = state_29887;
(statearr_29897[(9)] = inst_29880);

return statearr_29897;
})();
var statearr_29898_29941 = state_29887__$1;
(statearr_29898_29941[(2)] = null);

(statearr_29898_29941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (13))){
var inst_29842 = (state_29887[(10)]);
var inst_29844 = cljs.core.chunked_seq_QMARK_(inst_29842);
var state_29887__$1 = state_29887;
if(inst_29844){
var statearr_29899_29942 = state_29887__$1;
(statearr_29899_29942[(1)] = (16));

} else {
var statearr_29900_29943 = state_29887__$1;
(statearr_29900_29943[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (22))){
var inst_29872 = (state_29887[(2)]);
var state_29887__$1 = state_29887;
if(cljs.core.truth_(inst_29872)){
var statearr_29901_29944 = state_29887__$1;
(statearr_29901_29944[(1)] = (23));

} else {
var statearr_29902_29945 = state_29887__$1;
(statearr_29902_29945[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (6))){
var inst_29866 = (state_29887[(7)]);
var inst_29818 = (state_29887[(8)]);
var inst_29868 = (state_29887[(11)]);
var inst_29866__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_29818) : topic_fn.call(null,inst_29818));
var inst_29867 = cljs.core.deref(mults);
var inst_29868__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29867,inst_29866__$1);
var state_29887__$1 = (function (){var statearr_29903 = state_29887;
(statearr_29903[(7)] = inst_29866__$1);

(statearr_29903[(11)] = inst_29868__$1);

return statearr_29903;
})();
if(cljs.core.truth_(inst_29868__$1)){
var statearr_29904_29946 = state_29887__$1;
(statearr_29904_29946[(1)] = (19));

} else {
var statearr_29905_29947 = state_29887__$1;
(statearr_29905_29947[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (25))){
var inst_29877 = (state_29887[(2)]);
var state_29887__$1 = state_29887;
var statearr_29906_29948 = state_29887__$1;
(statearr_29906_29948[(2)] = inst_29877);

(statearr_29906_29948[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (17))){
var inst_29842 = (state_29887[(10)]);
var inst_29851 = cljs.core.first(inst_29842);
var inst_29852 = cljs.core.async.muxch_STAR_(inst_29851);
var inst_29853 = cljs.core.async.close_BANG_(inst_29852);
var inst_29854 = cljs.core.next(inst_29842);
var inst_29828 = inst_29854;
var inst_29829 = null;
var inst_29830 = (0);
var inst_29831 = (0);
var state_29887__$1 = (function (){var statearr_29907 = state_29887;
(statearr_29907[(12)] = inst_29831);

(statearr_29907[(13)] = inst_29829);

(statearr_29907[(14)] = inst_29853);

(statearr_29907[(15)] = inst_29828);

(statearr_29907[(16)] = inst_29830);

return statearr_29907;
})();
var statearr_29908_29949 = state_29887__$1;
(statearr_29908_29949[(2)] = null);

(statearr_29908_29949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (3))){
var inst_29885 = (state_29887[(2)]);
var state_29887__$1 = state_29887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29887__$1,inst_29885);
} else {
if((state_val_29888 === (12))){
var inst_29862 = (state_29887[(2)]);
var state_29887__$1 = state_29887;
var statearr_29909_29950 = state_29887__$1;
(statearr_29909_29950[(2)] = inst_29862);

(statearr_29909_29950[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (2))){
var state_29887__$1 = state_29887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29887__$1,(4),ch);
} else {
if((state_val_29888 === (23))){
var state_29887__$1 = state_29887;
var statearr_29910_29951 = state_29887__$1;
(statearr_29910_29951[(2)] = null);

(statearr_29910_29951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (19))){
var inst_29818 = (state_29887[(8)]);
var inst_29868 = (state_29887[(11)]);
var inst_29870 = cljs.core.async.muxch_STAR_(inst_29868);
var state_29887__$1 = state_29887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29887__$1,(22),inst_29870,inst_29818);
} else {
if((state_val_29888 === (11))){
var inst_29842 = (state_29887[(10)]);
var inst_29828 = (state_29887[(15)]);
var inst_29842__$1 = cljs.core.seq(inst_29828);
var state_29887__$1 = (function (){var statearr_29911 = state_29887;
(statearr_29911[(10)] = inst_29842__$1);

return statearr_29911;
})();
if(inst_29842__$1){
var statearr_29912_29952 = state_29887__$1;
(statearr_29912_29952[(1)] = (13));

} else {
var statearr_29913_29953 = state_29887__$1;
(statearr_29913_29953[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (9))){
var inst_29864 = (state_29887[(2)]);
var state_29887__$1 = state_29887;
var statearr_29914_29954 = state_29887__$1;
(statearr_29914_29954[(2)] = inst_29864);

(statearr_29914_29954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (5))){
var inst_29825 = cljs.core.deref(mults);
var inst_29826 = cljs.core.vals(inst_29825);
var inst_29827 = cljs.core.seq(inst_29826);
var inst_29828 = inst_29827;
var inst_29829 = null;
var inst_29830 = (0);
var inst_29831 = (0);
var state_29887__$1 = (function (){var statearr_29915 = state_29887;
(statearr_29915[(12)] = inst_29831);

(statearr_29915[(13)] = inst_29829);

(statearr_29915[(15)] = inst_29828);

(statearr_29915[(16)] = inst_29830);

return statearr_29915;
})();
var statearr_29916_29955 = state_29887__$1;
(statearr_29916_29955[(2)] = null);

(statearr_29916_29955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (14))){
var state_29887__$1 = state_29887;
var statearr_29920_29956 = state_29887__$1;
(statearr_29920_29956[(2)] = null);

(statearr_29920_29956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (16))){
var inst_29842 = (state_29887[(10)]);
var inst_29846 = cljs.core.chunk_first(inst_29842);
var inst_29847 = cljs.core.chunk_rest(inst_29842);
var inst_29848 = cljs.core.count(inst_29846);
var inst_29828 = inst_29847;
var inst_29829 = inst_29846;
var inst_29830 = inst_29848;
var inst_29831 = (0);
var state_29887__$1 = (function (){var statearr_29921 = state_29887;
(statearr_29921[(12)] = inst_29831);

(statearr_29921[(13)] = inst_29829);

(statearr_29921[(15)] = inst_29828);

(statearr_29921[(16)] = inst_29830);

return statearr_29921;
})();
var statearr_29922_29957 = state_29887__$1;
(statearr_29922_29957[(2)] = null);

(statearr_29922_29957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (10))){
var inst_29831 = (state_29887[(12)]);
var inst_29829 = (state_29887[(13)]);
var inst_29828 = (state_29887[(15)]);
var inst_29830 = (state_29887[(16)]);
var inst_29836 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29829,inst_29831);
var inst_29837 = cljs.core.async.muxch_STAR_(inst_29836);
var inst_29838 = cljs.core.async.close_BANG_(inst_29837);
var inst_29839 = (inst_29831 + (1));
var tmp29917 = inst_29829;
var tmp29918 = inst_29828;
var tmp29919 = inst_29830;
var inst_29828__$1 = tmp29918;
var inst_29829__$1 = tmp29917;
var inst_29830__$1 = tmp29919;
var inst_29831__$1 = inst_29839;
var state_29887__$1 = (function (){var statearr_29923 = state_29887;
(statearr_29923[(12)] = inst_29831__$1);

(statearr_29923[(17)] = inst_29838);

(statearr_29923[(13)] = inst_29829__$1);

(statearr_29923[(15)] = inst_29828__$1);

(statearr_29923[(16)] = inst_29830__$1);

return statearr_29923;
})();
var statearr_29924_29958 = state_29887__$1;
(statearr_29924_29958[(2)] = null);

(statearr_29924_29958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (18))){
var inst_29857 = (state_29887[(2)]);
var state_29887__$1 = state_29887;
var statearr_29925_29959 = state_29887__$1;
(statearr_29925_29959[(2)] = inst_29857);

(statearr_29925_29959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (8))){
var inst_29831 = (state_29887[(12)]);
var inst_29830 = (state_29887[(16)]);
var inst_29833 = (inst_29831 < inst_29830);
var inst_29834 = inst_29833;
var state_29887__$1 = state_29887;
if(cljs.core.truth_(inst_29834)){
var statearr_29926_29960 = state_29887__$1;
(statearr_29926_29960[(1)] = (10));

} else {
var statearr_29927_29961 = state_29887__$1;
(statearr_29927_29961[(1)] = (11));

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
});})(c__28598__auto___29933,mults,ensure_mult,p))
;
return ((function (switch__28366__auto__,c__28598__auto___29933,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28367__auto__ = null;
var cljs$core$async$state_machine__28367__auto____0 = (function (){
var statearr_29928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29928[(0)] = cljs$core$async$state_machine__28367__auto__);

(statearr_29928[(1)] = (1));

return statearr_29928;
});
var cljs$core$async$state_machine__28367__auto____1 = (function (state_29887){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_29887);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e29929){if((e29929 instanceof Object)){
var ex__28370__auto__ = e29929;
var statearr_29930_29962 = state_29887;
(statearr_29930_29962[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29929;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29963 = state_29887;
state_29887 = G__29963;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
cljs$core$async$state_machine__28367__auto__ = function(state_29887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28367__auto____1.call(this,state_29887);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28367__auto____0;
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28367__auto____1;
return cljs$core$async$state_machine__28367__auto__;
})()
;})(switch__28366__auto__,c__28598__auto___29933,mults,ensure_mult,p))
})();
var state__28600__auto__ = (function (){var statearr_29931 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_29931[(6)] = c__28598__auto___29933);

return statearr_29931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(c__28598__auto___29933,mults,ensure_mult,p))
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
var G__29965 = arguments.length;
switch (G__29965) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29968 = arguments.length;
switch (G__29968) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__29971 = arguments.length;
switch (G__29971) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__28598__auto___30038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28598__auto___30038,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (c__28598__auto___30038,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30010){
var state_val_30011 = (state_30010[(1)]);
if((state_val_30011 === (7))){
var state_30010__$1 = state_30010;
var statearr_30012_30039 = state_30010__$1;
(statearr_30012_30039[(2)] = null);

(statearr_30012_30039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (1))){
var state_30010__$1 = state_30010;
var statearr_30013_30040 = state_30010__$1;
(statearr_30013_30040[(2)] = null);

(statearr_30013_30040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (4))){
var inst_29974 = (state_30010[(7)]);
var inst_29976 = (inst_29974 < cnt);
var state_30010__$1 = state_30010;
if(cljs.core.truth_(inst_29976)){
var statearr_30014_30041 = state_30010__$1;
(statearr_30014_30041[(1)] = (6));

} else {
var statearr_30015_30042 = state_30010__$1;
(statearr_30015_30042[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (15))){
var inst_30006 = (state_30010[(2)]);
var state_30010__$1 = state_30010;
var statearr_30016_30043 = state_30010__$1;
(statearr_30016_30043[(2)] = inst_30006);

(statearr_30016_30043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (13))){
var inst_29999 = cljs.core.async.close_BANG_(out);
var state_30010__$1 = state_30010;
var statearr_30017_30044 = state_30010__$1;
(statearr_30017_30044[(2)] = inst_29999);

(statearr_30017_30044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (6))){
var state_30010__$1 = state_30010;
var statearr_30018_30045 = state_30010__$1;
(statearr_30018_30045[(2)] = null);

(statearr_30018_30045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (3))){
var inst_30008 = (state_30010[(2)]);
var state_30010__$1 = state_30010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30010__$1,inst_30008);
} else {
if((state_val_30011 === (12))){
var inst_29996 = (state_30010[(8)]);
var inst_29996__$1 = (state_30010[(2)]);
var inst_29997 = cljs.core.some(cljs.core.nil_QMARK_,inst_29996__$1);
var state_30010__$1 = (function (){var statearr_30019 = state_30010;
(statearr_30019[(8)] = inst_29996__$1);

return statearr_30019;
})();
if(cljs.core.truth_(inst_29997)){
var statearr_30020_30046 = state_30010__$1;
(statearr_30020_30046[(1)] = (13));

} else {
var statearr_30021_30047 = state_30010__$1;
(statearr_30021_30047[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (2))){
var inst_29973 = cljs.core.reset_BANG_(dctr,cnt);
var inst_29974 = (0);
var state_30010__$1 = (function (){var statearr_30022 = state_30010;
(statearr_30022[(7)] = inst_29974);

(statearr_30022[(9)] = inst_29973);

return statearr_30022;
})();
var statearr_30023_30048 = state_30010__$1;
(statearr_30023_30048[(2)] = null);

(statearr_30023_30048[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (11))){
var inst_29974 = (state_30010[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_30010,(10),Object,null,(9));
var inst_29983 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_29974) : chs__$1.call(null,inst_29974));
var inst_29984 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_29974) : done.call(null,inst_29974));
var inst_29985 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_29983,inst_29984);
var state_30010__$1 = state_30010;
var statearr_30024_30049 = state_30010__$1;
(statearr_30024_30049[(2)] = inst_29985);


cljs.core.async.impl.ioc_helpers.process_exception(state_30010__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (9))){
var inst_29974 = (state_30010[(7)]);
var inst_29987 = (state_30010[(2)]);
var inst_29988 = (inst_29974 + (1));
var inst_29974__$1 = inst_29988;
var state_30010__$1 = (function (){var statearr_30025 = state_30010;
(statearr_30025[(10)] = inst_29987);

(statearr_30025[(7)] = inst_29974__$1);

return statearr_30025;
})();
var statearr_30026_30050 = state_30010__$1;
(statearr_30026_30050[(2)] = null);

(statearr_30026_30050[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (5))){
var inst_29994 = (state_30010[(2)]);
var state_30010__$1 = (function (){var statearr_30027 = state_30010;
(statearr_30027[(11)] = inst_29994);

return statearr_30027;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30010__$1,(12),dchan);
} else {
if((state_val_30011 === (14))){
var inst_29996 = (state_30010[(8)]);
var inst_30001 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_29996);
var state_30010__$1 = state_30010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30010__$1,(16),out,inst_30001);
} else {
if((state_val_30011 === (16))){
var inst_30003 = (state_30010[(2)]);
var state_30010__$1 = (function (){var statearr_30028 = state_30010;
(statearr_30028[(12)] = inst_30003);

return statearr_30028;
})();
var statearr_30029_30051 = state_30010__$1;
(statearr_30029_30051[(2)] = null);

(statearr_30029_30051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (10))){
var inst_29978 = (state_30010[(2)]);
var inst_29979 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30010__$1 = (function (){var statearr_30030 = state_30010;
(statearr_30030[(13)] = inst_29978);

return statearr_30030;
})();
var statearr_30031_30052 = state_30010__$1;
(statearr_30031_30052[(2)] = inst_29979);


cljs.core.async.impl.ioc_helpers.process_exception(state_30010__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (8))){
var inst_29992 = (state_30010[(2)]);
var state_30010__$1 = state_30010;
var statearr_30032_30053 = state_30010__$1;
(statearr_30032_30053[(2)] = inst_29992);

(statearr_30032_30053[(1)] = (5));


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
});})(c__28598__auto___30038,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28366__auto__,c__28598__auto___30038,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28367__auto__ = null;
var cljs$core$async$state_machine__28367__auto____0 = (function (){
var statearr_30033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30033[(0)] = cljs$core$async$state_machine__28367__auto__);

(statearr_30033[(1)] = (1));

return statearr_30033;
});
var cljs$core$async$state_machine__28367__auto____1 = (function (state_30010){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_30010);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e30034){if((e30034 instanceof Object)){
var ex__28370__auto__ = e30034;
var statearr_30035_30054 = state_30010;
(statearr_30035_30054[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30034;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30055 = state_30010;
state_30010 = G__30055;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
cljs$core$async$state_machine__28367__auto__ = function(state_30010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28367__auto____1.call(this,state_30010);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28367__auto____0;
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28367__auto____1;
return cljs$core$async$state_machine__28367__auto__;
})()
;})(switch__28366__auto__,c__28598__auto___30038,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28600__auto__ = (function (){var statearr_30036 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_30036[(6)] = c__28598__auto___30038);

return statearr_30036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(c__28598__auto___30038,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__30058 = arguments.length;
switch (G__30058) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28598__auto___30112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28598__auto___30112,out){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (c__28598__auto___30112,out){
return (function (state_30090){
var state_val_30091 = (state_30090[(1)]);
if((state_val_30091 === (7))){
var inst_30070 = (state_30090[(7)]);
var inst_30069 = (state_30090[(8)]);
var inst_30069__$1 = (state_30090[(2)]);
var inst_30070__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30069__$1,(0),null);
var inst_30071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30069__$1,(1),null);
var inst_30072 = (inst_30070__$1 == null);
var state_30090__$1 = (function (){var statearr_30092 = state_30090;
(statearr_30092[(9)] = inst_30071);

(statearr_30092[(7)] = inst_30070__$1);

(statearr_30092[(8)] = inst_30069__$1);

return statearr_30092;
})();
if(cljs.core.truth_(inst_30072)){
var statearr_30093_30113 = state_30090__$1;
(statearr_30093_30113[(1)] = (8));

} else {
var statearr_30094_30114 = state_30090__$1;
(statearr_30094_30114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (1))){
var inst_30059 = cljs.core.vec(chs);
var inst_30060 = inst_30059;
var state_30090__$1 = (function (){var statearr_30095 = state_30090;
(statearr_30095[(10)] = inst_30060);

return statearr_30095;
})();
var statearr_30096_30115 = state_30090__$1;
(statearr_30096_30115[(2)] = null);

(statearr_30096_30115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (4))){
var inst_30060 = (state_30090[(10)]);
var state_30090__$1 = state_30090;
return cljs.core.async.ioc_alts_BANG_(state_30090__$1,(7),inst_30060);
} else {
if((state_val_30091 === (6))){
var inst_30086 = (state_30090[(2)]);
var state_30090__$1 = state_30090;
var statearr_30097_30116 = state_30090__$1;
(statearr_30097_30116[(2)] = inst_30086);

(statearr_30097_30116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (3))){
var inst_30088 = (state_30090[(2)]);
var state_30090__$1 = state_30090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30090__$1,inst_30088);
} else {
if((state_val_30091 === (2))){
var inst_30060 = (state_30090[(10)]);
var inst_30062 = cljs.core.count(inst_30060);
var inst_30063 = (inst_30062 > (0));
var state_30090__$1 = state_30090;
if(cljs.core.truth_(inst_30063)){
var statearr_30099_30117 = state_30090__$1;
(statearr_30099_30117[(1)] = (4));

} else {
var statearr_30100_30118 = state_30090__$1;
(statearr_30100_30118[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (11))){
var inst_30060 = (state_30090[(10)]);
var inst_30079 = (state_30090[(2)]);
var tmp30098 = inst_30060;
var inst_30060__$1 = tmp30098;
var state_30090__$1 = (function (){var statearr_30101 = state_30090;
(statearr_30101[(10)] = inst_30060__$1);

(statearr_30101[(11)] = inst_30079);

return statearr_30101;
})();
var statearr_30102_30119 = state_30090__$1;
(statearr_30102_30119[(2)] = null);

(statearr_30102_30119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (9))){
var inst_30070 = (state_30090[(7)]);
var state_30090__$1 = state_30090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30090__$1,(11),out,inst_30070);
} else {
if((state_val_30091 === (5))){
var inst_30084 = cljs.core.async.close_BANG_(out);
var state_30090__$1 = state_30090;
var statearr_30103_30120 = state_30090__$1;
(statearr_30103_30120[(2)] = inst_30084);

(statearr_30103_30120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (10))){
var inst_30082 = (state_30090[(2)]);
var state_30090__$1 = state_30090;
var statearr_30104_30121 = state_30090__$1;
(statearr_30104_30121[(2)] = inst_30082);

(statearr_30104_30121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (8))){
var inst_30060 = (state_30090[(10)]);
var inst_30071 = (state_30090[(9)]);
var inst_30070 = (state_30090[(7)]);
var inst_30069 = (state_30090[(8)]);
var inst_30074 = (function (){var cs = inst_30060;
var vec__30065 = inst_30069;
var v = inst_30070;
var c = inst_30071;
return ((function (cs,vec__30065,v,c,inst_30060,inst_30071,inst_30070,inst_30069,state_val_30091,c__28598__auto___30112,out){
return (function (p1__30056_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30056_SHARP_);
});
;})(cs,vec__30065,v,c,inst_30060,inst_30071,inst_30070,inst_30069,state_val_30091,c__28598__auto___30112,out))
})();
var inst_30075 = cljs.core.filterv(inst_30074,inst_30060);
var inst_30060__$1 = inst_30075;
var state_30090__$1 = (function (){var statearr_30105 = state_30090;
(statearr_30105[(10)] = inst_30060__$1);

return statearr_30105;
})();
var statearr_30106_30122 = state_30090__$1;
(statearr_30106_30122[(2)] = null);

(statearr_30106_30122[(1)] = (2));


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
});})(c__28598__auto___30112,out))
;
return ((function (switch__28366__auto__,c__28598__auto___30112,out){
return (function() {
var cljs$core$async$state_machine__28367__auto__ = null;
var cljs$core$async$state_machine__28367__auto____0 = (function (){
var statearr_30107 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30107[(0)] = cljs$core$async$state_machine__28367__auto__);

(statearr_30107[(1)] = (1));

return statearr_30107;
});
var cljs$core$async$state_machine__28367__auto____1 = (function (state_30090){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_30090);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e30108){if((e30108 instanceof Object)){
var ex__28370__auto__ = e30108;
var statearr_30109_30123 = state_30090;
(statearr_30109_30123[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30108;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30124 = state_30090;
state_30090 = G__30124;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
cljs$core$async$state_machine__28367__auto__ = function(state_30090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28367__auto____1.call(this,state_30090);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28367__auto____0;
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28367__auto____1;
return cljs$core$async$state_machine__28367__auto__;
})()
;})(switch__28366__auto__,c__28598__auto___30112,out))
})();
var state__28600__auto__ = (function (){var statearr_30110 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_30110[(6)] = c__28598__auto___30112);

return statearr_30110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(c__28598__auto___30112,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__30126 = arguments.length;
switch (G__30126) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28598__auto___30171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28598__auto___30171,out){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (c__28598__auto___30171,out){
return (function (state_30150){
var state_val_30151 = (state_30150[(1)]);
if((state_val_30151 === (7))){
var inst_30132 = (state_30150[(7)]);
var inst_30132__$1 = (state_30150[(2)]);
var inst_30133 = (inst_30132__$1 == null);
var inst_30134 = cljs.core.not(inst_30133);
var state_30150__$1 = (function (){var statearr_30152 = state_30150;
(statearr_30152[(7)] = inst_30132__$1);

return statearr_30152;
})();
if(inst_30134){
var statearr_30153_30172 = state_30150__$1;
(statearr_30153_30172[(1)] = (8));

} else {
var statearr_30154_30173 = state_30150__$1;
(statearr_30154_30173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (1))){
var inst_30127 = (0);
var state_30150__$1 = (function (){var statearr_30155 = state_30150;
(statearr_30155[(8)] = inst_30127);

return statearr_30155;
})();
var statearr_30156_30174 = state_30150__$1;
(statearr_30156_30174[(2)] = null);

(statearr_30156_30174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (4))){
var state_30150__$1 = state_30150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30150__$1,(7),ch);
} else {
if((state_val_30151 === (6))){
var inst_30145 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
var statearr_30157_30175 = state_30150__$1;
(statearr_30157_30175[(2)] = inst_30145);

(statearr_30157_30175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (3))){
var inst_30147 = (state_30150[(2)]);
var inst_30148 = cljs.core.async.close_BANG_(out);
var state_30150__$1 = (function (){var statearr_30158 = state_30150;
(statearr_30158[(9)] = inst_30147);

return statearr_30158;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30150__$1,inst_30148);
} else {
if((state_val_30151 === (2))){
var inst_30127 = (state_30150[(8)]);
var inst_30129 = (inst_30127 < n);
var state_30150__$1 = state_30150;
if(cljs.core.truth_(inst_30129)){
var statearr_30159_30176 = state_30150__$1;
(statearr_30159_30176[(1)] = (4));

} else {
var statearr_30160_30177 = state_30150__$1;
(statearr_30160_30177[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (11))){
var inst_30127 = (state_30150[(8)]);
var inst_30137 = (state_30150[(2)]);
var inst_30138 = (inst_30127 + (1));
var inst_30127__$1 = inst_30138;
var state_30150__$1 = (function (){var statearr_30161 = state_30150;
(statearr_30161[(10)] = inst_30137);

(statearr_30161[(8)] = inst_30127__$1);

return statearr_30161;
})();
var statearr_30162_30178 = state_30150__$1;
(statearr_30162_30178[(2)] = null);

(statearr_30162_30178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (9))){
var state_30150__$1 = state_30150;
var statearr_30163_30179 = state_30150__$1;
(statearr_30163_30179[(2)] = null);

(statearr_30163_30179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (5))){
var state_30150__$1 = state_30150;
var statearr_30164_30180 = state_30150__$1;
(statearr_30164_30180[(2)] = null);

(statearr_30164_30180[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (10))){
var inst_30142 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
var statearr_30165_30181 = state_30150__$1;
(statearr_30165_30181[(2)] = inst_30142);

(statearr_30165_30181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (8))){
var inst_30132 = (state_30150[(7)]);
var state_30150__$1 = state_30150;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30150__$1,(11),out,inst_30132);
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
});})(c__28598__auto___30171,out))
;
return ((function (switch__28366__auto__,c__28598__auto___30171,out){
return (function() {
var cljs$core$async$state_machine__28367__auto__ = null;
var cljs$core$async$state_machine__28367__auto____0 = (function (){
var statearr_30166 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30166[(0)] = cljs$core$async$state_machine__28367__auto__);

(statearr_30166[(1)] = (1));

return statearr_30166;
});
var cljs$core$async$state_machine__28367__auto____1 = (function (state_30150){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_30150);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e30167){if((e30167 instanceof Object)){
var ex__28370__auto__ = e30167;
var statearr_30168_30182 = state_30150;
(statearr_30168_30182[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30167;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30183 = state_30150;
state_30150 = G__30183;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
cljs$core$async$state_machine__28367__auto__ = function(state_30150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28367__auto____1.call(this,state_30150);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28367__auto____0;
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28367__auto____1;
return cljs$core$async$state_machine__28367__auto__;
})()
;})(switch__28366__auto__,c__28598__auto___30171,out))
})();
var state__28600__auto__ = (function (){var statearr_30169 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_30169[(6)] = c__28598__auto___30171);

return statearr_30169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(c__28598__auto___30171,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30185 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30185 = (function (f,ch,meta30186){
this.f = f;
this.ch = ch;
this.meta30186 = meta30186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30187,meta30186__$1){
var self__ = this;
var _30187__$1 = this;
return (new cljs.core.async.t_cljs$core$async30185(self__.f,self__.ch,meta30186__$1));
});

cljs.core.async.t_cljs$core$async30185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30187){
var self__ = this;
var _30187__$1 = this;
return self__.meta30186;
});

cljs.core.async.t_cljs$core$async30185.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30185.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async30185.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async30185.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30185.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30188 = (function (f,ch,meta30186,_,fn1,meta30189){
this.f = f;
this.ch = ch;
this.meta30186 = meta30186;
this._ = _;
this.fn1 = fn1;
this.meta30189 = meta30189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30190,meta30189__$1){
var self__ = this;
var _30190__$1 = this;
return (new cljs.core.async.t_cljs$core$async30188(self__.f,self__.ch,self__.meta30186,self__._,self__.fn1,meta30189__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30188.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30190){
var self__ = this;
var _30190__$1 = this;
return self__.meta30189;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30188.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30188.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30188.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30188.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30184_SHARP_){
var G__30191 = (((p1__30184_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__30184_SHARP_) : self__.f.call(null,p1__30184_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__30191) : f1.call(null,G__30191));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30188.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30186","meta30186",213792163,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30185","cljs.core.async/t_cljs$core$async30185",758726200,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30189","meta30189",-22110114,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30188";

cljs.core.async.t_cljs$core$async30188.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async30188");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30188.
 */
cljs.core.async.__GT_t_cljs$core$async30188 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30188(f__$1,ch__$1,meta30186__$1,___$2,fn1__$1,meta30189){
return (new cljs.core.async.t_cljs$core$async30188(f__$1,ch__$1,meta30186__$1,___$2,fn1__$1,meta30189));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30188(self__.f,self__.ch,self__.meta30186,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__30192 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30192) : self__.f.call(null,G__30192));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30185.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30185.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30185.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30186","meta30186",213792163,null)], null);
});

cljs.core.async.t_cljs$core$async30185.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30185.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30185";

cljs.core.async.t_cljs$core$async30185.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async30185");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30185.
 */
cljs.core.async.__GT_t_cljs$core$async30185 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30185(f__$1,ch__$1,meta30186){
return (new cljs.core.async.t_cljs$core$async30185(f__$1,ch__$1,meta30186));
});

}

return (new cljs.core.async.t_cljs$core$async30185(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30193 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30193 = (function (f,ch,meta30194){
this.f = f;
this.ch = ch;
this.meta30194 = meta30194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30195,meta30194__$1){
var self__ = this;
var _30195__$1 = this;
return (new cljs.core.async.t_cljs$core$async30193(self__.f,self__.ch,meta30194__$1));
});

cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30195){
var self__ = this;
var _30195__$1 = this;
return self__.meta30194;
});

cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async30193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30194","meta30194",-523543639,null)], null);
});

cljs.core.async.t_cljs$core$async30193.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30193";

cljs.core.async.t_cljs$core$async30193.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async30193");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30193.
 */
cljs.core.async.__GT_t_cljs$core$async30193 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30193(f__$1,ch__$1,meta30194){
return (new cljs.core.async.t_cljs$core$async30193(f__$1,ch__$1,meta30194));
});

}

return (new cljs.core.async.t_cljs$core$async30193(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30196 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30196 = (function (p,ch,meta30197){
this.p = p;
this.ch = ch;
this.meta30197 = meta30197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30198,meta30197__$1){
var self__ = this;
var _30198__$1 = this;
return (new cljs.core.async.t_cljs$core$async30196(self__.p,self__.ch,meta30197__$1));
});

cljs.core.async.t_cljs$core$async30196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30198){
var self__ = this;
var _30198__$1 = this;
return self__.meta30197;
});

cljs.core.async.t_cljs$core$async30196.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30196.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async30196.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async30196.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30196.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30196.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30196.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30197","meta30197",-1789307945,null)], null);
});

cljs.core.async.t_cljs$core$async30196.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30196";

cljs.core.async.t_cljs$core$async30196.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async30196");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30196.
 */
cljs.core.async.__GT_t_cljs$core$async30196 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30196(p__$1,ch__$1,meta30197){
return (new cljs.core.async.t_cljs$core$async30196(p__$1,ch__$1,meta30197));
});

}

return (new cljs.core.async.t_cljs$core$async30196(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__30200 = arguments.length;
switch (G__30200) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28598__auto___30240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28598__auto___30240,out){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (c__28598__auto___30240,out){
return (function (state_30221){
var state_val_30222 = (state_30221[(1)]);
if((state_val_30222 === (7))){
var inst_30217 = (state_30221[(2)]);
var state_30221__$1 = state_30221;
var statearr_30223_30241 = state_30221__$1;
(statearr_30223_30241[(2)] = inst_30217);

(statearr_30223_30241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (1))){
var state_30221__$1 = state_30221;
var statearr_30224_30242 = state_30221__$1;
(statearr_30224_30242[(2)] = null);

(statearr_30224_30242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (4))){
var inst_30203 = (state_30221[(7)]);
var inst_30203__$1 = (state_30221[(2)]);
var inst_30204 = (inst_30203__$1 == null);
var state_30221__$1 = (function (){var statearr_30225 = state_30221;
(statearr_30225[(7)] = inst_30203__$1);

return statearr_30225;
})();
if(cljs.core.truth_(inst_30204)){
var statearr_30226_30243 = state_30221__$1;
(statearr_30226_30243[(1)] = (5));

} else {
var statearr_30227_30244 = state_30221__$1;
(statearr_30227_30244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (6))){
var inst_30203 = (state_30221[(7)]);
var inst_30208 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30203) : p.call(null,inst_30203));
var state_30221__$1 = state_30221;
if(cljs.core.truth_(inst_30208)){
var statearr_30228_30245 = state_30221__$1;
(statearr_30228_30245[(1)] = (8));

} else {
var statearr_30229_30246 = state_30221__$1;
(statearr_30229_30246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (3))){
var inst_30219 = (state_30221[(2)]);
var state_30221__$1 = state_30221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30221__$1,inst_30219);
} else {
if((state_val_30222 === (2))){
var state_30221__$1 = state_30221;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30221__$1,(4),ch);
} else {
if((state_val_30222 === (11))){
var inst_30211 = (state_30221[(2)]);
var state_30221__$1 = state_30221;
var statearr_30230_30247 = state_30221__$1;
(statearr_30230_30247[(2)] = inst_30211);

(statearr_30230_30247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (9))){
var state_30221__$1 = state_30221;
var statearr_30231_30248 = state_30221__$1;
(statearr_30231_30248[(2)] = null);

(statearr_30231_30248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (5))){
var inst_30206 = cljs.core.async.close_BANG_(out);
var state_30221__$1 = state_30221;
var statearr_30232_30249 = state_30221__$1;
(statearr_30232_30249[(2)] = inst_30206);

(statearr_30232_30249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (10))){
var inst_30214 = (state_30221[(2)]);
var state_30221__$1 = (function (){var statearr_30233 = state_30221;
(statearr_30233[(8)] = inst_30214);

return statearr_30233;
})();
var statearr_30234_30250 = state_30221__$1;
(statearr_30234_30250[(2)] = null);

(statearr_30234_30250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30222 === (8))){
var inst_30203 = (state_30221[(7)]);
var state_30221__$1 = state_30221;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30221__$1,(11),out,inst_30203);
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
});})(c__28598__auto___30240,out))
;
return ((function (switch__28366__auto__,c__28598__auto___30240,out){
return (function() {
var cljs$core$async$state_machine__28367__auto__ = null;
var cljs$core$async$state_machine__28367__auto____0 = (function (){
var statearr_30235 = [null,null,null,null,null,null,null,null,null];
(statearr_30235[(0)] = cljs$core$async$state_machine__28367__auto__);

(statearr_30235[(1)] = (1));

return statearr_30235;
});
var cljs$core$async$state_machine__28367__auto____1 = (function (state_30221){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_30221);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e30236){if((e30236 instanceof Object)){
var ex__28370__auto__ = e30236;
var statearr_30237_30251 = state_30221;
(statearr_30237_30251[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30236;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30252 = state_30221;
state_30221 = G__30252;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
cljs$core$async$state_machine__28367__auto__ = function(state_30221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28367__auto____1.call(this,state_30221);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28367__auto____0;
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28367__auto____1;
return cljs$core$async$state_machine__28367__auto__;
})()
;})(switch__28366__auto__,c__28598__auto___30240,out))
})();
var state__28600__auto__ = (function (){var statearr_30238 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_30238[(6)] = c__28598__auto___30240);

return statearr_30238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(c__28598__auto___30240,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30254 = arguments.length;
switch (G__30254) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28598__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28598__auto__){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (c__28598__auto__){
return (function (state_30317){
var state_val_30318 = (state_30317[(1)]);
if((state_val_30318 === (7))){
var inst_30313 = (state_30317[(2)]);
var state_30317__$1 = state_30317;
var statearr_30319_30357 = state_30317__$1;
(statearr_30319_30357[(2)] = inst_30313);

(statearr_30319_30357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (20))){
var inst_30283 = (state_30317[(7)]);
var inst_30294 = (state_30317[(2)]);
var inst_30295 = cljs.core.next(inst_30283);
var inst_30269 = inst_30295;
var inst_30270 = null;
var inst_30271 = (0);
var inst_30272 = (0);
var state_30317__$1 = (function (){var statearr_30320 = state_30317;
(statearr_30320[(8)] = inst_30269);

(statearr_30320[(9)] = inst_30272);

(statearr_30320[(10)] = inst_30271);

(statearr_30320[(11)] = inst_30294);

(statearr_30320[(12)] = inst_30270);

return statearr_30320;
})();
var statearr_30321_30358 = state_30317__$1;
(statearr_30321_30358[(2)] = null);

(statearr_30321_30358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (1))){
var state_30317__$1 = state_30317;
var statearr_30322_30359 = state_30317__$1;
(statearr_30322_30359[(2)] = null);

(statearr_30322_30359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (4))){
var inst_30258 = (state_30317[(13)]);
var inst_30258__$1 = (state_30317[(2)]);
var inst_30259 = (inst_30258__$1 == null);
var state_30317__$1 = (function (){var statearr_30323 = state_30317;
(statearr_30323[(13)] = inst_30258__$1);

return statearr_30323;
})();
if(cljs.core.truth_(inst_30259)){
var statearr_30324_30360 = state_30317__$1;
(statearr_30324_30360[(1)] = (5));

} else {
var statearr_30325_30361 = state_30317__$1;
(statearr_30325_30361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (15))){
var state_30317__$1 = state_30317;
var statearr_30329_30362 = state_30317__$1;
(statearr_30329_30362[(2)] = null);

(statearr_30329_30362[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (21))){
var state_30317__$1 = state_30317;
var statearr_30330_30363 = state_30317__$1;
(statearr_30330_30363[(2)] = null);

(statearr_30330_30363[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (13))){
var inst_30269 = (state_30317[(8)]);
var inst_30272 = (state_30317[(9)]);
var inst_30271 = (state_30317[(10)]);
var inst_30270 = (state_30317[(12)]);
var inst_30279 = (state_30317[(2)]);
var inst_30280 = (inst_30272 + (1));
var tmp30326 = inst_30269;
var tmp30327 = inst_30271;
var tmp30328 = inst_30270;
var inst_30269__$1 = tmp30326;
var inst_30270__$1 = tmp30328;
var inst_30271__$1 = tmp30327;
var inst_30272__$1 = inst_30280;
var state_30317__$1 = (function (){var statearr_30331 = state_30317;
(statearr_30331[(14)] = inst_30279);

(statearr_30331[(8)] = inst_30269__$1);

(statearr_30331[(9)] = inst_30272__$1);

(statearr_30331[(10)] = inst_30271__$1);

(statearr_30331[(12)] = inst_30270__$1);

return statearr_30331;
})();
var statearr_30332_30364 = state_30317__$1;
(statearr_30332_30364[(2)] = null);

(statearr_30332_30364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (22))){
var state_30317__$1 = state_30317;
var statearr_30333_30365 = state_30317__$1;
(statearr_30333_30365[(2)] = null);

(statearr_30333_30365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (6))){
var inst_30258 = (state_30317[(13)]);
var inst_30267 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30258) : f.call(null,inst_30258));
var inst_30268 = cljs.core.seq(inst_30267);
var inst_30269 = inst_30268;
var inst_30270 = null;
var inst_30271 = (0);
var inst_30272 = (0);
var state_30317__$1 = (function (){var statearr_30334 = state_30317;
(statearr_30334[(8)] = inst_30269);

(statearr_30334[(9)] = inst_30272);

(statearr_30334[(10)] = inst_30271);

(statearr_30334[(12)] = inst_30270);

return statearr_30334;
})();
var statearr_30335_30366 = state_30317__$1;
(statearr_30335_30366[(2)] = null);

(statearr_30335_30366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (17))){
var inst_30283 = (state_30317[(7)]);
var inst_30287 = cljs.core.chunk_first(inst_30283);
var inst_30288 = cljs.core.chunk_rest(inst_30283);
var inst_30289 = cljs.core.count(inst_30287);
var inst_30269 = inst_30288;
var inst_30270 = inst_30287;
var inst_30271 = inst_30289;
var inst_30272 = (0);
var state_30317__$1 = (function (){var statearr_30336 = state_30317;
(statearr_30336[(8)] = inst_30269);

(statearr_30336[(9)] = inst_30272);

(statearr_30336[(10)] = inst_30271);

(statearr_30336[(12)] = inst_30270);

return statearr_30336;
})();
var statearr_30337_30367 = state_30317__$1;
(statearr_30337_30367[(2)] = null);

(statearr_30337_30367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (3))){
var inst_30315 = (state_30317[(2)]);
var state_30317__$1 = state_30317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30317__$1,inst_30315);
} else {
if((state_val_30318 === (12))){
var inst_30303 = (state_30317[(2)]);
var state_30317__$1 = state_30317;
var statearr_30338_30368 = state_30317__$1;
(statearr_30338_30368[(2)] = inst_30303);

(statearr_30338_30368[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (2))){
var state_30317__$1 = state_30317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30317__$1,(4),in$);
} else {
if((state_val_30318 === (23))){
var inst_30311 = (state_30317[(2)]);
var state_30317__$1 = state_30317;
var statearr_30339_30369 = state_30317__$1;
(statearr_30339_30369[(2)] = inst_30311);

(statearr_30339_30369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (19))){
var inst_30298 = (state_30317[(2)]);
var state_30317__$1 = state_30317;
var statearr_30340_30370 = state_30317__$1;
(statearr_30340_30370[(2)] = inst_30298);

(statearr_30340_30370[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (11))){
var inst_30269 = (state_30317[(8)]);
var inst_30283 = (state_30317[(7)]);
var inst_30283__$1 = cljs.core.seq(inst_30269);
var state_30317__$1 = (function (){var statearr_30341 = state_30317;
(statearr_30341[(7)] = inst_30283__$1);

return statearr_30341;
})();
if(inst_30283__$1){
var statearr_30342_30371 = state_30317__$1;
(statearr_30342_30371[(1)] = (14));

} else {
var statearr_30343_30372 = state_30317__$1;
(statearr_30343_30372[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (9))){
var inst_30305 = (state_30317[(2)]);
var inst_30306 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_30317__$1 = (function (){var statearr_30344 = state_30317;
(statearr_30344[(15)] = inst_30305);

return statearr_30344;
})();
if(cljs.core.truth_(inst_30306)){
var statearr_30345_30373 = state_30317__$1;
(statearr_30345_30373[(1)] = (21));

} else {
var statearr_30346_30374 = state_30317__$1;
(statearr_30346_30374[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (5))){
var inst_30261 = cljs.core.async.close_BANG_(out);
var state_30317__$1 = state_30317;
var statearr_30347_30375 = state_30317__$1;
(statearr_30347_30375[(2)] = inst_30261);

(statearr_30347_30375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (14))){
var inst_30283 = (state_30317[(7)]);
var inst_30285 = cljs.core.chunked_seq_QMARK_(inst_30283);
var state_30317__$1 = state_30317;
if(inst_30285){
var statearr_30348_30376 = state_30317__$1;
(statearr_30348_30376[(1)] = (17));

} else {
var statearr_30349_30377 = state_30317__$1;
(statearr_30349_30377[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (16))){
var inst_30301 = (state_30317[(2)]);
var state_30317__$1 = state_30317;
var statearr_30350_30378 = state_30317__$1;
(statearr_30350_30378[(2)] = inst_30301);

(statearr_30350_30378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30318 === (10))){
var inst_30272 = (state_30317[(9)]);
var inst_30270 = (state_30317[(12)]);
var inst_30277 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30270,inst_30272);
var state_30317__$1 = state_30317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30317__$1,(13),out,inst_30277);
} else {
if((state_val_30318 === (18))){
var inst_30283 = (state_30317[(7)]);
var inst_30292 = cljs.core.first(inst_30283);
var state_30317__$1 = state_30317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30317__$1,(20),out,inst_30292);
} else {
if((state_val_30318 === (8))){
var inst_30272 = (state_30317[(9)]);
var inst_30271 = (state_30317[(10)]);
var inst_30274 = (inst_30272 < inst_30271);
var inst_30275 = inst_30274;
var state_30317__$1 = state_30317;
if(cljs.core.truth_(inst_30275)){
var statearr_30351_30379 = state_30317__$1;
(statearr_30351_30379[(1)] = (10));

} else {
var statearr_30352_30380 = state_30317__$1;
(statearr_30352_30380[(1)] = (11));

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
});})(c__28598__auto__))
;
return ((function (switch__28366__auto__,c__28598__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28367__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28367__auto____0 = (function (){
var statearr_30353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30353[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28367__auto__);

(statearr_30353[(1)] = (1));

return statearr_30353;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28367__auto____1 = (function (state_30317){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_30317);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e30354){if((e30354 instanceof Object)){
var ex__28370__auto__ = e30354;
var statearr_30355_30381 = state_30317;
(statearr_30355_30381[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30354;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30382 = state_30317;
state_30317 = G__30382;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28367__auto__ = function(state_30317){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28367__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28367__auto____1.call(this,state_30317);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28367__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28367__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28367__auto__;
})()
;})(switch__28366__auto__,c__28598__auto__))
})();
var state__28600__auto__ = (function (){var statearr_30356 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_30356[(6)] = c__28598__auto__);

return statearr_30356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(c__28598__auto__))
);

return c__28598__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30384 = arguments.length;
switch (G__30384) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__30387 = arguments.length;
switch (G__30387) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__30390 = arguments.length;
switch (G__30390) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28598__auto___30437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28598__auto___30437,out){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (c__28598__auto___30437,out){
return (function (state_30414){
var state_val_30415 = (state_30414[(1)]);
if((state_val_30415 === (7))){
var inst_30409 = (state_30414[(2)]);
var state_30414__$1 = state_30414;
var statearr_30416_30438 = state_30414__$1;
(statearr_30416_30438[(2)] = inst_30409);

(statearr_30416_30438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (1))){
var inst_30391 = null;
var state_30414__$1 = (function (){var statearr_30417 = state_30414;
(statearr_30417[(7)] = inst_30391);

return statearr_30417;
})();
var statearr_30418_30439 = state_30414__$1;
(statearr_30418_30439[(2)] = null);

(statearr_30418_30439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (4))){
var inst_30394 = (state_30414[(8)]);
var inst_30394__$1 = (state_30414[(2)]);
var inst_30395 = (inst_30394__$1 == null);
var inst_30396 = cljs.core.not(inst_30395);
var state_30414__$1 = (function (){var statearr_30419 = state_30414;
(statearr_30419[(8)] = inst_30394__$1);

return statearr_30419;
})();
if(inst_30396){
var statearr_30420_30440 = state_30414__$1;
(statearr_30420_30440[(1)] = (5));

} else {
var statearr_30421_30441 = state_30414__$1;
(statearr_30421_30441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (6))){
var state_30414__$1 = state_30414;
var statearr_30422_30442 = state_30414__$1;
(statearr_30422_30442[(2)] = null);

(statearr_30422_30442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (3))){
var inst_30411 = (state_30414[(2)]);
var inst_30412 = cljs.core.async.close_BANG_(out);
var state_30414__$1 = (function (){var statearr_30423 = state_30414;
(statearr_30423[(9)] = inst_30411);

return statearr_30423;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30414__$1,inst_30412);
} else {
if((state_val_30415 === (2))){
var state_30414__$1 = state_30414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30414__$1,(4),ch);
} else {
if((state_val_30415 === (11))){
var inst_30394 = (state_30414[(8)]);
var inst_30403 = (state_30414[(2)]);
var inst_30391 = inst_30394;
var state_30414__$1 = (function (){var statearr_30424 = state_30414;
(statearr_30424[(10)] = inst_30403);

(statearr_30424[(7)] = inst_30391);

return statearr_30424;
})();
var statearr_30425_30443 = state_30414__$1;
(statearr_30425_30443[(2)] = null);

(statearr_30425_30443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (9))){
var inst_30394 = (state_30414[(8)]);
var state_30414__$1 = state_30414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30414__$1,(11),out,inst_30394);
} else {
if((state_val_30415 === (5))){
var inst_30394 = (state_30414[(8)]);
var inst_30391 = (state_30414[(7)]);
var inst_30398 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30394,inst_30391);
var state_30414__$1 = state_30414;
if(inst_30398){
var statearr_30427_30444 = state_30414__$1;
(statearr_30427_30444[(1)] = (8));

} else {
var statearr_30428_30445 = state_30414__$1;
(statearr_30428_30445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (10))){
var inst_30406 = (state_30414[(2)]);
var state_30414__$1 = state_30414;
var statearr_30429_30446 = state_30414__$1;
(statearr_30429_30446[(2)] = inst_30406);

(statearr_30429_30446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (8))){
var inst_30391 = (state_30414[(7)]);
var tmp30426 = inst_30391;
var inst_30391__$1 = tmp30426;
var state_30414__$1 = (function (){var statearr_30430 = state_30414;
(statearr_30430[(7)] = inst_30391__$1);

return statearr_30430;
})();
var statearr_30431_30447 = state_30414__$1;
(statearr_30431_30447[(2)] = null);

(statearr_30431_30447[(1)] = (2));


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
});})(c__28598__auto___30437,out))
;
return ((function (switch__28366__auto__,c__28598__auto___30437,out){
return (function() {
var cljs$core$async$state_machine__28367__auto__ = null;
var cljs$core$async$state_machine__28367__auto____0 = (function (){
var statearr_30432 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30432[(0)] = cljs$core$async$state_machine__28367__auto__);

(statearr_30432[(1)] = (1));

return statearr_30432;
});
var cljs$core$async$state_machine__28367__auto____1 = (function (state_30414){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_30414);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e30433){if((e30433 instanceof Object)){
var ex__28370__auto__ = e30433;
var statearr_30434_30448 = state_30414;
(statearr_30434_30448[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30433;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30449 = state_30414;
state_30414 = G__30449;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
cljs$core$async$state_machine__28367__auto__ = function(state_30414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28367__auto____1.call(this,state_30414);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28367__auto____0;
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28367__auto____1;
return cljs$core$async$state_machine__28367__auto__;
})()
;})(switch__28366__auto__,c__28598__auto___30437,out))
})();
var state__28600__auto__ = (function (){var statearr_30435 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_30435[(6)] = c__28598__auto___30437);

return statearr_30435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(c__28598__auto___30437,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30451 = arguments.length;
switch (G__30451) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28598__auto___30517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28598__auto___30517,out){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (c__28598__auto___30517,out){
return (function (state_30489){
var state_val_30490 = (state_30489[(1)]);
if((state_val_30490 === (7))){
var inst_30485 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
var statearr_30491_30518 = state_30489__$1;
(statearr_30491_30518[(2)] = inst_30485);

(statearr_30491_30518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (1))){
var inst_30452 = (new Array(n));
var inst_30453 = inst_30452;
var inst_30454 = (0);
var state_30489__$1 = (function (){var statearr_30492 = state_30489;
(statearr_30492[(7)] = inst_30453);

(statearr_30492[(8)] = inst_30454);

return statearr_30492;
})();
var statearr_30493_30519 = state_30489__$1;
(statearr_30493_30519[(2)] = null);

(statearr_30493_30519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (4))){
var inst_30457 = (state_30489[(9)]);
var inst_30457__$1 = (state_30489[(2)]);
var inst_30458 = (inst_30457__$1 == null);
var inst_30459 = cljs.core.not(inst_30458);
var state_30489__$1 = (function (){var statearr_30494 = state_30489;
(statearr_30494[(9)] = inst_30457__$1);

return statearr_30494;
})();
if(inst_30459){
var statearr_30495_30520 = state_30489__$1;
(statearr_30495_30520[(1)] = (5));

} else {
var statearr_30496_30521 = state_30489__$1;
(statearr_30496_30521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (15))){
var inst_30479 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
var statearr_30497_30522 = state_30489__$1;
(statearr_30497_30522[(2)] = inst_30479);

(statearr_30497_30522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (13))){
var state_30489__$1 = state_30489;
var statearr_30498_30523 = state_30489__$1;
(statearr_30498_30523[(2)] = null);

(statearr_30498_30523[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (6))){
var inst_30454 = (state_30489[(8)]);
var inst_30475 = (inst_30454 > (0));
var state_30489__$1 = state_30489;
if(cljs.core.truth_(inst_30475)){
var statearr_30499_30524 = state_30489__$1;
(statearr_30499_30524[(1)] = (12));

} else {
var statearr_30500_30525 = state_30489__$1;
(statearr_30500_30525[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (3))){
var inst_30487 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30489__$1,inst_30487);
} else {
if((state_val_30490 === (12))){
var inst_30453 = (state_30489[(7)]);
var inst_30477 = cljs.core.vec(inst_30453);
var state_30489__$1 = state_30489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30489__$1,(15),out,inst_30477);
} else {
if((state_val_30490 === (2))){
var state_30489__$1 = state_30489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30489__$1,(4),ch);
} else {
if((state_val_30490 === (11))){
var inst_30469 = (state_30489[(2)]);
var inst_30470 = (new Array(n));
var inst_30453 = inst_30470;
var inst_30454 = (0);
var state_30489__$1 = (function (){var statearr_30501 = state_30489;
(statearr_30501[(7)] = inst_30453);

(statearr_30501[(8)] = inst_30454);

(statearr_30501[(10)] = inst_30469);

return statearr_30501;
})();
var statearr_30502_30526 = state_30489__$1;
(statearr_30502_30526[(2)] = null);

(statearr_30502_30526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (9))){
var inst_30453 = (state_30489[(7)]);
var inst_30467 = cljs.core.vec(inst_30453);
var state_30489__$1 = state_30489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30489__$1,(11),out,inst_30467);
} else {
if((state_val_30490 === (5))){
var inst_30462 = (state_30489[(11)]);
var inst_30453 = (state_30489[(7)]);
var inst_30454 = (state_30489[(8)]);
var inst_30457 = (state_30489[(9)]);
var inst_30461 = (inst_30453[inst_30454] = inst_30457);
var inst_30462__$1 = (inst_30454 + (1));
var inst_30463 = (inst_30462__$1 < n);
var state_30489__$1 = (function (){var statearr_30503 = state_30489;
(statearr_30503[(12)] = inst_30461);

(statearr_30503[(11)] = inst_30462__$1);

return statearr_30503;
})();
if(cljs.core.truth_(inst_30463)){
var statearr_30504_30527 = state_30489__$1;
(statearr_30504_30527[(1)] = (8));

} else {
var statearr_30505_30528 = state_30489__$1;
(statearr_30505_30528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (14))){
var inst_30482 = (state_30489[(2)]);
var inst_30483 = cljs.core.async.close_BANG_(out);
var state_30489__$1 = (function (){var statearr_30507 = state_30489;
(statearr_30507[(13)] = inst_30482);

return statearr_30507;
})();
var statearr_30508_30529 = state_30489__$1;
(statearr_30508_30529[(2)] = inst_30483);

(statearr_30508_30529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (10))){
var inst_30473 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
var statearr_30509_30530 = state_30489__$1;
(statearr_30509_30530[(2)] = inst_30473);

(statearr_30509_30530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (8))){
var inst_30462 = (state_30489[(11)]);
var inst_30453 = (state_30489[(7)]);
var tmp30506 = inst_30453;
var inst_30453__$1 = tmp30506;
var inst_30454 = inst_30462;
var state_30489__$1 = (function (){var statearr_30510 = state_30489;
(statearr_30510[(7)] = inst_30453__$1);

(statearr_30510[(8)] = inst_30454);

return statearr_30510;
})();
var statearr_30511_30531 = state_30489__$1;
(statearr_30511_30531[(2)] = null);

(statearr_30511_30531[(1)] = (2));


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
});})(c__28598__auto___30517,out))
;
return ((function (switch__28366__auto__,c__28598__auto___30517,out){
return (function() {
var cljs$core$async$state_machine__28367__auto__ = null;
var cljs$core$async$state_machine__28367__auto____0 = (function (){
var statearr_30512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30512[(0)] = cljs$core$async$state_machine__28367__auto__);

(statearr_30512[(1)] = (1));

return statearr_30512;
});
var cljs$core$async$state_machine__28367__auto____1 = (function (state_30489){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_30489);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e30513){if((e30513 instanceof Object)){
var ex__28370__auto__ = e30513;
var statearr_30514_30532 = state_30489;
(statearr_30514_30532[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30513;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30533 = state_30489;
state_30489 = G__30533;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
cljs$core$async$state_machine__28367__auto__ = function(state_30489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28367__auto____1.call(this,state_30489);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28367__auto____0;
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28367__auto____1;
return cljs$core$async$state_machine__28367__auto__;
})()
;})(switch__28366__auto__,c__28598__auto___30517,out))
})();
var state__28600__auto__ = (function (){var statearr_30515 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_30515[(6)] = c__28598__auto___30517);

return statearr_30515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(c__28598__auto___30517,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30535 = arguments.length;
switch (G__30535) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28598__auto___30605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28598__auto___30605,out){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (c__28598__auto___30605,out){
return (function (state_30577){
var state_val_30578 = (state_30577[(1)]);
if((state_val_30578 === (7))){
var inst_30573 = (state_30577[(2)]);
var state_30577__$1 = state_30577;
var statearr_30579_30606 = state_30577__$1;
(statearr_30579_30606[(2)] = inst_30573);

(statearr_30579_30606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30578 === (1))){
var inst_30536 = [];
var inst_30537 = inst_30536;
var inst_30538 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30577__$1 = (function (){var statearr_30580 = state_30577;
(statearr_30580[(7)] = inst_30537);

(statearr_30580[(8)] = inst_30538);

return statearr_30580;
})();
var statearr_30581_30607 = state_30577__$1;
(statearr_30581_30607[(2)] = null);

(statearr_30581_30607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30578 === (4))){
var inst_30541 = (state_30577[(9)]);
var inst_30541__$1 = (state_30577[(2)]);
var inst_30542 = (inst_30541__$1 == null);
var inst_30543 = cljs.core.not(inst_30542);
var state_30577__$1 = (function (){var statearr_30582 = state_30577;
(statearr_30582[(9)] = inst_30541__$1);

return statearr_30582;
})();
if(inst_30543){
var statearr_30583_30608 = state_30577__$1;
(statearr_30583_30608[(1)] = (5));

} else {
var statearr_30584_30609 = state_30577__$1;
(statearr_30584_30609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30578 === (15))){
var inst_30567 = (state_30577[(2)]);
var state_30577__$1 = state_30577;
var statearr_30585_30610 = state_30577__$1;
(statearr_30585_30610[(2)] = inst_30567);

(statearr_30585_30610[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30578 === (13))){
var state_30577__$1 = state_30577;
var statearr_30586_30611 = state_30577__$1;
(statearr_30586_30611[(2)] = null);

(statearr_30586_30611[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30578 === (6))){
var inst_30537 = (state_30577[(7)]);
var inst_30562 = inst_30537.length;
var inst_30563 = (inst_30562 > (0));
var state_30577__$1 = state_30577;
if(cljs.core.truth_(inst_30563)){
var statearr_30587_30612 = state_30577__$1;
(statearr_30587_30612[(1)] = (12));

} else {
var statearr_30588_30613 = state_30577__$1;
(statearr_30588_30613[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30578 === (3))){
var inst_30575 = (state_30577[(2)]);
var state_30577__$1 = state_30577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30577__$1,inst_30575);
} else {
if((state_val_30578 === (12))){
var inst_30537 = (state_30577[(7)]);
var inst_30565 = cljs.core.vec(inst_30537);
var state_30577__$1 = state_30577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30577__$1,(15),out,inst_30565);
} else {
if((state_val_30578 === (2))){
var state_30577__$1 = state_30577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30577__$1,(4),ch);
} else {
if((state_val_30578 === (11))){
var inst_30545 = (state_30577[(10)]);
var inst_30541 = (state_30577[(9)]);
var inst_30555 = (state_30577[(2)]);
var inst_30556 = [];
var inst_30557 = inst_30556.push(inst_30541);
var inst_30537 = inst_30556;
var inst_30538 = inst_30545;
var state_30577__$1 = (function (){var statearr_30589 = state_30577;
(statearr_30589[(7)] = inst_30537);

(statearr_30589[(11)] = inst_30555);

(statearr_30589[(12)] = inst_30557);

(statearr_30589[(8)] = inst_30538);

return statearr_30589;
})();
var statearr_30590_30614 = state_30577__$1;
(statearr_30590_30614[(2)] = null);

(statearr_30590_30614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30578 === (9))){
var inst_30537 = (state_30577[(7)]);
var inst_30553 = cljs.core.vec(inst_30537);
var state_30577__$1 = state_30577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30577__$1,(11),out,inst_30553);
} else {
if((state_val_30578 === (5))){
var inst_30545 = (state_30577[(10)]);
var inst_30538 = (state_30577[(8)]);
var inst_30541 = (state_30577[(9)]);
var inst_30545__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30541) : f.call(null,inst_30541));
var inst_30546 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30545__$1,inst_30538);
var inst_30547 = cljs.core.keyword_identical_QMARK_(inst_30538,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30548 = ((inst_30546) || (inst_30547));
var state_30577__$1 = (function (){var statearr_30591 = state_30577;
(statearr_30591[(10)] = inst_30545__$1);

return statearr_30591;
})();
if(cljs.core.truth_(inst_30548)){
var statearr_30592_30615 = state_30577__$1;
(statearr_30592_30615[(1)] = (8));

} else {
var statearr_30593_30616 = state_30577__$1;
(statearr_30593_30616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30578 === (14))){
var inst_30570 = (state_30577[(2)]);
var inst_30571 = cljs.core.async.close_BANG_(out);
var state_30577__$1 = (function (){var statearr_30595 = state_30577;
(statearr_30595[(13)] = inst_30570);

return statearr_30595;
})();
var statearr_30596_30617 = state_30577__$1;
(statearr_30596_30617[(2)] = inst_30571);

(statearr_30596_30617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30578 === (10))){
var inst_30560 = (state_30577[(2)]);
var state_30577__$1 = state_30577;
var statearr_30597_30618 = state_30577__$1;
(statearr_30597_30618[(2)] = inst_30560);

(statearr_30597_30618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30578 === (8))){
var inst_30537 = (state_30577[(7)]);
var inst_30545 = (state_30577[(10)]);
var inst_30541 = (state_30577[(9)]);
var inst_30550 = inst_30537.push(inst_30541);
var tmp30594 = inst_30537;
var inst_30537__$1 = tmp30594;
var inst_30538 = inst_30545;
var state_30577__$1 = (function (){var statearr_30598 = state_30577;
(statearr_30598[(7)] = inst_30537__$1);

(statearr_30598[(14)] = inst_30550);

(statearr_30598[(8)] = inst_30538);

return statearr_30598;
})();
var statearr_30599_30619 = state_30577__$1;
(statearr_30599_30619[(2)] = null);

(statearr_30599_30619[(1)] = (2));


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
});})(c__28598__auto___30605,out))
;
return ((function (switch__28366__auto__,c__28598__auto___30605,out){
return (function() {
var cljs$core$async$state_machine__28367__auto__ = null;
var cljs$core$async$state_machine__28367__auto____0 = (function (){
var statearr_30600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30600[(0)] = cljs$core$async$state_machine__28367__auto__);

(statearr_30600[(1)] = (1));

return statearr_30600;
});
var cljs$core$async$state_machine__28367__auto____1 = (function (state_30577){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_30577);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e30601){if((e30601 instanceof Object)){
var ex__28370__auto__ = e30601;
var statearr_30602_30620 = state_30577;
(statearr_30602_30620[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30601;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30621 = state_30577;
state_30577 = G__30621;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
cljs$core$async$state_machine__28367__auto__ = function(state_30577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28367__auto____1.call(this,state_30577);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28367__auto____0;
cljs$core$async$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28367__auto____1;
return cljs$core$async$state_machine__28367__auto__;
})()
;})(switch__28366__auto__,c__28598__auto___30605,out))
})();
var state__28600__auto__ = (function (){var statearr_30603 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_30603[(6)] = c__28598__auto___30605);

return statearr_30603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(c__28598__auto___30605,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


module.exports = cljs.core.async;

//# sourceMappingURL=cljs.core.async.js.map
