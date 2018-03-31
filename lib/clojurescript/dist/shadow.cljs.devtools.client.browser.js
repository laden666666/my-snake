var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
require("./cljs.core.js");
require("./cljs.reader.js");
require("./clojure.string.js");
require("./goog.dom.dom.js");
require("./goog.object.object.js");
require("./goog.net.jsloader.js");
require("./goog.useragent.product.js");
require("./goog.uri.uri.js");
require("./goog.net.xhrio.js");
require("./shadow.cljs.devtools.client.env.js");
require("./shadow.cljs.devtools.client.console.js");
require("./shadow.cljs.devtools.client.hud.js");
var clojure=$CLJS.clojure;
var cljs=$CLJS.cljs;
var shadow=$CLJS.shadow;
var goog=$CLJS.goog;

goog.dependencies_.written["shadow.cljs.devtools.client.browser.js"] = true;

goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if(typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if(typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if(typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32160 = arguments.length;
var i__4500__auto___32161 = (0);
while(true){
if((i__4500__auto___32161 < len__4499__auto___32160)){
args__4502__auto__.push((arguments[i__4500__auto___32161]));

var G__32162 = (i__4500__auto___32161 + (1));
i__4500__auto___32161 = G__32162;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq32158){
var G__32159 = cljs.core.first(seq32158);
var seq32158__$1 = cljs.core.next(seq32158);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32159,seq32158__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if(typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return goog.object.get(goog.dependencies_.written,name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__32163){
var map__32164 = p__32163;
var map__32164__$1 = ((((!((map__32164 == null)))?(((((map__32164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32164):map__32164);
var src = map__32164__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32164__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32164__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
/**
 * js/eval doesn't get optimized properly, this hack seems to do the trick
 */
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
var node = document.createElement("script");
node.appendChild(document.createTextNode(code));

document.body.appendChild(node);

return document.body.removeChild(node);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__32166 = cljs.core.seq(sources);
var chunk__32167 = null;
var count__32168 = (0);
var i__32169 = (0);
while(true){
if((i__32169 < count__32168)){
var map__32170 = chunk__32167.cljs$core$IIndexed$_nth$arity$2(null,i__32169);
var map__32170__$1 = ((((!((map__32170 == null)))?(((((map__32170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32170):map__32170);
var src = map__32170__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32170__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32170__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32170__$1,new cljs.core.Keyword(null,"js","js",1768080579));
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__32174 = seq__32166;
var G__32175 = chunk__32167;
var G__32176 = count__32168;
var G__32177 = (i__32169 + (1));
seq__32166 = G__32174;
chunk__32167 = G__32175;
count__32168 = G__32176;
i__32169 = G__32177;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__32166);
if(temp__5457__auto__){
var seq__32166__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32166__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__32166__$1);
var G__32178 = cljs.core.chunk_rest(seq__32166__$1);
var G__32179 = c__4319__auto__;
var G__32180 = cljs.core.count(c__4319__auto__);
var G__32181 = (0);
seq__32166 = G__32178;
chunk__32167 = G__32179;
count__32168 = G__32180;
i__32169 = G__32181;
continue;
} else {
var map__32172 = cljs.core.first(seq__32166__$1);
var map__32172__$1 = ((((!((map__32172 == null)))?(((((map__32172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32172):map__32172);
var src = map__32172__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32172__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32172__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32172__$1,new cljs.core.Keyword(null,"js","js",1768080579));
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__32182 = cljs.core.next(seq__32166__$1);
var G__32183 = null;
var G__32184 = (0);
var G__32185 = (0);
seq__32166 = G__32182;
chunk__32167 = G__32183;
count__32168 = G__32184;
i__32169 = G__32185;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__32186 = cljs.core.seq(js_requires);
var chunk__32187 = null;
var count__32188 = (0);
var i__32189 = (0);
while(true){
if((i__32189 < count__32188)){
var js_ns = chunk__32187.cljs$core$IIndexed$_nth$arity$2(null,i__32189);
var require_str_32190 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_32190);


var G__32191 = seq__32186;
var G__32192 = chunk__32187;
var G__32193 = count__32188;
var G__32194 = (i__32189 + (1));
seq__32186 = G__32191;
chunk__32187 = G__32192;
count__32188 = G__32193;
i__32189 = G__32194;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__32186);
if(temp__5457__auto__){
var seq__32186__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32186__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__32186__$1);
var G__32195 = cljs.core.chunk_rest(seq__32186__$1);
var G__32196 = c__4319__auto__;
var G__32197 = cljs.core.count(c__4319__auto__);
var G__32198 = (0);
seq__32186 = G__32195;
chunk__32187 = G__32196;
count__32188 = G__32197;
i__32189 = G__32198;
continue;
} else {
var js_ns = cljs.core.first(seq__32186__$1);
var require_str_32199 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_32199);


var G__32200 = cljs.core.next(seq__32186__$1);
var G__32201 = null;
var G__32202 = (0);
var G__32203 = (0);
seq__32186 = G__32200;
chunk__32187 = G__32201;
count__32188 = G__32202;
i__32189 = G__32203;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__32204 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__32204) : callback.call(null,G__32204));
} else {
var G__32205 = shadow.cljs.devtools.client.env.files_url();
var G__32206 = ((function (G__32205){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__32205))
;
var G__32207 = "POST";
var G__32208 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__32209 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__32205,G__32206,G__32207,G__32208,G__32209);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__32211){
var map__32212 = p__32211;
var map__32212__$1 = ((((!((map__32212 == null)))?(((((map__32212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32212):map__32212);
var msg = map__32212__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32212__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32212__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__32214 = info;
var map__32214__$1 = ((((!((map__32214 == null)))?(((((map__32214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32214):map__32214);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32214__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32214__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = ((function (map__32214,map__32214__$1,sources,compiled,map__32212,map__32212__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32216(s__32217){
return (new cljs.core.LazySeq(null,((function (map__32214,map__32214__$1,sources,compiled,map__32212,map__32212__$1,msg,info,reload_info){
return (function (){
var s__32217__$1 = s__32217;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__32217__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__32222 = cljs.core.first(xs__6012__auto__);
var map__32222__$1 = ((((!((map__32222 == null)))?(((((map__32222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32222):map__32222);
var src = map__32222__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32222__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32222__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4288__auto__ = ((function (s__32217__$1,map__32222,map__32222__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__32214,map__32214__$1,sources,compiled,map__32212,map__32212__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32216_$_iter__32218(s__32219){
return (new cljs.core.LazySeq(null,((function (s__32217__$1,map__32222,map__32222__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__32214,map__32214__$1,sources,compiled,map__32212,map__32212__$1,msg,info,reload_info){
return (function (){
var s__32219__$1 = s__32219;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__32219__$1);
if(temp__5457__auto____$1){
var s__32219__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__32219__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__32219__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__32221 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__32220 = (0);
while(true){
if((i__32220 < size__4291__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__32220);
cljs.core.chunk_append(b__32221,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__32241 = (i__32220 + (1));
i__32220 = G__32241;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32221),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32216_$_iter__32218(cljs.core.chunk_rest(s__32219__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32221),null);
}
} else {
var warning = cljs.core.first(s__32219__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32216_$_iter__32218(cljs.core.rest(s__32219__$2)));
}
} else {
return null;
}
break;
}
});})(s__32217__$1,map__32222,map__32222__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__32214,map__32214__$1,sources,compiled,map__32212,map__32212__$1,msg,info,reload_info))
,null,null));
});})(s__32217__$1,map__32222,map__32222__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__32214,map__32214__$1,sources,compiled,map__32212,map__32212__$1,msg,info,reload_info))
;
var fs__4289__auto__ = cljs.core.seq(iterys__4288__auto__(warnings));
if(fs__4289__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4289__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32216(cljs.core.rest(s__32217__$1)));
} else {
var G__32242 = cljs.core.rest(s__32217__$1);
s__32217__$1 = G__32242;
continue;
}
} else {
var G__32243 = cljs.core.rest(s__32217__$1);
s__32217__$1 = G__32243;
continue;
}
} else {
return null;
}
break;
}
});})(map__32214,map__32214__$1,sources,compiled,map__32212,map__32212__$1,msg,info,reload_info))
,null,null));
});})(map__32214,map__32214__$1,sources,compiled,map__32212,map__32212__$1,msg,info,reload_info))
;
return iter__4292__auto__(sources);
})()));
var seq__32224_32244 = cljs.core.seq(warnings);
var chunk__32225_32245 = null;
var count__32226_32246 = (0);
var i__32227_32247 = (0);
while(true){
if((i__32227_32247 < count__32226_32246)){
var map__32228_32248 = chunk__32225_32245.cljs$core$IIndexed$_nth$arity$2(null,i__32227_32247);
var map__32228_32249__$1 = ((((!((map__32228_32248 == null)))?(((((map__32228_32248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32228_32248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32228_32248):map__32228_32248);
var w_32250 = map__32228_32249__$1;
var msg_32251__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32228_32249__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_32252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32228_32249__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_32253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32228_32249__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_32254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32228_32249__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_32254)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_32252),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_32253),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_32251__$1)].join(''));


var G__32255 = seq__32224_32244;
var G__32256 = chunk__32225_32245;
var G__32257 = count__32226_32246;
var G__32258 = (i__32227_32247 + (1));
seq__32224_32244 = G__32255;
chunk__32225_32245 = G__32256;
count__32226_32246 = G__32257;
i__32227_32247 = G__32258;
continue;
} else {
var temp__5457__auto___32259 = cljs.core.seq(seq__32224_32244);
if(temp__5457__auto___32259){
var seq__32224_32260__$1 = temp__5457__auto___32259;
if(cljs.core.chunked_seq_QMARK_(seq__32224_32260__$1)){
var c__4319__auto___32261 = cljs.core.chunk_first(seq__32224_32260__$1);
var G__32262 = cljs.core.chunk_rest(seq__32224_32260__$1);
var G__32263 = c__4319__auto___32261;
var G__32264 = cljs.core.count(c__4319__auto___32261);
var G__32265 = (0);
seq__32224_32244 = G__32262;
chunk__32225_32245 = G__32263;
count__32226_32246 = G__32264;
i__32227_32247 = G__32265;
continue;
} else {
var map__32230_32266 = cljs.core.first(seq__32224_32260__$1);
var map__32230_32267__$1 = ((((!((map__32230_32266 == null)))?(((((map__32230_32266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32230_32266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32230_32266):map__32230_32266);
var w_32268 = map__32230_32267__$1;
var msg_32269__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32230_32267__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_32270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32230_32267__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_32271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32230_32267__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_32272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32230_32267__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_32272)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_32270),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_32271),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_32269__$1)].join(''));


var G__32273 = cljs.core.next(seq__32224_32260__$1);
var G__32274 = null;
var G__32275 = (0);
var G__32276 = (0);
seq__32224_32244 = G__32273;
chunk__32225_32245 = G__32274;
count__32226_32246 = G__32275;
i__32227_32247 = G__32276;
continue;
}
} else {
}
}
break;
}

if(!(shadow.cljs.devtools.client.env.autoload)){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__32214,map__32214__$1,sources,compiled,warnings,map__32212,map__32212__$1,msg,info,reload_info){
return (function (p__32232){
var map__32233 = p__32232;
var map__32233__$1 = ((((!((map__32233 == null)))?(((((map__32233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32233):map__32233);
var src = map__32233__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32233__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32233__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__32214,map__32214__$1,sources,compiled,warnings,map__32212,map__32212__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__32214,map__32214__$1,sources,compiled,warnings,map__32212,map__32212__$1,msg,info,reload_info){
return (function (p__32235){
var map__32236 = p__32235;
var map__32236__$1 = ((((!((map__32236 == null)))?(((((map__32236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32236):map__32236);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32236__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__32214,map__32214__$1,sources,compiled,warnings,map__32212,map__32212__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__32214,map__32214__$1,sources,compiled,warnings,map__32212,map__32212__$1,msg,info,reload_info){
return (function (p__32238){
var map__32239 = p__32238;
var map__32239__$1 = ((((!((map__32239 == null)))?(((((map__32239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32239):map__32239);
var rc = map__32239__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32239__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module);
}
});})(map__32214,map__32214__$1,sources,compiled,warnings,map__32212,map__32212__$1,msg,info,reload_info))
,sources))));
if(((cljs.core.empty_QMARK_(warnings)) && (cljs.core.seq(sources_to_get)))){
return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__32214,map__32214__$1,sources,compiled,warnings,map__32212,map__32212__$1,msg,info,reload_info){
return (function (p1__32210_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__32210_SHARP_,shadow.cljs.devtools.client.hud.load_end_success);
});})(sources_to_get,map__32214,map__32214__$1,sources,compiled,warnings,map__32212,map__32212__$1,msg,info,reload_info))
);
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__32277){
var map__32278 = p__32277;
var map__32278__$1 = ((((!((map__32278 == null)))?(((((map__32278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32278):map__32278);
var msg = map__32278__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32278__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__32280 = cljs.core.seq(updates);
var chunk__32282 = null;
var count__32283 = (0);
var i__32284 = (0);
while(true){
if((i__32284 < count__32283)){
var path = chunk__32282.cljs$core$IIndexed$_nth$arity$2(null,i__32284);
if(clojure.string.ends_with_QMARK_(path,"css")){
var temp__5457__auto___32288 = document.querySelector(["link[href^=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"]"].join(''));
if(cljs.core.truth_(temp__5457__auto___32288)){
var node_32289 = temp__5457__auto___32288;
var new_link_32290 = (function (){var G__32286 = document.createElement("link");
G__32286.setAttribute("rel","stylesheet");

G__32286.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32286;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_32290,node_32289);

goog.dom.removeNode(node_32289);
} else {
}


var G__32291 = seq__32280;
var G__32292 = chunk__32282;
var G__32293 = count__32283;
var G__32294 = (i__32284 + (1));
seq__32280 = G__32291;
chunk__32282 = G__32292;
count__32283 = G__32293;
i__32284 = G__32294;
continue;
} else {
var G__32295 = seq__32280;
var G__32296 = chunk__32282;
var G__32297 = count__32283;
var G__32298 = (i__32284 + (1));
seq__32280 = G__32295;
chunk__32282 = G__32296;
count__32283 = G__32297;
i__32284 = G__32298;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__32280);
if(temp__5457__auto__){
var seq__32280__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32280__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__32280__$1);
var G__32299 = cljs.core.chunk_rest(seq__32280__$1);
var G__32300 = c__4319__auto__;
var G__32301 = cljs.core.count(c__4319__auto__);
var G__32302 = (0);
seq__32280 = G__32299;
chunk__32282 = G__32300;
count__32283 = G__32301;
i__32284 = G__32302;
continue;
} else {
var path = cljs.core.first(seq__32280__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var temp__5457__auto___32303__$1 = document.querySelector(["link[href^=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"]"].join(''));
if(cljs.core.truth_(temp__5457__auto___32303__$1)){
var node_32304 = temp__5457__auto___32303__$1;
var new_link_32305 = (function (){var G__32287 = document.createElement("link");
G__32287.setAttribute("rel","stylesheet");

G__32287.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32287;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_32305,node_32304);

goog.dom.removeNode(node_32304);
} else {
}


var G__32306 = cljs.core.next(seq__32280__$1);
var G__32307 = null;
var G__32308 = (0);
var G__32309 = (0);
seq__32280 = G__32306;
chunk__32282 = G__32307;
count__32283 = G__32308;
i__32284 = G__32309;
continue;
} else {
var G__32310 = cljs.core.next(seq__32280__$1);
var G__32311 = null;
var G__32312 = (0);
var G__32313 = (0);
seq__32280 = G__32310;
chunk__32282 = G__32311;
count__32283 = G__32312;
i__32284 = G__32313;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
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
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__32314){
var map__32315 = p__32314;
var map__32315__$1 = ((((!((map__32315 == null)))?(((((map__32315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32315):map__32315);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32315__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32315__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__32315,map__32315__$1,id,js){
return (function (){
return eval(js);
});})(map__32315,map__32315__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__32317){
var map__32318 = p__32317;
var map__32318__$1 = ((((!((map__32318 == null)))?(((((map__32318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32318):map__32318);
var msg = map__32318__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32318__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32318__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32318__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32318__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__32318,map__32318__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__32320){
var map__32321 = p__32320;
var map__32321__$1 = ((((!((map__32321 == null)))?(((((map__32321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32321):map__32321);
var src = map__32321__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32321__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__3911__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__3911__auto__;
}
});})(map__32318,map__32318__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__32318,map__32318__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__32318,map__32318__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__32323){
var map__32324 = p__32323;
var map__32324__$1 = ((((!((map__32324 == null)))?(((((map__32324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32324):map__32324);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32324__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32324__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repl_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"ns","ns",441598760)], null)));

return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__32324,map__32324__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL init successful");
});})(map__32324,map__32324__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__32326){
var map__32327 = p__32326;
var map__32327__$1 = ((((!((map__32327 == null)))?(((((map__32327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32327):map__32327);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32327__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32327__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,ns);

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__32329){
var map__32330 = p__32329;
var map__32330__$1 = ((((!((map__32330 == null)))?(((((map__32330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32330):map__32330);
var msg = map__32330__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32330__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__32332 = type;
var G__32332__$1 = (((G__32332 instanceof cljs.core.Keyword))?G__32332.fqn:null);
switch (G__32332__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__32334 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__32335 = ((function (G__32334){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__32334))
;
var G__32336 = "POST";
var G__32337 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__32338 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__32334,G__32335,G__32336,G__32337,G__32338);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__3922__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "Connection closed!";
}
})());

return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___32339 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___32339)){
var s_32340 = temp__5457__auto___32339;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_32340.onclose = ((function (s_32340,temp__5457__auto___32339){
return (function (e){
return null;
});})(s_32340,temp__5457__auto___32339))
;

s_32340.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

shadow.cljs.devtools.client.browser.ws_connect();
} else {
}

module.exports = shadow.cljs.devtools.client.browser;

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
