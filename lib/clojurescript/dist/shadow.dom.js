var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
require("./cljs.core.js");
require("./goog.dom.dom.js");
require("./goog.dom.forms.js");
require("./goog.dom.classlist.js");
require("./goog.style.style.js");
require("./goog.style.transition.js");
require("./goog.string.string.js");
require("./clojure.string.js");
require("./cljs.core.async.js");
var clojure=$CLJS.clojure;
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
goog.dependencies_.written["shadow.dom.js"] = true;

goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = ((typeof window !== 'undefined')?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__30711 = coll;
var G__30712 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__30711,G__30712) : shadow.dom.lazy_native_coll_seq.call(null,G__30711,G__30712));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__3922__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__30724 = arguments.length;
switch (G__30724) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__30728 = arguments.length;
switch (G__30728) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__30731 = arguments.length;
switch (G__30731) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__30734 = arguments.length;
switch (G__30734) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__30737 = arguments.length;
switch (G__30737) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__30738 = document;
var G__30739 = shadow.dom.dom_node(el);
return goog.dom.contains(G__30738,G__30739);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__30740 = shadow.dom.dom_node(parent);
var G__30741 = shadow.dom.dom_node(el);
return goog.dom.contains(G__30740,G__30741);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__30743 = shadow.dom.dom_node(el);
var G__30744 = cls;
return goog.dom.classlist.add(G__30743,G__30744);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__30745 = shadow.dom.dom_node(el);
var G__30746 = cls;
return goog.dom.classlist.remove(G__30745,G__30746);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__30748 = arguments.length;
switch (G__30748) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__30749 = shadow.dom.dom_node(el);
var G__30750 = cls;
return goog.dom.classlist.toggle(G__30749,G__30750);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__3922__auto__ = !(typeof document !== 'undefined');
if(or__3922__auto__){
return or__3922__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e30752){if((e30752 instanceof Object)){
var e = e30752;
return console.log("didnt support attachEvent",el,e);
} else {
throw e30752;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__3922__auto__ = !(typeof document !== 'undefined');
if(or__3922__auto__){
return or__3922__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__30753 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__30754 = null;
var count__30755 = (0);
var i__30756 = (0);
while(true){
if((i__30756 < count__30755)){
var el = chunk__30754.cljs$core$IIndexed$_nth$arity$2(null,i__30756);
var handler_30763__$1 = ((function (seq__30753,chunk__30754,count__30755,i__30756,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__30753,chunk__30754,count__30755,i__30756,el))
;
var G__30757_30764 = el;
var G__30758_30765 = cljs.core.name(ev);
var G__30759_30766 = handler_30763__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__30757_30764,G__30758_30765,G__30759_30766) : shadow.dom.dom_listen.call(null,G__30757_30764,G__30758_30765,G__30759_30766));


var G__30767 = seq__30753;
var G__30768 = chunk__30754;
var G__30769 = count__30755;
var G__30770 = (i__30756 + (1));
seq__30753 = G__30767;
chunk__30754 = G__30768;
count__30755 = G__30769;
i__30756 = G__30770;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__30753);
if(temp__5457__auto__){
var seq__30753__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30753__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__30753__$1);
var G__30771 = cljs.core.chunk_rest(seq__30753__$1);
var G__30772 = c__4319__auto__;
var G__30773 = cljs.core.count(c__4319__auto__);
var G__30774 = (0);
seq__30753 = G__30771;
chunk__30754 = G__30772;
count__30755 = G__30773;
i__30756 = G__30774;
continue;
} else {
var el = cljs.core.first(seq__30753__$1);
var handler_30775__$1 = ((function (seq__30753,chunk__30754,count__30755,i__30756,el,seq__30753__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__30753,chunk__30754,count__30755,i__30756,el,seq__30753__$1,temp__5457__auto__))
;
var G__30760_30776 = el;
var G__30761_30777 = cljs.core.name(ev);
var G__30762_30778 = handler_30775__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__30760_30776,G__30761_30777,G__30762_30778) : shadow.dom.dom_listen.call(null,G__30760_30776,G__30761_30777,G__30762_30778));


var G__30779 = cljs.core.next(seq__30753__$1);
var G__30780 = null;
var G__30781 = (0);
var G__30782 = (0);
seq__30753 = G__30779;
chunk__30754 = G__30780;
count__30755 = G__30781;
i__30756 = G__30782;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__30784 = arguments.length;
switch (G__30784) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__30785 = shadow.dom.dom_node(el);
var G__30786 = cljs.core.name(ev);
var G__30787 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__30785,G__30786,G__30787) : shadow.dom.dom_listen.call(null,G__30785,G__30786,G__30787));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__30789 = shadow.dom.dom_node(el);
var G__30790 = cljs.core.name(ev);
var G__30791 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__30789,G__30790,G__30791) : shadow.dom.dom_listen_remove.call(null,G__30789,G__30790,G__30791));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__30792 = cljs.core.seq(events);
var chunk__30793 = null;
var count__30794 = (0);
var i__30795 = (0);
while(true){
if((i__30795 < count__30794)){
var vec__30796 = chunk__30793.cljs$core$IIndexed$_nth$arity$2(null,i__30795);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30796,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30796,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30802 = seq__30792;
var G__30803 = chunk__30793;
var G__30804 = count__30794;
var G__30805 = (i__30795 + (1));
seq__30792 = G__30802;
chunk__30793 = G__30803;
count__30794 = G__30804;
i__30795 = G__30805;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__30792);
if(temp__5457__auto__){
var seq__30792__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30792__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__30792__$1);
var G__30806 = cljs.core.chunk_rest(seq__30792__$1);
var G__30807 = c__4319__auto__;
var G__30808 = cljs.core.count(c__4319__auto__);
var G__30809 = (0);
seq__30792 = G__30806;
chunk__30793 = G__30807;
count__30794 = G__30808;
i__30795 = G__30809;
continue;
} else {
var vec__30799 = cljs.core.first(seq__30792__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30799,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30799,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30810 = cljs.core.next(seq__30792__$1);
var G__30811 = null;
var G__30812 = (0);
var G__30813 = (0);
seq__30792 = G__30810;
chunk__30793 = G__30811;
count__30794 = G__30812;
i__30795 = G__30813;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__30814 = cljs.core.seq(styles);
var chunk__30815 = null;
var count__30816 = (0);
var i__30817 = (0);
while(true){
if((i__30817 < count__30816)){
var vec__30818 = chunk__30815.cljs$core$IIndexed$_nth$arity$2(null,i__30817);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30818,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30818,(1),null);
var G__30821_30830 = dom;
var G__30822_30831 = cljs.core.name(k);
var G__30823_30832 = (((v == null))?"":v);
goog.style.setStyle(G__30821_30830,G__30822_30831,G__30823_30832);


var G__30833 = seq__30814;
var G__30834 = chunk__30815;
var G__30835 = count__30816;
var G__30836 = (i__30817 + (1));
seq__30814 = G__30833;
chunk__30815 = G__30834;
count__30816 = G__30835;
i__30817 = G__30836;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__30814);
if(temp__5457__auto__){
var seq__30814__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30814__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__30814__$1);
var G__30837 = cljs.core.chunk_rest(seq__30814__$1);
var G__30838 = c__4319__auto__;
var G__30839 = cljs.core.count(c__4319__auto__);
var G__30840 = (0);
seq__30814 = G__30837;
chunk__30815 = G__30838;
count__30816 = G__30839;
i__30817 = G__30840;
continue;
} else {
var vec__30824 = cljs.core.first(seq__30814__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30824,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30824,(1),null);
var G__30827_30841 = dom;
var G__30828_30842 = cljs.core.name(k);
var G__30829_30843 = (((v == null))?"":v);
goog.style.setStyle(G__30827_30841,G__30828_30842,G__30829_30843);


var G__30844 = cljs.core.next(seq__30814__$1);
var G__30845 = null;
var G__30846 = (0);
var G__30847 = (0);
seq__30814 = G__30844;
chunk__30815 = G__30845;
count__30816 = G__30846;
i__30817 = G__30847;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__30848_30849 = key;
var G__30848_30850__$1 = (((G__30848_30849 instanceof cljs.core.Keyword))?G__30848_30849.fqn:null);
switch (G__30848_30850__$1) {
case "id":
el.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "class":
el.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_30852 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__3922__auto__ = goog.string.startsWith(ks_30852,"data-");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.string.startsWith(ks_30852,"aria-");
}
})())){
el.setAttribute(ks_30852,value);
} else {
(el[ks_30852] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__30853 = shadow.dom.dom_node(el);
var G__30854 = cls;
return goog.dom.classlist.contains(G__30853,G__30854);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__30855){
var map__30856 = p__30855;
var map__30856__$1 = ((((!((map__30856 == null)))?(((((map__30856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30856):map__30856);
var props = map__30856__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30856__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__30858 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30858,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30858,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30858,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__30861 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__30861,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__30861;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__30863 = arguments.length;
switch (G__30863) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__30865){
var vec__30866 = p__30865;
var seq__30867 = cljs.core.seq(vec__30866);
var first__30868 = cljs.core.first(seq__30867);
var seq__30867__$1 = cljs.core.next(seq__30867);
var nn = first__30868;
var first__30868__$1 = cljs.core.first(seq__30867__$1);
var seq__30867__$2 = cljs.core.next(seq__30867__$1);
var np = first__30868__$1;
var nc = seq__30867__$2;
var node = vec__30866;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30869 = nn;
var G__30870 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__30869,G__30870) : create_fn.call(null,G__30869,G__30870));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30871 = nn;
var G__30872 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__30871,G__30872) : create_fn.call(null,G__30871,G__30872));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__30873 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30873,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30873,(1),null);
var seq__30876_30892 = cljs.core.seq(node_children);
var chunk__30877_30893 = null;
var count__30878_30894 = (0);
var i__30879_30895 = (0);
while(true){
if((i__30879_30895 < count__30878_30894)){
var child_struct_30896 = chunk__30877_30893.cljs$core$IIndexed$_nth$arity$2(null,i__30879_30895);
var children_30897 = shadow.dom.dom_node(child_struct_30896);
if(cljs.core.seq_QMARK_(children_30897)){
var seq__30880_30898 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30897));
var chunk__30882_30899 = null;
var count__30883_30900 = (0);
var i__30884_30901 = (0);
while(true){
if((i__30884_30901 < count__30883_30900)){
var child_30902 = chunk__30882_30899.cljs$core$IIndexed$_nth$arity$2(null,i__30884_30901);
if(cljs.core.truth_(child_30902)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30902);


var G__30903 = seq__30880_30898;
var G__30904 = chunk__30882_30899;
var G__30905 = count__30883_30900;
var G__30906 = (i__30884_30901 + (1));
seq__30880_30898 = G__30903;
chunk__30882_30899 = G__30904;
count__30883_30900 = G__30905;
i__30884_30901 = G__30906;
continue;
} else {
var G__30907 = seq__30880_30898;
var G__30908 = chunk__30882_30899;
var G__30909 = count__30883_30900;
var G__30910 = (i__30884_30901 + (1));
seq__30880_30898 = G__30907;
chunk__30882_30899 = G__30908;
count__30883_30900 = G__30909;
i__30884_30901 = G__30910;
continue;
}
} else {
var temp__5457__auto___30911 = cljs.core.seq(seq__30880_30898);
if(temp__5457__auto___30911){
var seq__30880_30912__$1 = temp__5457__auto___30911;
if(cljs.core.chunked_seq_QMARK_(seq__30880_30912__$1)){
var c__4319__auto___30913 = cljs.core.chunk_first(seq__30880_30912__$1);
var G__30914 = cljs.core.chunk_rest(seq__30880_30912__$1);
var G__30915 = c__4319__auto___30913;
var G__30916 = cljs.core.count(c__4319__auto___30913);
var G__30917 = (0);
seq__30880_30898 = G__30914;
chunk__30882_30899 = G__30915;
count__30883_30900 = G__30916;
i__30884_30901 = G__30917;
continue;
} else {
var child_30918 = cljs.core.first(seq__30880_30912__$1);
if(cljs.core.truth_(child_30918)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30918);


var G__30919 = cljs.core.next(seq__30880_30912__$1);
var G__30920 = null;
var G__30921 = (0);
var G__30922 = (0);
seq__30880_30898 = G__30919;
chunk__30882_30899 = G__30920;
count__30883_30900 = G__30921;
i__30884_30901 = G__30922;
continue;
} else {
var G__30923 = cljs.core.next(seq__30880_30912__$1);
var G__30924 = null;
var G__30925 = (0);
var G__30926 = (0);
seq__30880_30898 = G__30923;
chunk__30882_30899 = G__30924;
count__30883_30900 = G__30925;
i__30884_30901 = G__30926;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30897);
}


var G__30927 = seq__30876_30892;
var G__30928 = chunk__30877_30893;
var G__30929 = count__30878_30894;
var G__30930 = (i__30879_30895 + (1));
seq__30876_30892 = G__30927;
chunk__30877_30893 = G__30928;
count__30878_30894 = G__30929;
i__30879_30895 = G__30930;
continue;
} else {
var temp__5457__auto___30931 = cljs.core.seq(seq__30876_30892);
if(temp__5457__auto___30931){
var seq__30876_30932__$1 = temp__5457__auto___30931;
if(cljs.core.chunked_seq_QMARK_(seq__30876_30932__$1)){
var c__4319__auto___30933 = cljs.core.chunk_first(seq__30876_30932__$1);
var G__30934 = cljs.core.chunk_rest(seq__30876_30932__$1);
var G__30935 = c__4319__auto___30933;
var G__30936 = cljs.core.count(c__4319__auto___30933);
var G__30937 = (0);
seq__30876_30892 = G__30934;
chunk__30877_30893 = G__30935;
count__30878_30894 = G__30936;
i__30879_30895 = G__30937;
continue;
} else {
var child_struct_30938 = cljs.core.first(seq__30876_30932__$1);
var children_30939 = shadow.dom.dom_node(child_struct_30938);
if(cljs.core.seq_QMARK_(children_30939)){
var seq__30886_30940 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30939));
var chunk__30888_30941 = null;
var count__30889_30942 = (0);
var i__30890_30943 = (0);
while(true){
if((i__30890_30943 < count__30889_30942)){
var child_30944 = chunk__30888_30941.cljs$core$IIndexed$_nth$arity$2(null,i__30890_30943);
if(cljs.core.truth_(child_30944)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30944);


var G__30945 = seq__30886_30940;
var G__30946 = chunk__30888_30941;
var G__30947 = count__30889_30942;
var G__30948 = (i__30890_30943 + (1));
seq__30886_30940 = G__30945;
chunk__30888_30941 = G__30946;
count__30889_30942 = G__30947;
i__30890_30943 = G__30948;
continue;
} else {
var G__30949 = seq__30886_30940;
var G__30950 = chunk__30888_30941;
var G__30951 = count__30889_30942;
var G__30952 = (i__30890_30943 + (1));
seq__30886_30940 = G__30949;
chunk__30888_30941 = G__30950;
count__30889_30942 = G__30951;
i__30890_30943 = G__30952;
continue;
}
} else {
var temp__5457__auto___30953__$1 = cljs.core.seq(seq__30886_30940);
if(temp__5457__auto___30953__$1){
var seq__30886_30954__$1 = temp__5457__auto___30953__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30886_30954__$1)){
var c__4319__auto___30955 = cljs.core.chunk_first(seq__30886_30954__$1);
var G__30956 = cljs.core.chunk_rest(seq__30886_30954__$1);
var G__30957 = c__4319__auto___30955;
var G__30958 = cljs.core.count(c__4319__auto___30955);
var G__30959 = (0);
seq__30886_30940 = G__30956;
chunk__30888_30941 = G__30957;
count__30889_30942 = G__30958;
i__30890_30943 = G__30959;
continue;
} else {
var child_30960 = cljs.core.first(seq__30886_30954__$1);
if(cljs.core.truth_(child_30960)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30960);


var G__30961 = cljs.core.next(seq__30886_30954__$1);
var G__30962 = null;
var G__30963 = (0);
var G__30964 = (0);
seq__30886_30940 = G__30961;
chunk__30888_30941 = G__30962;
count__30889_30942 = G__30963;
i__30890_30943 = G__30964;
continue;
} else {
var G__30965 = cljs.core.next(seq__30886_30954__$1);
var G__30966 = null;
var G__30967 = (0);
var G__30968 = (0);
seq__30886_30940 = G__30965;
chunk__30888_30941 = G__30966;
count__30889_30942 = G__30967;
i__30890_30943 = G__30968;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30939);
}


var G__30969 = cljs.core.next(seq__30876_30932__$1);
var G__30970 = null;
var G__30971 = (0);
var G__30972 = (0);
seq__30876_30892 = G__30969;
chunk__30877_30893 = G__30970;
count__30878_30894 = G__30971;
i__30879_30895 = G__30972;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__30973 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__30973);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__30975 = cljs.core.seq(node);
var chunk__30976 = null;
var count__30977 = (0);
var i__30978 = (0);
while(true){
if((i__30978 < count__30977)){
var n = chunk__30976.cljs$core$IIndexed$_nth$arity$2(null,i__30978);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30979 = seq__30975;
var G__30980 = chunk__30976;
var G__30981 = count__30977;
var G__30982 = (i__30978 + (1));
seq__30975 = G__30979;
chunk__30976 = G__30980;
count__30977 = G__30981;
i__30978 = G__30982;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__30975);
if(temp__5457__auto__){
var seq__30975__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30975__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__30975__$1);
var G__30983 = cljs.core.chunk_rest(seq__30975__$1);
var G__30984 = c__4319__auto__;
var G__30985 = cljs.core.count(c__4319__auto__);
var G__30986 = (0);
seq__30975 = G__30983;
chunk__30976 = G__30984;
count__30977 = G__30985;
i__30978 = G__30986;
continue;
} else {
var n = cljs.core.first(seq__30975__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30987 = cljs.core.next(seq__30975__$1);
var G__30988 = null;
var G__30989 = (0);
var G__30990 = (0);
seq__30975 = G__30987;
chunk__30976 = G__30988;
count__30977 = G__30989;
i__30978 = G__30990;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__30991 = shadow.dom.dom_node(new$);
var G__30992 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__30991,G__30992);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__30994 = arguments.length;
switch (G__30994) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__30997 = arguments.length;
switch (G__30997) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__31000 = arguments.length;
switch (G__31000) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__3922__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31007 = arguments.length;
var i__4500__auto___31008 = (0);
while(true){
if((i__4500__auto___31008 < len__4499__auto___31007)){
args__4502__auto__.push((arguments[i__4500__auto___31008]));

var G__31009 = (i__4500__auto___31008 + (1));
i__4500__auto___31008 = G__31009;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__31003_31010 = cljs.core.seq(nodes);
var chunk__31004_31011 = null;
var count__31005_31012 = (0);
var i__31006_31013 = (0);
while(true){
if((i__31006_31013 < count__31005_31012)){
var node_31014 = chunk__31004_31011.cljs$core$IIndexed$_nth$arity$2(null,i__31006_31013);
fragment.appendChild(shadow.dom._to_dom(node_31014));


var G__31015 = seq__31003_31010;
var G__31016 = chunk__31004_31011;
var G__31017 = count__31005_31012;
var G__31018 = (i__31006_31013 + (1));
seq__31003_31010 = G__31015;
chunk__31004_31011 = G__31016;
count__31005_31012 = G__31017;
i__31006_31013 = G__31018;
continue;
} else {
var temp__5457__auto___31019 = cljs.core.seq(seq__31003_31010);
if(temp__5457__auto___31019){
var seq__31003_31020__$1 = temp__5457__auto___31019;
if(cljs.core.chunked_seq_QMARK_(seq__31003_31020__$1)){
var c__4319__auto___31021 = cljs.core.chunk_first(seq__31003_31020__$1);
var G__31022 = cljs.core.chunk_rest(seq__31003_31020__$1);
var G__31023 = c__4319__auto___31021;
var G__31024 = cljs.core.count(c__4319__auto___31021);
var G__31025 = (0);
seq__31003_31010 = G__31022;
chunk__31004_31011 = G__31023;
count__31005_31012 = G__31024;
i__31006_31013 = G__31025;
continue;
} else {
var node_31026 = cljs.core.first(seq__31003_31020__$1);
fragment.appendChild(shadow.dom._to_dom(node_31026));


var G__31027 = cljs.core.next(seq__31003_31020__$1);
var G__31028 = null;
var G__31029 = (0);
var G__31030 = (0);
seq__31003_31010 = G__31027;
chunk__31004_31011 = G__31028;
count__31005_31012 = G__31029;
i__31006_31013 = G__31030;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq31002){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31002));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__31031_31045 = cljs.core.seq(scripts);
var chunk__31032_31046 = null;
var count__31033_31047 = (0);
var i__31034_31048 = (0);
while(true){
if((i__31034_31048 < count__31033_31047)){
var vec__31035_31049 = chunk__31032_31046.cljs$core$IIndexed$_nth$arity$2(null,i__31034_31048);
var script_tag_31050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31035_31049,(0),null);
var script_body_31051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31035_31049,(1),null);
eval(script_body_31051);


var G__31052 = seq__31031_31045;
var G__31053 = chunk__31032_31046;
var G__31054 = count__31033_31047;
var G__31055 = (i__31034_31048 + (1));
seq__31031_31045 = G__31052;
chunk__31032_31046 = G__31053;
count__31033_31047 = G__31054;
i__31034_31048 = G__31055;
continue;
} else {
var temp__5457__auto___31056 = cljs.core.seq(seq__31031_31045);
if(temp__5457__auto___31056){
var seq__31031_31057__$1 = temp__5457__auto___31056;
if(cljs.core.chunked_seq_QMARK_(seq__31031_31057__$1)){
var c__4319__auto___31058 = cljs.core.chunk_first(seq__31031_31057__$1);
var G__31059 = cljs.core.chunk_rest(seq__31031_31057__$1);
var G__31060 = c__4319__auto___31058;
var G__31061 = cljs.core.count(c__4319__auto___31058);
var G__31062 = (0);
seq__31031_31045 = G__31059;
chunk__31032_31046 = G__31060;
count__31033_31047 = G__31061;
i__31034_31048 = G__31062;
continue;
} else {
var vec__31038_31063 = cljs.core.first(seq__31031_31057__$1);
var script_tag_31064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31038_31063,(0),null);
var script_body_31065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31038_31063,(1),null);
eval(script_body_31065);


var G__31066 = cljs.core.next(seq__31031_31057__$1);
var G__31067 = null;
var G__31068 = (0);
var G__31069 = (0);
seq__31031_31045 = G__31066;
chunk__31032_31046 = G__31067;
count__31033_31047 = G__31068;
i__31034_31048 = G__31069;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__31041){
var vec__31042 = p__31041;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31042,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31042,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__31070 = shadow.dom.dom_node(el);
var G__31071 = cls;
return goog.dom.getAncestorByClass(G__31070,G__31071);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__31073 = arguments.length;
switch (G__31073) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__31074 = shadow.dom.dom_node(el);
var G__31075 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__31074,G__31075);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__31076 = shadow.dom.dom_node(el);
var G__31077 = cljs.core.name(tag);
var G__31078 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__31076,G__31077,G__31078);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__31080 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__31080);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__31081 = shadow.dom.dom_node(dom);
var G__31082 = value;
return goog.dom.forms.setValue(G__31081,G__31082);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__31083 = cljs.core.seq(style_keys);
var chunk__31084 = null;
var count__31085 = (0);
var i__31086 = (0);
while(true){
if((i__31086 < count__31085)){
var it = chunk__31084.cljs$core$IIndexed$_nth$arity$2(null,i__31086);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__31087 = seq__31083;
var G__31088 = chunk__31084;
var G__31089 = count__31085;
var G__31090 = (i__31086 + (1));
seq__31083 = G__31087;
chunk__31084 = G__31088;
count__31085 = G__31089;
i__31086 = G__31090;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__31083);
if(temp__5457__auto__){
var seq__31083__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31083__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__31083__$1);
var G__31091 = cljs.core.chunk_rest(seq__31083__$1);
var G__31092 = c__4319__auto__;
var G__31093 = cljs.core.count(c__4319__auto__);
var G__31094 = (0);
seq__31083 = G__31091;
chunk__31084 = G__31092;
count__31085 = G__31093;
i__31086 = G__31094;
continue;
} else {
var it = cljs.core.first(seq__31083__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__31095 = cljs.core.next(seq__31083__$1);
var G__31096 = null;
var G__31097 = (0);
var G__31098 = (0);
seq__31083 = G__31095;
chunk__31084 = G__31096;
count__31085 = G__31097;
i__31086 = G__31098;
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11969__auto__,k__11970__auto__){
var self__ = this;
var this__11969__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__11969__auto____$1,k__11970__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11971__auto__,k31100,else__11972__auto__){
var self__ = this;
var this__11971__auto____$1 = this;
var G__31104 = k31100;
var G__31104__$1 = (((G__31104 instanceof cljs.core.Keyword))?G__31104.fqn:null);
switch (G__31104__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31100,else__11972__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11983__auto__,writer__11984__auto__,opts__11985__auto__){
var self__ = this;
var this__11983__auto____$1 = this;
var pr_pair__11986__auto__ = ((function (this__11983__auto____$1){
return (function (keyval__11987__auto__){
return cljs.core.pr_sequential_writer(writer__11984__auto__,cljs.core.pr_writer,""," ","",opts__11985__auto__,keyval__11987__auto__);
});})(this__11983__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11984__auto__,pr_pair__11986__auto__,"#shadow.dom.Coordinate{",", ","}",opts__11985__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31099){
var self__ = this;
var G__31099__$1 = this;
return (new cljs.core.RecordIter((0),G__31099__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11967__auto__){
var self__ = this;
var this__11967__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11964__auto__){
var self__ = this;
var this__11964__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11973__auto__){
var self__ = this;
var this__11973__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11965__auto__){
var self__ = this;
var this__11965__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__31105 = ((function (h__4030__auto__,this__11965__auto____$1){
return (function (coll__11966__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__11966__auto__));
});})(h__4030__auto__,this__11965__auto____$1))
;
return fexpr__31105(this__11965__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31101,other31102){
var self__ = this;
var this31101__$1 = this;
return ((!((other31102 == null))) && ((this31101__$1.constructor === other31102.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31101__$1.x,other31102.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31101__$1.y,other31102.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31101__$1.__extmap,other31102.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11978__auto__,k__11979__auto__){
var self__ = this;
var this__11978__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__11979__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11978__auto____$1),self__.__meta),k__11979__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11979__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11976__auto__,k__11977__auto__,G__31099){
var self__ = this;
var this__11976__auto____$1 = this;
var pred__31106 = cljs.core.keyword_identical_QMARK_;
var expr__31107 = k__11977__auto__;
if(cljs.core.truth_((function (){var G__31109 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__31110 = expr__31107;
return (pred__31106.cljs$core$IFn$_invoke$arity$2 ? pred__31106.cljs$core$IFn$_invoke$arity$2(G__31109,G__31110) : pred__31106.call(null,G__31109,G__31110));
})())){
return (new shadow.dom.Coordinate(G__31099,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31111 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__31112 = expr__31107;
return (pred__31106.cljs$core$IFn$_invoke$arity$2 ? pred__31106.cljs$core$IFn$_invoke$arity$2(G__31111,G__31112) : pred__31106.call(null,G__31111,G__31112));
})())){
return (new shadow.dom.Coordinate(self__.x,G__31099,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11977__auto__,G__31099),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11981__auto__){
var self__ = this;
var this__11981__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11968__auto__,G__31099){
var self__ = this;
var this__11968__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__31099,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11974__auto__,entry__11975__auto__){
var self__ = this;
var this__11974__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11975__auto__)){
return cljs.core._assoc(this__11974__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11975__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11975__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11974__auto____$1,entry__11975__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__31103){
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__31103),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__31103),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31103,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0))),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__31114 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__31114);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__31115 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__31115);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__31116 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__31116);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11969__auto__,k__11970__auto__){
var self__ = this;
var this__11969__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__11969__auto____$1,k__11970__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11971__auto__,k31118,else__11972__auto__){
var self__ = this;
var this__11971__auto____$1 = this;
var G__31122 = k31118;
var G__31122__$1 = (((G__31122 instanceof cljs.core.Keyword))?G__31122.fqn:null);
switch (G__31122__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31118,else__11972__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11983__auto__,writer__11984__auto__,opts__11985__auto__){
var self__ = this;
var this__11983__auto____$1 = this;
var pr_pair__11986__auto__ = ((function (this__11983__auto____$1){
return (function (keyval__11987__auto__){
return cljs.core.pr_sequential_writer(writer__11984__auto__,cljs.core.pr_writer,""," ","",opts__11985__auto__,keyval__11987__auto__);
});})(this__11983__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11984__auto__,pr_pair__11986__auto__,"#shadow.dom.Size{",", ","}",opts__11985__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31117){
var self__ = this;
var G__31117__$1 = this;
return (new cljs.core.RecordIter((0),G__31117__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11967__auto__){
var self__ = this;
var this__11967__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11964__auto__){
var self__ = this;
var this__11964__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11973__auto__){
var self__ = this;
var this__11973__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11965__auto__){
var self__ = this;
var this__11965__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__31123 = ((function (h__4030__auto__,this__11965__auto____$1){
return (function (coll__11966__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__11966__auto__));
});})(h__4030__auto__,this__11965__auto____$1))
;
return fexpr__31123(this__11965__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31119,other31120){
var self__ = this;
var this31119__$1 = this;
return ((!((other31120 == null))) && ((this31119__$1.constructor === other31120.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31119__$1.w,other31120.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31119__$1.h,other31120.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31119__$1.__extmap,other31120.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11978__auto__,k__11979__auto__){
var self__ = this;
var this__11978__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__11979__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11978__auto____$1),self__.__meta),k__11979__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11979__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11976__auto__,k__11977__auto__,G__31117){
var self__ = this;
var this__11976__auto____$1 = this;
var pred__31124 = cljs.core.keyword_identical_QMARK_;
var expr__31125 = k__11977__auto__;
if(cljs.core.truth_((function (){var G__31127 = new cljs.core.Keyword(null,"w","w",354169001);
var G__31128 = expr__31125;
return (pred__31124.cljs$core$IFn$_invoke$arity$2 ? pred__31124.cljs$core$IFn$_invoke$arity$2(G__31127,G__31128) : pred__31124.call(null,G__31127,G__31128));
})())){
return (new shadow.dom.Size(G__31117,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31129 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__31130 = expr__31125;
return (pred__31124.cljs$core$IFn$_invoke$arity$2 ? pred__31124.cljs$core$IFn$_invoke$arity$2(G__31129,G__31130) : pred__31124.call(null,G__31129,G__31130));
})())){
return (new shadow.dom.Size(self__.w,G__31117,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11977__auto__,G__31117),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11981__auto__){
var self__ = this;
var this__11981__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11968__auto__,G__31117){
var self__ = this;
var this__11968__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__31117,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11974__auto__,entry__11975__auto__){
var self__ = this;
var this__11974__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11975__auto__)){
return cljs.core._assoc(this__11974__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11975__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11975__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11974__auto____$1,entry__11975__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__31121){
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__31121),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__31121),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31121,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0))),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__31132 = shadow.dom.dom_node(el);
return goog.style.getSize(G__31132);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4373__auto__ = opts;
var l__4374__auto__ = a__4373__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4374__auto__)){
var G__31133 = (i + (1));
var G__31134 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__31133;
ret = G__31134;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31135){
var vec__31136 = p__31135;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31136,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31136,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__31140 = arguments.length;
switch (G__31140) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__31142_31144 = new_node;
var G__31143_31145 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__31142_31144,G__31143_31145);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__31146_31148 = new_node;
var G__31147_31149 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__31146_31148,G__31147_31149);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__31150 = ps;
var G__31151 = (i + (1));
el__$1 = G__31150;
i = G__31151;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__31152 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__31152);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__31153 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__31153);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__31154 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__31154);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__31155 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31155,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31155,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31155,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__31158_31168 = cljs.core.seq(props);
var chunk__31159_31169 = null;
var count__31160_31170 = (0);
var i__31161_31171 = (0);
while(true){
if((i__31161_31171 < count__31160_31170)){
var vec__31162_31172 = chunk__31159_31169.cljs$core$IIndexed$_nth$arity$2(null,i__31161_31171);
var k_31173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31162_31172,(0),null);
var v_31174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31162_31172,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_31173);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31173),v_31174);


var G__31175 = seq__31158_31168;
var G__31176 = chunk__31159_31169;
var G__31177 = count__31160_31170;
var G__31178 = (i__31161_31171 + (1));
seq__31158_31168 = G__31175;
chunk__31159_31169 = G__31176;
count__31160_31170 = G__31177;
i__31161_31171 = G__31178;
continue;
} else {
var temp__5457__auto___31179 = cljs.core.seq(seq__31158_31168);
if(temp__5457__auto___31179){
var seq__31158_31180__$1 = temp__5457__auto___31179;
if(cljs.core.chunked_seq_QMARK_(seq__31158_31180__$1)){
var c__4319__auto___31181 = cljs.core.chunk_first(seq__31158_31180__$1);
var G__31182 = cljs.core.chunk_rest(seq__31158_31180__$1);
var G__31183 = c__4319__auto___31181;
var G__31184 = cljs.core.count(c__4319__auto___31181);
var G__31185 = (0);
seq__31158_31168 = G__31182;
chunk__31159_31169 = G__31183;
count__31160_31170 = G__31184;
i__31161_31171 = G__31185;
continue;
} else {
var vec__31165_31186 = cljs.core.first(seq__31158_31180__$1);
var k_31187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31165_31186,(0),null);
var v_31188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31165_31186,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_31187);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31187),v_31188);


var G__31189 = cljs.core.next(seq__31158_31180__$1);
var G__31190 = null;
var G__31191 = (0);
var G__31192 = (0);
seq__31158_31168 = G__31189;
chunk__31159_31169 = G__31190;
count__31160_31170 = G__31191;
i__31161_31171 = G__31192;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__31194 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31194,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31194,(1),null);
var seq__31197_31215 = cljs.core.seq(node_children);
var chunk__31199_31216 = null;
var count__31200_31217 = (0);
var i__31201_31218 = (0);
while(true){
if((i__31201_31218 < count__31200_31217)){
var child_struct_31219 = chunk__31199_31216.cljs$core$IIndexed$_nth$arity$2(null,i__31201_31218);
if(!((child_struct_31219 == null))){
if(typeof child_struct_31219 === 'string'){
var text_31220 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31220),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_31219)].join(''));
} else {
var children_31221 = shadow.dom.svg_node(child_struct_31219);
if(cljs.core.seq_QMARK_(children_31221)){
var seq__31203_31222 = cljs.core.seq(children_31221);
var chunk__31205_31223 = null;
var count__31206_31224 = (0);
var i__31207_31225 = (0);
while(true){
if((i__31207_31225 < count__31206_31224)){
var child_31226 = chunk__31205_31223.cljs$core$IIndexed$_nth$arity$2(null,i__31207_31225);
if(cljs.core.truth_(child_31226)){
node.appendChild(child_31226);


var G__31227 = seq__31203_31222;
var G__31228 = chunk__31205_31223;
var G__31229 = count__31206_31224;
var G__31230 = (i__31207_31225 + (1));
seq__31203_31222 = G__31227;
chunk__31205_31223 = G__31228;
count__31206_31224 = G__31229;
i__31207_31225 = G__31230;
continue;
} else {
var G__31231 = seq__31203_31222;
var G__31232 = chunk__31205_31223;
var G__31233 = count__31206_31224;
var G__31234 = (i__31207_31225 + (1));
seq__31203_31222 = G__31231;
chunk__31205_31223 = G__31232;
count__31206_31224 = G__31233;
i__31207_31225 = G__31234;
continue;
}
} else {
var temp__5457__auto___31235 = cljs.core.seq(seq__31203_31222);
if(temp__5457__auto___31235){
var seq__31203_31236__$1 = temp__5457__auto___31235;
if(cljs.core.chunked_seq_QMARK_(seq__31203_31236__$1)){
var c__4319__auto___31237 = cljs.core.chunk_first(seq__31203_31236__$1);
var G__31238 = cljs.core.chunk_rest(seq__31203_31236__$1);
var G__31239 = c__4319__auto___31237;
var G__31240 = cljs.core.count(c__4319__auto___31237);
var G__31241 = (0);
seq__31203_31222 = G__31238;
chunk__31205_31223 = G__31239;
count__31206_31224 = G__31240;
i__31207_31225 = G__31241;
continue;
} else {
var child_31242 = cljs.core.first(seq__31203_31236__$1);
if(cljs.core.truth_(child_31242)){
node.appendChild(child_31242);


var G__31243 = cljs.core.next(seq__31203_31236__$1);
var G__31244 = null;
var G__31245 = (0);
var G__31246 = (0);
seq__31203_31222 = G__31243;
chunk__31205_31223 = G__31244;
count__31206_31224 = G__31245;
i__31207_31225 = G__31246;
continue;
} else {
var G__31247 = cljs.core.next(seq__31203_31236__$1);
var G__31248 = null;
var G__31249 = (0);
var G__31250 = (0);
seq__31203_31222 = G__31247;
chunk__31205_31223 = G__31248;
count__31206_31224 = G__31249;
i__31207_31225 = G__31250;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31221);
}
}


var G__31251 = seq__31197_31215;
var G__31252 = chunk__31199_31216;
var G__31253 = count__31200_31217;
var G__31254 = (i__31201_31218 + (1));
seq__31197_31215 = G__31251;
chunk__31199_31216 = G__31252;
count__31200_31217 = G__31253;
i__31201_31218 = G__31254;
continue;
} else {
var G__31255 = seq__31197_31215;
var G__31256 = chunk__31199_31216;
var G__31257 = count__31200_31217;
var G__31258 = (i__31201_31218 + (1));
seq__31197_31215 = G__31255;
chunk__31199_31216 = G__31256;
count__31200_31217 = G__31257;
i__31201_31218 = G__31258;
continue;
}
} else {
var temp__5457__auto___31259 = cljs.core.seq(seq__31197_31215);
if(temp__5457__auto___31259){
var seq__31197_31260__$1 = temp__5457__auto___31259;
if(cljs.core.chunked_seq_QMARK_(seq__31197_31260__$1)){
var c__4319__auto___31261 = cljs.core.chunk_first(seq__31197_31260__$1);
var G__31262 = cljs.core.chunk_rest(seq__31197_31260__$1);
var G__31263 = c__4319__auto___31261;
var G__31264 = cljs.core.count(c__4319__auto___31261);
var G__31265 = (0);
seq__31197_31215 = G__31262;
chunk__31199_31216 = G__31263;
count__31200_31217 = G__31264;
i__31201_31218 = G__31265;
continue;
} else {
var child_struct_31266 = cljs.core.first(seq__31197_31260__$1);
if(!((child_struct_31266 == null))){
if(typeof child_struct_31266 === 'string'){
var text_31267 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31267),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_31266)].join(''));
} else {
var children_31268 = shadow.dom.svg_node(child_struct_31266);
if(cljs.core.seq_QMARK_(children_31268)){
var seq__31209_31269 = cljs.core.seq(children_31268);
var chunk__31211_31270 = null;
var count__31212_31271 = (0);
var i__31213_31272 = (0);
while(true){
if((i__31213_31272 < count__31212_31271)){
var child_31273 = chunk__31211_31270.cljs$core$IIndexed$_nth$arity$2(null,i__31213_31272);
if(cljs.core.truth_(child_31273)){
node.appendChild(child_31273);


var G__31274 = seq__31209_31269;
var G__31275 = chunk__31211_31270;
var G__31276 = count__31212_31271;
var G__31277 = (i__31213_31272 + (1));
seq__31209_31269 = G__31274;
chunk__31211_31270 = G__31275;
count__31212_31271 = G__31276;
i__31213_31272 = G__31277;
continue;
} else {
var G__31278 = seq__31209_31269;
var G__31279 = chunk__31211_31270;
var G__31280 = count__31212_31271;
var G__31281 = (i__31213_31272 + (1));
seq__31209_31269 = G__31278;
chunk__31211_31270 = G__31279;
count__31212_31271 = G__31280;
i__31213_31272 = G__31281;
continue;
}
} else {
var temp__5457__auto___31282__$1 = cljs.core.seq(seq__31209_31269);
if(temp__5457__auto___31282__$1){
var seq__31209_31283__$1 = temp__5457__auto___31282__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31209_31283__$1)){
var c__4319__auto___31284 = cljs.core.chunk_first(seq__31209_31283__$1);
var G__31285 = cljs.core.chunk_rest(seq__31209_31283__$1);
var G__31286 = c__4319__auto___31284;
var G__31287 = cljs.core.count(c__4319__auto___31284);
var G__31288 = (0);
seq__31209_31269 = G__31285;
chunk__31211_31270 = G__31286;
count__31212_31271 = G__31287;
i__31213_31272 = G__31288;
continue;
} else {
var child_31289 = cljs.core.first(seq__31209_31283__$1);
if(cljs.core.truth_(child_31289)){
node.appendChild(child_31289);


var G__31290 = cljs.core.next(seq__31209_31283__$1);
var G__31291 = null;
var G__31292 = (0);
var G__31293 = (0);
seq__31209_31269 = G__31290;
chunk__31211_31270 = G__31291;
count__31212_31271 = G__31292;
i__31213_31272 = G__31293;
continue;
} else {
var G__31294 = cljs.core.next(seq__31209_31283__$1);
var G__31295 = null;
var G__31296 = (0);
var G__31297 = (0);
seq__31209_31269 = G__31294;
chunk__31211_31270 = G__31295;
count__31212_31271 = G__31296;
i__31213_31272 = G__31297;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31268);
}
}


var G__31298 = cljs.core.next(seq__31197_31260__$1);
var G__31299 = null;
var G__31300 = (0);
var G__31301 = (0);
seq__31197_31215 = G__31298;
chunk__31199_31216 = G__31299;
count__31200_31217 = G__31300;
i__31201_31218 = G__31301;
continue;
} else {
var G__31302 = cljs.core.next(seq__31197_31260__$1);
var G__31303 = null;
var G__31304 = (0);
var G__31305 = (0);
seq__31197_31215 = G__31302;
chunk__31199_31216 = G__31303;
count__31200_31217 = G__31304;
i__31201_31218 = G__31305;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__31306_31312 = shadow.dom._to_svg;
var G__31307_31313 = "string";
var G__31308_31314 = ((function (G__31306_31312,G__31307_31313){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__31306_31312,G__31307_31313))
;
goog.object.set(G__31306_31312,G__31307_31313,G__31308_31314);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__31309_31315 = shadow.dom._to_svg;
var G__31310_31316 = "null";
var G__31311_31317 = ((function (G__31309_31315,G__31310_31316){
return (function (_){
return null;
});})(G__31309_31315,G__31310_31316))
;
goog.object.set(G__31309_31315,G__31310_31316,G__31311_31317);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31320 = arguments.length;
var i__4500__auto___31321 = (0);
while(true){
if((i__4500__auto___31321 < len__4499__auto___31320)){
args__4502__auto__.push((arguments[i__4500__auto___31321]));

var G__31322 = (i__4500__auto___31321 + (1));
i__4500__auto___31321 = G__31322;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq31318){
var G__31319 = cljs.core.first(seq31318);
var seq31318__$1 = cljs.core.next(seq31318);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31319,seq31318__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__31324 = arguments.length;
switch (G__31324) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__31325_31340 = shadow.dom.dom_node(el);
var G__31326_31341 = cljs.core.name(event);
var G__31327_31342 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__31325_31340,G__31326_31341,G__31327_31342) : shadow.dom.dom_listen.call(null,G__31325_31340,G__31326_31341,G__31327_31342));

if(cljs.core.truth_((function (){var and__3911__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__3911__auto__)){
return !(once_or_cleanup === true);
} else {
return and__3911__auto__;
}
})())){
var c__28598__auto___31343 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28598__auto___31343,buf,chan,event_fn){
return (function (){
var f__28599__auto__ = (function (){var switch__28366__auto__ = ((function (c__28598__auto___31343,buf,chan,event_fn){
return (function (state_31332){
var state_val_31333 = (state_31332[(1)]);
if((state_val_31333 === (1))){
var state_31332__$1 = state_31332;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31332__$1,(2),once_or_cleanup);
} else {
if((state_val_31333 === (2))){
var inst_31329 = (state_31332[(2)]);
var inst_31330 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_31332__$1 = (function (){var statearr_31334 = state_31332;
(statearr_31334[(7)] = inst_31329);

return statearr_31334;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31332__$1,inst_31330);
} else {
return null;
}
}
});})(c__28598__auto___31343,buf,chan,event_fn))
;
return ((function (switch__28366__auto__,c__28598__auto___31343,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__28367__auto__ = null;
var shadow$dom$state_machine__28367__auto____0 = (function (){
var statearr_31335 = [null,null,null,null,null,null,null,null];
(statearr_31335[(0)] = shadow$dom$state_machine__28367__auto__);

(statearr_31335[(1)] = (1));

return statearr_31335;
});
var shadow$dom$state_machine__28367__auto____1 = (function (state_31332){
while(true){
var ret_value__28368__auto__ = (function (){try{while(true){
var result__28369__auto__ = switch__28366__auto__(state_31332);
if(cljs.core.keyword_identical_QMARK_(result__28369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28369__auto__;
}
break;
}
}catch (e31336){if((e31336 instanceof Object)){
var ex__28370__auto__ = e31336;
var statearr_31337_31344 = state_31332;
(statearr_31337_31344[(5)] = ex__28370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31336;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31345 = state_31332;
state_31332 = G__31345;
continue;
} else {
return ret_value__28368__auto__;
}
break;
}
});
shadow$dom$state_machine__28367__auto__ = function(state_31332){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28367__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28367__auto____1.call(this,state_31332);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$dom$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28367__auto____0;
shadow$dom$state_machine__28367__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28367__auto____1;
return shadow$dom$state_machine__28367__auto__;
})()
;})(switch__28366__auto__,c__28598__auto___31343,buf,chan,event_fn))
})();
var state__28600__auto__ = (function (){var statearr_31338 = (f__28599__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28599__auto__.cljs$core$IFn$_invoke$arity$0() : f__28599__auto__.call(null));
(statearr_31338[(6)] = c__28598__auto___31343);

return statearr_31338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28600__auto__);
});})(c__28598__auto___31343,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


module.exports = shadow.dom;

//# sourceMappingURL=shadow.dom.js.map
