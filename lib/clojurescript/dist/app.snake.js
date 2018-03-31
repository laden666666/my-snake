var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
require("./cljs.core.js");
var cljs=$CLJS.cljs;
var goog=$CLJS.goog;
var app=$CLJS.app || ($CLJS.app = {});
goog.dependencies_.written["app.snake.js"] = true;

goog.provide('app.snake');
goog.require('cljs.core');
app.snake.a = (1);

module.exports = app.snake;

//# sourceMappingURL=app.snake.js.map
