var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
require("./cljs.core.js");
require("./cljs.spec.alpha.js");
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;

goog.dependencies_.written["cljs.repl.js"] = true;

goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27011){
var map__27012 = p__27011;
var map__27012__$1 = ((((!((map__27012 == null)))?(((((map__27012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27012):map__27012);
var m = map__27012__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27012__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27012__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27014_27049 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27015_27050 = null;
var count__27016_27051 = (0);
var i__27017_27052 = (0);
while(true){
if((i__27017_27052 < count__27016_27051)){
var f_27053 = chunk__27015_27050.cljs$core$IIndexed$_nth$arity$2(null,i__27017_27052);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27053], 0));


var G__27054 = seq__27014_27049;
var G__27055 = chunk__27015_27050;
var G__27056 = count__27016_27051;
var G__27057 = (i__27017_27052 + (1));
seq__27014_27049 = G__27054;
chunk__27015_27050 = G__27055;
count__27016_27051 = G__27056;
i__27017_27052 = G__27057;
continue;
} else {
var temp__5457__auto___27058 = cljs.core.seq(seq__27014_27049);
if(temp__5457__auto___27058){
var seq__27014_27059__$1 = temp__5457__auto___27058;
if(cljs.core.chunked_seq_QMARK_(seq__27014_27059__$1)){
var c__4319__auto___27060 = cljs.core.chunk_first(seq__27014_27059__$1);
var G__27061 = cljs.core.chunk_rest(seq__27014_27059__$1);
var G__27062 = c__4319__auto___27060;
var G__27063 = cljs.core.count(c__4319__auto___27060);
var G__27064 = (0);
seq__27014_27049 = G__27061;
chunk__27015_27050 = G__27062;
count__27016_27051 = G__27063;
i__27017_27052 = G__27064;
continue;
} else {
var f_27065 = cljs.core.first(seq__27014_27059__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27065], 0));


var G__27066 = cljs.core.next(seq__27014_27059__$1);
var G__27067 = null;
var G__27068 = (0);
var G__27069 = (0);
seq__27014_27049 = G__27066;
chunk__27015_27050 = G__27067;
count__27016_27051 = G__27068;
i__27017_27052 = G__27069;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27070 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27070], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_27070)))?cljs.core.second(arglists_27070):arglists_27070)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27018_27071 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27019_27072 = null;
var count__27020_27073 = (0);
var i__27021_27074 = (0);
while(true){
if((i__27021_27074 < count__27020_27073)){
var vec__27022_27075 = chunk__27019_27072.cljs$core$IIndexed$_nth$arity$2(null,i__27021_27074);
var name_27076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27022_27075,(0),null);
var map__27025_27077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27022_27075,(1),null);
var map__27025_27078__$1 = ((((!((map__27025_27077 == null)))?(((((map__27025_27077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27025_27077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27025_27077):map__27025_27077);
var doc_27079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27025_27078__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27025_27078__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27076], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27080], 0));

if(cljs.core.truth_(doc_27079)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27079], 0));
} else {
}


var G__27081 = seq__27018_27071;
var G__27082 = chunk__27019_27072;
var G__27083 = count__27020_27073;
var G__27084 = (i__27021_27074 + (1));
seq__27018_27071 = G__27081;
chunk__27019_27072 = G__27082;
count__27020_27073 = G__27083;
i__27021_27074 = G__27084;
continue;
} else {
var temp__5457__auto___27085 = cljs.core.seq(seq__27018_27071);
if(temp__5457__auto___27085){
var seq__27018_27086__$1 = temp__5457__auto___27085;
if(cljs.core.chunked_seq_QMARK_(seq__27018_27086__$1)){
var c__4319__auto___27087 = cljs.core.chunk_first(seq__27018_27086__$1);
var G__27088 = cljs.core.chunk_rest(seq__27018_27086__$1);
var G__27089 = c__4319__auto___27087;
var G__27090 = cljs.core.count(c__4319__auto___27087);
var G__27091 = (0);
seq__27018_27071 = G__27088;
chunk__27019_27072 = G__27089;
count__27020_27073 = G__27090;
i__27021_27074 = G__27091;
continue;
} else {
var vec__27040_27092 = cljs.core.first(seq__27018_27086__$1);
var name_27093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27040_27092,(0),null);
var map__27043_27094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27040_27092,(1),null);
var map__27043_27095__$1 = ((((!((map__27043_27094 == null)))?(((((map__27043_27094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27043_27094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27043_27094):map__27043_27094);
var doc_27096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27043_27095__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27043_27095__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27093], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27097], 0));

if(cljs.core.truth_(doc_27096)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27096], 0));
} else {
}


var G__27098 = cljs.core.next(seq__27018_27086__$1);
var G__27099 = null;
var G__27100 = (0);
var G__27101 = (0);
seq__27018_27071 = G__27098;
chunk__27019_27072 = G__27099;
count__27020_27073 = G__27100;
i__27021_27074 = G__27101;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__27045 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27046 = null;
var count__27047 = (0);
var i__27048 = (0);
while(true){
if((i__27048 < count__27047)){
var role = chunk__27046.cljs$core$IIndexed$_nth$arity$2(null,i__27048);
var temp__5457__auto___27102__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___27102__$1)){
var spec_27103 = temp__5457__auto___27102__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_27103)], 0));
} else {
}


var G__27104 = seq__27045;
var G__27105 = chunk__27046;
var G__27106 = count__27047;
var G__27107 = (i__27048 + (1));
seq__27045 = G__27104;
chunk__27046 = G__27105;
count__27047 = G__27106;
i__27048 = G__27107;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__27045);
if(temp__5457__auto____$1){
var seq__27045__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__27045__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27045__$1);
var G__27108 = cljs.core.chunk_rest(seq__27045__$1);
var G__27109 = c__4319__auto__;
var G__27110 = cljs.core.count(c__4319__auto__);
var G__27111 = (0);
seq__27045 = G__27108;
chunk__27046 = G__27109;
count__27047 = G__27110;
i__27048 = G__27111;
continue;
} else {
var role = cljs.core.first(seq__27045__$1);
var temp__5457__auto___27112__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___27112__$2)){
var spec_27113 = temp__5457__auto___27112__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_27113)], 0));
} else {
}


var G__27114 = cljs.core.next(seq__27045__$1);
var G__27115 = null;
var G__27116 = (0);
var G__27117 = (0);
seq__27045 = G__27114;
chunk__27046 = G__27115;
count__27047 = G__27116;
i__27048 = G__27117;
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

module.exports = cljs.repl;

//# sourceMappingURL=cljs.repl.js.map
