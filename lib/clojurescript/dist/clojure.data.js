var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
require("./cljs.core.js");
require("./clojure.set.js");
var clojure=$CLJS.clojure;
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;

goog.dependencies_.written["clojure.data.js"] = true;

goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__28660){
var vec__28661 = p__28660;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28661,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28661,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__28664 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28664,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28664,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28664,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__28669 = arguments.length;
switch (G__28669) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4006__auto__ = cljs.core.count(a);
var y__4007__auto__ = cljs.core.count(b);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4211__auto__ = (((x == null))?null:x);
var m__4212__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto__.call(null,x));
} else {
var m__4212__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto__.call(null,a,b));
} else {
var m__4212__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__28678_28706 = clojure.data.equality_partition;
var G__28679_28707 = "null";
var G__28680_28708 = ((function (G__28678_28706,G__28679_28707){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__28678_28706,G__28679_28707))
;
goog.object.set(G__28678_28706,G__28679_28707,G__28680_28708);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__28682_28709 = clojure.data.equality_partition;
var G__28683_28710 = "string";
var G__28684_28711 = ((function (G__28682_28709,G__28683_28710){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__28682_28709,G__28683_28710))
;
goog.object.set(G__28682_28709,G__28683_28710,G__28684_28711);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__28686_28712 = clojure.data.equality_partition;
var G__28687_28713 = "number";
var G__28688_28714 = ((function (G__28686_28712,G__28687_28713){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__28686_28712,G__28687_28713))
;
goog.object.set(G__28686_28712,G__28687_28713,G__28688_28714);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__28689_28715 = clojure.data.equality_partition;
var G__28690_28716 = "array";
var G__28691_28717 = ((function (G__28689_28715,G__28690_28716){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__28689_28715,G__28690_28716))
;
goog.object.set(G__28689_28715,G__28690_28716,G__28691_28717);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__28692_28718 = clojure.data.equality_partition;
var G__28693_28719 = "function";
var G__28694_28720 = ((function (G__28692_28718,G__28693_28719){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__28692_28718,G__28693_28719))
;
goog.object.set(G__28692_28718,G__28693_28719,G__28694_28720);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__28697_28721 = clojure.data.equality_partition;
var G__28698_28722 = "boolean";
var G__28699_28723 = ((function (G__28697_28721,G__28698_28722){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__28697_28721,G__28698_28722))
;
goog.object.set(G__28697_28721,G__28698_28722,G__28699_28723);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__28700_28724 = clojure.data.equality_partition;
var G__28701_28725 = "_";
var G__28702_28726 = ((function (G__28700_28724,G__28701_28725){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__28700_28724,G__28701_28725))
;
goog.object.set(G__28700_28724,G__28701_28725,G__28702_28726);
goog.object.set(clojure.data.Diff,"null",true);

var G__28727_28751 = clojure.data.diff_similar;
var G__28728_28752 = "null";
var G__28729_28753 = ((function (G__28727_28751,G__28728_28752){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__28727_28751,G__28728_28752))
;
goog.object.set(G__28727_28751,G__28728_28752,G__28729_28753);

goog.object.set(clojure.data.Diff,"string",true);

var G__28730_28754 = clojure.data.diff_similar;
var G__28731_28755 = "string";
var G__28732_28756 = ((function (G__28730_28754,G__28731_28755){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__28730_28754,G__28731_28755))
;
goog.object.set(G__28730_28754,G__28731_28755,G__28732_28756);

goog.object.set(clojure.data.Diff,"number",true);

var G__28733_28757 = clojure.data.diff_similar;
var G__28734_28758 = "number";
var G__28735_28759 = ((function (G__28733_28757,G__28734_28758){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__28733_28757,G__28734_28758))
;
goog.object.set(G__28733_28757,G__28734_28758,G__28735_28759);

goog.object.set(clojure.data.Diff,"array",true);

var G__28736_28760 = clojure.data.diff_similar;
var G__28737_28761 = "array";
var G__28738_28762 = ((function (G__28736_28760,G__28737_28761){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__28736_28760,G__28737_28761))
;
goog.object.set(G__28736_28760,G__28737_28761,G__28738_28762);

goog.object.set(clojure.data.Diff,"function",true);

var G__28739_28763 = clojure.data.diff_similar;
var G__28740_28764 = "function";
var G__28741_28765 = ((function (G__28739_28763,G__28740_28764){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__28739_28763,G__28740_28764))
;
goog.object.set(G__28739_28763,G__28740_28764,G__28741_28765);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__28742_28766 = clojure.data.diff_similar;
var G__28743_28767 = "boolean";
var G__28744_28768 = ((function (G__28742_28766,G__28743_28767){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__28742_28766,G__28743_28767))
;
goog.object.set(G__28742_28766,G__28743_28767,G__28744_28768);

goog.object.set(clojure.data.Diff,"_",true);

var G__28745_28769 = clojure.data.diff_similar;
var G__28746_28770 = "_";
var G__28747_28771 = ((function (G__28745_28769,G__28746_28770){
return (function (a,b){
var fexpr__28749 = (function (){var G__28750 = clojure.data.equality_partition(a);
var G__28750__$1 = (((G__28750 instanceof cljs.core.Keyword))?G__28750.fqn:null);
switch (G__28750__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28750__$1)].join('')));

}
})();
return (fexpr__28749.cljs$core$IFn$_invoke$arity$2 ? fexpr__28749.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__28749.call(null,a,b));
});})(G__28745_28769,G__28746_28770))
;
goog.object.set(G__28745_28769,G__28746_28770,G__28747_28771);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

module.exports = clojure.data;

//# sourceMappingURL=clojure.data.js.map
