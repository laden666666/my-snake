(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["snake"] = factory();
	else
		root["snake"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 77);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var core = module.exports = { version: '2.5.4' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
// eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = __webpack_require__(36)('wks');
var uid = __webpack_require__(25);
var _Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(1);
var core = __webpack_require__(0);
var ctx = __webpack_require__(14);
var hide = __webpack_require__(11);
var has = __webpack_require__(12);
var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();
            case 1:
              return new C(a);
            case 2:
              return new C(a, b);
          }return new C(a, b, c);
        }return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
      // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(8);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (it) {
  return (typeof it === 'undefined' ? 'undefined' : (0, _typeof3.default)(it)) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__(48);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var anObject = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(62);
var toPrimitive = __webpack_require__(42);
var dP = _defineProperty2.default;

exports.f = __webpack_require__(7) ? _defineProperty2.default : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(4);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(17)(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof3 = __webpack_require__(8);

var _typeof4 = _interopRequireDefault2(_typeof3);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.__esModule = true;

var _iterator = __webpack_require__(81);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(56);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && (0, _typeof4.default)(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : (0, _typeof4.default)(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : (0, _typeof4.default)(obj);
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(48);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(5);
var createDesc = __webpack_require__(19);
module.exports = __webpack_require__(7) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(93);
var defined = __webpack_require__(31);
module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// optional / simple context binding
var aFunction = __webpack_require__(21);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(3);
var core = __webpack_require__(0);
var fails = __webpack_require__(17);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () {
    fn(1);
  }), 'Object', exp);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Cell = undefined;

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Direction = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cell = exports.Cell = function () {
    function Cell(x /*: number*/, y /*: number*/) {
        (0, _classCallCheck3.default)(this, Cell);

        this.x = x;
        this.y = y;
    }

    /**
     * 判断两个cell是否相等
     * @static
     * @param {Cell} cell1
     * @param {Cell} cell2
     * @returns {boolean}
     * @memberof Cell
     */


    (0, _createClass3.default)(Cell, null, [{
        key: 'equal',
        value: function equal(cell1 /*: Cell*/, cell2 /*: Cell*/) /*: boolean*/ {
            return cell1.x === cell2.x && cell1.y === cell2.y;
        }

        /**
         * 克隆坐标
         * @param cell          需要克隆的坐标
         */

    }, {
        key: 'clone',
        value: function clone(cell /*: Cell*/) {
            return new Cell(cell.x, cell.y);
        }

        /**
         * 根据一个坐标和方向，计算新坐标
         * @param cell          需要计算的坐标
         * @param direction     目标方向
         */

    }, {
        key: 'getCellByDirection',
        value: function getCellByDirection(cell /*: Cell*/, direction /*: Direction*/) /*: Cell*/ {
            if (_Direction.Down == direction) {
                return new Cell(cell.x, cell.y - 1);
            } else if (_Direction.Up == direction) {
                return new Cell(cell.x, cell.y + 1);
            } else if (_Direction.Left == direction) {
                return new Cell(cell.x - 1, cell.y);
            } else if (_Direction.Right == direction) {
                return new Cell(cell.x + 1, cell.y);
            }
        }

        /**
         * 获得一个坐标到另一个坐标的方向
         * @param cell          需要计算的坐标
         * @param direction     目标方向
         */

    }, {
        key: 'getDirectionByCell',
        value: function getDirectionByCell(cell1 /*: Cell*/, cell2 /*: Cell*/) /*: Direction*/ {
            var dx = cell1.x - cell2.x;
            var dy = cell1.y - cell2.y;

            if (Math.abs(dx) > Math.abs(dy)) {
                if (dx > 0) {
                    return _Direction.Left;
                } else {
                    return _Direction.Right;
                }
            } else if (Math.abs(dx) < Math.abs(dy)) {
                if (dy > 0) {
                    return _Direction.Down;
                } else {
                    return _Direction.Up;
                }
            } else {
                debugger;
                throw new Error('dx == dy');
            }
        }
    }]);
    return Cell;
}(); // @flow

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = true;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(90);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(52);
var enumBugKeys = __webpack_require__(37);

module.exports = _keys2.default || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.13 ToObject(argument)
var defined = __webpack_require__(31);
module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var def = __webpack_require__(5).f;
var has = __webpack_require__(12);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DirectionTools = exports.Right = exports.Left = exports.Down = exports.Up = undefined;

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow

/**
 * @file
 * 坐标方向
 */

/*:: export type Direction = number*/
var Up /*: Direction*/ = exports.Up = 1;
var Down /*: Direction*/ = exports.Down = 1;
var Left /*: Direction*/ = exports.Left = 1;
var Right /*: Direction*/ = exports.Right = 1;

var DirectionTools = exports.DirectionTools = function () {
    function DirectionTools() {
        (0, _classCallCheck3.default)(this, DirectionTools);
    }

    /**
     * 获取一个方向的反方向
     * @param d1
     * @returns {Direction}
     */


    (0, _createClass3.default)(DirectionTools, null, [{
        key: "getReverse",
        value: function getReverse(d1 /*: Direction*/) /*: Direction*/ {
            if (d1 == Up) {
                return Down;
            } else if (d1 == Down) {
                return Up;
            } else if (d1 == Left) {
                return Right;
            } else if (d1 == Right) {
                return Left;
            }
        }

        /**
         * 判断两个方向是否是反向
         * @param d1
         * @param d2
         * @returns {boolean}
         */

    }, {
        key: "isReverse",
        value: function isReverse(d1 /*: Direction*/, d2 /*: Direction*/) /*: boolean*/ {
            return DirectionTools.getReverse(d1) == d2;
        }

        /**
         * 判断两个方向是否是同向
         * @param d1
         * @param d2
         * @returns {boolean}
         */

    }, {
        key: "isSyntropy",
        value: function isSyntropy(d1 /*: Direction*/, d2 /*: Direction*/) /*: boolean*/ {
            if (d1 == Up && d2 == Down || d1 == Right && d2 == Left || d1 == Down && d2 == Up || d1 == Left && d2 == Right) {
                return true;
            }

            return false;
        }
    }]);
    return DirectionTools;
}();

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__(83)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(49)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _create = __webpack_require__(33);

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(6);
var dPs = __webpack_require__(51);
var enumBugKeys = __webpack_require__(37);
var IE_PROTO = __webpack_require__(35)('IE_PROTO');
var Empty = function Empty() {/* empty */};
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(38)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(53).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }return _createDict();
};

module.exports = _create2.default || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = _createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.15 ToLength
var toInteger = __webpack_require__(30);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var shared = __webpack_require__(36)('keys');
var uid = __webpack_require__(25);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(4);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = __webpack_require__(2);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(1);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(22);
var wksExt = __webpack_require__(39);
var defineProperty = __webpack_require__(5).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getOwnPropertyDescriptor = __webpack_require__(114);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pIE = __webpack_require__(41);
var createDesc = __webpack_require__(19);
var toIObject = __webpack_require__(13);
var toPrimitive = __webpack_require__(42);
var has = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(62);
var gOPD = _getOwnPropertyDescriptor2.default;

exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {/* empty */}
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Food = undefined;

var _getPrototypeOf = __webpack_require__(27);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(64);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(65);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Cell2 = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Food = function (_Cell) {
    (0, _inherits3.default)(Food, _Cell);
    (0, _createClass3.default)(Food, [{
        key: 'grow',
        get: function get() /*: number*/ {
            return this.$grow;
        }
    }]);

    function Food(x /*: number*/, y /*: number*/, grow /*: number*/) {
        (0, _classCallCheck3.default)(this, Food);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Food.__proto__ || (0, _getPrototypeOf2.default)(Food)).call(this, x, y));

        _this.$grow = grow;
        return _this;
    }

    (0, _createClass3.default)(Food, [{
        key: 'clone',
        value: function clone() /*: Cell*/ {
            return new Food(this.x, this.y, this.grow);
        }
    }]);
    return Food;
}(_Cell2.Cell); // @flow

/**
 * @file
 * 坐标
 */


exports.Food = Food;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(120), __esModule: true };

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)

var aFunction = __webpack_require__(21);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(22);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(50);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(16);
var $iterCreate = __webpack_require__(84);
var setToStringTag = __webpack_require__(26);
var getPrototypeOf = __webpack_require__(54);
var ITERATOR = __webpack_require__(2)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(11);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperties = __webpack_require__(87);

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dP = __webpack_require__(5);
var anObject = __webpack_require__(6);
var getKeys = __webpack_require__(23);

module.exports = __webpack_require__(7) ? _defineProperties2.default : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }return O;
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(12);
var toIObject = __webpack_require__(13);
var arrayIndexOf = __webpack_require__(94)(false);
var IE_PROTO = __webpack_require__(35)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys
  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(27);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(12);
var toObject = __webpack_require__(24);
var IE_PROTO = __webpack_require__(35)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = _getPrototypeOf2.default || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(98);
var global = __webpack_require__(1);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(16);
var TO_STRING_TAG = __webpack_require__(2)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim

var _typeof2 = __webpack_require__(8);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var global = __webpack_require__(1);
var has = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(7);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(50);
var META = __webpack_require__(58).KEY;
var $fails = __webpack_require__(17);
var shared = __webpack_require__(36);
var setToStringTag = __webpack_require__(26);
var uid = __webpack_require__(25);
var wks = __webpack_require__(2);
var wksExt = __webpack_require__(39);
var wksDefine = __webpack_require__(40);
var enumKeys = __webpack_require__(108);
var isArray = __webpack_require__(111);
var anObject = __webpack_require__(6);
var isObject = __webpack_require__(4);
var toIObject = __webpack_require__(13);
var toPrimitive = __webpack_require__(42);
var createDesc = __webpack_require__(19);
var _create = __webpack_require__(32);
var gOPNExt = __webpack_require__(60);
var $GOPD = __webpack_require__(44);
var $DP = __webpack_require__(5);
var $keys = __webpack_require__(23);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', { value: 7 }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && (0, _typeof3.default)($Symbol.iterator) == 'symbol' ? function (it) {
  return (typeof it === 'undefined' ? 'undefined' : (0, _typeof3.default)(it)) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    }return setSymbolDesc(it, key, D);
  }return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(61).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(41).f = $propertyIsEnumerable;
  __webpack_require__(59).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(22)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols =
// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks(es6Symbols[j++]);
}for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }$replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function replacer(key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(8);

var _typeof3 = _interopRequireDefault(_typeof2);

var _preventExtensions = __webpack_require__(102);

var _preventExtensions2 = _interopRequireDefault(_preventExtensions);

var _isExtensible = __webpack_require__(105);

var _isExtensible2 = _interopRequireDefault(_isExtensible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var META = __webpack_require__(25)('meta');
var isObject = __webpack_require__(4);
var has = __webpack_require__(12);
var setDesc = __webpack_require__(5).f;
var id = 0;
var isExtensible = _isExtensible2.default || function () {
  return true;
};
var FREEZE = !__webpack_require__(17)(function () {
  return isExtensible((0, _preventExtensions2.default)({}));
});
var setMeta = function setMeta(it) {
  setDesc(it, META, { value: {
      i: 'O' + ++id, // object ID
      w: {} // weak collections IDs
    } });
};
var fastKey = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : (0, _typeof3.default)(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
    // return object ID
  }return it[META].i;
};
var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
    // return hash weak collections IDs
  }return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getOwnPropertySymbols = __webpack_require__(109);

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.f = _getOwnPropertySymbols2.default;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getOwnPropertyNames = __webpack_require__(43);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _typeof2 = __webpack_require__(8);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(13);
var gOPN = __webpack_require__(61).f;
var toString = {}.toString;

var windowNames = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) == 'object' && window && _getOwnPropertyNames2.default ? (0, _getOwnPropertyNames2.default)(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getOwnPropertyNames = __webpack_require__(43);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(52);
var hiddenKeys = __webpack_require__(37).concat('length', 'prototype');

exports.f = _getOwnPropertyNames2.default || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = !__webpack_require__(7) && !__webpack_require__(17)(function () {
  return Object.defineProperty(__webpack_require__(38)('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(8);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(46);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(33);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(8);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ground = undefined;

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Cell = __webpack_require__(20);

var _util = __webpack_require__(123);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file
 * 贪食蛇的坐标系
 */

// @flow

var Ground = function () {
    function Ground() {
        var width /*:number*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
        var height /*:number*/ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
        (0, _classCallCheck3.default)(this, Ground);
    }

    /**
     * 判断一个cell是否属于当前坐标系
     * @param cell
     */


    (0, _createClass3.default)(Ground, [{
        key: 'inGround',
        value: function inGround(cell /*: Cell*/) /*: boolean*/ {
            if (0 <= cell.x && this.width > cell.x && 0 <= cell.y && this.height > cell.y) {
                return true;
            }
            return false;
        }

        /**
         * 返回所有未标记的cell的列表
         * @param cells             不可用的坐标
         * @returns {Array}
         */

    }, {
        key: 'getUsableCells',
        value: function getUsableCells() /*: Array<Cell>*/ {
            var _this = this;

            //创建坐标系，用于标记各个坐标是否可用
            var _cells = [];
            for (var y = 0; y < this.height; y++) {
                _cells[y] = [];
                for (var x = 0; x < this.width; x++) {
                    _cells[y][x] = false;
                }
            }

            //将不可用的坐标标记

            for (var _len = arguments.length, cells = Array(_len), _key = 0; _key < _len; _key++) {
                cells[_key] = arguments[_key];
            }

            cells.forEach(function (element /*: Cell | Array<Cell>*/) {
                if (Array.isArray(element)) {
                    element.forEach(function (element) {
                        if (_this.inGround(element)) {
                            _cells[element.y][element.x] = true;
                        }
                    });
                } else {
                    if (_this.inGround(element)) {
                        _cells[element.y][element.x] = true;
                    }
                }
            });

            //将所用可用坐标返回
            var usableCellList = [];
            for (var _y = 0; _y < this.height; _y++) {
                for (var _x3 = 0; _x3 < this.width; _x3++) {
                    if (!_cells[_y][_x3]) {
                        usableCellList.push(new _Cell.Cell(_x3, _y));
                    }
                }
            }
            return usableCellList;
        }

        /**
         * 随机从返回未标记的cell列表中选取几个cell
         * @param count             随机取得的数量
         */

    }, {
        key: 'getRandomUsableCells',
        value: function getRandomUsableCells(count /*: number*/) /*: Array<Cell>*/ {
            for (var _len2 = arguments.length, cells = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                cells[_key2 - 1] = arguments[_key2];
            }

            var usableCellList = this.getUsableCells.apply(this, cells);
            return (0, _util.randomChoose)(usableCellList, count);
        }
    }]);
    return Ground;
}();

exports.Ground = Ground;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(18);
var TAG = __webpack_require__(2)('toStringTag');
// ES3 wrong here
var ARG = cof(function () {
  return arguments;
}()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {/* empty */}
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
  // builtinTag case
  : ARG ? cof(O)
  // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// call something on iterator step with safe closing on error
var anObject = __webpack_require__(6);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// check on default Array iterator
var Iterators = __webpack_require__(16);
var ITERATOR = __webpack_require__(2)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(67);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(16);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(6);
var aFunction = __webpack_require__(21);
var SPECIES = __webpack_require__(2)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = __webpack_require__(14);
var invoke = __webpack_require__(133);
var html = __webpack_require__(53);
var cel = __webpack_require__(38);
var global = __webpack_require__(1);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function run() {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function listener(event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(18)(process) == 'process') {
    defer = function defer(id) {
      process.nextTick(ctx(run, id, 1));
    };
    // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function defer(id) {
      Dispatch.now(ctx(run, id, 1));
    };
    // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function defer(id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
    // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function defer(id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
    // Rest old browsers
  } else {
    defer = function defer(id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(6);
var isObject = __webpack_require__(4);
var newPromiseCapability = __webpack_require__(47);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _from = __webpack_require__(76);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ITERATOR = __webpack_require__(2)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () {
    SAFE_CLOSING = true;
  };
  // eslint-disable-next-line no-throw-literal
  (0, _from2.default)(riter, function () {
    throw 2;
  });
} catch (e) {/* empty */}

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () {
      return { done: safe = true };
    };
    arr[ITERATOR] = function () {
      return iter;
    };
    exec(arr);
  } catch (e) {/* empty */}
  return safe;
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(137), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Game = undefined;

var _Game = __webpack_require__(78);

exports.Game = _Game.Game;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Game = undefined;

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Snake = __webpack_require__(119);

var _Ground = __webpack_require__(66);

var _Direction = __webpack_require__(28);

var _Cell = __webpack_require__(20);

var _Food = __webpack_require__(45);

var _Print = __webpack_require__(142);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file
 * 贪食蛇游戏
 */
// @flow

var Game = exports.Game = function () {

    /**
     * 用于绘制游戏
     * @private
     * @type {Print}
     * @memberof Game
     */

    /**
     * 贪食蛇
     * @private
     * @type {Snake}
     * @memberof Game
     */
    function Game(_ref) {
        var _ref$width = _ref.width,
            width = _ref$width === undefined ? 10 : _ref$width,
            _ref$height = _ref.height,
            height = _ref$height === undefined ? 10 : _ref$height,
            headerPosition = _ref.headerPosition,
            direction = _ref.direction,
            _ref$bodyLength = _ref.bodyLength,
            bodyLength = _ref$bodyLength === undefined ? 3 : _ref$bodyLength;
        (0, _classCallCheck3.default)(this, Game);
        this.$food = [];

        //初始化方向
        if (direction) {
            direction = _Direction.Up;
        }

        //设置头部的默认值，方向默认值
        if (!headerPosition) {
            headerPosition = {
                x: Math.floor(width / 2),
                y: Math.floor(height / 2)
            };
        }

        //创建蛇
        this.$snake = new _Snake.Snake({
            headerPosition: headerPosition,
            direction: direction,
            bodyLength: bodyLength
        });

        //创建贪食蛇的坐标系
        this.$ground = new _Ground.Ground(width, height);

        //创建绘制对象
        this.$print = new _Print.Print(width, height);

        //创建食物
        this.$createFood(3);
    }

    /**
     * 一帧
     */


    /**
     * 食物数组
     * @private
     * @type {Array<Food>}
     * @memberof Game
     */


    /**
     * 贪食蛇的坐标系
     * @private
     * @type {Ground}
     * @memberof Game
     */


    (0, _createClass3.default)(Game, [{
        key: "frame",
        value: function frame() /*: Array<Array<String>>*/ {

            var eatFood = this.$snake.move(this.$food);

            if (eatFood) {
                //去除已经吃掉的食物
                this.$food = this.$food.filter(function (item) {
                    return item != eatFood;
                });
                this.$createFood();
            }

            this.$print.rest();
            this.$print.printHead(this.$snake.header, this.$snake.direction);
            this.$print.printBody(this.$snake.header, this.$snake.body);
            this.$print.printFoot(this.$food);

            return this.$print.cells;
        }

        /**
         * 转向
         * @param willTurnDirection     方向
         */

    }, {
        key: "turn",
        value: function turn(willTurnDirection /*: Direction*/) {
            this.$snake.turn(willTurnDirection);
        }

        /**
         * 创建食物
         */

    }, {
        key: "$createFood",
        value: function $createFood() {
            var _this = this;

            var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            var cells = this.$ground.getRandomUsableCells(count, this.$food, this.$snake.header, this.$snake.body);
            cells.forEach(function (cell) {
                _this.$food.push(new _Food.Food(cell.x, cell.y, Math.floor(Math.random() * 3) + 1));
            });
        }
    }]);
    return Game;
}();

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(80);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(3);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperty: __webpack_require__(5).f });

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(29);
__webpack_require__(55);
module.exports = __webpack_require__(39).f('iterator');

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(30);
var defined = __webpack_require__(31);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(32);
var descriptor = __webpack_require__(19);
var setToStringTag = __webpack_require__(26);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(2)('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(86);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(3);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(32) });

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(89);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(3);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperties: __webpack_require__(51) });

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(92);
module.exports = __webpack_require__(0).Object.keys;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(24);
var $keys = __webpack_require__(23);

__webpack_require__(15)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(18);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(13);
var toLength = __webpack_require__(34);
var toAbsoluteIndex = __webpack_require__(95);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(30);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(97);
module.exports = __webpack_require__(0).Object.getPrototypeOf;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(24);
var $getPrototypeOf = __webpack_require__(54);

__webpack_require__(15)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__(99);
var step = __webpack_require__(100);
var Iterators = __webpack_require__(16);
var toIObject = __webpack_require__(13);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(49)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0; // next index
  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {/* empty */};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (done, value) {
  return { value: value, done: !!done };
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(57);
__webpack_require__(63);
__webpack_require__(117);
__webpack_require__(118);
module.exports = __webpack_require__(0).Symbol;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(104);
module.exports = __webpack_require__(0).Object.preventExtensions;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(58).onFreeze;

__webpack_require__(15)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(107);
module.exports = __webpack_require__(0).Object.isExtensible;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(4);

__webpack_require__(15)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(23);
var gOPS = __webpack_require__(59);
var pIE = __webpack_require__(41);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }return result;
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(57);
module.exports = __webpack_require__(0).Object.getOwnPropertySymbols;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.2.2 IsArray(argument)
var cof = __webpack_require__(18);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(113);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(15)('getOwnPropertyNames', function () {
  return __webpack_require__(60).f;
});

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(115), __esModule: true };

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(116);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(13);
var $getOwnPropertyDescriptor = __webpack_require__(44).f;

__webpack_require__(15)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(40)('asyncIterator');

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(40)('observable');

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Snake = undefined;

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Direction = __webpack_require__(28);

var _Cell = __webpack_require__(20);

var _Food = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Snake = function () {
    (0, _createClass3.default)(Snake, [{
        key: 'header',
        get: function get() /*:ReadOnlyCell*/ {
            return _Cell.ReadOnlyCell.clone(this.$header);
        }

        /**
         * 身体
         */

        /**
         * 头
         */

    }, {
        key: 'body',
        get: function get() /*: Array<ReadOnlyCell>*/ {
            return this.$body.map(function (item) {
                return _Cell.ReadOnlyCell.clone(item);
            });
        }

        /**
         * 移动方向
         */

    }, {
        key: 'direction',
        get: function get() /*:Direction*/ {
            return this.$direction;
        }

        /**
         * 预计的移动方向
         */


        /**
        * 将要生长数量
        */

    }, {
        key: 'growAmount',
        get: function get() /*:number*/ {
            return this.$growAmount;
        }

        /**
         * 默认配置
         * @param options 默认配置
         * @param options.direction         方向
         * @param options.bodyLength        身体初始长度
         * @param options.headerPosition     初始头部坐标
         */

    }]);

    /**
     * 蛇的构造函数
     * @param options
     * @param options.direction         方向
     * @param options.bodyLength        身体初始长度
     * @param options.headerPosition     初始头部坐标
     */
    function Snake(options /*: {
                                   headerPosition: ICell,
                                   direction?: Direction,
                                   bodyLength?: number,
                               }*/) {
        (0, _classCallCheck3.default)(this, Snake);
        this.$growAmount = 0;
        this.defaultOption = {
            direction: _Direction.Up,
            bodyLength: 3 };

        //去除options中为定义的部分，这样可以让默认值覆盖为给定值
        for (var key in this.defaultOption) {
            if (options[key] === undefined) {
                options[key] = this.defaultOption[key];
            }
        }

        this.$direction = this.$willTurnDirection = options.direction;
        this.$header = new _Cell.Cell(options.headerPosition.x, options.headerPosition.y);

        //生成身体
        this.$body = [];
        var lastBody = this.$header;
        for (var i = 0; i < options.bodyLength; i++) {
            lastBody = _Cell.Cell.getCellByDirection(lastBody, _Direction.DirectionTools.getReverse(this.$direction));
            this.$body.push(lastBody);
        }
    }

    /**
     * 移动
     * @param food
     */


    (0, _createClass3.default)(Snake, [{
        key: 'move',
        value: function move(food /*:Array<IFood>|IFood*/) /*: IFood*/ {
            //同步方向改变
            if (this.$willTurnDirection != this.$direction) {
                this.$direction = this.$willTurnDirection;
            }

            var canEatFood = this.canEat(food);
            if (canEatFood) {
                this.eat(canEatFood);
            } else {
                this.$move();
            }

            return canEatFood;
        }

        /**
         * 移动
         * @param food
         */

    }, {
        key: '$move',
        value: function $move() {
            //如果增长度大于0，说明需要增长，
            if (this.$growAmount > 0) {
                this.$body.unshift(this.$header);
                this.$header = _Cell.Cell.getCellByDirection(this.$header, this.$direction);
                this.$growAmount--;
            } else {
                this.$body.unshift(this.$header);
                this.$body.pop();
                this.$header = _Cell.Cell.getCellByDirection(this.$header, this.$direction);
            }
        }

        /**
         * 转向
         */

    }, {
        key: 'turn',
        value: function turn(willTurnDirection /*: Direction*/) {
            //如果要转向的方向，不和当前方向相反，则可以转向
            if (!_Direction.DirectionTools.isReverse(willTurnDirection, this.$direction)) {
                this.$willTurnDirection = willTurnDirection;
            }
        }

        /**
         * 判断蛇是否可以吃食物
         * @param {(Array<ICell>|ICell)} food
         * @returns
         * @memberof Snake
         */

    }, {
        key: 'canEat',
        value: function canEat(food /*:Array<IFood>|IFood*/) /*: IFood*/ {
            var _food /*: Array<IFood>*/ = void 0;
            if (!Array.isArray(food)) {
                _food = [food];
            } else {
                _food = food;
            }

            var nextHeader = _Cell.Cell.getCellByDirection(this.$header, this.$direction);

            return _food.filter(function (item) {
                return _Cell.Cell.equal(item, nextHeader);
            })[0] || null;
        }

        /**
         * 吃食物
         * @param {IFood)} food
         * @returns
         * @memberof Snake
         */

    }, {
        key: 'eat',
        value: function eat(food /*:IFood*/) {
            this.$growAmount += food.grow;
            this.$move();
        }

        /**
         * 判断蛇是否已经死亡：头部包含在身体里面就认为蛇死亡了
         * @returns
         * @memberof Snake
         */

    }, {
        key: 'isDead',
        value: function isDead() {
            var _this = this;

            return this.$body.every(function (item) {
                return !_Cell.Cell.equal(_this.$header, item);
            });
        }
    }]);
    return Snake;
}(); // @flow


exports.Snake = Snake;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(121);
module.exports = __webpack_require__(0).Object.setPrototypeOf;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(3);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(122).set });

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _setPrototypeOf = __webpack_require__(46);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(4);
var anObject = __webpack_require__(6);
var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: _setPrototypeOf2.default || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = __webpack_require__(14)(Function.call, __webpack_require__(44).f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }
    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomChoose = exports.random = undefined;

var _regenerator = __webpack_require__(124);

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(_random);

/**
 * 根据随机数种子，生成随机数队列
 * @param seed
 */
function _random(seed /*: number*/) {
    var makeRandom;
    return _regenerator2.default.wrap(function _random$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    makeRandom = function makeRandom(_seed /*: number*/) {
                        _seed = (_seed * 9301 + 49297) % 233280; //为何使用这三个数?
                        return _seed / 233280.0;
                    };

                case 1:
                    if (false) {
                        _context.next = 7;
                        break;
                    }

                    _context.next = 4;
                    return seed = makeRandom(seed);

                case 4:
                    //当前种子乘以1000，做下一次运算种子
                    seed = seed * 1000;

                case 5:
                    _context.next = 1;
                    break;

                case 7:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked, this);
}

var random = exports.random = function random(seed /*: number*/) {
    var i = _random(seed);
    return function () {
        return i.next().value;
    };
};

/**
* 
* 从列表中随机查找若干数据
* @param {Array<any>} list                 可选择范围
* @param {number} chooseNum                需要查找的数量
* @param {number} [seed=Date.now()]        随机数种子
* @param {(any)=>boolean} fn               filter条件
* @returns 
*/
var randomChoose = exports.randomChoose = function randomChoose /*:: <T>*/(list /*: Array<T>*/, chooseNum /*: number*/) /*: Array<T>*/ {
    var seed /*: number*/ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Date.now();
    var fn /*: (T)=>boolean*/ = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
        return true;
    };

    chooseNum = Math.min(chooseNum, list.length);

    var indexArr = [];
    var randomArr = [];
    list.map(function (item, i) {
        return indexArr.push(i);
    });

    var randomListFn = random(seed);

    var listLength = list.length;
    for (var i = 0; i < listLength && chooseNum > randomArr.length; i++) {
        var index = Math.floor(indexArr.length * randomListFn());
        var resultIndex = indexArr.splice(index, 1)[0];
        if (fn(list[resultIndex]) !== false) {
            randomArr.push(resultIndex);
        }
    }

    return randomArr.map(function (i) {
        return list[i];
    });
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(125);

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getOwnPropertyNames = __webpack_require__(43);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = function () {
  return this;
}() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime && (0, _getOwnPropertyNames2.default)(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(126);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch (e) {
    g.regeneratorRuntime = undefined;
  }
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _promise = __webpack_require__(128);

var _promise2 = _interopRequireDefault(_promise);

var _setPrototypeOf = __webpack_require__(46);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _getPrototypeOf = __webpack_require__(27);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _create = __webpack_require__(33);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(8);

var _typeof3 = _interopRequireDefault(_typeof2);

var _symbol = __webpack_require__(56);

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof _symbol2.default === "function" ? _symbol2.default : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = ( false ? "undefined" : (0, _typeof3.default)(module)) === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = (0, _create2.default)(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = _getPrototypeOf2.default;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = (0, _create2.default)(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (_setPrototypeOf2.default) {
      (0, _setPrototypeOf2.default)(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = (0, _create2.default)(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && (typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value)) === "object" && hasOwn.call(value, "__await")) {
          return _promise2.default.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return _promise2.default.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new _promise2.default(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}(
// In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this;
}() || Function("return this")());
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(127)(module)))

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(129), __esModule: true };

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(63);
__webpack_require__(29);
__webpack_require__(55);
__webpack_require__(130);
__webpack_require__(140);
__webpack_require__(141);
module.exports = __webpack_require__(0).Promise;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(22);
var global = __webpack_require__(1);
var ctx = __webpack_require__(14);
var classof = __webpack_require__(67);
var $export = __webpack_require__(3);
var isObject = __webpack_require__(4);
var aFunction = __webpack_require__(21);
var anInstance = __webpack_require__(131);
var forOf = __webpack_require__(132);
var speciesConstructor = __webpack_require__(71);
var task = __webpack_require__(72).set;
var microtask = __webpack_require__(134)();
var newPromiseCapabilityModule = __webpack_require__(47);
var perform = __webpack_require__(73);
var promiseResolve = __webpack_require__(74);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function empty() {/* empty */};
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(2)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) {/* empty */}
}();

// helpers
var isThenable = function isThenable(it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function notify(promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function run(reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) {
      run(chain[i++]);
    } // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function onUnhandled(promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    }promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function isUnhandled(promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function onHandleUnhandled(promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function $reject(value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function $resolve(value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = []; // <- awaiting reactions
    this._a = undefined; // <- checked in isUnhandled reactions
    this._s = 0; // <- state
    this._d = false; // <- done
    this._v = undefined; // <- value
    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false; // <- notify
  };
  Internal.prototype = __webpack_require__(135)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function OwnPromiseCapability() {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(26)($Promise, PROMISE);
__webpack_require__(136)(PROMISE);
Wrapper = __webpack_require__(0)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(75)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }return it;
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = __webpack_require__(14);
var call = __webpack_require__(68);
var isArrayIter = __webpack_require__(69);
var anObject = __webpack_require__(6);
var toLength = __webpack_require__(34);
var getIterFn = __webpack_require__(70);
var BREAK = {};
var RETURN = {};
var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
_exports.BREAK = BREAK;
_exports.RETURN = RETURN;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
                  var un = that === undefined;
                  switch (args.length) {
                                    case 0:
                                                      return un ? fn() : fn.call(that);
                                    case 1:
                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
                                    case 2:
                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                                    case 3:
                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                                    case 4:
                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                  }return fn.apply(that, args);
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(1);
var macrotask = __webpack_require__(72).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(18)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function flush() {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();else last = undefined;
        throw e;
      }
    }last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function notify() {
      process.nextTick(flush);
    };
    // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function notify() {
      node.data = toggle = !toggle;
    };
    // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function notify() {
      promise.then(flush);
    };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
  } else {
    notify = function notify() {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    }last = task;
  };
};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hide = __webpack_require__(11);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];else hide(target, key, src[key]);
  }return target;
};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(1);
var core = __webpack_require__(0);
var dP = __webpack_require__(5);
var DESCRIPTORS = __webpack_require__(7);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(29);
__webpack_require__(138);
module.exports = __webpack_require__(0).Array.from;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _from = __webpack_require__(76);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ctx = __webpack_require__(14);
var $export = __webpack_require__(3);
var toObject = __webpack_require__(24);
var call = __webpack_require__(68);
var isArrayIter = __webpack_require__(69);
var toLength = __webpack_require__(34);
var createProperty = __webpack_require__(139);
var getIterFn = __webpack_require__(70);

$export($export.S + $export.F * !__webpack_require__(75)(function (iter) {
  (0, _from2.default)(iter);
}), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $defineProperty = __webpack_require__(5);
var createDesc = __webpack_require__(19);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally


var $export = __webpack_require__(3);
var core = __webpack_require__(0);
var global = __webpack_require__(1);
var speciesConstructor = __webpack_require__(71);
var promiseResolve = __webpack_require__(74);

$export($export.P + $export.R, 'Promise', { 'finally': function _finally(onFinally) {
    var C = speciesConstructor(this, core.Promise || global.Promise);
    var isFunction = typeof onFinally == 'function';
    return this.then(isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () {
        return x;
      });
    } : onFinally, isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () {
        throw e;
      });
    } : onFinally);
  } });

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try

var $export = __webpack_require__(3);
var newPromiseCapability = __webpack_require__(47);
var perform = __webpack_require__(73);

$export($export.S, 'Promise', { 'try': function _try(callbackfn) {
    var promiseCapability = newPromiseCapability.f(this);
    var result = perform(callbackfn);
    (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
    return promiseCapability.promise;
  } });

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ground = exports.Print = undefined;

var _getPrototypeOf = __webpack_require__(27);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(64);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(65);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Cell = __webpack_require__(20);

var _Direction = __webpack_require__(28);

var _Food = __webpack_require__(45);

var _Ground2 = __webpack_require__(66);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 贪食蛇游戏中，用于绘制的常量
 */
/**
 * @file
 * 贪食蛇的坐标系
 */
// @flow
var CellShowType = {
    //空白
    BLANK: '00',

    //头
    HEAD_UP: '01',
    HEAD_DOWN: '02',
    HEAD_LEFT: '03',
    HEAD_RIGHT: '04',

    //直行的身子
    BODY_UP: '11',
    BODY_DOWN: '12',
    BODY_LEFT: '13',
    BODY_RIGHT: '14',

    //正在转弯的身子
    BODY_LEFT_TURNING_UP: '21',
    BODY_LEFT_TURNING_DOWN: '22',
    BODY_RIGHT_TURNING_UP: '23',
    BODY_RIGHT_TURNING_DOWN: '24',
    BODY_UP_TURNING_LEFT: '25',
    BODY_UP_TURNING_RIGHT: '26',
    BODY_DOWN_TURNING_LEFT: '27',
    BODY_DOWN_TURNING_RIGHT: '28',

    //尾巴
    TAIL_UP: '31',
    TAIL_DOWN: '32',
    TAIL_LEFT: '33',
    TAIL_RIGHT: '34',

    //食物
    FOOD_1: '51',
    FOOD_2: '52',
    FOOD_3: '53'
};

var Print = exports.Print = function (_Ground) {
    (0, _inherits3.default)(Print, _Ground);
    (0, _createClass3.default)(Print, [{
        key: 'cells',
        get: function get() /*:Array<Array<String>>*/ {
            return this.$cells.map(function (row) {
                return row.map(function (col) {
                    return col ? col.toString() : '';
                });
            });
        }
    }]);

    function Print() {
        var width /*:number*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
        var height /*:number*/ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
        (0, _classCallCheck3.default)(this, Print);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Print.__proto__ || (0, _getPrototypeOf2.default)(Print)).call(this, width, height));

        _this.$cells = [];


        for (var y = 0; y < _this.height; y++) {
            _this.$cells[y] = [];
            for (var x = 0; x < _this.width; x++) {
                _this.$cells[y][x] = CellShowType.BLANK;
            }
        }
        return _this;
    }

    /**
     * 绘制坐标
     * @param cell
     * @param cellShowType
     */


    (0, _createClass3.default)(Print, [{
        key: '$printCell',
        value: function $printCell(cell /*: Cell*/, cellShowType /*: CellShowType*/) {
            if (!this.inGround(cell) || this.$cells[cell.y][cell.x] != CellShowType.BLANK) {
                return;
            }

            this.$cells[cell.y][cell.x] = cellShowType;
        }

        /**
         * 清除之前的绘制
         */

    }, {
        key: 'rest',
        value: function rest() {
            for (var y = 0; y < this.height; y++) {
                for (var x = 0; x < this.width; x++) {
                    this.$cells[y][x] = CellShowType.BLANK;
                }
            }
        }

        /**
         * 绘制头部
         * @param head              头的坐标
         * @param direction         头的方向
         */

    }, {
        key: 'printHead',
        value: function printHead(head /*: Cell*/, direction /*: Direction*/) {
            if (direction == _Direction.Up) {
                this.$printCell(head, CellShowType.HEAD_UP);
            } else if (direction == _Direction.Down) {
                this.$printCell(head, CellShowType.HEAD_DOWN);
            } else if (direction == _Direction.Right) {
                this.$printCell(head, CellShowType.HEAD_RIGHT);
            } else if (direction == _Direction.Left) {
                this.$printCell(head, CellShowType.HEAD_LEFT);
            }
        }
    }, {
        key: '$getDirectionString',
        value: function $getDirectionString(direction /*: Direction*/) {
            if (direction == _Direction.Up) {
                return 'UP';
            } else if (direction == _Direction.Down) {
                return 'DOWN';
            } else if (direction == _Direction.Left) {
                return 'LEFT';
            } else if (direction == _Direction.Right) {
                return 'RIGHT';
            }
        }

        /**
         * 绘制身子
         * @param head
         * @param body
         */

    }, {
        key: 'printBody',
        value: function printBody(head /*: Cell*/, body /*: Array<Cell>*/) {
            if (!body.length) {
                return;
            } else if (body.length == 1) {
                return;
            }

            for (var i = 0, lastCell = head; i < body.length; i++) {
                var cellShowType = void 0;
                if (i == body.length - 1) {
                    cellShowType = CellShowType['TAIL_' + this.$getDirectionString(_Cell.Cell.getDirectionByCell(body[i], lastCell))];
                    this.$printCell(body[i], cellShowType);
                    break;
                } else {
                    var nextCell = body[i + 1];
                    var turningDirection = _Cell.Cell.getDirectionByCell(body[i], lastCell);
                    var nextTurningDirection = _Cell.Cell.getDirectionByCell(body[i], nextCell);
                    if (turningDirection == nextTurningDirection || _Direction.DirectionTools.isReverse(turningDirection, nextTurningDirection)) {
                        cellShowType = CellShowType['BODY_' + this.$getDirectionString(turningDirection)];
                    } else {
                        cellShowType = CellShowType['BODY_' + this.$getDirectionString(turningDirection) + '_TURNING_' + this.$getDirectionString(nextTurningDirection)];
                    }
                    this.$printCell(body[i], cellShowType);
                    lastCell = body[i];
                }
            }
        }

        /**
         * 绘制食物
         * @param food
         */

    }, {
        key: 'printFoot',
        value: function printFoot(food /*: Array<Food>*/) {
            var _this2 = this;

            food.forEach(function (f) {
                if (f.grow == 1) {
                    _this2.$printCell(f, CellShowType.FOOD_1);
                } else if (f.grow == 2) {
                    _this2.$printCell(f, CellShowType.FOOD_2);
                } else if (f.grow == 3) {
                    _this2.$printCell(f, CellShowType.FOOD_3);
                }
            });
        }
    }]);
    return Print;
}(_Ground2.Ground);

exports.Ground = _Ground2.Ground;

/***/ })
/******/ ]);
});
//# sourceMappingURL=snake.js.map