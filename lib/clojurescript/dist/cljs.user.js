var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
require("./cljs.core.js");
require("./cljs.repl.js");
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;

goog.dependencies_.written["cljs.user.js"] = true;

goog.provide('cljs.user');
goog.require('cljs.core');
goog.require('cljs.repl');

module.exports = cljs.user;
