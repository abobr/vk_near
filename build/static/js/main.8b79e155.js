/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(33)('wks');
var uid = __webpack_require__(12);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(87);
} else {
  module.exports = require('./cjs/react.development.js');
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(13)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var hide = __webpack_require__(7);
var has = __webpack_require__(10);
var SRC = __webpack_require__(12)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(5).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var createDesc = __webpack_require__(18);
module.exports = __webpack_require__(4) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(35);
var toPrimitive = __webpack_require__(37);
var dP = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(63);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(67);
var defined = __webpack_require__(20);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(34);
var $export = __webpack_require__(39);
var redefine = __webpack_require__(6);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(11);
var $iterCreate = __webpack_require__(64);
var setToStringTag = __webpack_require__(23);
var getPrototypeOf = __webpack_require__(71);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
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
    $default = function values() { return $native.call(this); };
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(33)('keys');
var uid = __webpack_require__(12);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(8).f;
var has = __webpack_require__(10);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(3), __webpack_require__(26), __webpack_require__(27), __webpack_require__(28), __webpack_require__(52));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "svg-baker-runtime/browser-symbol", "svg-sprite-loader/runtime/browser-sprite.build", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("prop-types"), require("svg-baker-runtime/browser-symbol"), require("svg-sprite-loader/runtime/browser-sprite.build"), require("react-dom")) : factory(root["react"], root["prop-types"], root["svg-baker-runtime/browser-symbol"], root["svg-sprite-loader/runtime/browser-sprite.build"], root["react-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__34__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 93);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = classNames;
function classNames() {
  var result = [];

  [].concat(Array.prototype.slice.call(arguments)).forEach(function (item) {
    if (!item) {
      return;
    }
    switch (typeof item === 'undefined' ? 'undefined' : _typeof(item)) {
      case 'string':
        result.push(item);
        break;
      case 'object':
        Object.keys(item).forEach(function (key) {
          if (item[key]) {
            result.push(key);
          }
        });
        break;
      default:
        result.push('' + item);
    }
  });

  return result.join(' ');
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClassname;

var _platform = __webpack_require__(4);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var osname = (0, _platform.platform)();

function getClassname(base) {
  var _classnames;

  return (0, _classnames3.default)(base, (_classnames = {}, _defineProperty(_classnames, base + '--ios', osname === _platform.IOS), _defineProperty(_classnames, base + '--android', osname === _platform.ANDROID), _classnames));
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.platform = platform;
var ANDROID = exports.ANDROID = 'android';
var IOS = exports.IOS = 'ios';

var ua = void 0;
var platformName = void 0;

function platform(useragent) {
  if (!ua) {
    ua = useragent || navigator && navigator.userAgent || '';
  }
  if (!platformName) {
    platformName = /android/i.test(ua) ? ANDROID : IOS;
  }

  return platformName;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACTIVE_EFFECT_DELAY = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Touch = __webpack_require__(8);

var _Touch2 = _interopRequireDefault(_Touch);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _platform = __webpack_require__(4);

var _offset = __webpack_require__(31);

var _touch = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ts = function ts() {
  return +Date.now();
};
var baseClassNames = (0, _getClassName2.default)('Tappable');
var osname = (0, _platform.platform)();

var ACTIVE_DELAY = 70;
var ACTIVE_EFFECT_DELAY = exports.ACTIVE_EFFECT_DELAY = 600;

var storage = {};

/**
 * Очищает таймауты и хранилище для всех экземпляров компонента, кроме переданного
 *
 * @param {String} exclude ID экземпляра-исключения
 * @returns {void}
 */
function deactivateOtherInstances(exclude) {
  Object.keys(storage).filter(function (id) {
    return id !== exclude;
  }).forEach(function (id) {
    clearTimeout(storage[id].activeTimeout);
    clearTimeout(storage[id].timeout);
    storage[id].stop();

    delete storage[id];
  });
}

var Tappable = function (_Component) {
  _inherits(Tappable, _Component);

  function Tappable(props) {
    _classCallCheck(this, Tappable);

    var _this = _possibleConstructorReturn(this, (Tappable.__proto__ || Object.getPrototypeOf(Tappable)).call(this, props));

    _this.isSlide = false;

    _this.onStart = function (_ref) {
      var originalEvent = _ref.originalEvent;

      _this.props.stopPropagation && originalEvent.stopPropagation();
      if (originalEvent.touches && originalEvent.touches.length > 1) {
        return deactivateOtherInstances();
      }

      if (osname === _platform.ANDROID) {
        _this.onDown(originalEvent);
      }

      storage[_this.id] = {};
      _this.getStorage().stop = _this.stop;
      _this.getStorage().activeTimeout = setTimeout(_this.start, ACTIVE_DELAY);
    };

    _this.onMove = function (_ref2) {
      var originalEvent = _ref2.originalEvent,
          shiftXAbs = _ref2.shiftXAbs,
          shiftYAbs = _ref2.shiftYAbs;

      _this.props.stopPropagation && originalEvent.stopPropagation();
      if (shiftXAbs > 20 || shiftYAbs > 20) {
        _this.isSlide = true;
        _this.stop();
      }
    };

    _this.onEnd = function (_ref3) {
      var originalEvent = _ref3.originalEvent;

      _this.props.stopPropagation && originalEvent.stopPropagation();
      var now = ts();

      if (originalEvent.touches && originalEvent.touches.length > 0) {
        _this.isSlide = false;
        return;
      }

      if (_this.state.active) {
        if (now - _this.state.ts >= 100) {
          // Долгий тап, выключаем подсветку
          _this.stop();
        } else {
          // Короткий тап, оставляем подсветку
          var timeout = setTimeout(_this.stop, _this.props.activeEffectDelay - now + _this.state.ts);
          var store = _this.getStorage();

          if (store) {
            store.timeout = timeout;
          }
        }
      } else if (!_this.isSlide) {
        // Очень короткий тап, включаем подсветку
        _this.start();

        var _timeout = setTimeout(_this.stop, _this.props.activeEffectDelay);

        if (_this.getStorage()) {
          clearTimeout(_this.getStorage().activeTimeout);
          _this.getStorage().timeout = _timeout;
        } else {
          _this.timeout = _timeout;
        }
      }

      _this.isSlide = false;
    };

    _this.onDown = function (e) {
      if (osname === _platform.ANDROID) {
        var _getOffsetRect = (0, _offset.getOffsetRect)(_this.container),
            top = _getOffsetRect.top,
            left = _getOffsetRect.left;

        var x = (0, _touch.coordX)(e);
        var y = (0, _touch.coordY)(e);
        var key = 'wave' + Date.now().toString();

        _this.setState(function (state) {
          return {
            clicks: Object.assign({}, state.clicks, _defineProperty({}, key, {
              x: Math.round(x - left),
              y: Math.round(y - top)
            }))
          };
        });

        _this.wavesTimeout = setTimeout(function () {
          _this.setState(function (state) {
            var clicks = Object.assign({}, state.clicks);
            delete clicks[key];
            return { clicks: clicks };
          });
        }, 225);
      }
    };

    _this.start = function () {
      if (!_this.state.active) {
        _this.setState({
          active: true,
          ts: ts()
        });
      }
      deactivateOtherInstances(_this.id);
    };

    _this.stop = function () {
      if (_this.state.active) {
        _this.setState({
          active: false,
          ts: null
        });
      }
      if (_this.getStorage()) {
        clearTimeout(_this.getStorage().activeTimeout);
        delete storage[_this.id];
      }
    };

    _this.getStorage = function () {
      return storage[_this.id];
    };

    _this.getRef = function (container) {
      _this.container = container;
      _this.props.getRootRef && _this.props.getRootRef(container);
    };

    _this.id = Math.round(Math.random() * 1e8).toString(16);
    _this.state = {
      clicks: {},
      active: false,
      ts: null
    };
    return _this;
  }

  /**
   * Обрабатывает событие touchstart
   *
   * @returns {void}
   */


  /**
   * Обрабатывает событие touchmove
   *
   * @returns {void}
   */


  /**
   * Обрабатывает событие touchend
   *
   * @returns {void}
   */


  /**
   * Реализует эффект при тапе для Андроида
   *
   * @returns {void}
   */


  /**
   * Устанавливает активное выделение
   *
   * @returns {void}
   */


  /**
   * Снимает активное выделение
   *
   * @returns {void}
   */


  /**
   * Возвращает хранилище для экземпляра компонента
   *
   * @returns {Object} Хранилище для текущего экземпляра компонента
   */


  /**
   * Берет ref на DOM-ноду из экземпляра Touch
   *
   * @param {React.Component} container Touch component instance
   */


  _createClass(Tappable, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (storage[this.id]) {
        clearTimeout(storage[this.id].timeout);
        clearTimeout(storage[this.id].activeTimeout);

        delete storage[this.id];
      }

      clearTimeout(this.wavesTimeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          clicks = _state.clicks,
          active = _state.active;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          component = _props.component,
          activeEffectDelay = _props.activeEffectDelay,
          stopPropagation = _props.stopPropagation,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['children', 'className', 'component', 'activeEffectDelay', 'stopPropagation', 'getRootRef']);

      var Component = !restProps.disabled ? _Touch2.default : component;
      var classes = (0, _classnames2.default)(baseClassNames, className, {
        'Tappable--active': active,
        'Tappable--inactive': !active
      });

      var props = {};

      if (!restProps.disabled) {
        props.component = component;
        props.onStart = this.onStart;
        props.onMove = this.onMove;
        props.onEnd = this.onEnd;
      }

      if (typeof Component === 'string') {
        props.ref = this.getRef;
      } else {
        props.getRootRef = this.getRef;
      }

      return _react2.default.createElement(
        Component,
        _extends({}, restProps, { className: classes }, props),
        osname === _platform.ANDROID && _react2.default.createElement(
          'span',
          { className: 'Tappable__waves' },
          Object.keys(clicks).map(function (k) {
            return _react2.default.createElement('span', { className: 'Tappable__wave', style: { top: clicks[k].y, left: clicks[k].x }, key: k });
          })
        ),
        children
      );
    }
  }]);

  return Tappable;
}(_react.Component);

Tappable.propTypes = {
  onClick: _propTypes2.default.func,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  role: _propTypes2.default.string,
  activeEffectDelay: _propTypes2.default.number,
  stopPropagation: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  getRootRef: _propTypes2.default.func
};
Tappable.defaultProps = {
  component: 'div',
  role: 'button',
  stopPropagation: false,
  disabled: false,
  activeEffectDelay: ACTIVE_EFFECT_DELAY
};
exports.default = Tappable;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _touch = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = (0, _touch.getSupportedEvents)();

var Touch = function (_Component) {
  _inherits(Touch, _Component);

  function Touch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Touch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Touch.__proto__ || Object.getPrototypeOf(Touch)).call.apply(_ref, [this].concat(args))), _this), _this.cancelClick = false, _this.gesture = {}, _this.onStart = function (e) {
      _this.gesture = {
        startX: (0, _touch.coordX)(e),
        startY: (0, _touch.coordY)(e),
        startT: new Date(),
        isPressed: true
      };

      // Вызываем нужные колбеки из props
      var outputEvent = Object.assign({}, _this.gesture, {
        originalEvent: e
      });

      if (_this.props.onStart) {
        _this.props.onStart(outputEvent);
      }

      if (_this.props.onStartX) {
        _this.props.onStartX(outputEvent);
      }

      if (_this.props.onStartY) {
        _this.props.onStartY(outputEvent);
      }

      !_touch.touchEnabled && _this.subscribe(_this.document);
    }, _this.onMove = function (e) {
      var _this$gesture = _this.gesture,
          isPressed = _this$gesture.isPressed,
          isX = _this$gesture.isX,
          isY = _this$gesture.isY,
          startX = _this$gesture.startX,
          startY = _this$gesture.startY;


      if (isPressed) {
        // смещения
        var shiftX = (0, _touch.coordX)(e) - startX;
        var shiftY = (0, _touch.coordY)(e) - startY;

        // абсолютные значения смещений
        var shiftXAbs = Math.abs(shiftX);
        var shiftYAbs = Math.abs(shiftY);

        // Если определяем мультитач, то прерываем жест
        if (!!e.touches && e.touches.length > 1) {
          return _this.onEnd(e);
        }

        // если мы ещё не определились
        if (!isX && !isY) {
          var willBeX = shiftXAbs >= 5 && shiftXAbs > shiftYAbs;
          var willBeY = shiftYAbs >= 5 && shiftYAbs > shiftXAbs;
          var willBeSlidedX = willBeX && !!_this.props.onMoveX || !!_this.props.onMove;
          var willBeSlidedY = willBeY && !!_this.props.onMoveY || !!_this.props.onMove;

          _this.gesture.isY = willBeY;
          _this.gesture.isX = willBeX;
          _this.gesture.isSlideX = willBeSlidedX;
          _this.gesture.isSlideY = willBeSlidedY;
          _this.gesture.isSlide = willBeSlidedX || willBeSlidedY;
        }

        if (_this.gesture.isSlide) {
          _this.gesture.shiftX = shiftX;
          _this.gesture.shiftY = shiftY;
          _this.gesture.shiftXAbs = shiftXAbs;
          _this.gesture.shiftYAbs = shiftYAbs;

          // Вызываем нужные колбеки из props
          var outputEvent = Object.assign({}, _this.gesture, {
            originalEvent: e
          });

          if (_this.props.onMove) {
            _this.props.onMove(outputEvent);
          }

          if (_this.gesture.isSlideX && _this.props.onMoveX) {
            _this.props.onMoveX(outputEvent);
          }

          if (_this.gesture.isSlideY && _this.props.onMoveY) {
            _this.props.onMoveY(outputEvent);
          }
        }
      }
    }, _this.onEnd = function (e) {
      var _this$gesture2 = _this.gesture,
          isPressed = _this$gesture2.isPressed,
          isSlide = _this$gesture2.isSlide,
          isSlideX = _this$gesture2.isSlideX,
          isSlideY = _this$gesture2.isSlideY;


      if (isPressed) {
        // Вызываем нужные колбеки из props
        var outputEvent = Object.assign({}, _this.gesture, {
          originalEvent: e
        });

        if (_this.props.onEnd) {
          _this.props.onEnd(outputEvent);
        }

        if (isSlideY && _this.props.onEndY) {
          _this.props.onEndY(outputEvent);
        }

        if (isSlideX && _this.props.onEndX) {
          _this.props.onEndX(outputEvent);
        }
      }

      // Если закончили жест на ссылке, выставляем флаг для отмены перехода
      _this.cancelClick = e.target.tagName === 'A' && isSlide;
      _this.gesture = {};

      !_touch.touchEnabled && _this.unsubscribe(_this.document);
    }, _this.onDragStart = function (e) {
      if (e.target.tagName === 'A' || e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    }, _this.onClick = function (e) {
      if (_this.cancelClick) {
        _this.cancelClick = false;
        e.preventDefault();
      }
      _this.props.onClick && _this.props.onClick(e);
    }, _this.getRef = function (container) {
      _this.container = container;
      _this.props.getRootRef && _this.props.getRootRef(container);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Touch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.container.addEventListener(events[0], this.onStart, { capture: this.props.useCapture, passive: false });
      _touch.touchEnabled && this.subscribe(this.container);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.container.removeEventListener(events[0], this.onStart, { capture: this.props.useCapture, passive: false });
      _touch.touchEnabled && this.unsubscribe(this.container);
    }

    /**
     * Обработчик событий touchstart
     *
     * @param {Object} e Браузерное событие
     * @returns {void}
     */


    /**
     * Обработчик событий touchmove
     *
     * @param {Object} e Браузерное событие
     * @returns {void}
     */


    /**
     * Обработчик событий touchend, touchcancel
     *
     * @param {Object} e Браузерное событие
     * @returns {void}
     */

  }, {
    key: 'subscribe',
    value: function subscribe(element) {
      element.addEventListener(events[1], this.onMove, { capture: this.props.useCapture, passive: false });
      element.addEventListener(events[2], this.onEnd, { capture: this.props.useCapture, passive: false });
      element.addEventListener(events[3], this.onEnd, { capture: this.props.useCapture, passive: false });
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(element) {
      element.removeEventListener(events[1], this.onMove, { capture: this.props.useCapture, passive: false });
      element.removeEventListener(events[2], this.onEnd, { capture: this.props.useCapture, passive: false });
      element.removeEventListener(events[3], this.onEnd, { capture: this.props.useCapture, passive: false });
    }

    /**
     * Обработчик событий dragstart
     * Отменяет нативное браузерное поведение для вложенных ссылок и изображений
     *
     * @param {Object} e Браузерное событие
     * @returns {void}
     */


    /**
     * Обработчик клика по компоненту
     * Отменяет переход по вложенной ссылке, если был зафиксирован свайп
     *
     * @param {Object} e Браузерное событие
     * @returns {void}
     */

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onStart = _props.onStart,
          onStartX = _props.onStartX,
          onStartY = _props.onStartY,
          onMove = _props.onMove,
          onMoveX = _props.onMoveX,
          onMoveY = _props.onMoveY,
          onEnd = _props.onEnd,
          onEndX = _props.onEndX,
          onEndY = _props.onEndY,
          useCapture = _props.useCapture,
          component = _props.component,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['onStart', 'onStartX', 'onStartY', 'onMove', 'onMoveX', 'onMoveY', 'onEnd', 'onEndX', 'onEndY', 'useCapture', 'component', 'getRootRef']);

      var ComponentName = component;

      return _react2.default.createElement(
        ComponentName,
        _extends({}, restProps, { onDragStart: this.onDragStart, onClick: this.onClick, ref: this.getRef }),
        this.props.children
      );
    }
  }, {
    key: 'document',
    get: function get() {
      return this.context.document || document;
    }
  }]);

  return Touch;
}(_react.Component);

Touch.propTypes = {
  onStart: _propTypes2.default.func,
  onStartX: _propTypes2.default.func,
  onStartY: _propTypes2.default.func,
  onMove: _propTypes2.default.func,
  onMoveX: _propTypes2.default.func,
  onMoveY: _propTypes2.default.func,
  onEnd: _propTypes2.default.func,
  onEndX: _propTypes2.default.func,
  onEndY: _propTypes2.default.func,
  useCapture: _propTypes2.default.bool,
  component: _propTypes2.default.string,
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func,
  getRootRef: _propTypes2.default.func
};
Touch.defaultProps = {
  component: 'div',
  children: '',
  useCapture: false
};
Touch.contextTypes = {
  document: _propTypes2.default.any
};
exports.default = Touch;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var supported = void 0,
    prefix = void 0;

if (typeof document !== 'undefined' && document.createElement) {
  var d = document.createElement('div');

  for (var i in d.style) {
    var m = i.match(/^(moz|webkit|ms|)(transition|animation)$/i);
    if (m) supported = true;
    if (m && m[1]) {
      // согласно спецификации, префиксы к событиям должны быть в нижнем регистре
      // https://www.w3schools.com/jsref/event_transitionend.asp
      prefix = m[1].toLowerCase();
    }
  }
}

exports.default = { supported: supported, prefix: prefix };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _platform = __webpack_require__(4);

var _transitionEvents = __webpack_require__(9);

var _transitionEvents2 = _interopRequireDefault(_transitionEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();

var baseClassNames = (0, _getClassName2.default)('PopoutWrapper');

var PopoutWrapper = function (_React$Component) {
  _inherits(PopoutWrapper, _React$Component);

  function PopoutWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PopoutWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PopoutWrapper.__proto__ || Object.getPrototypeOf(PopoutWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      opened: false
    }, _this.onFadeInEnd = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { manual: true };

      if (e.animationName === 'animation-full-fade-in' || e.manual) {
        _this.setState({ opened: true });
      }
    }, _this.preventTouch = function (e) {
      return e.preventDefault();
    }, _this.onClick = function (e) {
      return _this.state.opened && _this.props.onClick && _this.props.onClick(e);
    }, _this.getRef = function (el) {
      return _this.el = el;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PopoutWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('touchmove', this.preventTouch, { passive: false });
      this.waitAnimationFinish(this.el, this.onFadeInEnd);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('touchmove', this.preventTouch, { passive: false });
      clearTimeout(this.animationFinishTimeout);
    }
  }, {
    key: 'waitAnimationFinish',
    value: function waitAnimationFinish(elem, eventHandler) {
      if (_transitionEvents2.default.supported) {
        var eventName = _transitionEvents2.default.prefix ? _transitionEvents2.default.prefix + 'AnimationEnd' : 'animationend';
        elem.removeEventListener(eventName, eventHandler);
        elem.addEventListener(eventName, eventHandler);
      } else {
        this.animationFinishTimeout = setTimeout(eventHandler.bind(this), osname === _platform.ANDROID ? 300 : 600);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          v = _props.v,
          h = _props.h,
          closing = _props.closing,
          children = _props.children,
          hasMask = _props.hasMask,
          onClick = _props.onClick,
          className = _props.className,
          restProps = _objectWithoutProperties(_props, ['v', 'h', 'closing', 'children', 'hasMask', 'onClick', 'className']);

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, { className: (0, _classnames3.default)(baseClassNames, (_classnames = {}, _defineProperty(_classnames, 'PopoutWrapper--v-' + v, v), _defineProperty(_classnames, 'PopoutWrapper--h-' + h, h), _defineProperty(_classnames, 'PopoutWrapper--closing', closing), _classnames), className), onClick: this.onClick, ref: this.getRef }),
        hasMask && _react2.default.createElement('div', { className: 'PopoutWrapper__mask' }),
        _react2.default.createElement(
          'div',
          { className: 'PopoutWrapper__container' },
          children
        )
      );
    }
  }]);

  return PopoutWrapper;
}(_react2.default.Component);

PopoutWrapper.propTypes = {
  hasMask: _propTypes2.default.bool,
  v: _propTypes2.default.oneOf(['top', 'center', 'bottom']),
  h: _propTypes2.default.oneOf(['left', 'center', 'right']),
  closing: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  style: _propTypes2.default.object,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};
PopoutWrapper.defaultProps = {
  hasMask: true,
  v: 'center',
  h: 'center',
  closing: false
};
exports.default = PopoutWrapper;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var requestAnimationFrame = typeof window !== 'undefined' && window.requestAnimationFrame ? window.requestAnimationFrame : function (cb) {
  return setTimeout(cb, 1000 / 60);
};

exports.default = requestAnimationFrame;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _View = __webpack_require__(37);

var _constants = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('FixedLayout');

var FixedLayout = function (_React$Component) {
  _inherits(FixedLayout, _React$Component);

  function FixedLayout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FixedLayout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FixedLayout.__proto__ || Object.getPrototypeOf(FixedLayout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      position: null,
      top: null
    }, _this.onViewTransitionStart = function (e) {
      var panelScroll = e.detail.scrolls[_this.context.panel] || 0;
      _this.setState({
        position: 'absolute',
        top: _this.el.offsetTop + panelScroll
      });
    }, _this.onViewTransitionEnd = function () {
      _this.setState({
        position: null,
        top: null
      });
    }, _this.getRef = function (el) {
      return _this.el = el;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FixedLayout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.document.addEventListener(_View.transitionStartEventName, this.onViewTransitionStart);
      this.document.addEventListener(_View.transitionEndEventName, this.onViewTransitionEnd);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.document.removeEventListener(_View.transitionStartEventName, this.onViewTransitionStart);
      this.document.removeEventListener(_View.transitionEndEventName, this.onViewTransitionEnd);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          style = _props.style,
          vertical = _props.vertical,
          restProps = _objectWithoutProperties(_props, ['className', 'children', 'style', 'vertical']);

      var tabbarPadding = this.context.hasTabbar ? _constants.tabbarHeight : 0;
      var paddingBottom = vertical === 'bottom' && this.context.insets && this.context.insets.bottom ? this.context.insets.bottom + tabbarPadding : null;

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, {
          ref: this.getRef,
          className: (0, _classnames3.default)(baseClassNames, _defineProperty({}, 'FixedLayout--' + vertical, vertical), className),
          style: _extends({}, style, this.state, { paddingBottom: paddingBottom })
        }),
        _react2.default.createElement(
          'div',
          { className: 'FixedLayout__in' },
          children
        )
      );
    }
  }, {
    key: 'document',
    get: function get() {
      return this.context.document || document;
    }
  }]);

  return FixedLayout;
}(_react2.default.Component);

FixedLayout.propTypes = {
  children: _propTypes2.default.node,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  vertical: _propTypes2.default.oneOf(['top', 'bottom'])
};
FixedLayout.contextTypes = {
  insets: _propTypes2.default.shape({
    bottom: _propTypes2.default.number
  }),
  panel: _propTypes2.default.string,
  document: _propTypes2.default.any,
  hasTabbar: _propTypes2.default.bool
};
exports.default = FixedLayout;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeObjectKeys;
function removeObjectKeys() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var newObj = Object.assign({}, obj);

  keys.forEach(function (key) {
    return delete newObj[key];
  });

  return newObj;
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var querystring = {
  parse: function parse() {
    var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (typeof string !== 'string') return {};

    var matches = /\?(.+)$/ig.exec(string);
    var str = matches ? matches[1] : string;

    return str.split('&').reduce(function (acc, item) {
      var param = item.split('=');

      if (param[1]) {
        acc[param[0]] = decodeURIComponent(param[1]);
      }

      return acc;
    }, {});
  },
  create: function create() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var opts = arguments[1];

    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object' || data === null) return '';

    var options = _extends({ encode: true }, opts);

    return Object.keys(data).reduce(function (acc, item) {
      var type = _typeof(data[item]);

      if (type === 'string' || type === 'number' || type === 'boolean') {
        acc.push(item + '=' + (options.encode ? encodeURIComponent(data[item]) : data[item]));
      }

      if (Array.isArray(data[item])) {
        data[item].forEach(function (value) {
          acc.push(item + '[]=' + (options.encode ? encodeURIComponent(value) : value));
        });
      }

      return acc;
    }, []).join('&');
  }
};

exports.default = querystring;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isWebView = exports.isWebView = !!(window && (window.AndroidBridge || window.webkit && window.webkit.messageHandlers));

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(7), __webpack_require__(6));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 192);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _browserSymbol = __webpack_require__(2);

var _browserSymbol2 = _interopRequireDefault(_browserSymbol);

var _browserSprite = __webpack_require__(1);

var _browserSprite2 = _interopRequireDefault(_browserSprite);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var symbol = new _browserSymbol2.default({
  "id": "dropdown_24",
  "use": "dropdown_24-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"dropdown_24\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M0 0h24v24H0z\" /><path d=\"M12 14.198L6.64 9.732a1 1 0 1 0-1.28 1.536l6 5a1 1 0 0 0 1.28 0l6-5a1 1 0 1 0-1.28-1.536L12 14.198z\" fill=\"currentColor\" fill-rule=\"nonzero\" /></g></symbol>"
});
var result = _browserSprite2.default.add(symbol);

var width = symbol.viewBox.split(' ')[2];
var height = symbol.viewBox.split(' ')[3];
var size = Math.max(width, height);

function SvgIcon(_ref) {
  var className = _ref.className,
      fill = _ref.fill,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "fill", "style", "getRootRef"]);

  return _react2.default.createElement(
    "div",
    _extends({}, restProps, {
      ref: getRootRef,
      className: 'Icon' + ' Icon--' + size + ' Icon--' + symbol.id + ' ' + (className || ''),
      style: _extends({}, style, { width: width + 'px', height: height + 'px' })
    }),
    _react2.default.createElement(
      "svg",
      { viewBox: symbol.viewBox, width: width, height: height, style: { display: 'block' } },
      _react2.default.createElement("use", { xlinkHref: '#' + symbol.id, style: { fill: 'currentColor', color: fill } })
    )
  );
}
exports.default = SvgIcon;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ })

/******/ });
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Touch = __webpack_require__(8);

var _Touch2 = _interopRequireDefault(_Touch);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Slider');

function precisionRound(number, precision) {
  var factor = Math.pow(10, precision || 1);
  return Math.round(number * factor) / factor;
}

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.onStart = function (e) {
      var absolutePosition = _this.validateAbsolute(e.startX - _this.state.containerLeft);
      var percentPosition = _this.absoluteToPecent(absolutePosition);

      _this.onChange(_this.percentToValue(percentPosition));

      if (_this.isControlledOutside) {
        _this.setState({ startX: absolutePosition });
      } else {
        _this.setState({
          startX: absolutePosition,
          percentPosition: percentPosition
        });
      }

      _this.setState({ active: !!e.originalEvent.target.closest('.Slider__thumb') });
    };

    _this.onMoveX = function (e) {
      var absolutePosition = _this.validateAbsolute(_this.state.startX + (e.shiftX || 0));
      var percentPosition = _this.absoluteToPecent(absolutePosition);

      _this.onChange(_this.percentToValue(percentPosition));

      if (!_this.isControlledOutside) {
        _this.setState({ percentPosition: percentPosition });
      }

      e.originalEvent.preventDefault();
    };

    _this.onEnd = function () {
      _this.setState({
        active: false
      });
    };

    _this.onResize = function (callback) {
      _this.setState({
        containerLeft: _this.container.offsetLeft,
        containerWidth: _this.container.offsetWidth
      }, function () {
        typeof callback === 'function' && callback();
      });
    };

    _this.getRef = function (container) {
      _this.container = container;
      _this.props.getRootRef && _this.props.getRootRef(container);
    };

    _this.state = {
      startX: 0
    };
    _this.isControlledOutside = _this.props.hasOwnProperty('value');
    return _this;
  }

  _createClass(Slider, [{
    key: 'onChange',
    value: function onChange(value) {
      this.props.onChange && this.props.onChange(value);
    }
  }, {
    key: 'validateAbsolute',
    value: function validateAbsolute(absolute) {
      var res = Math.max(0, Math.min(absolute, this.state.containerWidth));

      if (this.props.step > 0) {
        var stepCount = (this.props.max - this.props.min) / this.props.step;
        var absStep = this.state.containerWidth / stepCount;

        res = Math.round(res / absStep) * absStep;
      }

      return res;
    }
  }, {
    key: 'validatePercent',
    value: function validatePercent(percent) {
      return Math.max(0, Math.min(percent, 100));
    }
  }, {
    key: 'absoluteToPecent',
    value: function absoluteToPecent(absolute) {
      return absolute * 100 / this.state.containerWidth;
    }
  }, {
    key: 'percentToValue',
    value: function percentToValue(percent) {
      var res = percent * (this.props.max - this.props.min) / 100 + this.props.min;
      if (this.props.step > 0) {
        var stepFloatPart = ('' + this.props.step).split('.')[1] || '';
        return precisionRound(res, stepFloatPart.length);
      }
      return res;
    }
  }, {
    key: 'valueToPercent',
    value: function valueToPercent(value) {
      return (value - this.props.min) * 100 / (this.props.max - this.props.min);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('resize', this.onResize);
      this.onResize(function () {
        _this2.setState({ percentPosition: _this2.validatePercent(_this2.valueToPercent(_this2.value)) });
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.isControlledOutside && nextProps.value !== this.props.value) {
        this.setState({ percentPosition: this.validatePercent(this.valueToPercent(nextProps.value)) });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          min = _props.min,
          max = _props.max,
          step = _props.step,
          value = _props.value,
          defaultValue = _props.defaultValue,
          onChange = _props.onChange,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['className', 'min', 'max', 'step', 'value', 'defaultValue', 'onChange', 'getRootRef']);

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, { className: (0, _classnames2.default)(baseClassNames, className), ref: this.getRef }),
        _react2.default.createElement(
          _Touch2.default,
          { onStart: this.onStart, onMoveX: this.onMoveX, onEnd: this.onEnd, className: 'Slider__in' },
          _react2.default.createElement(
            'div',
            { className: 'Slider__dragger', style: { width: this.state.percentPosition + '%' } },
            _react2.default.createElement('span', {
              className: (0, _classnames2.default)('Slider__thumb', 'Slider__thumb--end', {
                'Slider__thumb--active': this.state.active
              })
            })
          )
        )
      );
    }
  }, {
    key: 'value',
    get: function get() {
      if (this.isControlledOutside) {
        return this.props.value;
      } else if (this.props.hasOwnProperty('defaultValue')) {
        return this.props.defaultValue;
      } else {
        return this.props.min;
      }
    }
  }]);

  return Slider;
}(_react.Component);

Slider.propTypes = {
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
  value: _propTypes2.default.number,
  step: _propTypes2.default.number,
  onChange: _propTypes2.default.func,
  defaultValue: _propTypes2.default.number,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  getRootRef: _propTypes2.default.func
};
Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 0
};
exports.default = Slider;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassName = (0, _getClassName2.default)('Tabs');

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          theme = _props.theme,
          style = _props.style,
          type = _props.type,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['className', 'children', 'theme', 'style', 'type', 'getRootRef']);

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, { ref: getRootRef, className: (0, _classnames3.default)(baseClassName, (_classnames = {}, _defineProperty(_classnames, 'Tabs--' + this.theme, true), _defineProperty(_classnames, 'Tabs--' + type, true), _classnames), className), style: style }),
        children
      );
    }
  }, {
    key: 'theme',


    /**
     * Метод нужен для маппинга устаревших значений theme на новые
     * @returns {string}
     */
    get: function get() {
      switch (this.props.theme) {
        case 'white':
          return 'header';
        case 'gray':
          return 'light';
        default:
          return this.props.theme;
      }
    }
  }]);

  return Tabs;
}(_react2.default.Component);

Tabs.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  /**
   * Значения white и gray устарели. Они будут удалены в следующей мажорной версии
   */
  theme: _propTypes2.default.oneOf(['light', 'header']),
  /**
   * Свойство отвечает за растягивание табов
   */
  type: _propTypes2.default.oneOf(['default', 'buttons']),
  style: _propTypes2.default.object,
  getRootRef: _propTypes2.default.func
};
Tabs.defaultProps = {
  theme: 'light',
  type: 'default'
};
exports.default = Tabs;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassName = (0, _getClassName2.default)('Avatar');

var Avatar = function Avatar(_ref) {
  var src = _ref.src,
      size = _ref.size,
      type = _ref.type,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ['src', 'size', 'type', 'style', 'className', 'children', 'getRootRef']);

  var Component = src ? 'img' : 'div';
  var borderRadius = void 0;

  switch (type) {
    case 'default':
      borderRadius = '50%';
      break;
    case 'image':
      borderRadius = 4;
      break;
    case 'app':
      borderRadius = Math.floor(size * 10 / 48);
      break;
  }

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames3.default)(baseClassName, className, _defineProperty({}, 'Avatar--type-' + type, true)), ref: getRootRef },
    _react2.default.createElement(
      'div',
      { className: 'Avatar__in' },
      _react2.default.createElement(Component, _extends({}, restProps, {
        className: 'Avatar__img',
        src: src,
        style: _extends({}, style, { width: size, height: size, borderRadius: borderRadius })
      })),
      children && _react2.default.createElement(
        'div',
        { className: 'Avatar__children', style: { width: size, height: size, borderRadius: borderRadius } },
        children
      )
    )
  );
};

Avatar.propTypes = {
  size: _propTypes2.default.oneOf([80, 72, 64, 56, 48, 40, 36, 32, 28]),
  src: _propTypes2.default.string,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(['default', 'image', 'app']),
  children: _propTypes2.default.node,
  getRootRef: _propTypes2.default.func
};

Avatar.defaultProps = {
  size: 48,
  type: 'default'
};

exports.default = Avatar;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Div;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassNames = (0, _getClassName2.default)('Div');

function Div(_ref) {
  var className = _ref.className,
      children = _ref.children,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ['className', 'children', 'getRootRef']);

  return _react2.default.createElement(
    'div',
    _extends({}, restProps, { ref: getRootRef, className: (0, _classnames2.default)(baseClassNames, className) }),
    children
  );
}

Div.propTypes = {
  style: _propTypes2.default.object,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  getRootRef: _propTypes2.default.func
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(7), __webpack_require__(6));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 205);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _browserSymbol = __webpack_require__(2);

var _browserSymbol2 = _interopRequireDefault(_browserSymbol);

var _browserSprite = __webpack_require__(1);

var _browserSprite2 = _interopRequireDefault(_browserSprite);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var symbol = new _browserSymbol2.default({
  "id": "cancel_24",
  "use": "cancel_24-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"cancel_24\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M0 0h24v24H0z\" /><path d=\"M18.3 5.7a.99.99 0 0 0-1.4 0L12 10.6 7.1 5.7a.99.99 0 0 0-1.4 1.4l4.9 4.9-4.9 4.9a.99.99 0 0 0 1.4 1.4l4.9-4.9 4.9 4.9a.99.99 0 0 0 1.4-1.4L13.4 12l4.9-4.9a.99.99 0 0 0 0-1.4z\" fill=\"currentColor\" /></g></symbol>"
});
var result = _browserSprite2.default.add(symbol);

var width = symbol.viewBox.split(' ')[2];
var height = symbol.viewBox.split(' ')[3];
var size = Math.max(width, height);

function SvgIcon(_ref) {
  var className = _ref.className,
      fill = _ref.fill,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "fill", "style", "getRootRef"]);

  return _react2.default.createElement(
    "div",
    _extends({}, restProps, {
      ref: getRootRef,
      className: 'Icon' + ' Icon--' + size + ' Icon--' + symbol.id + ' ' + (className || ''),
      style: _extends({}, style, { width: width + 'px', height: height + 'px' })
    }),
    _react2.default.createElement(
      "svg",
      { viewBox: symbol.viewBox, width: width, height: height, style: { display: 'block' } },
      _react2.default.createElement("use", { xlinkHref: '#' + symbol.id, style: { fill: 'currentColor', color: fill } })
    )
  );
}
exports.default = SvgIcon;

/***/ })

/******/ });
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(7), __webpack_require__(6));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 242);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _browserSymbol = __webpack_require__(2);

var _browserSymbol2 = _interopRequireDefault(_browserSymbol);

var _browserSprite = __webpack_require__(1);

var _browserSprite2 = _interopRequireDefault(_browserSprite);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var symbol = new _browserSymbol2.default({
  "id": "done_16",
  "use": "done_16-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" id=\"done_16\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M0 0h16v16H0z\" /><path d=\"M6 10.2L3.5 7.7a.99.99 0 1 0-1.4 1.4l3.193 3.193a1 1 0 0 0 1.414 0L14.3 4.7a.99.99 0 0 0-1.4-1.4L6 10.2z\" fill=\"currentColor\" /></g></symbol>"
});
var result = _browserSprite2.default.add(symbol);

var width = symbol.viewBox.split(' ')[2];
var height = symbol.viewBox.split(' ')[3];
var size = Math.max(width, height);

function SvgIcon(_ref) {
  var className = _ref.className,
      fill = _ref.fill,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "fill", "style", "getRootRef"]);

  return _react2.default.createElement(
    "div",
    _extends({}, restProps, {
      ref: getRootRef,
      className: 'Icon' + ' Icon--' + size + ' Icon--' + symbol.id + ' ' + (className || ''),
      style: _extends({}, style, { width: width + 'px', height: height + 'px' })
    }),
    _react2.default.createElement(
      "svg",
      { viewBox: symbol.viewBox, width: width, height: height, style: { display: 'block' } },
      _react2.default.createElement("use", { xlinkHref: '#' + symbol.id, style: { fill: 'currentColor', color: fill } })
    )
  );
}
exports.default = SvgIcon;

/***/ })

/******/ });
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassNames = (0, _getClassName2.default)('Header');

var Header = function Header(_ref) {
  var className = _ref.className,
      level = _ref.level,
      children = _ref.children,
      aside = _ref.aside,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ['className', 'level', 'children', 'aside', 'getRootRef']);

  return _react2.default.createElement(
    'div',
    _extends({}, restProps, {
      ref: getRootRef,
      className: (0, _classnames3.default)(baseClassNames, className, _defineProperty({}, 'Header--level-' + level, true))
    }),
    _react2.default.createElement(
      'div',
      { className: 'Header__in' },
      _react2.default.createElement(
        'div',
        { className: 'Header__content' },
        children
      ),
      aside && _react2.default.createElement(
        'div',
        { className: 'Header__aside' },
        aside
      )
    )
  );
};

Header.propTypes = {
  className: _propTypes2.default.string,
  level: _propTypes2.default.oneOf(['1', '2']),
  aside: _propTypes2.default.node,
  children: _propTypes2.default.node,
  style: _propTypes2.default.object,
  getRootRef: _propTypes2.default.func
};

Header.defaultProps = {
  level: '1'
};

exports.default = Header;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tappable = __webpack_require__(5);

var _Tappable2 = _interopRequireDefault(_Tappable);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassName = (0, _getClassName2.default)('CellButton');

var CellButton = function CellButton(_ref) {
  var _classnames;

  var className = _ref.className,
      align = _ref.align,
      level = _ref.level,
      before = _ref.before,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ['className', 'align', 'level', 'before', 'children']);

  return _react2.default.createElement(
    _Tappable2.default,
    _extends({}, restProps, { className: (0, _classnames3.default)(baseClassName, className, (_classnames = {}, _defineProperty(_classnames, 'CellButton--lvl-' + level, level), _defineProperty(_classnames, 'CellButton--aln-' + align, align), _classnames)), stopPropagation: true }),
    _react2.default.createElement(
      'div',
      { className: 'CellButton__in' },
      before && _react2.default.createElement(
        'div',
        { className: 'CellButton__before' },
        before
      ),
      children && _react2.default.createElement(
        'div',
        { className: 'CellButton__content' },
        children
      )
    )
  );
};

CellButton.propTypes = {
  level: _propTypes2.default.oneOf(['primary', 'danger']),
  align: _propTypes2.default.oneOf(['left', 'center', 'right']),
  before: _propTypes2.default.node,
  children: _propTypes2.default.node,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  component: _propTypes2.default.any
};

CellButton.defaultProps = {
  level: 'primary',
  align: 'left'
};

exports.default = CellButton;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tappable = __webpack_require__(5);

var _Tappable2 = _interopRequireDefault(_Tappable);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _CellButton = __webpack_require__(24);

var _CellButton2 = _interopRequireDefault(_CellButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassName = (0, _getClassName2.default)('Button');

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      if (this.props.type === 'cell') {
        var _props = this.props,
            stretched = _props.stretched,
            size = _props.size,
            restProps = _objectWithoutProperties(_props, ['stretched', 'size']);

        return _react2.default.createElement(_CellButton2.default, restProps);
      } else {
        var _classnames;

        var _props2 = this.props,
            className = _props2.className,
            _size = _props2.size,
            level = _props2.level,
            _stretched = _props2.stretched,
            align = _props2.align,
            children = _props2.children,
            before = _props2.before,
            _restProps = _objectWithoutProperties(_props2, ['className', 'size', 'level', 'stretched', 'align', 'children', 'before']);

        return _react2.default.createElement(
          _Tappable2.default,
          _extends({}, _restProps, { className: (0, _classnames3.default)(baseClassName, className, (_classnames = {}, _defineProperty(_classnames, 'Button--sz-' + _size, true), _defineProperty(_classnames, 'Button--lvl-' + Button.mapOldLevel(level), true), _defineProperty(_classnames, 'Button--aln-' + (align || 'center'), true), _defineProperty(_classnames, 'Button--str', _stretched), _classnames)), stopPropagation: true }),
          _react2.default.createElement(
            'div',
            { className: 'Button__in' },
            before && _react2.default.createElement(
              'div',
              { className: 'Button__before' },
              before
            ),
            children && _react2.default.createElement(
              'div',
              { className: 'Button__content' },
              children
            )
          )
        );
      }
    }
  }], [{
    key: 'mapOldLevel',
    value: function mapOldLevel(level) {
      switch (level) {
        case '1':
          return 'primary';
        case '2':
          return 'secondary';
        case '3':
          return 'tertiary';
        case 'sell':
          return 'outline';
        case 'buy':
          return 'commerce';
        default:
          return level;
      }
    }
  }]);

  return Button;
}(_react2.default.Component);

Button.propTypes = {
  /**
   * Значения `1`, `2`, `3`, `sell`, `buy` устарели. Маппинг на новые значения находится в
   * статическом методе `Button.mapOldLevel(level)`. Старые значения будут удалены в
   * следующей мажлорной версии.
   */
  level: _propTypes2.default.oneOf(['primary', 'secondary', 'tertiary', 'outline', 'commerce', '1', '2', '3', 'sell', 'buy']),
  size: _propTypes2.default.oneOf(['m', 'l', 'xl']),
  /**
   * @deprecated Кнопки-ячейки `<Button type="cell" />` переехали в отдельный компонент: `<CellButton />`.
   * Свойство `type` будет удалено в следующей мажорной версии.
   */
  type: _propTypes2.default.oneOf(['default', 'cell']),
  align: _propTypes2.default.oneOf(['left', 'center', 'right']),
  stretched: _propTypes2.default.bool,
  before: _propTypes2.default.node,
  children: _propTypes2.default.node,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  component: _propTypes2.default.any
};
Button.defaultProps = {
  level: 'primary',
  type: 'default',
  component: 'button',
  size: 'm',
  stretched: false
};
exports.default = Button;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyframes;
function keyframes(name, obj) {
  if (!name || !obj) {
    return '';
  }

  var selectors = Object.keys(obj).map(function (key) {
    return key + ' {' + Object.keys(obj[key]).map(function (k) {
      return k + ':' + obj[key][k];
    }).join(';') + '}';
  }).join('');

  return '@-webkit-keyframes ' + name + ' {' + selectors + '} @keyframes ' + name + ' {' + selectors + '}';
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _platform = __webpack_require__(4);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _AndroidSpinner = __webpack_require__(79);

var _AndroidSpinner2 = _interopRequireDefault(_AndroidSpinner);

var _IosSpinner = __webpack_require__(78);

var _IosSpinner2 = _interopRequireDefault(_IosSpinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassNames = (0, _getClassName2.default)('Spinner');

var Spinner = function (_Component) {
  _inherits(Spinner, _Component);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          on = _props.on,
          progress = _props.progress,
          className = _props.className,
          restProps = _objectWithoutProperties(_props, ['on', 'progress', 'className']);

      var Component = osname === _platform.IOS ? _IosSpinner2.default : _AndroidSpinner2.default;
      var size = this.props.size || Component.defaultProps.size;

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, { className: (0, _classnames2.default)(baseClassNames, {
            'Spinner--on': on && progress === null
          }, className) }),
        _react2.default.createElement(
          'svg',
          {
            className: 'Spinner__self',
            style: { width: size, height: size },
            viewBox: '0 0 ' + size + ' ' + size,
            xmlns: 'http://www.w3.org/2000/svg'
          },
          _react2.default.createElement(Component, this.props)
        )
      );
    }
  }]);

  return Spinner;
}(_react.Component);

Spinner.propTypes = {
  style: _propTypes2.default.object,
  size: _propTypes2.default.number,
  /**
   * Толщина линии в Android версии
   */
  strokeWidth: _propTypes2.default.number,
  /**
   * @ignore
   */
  on: _propTypes2.default.bool,
  /**
   * @ignore
   */
  progress: _propTypes2.default.number,
  className: _propTypes2.default.string
};
Spinner.defaultProps = {
  strokeWidth: 4,
  on: true,
  progress: null
};
exports.default = Spinner;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _Tappable = __webpack_require__(5);

var _Tappable2 = _interopRequireDefault(_Tappable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassNames = (0, _getClassName2.default)('ActionSheetItem');

var ActionSheetItem = function ActionSheetItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      autoclose = _ref.autoclose,
      theme = _ref.theme,
      restProps = _objectWithoutProperties(_ref, ['className', 'children', 'autoclose', 'theme']);

  return _react2.default.createElement(
    _Tappable2.default,
    _extends({}, restProps, {
      className: (0, _classnames3.default)(baseClassNames, className, _defineProperty({}, 'ActionSheetItem--' + theme, true)),
      component: theme === 'cancel' ? 'span' : 'div'
    }),
    _react2.default.createElement(
      'span',
      { className: 'ActionSheetItem__in' },
      children
    )
  );
};

ActionSheetItem.propTypes = {
  theme: _propTypes2.default.oneOf(['default', 'destructive', 'cancel']),
  children: _propTypes2.default.node,
  style: _propTypes2.default.object,
  onClick: _propTypes2.default.func,
  className: _propTypes2.default.string,
  autoclose: _propTypes2.default.bool
};

ActionSheetItem.defaultProps = {
  theme: 'default'
};

exports.default = ActionSheetItem;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PopoutWrapper = __webpack_require__(10);

var _PopoutWrapper2 = _interopRequireDefault(_PopoutWrapper);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _platform = __webpack_require__(4);

var _transitionEvents = __webpack_require__(9);

var _transitionEvents2 = _interopRequireDefault(_transitionEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();

var baseClassNames = (0, _getClassName2.default)('ActionSheet');

var ActionSheet = function (_React$Component) {
  _inherits(ActionSheet, _React$Component);

  function ActionSheet() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ActionSheet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActionSheet.__proto__ || Object.getPrototypeOf(ActionSheet)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      closing: false
    }, _this.onClose = function () {
      _this.setState({ closing: true });
      _this.waitTransitionFinish(_this.props.onClose);
    }, _this.onItemClick = function (action, autoclose) {
      return function () {
        if (autoclose) {
          _this.setState({ closing: true });
          _this.waitTransitionFinish(function () {
            autoclose && _this.props.onClose();
            action && action();
          });
        } else {
          action && action();
        }
      };
    }, _this.getRef = function (el) {
      return _this.el = el;
    }, _this.stopPropagation = function (e) {
      return e.stopPropagation();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ActionSheet, [{
    key: 'waitTransitionFinish',
    value: function waitTransitionFinish(eventHandler) {
      if (_transitionEvents2.default.supported) {
        var eventName = _transitionEvents2.default.prefix ? _transitionEvents2.default.prefix + 'TransitionEnd' : 'transitionend';

        this.el.removeEventListener(eventName, eventHandler);
        this.el.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), osname === _platform.ANDROID ? 200 : 300);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          title = _props.title,
          text = _props.text,
          style = _props.style,
          restProps = _objectWithoutProperties(_props, ['children', 'className', 'title', 'text', 'style']);

      return _react2.default.createElement(
        _PopoutWrapper2.default,
        {
          closing: this.state.closing,
          v: osname === _platform.IOS ? 'bottom' : 'center',
          h: 'center',
          className: className,
          style: style,
          onClick: this.onClose
        },
        _react2.default.createElement(
          'div',
          _extends({}, restProps, { ref: this.getRef, onClick: this.stopPropagation, className: (0, _classnames2.default)(baseClassNames, {
              'ActionSheet--closing': this.state.closing
            }) }),
          osname === _platform.IOS && _react2.default.createElement(
            'header',
            { className: 'ActionSheet__header' },
            title && _react2.default.createElement(
              'div',
              { className: 'ActionSheet__title' },
              title
            ),
            text && _react2.default.createElement(
              'div',
              { className: 'ActionSheet__text' },
              text
            )
          ),
          _react2.default.Children.map(children, function (Child) {
            return Child && _react2.default.cloneElement(Child, {
              onClick: _this2.onItemClick(Child.props.onClick, Child.props.autoclose)
            });
          }, null)
        )
      );
    }
  }]);

  return ActionSheet;
}(_react2.default.Component);

ActionSheet.propTypes = {
  /**
   * iOS only
   */
  title: _propTypes2.default.node,
  /**
   * iOS only
   */
  text: _propTypes2.default.node,
  onClose: _propTypes2.default.func.isRequired,
  style: _propTypes2.default.object,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};
exports.default = ActionSheet;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tappable = __webpack_require__(5);

var _Tappable2 = _interopRequireDefault(_Tappable);

var _PopoutWrapper = __webpack_require__(10);

var _PopoutWrapper2 = _interopRequireDefault(_PopoutWrapper);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Alert');

var Alert = function (_Component) {
  _inherits(Alert, _Component);

  function Alert() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Alert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Alert.__proto__ || Object.getPrototypeOf(Alert)).call.apply(_ref, [this].concat(args))), _this), _this.onItemClick = function (item) {
      return function () {
        item.autoclose && _this.props.onClose();
        item.action && item.action();
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Alert, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          actions = _props.actions,
          actionsLayout = _props.actionsLayout,
          children = _props.children,
          className = _props.className,
          style = _props.style,
          restProps = _objectWithoutProperties(_props, ['actions', 'actionsLayout', 'children', 'className', 'style']);

      return _react2.default.createElement(
        _PopoutWrapper2.default,
        { className: className, style: style },
        _react2.default.createElement(
          'div',
          _extends({}, restProps, { className: (0, _classnames3.default)(baseClassNames, {
              'Alert--v': actionsLayout === 'vertical',
              'Alert--h': actionsLayout === 'horizontal'
            }) }),
          _react2.default.createElement(
            'div',
            { className: 'Alert__content' },
            children
          ),
          _react2.default.createElement(
            'footer',
            { className: 'Alert__footer' },
            actions.map(function (button, i) {
              return _react2.default.createElement(
                _Tappable2.default,
                {
                  component: 'button',
                  className: (0, _classnames3.default)('Alert__btn', _defineProperty({}, 'Alert__btn--' + button.style, true)),
                  onClick: _this2.onItemClick(button),
                  key: 'alert-action-' + i
                },
                _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: button.title } })
              );
            })
          )
        )
      );
    }
  }]);

  return Alert;
}(_react.Component);

Alert.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  actionsLayout: _propTypes2.default.oneOf(['vertical', 'horizontal']),
  actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string,
    action: _propTypes2.default.func,
    style: _propTypes2.default.oneOf(['primary', 'cancel', 'destructive', 'default'])
  })),
  onClose: _propTypes2.default.func
};
Alert.defaultProps = {
  actionsLayout: 'horizontal',
  actions: []
};
exports.default = Alert;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOffsetRect = getOffsetRect;
function getOffsetRect(elem) {
  var box = elem.getBoundingClientRect();
  var body = document.body;
  var doc = document.documentElement;
  var scrollTop = window.pageYOffset || doc.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || doc.scrollLeft || body.scrollLeft;
  var clientTop = doc.clientTop || body.clientTop || 0;
  var clientLeft = doc.clientLeft || body.clientLeft || 0;

  return {
    top: Math.round(box.top + scrollTop - clientTop),
    left: Math.round(box.left + scrollLeft - clientLeft),
    width: elem.offsetWidth,
    height: elem.offsetHeight
  };
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tappable = __webpack_require__(5);

var _Tappable2 = _interopRequireDefault(_Tappable);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassName = (0, _getClassName2.default)('HeaderButton');

var HeaderButton = function HeaderButton(_ref) {
  var className = _ref.className,
      children = _ref.children,
      primary = _ref.primary,
      restProps = _objectWithoutProperties(_ref, ['className', 'children', 'primary']);

  var isPrimitive = typeof children === 'string' || typeof children === 'number';
  var component = restProps.href ? 'a' : 'button';

  return _react2.default.createElement(
    _Tappable2.default,
    _extends({}, restProps, {
      component: component,
      activeEffectDelay: 200,
      className: (0, _classnames2.default)(baseClassName, className, { 'HeaderButton--primary': primary })
    }),
    isPrimitive ? _react2.default.createElement(
      'span',
      { className: 'HeaderButton__primitive' },
      children
    ) : children
  );
};

HeaderButton.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  primary: _propTypes2.default.bool,
  /**
   * Делает из кнопки ссылку
   */
  href: _propTypes2.default.string
};

HeaderButton.defaultProps = {
  primary: false
};

exports.default = HeaderButton;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  tabbarHeight: 48
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__34__;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseClassNames = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames6 = __webpack_require__(2);

var _classnames7 = _interopRequireDefault(_classnames6);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();

var baseClassNames = exports.baseClassNames = (0, _getClassName2.default)('PanelHeader');

var PanelHeader = function (_React$Component) {
  _inherits(PanelHeader, _React$Component);

  function PanelHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PanelHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PanelHeader.__proto__ || Object.getPrototypeOf(PanelHeader)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      ready: false,
      rightWidth: null,
      leftWidth: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PanelHeader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.leftNode = this.document.getElementById('header-left-' + this.context.panel);
      this.addonNode = this.document.getElementById('header-addon-' + this.context.panel);
      this.titleNode = this.document.getElementById('header-title-' + this.context.panel);
      this.rightNode = this.document.getElementById('header-right-' + this.context.panel);
      this.bgNode = this.document.getElementById('header-bg-' + this.context.panel);
      this.setState({ ready: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames, _classnames5;

      var _props = this.props,
          left = _props.left,
          addon = _props.addon,
          children = _props.children,
          right = _props.right,
          theme = _props.theme,
          noShadow = _props.noShadow;

      var isPrimitive = typeof children === 'string' || typeof children === 'number';

      return this.state.ready ? [_reactDom2.default.createPortal(_react2.default.createElement('div', { className: (0, _classnames7.default)('PanelHeader-bg', (_classnames = {}, _defineProperty(_classnames, 'PanelHeader-bg--' + theme, true), _defineProperty(_classnames, 'PanelHeader-bg--no-shadow', noShadow), _classnames)) }), this.bgNode), _reactDom2.default.createPortal(_react2.default.createElement(
        'div',
        { className: (0, _classnames7.default)('PanelHeader-left-in', _defineProperty({}, 'PanelHeader-left-in--' + theme, true)) },
        left
      ), this.leftNode), osname === _platform.IOS && _reactDom2.default.createPortal(_react2.default.createElement(
        'div',
        { className: (0, _classnames7.default)('PanelHeader-addon', _defineProperty({}, 'PanelHeader-addon--' + theme, true)) },
        addon
      ), this.addonNode), _reactDom2.default.createPortal(_react2.default.createElement(
        'div',
        { className: (0, _classnames7.default)('PanelHeader-content', _defineProperty({}, 'PanelHeader-content--' + theme, true)) },
        isPrimitive ? _react2.default.createElement(
          'span',
          null,
          children
        ) : children
      ), this.titleNode), _reactDom2.default.createPortal(_react2.default.createElement(
        'div',
        { className: (0, _classnames7.default)('PanelHeader-right', (_classnames5 = {}, _defineProperty(_classnames5, 'PanelHeader-right--' + theme, true), _defineProperty(_classnames5, 'PanelHeader-right--vkapps', this.webviewType === 'vkapps'), _classnames5)) },
        this.webviewType === 'internal' ? right : null
      ), this.rightNode)] : null;
    }
  }, {
    key: 'document',
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: 'webviewType',
    get: function get() {
      return this.context.webviewType || 'vkapps';
    }
  }]);

  return PanelHeader;
}(_react2.default.Component);

PanelHeader.propTypes = {
  left: _propTypes2.default.node,
  /**
   * iOS only
   */
  addon: _propTypes2.default.node,
  right: _propTypes2.default.node,
  children: _propTypes2.default.node,
  /**
   * Вместо `light` используйте `alternate`. Значение `light` устарело и будет удалено в следующей
   * мажорной версии.
   */
  theme: _propTypes2.default.oneOf(['light', 'alternate', 'brand']),
  noShadow: _propTypes2.default.bool
};
PanelHeader.defaultProps = {
  theme: 'brand',
  noShadow: false
};
PanelHeader.contextTypes = {
  panel: _propTypes2.default.string,
  document: _propTypes2.default.any,
  webviewType: _propTypes2.default.oneOf(['vkapps', 'internal'])
};
exports.default = PanelHeader;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Получает кординату по оси абсцисс из touch- или mouse-события
 *
 * @param {Object} e Бразуерное событие
 * @returns {Number} Координата взаимодействия по оси абсцисс
 */
var coordX = function coordX(e) {
  return e.clientX || e.touches && e.touches[0].clientX;
};

/**
 * Получает кординату по оси ординат из touch- или mouse-события
 *
 * @param {Object} e Бразуерное событие
 * @returns {Number} Координата взаимодействия по оси ординат
 */
var coordY = function coordY(e) {
  return e.clientY || e.touches && e.touches[0].clientY;
};

var isClient = typeof window !== 'undefined';
var touchEnabled = isClient && 'ontouchstart' in window;

/**
 * Возвращает массив поддерживаемых событий
 * Если браузер поддерживает pointer events или подключена handjs, вернет события указателя.
 * Если нет, используем события мыши
 *
 * @returns {Array} Массив с названиями событий
 */
function getSupportedEvents() {
  if (touchEnabled) {
    return ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
  }

  return ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
}

exports.getSupportedEvents = getSupportedEvents;
exports.coordX = coordX;
exports.coordY = coordY;
exports.touchEnabled = touchEnabled;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transitionEndEventName = exports.transitionStartEventName = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _animate = __webpack_require__(91);

var _animate2 = _interopRequireDefault(_animate);

var _transitionEvents = __webpack_require__(9);

var _transitionEvents2 = _interopRequireDefault(_transitionEvents);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _platform = __webpack_require__(4);

var _Touch = __webpack_require__(8);

var _Touch2 = _interopRequireDefault(_Touch);

var _removeObjectKeys = __webpack_require__(13);

var _removeObjectKeys2 = _interopRequireDefault(_removeObjectKeys);

var _PanelHeader = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassNames = (0, _getClassName2.default)('View');

var transitionStartEventName = exports.transitionStartEventName = 'VKUI:View:transition-start';
var transitionEndEventName = exports.transitionEndEventName = 'VKUI:View:transition-end';

var View = function (_Component) {
  _inherits(View, _Component);

  function View(props) {
    _classCallCheck(this, View);

    var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, props));

    _this.refsStore = {};

    _this.transitionEndHandler = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { manual: true };

      if (['animation-ios-next-forward', 'animation-ios-next-back', 'animation-ios-prev-forward', 'animation-ios-prev-back', 'animation-android-next-forward', 'animation-android-prev-back'].indexOf(e.animationName) > -1 || e.manual) {
        var activePanel = _this.props.activePanel;
        var isBack = _this.state.isBack;
        var prevPanel = _this.state.prevPanel;
        _this.document.dispatchEvent(new _this.window.CustomEvent(transitionEndEventName));
        _this.setState({
          prevPanel: null,
          nextPanel: null,
          visiblePanels: [activePanel],
          activePanel: activePanel,
          animated: false,
          isBack: undefined,
          scrolls: isBack ? (0, _removeObjectKeys2.default)(_this.state.scrolls, [prevPanel]) : _this.state.scrolls
        }, function () {
          isBack && this.window.scrollTo(0, this.state.scrolls[activePanel]);
          this.props.onTransition && this.props.onTransition();
        });
      }
    };

    _this.swipingBackTransitionEndHandler = function (e) {
      // indexOf because of vendor prefixes in old browsers
      if (e.propertyName.indexOf('transform') >= 0 && e.target.classList.contains('View__panel--swipe-back-next')) {
        _this.state.swipingBackFinish ? _this.onSwipeBackSuccess() : _this.onSwipeBackCancel();
      }
    };

    _this.onScrollTop = function () {
      var activePanel = _this.state.activePanel;


      if (activePanel) {
        var scrollTop = _this.document.body.scrollTop || _this.document.this.documentElement.scrollTop;

        if (scrollTop) {
          (0, _animate2.default)({
            duration: 200,
            timing: function timing(n) {
              return Math.sqrt(n);
            },
            draw: function draw(val) {
              _this.window.scrollTo(0, scrollTop - val * scrollTop);
            }
          });
        }
      }
    };

    _this.onMoveX = function (e) {
      if (osname === _platform.IOS && !_this.context.isWebView && (e.startX <= 70 || e.startX >= _this.window.innerWidth - 70) && !_this.state.browserSwipe) {
        _this.setState({ browserSwipe: true });
      }

      if (osname === _platform.IOS && _this.context.isWebView && _this.props.onSwipeBack) {
        if (_this.state.animated && e.startX <= 70) {
          return;
        }

        if (e.startX <= 70 && !_this.state.swipingBack && _this.props.history.length > 1) {
          _this.setState({
            swipingBack: true,
            swipebackStartX: e.startX,
            startT: e.startT,
            swipeBackPrevPanel: _this.state.activePanel,
            swipeBackNextPanel: _this.props.history.slice(-2)[0],
            scrolls: Object.assign({}, _this.state.scrolls, _defineProperty({}, _this.state.activePanel, _this.window.pageYOffset))
          });
        }
        if (_this.state.swipingBack) {
          var swipeBackShift = void 0;
          if (e.shiftX < 0) {
            swipeBackShift = 0;
          } else if (e.shiftX > _this.window.innerWidth - _this.state.swipebackStartX) {
            swipeBackShift = _this.window.innerWidth;
          } else {
            swipeBackShift = e.shiftX;
          }
          _this.setState({ swipeBackShift: swipeBackShift });
        }
      }
    };

    _this.onEnd = function () {
      if (_this.state.swipingBack) {
        var speed = _this.state.swipeBackShift / (new Date() - _this.state.startT) * 1000;
        if (_this.state.swipeBackShift === 0) {
          _this.onSwipeBackCancel();
        } else if (_this.state.swipeBackShift >= _this.window.innerWidth) {
          _this.onSwipeBackSuccess();
        } else {
          _this.setState({ swipingBackFinish: speed > 250 || _this.state.swipebackStartX + _this.state.swipeBackShift > _this.window.innerWidth / 2 });
        }
      }
    };

    _this.getRef = function (c) {
      if (c && c.container && c.id) {
        var el = c;

        while (el.container) {
          el = el.container;
        }

        _this.refsStore[c.id] = el;
      }
    };

    _this.state = {
      scrolls: {},

      visiblePanels: [props.activePanel],
      activePanel: props.activePanel,
      isBack: undefined,
      prevPanel: null,
      nextPanel: null,

      swipingBack: false,
      swipebackStartX: 0,
      swipeBackShift: 0,
      swipeBackNextPanel: null,
      swipeBackPrevPanel: null,
      swipingBackFinish: null,

      browserSwipe: false
    };
    return _this;
  }

  _createClass(View, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      nextProps.popout && !this.props.popout && this.blurActiveElement();

      // Нужен переход
      if (this.props.activePanel !== nextProps.activePanel && !this.state.swipingBack && !this.state.browserSwipe) {
        var firstLayer = this.panels.find(function (panel) {
          return panel.props.id === _this2.props.activePanel || panel.props.id === nextProps.activePanel;
        });

        var isBack = firstLayer && firstLayer.props.id === nextProps.activePanel;

        this.blurActiveElement();

        this.setState({
          visiblePanels: [this.props.activePanel, nextProps.activePanel],
          prevPanel: this.props.activePanel,
          nextPanel: nextProps.activePanel,
          activePanel: null,
          animated: true,
          scrolls: Object.assign({}, this.state.scrolls, _defineProperty({}, this.props.activePanel, this.window.pageYOffset)),
          isBack: isBack
        });
      }

      // Закончилась анимация свайпа назад
      if (this.props.activePanel !== nextProps.activePanel && this.state.swipingBack) {
        this.setState({
          swipeBackPrevPanel: null,
          swipeBackNextPanel: null,
          swipingBack: false,
          swipingBackFinish: null,
          swipebackStartX: 0,
          swipeBackShift: 0,
          activePanel: nextProps.activePanel,
          visiblePanels: [nextProps.activePanel],
          scrolls: (0, _removeObjectKeys2.default)(this.state.scrolls, [this.state.swipeBackPrevPanel])
        }, function () {
          _this2.document.dispatchEvent(new _this2.window.CustomEvent(transitionEndEventName));
          window.scrollTo(0, _this2.state.scrolls[_this2.state.activePanel]);
          _this2.props.onTransition && _this2.props.onTransition();
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var scrolls = this.state.scrolls;

      // Начался переход
      if (!prevState.animated && this.state.animated) {
        this.document.dispatchEvent(new this.window.CustomEvent(transitionStartEventName, { detail: { scrolls: scrolls } }));
        var nextPanelElement = this.pickPanel(this.state.nextPanel);
        var prevPanelElement = this.pickPanel(this.state.prevPanel);

        prevPanelElement.scrollTop = scrolls[this.state.prevPanel];
        if (this.state.isBack) {
          nextPanelElement.scrollTop = scrolls[this.state.nextPanel];
        }
        this.waitAnimationFinish(this.pickPanel(this.state.isBack ? this.state.prevPanel : this.state.nextPanel), this.transitionEndHandler);
      }

      // Начался свайп назад
      if (!prevState.swipingBack && this.state.swipingBack) {
        this.document.dispatchEvent(new this.window.CustomEvent(transitionStartEventName, { detail: { scrolls: scrolls } }));
        this.props.onSwipeBackStart && this.props.onSwipeBackStart();
        var _nextPanelElement = this.pickPanel(this.state.swipeBackNextPanel);
        var _prevPanelElement = this.pickPanel(this.state.swipeBackPrevPanel);

        _nextPanelElement.scrollTop = scrolls[this.state.swipeBackNextPanel];
        _prevPanelElement.scrollTop = scrolls[this.state.swipeBackPrevPanel];
      }

      // Началась анимация завершения свайпа назад.
      if (prevState.swipingBackFinish === null && this.state.swipingBackFinish !== null) {
        this.waitTransitionFinish(this.pickPanel(this.state.swipeBackNextPanel), this.swipingBackTransitionEndHandler);
      }

      // Если свайп назад отменился (когда пользователь недостаточно сильно свайпнул)
      if (prevState.swipingBackFinish === false && this.state.swipingBackFinish === null) {
        this.window.scrollTo(0, scrolls[this.state.activePanel]);
      }

      // Закончился Safari свайп
      if (prevProps.activePanel !== this.props.activePanel && this.state.browserSwipe) {
        this.setState({
          browserSwipe: false,
          nextPanel: null,
          prevPanel: null,
          animated: false,
          visiblePanels: [this.props.activePanel],
          activePanel: this.props.activePanel
        });
      }
    }
  }, {
    key: 'waitTransitionFinish',
    value: function waitTransitionFinish(elem, eventHandler) {
      if (_transitionEvents2.default.supported) {
        var eventName = _transitionEvents2.default.prefix ? _transitionEvents2.default.prefix + 'TransitionEnd' : 'transitionend';

        elem.removeEventListener(eventName, eventHandler);
        elem.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), osname === _platform.ANDROID ? 300 : 600);
      }
    }
  }, {
    key: 'waitAnimationFinish',
    value: function waitAnimationFinish(elem, eventHandler) {
      if (_transitionEvents2.default.supported) {
        var eventName = _transitionEvents2.default.prefix ? _transitionEvents2.default.prefix + 'AnimationEnd' : 'animationend';

        elem.removeEventListener(eventName, eventHandler);
        elem.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), osname === _platform.ANDROID ? 300 : 600);
      }
    }
  }, {
    key: 'blurActiveElement',
    value: function blurActiveElement() {
      if (typeof this.window !== 'undefined' && this.document.activeElement) {
        this.document.activeElement.blur();
      }
    }
  }, {
    key: 'pickPanel',
    value: function pickPanel(id) {
      var elem = this.document.getElementById(id);

      if (!elem) {
        console.warn('Element #' + id + ' not found');
      }

      return elem && elem.parentNode.parentNode;
    }
  }, {
    key: 'onSwipeBackSuccess',
    value: function onSwipeBackSuccess() {
      this.props.onSwipeBack && this.props.onSwipeBack();
    }
  }, {
    key: 'onSwipeBackCancel',
    value: function onSwipeBackCancel() {
      var _this3 = this;

      this.setState({
        swipeBackPrevPanel: null,
        swipeBackNextPanel: null,
        swipingBack: false,
        swipingBackFinish: null,
        swipebackStartX: 0,
        swipeBackShift: 0
      }, function () {
        _this3.document.dispatchEvent(new _this3.window.CustomEvent(transitionEndEventName));
      });
    }
  }, {
    key: 'calcPanelSwipeStyles',
    value: function calcPanelSwipeStyles(panelId) {
      var isPrev = panelId === this.state.swipeBackPrevPanel;
      var isNext = panelId === this.state.swipeBackNextPanel;

      if (!isPrev && !isNext || this.state.swipingBackFinish !== null) {
        return {};
      }

      var prevPanelTranslate = this.state.swipeBackShift + 'px';
      var nextPanelTranslate = -50 + this.state.swipeBackShift * 100 / this.window.innerWidth / 2 + '%';
      var prevPanelShadow = 0.3 * (this.window.innerWidth - this.state.swipeBackShift) / this.window.innerWidth;

      if (this.state.swipingBackFinish !== null) {
        return isPrev ? { boxShadow: '-2px 0 12px rgba(0, 0, 0, ' + prevPanelShadow + ')' } : {};
      }

      if (isNext) {
        return {
          transform: 'translate3d(' + nextPanelTranslate + ', 0, 0)',
          WebkitTransform: 'translate3d(' + nextPanelTranslate + ', 0, 0)'
        };
      }
      if (isPrev) {
        return {
          transform: 'translate3d(' + prevPanelTranslate + ', 0, 0)',
          WebkitTransform: 'translate3d(' + prevPanelTranslate + ', 0, 0)',
          boxShadow: '-2px 0 12px rgba(0, 0, 0, ' + prevPanelShadow + ')'
        };
      }

      return {};
    }
  }, {
    key: 'calcHeaderSwipeStyles',
    value: function calcHeaderSwipeStyles(panelId) {
      var isPrev = panelId === this.state.swipeBackPrevPanel;
      var isNext = panelId === this.state.swipeBackNextPanel;

      if (!isPrev && !isNext || this.state.swipingBackFinish !== null) {
        return {
          title: {},
          bg: {},
          left: {},
          addon: {},
          right: {}
        };
      }

      var opacity = this.state.swipeBackShift / this.window.innerWidth;
      var titleTransform = this.state.swipeBackShift / this.window.innerWidth * 30;
      var leftTransform = this.state.swipeBackShift / this.window.innerWidth * 30;

      if (isNext) {
        return {
          title: {
            transform: 'translate3d(' + (-30 + titleTransform) + 'vw, 0, 0)',
            WebkitTransform: 'translate3d(' + (-30 + titleTransform) + 'vw, 0, 0)',
            opacity: opacity
          },
          left: { opacity: opacity },
          addon: {
            opacity: 1,
            transform: 'translate3d(' + (-30 + leftTransform) + 'vw, 0, 0)',
            WebkitTransform: 'translate3d(' + (-30 + leftTransform) + 'vw, 0, 0)'
          },
          right: { opacity: opacity }
        };
      }
      if (isPrev) {
        return {
          title: {
            transform: 'translate3d(' + titleTransform + 'vw, 0, 0)',
            WebkitTransform: 'translate3d(' + titleTransform + 'vw, 0, 0)',
            opacity: 1 - opacity
          },
          bg: { opacity: 1 - opacity },
          left: { opacity: 1 - opacity },
          addon: {
            transform: 'translate3d(' + leftTransform + 'vw, 0, 0)',
            WebkitTransform: 'translate3d(' + leftTransform + 'vw, 0, 0)',
            opacity: 1 - opacity
          }
        };
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref) {
      var inRoot = _ref.inRoot,
          isNext = _ref.isNext,
          isPrev = _ref.isPrev;

      return inRoot ? !isNext && !isPrev : true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          style = _props.style,
          popout = _props.popout,
          header = _props.header;
      var _state = this.state,
          prevPanel = _state.prevPanel,
          nextPanel = _state.nextPanel,
          activePanel = _state.activePanel,
          swipeBackPrevPanel = _state.swipeBackPrevPanel,
          swipeBackNextPanel = _state.swipeBackNextPanel;

      var hasPopout = !!popout;
      var panels = this.panels.filter(function (panel) {
        return _this4.state.visiblePanels.indexOf(panel.props.id) > -1 || panel.props.id === _this4.state.swipeBackPrevPanel || panel.props.id === _this4.state.swipeBackNextPanel;
      });

      var modifiers = {
        'View--header': header,
        'View--animated': this.state.animated,
        'View--swiping-back': this.state.swipingBack
      };

      return _react2.default.createElement(
        _Touch2.default,
        {
          component: 'section',
          className: (0, _classnames2.default)(baseClassNames, modifiers),
          style: style,
          onMoveX: this.onMoveX,
          onEnd: this.onEnd
        },
        header && _react2.default.createElement(
          'div',
          { className: 'View__header' },
          osname === _platform.IOS && _react2.default.createElement('div', { className: 'View__header-scrolltop', onClick: this.onScrollTop }),
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(_PanelHeader.baseClassNames) },
            panels.map(function (panel) {
              return _react2.default.createElement(
                'div',
                {
                  className: (0, _classnames2.default)('PanelHeader__in', {
                    'PanelHeader__in--active': panel.props.id === activePanel,
                    'PanelHeader__in--prev': panel.props.id === prevPanel,
                    'PanelHeader__in--next': panel.props.id === nextPanel,
                    'PanelHeader__in--swipe-back-prev': panel.props.id === _this4.state.swipeBackPrevPanel,
                    'PanelHeader__in--swipe-back-next': panel.props.id === _this4.state.swipeBackNextPanel,
                    'PanelHeader__in--swipe-back-success': _this4.state.swipingBackFinish === true,
                    'PanelHeader__in--swipe-back-failed': _this4.state.swipingBackFinish === false
                  }),
                  key: panel.props.id
                },
                _react2.default.createElement('div', {
                  className: 'PanelHeader__bg',
                  key: panel.props.id,
                  id: 'header-bg-' + panel.props.id,
                  style: _this4.calcHeaderSwipeStyles(panel.props.id).bg
                }),
                _react2.default.createElement(
                  'div',
                  { className: 'PanelHeader__container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'PanelHeader__left' },
                    _react2.default.createElement('div', {
                      className: 'PanelHeader__left-in',
                      id: 'header-left-' + panel.props.id,
                      style: _this4.calcHeaderSwipeStyles(panel.props.id).left
                    }),
                    osname === _platform.IOS && _react2.default.createElement('div', {
                      className: 'PanelHeader__addon',
                      id: 'header-addon-' + panel.props.id,
                      style: _this4.calcHeaderSwipeStyles(panel.props.id).icon
                    })
                  ),
                  _react2.default.createElement('div', {
                    className: 'PanelHeader__content',
                    style: _this4.calcHeaderSwipeStyles(panel.props.id).title,
                    id: 'header-title-' + panel.props.id
                  }),
                  _react2.default.createElement('div', {
                    className: 'PanelHeader__right',
                    id: 'header-right-' + panel.props.id,
                    style: _this4.calcHeaderSwipeStyles(panel.props.id).right
                  })
                )
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'View__panels' },
          panels.map(function (panel) {
            return _react2.default.createElement(
              'div',
              {
                className: (0, _classnames2.default)('View__panel', {
                  'View__panel--active': panel.props.id === activePanel,
                  'View__panel--prev': panel.props.id === prevPanel,
                  'View__panel--next': panel.props.id === nextPanel,
                  'View__panel--swipe-back-prev': panel.props.id === _this4.state.swipeBackPrevPanel,
                  'View__panel--swipe-back-next': panel.props.id === _this4.state.swipeBackNextPanel,
                  'View__panel--swipe-back-success': _this4.state.swipingBackFinish === true,
                  'View__panel--swipe-back-failed': _this4.state.swipingBackFinish === false
                }),
                style: _this4.calcPanelSwipeStyles(panel.props.id),
                key: panel.props.id
              },
              _react2.default.createElement(
                'div',
                { className: 'View__panel-in' },
                _react2.default.cloneElement(panel, {
                  isNext: panel.props.id === nextPanel || panel.props.id === swipeBackNextPanel,
                  isPrev: panel.props.id === prevPanel || panel.props.id === swipeBackPrevPanel
                })
              )
            );
          })
        ),
        hasPopout && _react2.default.createElement(
          'div',
          { className: 'View__popout' },
          popout
        )
      );
    }
  }, {
    key: 'document',
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: 'window',
    get: function get() {
      return this.context.window || window;
    }
  }, {
    key: 'panels',
    get: function get() {
      return [].concat(this.props.children);
    }
  }]);

  return View;
}(_react.Component);

View.propTypes = {
  style: _propTypes2.default.object,
  activePanel: _propTypes2.default.string,
  header: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
  children: _propTypes2.default.node,
  popout: _propTypes2.default.node,
  onTransition: _propTypes2.default.func,
  onSwipeBack: _propTypes2.default.func,
  onSwipeBackStart: _propTypes2.default.func,
  history: _propTypes2.default.arrayOf(_propTypes2.default.string),

  /**
   * @ignore
   */
  isNext: _propTypes2.default.bool,
  /**
   * @ignore
   */
  isPrev: _propTypes2.default.bool,
  /**
   * @ignore
   */
  inRoot: _propTypes2.default.bool
};
View.defaultProps = {
  style: {},
  children: null,
  popout: null,
  header: true,
  history: []
};
View.contextTypes = {
  isWebView: _propTypes2.default.bool,
  window: _propTypes2.default.any,
  document: _propTypes2.default.any
};
exports.default = View;

/***/ }),
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// CustomEvent
if (window && !window.CustomEvent) {
  var CustomEvent = function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
}

// Element.prototype.closest
if (window) {
  window.Element.prototype.closest = window.Element.prototype.closest || function (css) {
    var node = this;
    while (node) {
      if (node.matches(css)) return node;else node = node.parentElement;
    }
    return null;
  };
}

// Array.prototype.find
Array.prototype.find = Array.prototype.find || function (callback) {
  if (this === null) {
    throw new TypeError('Array.prototype.find called on null or undefined');
  } else if (typeof callback !== 'function') {
    throw new TypeError('callback must be a function');
  }

  var list = Object(this);
  var length = list.length >>> 0;
  var thisArg = arguments[1];

  for (var i = 0; i < length; i++) {
    var element = list[i];
    if (callback.call(thisArg, element, i, list)) {
      return element;
    }
  }
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @param {object} palette палитра цветов
 * @param {string} colorId идентификатор цвета из палитры
 * @return {string} color цвет в браузерном представлении
 */
function resolveColor(palette, colorId) {
  var color = palette[colorId];

  if (color.indexOf('#') === 0 && color.length === 9) {
    // ahex
    return ahex2rgba(color.replace('#', ''));
  }
  return color;
}

/**
 * @param {string} ahex цвет в формате ahex: #00ffffff
 * @return {string} цвет в формате rgba
 */
function ahex2rgba(ahex) {
  var opacity = parseInt(ahex.slice(0, 2), 16) / 255;
  var colorHex = ahex.slice(2);
  return opacify(colorHex, opacity);
}

/**
 * @param hex цвет в формате hex: #ffffff
 * @param opacity прозрачность в диапазоне [0, 1]
 * @return {string} цвет в формате rgba
 */
function opacify(hex, opacity) {
  return 'rgba(' + parseInt(hex.slice(0, 2), 16) + ', ' + parseInt(hex.slice(2, 4), 16) + ', ' + parseInt(hex.slice(4), 16) + ', ' + opacity.toFixed(2) + ')';
}

module.exports = {
  resolveColor: resolveColor
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  white_alpha8: 'rgba(255, 255, 255, .08)',
  black_blue24_alpha8: 'rgba(0, 29, 61, .08)',
  light_android_active_color: '#f0f1f3'
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */

module.exports = {
  azure_100_muted: "#67A5EB",
  azure_300: "#3F8AE0",
  azure_A400: "#4986CC",
  black: "#000000",
  black_alpha12: "#1f000000",
  black_alpha35: "#59000000",
  black_alpha6: "#0f000000",
  black_alpha60: "#99000000",
  black_alpha75: "#BF000000",
  black_blue10: "#000C1A",
  black_blue24: "#001D3D",
  black_blue24_alpha24: "#14001C3D",
  black_blue30_alpha66: "#4000244D",
  blue_200: "#5C9CE6",
  blue_200_muted: "#74A2D6",
  blue_300: "#528bcc",
  blue_400: "#5181B8",
  blue_600: "#45678F",
  blue_A300: "#4772A6",
  blue_A400: "#346CAD",
  blue_A500: "#3C6A9E",
  blue_A800: "#28436E",
  blue_facebook: "#4367A3",
  blue_overlight_1_alpha32: "#52ADD3FF",
  blue_overlight_2_alpha80: "#CCC2DEFF",
  blue_overlight_3: "#92B2D6",
  brown_gold: "#9E8F72",
  brown_light: "#C2B79F",
  clear: "#00000000",
  gray_100: "#E1E3E6",
  gray_20: "#F9F9F9",
  gray_200: "#C4C8CC",
  gray_300: "#aaaeb3",
  gray_40: "#F2F3F5",
  gray_400: "#909499",
  gray_450: "#7F8285",
  gray_50: "#ebedf0",
  gray_500: "#76787A",
  gray_600: "#5d5f61",
  gray_700: "#454647",
  gray_800: "#2c2d2e",
  gray_850: "#232324",
  gray_900: "#19191A",
  gray_950: "#141414",
  gray_A250: "#d7d8d9",
  gray_A40: "#F5F5F5",
  gray_alpha: "#b3d7dbe0",
  green: "#4BB34B",
  light_gray_2: "#A9B0B8",
  orange: "#FFA000",
  orange_fire: "#F05C44",
  pink: "#E6457A",
  pink_alpha: "#2e1e000c",
  pink_light: "#FAEBEB",
  red: "#E64646",
  red_error: "#EB4250",
  red_light: "#FE5171",
  red_nice: "#ff3347",
  sky_300: "#71AAEB",
  steel_gray_200: "#AEB7C2",
  steel_gray_300: "#99a2ad",
  steel_gray_400: "#818C99",
  steel_gray_500: "#6D7885",
  turquoise: "#63B9BA",
  violet: "#792EC0",
  violet_dark: "#1F1B2C",
  violet_light: "#928DAB",
  violet_muted: "#4B4D61",
  white: "#FFFFFF",
  white_alpha12: "#1fFFFFFF",
  white_alpha60: "#99ffffff",
  white_blue20: "#CCE4FF",
  white_blue32: "#ADD3FF",
  yellow: "#ffc107",
  yellow_light: "#FFD54F"
};

/* eslint-enable */

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _palette = __webpack_require__(43);

var _palette2 = _interopRequireDefault(_palette);

var _custom_palette = __webpack_require__(42);

var _custom_palette2 = _interopRequireDefault(_custom_palette);

var _colors = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var palette = _extends({}, _palette2.default, _custom_palette2.default);

var colors = Object.keys(palette).reduce(function (acc, colorId) {
  acc[colorId] = (0, _colors.resolveColor)(palette, colorId);
  return acc;
}, {});

exports.default = colors;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _querystring = __webpack_require__(14);

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOptions = {
  method: 'GET',
  data: null
};

function getXMLHttpRequest() {
  if (typeof XMLHttpRequest !== 'undefined') {
    // eslint-disable-next-line
    return new XMLHttpRequest();
  }
}

function makeRequest(url, options) {
  var isCanceled = void 0;

  var error = new Error('Request was aborted');
  var request = getXMLHttpRequest();
  var opts = Object.assign({}, defaultOptions, options);

  if (opts.data && opts.method.toLowerCase() === 'get') {
    url += '?' + _querystring2.default.create(opts.data);
  }

  var requestPromise = new Promise(function (resolve, reject) {
    if (!request) {
      reject(new Error('XMLHttpRequest not supported'));
    }

    if (opts.timeout) {
      request.timeout = opts.timeout;
    }

    request.open(opts.method, url, true);

    if (opts.headers) {
      Object.keys(opts.headers).forEach(function (key) {
        request.setRequestHeader(key, opts.headers[key]);
      });
    }

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(request.responseText);
        } else {
          reject(new Error(request.status));
        }
      }
    };

    request.ontimeout = function () {
      reject(new Error('XMLHttpRequest timeout expires'));
    };

    request.send(opts.data);
  });

  return {

    promise: new Promise(function (resolve, reject) {
      requestPromise.then(function (res) {
        return isCanceled ? reject(error) : resolve(res);
      }).catch(function (e) {
        return isCanceled ? console.log(error) || reject(error) : reject(e);
      });
    }),

    abort: function abort() {
      isCanceled = true;
      if (request) {
        request.abort();
      }
    }
  };
}

exports.default = function (url, options) {
  return makeRequest(url, options);
};

/***/ }),
/* 46 */
/***/ (function(module) {

module.exports = {"name":"@vkontakte/vkui","version":"2.12.3","main":"dist/vkui.js","license":"MIT","description":"VKUI library","repository":"https://github.com/VKCOM/VKUI","homepage":"https://vkcom.github.io/vkui-styleguide","defaultSchemeId":"client_light","devDependencies":{"jest":"^23.1.0","loader-utils":"^1.1.0","mini-css-extract-plugin":"^0.4.0","mini-html-webpack-plugin":"^0.2.3","pre-commit":"^1.2.2","prop-types":"^15.6.1","react":"^16.4.0","react-docgen":"^2.20.0","react-dom":"^16.4.0","react-frame-component":"^3.0.0","react-styleguidist":"^7.0.17","schema-utils":"^0.4.3","webpack":"^4.12.0","webpack-bundle-analyzer":"^2.9.2","webpack-cli":"^3.0.3","webpack-merge":"^4.0.0","webpack-stats-plugin":"^0.1.4"},"peerDependencies":{"react-dom":"^16.4.0","react":"^16.4.0","prop-types":"^15.6.1"},"dependencies":{"@vkontakte/icons":"^1.2.0","postcss":"^7.0.2","postcss-custom-properties":"^5.0.2","postcss-import":"^9.1.0","postcss-loader":"^2.1.5","autoprefixer":"^7.2.3","babel-core":"^6.23.1","babel-eslint":"^8.2.3","babel-loader":"^7.1.3","babel-plugin-transform-class-properties":"^6.23.0","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-preset-env":"^1.7.0","babel-preset-react":"^6.23.0","css-loader":"^0.27.1","eslint":"^4.19.1","eslint-config-semistandard":"^7.0.0","eslint-config-standard":"^6.0.1","eslint-plugin-promise":"^3.3.0","eslint-plugin-react":"^7.9.1","eslint-plugin-standard":"^2.0.0","style-loader":"^0.13.2","stylelint":"^9.3.0","stylelint-config-standard":"^16.0.0"},"scripts":{"prepublishOnly":"npm run clear && npm run build","styleguide":"NODE_ENV=development styleguidist server --config=styleguide/config.js","dev":"NODE_ENV=development webpack --watch","styleguide:build":"NODE_ENV=production styleguidist build --config=styleguide/config.js","build":"NODE_ENV=production webpack","clear":"rm -rf dist/*","test":"eslint . && stylelint './src/**/*.css' && jest"},"pre-commit":["test"]};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _webview = __webpack_require__(15);

var _package = __webpack_require__(46);

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfigProvider = function (_React$Component) {
  _inherits(ConfigProvider, _React$Component);

  function ConfigProvider(props) {
    _classCallCheck(this, ConfigProvider);

    var _this = _possibleConstructorReturn(this, (ConfigProvider.__proto__ || Object.getPrototypeOf(ConfigProvider)).call(this, props));

    _this.state = {
      bottomInset: props.insets.bottom > 100 ? 0 : props.insets.bottom
    };
    return _this;
  }

  _createClass(ConfigProvider, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.document.body.setAttribute('scheme', this.props.scheme);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.scheme !== this.props.scheme) {
        this.document.body.setAttribute('scheme', nextProps.scheme);
      }
      if (nextProps.insets.bottom !== this.props.insets.bottom) {
        this.setState({ bottomInset: nextProps.insets.bottom > 100 ? this.props.insets.bottom : nextProps.insets.bottom });
      }
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        insets: _extends({}, this.props.insets, { bottom: this.state.bottomInset }),
        isWebView: this.props.isWebView,
        webviewType: this.props.webviewType,
        scheme: this.props.scheme
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }, {
    key: 'document',
    get: function get() {
      return this.context.document || window.document;
    }
  }]);

  return ConfigProvider;
}(_react2.default.Component);

ConfigProvider.childContextTypes = {
  insets: _propTypes2.default.shape({
    top: _propTypes2.default.number,
    right: _propTypes2.default.number,
    bottom: _propTypes2.default.number,
    left: _propTypes2.default.number
  }),
  isWebView: _propTypes2.default.bool,
  scheme: _propTypes2.default.string,
  webviewType: _propTypes2.default.oneOf(['vkapps', 'internal'])
};
ConfigProvider.propTypes = {
  insets: _propTypes2.default.shape({
    top: _propTypes2.default.number,
    right: _propTypes2.default.number,
    bottom: _propTypes2.default.number,
    left: _propTypes2.default.number
  }),
  scheme: _propTypes2.default.string,
  isWebView: _propTypes2.default.bool,
  webviewType: _propTypes2.default.oneOf(['vkapps', 'internal']),
  children: _propTypes2.default.node
};
ConfigProvider.defaultProps = {
  webviewType: 'internal',
  isWebView: _webview.isWebView,
  scheme: _package2.default.defaultSchemeId,
  insets: {}
};
ConfigProvider.contextTypes = {
  document: _propTypes2.default.object
};
exports.default = ConfigProvider;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _dropdown = __webpack_require__(16);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassName = (0, _getClassName2.default)('Select');

var SelectMimicry = function (_Component) {
  _inherits(SelectMimicry, _Component);

  function SelectMimicry() {
    _classCallCheck(this, SelectMimicry);

    return _possibleConstructorReturn(this, (SelectMimicry.__proto__ || Object.getPrototypeOf(SelectMimicry)).apply(this, arguments));
  }

  _createClass(SelectMimicry, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          placeholder = _props.placeholder,
          children = _props.children,
          alignment = _props.alignment,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['className', 'placeholder', 'children', 'alignment', 'getRootRef']);

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, {
          className: (0, _classnames3.default)(baseClassName, _defineProperty({
            'Select--not-selected': !children,
            'Select--mimicry': true
          }, 'Select--align-' + alignment, alignment), className),
          ref: getRootRef
        }),
        _react2.default.createElement(
          'div',
          { className: 'Select__container' },
          _react2.default.createElement(
            'div',
            { className: 'Select__title' },
            children || placeholder
          ),
          _react2.default.createElement(_dropdown2.default, null)
        ),
        osname === _platform.ANDROID && _react2.default.createElement('div', { className: 'Select-underline' })
      );
    }
  }]);

  return SelectMimicry;
}(_react.Component);

SelectMimicry.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  tabIndex: _propTypes2.default.number,
  placeholder: _propTypes2.default.string,
  alignment: _propTypes2.default.oneOf(['left', 'center', 'top']),
  getRootRef: _propTypes2.default.func
};
SelectMimicry.defaultProps = {
  tabIndex: 0,
  alignment: 'left'
};
exports.default = SelectMimicry;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _dropdown = __webpack_require__(16);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassName = (0, _getClassName2.default)('Select');

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.onChange = function (e) {
      _this.setTitle();
      if (!_this.isControlledOutside) {
        _this.setState({ value: e.target.value });
      }
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.setTitle = function () {
      var selectedOption = _this.selectEl.options[_this.selectEl.selectedIndex];
      selectedOption && _this.setState({
        title: selectedOption.text,
        notSelected: selectedOption.value === '' && _this.props.hasOwnProperty('placeholder')
      });
    };

    _this.getRef = function (el) {
      _this.selectEl = el;
      _this.props.getRef && _this.props.getRef(el);
    };

    var state = {
      title: '',
      notSelected: false
    };
    if (typeof props.value !== 'undefined') {
      _this.isControlledOutside = true;
    } else {
      state.value = props.defaultValue || '';
    }
    _this.state = state;
    return _this;
  }

  _createClass(Select, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.value !== this.props.value || prevProps.children !== this.props.children) {
        this.setTitle();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setTitle();
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          style = _props.style,
          label = _props.label,
          value = _props.value,
          defaultValue = _props.defaultValue,
          onChange = _props.onChange,
          alignment = _props.alignment,
          placeholder = _props.placeholder,
          children = _props.children,
          className = _props.className,
          getRef = _props.getRef,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['style', 'label', 'value', 'defaultValue', 'onChange', 'alignment', 'placeholder', 'children', 'className', 'getRef', 'getRootRef']);

      return _react2.default.createElement(
        'label',
        {
          className: (0, _classnames3.default)(baseClassName, (_classnames = {}, _defineProperty(_classnames, 'Select--not-selected', this.state.notSelected), _defineProperty(_classnames, 'Select--align-' + alignment, alignment), _classnames), className),
          style: style,
          ref: getRootRef
        },
        _react2.default.createElement(
          'select',
          _extends({
            onChange: this.onChange,
            value: this.value,
            ref: this.getRef
          }, restProps),
          placeholder && _react2.default.createElement(
            'option',
            { value: '' },
            placeholder
          ),
          children
        ),
        _react2.default.createElement(
          'div',
          { className: 'Select__container' },
          _react2.default.createElement(
            'div',
            { className: 'Select__title' },
            this.state.title
          ),
          _react2.default.createElement(_dropdown2.default, null)
        ),
        osname === _platform.ANDROID && _react2.default.createElement('div', { className: 'Select-underline' })
      );
    }
  }, {
    key: 'value',
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return Select;
}(_react.Component);

Select.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  name: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  value: _propTypes2.default.any,
  defaultValue: _propTypes2.default.any,
  children: _propTypes2.default.node,
  placeholder: _propTypes2.default.string,
  getRef: _propTypes2.default.func,
  getRootRef: _propTypes2.default.func,
  alignment: _propTypes2.default.oneOf(['left', 'center', 'top'])
};
Select.defaultProps = {
  alignment: 'left'
};
exports.default = Select;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tappable = __webpack_require__(5);

var _Tappable2 = _interopRequireDefault(_Tappable);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _platform = __webpack_require__(4);

var _done = __webpack_require__(22);

var _done2 = _interopRequireDefault(_done);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var osname = (0, _platform.platform)();
var baseClassName = (0, _getClassName2.default)('Checkbox');

var Checkbox = function Checkbox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ['children', 'className', 'style', 'getRootRef']);

  return _react2.default.createElement(
    _Tappable2.default,
    {
      component: 'label',
      className: (0, _classnames2.default)(baseClassName, className),
      style: style,
      disabled: restProps.disabled,
      activeEffectDelay: osname === _platform.IOS ? 100 : _Tappable.ACTIVE_EFFECT_DELAY,
      getRootRef: getRootRef
    },
    _react2.default.createElement('input', _extends({}, restProps, { type: 'checkbox', className: 'Checkbox__input' })),
    _react2.default.createElement(
      'div',
      { className: 'Checkbox__container' },
      _react2.default.createElement(
        'div',
        { className: 'Checkbox__icon' },
        _react2.default.createElement(_done2.default, null)
      ),
      _react2.default.createElement(
        'div',
        { className: 'Checkbox__content' },
        children
      )
    )
  );
};

Checkbox.propTypes = {
  children: _propTypes2.default.node,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  getRootRef: _propTypes2.default.func
};

exports.default = Checkbox;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tappable = __webpack_require__(5);

var _Tappable2 = _interopRequireDefault(_Tappable);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var osname = (0, _platform.platform)();
var baseClassName = (0, _getClassName2.default)('Radio');

var Radio = function Radio(_ref) {
  var children = _ref.children,
      description = _ref.description,
      style = _ref.style,
      className = _ref.className,
      getRef = _ref.getRef,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ['children', 'description', 'style', 'className', 'getRef', 'getRootRef']);

  return _react2.default.createElement(
    _Tappable2.default,
    {
      component: 'label',
      style: style,
      className: (0, _classnames2.default)(baseClassName, className),
      activeEffectDelay: osname === _platform.IOS ? 100 : _Tappable.ACTIVE_EFFECT_DELAY,
      disabled: restProps.disabled,
      getRootRef: getRootRef
    },
    _react2.default.createElement('input', _extends({}, restProps, { type: 'radio', className: 'Radio__input', ref: getRef })),
    _react2.default.createElement(
      'div',
      { className: 'Radio__container' },
      _react2.default.createElement('div', { className: 'Radio__icon' }),
      _react2.default.createElement(
        'div',
        { className: 'Radio__content' },
        children,
        _react2.default.createElement(
          'div',
          { className: 'Radio__description' },
          description
        )
      )
    )
  );
};

Radio.propTypes = {
  children: _propTypes2.default.node,
  description: _propTypes2.default.node,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  getRef: _propTypes2.default.func,
  getRootRef: _propTypes2.default.func
};

exports.default = Radio;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _requestAnimationFrame = __webpack_require__(11);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _platform = __webpack_require__(4);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassName = (0, _getClassName2.default)('Textarea');

var Textarea = function (_Component) {
  _inherits(Textarea, _Component);

  function Textarea(props) {
    _classCallCheck(this, Textarea);

    var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props));

    _this.getRef = function (element) {
      _this.element = element;
      _this.props.getRef && _this.props.getRef(element);
    };

    _this.resize = function () {
      var el = _this.element;

      if (el) {
        var offsetHeight = el.offsetHeight,
            scrollHeight = el.scrollHeight;

        var style = window.getComputedStyle(el);
        var paddingTop = parseInt(style.paddingTop);
        var paddingBottom = parseInt(style.paddingBottom);

        var diff = paddingTop + paddingBottom;

        if (scrollHeight + diff <= offsetHeight) {
          diff = 0;
        }

        if (el.value) {
          _this.setState({ height: scrollHeight - diff });
        }

        _this.setState({ height: 0 }, function () {
          var height = el.scrollHeight - diff;

          _this.setState({ height: height });

          _this.props.onResize(el);
        });
      }
    };

    _this.onChange = function (e) {
      if (_this.props.grow) {
        _this.resize();
      }

      if (!_this.isControlledOutside) {
        _this.setState({ value: e.target.value });
      }

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    if (typeof props.value !== 'undefined') {
      _this.isControlledOutside = true;
      _this.state = {};
    } else {
      _this.state = {
        value: props.defaultValue || ''
      };
    }
    return _this;
  }

  _createClass(Textarea, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.grow) {
        this.resize();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.value && this.props.value === '') {
        // Fix iOS extra indent on removing content
        (0, _requestAnimationFrame2.default)(function () {
          _this2.element.value = '';
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          value = _props.value,
          onChange = _props.onChange,
          grow = _props.grow,
          style = _props.style,
          onResize = _props.onResize,
          className = _props.className,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['defaultValue', 'value', 'onChange', 'grow', 'style', 'onResize', 'className', 'getRootRef']);

      var height = this.state.height || style.height || 66;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(baseClassName, className), style: style, ref: getRootRef },
        _react2.default.createElement('textarea', _extends({}, restProps, {
          value: this.value,
          onChange: this.onChange,
          ref: this.getRef,
          style: { height: height }
        })),
        osname === _platform.ANDROID && _react2.default.createElement('div', { className: 'Textarea-underline' })
      );
    }
  }, {
    key: 'value',
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return Textarea;
}(_react.Component);

Textarea.propTypes = {
  style: _propTypes2.default.object,
  value: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  grow: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  onResize: _propTypes2.default.func,
  className: _propTypes2.default.string,
  getRef: _propTypes2.default.func,
  getRootRef: _propTypes2.default.func
};
Textarea.defaultProps = {
  style: {},
  defaultValue: '',
  grow: true,
  onResize: function onResize() {}
};
exports.default = Textarea;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Touch = __webpack_require__(8);

var _Touch2 = _interopRequireDefault(_Touch);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _Slider2 = __webpack_require__(17);

var _Slider3 = _interopRequireDefault(_Slider2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Slider');

var RangeSlider = function (_Slider) {
  _inherits(RangeSlider, _Slider);

  function RangeSlider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RangeSlider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RangeSlider.__proto__ || Object.getPrototypeOf(RangeSlider)).call.apply(_ref, [this].concat(args))), _this), _this.onStart = function (e) {
      var absolutePosition = _this.validateAbsolute(e.startX - _this.state.containerLeft);
      var percentPosition = _this.absoluteToPecent(absolutePosition);
      var percentRange = _this.calcPercentRange(percentPosition);

      _this.onChange(_this.percentToValue(percentRange));

      if (_this.isControlledOutside) {
        _this.setState({ startX: absolutePosition });
      } else {
        _this.setState(_extends({
          startX: absolutePosition
        }, percentRange));
      }

      var thumb = e.originalEvent.target.closest('.Slider__thumb');

      if (thumb === _this.thumbStart) {
        _this.setState({ active: 'start' });
      } else if (thumb === _this.thumbEnd) {
        _this.setState({ active: 'end' });
      }
    }, _this.onMoveX = function (e) {
      var absolutePosition = _this.validateAbsolute(_this.state.startX + (e.shiftX || 0));
      var percentPosition = _this.absoluteToPecent(absolutePosition);
      var percentRange = _this.calcPercentRange(percentPosition);

      _this.onChange(_this.percentToValue(percentRange));

      if (!_this.isControlledOutside) {
        _this.setState(percentRange);
      }

      e.originalEvent.preventDefault();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RangeSlider, [{
    key: 'calcPercentRange',
    value: function calcPercentRange(percent) {
      var _state = this.state,
          percentStart = _state.percentStart,
          percentEnd = _state.percentEnd;


      if (percentStart === 100) {
        return { percentStart: percent, percentEnd: percentEnd };
      } else if (percentEnd === 0) {
        return { percentEnd: percent, percentStart: percentStart };
      } else if (Math.abs(percentStart - percent) <= Math.abs(percentEnd - percent)) {
        return { percentStart: percent, percentEnd: percentEnd };
      } else {
        return { percentEnd: percent, percentStart: percentStart };
      }
    }
  }, {
    key: 'validatePercent',
    value: function validatePercent(_ref2) {
      var percentStart = _ref2.percentStart,
          percentEnd = _ref2.percentEnd;

      return {
        percentStart: _get(RangeSlider.prototype.__proto__ || Object.getPrototypeOf(RangeSlider.prototype), 'validatePercent', this).call(this, percentStart),
        percentEnd: _get(RangeSlider.prototype.__proto__ || Object.getPrototypeOf(RangeSlider.prototype), 'validatePercent', this).call(this, percentEnd)
      };
    }
  }, {
    key: 'percentToValue',
    value: function percentToValue(_ref3) {
      var percentStart = _ref3.percentStart,
          percentEnd = _ref3.percentEnd;

      return [_get(RangeSlider.prototype.__proto__ || Object.getPrototypeOf(RangeSlider.prototype), 'percentToValue', this).call(this, percentStart), _get(RangeSlider.prototype.__proto__ || Object.getPrototypeOf(RangeSlider.prototype), 'percentToValue', this).call(this, percentEnd)];
    }
  }, {
    key: 'valueToPercent',
    value: function valueToPercent(_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          valueStart = _ref5[0],
          valueEnd = _ref5[1];

      return {
        percentStart: _get(RangeSlider.prototype.__proto__ || Object.getPrototypeOf(RangeSlider.prototype), 'valueToPercent', this).call(this, valueStart),
        percentEnd: _get(RangeSlider.prototype.__proto__ || Object.getPrototypeOf(RangeSlider.prototype), 'valueToPercent', this).call(this, valueEnd)
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('resize', this.onResize);
      this.onResize(function () {
        _this2.setState(_this2.validatePercent(_this2.valueToPercent(_this2.value)));
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.isControlledOutside && nextProps.value !== this.props.value) {
        this.setState(this.validatePercent(this.valueToPercent(nextProps.value)));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          className = _props.className,
          min = _props.min,
          max = _props.max,
          step = _props.step,
          value = _props.value,
          defaultValue = _props.defaultValue,
          onChange = _props.onChange,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['className', 'min', 'max', 'step', 'value', 'defaultValue', 'onChange', 'getRootRef']);

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, { className: (0, _classnames2.default)(baseClassNames, className), ref: this.getRef }),
        _react2.default.createElement(
          _Touch2.default,
          { onStart: this.onStart, onMoveX: this.onMoveX, onEnd: this.onEnd, className: 'Slider__in' },
          _react2.default.createElement(
            'div',
            {
              className: 'Slider__dragger',
              style: {
                width: this.state.percentEnd - this.state.percentStart + '%',
                left: this.state.percentStart + '%'
              }
            },
            _react2.default.createElement('span', {
              className: (0, _classnames2.default)('Slider__thumb', 'Slider__thumb--start', {
                'Slider__thumb--active': this.state.active === 'start'
              }),
              ref: function ref(el) {
                return _this3.thumbStart = el;
              }
            }),
            _react2.default.createElement('span', {
              className: (0, _classnames2.default)('Slider__thumb', 'Slider__thumb--end', {
                'Slider__thumb--active': this.state.active === 'end'
              }),
              ref: function ref(el) {
                return _this3.thumbEnd = el;
              }
            })
          )
        )
      );
    }
  }, {
    key: 'value',
    get: function get() {
      if (this.isControlledOutside) {
        return this.props.value;
      } else if (this.props.hasOwnProperty('defaultValue')) {
        return this.props.defaultValue;
      } else {
        return [this.props.min, this.props.max];
      }
    }
  }]);

  return RangeSlider;
}(_Slider3.default);

RangeSlider.propTypes = _extends({}, _Slider3.default.propTypes, {
  value: _propTypes2.default.arrayOf(_propTypes2.default.number),
  defaultValue: _propTypes2.default.arrayOf(_propTypes2.default.number)
});
RangeSlider.defaultProps = _Slider3.default.defaultProps;
exports.default = RangeSlider;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassName = (0, _getClassName2.default)('Input');

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          alignment = _props.alignment,
          placeholder = _props.placeholder,
          status = _props.status,
          getRef = _props.getRef,
          className = _props.className,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['alignment', 'placeholder', 'status', 'getRef', 'className', 'getRootRef']);

      var modifiers = _defineProperty({
        'Input--left': alignment === 'left',
        'Input--center': alignment === 'center',
        'Input--right': alignment === 'right'
      }, 'Input--s-' + this.props.status, true);

      var customPlaceolder = ['date', 'datetime-local', 'time', 'month'].indexOf(this.props.type) > -1 && this.context.isWebView ? this.props.placeholder : null;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(baseClassName, modifiers, className), ref: getRootRef },
        _react2.default.createElement('input', _extends({}, restProps, {
          className: 'Input__el',
          ref: getRef,
          placeholder: customPlaceolder ? null : this.props.placeholder
        })),
        osname === _platform.ANDROID && _react2.default.createElement('div', { className: 'Input-underline' }),
        customPlaceolder && !this.value && _react2.default.createElement(
          'div',
          { className: 'Input__placeholder' },
          this.props.placeholder
        )
      );
    }
  }]);

  return Input;
}(_react.Component);

Input.propTypes = {
  type: _propTypes2.default.oneOf(['text', 'password', 'date', 'datetime-local', 'time', 'month', 'email', 'number', 'tel', 'url']),
  alignment: _propTypes2.default.oneOf(['left', 'center', 'right']),
  value: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  placeholder: _propTypes2.default.string,
  status: _propTypes2.default.oneOf(['default', 'error', 'verified']),
  getRef: _propTypes2.default.func,
  getRootRef: _propTypes2.default.func,
  className: _propTypes2.default.string
};
Input.defaultProps = {
  type: 'text',
  alignment: 'left',
  status: 'default'
};
Input.contextTypes = {
  isWebView: _propTypes2.default.bool
};
exports.default = Input;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _Button = __webpack_require__(25);

var _Button2 = _interopRequireDefault(_Button);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('File');

var File = function (_Component) {
  _inherits(File, _Component);

  function File(props) {
    _classCallCheck(this, File);

    var _this = _possibleConstructorReturn(this, (File.__proto__ || Object.getPrototypeOf(File)).call(this, props));

    _this.state = {
      value: null
    };
    return _this;
  }

  _createClass(File, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          label = _props.label,
          alignment = _props.alignment,
          align = _props.align,
          size = _props.size,
          level = _props.level,
          type = _props.type,
          stretched = _props.stretched,
          before = _props.before,
          className = _props.className,
          style = _props.style,
          getRef = _props.getRef,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['children', 'label', 'alignment', 'align', 'size', 'level', 'type', 'stretched', 'before', 'className', 'style', 'getRef', 'getRootRef']);

      return _react2.default.createElement(
        _Button2.default,
        {
          align: align || alignment,
          className: (0, _classnames2.default)(baseClassNames, className),
          component: 'label',
          type: type,
          stretched: stretched,
          level: level,
          size: size,
          before: before,
          style: style,
          getRootRef: getRootRef
        },
        _react2.default.createElement('input', _extends({}, restProps, { className: 'File__input', type: 'file', ref: getRef })),
        children || label
      );
    }
  }]);

  return File;
}(_react.Component);

File.propTypes = {
  style: _propTypes2.default.object,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  /**
   * @ignore
   */
  level: _propTypes2.default.any,
  /**
   * @ignore
   */
  size: _propTypes2.default.any,
  /**
   * @ignore
   */
  type: _propTypes2.default.any,
  /**
   * @ignore
   */
  align: _propTypes2.default.any,
  /**
   * @ignore
   */
  stretched: _propTypes2.default.any,
  /**
   * @ignore
   */
  before: _propTypes2.default.any,
  getRef: _propTypes2.default.func,
  getRootRef: _propTypes2.default.func,
  /**
   * @deprecated Используйте `children`. Свойство `label` будет удалено в следующей мажорной версии.
   */
  label: _propTypes2.default.string,
  /**
   * @deprecated Используйте `align`. Свойство `alignment` будет удалено в следующей мажорной версии.
   */
  alignment: _propTypes2.default.oneOf(['left', 'center', 'right'])
};
File.defaultProps = {
  label: 'Выберите файл',
  children: 'Выберите файл',
  alignment: 'left',
  align: 'left'
};
exports.default = File;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassNames = (0, _getClassName2.default)('Switch');

var Switch = function Switch(_ref) {
  var style = _ref.style,
      className = _ref.className,
      getRef = _ref.getRef,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ['style', 'className', 'getRef', 'getRootRef']);

  return _react2.default.createElement(
    'label',
    { className: (0, _classnames2.default)(baseClassNames, className), style: style, ref: getRootRef },
    _react2.default.createElement('input', _extends({}, restProps, { type: 'checkbox', className: 'Switch__self', ref: getRef })),
    _react2.default.createElement('span', { className: 'Switch__pseudo' })
  );
};

Switch.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  getRef: _propTypes2.default.func,
  getRootRef: _propTypes2.default.func
};

exports.default = Switch;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassNames = (0, _getClassName2.default)('FormLayoutGroup');

var FormLayoutGroup = function FormLayoutGroup(_ref) {
  var children = _ref.children,
      top = _ref.top,
      bottom = _ref.bottom,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ['children', 'top', 'bottom', 'className']);

  return _react2.default.createElement(
    'div',
    _extends({ className: (0, _classnames2.default)(baseClassNames, className) }, restProps),
    children
  );
};

FormLayoutGroup.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  top: _propTypes2.default.node,
  bottom: _propTypes2.default.node
};

exports.default = FormLayoutGroup;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassName = (0, _getClassName2.default)('FormLayout');

var FormLayout = function (_React$Component) {
  _inherits(FormLayout, _React$Component);

  function FormLayout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormLayout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormLayout.__proto__ || Object.getPrototypeOf(FormLayout)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function (e) {
      return _this.props.onSubmit ? _this.props.onSubmit(e) : e.preventDefault();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormLayout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          TagName = _props.TagName,
          className = _props.className,
          getRef = _props.getRef,
          restProps = _objectWithoutProperties(_props, ['children', 'TagName', 'className', 'getRef']);

      var arrayChildren = Array.isArray(children) ? children : [children];

      return _react2.default.createElement(
        TagName,
        _extends({}, restProps, {
          className: (0, _classnames2.default)(baseClassName, className),
          onSubmit: this.onSubmit,
          ref: getRef
        }),
        _react2.default.createElement(
          'div',
          { className: 'FormLayout__container' },
          arrayChildren.map(function (field, i) {
            return field ? _react2.default.createElement(
              'div',
              { className: 'FormLayout__row', key: field.key || 'row-' + i },
              field.props.top && _react2.default.createElement(
                'div',
                { className: 'FormLayout__row-top' },
                field.props.top
              ),
              _react2.default.createElement(
                'div',
                { className: 'FormLayout__field' },
                field
              ),
              field.props.bottom && _react2.default.createElement(
                'div',
                { className: 'FormLayout__row-bottom' },
                field.props.bottom
              )
            ) : null;
          })
        ),
        TagName === 'form' && _react2.default.createElement('input', { type: 'submit', className: 'FormLayout__submit', value: '' })
      );
    }
  }]);

  return FormLayout;
}(_react2.default.Component);

FormLayout.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  TagName: _propTypes2.default.string,
  onSubmit: _propTypes2.default.func,
  getRef: _propTypes2.default.func
};
FormLayout.defaultProps = {
  status: 'default',
  TagName: 'form'
};
exports.default = FormLayout;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isElement = function isElement(element) {
  return _react2.default.isValidElement(element);
};
var isDOMTypeElement = function isDOMTypeElement(element) {
  return isElement(element) && typeof element.type === 'string';
};
var baseClassName = (0, _getClassName2.default)('Tooltip');

var TooltipPortal = function (_React$Component) {
  _inherits(TooltipPortal, _React$Component);

  function TooltipPortal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TooltipPortal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TooltipPortal.__proto__ || Object.getPrototypeOf(TooltipPortal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      x: 0,
      y: 0
    }, _this.fixedPortal = false, _this.getRef = function (el) {
      return _this.el = el;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TooltipPortal, [{
    key: 'findPortalTarget',
    value: function findPortalTarget() {
      var target = this.props.target;

      var closestFixed = target.closest('.FixedLayout');
      var closestHeader = target.closest('.PanelHeader__in');
      var closestPanel = this.document.getElementById(this.context.panel).childNodes[0];

      if (closestFixed || closestHeader) {
        this.fixedPortal = true;
      }

      return closestFixed || closestHeader || closestPanel;
    }
  }, {
    key: 'getBoundingTargetRect',
    value: function getBoundingTargetRect() {
      var target = this.props.target;

      var targetBounds = target.getBoundingClientRect();
      var portalBounds = this.portalTarget.getBoundingClientRect();

      return {
        width: targetBounds.width,
        height: targetBounds.height,
        x: targetBounds.x - portalBounds.x,
        y: targetBounds.y - portalBounds.y
      };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.portalTarget = this.findPortalTarget();
      this.document.addEventListener('click', this.props.onClose);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.document.removeEventListener('click', this.props.onClose);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          offsetY = _props.offsetY,
          offsetX = _props.offsetX,
          alignX = _props.alignX,
          alignY = _props.alignY;

      var coords = this.getBoundingTargetRect();

      this.setState({
        x: coords.x + offsetX + (alignX === 'right' ? coords.width - this.el.offsetWidth : 0),
        y: coords.y + (alignY === 'top' ? -this.el.offsetHeight - offsetY : coords.height + offsetY)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props2 = this.props,
          title = _props2.title,
          text = _props2.text,
          alignX = _props2.alignX,
          alignY = _props2.alignY,
          cornerOffset = _props2.cornerOffset;


      return _reactDom2.default.createPortal(_react2.default.createElement(
        'div',
        { className: (0, _classnames3.default)(baseClassName, (_classnames = {}, _defineProperty(_classnames, 'Tooltip--x-' + alignX, true), _defineProperty(_classnames, 'Tooltip--y-' + alignY, true), _defineProperty(_classnames, 'Tooltip--fixed', this.fixedPortal), _classnames)) },
        _react2.default.createElement(
          'div',
          { className: 'Tooltip__container', style: { top: this.state.y, left: this.state.x }, ref: this.getRef },
          _react2.default.createElement('div', { className: 'Tooltip__corner', style: _defineProperty({}, alignX, 20 + cornerOffset) }),
          _react2.default.createElement(
            'div',
            { className: 'Tooltip__content' },
            title && _react2.default.createElement(
              'div',
              { className: 'Tooltip__title' },
              title
            ),
            text && _react2.default.createElement(
              'div',
              { className: 'Tooltip__text' },
              text
            )
          )
        )
      ), this.portalTarget);
    }
  }, {
    key: 'document',
    get: function get() {
      return this.context.document || document;
    }
  }]);

  return TooltipPortal;
}(_react2.default.Component);

TooltipPortal.propTypes = {
  target: _propTypes2.default.object,
  text: _propTypes2.default.node,
  title: _propTypes2.default.node,
  alignX: _propTypes2.default.oneOf(['left', 'right']),
  alignY: _propTypes2.default.oneOf(['top', 'bottom']),
  offsetX: _propTypes2.default.number,
  offsetY: _propTypes2.default.number,
  cornerOffset: _propTypes2.default.number,
  onClose: _propTypes2.default.func.isRequired
};
TooltipPortal.contextTypes = {
  document: _propTypes2.default.any,
  panel: _propTypes2.default.string
};

var Tooltip = function (_React$Component2) {
  _inherits(Tooltip, _React$Component2);

  function Tooltip() {
    var _ref3;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, Tooltip);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref3 = Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call.apply(_ref3, [this].concat(args))), _this2), _this2.state = {
      ready: false
    }, _this2.getRef = function (el) {
      return _this2.targetEl = el;
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.targetEl && this.setState({ ready: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _React$cloneElement;

      var _props3 = this.props,
          children = _props3.children,
          isShown = _props3.isShown,
          portalProps = _objectWithoutProperties(_props3, ['children', 'isShown']);

      var child = _react2.default.cloneElement(children, (_React$cloneElement = {}, _defineProperty(_React$cloneElement, isDOMTypeElement(children) ? 'ref' : 'getRootRef', this.getRef), _defineProperty(_React$cloneElement, 'key', 'c'), _React$cloneElement));

      if (!isShown || !this.state.ready) {
        return child;
      }

      return [child, _react2.default.createElement(TooltipPortal, _extends({}, portalProps, { target: this.targetEl, key: 't' }))];
    }
  }]);

  return Tooltip;
}(_react2.default.Component);

Tooltip.propTypes = {
  /**
   * **Важно**: если в `children` передан React-компонент, то необходимо убедиться в том, что он поддерживает
   * свойство `getRootRef`, которое должно возвращаться ссылку на корневой DOM-элемент компонента,
   * иначе тултип показан не будет. Если передан React-element, то такой проблемы нет.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Если передан `false`, то рисуется просто `children`.
   */
  isShown: _propTypes2.default.bool.isRequired,
  /**
   * Текст тултипа.
   */
  text: _propTypes2.default.node,
  /**
   * Заголовок тултипа.
   */
  title: _propTypes2.default.node,
  /**
   * Положение по горизонтали (прижатие к левому или правому краю `children`).
   */
  alignX: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * Положение по вертикали (расположение над или под `children`).
   */
  alignY: _propTypes2.default.oneOf(['top', 'bottom']),
  /**
   * Сдвиг по горизонтали (относительно портала, в котором рисуется тултип).
   */
  offsetX: _propTypes2.default.number,
  /**
   * Сдвиг по вертикали (относительно портала, в котором рисуется тултип).
   */
  offsetY: _propTypes2.default.number,
  /**
   * Сдвиг треугольника (относительно ширины тултипа).
   */
  cornerOffset: _propTypes2.default.number,
  /**
   * Callback, который вызывается при клике по любому месту в пределах экрана.
   */
  onClose: _propTypes2.default.func.isRequired
};
Tooltip.defaultProps = {
  offsetX: 0,
  offsetY: 15,
  alignX: 'left',
  alignY: 'bottom',
  cornerOffset: 0,
  isShown: true
};
exports.default = Tooltip;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassName = (0, _getClassName2.default)('Link');

var Link = function Link(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Component = _ref.Component,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ['children', 'className', 'Component', 'getRootRef']);

  return _react2.default.createElement(
    Component,
    _extends({}, restProps, { ref: getRootRef, className: (0, _classnames2.default)(baseClassName, className) }),
    children
  );
};

Link.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  Component: _propTypes2.default.any,
  getRootRef: _propTypes2.default.func
};

Link.defaultProps = {
  Component: 'a'
};

exports.default = Link;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FixedLayout = __webpack_require__(12);

var _FixedLayout2 = _interopRequireDefault(_FixedLayout);

var _Tabs = __webpack_require__(18);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();

/**
 * @deprecated этот компонент устарел и будет удален в следующей мажорной версии.
 * Для отрисовки фиксированных табов используйте связку `Tabs` и `FixedLayout`.
 */

var FixedTabs = function (_React$Component) {
  _inherits(FixedTabs, _React$Component);

  function FixedTabs() {
    _classCallCheck(this, FixedTabs);

    return _possibleConstructorReturn(this, (FixedTabs.__proto__ || Object.getPrototypeOf(FixedTabs)).apply(this, arguments));
  }

  _createClass(FixedTabs, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          vertical = _props.vertical,
          className = _props.className,
          style = _props.style,
          theme = _props.theme,
          children = _props.children;


      return _react2.default.createElement(
        _FixedLayout2.default,
        { vertical: vertical, className: className, style: style },
        _react2.default.createElement(
          _Tabs2.default,
          { theme: theme },
          children
        )
      );
    }
  }]);

  return FixedTabs;
}(_react2.default.Component);

FixedTabs.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  vertical: _propTypes2.default.oneOf(['top', 'bottom']),
  style: _propTypes2.default.object,
  /**
   * Значения white и gray устарели. Они будут удалены в следующей мажорной версии.
   * Для Android актуален только header
   */
  theme: _propTypes2.default.oneOf(['light', 'header']),
  /**
   * iOS only
   */
  type: _propTypes2.default.oneOf(['default', 'buttons'])
};
FixedTabs.defaultProps = {
  theme: osname === _platform.IOS ? 'light' : 'header',
  vertical: 'top'
};
exports.default = FixedTabs;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _Tappable = __webpack_require__(5);

var _Tappable2 = _interopRequireDefault(_Tappable);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassName = (0, _getClassName2.default)('TabsItem');

var TabsItem = function (_React$Component) {
  _inherits(TabsItem, _React$Component);

  function TabsItem() {
    _classCallCheck(this, TabsItem);

    return _possibleConstructorReturn(this, (TabsItem.__proto__ || Object.getPrototypeOf(TabsItem)).apply(this, arguments));
  }

  _createClass(TabsItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          selected = _props.selected,
          className = _props.className,
          restProps = _objectWithoutProperties(_props, ['children', 'selected', 'className']);

      return _react2.default.createElement(
        _Tappable2.default,
        _extends({}, restProps, {
          className: (0, _classnames2.default)(baseClassName, { 'TabsItem--selected': selected }, className),
          activeEffectDelay: osname === _platform.IOS ? 0 : _Tappable.ACTIVE_EFFECT_DELAY
        }),
        _react2.default.createElement(
          'span',
          { className: 'TabsItem__in' },
          children
        )
      );
    }
  }]);

  return TabsItem;
}(_react2.default.Component);

TabsItem.propTypes = {
  children: _propTypes2.default.node,
  selected: _propTypes2.default.bool,
  className: _propTypes2.default.string
};
TabsItem.defaultProps = {
  selected: false
};
exports.default = TabsItem;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(7), __webpack_require__(6));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 116);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _browserSymbol = __webpack_require__(2);

var _browserSymbol2 = _interopRequireDefault(_browserSymbol);

var _browserSprite = __webpack_require__(1);

var _browserSprite2 = _interopRequireDefault(_browserSprite);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var symbol = new _browserSymbol2.default({
  "id": "search_24",
  "use": "search_24-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"search_24\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M0 0h24v24H0z\" /><path d=\"M16.535 15.12l4.172 4.173a1 1 0 0 1-1.414 1.414l-4.172-4.172a7.25 7.25 0 1 1 1.414-1.414zM10.75 16a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5z\" fill=\"currentColor\" fill-rule=\"nonzero\" /></g></symbol>"
});
var result = _browserSprite2.default.add(symbol);

var width = symbol.viewBox.split(' ')[2];
var height = symbol.viewBox.split(' ')[3];
var size = Math.max(width, height);

function SvgIcon(_ref) {
  var className = _ref.className,
      fill = _ref.fill,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "fill", "style", "getRootRef"]);

  return _react2.default.createElement(
    "div",
    _extends({}, restProps, {
      ref: getRootRef,
      className: 'Icon' + ' Icon--' + size + ' Icon--' + symbol.id + ' ' + (className || ''),
      style: _extends({}, style, { width: width + 'px', height: height + 'px' })
    }),
    _react2.default.createElement(
      "svg",
      { viewBox: symbol.viewBox, width: width, height: height, style: { display: 'block' } },
      _react2.default.createElement("use", { xlinkHref: '#' + symbol.id, style: { fill: 'currentColor', color: fill } })
    )
  );
}
exports.default = SvgIcon;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ })

/******/ });
});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(7), __webpack_require__(6));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 210);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _browserSymbol = __webpack_require__(2);

var _browserSymbol2 = _interopRequireDefault(_browserSymbol);

var _browserSprite = __webpack_require__(1);

var _browserSprite2 = _interopRequireDefault(_browserSprite);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var symbol = new _browserSymbol2.default({
  "id": "back_24",
  "use": "back_24-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"back_24\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M24 0H0v24h24z\" /><path d=\"M7.8 11l4.9-4.9a.99.99 0 0 0-1.4-1.4l-6.593 6.593a1 1 0 0 0 0 1.414L11.3 19.3a.99.99 0 0 0 1.4-1.4L7.8 13H20a1 1 0 0 0 0-2H7.8z\" fill=\"currentColor\" /></g></symbol>"
});
var result = _browserSprite2.default.add(symbol);

var width = symbol.viewBox.split(' ')[2];
var height = symbol.viewBox.split(' ')[3];
var size = Math.max(width, height);

function SvgIcon(_ref) {
  var className = _ref.className,
      fill = _ref.fill,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "fill", "style", "getRootRef"]);

  return _react2.default.createElement(
    "div",
    _extends({}, restProps, {
      ref: getRootRef,
      className: 'Icon' + ' Icon--' + size + ' Icon--' + symbol.id + ' ' + (className || ''),
      style: _extends({}, style, { width: width + 'px', height: height + 'px' })
    }),
    _react2.default.createElement(
      "svg",
      { viewBox: symbol.viewBox, width: width, height: height, style: { display: 'block' } },
      _react2.default.createElement("use", { xlinkHref: '#' + symbol.id, style: { fill: 'currentColor', color: fill } })
    )
  );
}
exports.default = SvgIcon;

/***/ })

/******/ });
});

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _HeaderButton = __webpack_require__(32);

var _HeaderButton2 = _interopRequireDefault(_HeaderButton);

var _back = __webpack_require__(64);

var _back2 = _interopRequireDefault(_back);

var _cancel = __webpack_require__(21);

var _cancel2 = _interopRequireDefault(_cancel);

var _search = __webpack_require__(63);

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassName = (0, _getClassName2.default)('Search');

var SearchAndroid = function (_React$Component) {
  _inherits(SearchAndroid, _React$Component);

  function SearchAndroid(props) {
    _classCallCheck(this, SearchAndroid);

    var _this = _possibleConstructorReturn(this, (SearchAndroid.__proto__ || Object.getPrototypeOf(SearchAndroid)).call(this, props));

    _this.onCancel = function () {
      if (!_this.isControlledOutside) {
        _this.setState({ value: '' });
      }
      if (_this.props.onChange) {
        _this.props.onChange('');
      }
      _this.inputEl.focus();
    };

    _this.onChange = function (e) {
      if (!_this.isControlledOutside) {
        _this.setState({ value: e.target.value });
      }
      if (_this.props.onChange) {
        _this.props.onChange(e.target.value, e);
      }
    };

    _this.inputRef = function (el) {
      _this.inputEl = el;
      _this.props.getRef && _this.props.getRef(el);
    };

    var state = {};

    if (props.hasOwnProperty('value')) {
      _this.isControlledOutside = true;
    } else {
      state.value = props.defaultValue || '';
    }

    _this.state = state;
    return _this;
  }

  _createClass(SearchAndroid, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.theme === 'header' && this.inputEl.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          getRef = _props.getRef,
          value = _props.value,
          defaultValue = _props.defaultValue,
          onChange = _props.onChange,
          onClose = _props.onClose,
          theme = _props.theme,
          inputProps = _objectWithoutProperties(_props, ['getRef', 'value', 'defaultValue', 'onChange', 'onClose', 'theme']);

      var className = (0, _classnames3.default)(baseClassName, (_classnames = {}, _defineProperty(_classnames, 'Search--' + theme, true), _defineProperty(_classnames, 'Search--focused', this.state.focused), _defineProperty(_classnames, 'Search--has-value', !!this.value), _classnames), this.props.className);

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'div',
          { className: 'Search__container' },
          _react2.default.createElement(
            'div',
            { className: 'Search__before' },
            theme === 'default' && _react2.default.createElement(_search2.default, null),
            theme === 'header' && _react2.default.createElement(
              _HeaderButton2.default,
              { onClick: onClose },
              _react2.default.createElement(_back2.default, null)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Search__control' },
            _react2.default.createElement('input', _extends({}, inputProps, {
              className: 'Search__input',
              ref: this.inputRef,
              value: this.value,
              onChange: this.onChange
            }))
          ),
          !!this.value && _react2.default.createElement(
            'div',
            { className: 'Search__after' },
            theme === 'default' && _react2.default.createElement(_cancel2.default, { onClick: this.onCancel }),
            theme === 'header' && _react2.default.createElement(
              _HeaderButton2.default,
              { onClick: this.onCancel },
              _react2.default.createElement(_cancel2.default, null)
            )
          )
        )
      );
    }
  }, {
    key: 'value',
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return SearchAndroid;
}(_react2.default.Component);

SearchAndroid.propTypes = {
  className: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  placeholder: _propTypes2.default.node,
  theme: _propTypes2.default.oneOf(['header', 'default']),
  getRef: _propTypes2.default.func
};
SearchAndroid.defaultProps = {
  placeholder: 'Поиск',
  theme: 'default'
};
exports.default = SearchAndroid;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(7), __webpack_require__(6));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 224);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _browserSymbol = __webpack_require__(2);

var _browserSymbol2 = _interopRequireDefault(_browserSymbol);

var _browserSprite = __webpack_require__(1);

var _browserSprite2 = _interopRequireDefault(_browserSprite);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var symbol = new _browserSymbol2.default({
  "id": "search_16",
  "use": "search_16-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" id=\"search_16\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M0 0h16v16H0z\" /><path d=\"M14.743 13.574L10.91 9.74a5.426 5.426 0 0 0 1.05-3.232A5.532 5.532 0 0 0 6.46 1 5.436 5.436 0 0 0 1 6.468a5.532 5.532 0 0 0 5.5 5.508 5.408 5.408 0 0 0 3.242-1.061l.004-.003 3.83 3.831a.826.826 0 1 0 1.167-1.169zm-8.247-2.696a4.425 4.425 0 0 1-4.4-4.406 4.35 4.35 0 0 1 4.368-4.374 4.426 4.426 0 0 1 4.4 4.406 4.35 4.35 0 0 1-4.368 4.374z\" fill=\"currentColor\" /></g></symbol>"
});
var result = _browserSprite2.default.add(symbol);

var width = symbol.viewBox.split(' ')[2];
var height = symbol.viewBox.split(' ')[3];
var size = Math.max(width, height);

function SvgIcon(_ref) {
  var className = _ref.className,
      fill = _ref.fill,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "fill", "style", "getRootRef"]);

  return _react2.default.createElement(
    "div",
    _extends({}, restProps, {
      ref: getRootRef,
      className: 'Icon' + ' Icon--' + size + ' Icon--' + symbol.id + ' ' + (className || ''),
      style: _extends({}, style, { width: width + 'px', height: height + 'px' })
    }),
    _react2.default.createElement(
      "svg",
      { viewBox: symbol.viewBox, width: width, height: height, style: { display: 'block' } },
      _react2.default.createElement("use", { xlinkHref: '#' + symbol.id, style: { fill: 'currentColor', color: fill } })
    )
  );
}
exports.default = SvgIcon;

/***/ })

/******/ });
});

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _search = __webpack_require__(66);

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassName = (0, _getClassName2.default)('Search');

var searchId = 0;

var SearchIOS = function (_React$Component) {
  _inherits(SearchIOS, _React$Component);

  function SearchIOS(props) {
    _classCallCheck(this, SearchIOS);

    var _this = _possibleConstructorReturn(this, (SearchIOS.__proto__ || Object.getPrototypeOf(SearchIOS)).call(this, props));

    _this.onFocus = function (e) {
      _this.setState({ focused: true });
      _this.props.onFocus && _this.props.onFocus(e);
    };

    _this.onBlur = function (e) {
      _this.setState({ focused: false });
      _this.props.onBlur && _this.props.onBlur(e);
    };

    _this.onChange = function (e) {
      if (!_this.isControlledOutside) {
        _this.setState({ value: e.target.value });
      }
      if (_this.props.onChange) {
        _this.props.onChange(e.target.value, e);
      }
    };

    _this.onCancel = function () {
      if (!_this.isControlledOutside) {
        _this.setState({ value: '' });
      }
      if (_this.props.onChange) {
        _this.props.onChange('');
      }
    };

    _this.inputRef = function (el) {
      return _this.props.getRef && _this.props.getRef(el);
    };

    var state = {
      showAfter: false,
      focused: false,
      placeholderOffset: null,
      afterWidth: null
    };

    if (props.hasOwnProperty('value')) {
      _this.isControlledOutside = true;
    } else {
      state.value = props.defaultValue || '';
    }
    searchId++;
    _this.state = state;
    return _this;
  }

  _createClass(SearchIOS, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          theme = _props.theme,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          onChange = _props.onChange,
          defaultValue = _props.defaultValue,
          value = _props.value,
          placeholder = _props.placeholder,
          after = _props.after,
          getRef = _props.getRef,
          inputProps = _objectWithoutProperties(_props, ['className', 'theme', 'onFocus', 'onBlur', 'onChange', 'defaultValue', 'value', 'placeholder', 'after', 'getRef']);

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames3.default)(baseClassName, (_classnames = {}, _defineProperty(_classnames, 'Search--' + theme, true), _defineProperty(_classnames, 'Search--focused', this.state.focused), _defineProperty(_classnames, 'Search--has-value', this.value), _defineProperty(_classnames, 'Search--has-after', after), _classnames), className) },
        _react2.default.createElement(
          'div',
          { className: 'Search__in' },
          _react2.default.createElement('div', { className: 'Search__width' }),
          _react2.default.createElement(
            'div',
            { className: 'Search__control' },
            _react2.default.createElement('input', _extends({}, inputProps, {
              id: 'search-' + searchId,
              ref: this.inputRef,
              type: 'text',
              className: 'Search__input',
              onFocus: this.onFocus,
              onBlur: this.onBlur,
              onChange: this.onChange,
              value: this.value
            })),
            after && _react2.default.createElement(
              'div',
              { className: 'Search__after-width' },
              after
            ),
            _react2.default.createElement(
              'label',
              {
                className: 'Search__placeholder',
                htmlFor: 'search-' + searchId
              },
              _react2.default.createElement(
                'div',
                { className: 'Search__placeholder-in' },
                _react2.default.createElement(_search2.default, null),
                _react2.default.createElement('div', { className: 'Search__placeholder-text', dangerouslySetInnerHTML: { __html: placeholder } })
              )
            )
          ),
          after && _react2.default.createElement(
            'div',
            { className: 'Search__after', onClick: this.onCancel },
            _react2.default.createElement(
              'div',
              { className: 'Search__after-in' },
              after
            )
          )
        )
      );
    }
  }, {
    key: 'value',
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return SearchIOS;
}(_react2.default.Component);

SearchIOS.propTypes = {
  className: _propTypes2.default.string,
  after: _propTypes2.default.node,
  defaultValue: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  placeholder: _propTypes2.default.node,
  theme: _propTypes2.default.oneOf(['header', 'default']),
  getRef: _propTypes2.default.func
};
SearchIOS.defaultProps = {
  after: 'Отменить',
  theme: 'default',
  placeholder: 'Поиск'
};
exports.default = SearchIOS;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _platform = __webpack_require__(4);

var _SearchIOS = __webpack_require__(67);

var _SearchIOS2 = _interopRequireDefault(_SearchIOS);

var _SearchAndroid = __webpack_require__(65);

var _SearchAndroid2 = _interopRequireDefault(_SearchAndroid);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onClose = _props.onClose,
          iosProps = _objectWithoutProperties(_props, ['onClose']);

      var _props2 = this.props,
          after = _props2.after,
          before = _props2.before,
          androidProps = _objectWithoutProperties(_props2, ['after', 'before']);

      if (osname === _platform.IOS) {
        return _react2.default.createElement(_SearchIOS2.default, iosProps);
      } else {
        return _react2.default.createElement(_SearchAndroid2.default, androidProps);
      }
    }
  }]);

  return Search;
}(_react2.default.Component);

Search.propTypes = {
  className: _propTypes2.default.string,
  getRef: _propTypes2.default.func,
  /**
   * iOS only. Текст кнопки "отмена", которая чистит текстовое поле и убирает фокус.
   */
  after: _propTypes2.default.node,
  /**
   * iOS only
   */
  before: _propTypes2.default.node,
  theme: _propTypes2.default.oneOf(['header', 'default']),

  /**
   * Android only. Вызывается при клике по стрелке (слева). Этот контрол служит для выхода из режима поиска.
   */
  onClose: _propTypes2.default.func,

  /**
   * **Важно:** в коллбэк первым аргументом прилетает *значение* текстового поля.
   * Объект события передается вторым аргументом.
   */
  onChange: _propTypes2.default.func,
  autoComplete: _propTypes2.default.string
};
Search.defaultProps = {
  theme: 'default',
  autoComplete: 'off'
};
exports.default = Search;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassName = (0, _getClassName2.default)('Progress');

var Progress = function Progress(_ref) {
  var value = _ref.value,
      className = _ref.className,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ['value', 'className', 'getRootRef']);

  return _react2.default.createElement(
    'div',
    _extends({}, restProps, { ref: getRootRef, className: (0, _classnames2.default)(baseClassName, className) }),
    _react2.default.createElement('div', { className: 'Progress__bg' }),
    _react2.default.createElement('div', { className: 'Progress__in', style: { width: value + '%' } })
  );
};

Progress.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  value: _propTypes2.default.number,
  getRootRef: _propTypes2.default.func
};

Progress.defaultProps = {
  value: 0
};

exports.default = Progress;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _Touch = __webpack_require__(8);

var _Touch2 = _interopRequireDefault(_Touch);

var _classnames3 = __webpack_require__(2);

var _classnames4 = _interopRequireDefault(_classnames3);

var _requestAnimationFrame = __webpack_require__(11);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Gallery');

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery(props) {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

    _initialiseProps.call(_this);

    var current = typeof props.slideIndex === 'number' ? props.slideIndex : props.initialSlideIndex;

    _this.state = {
      containerWidth: 0,
      current: current,
      deltaX: 0,
      shiftX: 0,
      slides: [],
      animation: false,
      duration: 0.24
    };

    _this.slides = _this.getChildren(props.children);
    return _this;
  }

  _createClass(Gallery, [{
    key: 'initializeSlides',
    value: function initializeSlides() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      var slides = this.getSlidesCoords();
      var containerWidth = this.container.offsetWidth;
      var viewportWidth = this.viewport.offsetWidth;
      var layerWidth = slides.reduce(function (val, slide) {
        return slide.width + val;
      }, 0);
      var min = this.calcMin({ containerWidth: containerWidth, layerWidth: layerWidth, viewportWidth: viewportWidth });
      var max = 0;

      this.setState({ min: min, max: max, layerWidth: layerWidth, containerWidth: containerWidth, slides: slides }, callback);
    }
  }, {
    key: 'calcMin',
    value: function calcMin(_ref) {
      var containerWidth = _ref.containerWidth,
          layerWidth = _ref.layerWidth,
          viewportWidth = _ref.viewportWidth;

      switch (this.props.align) {
        case 'left':
          return containerWidth - layerWidth;
        case 'right':
          return viewportWidth - layerWidth;
        case 'center':
          return viewportWidth - (containerWidth - viewportWidth) / 2 - layerWidth;
      }
    }

    /**
     * Получает координаты и размеры каждого слайда
      * @returns {Array} Массив с объектами, описывающими габариты слайда
     */

  }, {
    key: 'getSlidesCoords',
    value: function getSlidesCoords() {
      var _this2 = this;

      return [].concat(this.props.children).reduce(function (acc, item, i) {
        if (item) {
          var elem = _this2.slidesStore['slide-' + i];
          var res = {
            coordX: elem.offsetLeft,
            width: elem.offsetWidth,
            id: item.props.id
          };

          acc.push(res);
        }

        return acc;
      }, []);
    }

    /**
     * Считает отступ слоя галереи во время драга
     *
     * @returns {Number} Значения отступа
     */

  }, {
    key: 'calculateDragIndent',
    value: function calculateDragIndent() {
      var _state = this.state,
          shiftX = _state.shiftX,
          deltaX = _state.deltaX,
          min = _state.min,
          max = _state.max;

      var indent = shiftX + deltaX;
      if (indent > max) {
        return max + Number((indent - max) / 3);
      } else if (indent < min) {
        return min + Number((indent - min) / 3);
      }

      return indent;
    }

    /**
     * Считает отступ слоя галереи
     *
     * @param {Number} targetIndex ID целевого слайда
     * @returns {Number} Значения отступа
     */

  }, {
    key: 'calculateIndent',
    value: function calculateIndent(targetIndex) {
      var slides = this.state.slides;


      if (!this.isDraggable()) {
        return 0;
      }

      var coordX = slides.length ? slides[targetIndex].coordX : 0;
      return this.validateIndent(-1 * coordX);
    }
  }, {
    key: 'validateIndent',
    value: function validateIndent(value) {
      var _state2 = this.state,
          min = _state2.min,
          max = _state2.max;


      if (value < min) {
        return min;
      } else if (value > max) {
        return max;
      }

      return value;
    }
  }, {
    key: 'isDraggable',
    value: function isDraggable() {
      return this.state.layerWidth > this.state.containerWidth;
    }

    /**
     * Получает индекс слайда, к которому будет осуществлен переход
     *
     * @returns {Number} Индекс слайда
     */

  }, {
    key: 'getTarget',
    value: function getTarget() {
      var _state3 = this.state,
          slides = _state3.slides,
          current = _state3.current,
          deltaX = _state3.deltaX,
          shiftX = _state3.shiftX,
          startT = _state3.startT;

      var expectDeltaX = deltaX / (new Date() - startT) * 240 * 0.6;
      var shift = shiftX + deltaX + expectDeltaX;
      var direction = deltaX < 0 ? 1 : -1;

      // Находим ближайшую границу слайда к текущему отступу
      var targetIndex = slides.reduce(function (val, item, index) {
        var previousValue = Math.abs(slides[val].coordX + shift);
        var currentValue = Math.abs(item.coordX + shift);

        return previousValue < currentValue ? val : index;
      }, current);

      if (targetIndex === current) {
        var targetSlide = current + direction;

        if (targetSlide >= 0 && targetSlide < slides.length) {
          if (Math.abs(deltaX) > slides[targetSlide].width * 0.05) {
            targetIndex = targetSlide;
          }
        }
      }

      return targetIndex;
    }
  }, {
    key: 'getChildren',
    value: function getChildren(children) {
      return [].concat(children || this.props.children).reduce(this.reduceChildren, []);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      this.initializeSlides(function () {
        _this3.setState({
          shiftX: _this3.calculateIndent(_this3.state.current)
        });
      });
      window.addEventListener('resize', this.onResize);

      if (this.props.autoplay) {
        this.setTimeout(this.props.autoplay);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.isChildrenDirty) {
        this.isChildrenDirty = false;
        this.initializeSlides();
      }
      if (prevState.current !== this.state.current && this.props.onChange) {
        this.props.onChange(this.state.current);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.slides = this.getChildren(nextProps.children);
      this.isChildrenDirty = true;

      if (nextProps.autoplay && !this.props.autoplay) {
        if (nextProps.autoplay) {
          this.setTimeout(nextProps.autoplay);
        }
      }
      if (!nextProps.autoplay && this.props.autoplay) {
        this.clearTimeout();
      }
      if (nextProps.slideIndex !== this.props.slideIndex && typeof nextProps.slideIndex === 'number') {
        this.go(nextProps.slideIndex);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
      this.clearTimeout();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state4 = this.state,
          animation = _state4.animation,
          duration = _state4.duration,
          current = _state4.current,
          dragging = _state4.dragging;

      var _props = this.props,
          children = _props.children,
          slideWidth = _props.slideWidth,
          autoplay = _props.autoplay,
          initialSlideIndex = _props.initialSlideIndex,
          slideIndex = _props.slideIndex,
          onDragStart = _props.onDragStart,
          onDragEnd = _props.onDragEnd,
          onChange = _props.onChange,
          onEnd = _props.onEnd,
          align = _props.align,
          bullets = _props.bullets,
          className = _props.className,
          restProps = _objectWithoutProperties(_props, ['children', 'slideWidth', 'autoplay', 'initialSlideIndex', 'slideIndex', 'onDragStart', 'onDragEnd', 'onChange', 'onEnd', 'align', 'bullets', 'className']);

      var indent = dragging ? this.calculateDragIndent() : this.calculateIndent(current);
      var layerStyle = {
        WebkitTransform: 'translateX(' + indent + 'px)',
        transform: 'translateX(' + indent + 'px)',
        WebkitTransition: animation ? '-webkit-transform ' + duration + 's cubic-bezier(.1, 0, .25, 1)' : 'none',
        transition: animation ? 'transform ' + duration + 's cubic-bezier(.1, 0, .25, 1)' : 'none'
      };

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, { className: (0, _classnames4.default)(baseClassNames, className, _defineProperty({
            'Gallery--dragging': dragging
          }, 'Gallery--' + this.props.align, true)), ref: this.getContainerRef }),
        _react2.default.createElement(
          _Touch2.default,
          {
            className: 'Gallery__viewport',
            onStartX: this.onStart,
            onMoveX: this.onMoveX,
            onEnd: this.onEnd,
            style: { width: slideWidth },
            ref: this.getViewportRef
          },
          _react2.default.createElement(
            'div',
            { className: 'Gallery__layer', style: layerStyle },
            this.slides
          )
        ),
        this.props.bullets && _react2.default.createElement(
          'div',
          { className: (0, _classnames4.default)('Gallery__bullets', _defineProperty({}, 'Gallery__bullets--' + this.props.bullets, true)) },
          this.slides.map(function (item, index) {
            return _react2.default.createElement('div', { className: (0, _classnames4.default)('Gallery__bullet', { 'Gallery__bullet--active': index === current }), key: index });
          })
        )
      );
    }
  }]);

  return Gallery;
}(_react.Component);

Gallery.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  slideWidth: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  autoplay: _propTypes2.default.number,
  initialSlideIndex: _propTypes2.default.number,
  slideIndex: _propTypes2.default.number,
  onDragStart: _propTypes2.default.func,
  onDragEnd: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onEnd: _propTypes2.default.func,
  align: _propTypes2.default.oneOf(['left', 'center', 'right']),
  bullets: _propTypes2.default.oneOf(['dark', 'light', false])
};
Gallery.defaultProps = {
  slideWidth: '100%',
  children: '',
  autoplay: 0,
  initialSlideIndex: 0,
  align: 'left',
  bullets: false
};

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.slidesStore = {};

  this.go = function (targetIndex) {
    _this4.setState({
      animation: true,
      shiftX: _this4.calculateIndent(targetIndex),
      current: targetIndex
    });

    if (_this4.timeout) {
      _this4.clearTimeout();
      _this4.setTimeout(_this4.props.autoplay);
    }
  };

  this.onStart = function (e) {
    _this4.setState({
      animation: false,
      startT: e.startT
    });
  };

  this.onMoveX = function (e) {
    if (!_this4.isDraggable()) {
      return;
    }

    e.originalEvent.preventDefault();

    if (e.isSlideX) {
      _this4.props.onDragStart && _this4.props.onDragStart();
      if (_this4.state.deltaX !== e.shiftX || _this4.state.dragging !== e.isSlideX) {
        _this4.setState({
          deltaX: e.shiftX,
          dragging: e.isSlideX
        });
      }

      return true;
    }
  };

  this.onEnd = function (e) {
    var targetIndex = e.isSlide ? _this4.getTarget() : _this4.state.current;
    _this4.props.onDragEnd && _this4.props.onDragEnd();

    _this4.setState({
      shiftX: _this4.calculateIndent(targetIndex),
      deltaX: 0,
      animation: true,
      current: targetIndex,
      duration: '.24'
    });

    if (_this4.props.onEnd) {
      _this4.props.onEnd({
        targetIndex: targetIndex
      });
    }

    if (_this4.timeout) {
      _this4.clearTimeout();
      _this4.setTimeout(_this4.props.autoplay);
    }

    return true;
  };

  this.onResize = function () {
    _this4.initializeSlides();

    var layerWidth = _this4.state.layerWidth;

    var containerWidth = _this4.container.offsetWidth;
    var viewportWidth = _this4.viewport.offsetWidth;

    _this4.setState({
      shiftX: _this4.calculateIndent(_this4.state.current),
      containerWidth: containerWidth,
      min: _this4.calcMin({ layerWidth: layerWidth, containerWidth: containerWidth, viewportWidth: viewportWidth }),
      animation: false
    }, function () {
      (0, _requestAnimationFrame2.default)(function () {
        return _this4.setState({ animation: true });
      });
    });
  };

  this.setTimeout = function (duration) {
    _this4.timeout = setTimeout(function () {
      var _state5 = _this4.state,
          slides = _state5.slides,
          current = _state5.current;

      var targetIndex = current < slides.length - 1 ? current + 1 : 0;

      _this4.go(targetIndex);
    }, duration);
  };

  this.clearTimeout = function () {
    clearTimeout(_this4.timeout);
  };

  this.reduceChildren = function (acc, item, i) {
    if (item) {
      var ref = _this4.getSlideRef(i);
      acc.push(_react2.default.createElement(
        'div',
        { className: 'Gallery__slide', key: 'slide-' + i, ref: ref },
        item
      ));
    }

    return acc;
  };

  this.getContainerRef = function (container) {
    _this4.container = container;
  };

  this.getViewportRef = function (viewport) {
    _this4.viewport = viewport ? viewport.container : {};
  };

  this.getSlideRef = function (id) {
    return function (slide) {
      _this4.slidesStore['slide-' + id] = slide;
    };
  };
};

exports.default = Gallery;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _Avatar = __webpack_require__(19);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Entity');

// @TODO Try to load photo
/**
 * @deprecated этот компонент устарел и будет удален в следующей мажорной версии.
 * Используйте `Cell`.
 */

var Entity = function (_Component) {
  _inherits(Entity, _Component);

  function Entity() {
    _classCallCheck(this, Entity);

    return _possibleConstructorReturn(this, (Entity.__proto__ || Object.getPrototypeOf(Entity)).apply(this, arguments));
  }

  _createClass(Entity, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          photo = _props.photo,
          title = _props.title,
          description = _props.description,
          avatarProps = _props.avatarProps,
          children = _props.children;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(baseClassNames, className), style: style },
        _react2.default.createElement(
          'div',
          { className: 'Entity__aside' },
          _react2.default.createElement(_Avatar2.default, _extends({ src: photo, alt: title, size: this.avatarSize }, avatarProps))
        ),
        _react2.default.createElement(
          'div',
          { className: 'Entity__main' },
          title && _react2.default.createElement(
            'div',
            { className: 'Entity__title' },
            title
          ),
          description && _react2.default.createElement(
            'div',
            { className: 'Entity__description' },
            description
          ),
          children && _react2.default.createElement(
            'div',
            { className: 'Entity__content' },
            children
          )
        )
      );
    }
  }, {
    key: 'avatarSize',
    get: function get() {
      switch (this.props.size) {
        case 'm':
          return 64;
        case 's':
          return 48;
        default:
          return this.props.size;
      }
    }
  }]);

  return Entity;
}(_react.Component);

Entity.propTypes = {
  style: _propTypes2.default.object,
  /**
   * @deprecated
   * Use avatarProps.size instead
   */
  size: _propTypes2.default.oneOf(['m', 's', 80, 72, 64, 56, 48, 40, 36, 32, 28]),
  photo: _propTypes2.default.string,
  title: _propTypes2.default.node,
  description: _propTypes2.default.node,
  className: _propTypes2.default.string,
  avatarProps: _propTypes2.default.shape(_Avatar2.default.propTypes),
  children: _propTypes2.default.node
};
Entity.defaultProps = {
  size: 48,
  photo: '',
  title: '',
  description: ''
};
exports.default = Entity;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassName = (0, _getClassName2.default)('InfoRow');

var InfoRow = function InfoRow(_ref) {
  var title = _ref.title,
      className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ['title', 'className', 'children']);

  return _react2.default.createElement(
    'div',
    _extends({}, restProps, { className: (0, _classnames2.default)(baseClassName, className) }),
    title && _react2.default.createElement(
      'div',
      { className: 'InfoRow__title' },
      title
    ),
    children && _react2.default.createElement(
      'div',
      null,
      children
    )
  );
};

InfoRow.propTypes = {
  title: _propTypes2.default.node.isRequired,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};

exports.default = InfoRow;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _Div = __webpack_require__(20);

var _Div2 = _interopRequireDefault(_Div);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Footer = function Footer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ['className', 'children']);

  return _react2.default.createElement(
    _Div2.default,
    _extends({}, restProps, { className: (0, _classnames2.default)('Footer', className) }),
    children
  );
};

Footer.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};

exports.default = Footer;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(7), __webpack_require__(6));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 204);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _browserSymbol = __webpack_require__(2);

var _browserSymbol2 = _interopRequireDefault(_browserSymbol);

var _browserSprite = __webpack_require__(1);

var _browserSprite2 = _interopRequireDefault(_browserSprite);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var symbol = new _browserSymbol2.default({
  "id": "chevron_24",
  "use": "chevron_24-usage",
  "viewBox": "0 0 16 24",
  "content": "<symbol viewBox=\"0 0 16 24\" id=\"chevron_24\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M0 0h16v24H0z\" /><path d=\"M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12 4.706 7.706z\" fill=\"currentColor\" /></g></symbol>"
});
var result = _browserSprite2.default.add(symbol);

var width = symbol.viewBox.split(' ')[2];
var height = symbol.viewBox.split(' ')[3];
var size = Math.max(width, height);

function SvgIcon(_ref) {
  var className = _ref.className,
      fill = _ref.fill,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "fill", "style", "getRootRef"]);

  return _react2.default.createElement(
    "div",
    _extends({}, restProps, {
      ref: getRootRef,
      className: 'Icon' + ' Icon--' + size + ' Icon--' + symbol.id + ' ' + (className || ''),
      style: _extends({}, style, { width: width + 'px', height: height + 'px' })
    }),
    _react2.default.createElement(
      "svg",
      { viewBox: symbol.viewBox, width: width, height: height, style: { display: 'block' } },
      _react2.default.createElement("use", { xlinkHref: '#' + symbol.id, style: { fill: 'currentColor', color: fill } })
    )
  );
}
exports.default = SvgIcon;

/***/ })

/******/ });
});

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _Tappable = __webpack_require__(5);

var _Tappable2 = _interopRequireDefault(_Tappable);

var _platform = __webpack_require__(4);

var _chevron = __webpack_require__(74);

var _chevron2 = _interopRequireDefault(_chevron);

var _done = __webpack_require__(22);

var _done2 = _interopRequireDefault(_done);

var _cancel = __webpack_require__(21);

var _cancel2 = _interopRequireDefault(_cancel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassNames = (0, _getClassName2.default)('Cell');

var Cell = function (_Component) {
  _inherits(Cell, _Component);

  function Cell() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Cell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cell.__proto__ || Object.getPrototypeOf(Cell)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isRemoveActivated: false,
      removeOffset: 0
    }, _this.onClick = function (e) {
      var _this$props = _this.props,
          removable = _this$props.removable,
          onClick = _this$props.onClick;

      if (e.target.tagName.toLowerCase() === 'input') {
        e.stopPropagation();
      } else if (removable) {
        return null;
      } else {
        onClick && onClick(e);
      }
    }, _this.activateRemove = function () {
      _this.setState({ isRemoveActivated: true });
      _this.document.addEventListener('click', _this.deactivateRemove);
    }, _this.deactivateRemove = function () {
      _this.setState({ isRemoveActivated: false, removeOffset: 0 });
      _this.document.removeEventListener('click', _this.deactivateRemove);
    }, _this.onRemoveClick = function (e) {
      e.nativeEvent.stopImmediatePropagation();
      e.preventDefault();
      _this.props.onRemove && _this.props.onRemove(e, _this.rootEl);
    }, _this.getRemoveRef = function (el) {
      return _this.removeButton = el;
    }, _this.getRootRef = function (el) {
      _this.rootEl = el;
      _this.props.getRootRef && _this.props.getRootRef(el);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Cell, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.document.removeEventListener('click', this.deactivateRemove);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.isRemoveActivated !== this.state.isRemoveActivated && this.state.isRemoveActivated) {
        this.setState({ removeOffset: this.removeButton.offsetWidth });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          before = _props.before,
          indicator = _props.indicator,
          asideContent = _props.asideContent,
          expandable = _props.expandable,
          onClick = _props.onClick,
          children = _props.children,
          getRootRef = _props.getRootRef,
          description = _props.description,
          selectable = _props.selectable,
          multiline = _props.multiline,
          className = _props.className,
          onRemove = _props.onRemove,
          removable = _props.removable,
          removePlaceholder = _props.removePlaceholder,
          href = _props.href,
          size = _props.size,
          bottomContent = _props.bottomContent,
          restProps = _objectWithoutProperties(_props, ['before', 'indicator', 'asideContent', 'expandable', 'onClick', 'children', 'getRootRef', 'description', 'selectable', 'multiline', 'className', 'onRemove', 'removable', 'removePlaceholder', 'href', 'size', 'bottomContent']);

      var rootProps = selectable ? {} : restProps;
      var inputProps = selectable ? restProps : {};
      var linkProps = href ? restProps : {};

      return _react2.default.createElement(
        'div',
        _extends({}, rootProps, {
          onClick: href ? null : this.onClick,
          className: (0, _classnames3.default)(baseClassNames, (_classnames = {
            'Cell--expandable': expandable,
            'Cell--multiline': multiline
          }, _defineProperty(_classnames, 'Cell--' + size, size), _defineProperty(_classnames, 'Cell--removing', this.state.removing), _classnames), className),
          ref: this.getRootRef
        }),
        _react2.default.createElement(
          _Tappable2.default,
          _extends({}, linkProps, {
            onClick: href ? this.onClick : null,
            component: selectable ? 'label' : href ? 'a' : 'div',
            className: 'Cell__in',
            href: href,
            disabled: !selectable && !onClick && !href || removable,
            style: removable ? { transform: 'translateX(-' + this.state.removeOffset + 'px)' } : null
          }),
          selectable && _react2.default.createElement('input', _extends({}, inputProps, { type: 'checkbox', className: 'Cell__checkbox' })),
          _react2.default.createElement(
            'div',
            { className: 'Cell__before' },
            selectable && osname === _platform.IOS && _react2.default.createElement(
              'div',
              { className: 'Cell__checkbox-marker' },
              _react2.default.createElement(_done2.default, null)
            ),
            removable && osname === _platform.IOS && _react2.default.createElement('div', { className: 'Cell__remove-marker', onClick: this.activateRemove }),
            before && _react2.default.createElement(
              'div',
              { className: 'Cell__before-in' },
              before
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Cell__main' },
            _react2.default.createElement(
              'div',
              { className: 'Cell__children' },
              children
            ),
            description && _react2.default.createElement(
              'div',
              { className: 'Cell__description' },
              description
            ),
            size === 'l' && bottomContent && _react2.default.createElement(
              'div',
              { className: 'Cell__bottom' },
              bottomContent
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Cell__indicator' },
            indicator
          ),
          _react2.default.createElement(
            'div',
            { className: 'Cell__aside' },
            asideContent,
            selectable && osname === _platform.ANDROID && _react2.default.createElement(
              'div',
              { className: 'Cell__checkbox-marker' },
              _react2.default.createElement(_done2.default, null)
            ),
            removable && osname === _platform.ANDROID && _react2.default.createElement(
              'div',
              { className: 'Cell__remove-marker', onClick: this.onRemoveClick },
              _react2.default.createElement(_cancel2.default, null)
            ),
            osname === _platform.IOS && expandable && _react2.default.createElement(_chevron2.default, { className: 'Cell__chevron' })
          )
        ),
        removable && osname === _platform.IOS && _react2.default.createElement(
          'div',
          {
            ref: this.getRemoveRef,
            className: 'Cell__remove',
            onClick: this.onRemoveClick,
            style: removable ? { transform: 'translateX(-' + this.state.removeOffset + 'px)' } : null
          },
          _react2.default.createElement(
            'span',
            { className: 'Cell__remove-in' },
            removePlaceholder
          )
        )
      );
    }
  }, {
    key: 'document',
    get: function get() {
      return this.context.document || document;
    }

    /**
     * предотвращает двойное срабатывание в случае с input
     * (https://github.com/vuejs/vue/issues/3699#issuecomment-247957931)
     * предотвращает клик в случае, когда включен режим removable
     * @param e
     */

  }]);

  return Cell;
}(_react.Component);

Cell.propTypes = {
  before: _propTypes2.default.node,
  indicator: _propTypes2.default.node,
  asideContent: _propTypes2.default.node,
  expandable: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func,
  multiline: _propTypes2.default.bool,
  description: _propTypes2.default.node,
  getRootRef: _propTypes2.default.func,
  /**
   * Контейнер для произвольного содержимого под `description`. Рисуется только если передать `size="l"`.
   */
  bottomContent: _propTypes2.default.node,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  /**
   * Размер влияет на выравнивание блоков по вертикали, виду сепаратора (iOS) и возможности вставлять `bottomContent`.
   */
  size: _propTypes2.default.oneOf(['m', 'l']),

  selectable: _propTypes2.default.bool,
  /**
   * Флаг для перехода в режим удаляемых ячеек. **Важно:** в этом режиме обработчик onClick вызываться не будет.
   */
  removable: _propTypes2.default.bool,
  onRemove: _propTypes2.default.func,
  /**
   * iOS only. Текст в выезжаеющей кнопке для удаления ячейки.
   */
  removePlaceholder: _propTypes2.default.node,

  href: _propTypes2.default.string
};
Cell.defaultProps = {
  before: null,
  indicator: '',
  asideContent: '',
  bottomContent: null,
  expandable: false,
  children: '',
  selectable: false,
  multiline: false,
  removable: false,
  size: 'm',
  removePlaceholder: 'Удалить'
};
Cell.contextTypes = {
  document: _propTypes2.default.any
};
exports.default = Cell;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassNames = (0, _getClassName2.default)('List');

var List = function List(_ref) {
  var className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ['className', 'children']);

  return _react2.default.createElement(
    'div',
    _extends({}, restProps, { className: (0, _classnames2.default)(baseClassNames, className) }),
    children
  );
};

List.propTypes = {
  style: _propTypes2.default.object,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};
List.defaultProps = {
  style: {},
  children: ''
};

exports.default = List;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _Header = __webpack_require__(23);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Group');

var Group = function (_Component) {
  _inherits(Group, _Component);

  function Group() {
    _classCallCheck(this, Group);

    return _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).apply(this, arguments));
  }

  _createClass(Group, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          description = _props.description,
          className = _props.className,
          children = _props.children,
          getRootRef = _props.getRootRef,
          restProps = _objectWithoutProperties(_props, ['title', 'description', 'className', 'children', 'getRootRef']);

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, { ref: getRootRef, className: (0, _classnames2.default)(baseClassNames, className) }),
        title && _react2.default.createElement(
          _Header2.default,
          { level: '2' },
          title
        ),
        children && _react2.default.createElement(
          'div',
          { className: 'Group__content' },
          children
        ),
        description && _react2.default.createElement(
          'div',
          { className: 'Group__description' },
          description
        )
      );
    }
  }]);

  return Group;
}(_react.Component);

Group.propTypes = {
  style: _propTypes2.default.object,
  title: _propTypes2.default.node,
  description: _propTypes2.default.node,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  getRootRef: _propTypes2.default.func
};
Group.defaultProps = {
  title: null,
  description: null
};
exports.default = Group;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IOS_PART_HEIGHT = 0.275;

var IosSpinner = function (_Component) {
  _inherits(IosSpinner, _Component);

  function IosSpinner(props) {
    _classCallCheck(this, IosSpinner);

    var _this = _possibleConstructorReturn(this, (IosSpinner.__proto__ || Object.getPrototypeOf(IosSpinner)).call(this, props));

    var c = 0.5 * props.size;
    var r = Math.max(Math.floor(props.size * 0.075), 2);
    var ty = Math.ceil(-0.5 * (1 - IOS_PART_HEIGHT) * props.size);

    var iosStyles = [];

    for (var i = 0; i < 12; i++) {
      iosStyles.push({
        transform: 'rotate(' + i * 30 + ', ' + c + ', ' + c + ') translate(0 ' + ty + ')',
        rx: r,
        ry: r,
        style: {
          animationDelay: Math.round(props.duration / 12 * 100 * (-11 + i)) / 100 + 's'
        }
      });
    }

    _this.state = { iosStyles: iosStyles };
    return _this;
  }

  _createClass(IosSpinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          on = _props.on,
          progress = _props.progress;
      var iosStyles = this.state.iosStyles;


      var parts = iosStyles;

      if (!on) {
        parts = iosStyles.slice(0, Math.round(progress / (100 / 12)));
      }

      return parts.map(function (item, i) {
        return _react2.default.createElement('rect', _extends({
          x: '46.25%',
          y: '36.25%',
          width: '7.5%',
          height: '27.5%',
          className: 'Spinner__part'
        }, item, {
          key: 'spinner-part-' + i
        }));
      });
    }
  }]);

  return IosSpinner;
}(_react.Component);

IosSpinner.propTypes = {
  size: _propTypes2.default.number,
  duration: _propTypes2.default.number,
  on: _propTypes2.default.bool,
  progress: _propTypes2.default.number
};
IosSpinner.defaultProps = {
  size: 20,
  duration: 1.4,
  on: true,
  progress: null
};
exports.default = IosSpinner;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keyframes = __webpack_require__(26);

var _keyframes2 = _interopRequireDefault(_keyframes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AndroidSpinner = function (_Component) {
  _inherits(AndroidSpinner, _Component);

  function AndroidSpinner(props) {
    _classCallCheck(this, AndroidSpinner);

    var _this = _possibleConstructorReturn(this, (AndroidSpinner.__proto__ || Object.getPrototypeOf(AndroidSpinner)).call(this, props));

    var id = Math.round(Math.random() * 1e6).toString(16);
    var offset = Math.round(Math.PI * props.size);
    var c = 0.5 * props.size;

    _this.state = {
      c: c,
      id: id,
      offset: offset,
      animation: (0, _keyframes2.default)('dash' + id, {
        '0%': {
          'stroke-dashoffset': offset
        },
        '50%': {
          'stroke-dashoffset': Math.round(0.25 * offset),
          'transform': 'rotate(135deg)'
        },
        '100%': {
          'stroke-dashoffset': offset,
          'transform': 'rotate(360deg)'
        }
      })
    };
    return _this;
  }

  _createClass(AndroidSpinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          size = _props.size,
          on = _props.on,
          progress = _props.progress,
          duration = _props.duration,
          strokeWidth = _props.strokeWidth;
      var _state = this.state,
          id = _state.id,
          offset = _state.offset,
          animation = _state.animation;


      var dashoffset = offset;
      var transform = '';

      if (!on) {
        dashoffset = Math.abs(0.02 * (progress - 50) * 0.75 * offset) + 0.25 * offset;

        if (progress <= 50) {
          transform = 'rotate(' + Math.round(progress * 135 / 50) + 'deg)';
        } else {
          transform = 'rotate(' + (135 + Math.round((progress - 50) * 360 / 50)) + 'deg)';
        }
      }

      return _react2.default.createElement(
        'g',
        {
          style: {
            width: size,
            height: size,
            transformOrigin: 0.5 * size + 'px ' + 0.5 * size + 'px',
            transform: transform
          }
        },
        _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: animation } }),
        _react2.default.createElement('circle', {
          className: 'Spinner__path',
          fill: 'none',
          strokeDasharray: offset,
          strokeDashoffset: dashoffset,
          strokeWidth: strokeWidth,
          style: {
            animationName: on ? 'dash' + id : 'none',
            animationTimingFunction: 'ease-in-out',
            animationDuration: duration + 's',
            animationIterationCount: 'infinite'
          },
          cx: 0.5 * size,
          cy: 0.5 * size,
          r: 0.5 * size - 0.5 * strokeWidth
        })
      );
    }
  }]);

  return AndroidSpinner;
}(_react.Component);

AndroidSpinner.propTypes = {
  size: _propTypes2.default.number,
  strokeWidth: _propTypes2.default.number,
  duration: _propTypes2.default.number,
  on: _propTypes2.default.bool,
  progress: _propTypes2.default.number
};
AndroidSpinner.defaultProps = {
  size: 38,
  strokeWidth: 4,
  duration: 1.4,
  on: true,
  progress: null
};
exports.default = AndroidSpinner;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ScreenSpinner;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Spinner = __webpack_require__(27);

var _Spinner2 = _interopRequireDefault(_Spinner);

var _PopoutWrapper = __webpack_require__(10);

var _PopoutWrapper2 = _interopRequireDefault(_PopoutWrapper);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassName = (0, _getClassName2.default)('ScreenSpinner');

function ScreenSpinner(_ref) {
  var style = _ref.style,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ['style', 'className']);

  return _react2.default.createElement(
    _PopoutWrapper2.default,
    { className: (0, _classnames2.default)(baseClassName, className), style: style },
    _react2.default.createElement(_Spinner2.default, restProps)
  );
}

ScreenSpinner.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};

ScreenSpinner.defaultProps = {};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brToNl = brToNl;
function brToNl() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var regex = /<br\s*\/?>/gi;

  return str.replace(regex, '\n');
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _removeObjectKeys = __webpack_require__(13);

var _removeObjectKeys2 = _interopRequireDefault(_removeObjectKeys);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Alert = __webpack_require__(30);

var _Alert2 = _interopRequireDefault(_Alert);

var _ActionSheet = __webpack_require__(29);

var _ActionSheet2 = _interopRequireDefault(_ActionSheet);

var _ActionSheetItem = __webpack_require__(28);

var _ActionSheetItem2 = _interopRequireDefault(_ActionSheetItem);

var _string = __webpack_require__(81);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var actionId = 1;

var NativePopouts = function (_React$Component) {
  _inherits(NativePopouts, _React$Component);

  function NativePopouts() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NativePopouts);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NativePopouts.__proto__ || Object.getPrototypeOf(NativePopouts)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      popout: null
    }, _this.actions = [], _this.actionsStore = {}, _this.vkuiListener = function (e) {
      if (e.type === 'VKWebAppEvent' && e.detail && e.detail.action) {
        if (_this.actionsStore.hasOwnProperty(e.detail.action)) {
          _this.actionsStore[e.detail.action](e.detail);
          _this.props.popout && _this.props.popout.onClose && _this.props.popout.onClose();
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NativePopouts, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.vkuiConnect.subscribe(this.vkuiListener);
      if (this.props.popout) {
        this.renderPopout(this.props);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.vkuiConnect.unsubscribe(this.vkuiListener);
    }
  }, {
    key: 'renderNativeAlert',
    value: function renderNativeAlert(popout) {
      var style = popout.style,
          title = popout.title,
          message = popout.text;

      this.props.vkuiConnect.send('VKWebAppAlert', {
        style: style,
        title: (0, _string.brToNl)(title),
        message: (0, _string.brToNl)(message),
        actions: this.actions.map(function (item) {
          return (0, _removeObjectKeys2.default)(item, ['action']);
        })
      });
    }
  }, {
    key: 'renderUIAlert',
    value: function renderUIAlert(popout) {
      var title = popout.title,
          text = popout.text,
          onClose = popout.onClose,
          actionsLayout = popout.actionsLayout;

      this.setState({
        popout: _react2.default.createElement(
          _Alert2.default,
          {
            actions: this.actions.map(function (item) {
              return (0, _removeObjectKeys2.default)(item, ['params']);
            }),
            onClose: onClose,
            actionsLayout: actionsLayout
          },
          title && _react2.default.createElement(
            'h2',
            null,
            title
          ),
          text && _react2.default.createElement(
            'p',
            null,
            text
          )
        )
      });
    }
  }, {
    key: 'renderNativeSheet',
    value: function renderNativeSheet(popout) {
      var style = popout.style;

      this.props.vkuiConnect.send('VKWebAppAlert', {
        style: style,
        actions: this.actions.map(function (item) {
          return (0, _removeObjectKeys2.default)(item, ['action']);
        })
      });
    }
  }, {
    key: 'renderUISheet',
    value: function renderUISheet(popout) {
      var title = popout.title,
          text = popout.text,
          onClose = popout.onClose;

      this.setState({
        popout: _react2.default.createElement(
          _ActionSheet2.default,
          { title: title, text: text, onClose: onClose },
          this.actions.map(function (item, index) {
            return _react2.default.createElement(
              _ActionSheetItem2.default,
              { autoclose: item.autoclose, theme: item.style, onClick: item.action, key: '' + index },
              item.title
            );
          })
        )
      });
    }
  }, {
    key: 'closeUIPopout',
    value: function closeUIPopout() {
      this.setState({ popout: null });
    }
  }, {
    key: 'renderPopout',
    value: function renderPopout(props) {
      if (props.popout.style) {
        this.actions = props.popout.actions.map(function (item) {
          return Object.assign({}, item, {
            autoclose: item.hasOwnProperty('autoclose') ? item.autoclose : true,
            action: item.action || props.popout.onClose,
            handler: Object.assign({}, item.params, { action: 'action-' + actionId++ })
          });
        });

        this.actionsStore = this.actions.reduce(function (res, item) {
          res[item.handler.action] = item.action;return res;
        }, {});

        switch (props.popout.style) {
          case 'alert':
            this.context.isWebView ? this.renderNativeAlert(props.popout) : this.renderUIAlert(props.popout);
            break;
          case 'actionSheet':
            this.context.isWebView ? this.renderNativeSheet(props.popout) : this.renderUISheet(props.popout);
            break;
        }
      } else {
        this.setState({ popout: props.popout });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.popout && this.props.popout) {
        this.closeUIPopout();
      }
      if (nextProps.popout && nextProps.popout !== this.props.popout) {
        this.context.isWebView && this.closeUIPopout();
        this.renderPopout(nextProps);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var Component = this.props.component;
      return _react2.default.createElement(Component, _extends({}, (0, _removeObjectKeys2.default)(this.props, ['popout']), { popout: this.state.popout }));
    }
  }]);

  return NativePopouts;
}(_react2.default.Component);

NativePopouts.propTypes = {
  popout: _propTypes2.default.oneOfType([_propTypes2.default.shape({
    style: _propTypes2.default.oneOf(['alert', 'actionSheet']).isRequired,
    title: _propTypes2.default.string,
    text: _propTypes2.default.string,
    onClose: _propTypes2.default.func.isRequired,
    actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      style: _propTypes2.default.oneOf(['cancel', 'default', 'destructive']),
      title: _propTypes2.default.string,
      action: _propTypes2.default.func
    }))
  }), _propTypes2.default.element]),
  vkuiConnect: _propTypes2.default.object.isRequired,
  /**
   * Root or View
   */
  component: _propTypes2.default.func.isRequired
};
NativePopouts.contextTypes = {
  isWebView: _propTypes2.default.bool
};
exports.default = NativePopouts;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HorizontalScroll = function (_React$Component) {
  _inherits(HorizontalScroll, _React$Component);

  function HorizontalScroll() {
    _classCallCheck(this, HorizontalScroll);

    return _possibleConstructorReturn(this, (HorizontalScroll.__proto__ || Object.getPrototypeOf(HorizontalScroll)).apply(this, arguments));
  }

  _createClass(HorizontalScroll, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          restProps = _objectWithoutProperties(_props, ['children', 'className']);

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, { className: (0, _classnames2.default)('HorizontalScroll', className) }),
        _react2.default.createElement(
          'div',
          { className: 'HorizontalScroll__in' },
          children
        )
      );
    }
  }]);

  return HorizontalScroll;
}(_react2.default.Component);

HorizontalScroll.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};
exports.default = HorizontalScroll;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassName = (0, _getClassName2.default)('InnerScroll');

var InnerScroll = function (_React$Component) {
  _inherits(InnerScroll, _React$Component);

  function InnerScroll() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InnerScroll);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InnerScroll.__proto__ || Object.getPrototypeOf(InnerScroll)).call.apply(_ref, [this].concat(args))), _this), _this.onScroll = function (e) {
      if (_this.el.scrollTop <= 0) {
        _this.el.scrollTop = 1;
      } else if (_this.el.scrollTop >= _this.el.scrollHeight - _this.el.offsetHeight) {
        _this.el.scrollTop = _this.el.scrollHeight - _this.el.offsetHeight - 1;
      }

      _this.props.onScroll && _this.props.onScroll(e);
    }, _this.ref = function (el) {
      return _this.el = el;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InnerScroll, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.el.scrollTop = 1;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          onScroll = _props.onScroll,
          restProps = _objectWithoutProperties(_props, ['className', 'children', 'onScroll']);

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, {
          className: (0, _classnames2.default)(baseClassName, className),
          onScroll: this.onScroll,
          ref: this.getRef
        }),
        children
      );
    }
  }]);

  return InnerScroll;
}(_react2.default.Component);

InnerScroll.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  style: _propTypes2.default.object,
  onScroll: _propTypes2.default.func
};
exports.default = InnerScroll;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassName = (0, _getClassName2.default)('TabbarItem');

var TabbarItem = function (_React$Component) {
  _inherits(TabbarItem, _React$Component);

  function TabbarItem() {
    _classCallCheck(this, TabbarItem);

    return _possibleConstructorReturn(this, (TabbarItem.__proto__ || Object.getPrototypeOf(TabbarItem)).apply(this, arguments));
  }

  _createClass(TabbarItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          selected = _props.selected,
          label = _props.label,
          restProps = _objectWithoutProperties(_props, ['className', 'children', 'selected', 'label']);

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, { className: (0, _classnames2.default)(baseClassName, className, {
            'TabbarItem--selected': selected
          }) }),
        _react2.default.createElement(
          'div',
          { className: 'TabbarItem__in' },
          children,
          label && _react2.default.createElement(
            'span',
            { className: 'TabbarItem__label' },
            label
          )
        )
      );
    }
  }]);

  return TabbarItem;
}(_react2.default.Component);

TabbarItem.propTypes = {
  className: _propTypes2.default.string,
  selected: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  label: _propTypes2.default.node
};
exports.default = TabbarItem;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassName = (0, _getClassName2.default)('Tabbar');

var Tabbar = function (_React$Component) {
  _inherits(Tabbar, _React$Component);

  function Tabbar() {
    _classCallCheck(this, Tabbar);

    return _possibleConstructorReturn(this, (Tabbar.__proto__ || Object.getPrototypeOf(Tabbar)).apply(this, arguments));
  }

  _createClass(Tabbar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          shadow = _props.shadow;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(baseClassName, className, {
            'Tabbar--shadow': shadow
          }), style: { paddingBottom: this.context.insets && this.context.insets.bottom || null } },
        children
      );
    }
  }]);

  return Tabbar;
}(_react2.default.Component);

Tabbar.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  /**
   * флаг для показа/скрытия верхней тени (Android) или границы (iOS)
   */
  shadow: _propTypes2.default.bool
};
Tabbar.defaultProps = {
  shadow: true
};
Tabbar.contextTypes = {
  insets: _propTypes2.default.shape({
    bottom: _propTypes2.default.number
  })
};
exports.default = Tabbar;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassName = (0, _getClassName2.default)('Epic');

var Epic = function (_React$Component) {
  _inherits(Epic, _React$Component);

  function Epic() {
    _classCallCheck(this, Epic);

    return _possibleConstructorReturn(this, (Epic.__proto__ || Object.getPrototypeOf(Epic)).apply(this, arguments));
  }

  _createClass(Epic, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        hasTabbar: this.props.hasOwnProperty('tabbar')
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          activeStory = _props.activeStory,
          tabbar = _props.tabbar,
          children = _props.children,
          restProps = _objectWithoutProperties(_props, ['className', 'activeStory', 'tabbar', 'children']);

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, { className: (0, _classnames2.default)(baseClassName, className) }),
        _react2.default.Children.toArray(children).find(function (item) {
          return item.props.id === activeStory;
        }),
        tabbar
      );
    }
  }]);

  return Epic;
}(_react2.default.Component);

Epic.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  tabbar: _propTypes2.default.node.isRequired,
  activeStory: _propTypes2.default.string.isRequired
};
Epic.childContextTypes = {
  hasTabbar: _propTypes2.default.bool
};
exports.default = Epic;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _FixedLayout = __webpack_require__(12);

var _FixedLayout2 = _interopRequireDefault(_FixedLayout);

var _transitionEvents = __webpack_require__(9);

var _transitionEvents2 = _interopRequireDefault(_transitionEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('HeaderContext');

var HeaderContext = function (_React$Component) {
  _inherits(HeaderContext, _React$Component);

  function HeaderContext() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HeaderContext);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HeaderContext.__proto__ || Object.getPrototypeOf(HeaderContext)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      closing: false
    }, _this.onAnimationFinish = function () {
      return _this.setState({ closing: false });
    }, _this.getRef = function (el) {
      return _this.el = el;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeaderContext, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.opened !== this.props.opened) {
        if (nextProps.opened === false) {
          this.setState({ closing: true });
          this.waitAnimationFinish(this.onAnimationFinish);
        } else {
          clearTimeout(this.closeAnimationTimeiout);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.closeAnimationTimeiout);
    }
  }, {
    key: 'waitAnimationFinish',
    value: function waitAnimationFinish(eventHandler) {
      if (_transitionEvents2.default.supported) {
        var eventName = _transitionEvents2.default.prefix ? _transitionEvents2.default.prefix + 'AnimationEnd' : 'animationend';
        this.el.removeEventListener(eventName, eventHandler);
        this.el.addEventListener(eventName, eventHandler);
      } else {
        this.closeAnimationTimeiout = setTimeout(eventHandler.bind(this), 200);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          opened = _props.opened,
          onClose = _props.onClose,
          restProps = _objectWithoutProperties(_props, ['children', 'className', 'opened', 'onClose']);

      return _react2.default.createElement(
        _FixedLayout2.default,
        _extends({}, restProps, { className: (0, _classnames2.default)(baseClassNames, {
            'HeaderContext--opened': opened,
            'HeaderContext--closing': this.state.closing
          }, className), vertical: 'top' }),
        _react2.default.createElement(
          'div',
          { className: 'HeaderContext__in', ref: this.getRef },
          (opened || this.state.closing) && children
        ),
        (opened || this.state.closing) && _react2.default.createElement('div', { onClick: onClose, className: 'HeaderContext__fade' })
      );
    }
  }]);

  return HeaderContext;
}(_react2.default.Component);

HeaderContext.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  onClose: _propTypes2.default.func.isRequired,
  opened: _propTypes2.default.bool.isRequired
};
HeaderContext.defaultProps = {
  opened: false
};
exports.default = HeaderContext;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _platform = __webpack_require__(4);

var _Tappable = __webpack_require__(5);

var _Tappable2 = _interopRequireDefault(_Tappable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var osname = (0, _platform.platform)();
var baseClassNames = (0, _getClassName2.default)('PanelHeaderContent');

var PanelHeaderContent = function PanelHeaderContent(_ref) {
  var className = _ref.className,
      style = _ref.style,
      aside = _ref.aside,
      status = _ref.status,
      before = _ref.before,
      children = _ref.children,
      onClick = _ref.onClick,
      restProps = _objectWithoutProperties(_ref, ['className', 'style', 'aside', 'status', 'before', 'children', 'onClick']);

  var InComponent = onClick ? _Tappable2.default : 'div';
  var rootProps = onClick ? {} : restProps;
  var inProps = onClick ? _extends({}, restProps, { activeEffectDelay: 200 }) : {};

  return _react2.default.createElement(
    'div',
    _extends({}, rootProps, { className: (0, _classnames2.default)(baseClassNames, className), style: style }),
    osname === _platform.ANDROID && before && _react2.default.createElement(
      'div',
      { className: 'PanelHeaderContent__before' },
      before
    ),
    _react2.default.createElement(
      InComponent,
      _extends({}, inProps, { className: 'PanelHeaderContent__in', onClick: onClick }),
      status && _react2.default.createElement(
        'div',
        { className: 'PanelHeaderContent__status' },
        status
      ),
      _react2.default.createElement(
        'div',
        { className: 'PanelHeaderContent__children' },
        _react2.default.createElement(
          'span',
          null,
          children
        ),
        aside && _react2.default.createElement(
          'div',
          { className: 'PanelHeaderContent__aside' },
          aside
        )
      )
    )
  );
};

PanelHeaderContent.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  aside: _propTypes2.default.node,
  status: _propTypes2.default.node,
  onClick: _propTypes2.default.func,
  /**
   * Android only
   */
  before: _propTypes2.default.node
};

exports.default = PanelHeaderContent;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(2);

var _classnames3 = _interopRequireDefault(_classnames2);

var _constants = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Panel');

var Panel = function (_Component) {
  _inherits(Panel, _Component);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
  }

  _createClass(Panel, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        panel: this.props.id
      };
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref) {
      var optimized = _ref.optimized,
          isNext = _ref.isNext,
          isPrev = _ref.isPrev;

      return optimized ? !isNext && !isPrev : true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          centered = _props.centered,
          children = _props.children,
          isPrev = _props.isPrev,
          isNext = _props.isNext,
          theme = _props.theme,
          optimized = _props.optimized,
          restProps = _objectWithoutProperties(_props, ['className', 'centered', 'children', 'isPrev', 'isNext', 'theme', 'optimized']);

      var tabbarPadding = this.context.hasTabbar ? _constants.tabbarHeight : 0;

      return _react2.default.createElement(
        'div',
        _extends({}, restProps, { className: (0, _classnames3.default)(baseClassNames, className, _defineProperty({
            'Panel--centered': centered
          }, 'Panel--tm-' + theme, theme)) }),
        _react2.default.createElement(
          'div',
          { className: 'Panel__in', style: {
              paddingBottom: this.context.insets && this.context.insets.bottom ? this.context.insets.bottom + tabbarPadding : null
            } },
          _react2.default.createElement('div', { className: 'Panel__in-before' }),
          children,
          _react2.default.createElement('div', { className: 'Panel__in-after' })
        )
      );
    }
  }, {
    key: 'insets',
    get: function get() {
      return this.context.insets || {};
    }
  }]);

  return Panel;
}(_react.Component);

Panel.childContextTypes = {
  panel: _propTypes2.default.string
};
Panel.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  theme: _propTypes2.default.oneOf(['white', 'gray']),
  id: _propTypes2.default.string.isRequired,
  optimized: _propTypes2.default.bool,
  centered: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  /**
   * @ignore
   */
  isPrev: _propTypes2.default.bool,
  /**
   * @ignore
   */
  isNext: _propTypes2.default.bool
};
Panel.defaultProps = {
  children: '',
  theme: 'gray',
  centered: false,
  optimized: true
};
Panel.contextTypes = {
  insets: _propTypes2.default.shape({
    top: _propTypes2.default.number,
    right: _propTypes2.default.number,
    bottom: _propTypes2.default.number,
    left: _propTypes2.default.number
  }),
  hasTabbar: _propTypes2.default.bool
};
exports.default = Panel;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = animate;

var _requestAnimationFrame = __webpack_require__(11);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function animate(options) {
  if (typeof window === 'undefined') {
    return;
  }

  var start = window.performance.now();

  (0, _requestAnimationFrame2.default)(function animate(time) {
    var timeFraction = (time - start) / options.duration;

    if (timeFraction > 1) {
      timeFraction = 1;
    }

    var progress = options.timing(timeFraction);

    options.draw(progress);

    if (timeFraction < 1) {
      (0, _requestAnimationFrame2.default)(animate);
    }
  });
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(3);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _transitionEvents = __webpack_require__(9);

var _transitionEvents2 = _interopRequireDefault(_transitionEvents);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassName = (0, _getClassName2.default)('Root');

var Root = function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root(props) {
    _classCallCheck(this, Root);

    var _this = _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this));

    _this.onAnimationEnd = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { manual: true };

      if (['root-android-animation-hide-back', 'root-android-animation-show-forward', 'root-ios-animation-hide-back', 'root-ios-animation-show-forward'].indexOf(e.animationName) > -1 || e.manual) {
        var isBack = _this.state.isBack;
        _this.setState({
          activeView: _this.state.nextView,
          prevView: null,
          nextView: null,
          visibleViews: [_this.state.nextView],
          transition: false,
          isBack: undefined
        }, function () {
          isBack ? _this.window.scrollTo(0, _this.state.scrolls[_this.state.activeView]) : _this.window.scrollTo(0, 0);
          _this.props.onTransition && _this.props.onTransition(_this.state.isBack);
        });
      }
    };

    _this.state = {
      activeView: props.activeView,
      prevView: null,
      nextView: null,
      visibleViews: [props.activeView],
      isBack: undefined,
      scrolls: {}
    };

    _this.arrayChildren = _react2.default.Children.toArray(props.children);
    return _this;
  }

  _createClass(Root, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.popout && !this.props.popout) {
        this.blurActiveElement();
      }

      if (nextProps.children !== this.props.children) {
        this.arrayChildren = _react2.default.Children.toArray(nextProps.children);
      }

      if (nextProps.activeView !== this.props.activeView) {
        var pageYOffset = this.window.pageYOffset;
        var firstLayerId = this.props.children.find(function (view) {
          return view.props.id === _this2.props.activeView || view.props.id === nextProps.activeView;
        }).props.id;
        var isBack = firstLayerId === nextProps.activeView;

        this.blurActiveElement();

        var nextView = nextProps.activeView;
        var prevView = this.props.activeView;

        this.setState({
          scrolls: Object.assign({}, this.state.scrolls, _defineProperty({}, this.props.activeView, pageYOffset)),
          transition: true,
          activeView: null,
          nextView: nextView,
          prevView: prevView,
          visibleViews: [nextView, prevView],
          isBack: isBack
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevState.transition && this.state.transition) {
        var prevViewElement = this.document.getElementById('view-' + this.state.prevView);
        var nextViewElement = this.document.getElementById('view-' + this.state.nextView);

        prevViewElement.querySelector('.View__panel').scrollTop = this.state.scrolls[this.state.prevView];

        if (this.state.isBack) {
          nextViewElement.querySelector('.View__panel').scrollTop = this.state.scrolls[this.state.nextView];
        }
        this.waitAnimationFinish(this.state.isBack ? prevViewElement : nextViewElement, this.onAnimationEnd);
      }
    }
  }, {
    key: 'waitAnimationFinish',
    value: function waitAnimationFinish(elem, eventHandler) {
      if (_transitionEvents2.default.supported) {
        var eventName = _transitionEvents2.default.prefix ? _transitionEvents2.default.prefix + 'AnimationEnd' : 'animationend';

        elem.removeEventListener(eventName, eventHandler);
        elem.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), osname === _platform.ANDROID ? 300 : 600);
      }
    }
  }, {
    key: 'blurActiveElement',
    value: function blurActiveElement() {
      if (typeof this.window !== 'undefined' && this.document.activeElement) {
        this.document.activeElement.blur();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var Views = this.arrayChildren.filter(function (View) {
        return _this3.state.visibleViews.indexOf(View.props.id) >= 0;
      });
      var _state = this.state,
          transition = _state.transition,
          isBack = _state.isBack,
          prevView = _state.prevView,
          activeView = _state.activeView,
          nextView = _state.nextView;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(baseClassName, { 'Root--transition': transition }) },
        Views.map(function (View) {
          return _react2.default.createElement(
            'div',
            { key: View.props.id, id: 'view-' + View.props.id, className: (0, _classnames2.default)('Root__view', {
                'Root__view--hide-back': View.props.id === prevView && isBack,
                'Root__view--hide-forward': View.props.id === prevView && !isBack,
                'Root__view--show-back': View.props.id === nextView && isBack,
                'Root__view--show-forward': View.props.id === nextView && !isBack,
                'Root__view--active': View.props.id === activeView
              }) },
            _react2.default.cloneElement(View, {
              inRoot: true,
              isNext: View.props.id === nextView,
              isPrev: View.props.id === prevView
            })
          );
        }),
        this.props.popout && _react2.default.createElement(
          'div',
          { className: 'Root__popout' },
          this.props.popout
        )
      );
    }
  }, {
    key: 'document',
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: 'window',
    get: function get() {
      return this.context.window || window;
    }
  }]);

  return Root;
}(_react2.default.Component);

Root.propTypes = {
  activeView: _propTypes2.default.string.isRequired,
  popout: _propTypes2.default.node,
  onTransition: _propTypes2.default.func,
  children: _propTypes2.default.node
};
Root.defaultProps = {
  popout: null
};
Root.contextTypes = {
  window: _propTypes2.default.any,
  document: _propTypes2.default.any
};
exports.default = Root;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.v = exports.colors = exports.isWebView = exports.requestAnimationFrame = exports.getClassName = exports.querystring = exports.request = exports.removeObjectKeys = exports.IOS = exports.ANDROID = exports.platform = exports.getOffsetRect = exports.keyframes = exports.classnames = exports.ConfigProvider = exports.Touch = exports.Tappable = exports.Div = exports.SelectMimicry = exports.Select = exports.Checkbox = exports.Radio = exports.Textarea = exports.RangeSlider = exports.Slider = exports.Input = exports.File = exports.Switch = exports.FormLayoutGroup = exports.FormLayout = exports.Tooltip = exports.Link = exports.Spinner = exports.FixedTabs = exports.TabsItem = exports.Tabs = exports.Search = exports.Progress = exports.Avatar = exports.Gallery = exports.Entity = exports.InfoRow = exports.Footer = exports.ListItem = exports.Cell = exports.List = exports.Group = exports.Header = exports.CellButton = exports.Button = exports.ScreenSpinner = exports.ActionSheetItem = exports.ActionSheet = exports.Alert = exports.PopoutWrapper = exports.NativePopouts = exports.FixedLayout = exports.HorizontalScroll = exports.InnerScroll = exports.TabbarItem = exports.Tabbar = exports.Epic = exports.HeaderContext = exports.PanelHeaderContent = exports.PanelHeader = exports.HeaderButton = exports.Panel = exports.View = exports.Root = undefined;

var _Root = __webpack_require__(92);

Object.defineProperty(exports, 'Root', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Root).default;
  }
});

var _View = __webpack_require__(37);

Object.defineProperty(exports, 'View', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_View).default;
  }
});

var _Panel = __webpack_require__(90);

Object.defineProperty(exports, 'Panel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Panel).default;
  }
});

var _HeaderButton = __webpack_require__(32);

Object.defineProperty(exports, 'HeaderButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_HeaderButton).default;
  }
});

var _PanelHeader = __webpack_require__(35);

Object.defineProperty(exports, 'PanelHeader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PanelHeader).default;
  }
});

var _PanelHeaderContent = __webpack_require__(89);

Object.defineProperty(exports, 'PanelHeaderContent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PanelHeaderContent).default;
  }
});

var _HeaderContext = __webpack_require__(88);

Object.defineProperty(exports, 'HeaderContext', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_HeaderContext).default;
  }
});

var _Epic = __webpack_require__(87);

Object.defineProperty(exports, 'Epic', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Epic).default;
  }
});

var _Tabbar = __webpack_require__(86);

Object.defineProperty(exports, 'Tabbar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tabbar).default;
  }
});

var _TabbarItem = __webpack_require__(85);

Object.defineProperty(exports, 'TabbarItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TabbarItem).default;
  }
});

var _InnerScroll = __webpack_require__(84);

Object.defineProperty(exports, 'InnerScroll', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_InnerScroll).default;
  }
});

var _HorizontalScroll = __webpack_require__(83);

Object.defineProperty(exports, 'HorizontalScroll', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_HorizontalScroll).default;
  }
});

var _FixedLayout = __webpack_require__(12);

Object.defineProperty(exports, 'FixedLayout', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FixedLayout).default;
  }
});

var _NativePopouts = __webpack_require__(82);

Object.defineProperty(exports, 'NativePopouts', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NativePopouts).default;
  }
});

var _PopoutWrapper = __webpack_require__(10);

Object.defineProperty(exports, 'PopoutWrapper', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PopoutWrapper).default;
  }
});

var _Alert = __webpack_require__(30);

Object.defineProperty(exports, 'Alert', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Alert).default;
  }
});

var _ActionSheet = __webpack_require__(29);

Object.defineProperty(exports, 'ActionSheet', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ActionSheet).default;
  }
});

var _ActionSheetItem = __webpack_require__(28);

Object.defineProperty(exports, 'ActionSheetItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ActionSheetItem).default;
  }
});

var _ScreenSpinner = __webpack_require__(80);

Object.defineProperty(exports, 'ScreenSpinner', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScreenSpinner).default;
  }
});

var _Button = __webpack_require__(25);

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Button).default;
  }
});

var _CellButton = __webpack_require__(24);

Object.defineProperty(exports, 'CellButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CellButton).default;
  }
});

var _Header = __webpack_require__(23);

Object.defineProperty(exports, 'Header', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Header).default;
  }
});

var _Group = __webpack_require__(77);

Object.defineProperty(exports, 'Group', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Group).default;
  }
});

var _List = __webpack_require__(76);

Object.defineProperty(exports, 'List', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_List).default;
  }
});

var _Cell = __webpack_require__(75);

Object.defineProperty(exports, 'Cell', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Cell).default;
  }
});
Object.defineProperty(exports, 'ListItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Cell).default;
  }
});

var _Footer = __webpack_require__(73);

Object.defineProperty(exports, 'Footer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Footer).default;
  }
});

var _InfoRow = __webpack_require__(72);

Object.defineProperty(exports, 'InfoRow', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_InfoRow).default;
  }
});

var _Entity = __webpack_require__(71);

Object.defineProperty(exports, 'Entity', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Entity).default;
  }
});

var _Gallery = __webpack_require__(70);

Object.defineProperty(exports, 'Gallery', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Gallery).default;
  }
});

var _Avatar = __webpack_require__(19);

Object.defineProperty(exports, 'Avatar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Avatar).default;
  }
});

var _Progress = __webpack_require__(69);

Object.defineProperty(exports, 'Progress', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Progress).default;
  }
});

var _Search = __webpack_require__(68);

Object.defineProperty(exports, 'Search', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Search).default;
  }
});

var _Tabs = __webpack_require__(18);

Object.defineProperty(exports, 'Tabs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tabs).default;
  }
});

var _TabsItem = __webpack_require__(62);

Object.defineProperty(exports, 'TabsItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TabsItem).default;
  }
});

var _FixedTabs = __webpack_require__(61);

Object.defineProperty(exports, 'FixedTabs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FixedTabs).default;
  }
});

var _Spinner = __webpack_require__(27);

Object.defineProperty(exports, 'Spinner', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Spinner).default;
  }
});

var _Link = __webpack_require__(60);

Object.defineProperty(exports, 'Link', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Link).default;
  }
});

var _Tooltip = __webpack_require__(59);

Object.defineProperty(exports, 'Tooltip', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tooltip).default;
  }
});

var _FormLayout = __webpack_require__(58);

Object.defineProperty(exports, 'FormLayout', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FormLayout).default;
  }
});

var _FormLayoutGroup = __webpack_require__(57);

Object.defineProperty(exports, 'FormLayoutGroup', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FormLayoutGroup).default;
  }
});

var _Switch = __webpack_require__(56);

Object.defineProperty(exports, 'Switch', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Switch).default;
  }
});

var _File = __webpack_require__(55);

Object.defineProperty(exports, 'File', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_File).default;
  }
});

var _Input = __webpack_require__(54);

Object.defineProperty(exports, 'Input', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Input).default;
  }
});

var _Slider = __webpack_require__(17);

Object.defineProperty(exports, 'Slider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Slider).default;
  }
});

var _RangeSlider = __webpack_require__(53);

Object.defineProperty(exports, 'RangeSlider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RangeSlider).default;
  }
});

var _Textarea = __webpack_require__(52);

Object.defineProperty(exports, 'Textarea', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Textarea).default;
  }
});

var _Radio = __webpack_require__(51);

Object.defineProperty(exports, 'Radio', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Radio).default;
  }
});

var _Checkbox = __webpack_require__(50);

Object.defineProperty(exports, 'Checkbox', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Checkbox).default;
  }
});

var _Select = __webpack_require__(49);

Object.defineProperty(exports, 'Select', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Select).default;
  }
});

var _SelectMimicry = __webpack_require__(48);

Object.defineProperty(exports, 'SelectMimicry', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SelectMimicry).default;
  }
});

var _Div = __webpack_require__(20);

Object.defineProperty(exports, 'Div', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Div).default;
  }
});

var _Tappable = __webpack_require__(5);

Object.defineProperty(exports, 'Tappable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tappable).default;
  }
});

var _Touch = __webpack_require__(8);

Object.defineProperty(exports, 'Touch', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Touch).default;
  }
});

var _ConfigProvider = __webpack_require__(47);

Object.defineProperty(exports, 'ConfigProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ConfigProvider).default;
  }
});

var _classnames = __webpack_require__(2);

Object.defineProperty(exports, 'classnames', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_classnames).default;
  }
});

var _keyframes = __webpack_require__(26);

Object.defineProperty(exports, 'keyframes', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_keyframes).default;
  }
});

var _offset = __webpack_require__(31);

Object.defineProperty(exports, 'getOffsetRect', {
  enumerable: true,
  get: function get() {
    return _offset.getOffsetRect;
  }
});

var _platform = __webpack_require__(4);

Object.defineProperty(exports, 'platform', {
  enumerable: true,
  get: function get() {
    return _platform.platform;
  }
});
Object.defineProperty(exports, 'ANDROID', {
  enumerable: true,
  get: function get() {
    return _platform.ANDROID;
  }
});
Object.defineProperty(exports, 'IOS', {
  enumerable: true,
  get: function get() {
    return _platform.IOS;
  }
});

var _removeObjectKeys = __webpack_require__(13);

Object.defineProperty(exports, 'removeObjectKeys', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_removeObjectKeys).default;
  }
});

var _request = __webpack_require__(45);

Object.defineProperty(exports, 'request', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_request).default;
  }
});

var _querystring = __webpack_require__(14);

Object.defineProperty(exports, 'querystring', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_querystring).default;
  }
});

var _getClassName = __webpack_require__(3);

Object.defineProperty(exports, 'getClassName', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getClassName).default;
  }
});

var _requestAnimationFrame = __webpack_require__(11);

Object.defineProperty(exports, 'requestAnimationFrame', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_requestAnimationFrame).default;
  }
});

var _webview = __webpack_require__(15);

Object.defineProperty(exports, 'isWebView', {
  enumerable: true,
  get: function get() {
    return _webview.isWebView;
  }
});

var _colors = __webpack_require__(44);

Object.defineProperty(exports, 'colors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_colors).default;
  }
});

__webpack_require__(40);

__webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var v = exports.v = "2.12.3";

/***/ })
/******/ ]);
});
//# sourceMappingURL=vkui.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(92)();
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.BrowserSpriteSymbol = factory());
}(this, (function () { 'use strict';

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {
        undefined(factory);
    } else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

return BrowserSpriteSymbol;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.BrowserSprite = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {
        undefined(factory);
    } else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

//      
// An event handler can take an optional event argument
// and should not return a value
                                          
// An array of all currently registered event handlers for a type
                                            
// A map of event types and their corresponding event handlers.
                        
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberof mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).map(function (handler) { handler(evt); });
			(all['*'] || []).map(function (handler) { handler(type, evt); });
		}
	};
}

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var svg$1 = namespaces_1.svg;
var xlink$1 = namespaces_1.xlink;

var defaultConfig = {
  attrs: ( obj = {
    style: ['position: absolute', 'width: 0', 'height: 0'].join('; ')
  }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj )
};
var obj;

var Sprite = function Sprite(config) {
  this.config = deepmerge(defaultConfig, config || {});
  this.symbols = [];
};

/**
 * Add new symbol. If symbol with the same id exists it will be replaced.
 * @param {SpriteSymbol} symbol
 * @return {boolean} `true` - symbol was added, `false` - replaced
 */
Sprite.prototype.add = function add (symbol) {
  var ref = this;
    var symbols = ref.symbols;
  var existing = this.find(symbol.id);

  if (existing) {
    symbols[symbols.indexOf(existing)] = symbol;
    return false;
  }

  symbols.push(symbol);
  return true;
};

/**
 * Remove symbol & destroy it
 * @param {string} id
 * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
 */
Sprite.prototype.remove = function remove (id) {
  var ref = this;
    var symbols = ref.symbols;
  var symbol = this.find(id);

  if (symbol) {
    symbols.splice(symbols.indexOf(symbol), 1);
    symbol.destroy();
    return true;
  }

  return false;
};

/**
 * @param {string} id
 * @return {SpriteSymbol|null}
 */
Sprite.prototype.find = function find (id) {
  return this.symbols.filter(function (s) { return s.id === id; })[0] || null;
};

/**
 * @param {string} id
 * @return {boolean}
 */
Sprite.prototype.has = function has (id) {
  return this.find(id) !== null;
};

/**
 * @return {string}
 */
Sprite.prototype.stringify = function stringify () {
  var ref = this.config;
    var attrs = ref.attrs;
  var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');
  return wrapInSvgString(stringifiedSymbols, attrs);
};

/**
 * @return {string}
 */
Sprite.prototype.toString = function toString () {
  return this.stringify();
};

Sprite.prototype.destroy = function destroy () {
  this.symbols.forEach(function (s) { return s.destroy(); });
};

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

var defaultConfig$1 = {
  /**
   * Should following options be automatically configured:
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @type {boolean}
   */
  autoConfigure: true,

  /**
   * Default mounting selector
   * @type {string}
   */
  mountTo: 'body',

  /**
   * Fix disappearing SVG elements when <base href> exists.
   * Executes when sprite mounted.
   * @see http://stackoverflow.com/a/18265336/796152
   * @see https://github.com/everdimension/angular-svg-base-fix
   * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
   * @type {boolean}
   */
  syncUrlsWithBaseTag: false,

  /**
   * Should sprite listen custom location change event
   * @type {boolean}
   */
  listenLocationChangeEvent: true,

  /**
   * Custom window event name which should be emitted to update sprite urls
   * @type {string}
   */
  locationChangeEvent: 'locationChange',

  /**
   * Emit location change event in Angular automatically
   * @type {boolean}
   */
  locationChangeAngularEmitter: false,

  /**
   * Selector to find symbols usages when updating sprite urls
   * @type {string}
   */
  usagesToUpdate: 'use[*|href]',

  /**
   * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
   * Executes when sprite is rendered, but not mounted.
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
   * @type {boolean}
   */
  moveGradientsOutsideSymbol: false
};

/**
 * @param {*} arrayLike
 * @return {Array}
 */
var arrayFrom = function (arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
};

var ua = navigator.userAgent;

var browser = {
  isChrome: /chrome/i.test(ua),
  isFirefox: /firefox/i.test(ua),

  // https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
  isIE: /msie/i.test(ua) || /trident/i.test(ua),
  isEdge: /edge/i.test(ua)
};

/**
 * @param {string} name
 * @param {*} data
 */
var dispatchEvent = function (name, data) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(name, false, false, data);
  window.dispatchEvent(event);
};

/**
 * IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
 * This trick will trigger IE to read and use any existing SVG <style> tags.
 * @see https://github.com/iconic/SVGInjector/issues/23
 * @see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
 *
 * @param {Element} node DOM Element to search <style> tags in
 * @return {Array<HTMLStyleElement>}
 */
var evalStylesIEWorkaround = function (node) {
  var updatedNodes = [];

  arrayFrom(node.querySelectorAll('style'))
    .forEach(function (style) {
      style.textContent += '';
      updatedNodes.push(style);
    });

  return updatedNodes;
};

/**
 * @param {string} [url] If not provided - current URL will be used
 * @return {string}
 */
var getUrlWithoutFragment = function (url) {
  return (url || window.location.href).split('#')[0];
};

/* global angular */
/**
 * @param {string} eventName
 */
var locationChangeAngularEmitter = function (eventName) {
  angular.module('ng').run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl) {
      dispatchEvent(eventName, { oldUrl: oldUrl, newUrl: newUrl });
    });
  }]);
};

var defaultSelector = 'linearGradient, radialGradient, pattern';

/**
 * @param {Element} svg
 * @param {string} [selector]
 * @return {Element}
 */
var moveGradientsOutsideSymbol = function (svg, selector) {
  if ( selector === void 0 ) selector = defaultSelector;

  arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
    arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
      symbol.parentNode.insertBefore(node, symbol);
    });
  });
  return svg;
};

/**
 * @param {NodeList} nodes
 * @param {Function} [matcher]
 * @return {Attr[]}
 */
function selectAttributes(nodes, matcher) {
  var attrs = arrayFrom(nodes).reduce(function (acc, node) {
    if (!node.attributes) {
      return acc;
    }

    var arrayfied = arrayFrom(node.attributes);
    var matched = matcher ? arrayfied.filter(matcher) : arrayfied;
    return acc.concat(matched);
  }, []);

  return attrs;
}

/**
 * @param {NodeList|Node} nodes
 * @param {boolean} [clone=true]
 * @return {string}
 */

var xLinkNS = namespaces_1.xlink.uri;
var xLinkAttrName = 'xlink:href';

// eslint-disable-next-line no-useless-escape
var specialUrlCharsPattern = /[{}|\\\^\[\]`"<>]/g;

function encoder(url) {
  return url.replace(specialUrlCharsPattern, function (match) {
    return ("%" + (match[0].charCodeAt(0).toString(16).toUpperCase()));
  });
}

/**
 * @param {NodeList} nodes
 * @param {string} startsWith
 * @param {string} replaceWith
 * @return {NodeList}
 */
function updateReferences(nodes, startsWith, replaceWith) {
  arrayFrom(nodes).forEach(function (node) {
    var href = node.getAttribute(xLinkAttrName);
    if (href && href.indexOf(startsWith) === 0) {
      var newUrl = href.replace(startsWith, replaceWith);
      node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);
    }
  });

  return nodes;
}

/**
 * List of SVG attributes to update url() target in them
 */
var attList = [
  'clipPath',
  'colorProfile',
  'src',
  'cursor',
  'fill',
  'filter',
  'marker',
  'markerStart',
  'markerMid',
  'markerEnd',
  'mask',
  'stroke',
  'style'
];

var attSelector = attList.map(function (attr) { return ("[" + attr + "]"); }).join(',');

/**
 * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
 * @param {Element} svg
 * @param {NodeList} references
 * @param {string|RegExp} startsWith
 * @param {string} replaceWith
 * @return {void}
 *
 * @example
 * const sprite = document.querySelector('svg.sprite');
 * const usages = document.querySelectorAll('use');
 * updateUrls(sprite, usages, '#', 'prefix#');
 */
var updateUrls = function (svg, references, startsWith, replaceWith) {
  var startsWithEncoded = encoder(startsWith);
  var replaceWithEncoded = encoder(replaceWith);

  var nodes = svg.querySelectorAll(attSelector);
  var attrs = selectAttributes(nodes, function (ref) {
    var localName = ref.localName;
    var value = ref.value;

    return attList.indexOf(localName) !== -1 && value.indexOf(("url(" + startsWithEncoded)) !== -1;
  });

  attrs.forEach(function (attr) { return attr.value = attr.value.replace(startsWithEncoded, replaceWithEncoded); });
  updateReferences(references, startsWithEncoded, replaceWithEncoded);
};

/**
 * Internal emitter events
 * @enum
 * @private
 */
var Events = {
  MOUNT: 'mount',
  SYMBOL_MOUNT: 'symbol_mount'
};

var BrowserSprite = (function (Sprite$$1) {
  function BrowserSprite(cfg) {
    var this$1 = this;
    if ( cfg === void 0 ) cfg = {};

    Sprite$$1.call(this, deepmerge(defaultConfig$1, cfg));

    var emitter = mitt();
    this._emitter = emitter;
    this.node = null;

    var ref = this;
    var config = ref.config;

    if (config.autoConfigure) {
      this._autoConfigure(cfg);
    }

    if (config.syncUrlsWithBaseTag) {
      var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
      emitter.on(Events.MOUNT, function () { return this$1.updateUrls('#', baseUrl); });
    }

    var handleLocationChange = this._handleLocationChange.bind(this);
    this._handleLocationChange = handleLocationChange;

    // Provide way to update sprite urls externally via dispatching custom window event
    if (config.listenLocationChangeEvent) {
      window.addEventListener(config.locationChangeEvent, handleLocationChange);
    }

    // Emit location change event in Angular automatically
    if (config.locationChangeAngularEmitter) {
      locationChangeAngularEmitter(config.locationChangeEvent);
    }

    // After sprite mounted
    emitter.on(Events.MOUNT, function (spriteNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(spriteNode);
      }
    });

    // After symbol mounted into sprite
    emitter.on(Events.SYMBOL_MOUNT, function (symbolNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(symbolNode.parentNode);
      }

      if (browser.isIE || browser.isEdge) {
        evalStylesIEWorkaround(symbolNode);
      }
    });
  }

  if ( Sprite$$1 ) BrowserSprite.__proto__ = Sprite$$1;
  BrowserSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
  BrowserSprite.prototype.constructor = BrowserSprite;

  var prototypeAccessors = { isMounted: {} };

  /**
   * @return {boolean}
   */
  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * Automatically configure following options
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @param {Object} cfg
   * @private
   */
  BrowserSprite.prototype._autoConfigure = function _autoConfigure (cfg) {
    var ref = this;
    var config = ref.config;

    if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
      config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';
    }

    if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
      config.locationChangeAngularEmitter = 'angular' in window;
    }

    if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
      config.moveGradientsOutsideSymbol = browser.isFirefox;
    }
  };

  /**
   * @param {Event} event
   * @param {Object} event.detail
   * @param {string} event.detail.oldUrl
   * @param {string} event.detail.newUrl
   * @private
   */
  BrowserSprite.prototype._handleLocationChange = function _handleLocationChange (event) {
    var ref = event.detail;
    var oldUrl = ref.oldUrl;
    var newUrl = ref.newUrl;
    this.updateUrls(oldUrl, newUrl);
  };

  /**
   * Add new symbol. If symbol with the same id exists it will be replaced.
   * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
   * @fires Events#SYMBOL_MOUNT
   * @param {BrowserSpriteSymbol} symbol
   * @return {boolean} `true` - symbol was added, `false` - replaced
   */
  BrowserSprite.prototype.add = function add (symbol) {
    var sprite = this;
    var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);

    if (this.isMounted && isNewSymbol) {
      symbol.mount(sprite.node);
      this._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    }

    return isNewSymbol;
  };

  /**
   * Attach to existing DOM node
   * @param {string|Element} target
   * @return {Element|null} attached DOM Element. null if node to attach not found.
   */
  BrowserSprite.prototype.attach = function attach (target) {
    var this$1 = this;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    /** @type Element */
    var node = typeof target === 'string' ? document.querySelector(target) : target;
    sprite.node = node;

    // Already added symbols needs to be mounted
    this.symbols.forEach(function (symbol) {
      symbol.mount(sprite.node);
      this$1._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    });

    // Create symbols from existing DOM nodes, add and mount them
    arrayFrom(node.querySelectorAll('symbol'))
      .forEach(function (symbolNode) {
        var symbol = BrowserSpriteSymbol.createFromExistingNode(symbolNode);
        symbol.node = symbolNode; // hack to prevent symbol mounting to sprite when adding
        sprite.add(symbol);
      });

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  BrowserSprite.prototype.destroy = function destroy () {
    var ref = this;
    var config = ref.config;
    var symbols = ref.symbols;
    var _emitter = ref._emitter;

    symbols.forEach(function (s) { return s.destroy(); });

    _emitter.off('*');
    window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);

    if (this.isMounted) {
      this.unmount();
    }
  };

  /**
   * @fires Events#MOUNT
   * @param {string|Element} [target]
   * @param {boolean} [prepend=false]
   * @return {Element|null} rendered sprite node. null if mount node not found.
   */
  BrowserSprite.prototype.mount = function mount (target, prepend) {
    if ( target === void 0 ) target = this.config.mountTo;
    if ( prepend === void 0 ) prepend = false;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    var mountNode = typeof target === 'string' ? document.querySelector(target) : target;
    var node = sprite.render();
    this.node = node;

    if (prepend && mountNode.childNodes[0]) {
      mountNode.insertBefore(node, mountNode.childNodes[0]);
    } else {
      mountNode.appendChild(node);
    }

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSprite.prototype.render = function render () {
    return parse(this.stringify());
  };

  /**
   * Detach sprite from the DOM
   */
  BrowserSprite.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  /**
   * Update URLs in sprite and usage elements
   * @param {string} oldUrl
   * @param {string} newUrl
   * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted
   */
  BrowserSprite.prototype.updateUrls = function updateUrls$1 (oldUrl, newUrl) {
    if (!this.isMounted) {
      return false;
    }

    var usages = document.querySelectorAll(this.config.usagesToUpdate);

    updateUrls(
      this.node,
      usages,
      ((getUrlWithoutFragment(oldUrl)) + "#"),
      ((getUrlWithoutFragment(newUrl)) + "#")
    );

    return true;
  };

  Object.defineProperties( BrowserSprite.prototype, prototypeAccessors );

  return BrowserSprite;
}(Sprite));

var ready$1 = createCommonjsModule(function (module) {
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  { module.exports = definition(); }

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);


  if (!loaded)
  { doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener);
    loaded = 1;
    while (listener = fns.shift()) { listener(); }
  }); }

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  }

});
});

var spriteNodeId = '__SVG_SPRITE_NODE__';
var spriteGlobalVarName = '__SVG_SPRITE__';
var isSpriteExists = !!window[spriteGlobalVarName];

// eslint-disable-next-line import/no-mutable-exports
var sprite;

if (isSpriteExists) {
  sprite = window[spriteGlobalVarName];
} else {
  sprite = new BrowserSprite({ attrs: { id: spriteNodeId } });
  window[spriteGlobalVarName] = sprite;
}

var loadSprite = function () {
  /**
   * Check for page already contains sprite node
   * If found - attach to and reuse it's content
   * If not - render and mount the new sprite
   */
  var existing = document.getElementById(spriteNodeId);

  if (existing) {
    sprite.attach(existing);
  } else {
    sprite.mount(document.body, true);
  }
};

if (document.body) {
  loadSprite();
} else {
  ready$1(loadSprite);
}

var sprite$1 = sprite;

return sprite$1;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asap = __webpack_require__(57);

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }
  this._75 = 0;
  this._83 = 0;
  this._18 = null;
  this._38 = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._47 = null;
Promise._71 = null;
Promise._44 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}
function handle(self, deferred) {
  while (self._83 === 3) {
    self = self._18;
  }
  if (Promise._47) {
    Promise._47(self);
  }
  if (self._83 === 0) {
    if (self._75 === 0) {
      self._75 = 1;
      self._38 = deferred;
      return;
    }
    if (self._75 === 1) {
      self._75 = 2;
      self._38 = [self._38, deferred];
      return;
    }
    self._38.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function() {
    var cb = self._83 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._83 === 1) {
        resolve(deferred.promise, self._18);
      } else {
        reject(deferred.promise, self._18);
      }
      return;
    }
    var ret = tryCallOne(cb, self._18);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._83 = 3;
      self._18 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._83 = 1;
  self._18 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._83 = 2;
  self._18 = newValue;
  if (Promise._71) {
    Promise._71(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._75 === 1) {
    handle(self, self._38);
    self._38 = null;
  }
  if (self._75 === 2) {
    for (var i = 0; i < self._38.length; i++) {
      handle(self, self._38[i]);
    }
    self._38 = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  });
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(31);
var test = {};
test[__webpack_require__(0)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(6)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(32);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
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
/* 32 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(5);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(34) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(13)(function () {
  return Object.defineProperty(__webpack_require__(36)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(2);
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(62)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(21)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(5);
var hide = __webpack_require__(7);
var redefine = __webpack_require__(6);
var ctx = __webpack_require__(14);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(9);
var dPs = __webpack_require__(65);
var enumBugKeys = __webpack_require__(43);
var IE_PROTO = __webpack_require__(22)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(36)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(70).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(66);
var enumBugKeys = __webpack_require__(43);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(19);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(73);
var getKeys = __webpack_require__(41);
var redefine = __webpack_require__(6);
var global = __webpack_require__(1);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(11);
var wks = __webpack_require__(0);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(8).f;
var create = __webpack_require__(40);
var redefineAll = __webpack_require__(47);
var ctx = __webpack_require__(14);
var anInstance = __webpack_require__(48);
var forOf = __webpack_require__(49);
var $iterDefine = __webpack_require__(21);
var step = __webpack_require__(45);
var setSpecies = __webpack_require__(79);
var DESCRIPTORS = __webpack_require__(4);
var fastKey = __webpack_require__(50).fastKey;
var validate = __webpack_require__(24);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(6);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(14);
var call = __webpack_require__(76);
var isArrayIter = __webpack_require__(77);
var anObject = __webpack_require__(9);
var toLength = __webpack_require__(42);
var getIterFn = __webpack_require__(78);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
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
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(12)('meta');
var isObject = __webpack_require__(2);
var has = __webpack_require__(10);
var setDesc = __webpack_require__(8).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(13)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var $export = __webpack_require__(39);
var redefine = __webpack_require__(6);
var redefineAll = __webpack_require__(47);
var meta = __webpack_require__(50);
var forOf = __webpack_require__(49);
var anInstance = __webpack_require__(48);
var isObject = __webpack_require__(2);
var fails = __webpack_require__(13);
var $iterDetect = __webpack_require__(80);
var setToStringTag = __webpack_require__(23);
var inheritIfRequired = __webpack_require__(81);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(88);
} else {
  module.exports = require('./cjs/react-dom.development.js');
}


/***/ }),
/* 53 */
/***/ (function(module, exports) {

(function(window) {
  var FUNCTION = 'function';
  var UNDEFINED = 'undefined';
  var subscribers = [];
  var isWeb = typeof window !== UNDEFINED && !window.AndroidBridge && !window.webkit;
  var eventType = isWeb ? 'message' : 'VKWebAppEvent';

  if (typeof window !== UNDEFINED) {

    //polyfill
    if (!window.CustomEvent) {
      (function() {
        function CustomEvent(event, params) {
          params = params || {bubbles: false, cancelable: false, detail: undefined};
          var evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;

        window.CustomEvent = CustomEvent;
      })();
    }

    window.addEventListener(eventType, function() {
      var args = Array.prototype.slice.call(arguments);
      if (isWeb) {
        subscribers.forEach(function(fn) {
          fn({
            detail: args[0].data
          });
        });
      } else {
        subscribers.forEach(function(fn) {
          fn.apply(null, args);
        });
      }
    });
  }

  module.exports = {
    /**
     * Sends a message to native client
     *
     * @example
     * message.send('VKWebAppInit');
     *
     * @param {String} handler Message type
     * @param {Object} params Message data
     * @returns {void}
     */
    send: function send(handler, params) {
      if (!params) {
        params = {};
      }

      var isClient = typeof window !== UNDEFINED;
      var androidBridge = isClient && window.AndroidBridge;
      var iosBridge = isClient && window.webkit && window.webkit.messageHandlers;
      var isDesktop = !androidBridge && !iosBridge;

      if (androidBridge && typeof androidBridge[handler] == FUNCTION) {
        androidBridge[handler](JSON.stringify(params));
      }
      if (iosBridge && iosBridge[handler] && typeof iosBridge[handler].postMessage == FUNCTION) {
        iosBridge[handler].postMessage(params);
      }

      if (isDesktop) {
        parent.postMessage({
          handler,
          params,
          type: 'vk-connect'
        }, '*');
      }
    },
    /**
     * Subscribe on VKWebAppEvent
     *
     * @param {Function} fn Event handler
     * @returns {void}
     */
    subscribe: function subscribe(fn) {
      subscribers.push(fn);
    },
    /**
     * Unsubscribe on VKWebAppEvent
     *
     * @param {Function} fn Event handler
     * @returns {void}
     */
    unsubscribe: function unsubscribe(fn) {
      var index = subscribers.indexOf(fn);

      if (index > -1) {
        subscribers.splice(index, 1);
      }
    },

    /**
     * Checks if native client supports nandler
     *
     * @param {String} handler Handler name
     * @returns {boolean}
     */
    supports: function supports(handler) {

      var isClient = typeof window !== UNDEFINED;
      var androidBridge = isClient && window.AndroidBridge;
      var iosBridge = isClient && window.webkit && window.webkit.messageHandlers;
      var desktopEvents = [
        "VKWebAppGetAuthToken",
        "VKWebAppCallAPIMethod",
        "VKWebAppGetGeodata",
        "VKWebAppGetUserInfo",
        "VKWebAppGetPhoneNumber",
        "VKWebAppGetClientVersion",
        "VKWebAppOpenPayForm",
        "VKWebAppShare",
        "VKWebAppAllowNotifications",
        "VKWebAppDenyNotifications",
        "VKWebAppShowWallPostBox",
        "VKWebAppGetEmail",
        "VKWebAppAllowMessagesFromGroup",
        "VKWebAppJoinGroup",
        "VKWebAppOpenApp",
        "VKWebAppSetLocation",
      ];

      if (androidBridge && typeof androidBridge[handler] == FUNCTION) return true;

      if (iosBridge && iosBridge[handler] && typeof iosBridge[handler].postMessage == FUNCTION) return true;

      if (!iosBridge && !androidBridge && ~desktopEvents.indexOf(handler)) return true;

      return false;
    }
  };
})(window);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
module.exports = __webpack_require__(60);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end


if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  __webpack_require__(56).enable();
  window.Promise = __webpack_require__(58);
}

// fetch() polyfill for making API calls.
__webpack_require__(59);

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = __webpack_require__(17);

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (false) {
  require('raf').polyfill(global);
}


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(29);

var DEFAULT_WHITELIST = [
  ReferenceError,
  TypeError,
  RangeError
];

var enabled = false;
exports.disable = disable;
function disable() {
  enabled = false;
  Promise._47 = null;
  Promise._71 = null;
}

exports.enable = enable;
function enable(options) {
  options = options || {};
  if (enabled) disable();
  enabled = true;
  var id = 0;
  var displayId = 0;
  var rejections = {};
  Promise._47 = function (promise) {
    if (
      promise._83 === 2 && // IS REJECTED
      rejections[promise._56]
    ) {
      if (rejections[promise._56].logged) {
        onHandled(promise._56);
      } else {
        clearTimeout(rejections[promise._56].timeout);
      }
      delete rejections[promise._56];
    }
  };
  Promise._71 = function (promise, err) {
    if (promise._75 === 0) { // not yet handled
      promise._56 = id++;
      rejections[promise._56] = {
        displayId: null,
        error: err,
        timeout: setTimeout(
          onUnhandled.bind(null, promise._56),
          // For reference errors and type errors, this almost always
          // means the programmer made a mistake, so log them after just
          // 100ms
          // otherwise, wait 2 seconds to see if they get handled
          matchWhitelist(err, DEFAULT_WHITELIST)
            ? 100
            : 2000
        ),
        logged: false
      };
    }
  };
  function onUnhandled(id) {
    if (
      options.allRejections ||
      matchWhitelist(
        rejections[id].error,
        options.whitelist || DEFAULT_WHITELIST
      )
    ) {
      rejections[id].displayId = displayId++;
      if (options.onUnhandled) {
        rejections[id].logged = true;
        options.onUnhandled(
          rejections[id].displayId,
          rejections[id].error
        );
      } else {
        rejections[id].logged = true;
        logError(
          rejections[id].displayId,
          rejections[id].error
        );
      }
    }
  }
  function onHandled(id) {
    if (rejections[id].logged) {
      if (options.onHandled) {
        options.onHandled(rejections[id].displayId, rejections[id].error);
      } else if (!rejections[id].onUnhandled) {
        console.warn(
          'Promise Rejection Handled (id: ' + rejections[id].displayId + '):'
        );
        console.warn(
          '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
          rejections[id].displayId + '.'
        );
      }
    }
  }
}

function logError(id, error) {
  console.warn('Possible Unhandled Promise Rejection (id: ' + id + '):');
  var errStr = (error && (error.stack || error)) + '';
  errStr.split('\n').forEach(function (line) {
    console.warn('  ' + line);
  });
}

function matchWhitelist(error, list) {
  return list.some(function (cls) {
    return error instanceof cls;
  });
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = __webpack_require__(29);

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._44);
  p._83 = 1;
  p._18 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._83 === 3) {
            val = val._18;
          }
          if (val._83 === 1) return res(i, val._18);
          if (val._83 === 2) reject(val._18);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_map__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_set__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vkontakte_vkui_connect__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vkontakte_vkui_connect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__vkontakte_vkui_connect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__App__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sw__ = __webpack_require__(101);
// Init VK App
__WEBPACK_IMPORTED_MODULE_4__vkontakte_vkui_connect___default.a.send('VKWebAppInit',{});// Service Worker For Cache
Object(__WEBPACK_IMPORTED_MODULE_6__sw__["a" /* default */])();__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__App__["a" /* default */],null),document.getElementById('root'));

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
__webpack_require__(38);
__webpack_require__(44);
__webpack_require__(75);
module.exports = __webpack_require__(5).Map;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19);
var defined = __webpack_require__(20);
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
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(40);
var descriptor = __webpack_require__(18);
var setToStringTag = __webpack_require__(23);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var anObject = __webpack_require__(9);
var getKeys = __webpack_require__(41);

module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(10);
var toIObject = __webpack_require__(15);
var arrayIndexOf = __webpack_require__(68)(false);
var IE_PROTO = __webpack_require__(22)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(32);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(15);
var toLength = __webpack_require__(42);
var toAbsoluteIndex = __webpack_require__(69);
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
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(10);
var toObject = __webpack_require__(72);
var IE_PROTO = __webpack_require__(22)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(20);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(74);
var step = __webpack_require__(45);
var Iterators = __webpack_require__(11);
var toIObject = __webpack_require__(15);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(21)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(0)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(7)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(46);
var validate = __webpack_require__(24);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(51)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(9);
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(11);
var ITERATOR = __webpack_require__(0)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(31);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(11);
module.exports = __webpack_require__(5).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var dP = __webpack_require__(8);
var DESCRIPTORS = __webpack_require__(4);
var SPECIES = __webpack_require__(0)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
var setPrototypeOf = __webpack_require__(82).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(2);
var anObject = __webpack_require__(9);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(14)(Function.call, __webpack_require__(83).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(84);
var createDesc = __webpack_require__(18);
var toIObject = __webpack_require__(15);
var toPrimitive = __webpack_require__(37);
var has = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(35);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 84 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
__webpack_require__(38);
__webpack_require__(44);
__webpack_require__(86);
module.exports = __webpack_require__(5).Set;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(46);
var validate = __webpack_require__(24);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(51)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var m=__webpack_require__(17),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.async_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112;n&&Symbol.for("react.placeholder");
var z="function"===typeof Symbol&&Symbol.iterator;function A(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[d,c,e,g,h,f],l=0;a=Error(b.replace(/%s/g,function(){return k[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function B(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);A(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}var H=G.prototype=new F;
H.constructor=G;m(H,E.prototype);H.isPureReactComponent=!0;var I={current:null,currentDispatcher:null},J=Object.prototype.hasOwnProperty,K={key:!0,ref:!0,__self:!0,__source:!0};
function L(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)J.call(b,c)&&!K.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var k=Array(f),l=0;l<f;l++)k[l]=arguments[l+2];e.children=k}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:e,_owner:I.current}}
function M(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=z&&a[z]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else"object"===e&&(d=""+a,B("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function V(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=M(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function W(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,aa,b);R(b)}function ba(a,b){var d=I.currentDispatcher;null===d?B("277"):void 0;return d.readContext(a,b)}
var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];W(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,V,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];W(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:B("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,Provider:null,Consumer:null,unstable_read:null};a.Provider={$$typeof:v,_context:a};a.Consumer=a;a.unstable_read=ba.bind(null,a);return a},forwardRef:function(a){return{$$typeof:y,render:a}},Fragment:r,StrictMode:t,unstable_AsyncMode:x,unstable_Profiler:u,createElement:L,cloneElement:function(a,b,d){null===a||void 0===a?B("267",a):void 0;var c=void 0,e=m({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=I.current);void 0!==b.key&&(g=""+b.key);
var k=void 0;a.type&&a.type.defaultProps&&(k=a.type.defaultProps);for(c in b)J.call(b,c)&&!K.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==k?k[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){k=Array(c);for(var l=0;l<c;l++)k[l]=arguments[l+2];e.children=k}return{$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=L.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.5.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:I,
assign:m}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.0
 * react-dom.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(3),n=__webpack_require__(17),ba=__webpack_require__(89);function ca(a,b,c,d,e,f,g,k){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var h=[c,d,e,f,g,k],l=0;a=Error(b.replace(/%s/g,function(){return h[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function w(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:w("227");function da(a,b,c,d,e,f,g,k,h){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}
var ea=!1,fa=null,ha=!1,ia=null,ja={onError:function(a){ea=!0;fa=a}};function ka(a,b,c,d,e,f,g,k,h){ea=!1;fa=null;da.apply(ja,arguments)}function la(a,b,c,d,e,f,g,k,h){ka.apply(this,arguments);if(ea){if(ea){var l=fa;ea=!1;fa=null}else w("198"),l=void 0;ha||(ha=!0,ia=l)}}var ma=null,na={};
function oa(){if(ma)for(var a in na){var b=na[a],c=ma.indexOf(a);-1<c?void 0:w("96",a);if(!pa[c]){b.extractEvents?void 0:w("97",a);pa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,k=d;qa.hasOwnProperty(k)?w("99",k):void 0;qa[k]=f;var h=f.phasedRegistrationNames;if(h){for(e in h)h.hasOwnProperty(e)&&ra(h[e],g,k);e=!0}else f.registrationName?(ra(f.registrationName,g,k),e=!0):e=!1;e?void 0:w("98",d,a)}}}}
function ra(a,b,c){sa[a]?w("100",a):void 0;sa[a]=b;ta[a]=b.eventTypes[c].dependencies}var pa=[],qa={},sa={},ta={},ua=null,va=null,wa=null;function xa(a,b,c,d){b=a.type||"unknown-event";a.currentTarget=wa(d);la(b,c,void 0,a);a.currentTarget=null}function ya(a,b){null==b?w("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function za(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Aa=null;function Ba(a,b){if(a){var c=a._dispatchListeners,d=a._dispatchInstances;if(Array.isArray(c))for(var e=0;e<c.length&&!a.isPropagationStopped();e++)xa(a,b,c[e],d[e]);else c&&xa(a,b,c,d);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ca(a){return Ba(a,!0)}function Da(a){return Ba(a,!1)}
var Ea={injectEventPluginOrder:function(a){ma?w("101"):void 0;ma=Array.prototype.slice.call(a);oa()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];na.hasOwnProperty(c)&&na[c]===d||(na[c]?w("102",c):void 0,na[c]=d,b=!0)}b&&oa()}};
function Fa(a,b){var c=a.stateNode;if(!c)return null;var d=ua(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?w("231",b,typeof c):void 0;
return c}function Ga(a,b){null!==a&&(Aa=ya(Aa,a));a=Aa;Aa=null;if(a&&(b?za(a,Ca):za(a,Da),Aa?w("95"):void 0,ha))throw b=ia,ha=!1,ia=null,b;}var Ha=Math.random().toString(36).slice(2),Ia="__reactInternalInstance$"+Ha,Ja="__reactEventHandlers$"+Ha;function Ka(a){if(a[Ia])return a[Ia];for(;!a[Ia];)if(a.parentNode)a=a.parentNode;else return null;a=a[Ia];return 7===a.tag||8===a.tag?a:null}function La(a){a=a[Ia];return!a||7!==a.tag&&8!==a.tag?null:a}
function Ma(a){if(7===a.tag||8===a.tag)return a.stateNode;w("33")}function Na(a){return a[Ja]||null}function Oa(a){do a=a.return;while(a&&7!==a.tag);return a?a:null}function Pa(a,b,c){if(b=Fa(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ya(c._dispatchListeners,b),c._dispatchInstances=ya(c._dispatchInstances,a)}
function Qa(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Oa(b);for(b=c.length;0<b--;)Pa(c[b],"captured",a);for(b=0;b<c.length;b++)Pa(c[b],"bubbled",a)}}function Ra(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Fa(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ya(c._dispatchListeners,b),c._dispatchInstances=ya(c._dispatchInstances,a))}function Ta(a){a&&a.dispatchConfig.registrationName&&Ra(a._targetInst,null,a)}
function Ua(a){za(a,Qa)}var Va=!("undefined"===typeof window||!window.document||!window.document.createElement);function Wa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ya={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},Za={},$a={};
Va&&($a=document.createElement("div").style,"AnimationEvent"in window||(delete Ya.animationend.animation,delete Ya.animationiteration.animation,delete Ya.animationstart.animation),"TransitionEvent"in window||delete Ya.transitionend.transition);function ab(a){if(Za[a])return Za[a];if(!Ya[a])return a;var b=Ya[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in $a)return Za[a]=b[c];return a}
var bb=ab("animationend"),cb=ab("animationiteration"),db=ab("animationstart"),eb=ab("transitionend"),fb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gb=null,hb=null,ib=null;
function jb(){if(ib)return ib;var a,b=hb,c=b.length,d,e="value"in gb?gb.value:gb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return ib=e.slice(a,1<d?1-d:void 0)}function kb(){return!0}function lb(){return!1}
function C(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?kb:lb;this.isPropagationStopped=lb;return this}
n(C.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=kb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=kb)},persist:function(){this.isPersistent=kb},isPersistent:lb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=lb;this._dispatchInstances=this._dispatchListeners=null}});C.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
C.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;mb(c);return c};mb(C);function nb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function ob(a){a instanceof this?void 0:w("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function mb(a){a.eventPool=[];a.getPooled=nb;a.release=ob}var pb=C.extend({data:null}),qb=C.extend({data:null}),rb=[9,13,27,32],sb=Va&&"CompositionEvent"in window,tb=null;Va&&"documentMode"in document&&(tb=document.documentMode);
var ub=Va&&"TextEvent"in window&&!tb,vb=Va&&(!sb||tb&&8<tb&&11>=tb),wb=String.fromCharCode(32),xb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},yb=!1;
function zb(a,b){switch(a){case "keyup":return-1!==rb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function Ab(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var Bb=!1;function Cb(a,b){switch(a){case "compositionend":return Ab(b);case "keypress":if(32!==b.which)return null;yb=!0;return wb;case "textInput":return a=b.data,a===wb&&yb?null:a;default:return null}}
function Db(a,b){if(Bb)return"compositionend"===a||!sb&&zb(a,b)?(a=jb(),ib=hb=gb=null,Bb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return vb&&"ko"!==b.locale?null:b.data;default:return null}}
var Eb={eventTypes:xb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(sb)b:{switch(a){case "compositionstart":e=xb.compositionStart;break b;case "compositionend":e=xb.compositionEnd;break b;case "compositionupdate":e=xb.compositionUpdate;break b}e=void 0}else Bb?zb(a,c)&&(e=xb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=xb.compositionStart);e?(vb&&"ko"!==c.locale&&(Bb||e!==xb.compositionStart?e===xb.compositionEnd&&Bb&&(f=jb()):(gb=d,hb="value"in gb?gb.value:gb.textContent,Bb=
!0)),e=pb.getPooled(e,b,c,d),f?e.data=f:(f=Ab(c),null!==f&&(e.data=f)),Ua(e),f=e):f=null;(a=ub?Cb(a,c):Db(a,c))?(b=qb.getPooled(xb.beforeInput,b,c,d),b.data=a,Ua(b)):b=null;return null===f?b:null===b?f:[f,b]}},Fb=null,Gb=null,Hb=null;function Ib(a){if(a=va(a)){"function"!==typeof Fb?w("280"):void 0;var b=ua(a.stateNode);Fb(a.stateNode,a.type,b)}}function Jb(a){Gb?Hb?Hb.push(a):Hb=[a]:Gb=a}function Kb(){if(Gb){var a=Gb,b=Hb;Hb=Gb=null;Ib(a);if(b)for(a=0;a<b.length;a++)Ib(b[a])}}
function Lb(a,b){return a(b)}function Mb(a,b,c){return a(b,c)}function Nb(){}var Ob=!1;function Pb(a,b){if(Ob)return a(b);Ob=!0;try{return Lb(a,b)}finally{if(Ob=!1,null!==Gb||null!==Hb)Nb(),Kb()}}var Qb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Qb[a.type]:"textarea"===b?!0:!1}
function Sb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Tb(a){if(!Va)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Ub(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Vb(a){var b=Ub(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Wb(a){a._valueTracker||(a._valueTracker=Vb(a))}function Xb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ub(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}
var Yb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zb=/^(.*)[\\\/]/,E="function"===typeof Symbol&&Symbol.for,$b=E?Symbol.for("react.element"):60103,ac=E?Symbol.for("react.portal"):60106,bc=E?Symbol.for("react.fragment"):60107,cc=E?Symbol.for("react.strict_mode"):60108,dc=E?Symbol.for("react.profiler"):60114,ec=E?Symbol.for("react.provider"):60109,fc=E?Symbol.for("react.context"):60110,gc=E?Symbol.for("react.async_mode"):60111,hc=E?Symbol.for("react.forward_ref"):60112,ic=E?Symbol.for("react.placeholder"):
60113,jc="function"===typeof Symbol&&Symbol.iterator;function kc(a){if(null===a||"object"!==typeof a)return null;a=jc&&a[jc]||a["@@iterator"];return"function"===typeof a?a:null}
function lc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case gc:return"AsyncMode";case bc:return"Fragment";case ac:return"Portal";case dc:return"Profiler";case cc:return"StrictMode";case ic:return"Placeholder"}if("object"===typeof a){switch(a.$$typeof){case fc:return"Context.Consumer";case ec:return"Context.Provider";case hc:return a=a.render,a=a.displayName||a.name||"",""!==a?"ForwardRef("+a+")":"ForwardRef"}if("function"===
typeof a.then&&(a=1===a._reactStatus?a._reactResult:null))return lc(a)}return null}function mc(a){var b="";do{a:switch(a.tag){case 4:case 0:case 1:case 2:case 3:case 7:case 10:var c=a._debugOwner,d=a._debugSource,e=lc(a.type);var f=null;c&&(f=lc(c.type));c=e;e="";d?e=" (at "+d.fileName.replace(Zb,"")+":"+d.lineNumber+")":f&&(e=" (created by "+f+")");f="\n    in "+(c||"Unknown")+e;break a;default:f=""}b+=f;a=a.return}while(a);return b}
var nc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pc=Object.prototype.hasOwnProperty,qc={},rc={};
function sc(a){if(pc.call(rc,a))return!0;if(pc.call(qc,a))return!1;if(nc.test(a))return rc[a]=!0;qc[a]=!0;return!1}function tc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function uc(a,b,c,d){if(null===b||"undefined"===typeof b||tc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function F(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var G={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){G[a]=new F(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];G[b]=new F(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){G[a]=new F(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){G[a]=new F(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){G[a]=new F(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){G[a]=new F(a,3,!0,a,null)});
["capture","download"].forEach(function(a){G[a]=new F(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){G[a]=new F(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){G[a]=new F(a,5,!1,a.toLowerCase(),null)});var vc=/[\-:]([a-z])/g;function wc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(vc,
wc);G[b]=new F(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(vc,wc);G[b]=new F(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(vc,wc);G[b]=new F(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});G.tabIndex=new F("tabIndex",1,!1,"tabindex",null);
function xc(a,b,c,d){var e=G.hasOwnProperty(b)?G[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(uc(b,c,e,d)&&(c=null),d||null===e?sc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function yc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function zc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Bc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=yc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Cc(a,b){b=b.checked;null!=b&&xc(a,"checked",b,!1)}
function Dc(a,b){Cc(a,b);var c=yc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Ec(a,b.type,c):b.hasOwnProperty("defaultValue")&&Ec(a,b.type,yc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Fc(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;d=a.value;c||b===d||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Ec(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Gc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Hc(a,b,c){a=C.getPooled(Gc.change,a,b,c);a.type="change";Jb(c);Ua(a);return a}var Ic=null,Jc=null;function Kc(a){Ga(a,!1)}
function Lc(a){var b=Ma(a);if(Xb(b))return a}function Mc(a,b){if("change"===a)return b}var Nc=!1;Va&&(Nc=Tb("input")&&(!document.documentMode||9<document.documentMode));function Oc(){Ic&&(Ic.detachEvent("onpropertychange",Pc),Jc=Ic=null)}function Pc(a){"value"===a.propertyName&&Lc(Jc)&&(a=Hc(Jc,a,Sb(a)),Pb(Kc,a))}function Qc(a,b,c){"focus"===a?(Oc(),Ic=b,Jc=c,Ic.attachEvent("onpropertychange",Pc)):"blur"===a&&Oc()}function Rc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Lc(Jc)}
function Sc(a,b){if("click"===a)return Lc(b)}function Tc(a,b){if("input"===a||"change"===a)return Lc(b)}
var Uc={eventTypes:Gc,_isInputEventSupported:Nc,extractEvents:function(a,b,c,d){var e=b?Ma(b):window,f=void 0,g=void 0,k=e.nodeName&&e.nodeName.toLowerCase();"select"===k||"input"===k&&"file"===e.type?f=Mc:Rb(e)?Nc?f=Tc:(f=Rc,g=Qc):(k=e.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Sc);if(f&&(f=f(a,b)))return Hc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Ec(e,"number",e.value)}},Vc=C.extend({view:null,detail:null}),Wc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Wc[a])?!!b[a]:!1}function Yc(){return Xc}
var Zc=0,$c=0,ad=!1,bd=!1,cd=Vc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Yc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Zc;Zc=a.screenX;return ad?"mousemove"===a.type?a.screenX-b:0:(ad=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=$c;$c=a.screenY;return bd?"mousemove"===a.type?a.screenY-b:0:(bd=!0,0)}}),dd=cd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),ed={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},fd={eventTypes:ed,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ka(b):null):f=null;if(f===b)return null;var g=void 0,k=void 0,h=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)g=cd,k=ed.mouseLeave,h=ed.mouseEnter,l="mouse";
else if("pointerout"===a||"pointerover"===a)g=dd,k=ed.pointerLeave,h=ed.pointerEnter,l="pointer";var m=null==f?e:Ma(f);e=null==b?e:Ma(b);a=g.getPooled(k,f,c,d);a.type=l+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(h,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;l=0;for(g=b;g;g=Oa(g))l++;g=0;for(h=e;h;h=Oa(h))g++;for(;0<l-g;)b=Oa(b),l--;for(;0<g-l;)e=Oa(e),g--;for(;l--;){if(b===e||b===e.alternate)break a;b=Oa(b);e=Oa(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){l=
f.alternate;if(null!==l&&l===e)break;b.push(f);f=Oa(f)}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=Oa(d)}for(d=0;d<b.length;d++)Ra(b[d],"bubbled",a);for(d=f.length;0<d--;)Ra(f[d],"captured",c);return[a,c]}},gd=Object.prototype.hasOwnProperty;function hd(a,b){return a===b?0!==a||0!==b||1/a===1/b:a!==a&&b!==b}
function id(a,b){if(hd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!gd.call(b,c[d])||!hd(a[c[d]],b[c[d]]))return!1;return!0}function jd(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 5===b.tag?2:3}function kd(a){2!==jd(a)?w("188"):void 0}
function ld(a){var b=a.alternate;if(!b)return b=jd(a),3===b?w("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return kd(e),a;if(g===d)return kd(e),b;g=g.sibling}w("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var k=e.child;k;){if(k===c){g=!0;c=e;d=f;break}if(k===d){g=!0;d=e;c=f;break}k=k.sibling}if(!g){for(k=f.child;k;){if(k===c){g=!0;c=f;d=e;break}if(k===d){g=!0;d=f;c=e;break}k=k.sibling}g?
void 0:w("189")}}c.alternate!==d?w("190"):void 0}5!==c.tag?w("188"):void 0;return c.stateNode.current===c?a:b}function md(a){a=ld(a);if(!a)return null;for(var b=a;;){if(7===b.tag||8===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var nd=C.extend({animationName:null,elapsedTime:null,pseudoElement:null}),od=C.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),pd=Vc.extend({relatedTarget:null});function qd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var rd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},td=Vc.extend({key:function(a){if(a.key){var b=rd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=qd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?sd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Yc,charCode:function(a){return"keypress"===
a.type?qd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?qd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),ud=cd.extend({dataTransfer:null}),vd=Vc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Yc}),wd=C.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),xd=cd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),yd=[["abort","abort"],[bb,"animationEnd"],[cb,"animationIteration"],[db,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[eb,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],zd={},Ad={};function Bd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};zd[a]=b;Ad[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){Bd(a,!0)});yd.forEach(function(a){Bd(a,!1)});
var Cd={eventTypes:zd,isInteractiveTopLevelEventType:function(a){a=Ad[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Ad[a];if(!e)return null;switch(a){case "keypress":if(0===qd(c))return null;case "keydown":case "keyup":a=td;break;case "blur":case "focus":a=pd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=cd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
ud;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=vd;break;case bb:case cb:case db:a=nd;break;case eb:a=wd;break;case "scroll":a=Vc;break;case "wheel":a=xd;break;case "copy":case "cut":case "paste":a=od;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=dd;break;default:a=C}b=a.getPooled(e,b,c,d);Ua(b);return b}},Dd=Cd.isInteractiveTopLevelEventType,
Ed=[];function Fd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=5!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ka(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Sb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,k=0;k<pa.length;k++){var h=pa[k];h&&(h=h.extractEvents(d,b,f,e))&&(g=ya(g,h))}Ga(g,!1)}}var Gd=!0;
function H(a,b){if(!b)return null;var c=(Dd(a)?Hd:Id).bind(null,a);b.addEventListener(a,c,!1)}function Jd(a,b){if(!b)return null;var c=(Dd(a)?Hd:Id).bind(null,a);b.addEventListener(a,c,!0)}function Hd(a,b){Mb(Id,a,b)}
function Id(a,b){if(Gd){var c=Sb(b);c=Ka(c);null===c||"number"!==typeof c.tag||2===jd(c)||(c=null);if(Ed.length){var d=Ed.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Pb(Fd,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Ed.length&&Ed.push(a)}}}var Kd={},Ld=0,Md="_reactListenersID"+(""+Math.random()).slice(2);
function Nd(a){Object.prototype.hasOwnProperty.call(a,Md)||(a[Md]=Ld++,Kd[a[Md]]={});return Kd[a[Md]]}function Pd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Qd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Rd(a,b){var c=Qd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Qd(c)}}function Sd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Sd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Td(){for(var a=window,b=Pd();b instanceof a.HTMLIFrameElement;){try{a=b.contentDocument.defaultView}catch(c){break}b=Pd(a.document)}return b}function Ud(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Vd=Va&&"documentMode"in document&&11>=document.documentMode,Wd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Xd=null,Yd=null,Zd=null,$d=!1;
function ae(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if($d||null==Xd||Xd!==Pd(c))return null;c=Xd;"selectionStart"in c&&Ud(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Zd&&id(Zd,c)?null:(Zd=c,a=C.getPooled(Wd.select,Yd,a,b),a.type="select",a.target=Xd,Ua(a),a)}
var be={eventTypes:Wd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Nd(e);f=ta.onSelect;for(var g=0;g<f.length;g++){var k=f[g];if(!e.hasOwnProperty(k)||!e[k]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Ma(b):window;switch(a){case "focus":if(Rb(e)||"true"===e.contentEditable)Xd=e,Yd=b,Zd=null;break;case "blur":Zd=Yd=Xd=null;break;case "mousedown":$d=!0;break;case "contextmenu":case "mouseup":case "dragend":return $d=!1,ae(c,d);case "selectionchange":if(Vd)break;
case "keydown":case "keyup":return ae(c,d)}return null}};Ea.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ua=Na;va=La;wa=Ma;Ea.injectEventPluginsByName({SimpleEventPlugin:Cd,EnterLeaveEventPlugin:fd,ChangeEventPlugin:Uc,SelectEventPlugin:be,BeforeInputEventPlugin:Eb});function ce(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function de(a,b){a=n({children:void 0},b);if(b=ce(b.children))a.children=b;return a}function ee(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+yc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function fe(a,b){null!=b.dangerouslySetInnerHTML?w("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ge(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?w("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:w("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:yc(c)}}
function he(a,b){var c=yc(b.value);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&(a.defaultValue=c));null!=b.defaultValue&&(a.defaultValue=""+yc(b.defaultValue))}function ie(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var je={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function ke(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ke(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var me=void 0,ne=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==je.svg||"innerHTML"in a)a.innerHTML=b;else{me=me||document.createElement("div");me.innerHTML="<svg>"+b+"</svg>";for(b=me.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function oe(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qe=["Webkit","ms","Moz","O"];Object.keys(pe).forEach(function(a){qe.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pe[b]=pe[a]})});
function re(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--");var e=c;var f=b[c];e=null==f||"boolean"===typeof f||""===f?"":d||"number"!==typeof f||0===f||pe.hasOwnProperty(e)&&pe[e]?(""+f).trim():f+"px";"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var se=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function te(a,b){b&&(se[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?w("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?w("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:w("61")),null!=b.style&&"object"!==typeof b.style?w("62",""):void 0)}
function ue(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function ve(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Nd(a);b=ta[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Jd("scroll",a);break;case "focus":case "blur":Jd("focus",a);Jd("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Tb(e)&&Jd(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===fb.indexOf(e)&&H(e,a)}c[e]=!0}}}function we(){}var xe=null,ye=null;
function ze(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function Ae(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}function Be(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}
function Ce(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var De=[],Ee=-1;function I(a){0>Ee||(a.current=De[Ee],De[Ee]=null,Ee--)}function J(a,b){Ee++;De[Ee]=a.current;a.current=b}var Fe={},K={current:Fe},L={current:!1},Ge=Fe;
function He(a,b){var c=a.type.contextTypes;if(!c)return Fe;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function M(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ie(a){I(L,a);I(K,a)}function Je(a){I(L,a);I(K,a)}
function Ke(a,b,c){K.current!==Fe?w("168"):void 0;J(K,b,a);J(L,c,a)}function Le(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:w("108",lc(b)||"Unknown",e);return n({},c,d)}function Me(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Fe;Ge=K.current;J(K,b,a);J(L,L.current,a);return!0}
function Ne(a,b,c){var d=a.stateNode;d?void 0:w("169");c?(b=Le(a,b,Ge),d.__reactInternalMemoizedMergedChildContext=b,I(L,a),I(K,a),J(K,b,a)):I(L,a);J(L,c,a)}var Oe=null,Pe=null;function Qe(a){return function(b){try{return a(b)}catch(c){}}}
function Re(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Oe=Qe(function(a){return b.onCommitFiberRoot(c,a)});Pe=Qe(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
function Se(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=null;this.index=0;this.ref=null;this.pendingProps=b;this.firstContextDependency=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}
function Te(a){a=a.prototype;return"object"===typeof a&&null!==a&&"object"===typeof a.isReactComponent&&null!==a.isReactComponent}
function Ue(a,b,c){var d=a.alternate;null===d?(d=new Se(a.tag,b,a.key,a.mode),d.type=a.type,d.stateNode=a.stateNode,d.alternate=a,a.alternate=d):(d.pendingProps=b,d.effectTag=0,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null);d.childExpirationTime=a.childExpirationTime;d.expirationTime=b!==a.pendingProps?c:a.expirationTime;d.child=a.child;d.memoizedProps=a.memoizedProps;d.memoizedState=a.memoizedState;d.updateQueue=a.updateQueue;d.firstContextDependency=a.firstContextDependency;d.sibling=a.sibling;
d.index=a.index;d.ref=a.ref;return d}
function Ve(a,b,c){var d=a.type,e=a.key;a=a.props;var f=void 0;if("function"===typeof d)f=Te(d)?2:4;else if("string"===typeof d)f=7;else a:switch(d){case bc:return We(a.children,b,c,e);case gc:f=10;b|=3;break;case cc:f=10;b|=2;break;case dc:return d=new Se(15,a,e,b|4),d.type=dc,d.expirationTime=c,d;case ic:f=16;break;default:if("object"===typeof d&&null!==d)switch(d.$$typeof){case ec:f=12;break a;case fc:f=11;break a;case hc:f=13;break a;default:if("function"===typeof d.then){f=4;break a}}w("130",
null==d?d:typeof d,"")}b=new Se(f,a,e,b);b.type=d;b.expirationTime=c;return b}function We(a,b,c,d){a=new Se(9,a,d,b);a.expirationTime=c;return a}function Xe(a,b,c){a=new Se(8,a,null,b);a.expirationTime=c;return a}function Ye(a,b,c){b=new Se(6,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function Ze(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c>b?a.earliestPendingTime=b:a.latestPendingTime<b&&(a.latestPendingTime=b);$e(b,a)}function $e(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d>a)&&(e=d);a=e;0!==a&&0!==c&&c<a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}var af=!1;
function bf(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function cf(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function df(a){return{expirationTime:a,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function ef(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function ff(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=bf(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=bf(a.memoizedState),e=c.updateQueue=bf(c.memoizedState)):d=a.updateQueue=cf(e):null===e&&(e=c.updateQueue=cf(d));null===e||d===e?ef(d,b):null===d.lastUpdate||null===e.lastUpdate?(ef(d,b),ef(e,b)):(ef(d,b),e.lastUpdate=b)}
function gf(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=bf(a.memoizedState):hf(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function hf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=cf(b));return b}
function jf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-1025|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case 2:af=!0}return d}
function kf(a,b,c,d,e){af=!1;b=hf(a,b);for(var f=b.baseState,g=null,k=0,h=b.firstUpdate,l=f;null!==h;){var m=h.expirationTime;if(m>e){if(null===g&&(g=h,f=l),0===k||k>m)k=m}else l=jf(a,b,h,l,c,d),null!==h.callback&&(a.effectTag|=32,h.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=h:(b.lastEffect.nextEffect=h,b.lastEffect=h));h=h.next}m=null;for(h=b.firstCapturedUpdate;null!==h;){var t=h.expirationTime;if(t>e){if(null===m&&(m=h,null===g&&(f=l)),0===k||k>t)k=t}else l=jf(a,b,h,l,c,d),
null!==h.callback&&(a.effectTag|=32,h.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=h:(b.lastCapturedEffect.nextEffect=h,b.lastCapturedEffect=h));h=h.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=k;a.memoizedState=l}
function lf(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);mf(b.firstEffect,c);b.firstEffect=b.lastEffect=null;mf(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function mf(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?w("191",c):void 0;c.call(d)}a=a.nextEffect}}
function nf(a,b){return{value:a,source:b,stack:mc(b)}}var of={current:null},pf=null,qf=null,rf=null;function sf(a,b){var c=a.type._context;J(of,c._currentValue,a);c._currentValue=b}function tf(a){var b=of.current;I(of,a);a.type._context._currentValue=b}function uf(a){pf=a;rf=qf=null;a.firstContextDependency=null}
function vf(a,b){if(rf!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)rf=a,b=1073741823;b={context:a,observedBits:b,next:null};null===qf?(null===pf?w("277"):void 0,pf.firstContextDependency=qf=b):qf=qf.next=b}return a._currentValue}var wf={},N={current:wf},xf={current:wf},yf={current:wf};function zf(a){a===wf?w("174"):void 0;return a}
function Af(a,b){J(yf,b,a);J(xf,a,a);J(N,wf,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:le(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=le(b,c)}I(N,a);J(N,b,a)}function Bf(a){I(N,a);I(xf,a);I(yf,a)}function Cf(a){zf(yf.current);var b=zf(N.current);var c=le(b,a.type);b!==c&&(J(xf,a,a),J(N,c,a))}function Df(a){xf.current===a&&(I(N,a),I(xf,a))}var Ef=(new aa.Component).refs;
function Ff(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var Jf={isMounted:function(a){return(a=a._reactInternalFiber)?2===jd(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gf();d=Hf(d,a);var e=df(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);ff(a,e);If(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gf();d=Hf(d,a);var e=df(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);ff(a,e);If(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gf();c=Hf(c,a);var d=df(c);d.tag=2;void 0!==
b&&null!==b&&(d.callback=b);ff(a,d);If(a,c)}};function Kf(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!id(c,d)||!id(e,f):!0}function Lf(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jf.enqueueReplaceState(b,b.state,null)}
function Mf(a,b,c,d){var e=a.stateNode,f=M(b)?Ge:K.current;e.props=c;e.state=a.memoizedState;e.refs=Ef;e.context=He(a,f);f=a.updateQueue;null!==f&&(kf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(Ff(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&
e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jf.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(kf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Nf=Array.isArray;
function Of(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(2!==c.tag&&3!==c.tag?w("110"):void 0,d=c.stateNode);d?void 0:w("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Ef&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?w("284"):void 0;c._owner?void 0:w("254",a)}return a}
function Pf(a,b){"textarea"!==a.type&&w("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function Qf(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Ue(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function k(a,b,c,d){if(null===b||8!==b.tag)return b=Xe(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function h(a,b,c,d){if(null!==b&&b.type===c.type)return d=e(b,c.props,d),d.ref=Of(a,b,c),d.return=a,d;d=Ve(c,a.mode,d);d.ref=Of(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||6!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Ye(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||9!==b.tag)return b=We(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function t(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Xe(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case $b:return c=Ve(b,a.mode,c),c.ref=Of(a,null,b),c.return=a,c;case ac:return b=Ye(b,a.mode,c),b.return=a,b}if(Nf(b)||kc(b))return b=We(b,a.mode,c,null),b.return=
a,b;Pf(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:k(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case $b:return c.key===e?c.type===bc?m(a,b,c.props.children,d,e):h(a,b,c,d):null;case ac:return c.key===e?l(a,b,c,d):null}if(Nf(c)||kc(c))return null!==e?null:m(a,b,c,d,null);Pf(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,k(b,a,""+d,e);
if("object"===typeof d&&null!==d){switch(d.$$typeof){case $b:return a=a.get(null===d.key?c:d.key)||null,d.type===bc?m(b,a,d.props.children,e,d.key):h(b,a,d,e);case ac:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Nf(d)||kc(d))return a=a.get(c)||null,m(b,a,d,e,null);Pf(b,d)}return null}function y(e,g,h,k){for(var l=null,r=null,p=g,m=g=0,q=null;null!==p&&m<h.length;m++){p.index>m?(q=p,p=null):q=p.sibling;var v=x(e,p,h[m],k);if(null===v){null===p&&(p=q);break}a&&p&&null===v.alternate&&b(e,
p);g=f(v,g,m);null===r?l=v:r.sibling=v;r=v;p=q}if(m===h.length)return c(e,p),l;if(null===p){for(;m<h.length;m++)if(p=t(e,h[m],k))g=f(p,g,m),null===r?l=p:r.sibling=p,r=p;return l}for(p=d(e,p);m<h.length;m++)if(q=z(p,e,m,h[m],k))a&&null!==q.alternate&&p.delete(null===q.key?m:q.key),g=f(q,g,m),null===r?l=q:r.sibling=q,r=q;a&&p.forEach(function(a){return b(e,a)});return l}function u(e,g,h,k){var l=kc(h);"function"!==typeof l?w("150"):void 0;h=l.call(h);null==h?w("151"):void 0;for(var m=l=null,p=g,r=g=
0,q=null,v=h.next();null!==p&&!v.done;r++,v=h.next()){p.index>r?(q=p,p=null):q=p.sibling;var u=x(e,p,v.value,k);if(null===u){p||(p=q);break}a&&p&&null===u.alternate&&b(e,p);g=f(u,g,r);null===m?l=u:m.sibling=u;m=u;p=q}if(v.done)return c(e,p),l;if(null===p){for(;!v.done;r++,v=h.next())v=t(e,v.value,k),null!==v&&(g=f(v,g,r),null===m?l=v:m.sibling=v,m=v);return l}for(p=d(e,p);!v.done;r++,v=h.next())v=z(p,e,r,v.value,k),null!==v&&(a&&null!==v.alternate&&p.delete(null===v.key?r:v.key),g=f(v,g,r),null===
m?l=v:m.sibling=v,m=v);a&&p.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===bc&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case $b:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(9===k.tag?f.type===bc:k.type===f.type){c(a,k.sibling);d=e(k,f.type===bc?f.props.children:f.props,h);d.ref=Of(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=k.sibling}f.type===bc?(d=We(f.props.children,
a.mode,h,f.key),d.return=a,a=d):(h=Ve(f,a.mode,h),h.ref=Of(a,d,f),h.return=a,a=h)}return g(a);case ac:a:{for(k=f.key;null!==d;){if(d.key===k)if(6===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Ye(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&8===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=
a,a=d):(c(a,d),d=Xe(f,a.mode,h),d.return=a,a=d),g(a);if(Nf(f))return y(a,d,f,h);if(kc(f))return u(a,d,f,h);l&&Pf(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 2:case 3:case 0:h=a.type,w("152",h.displayName||h.name||"Component")}return c(a,d)}}var Rf=Qf(!0),Sf=Qf(!1),Tf=null,Uf=null,Vf=!1;function Wf(a,b){var c=new Se(7,null,null,0);c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Xf(a,b){switch(a.tag){case 7:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 8:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;default:return!1}}function Yf(a){if(Vf){var b=Uf;if(b){var c=b;if(!Xf(a,b)){b=Be(c);if(!b||!Xf(a,b)){a.effectTag|=2;Vf=!1;Tf=a;return}Wf(Tf,c)}Tf=a;Uf=Ce(b)}else a.effectTag|=2,Vf=!1,Tf=a}}
function Zf(a){for(a=a.return;null!==a&&7!==a.tag&&5!==a.tag;)a=a.return;Tf=a}function $f(a){if(a!==Tf)return!1;if(!Vf)return Zf(a),Vf=!0,!1;var b=a.type;if(7!==a.tag||"head"!==b&&"body"!==b&&!Ae(b,a.memoizedProps))for(b=Uf;b;)Wf(a,b),b=Be(b);Zf(a);Uf=Tf?Be(a.stateNode):null;return!0}function ag(){Uf=Tf=null;Vf=!1}
function bg(a){switch(a._reactStatus){case 1:return a._reactResult;case 2:throw a._reactResult;case 0:throw a;default:throw a._reactStatus=0,a.then(function(b){if(0===a._reactStatus){a._reactStatus=1;if("object"===typeof b&&null!==b){var c=b.default;b=void 0!==c&&null!==c?c:b}a._reactResult=b}},function(b){0===a._reactStatus&&(a._reactStatus=2,a._reactResult=b)}),a;}}var cg=Yb.ReactCurrentOwner;function O(a,b,c,d){b.child=null===a?Sf(b,null,c,d):Rf(b,a.child,c,d)}
function dg(a,b,c,d,e){c=c.render;var f=b.ref;if(!L.current&&b.memoizedProps===d&&f===(null!==a?a.ref:null))return eg(a,b,e);c=c(d,f);O(a,b,c,e);b.memoizedProps=d;return b.child}function fg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function gg(a,b,c,d,e){var f=M(c)?Ge:K.current;f=He(b,f);uf(b,e);c=c(d,f);b.effectTag|=1;O(a,b,c,e);b.memoizedProps=d;return b.child}
function hg(a,b,c,d,e){if(M(c)){var f=!0;Me(b)}else f=!1;uf(b,e);if(null===a)if(null===b.stateNode){var g=M(c)?Ge:K.current,k=c.contextTypes,h=null!==k&&void 0!==k;k=h?He(b,g):Fe;var l=new c(d,k);b.memoizedState=null!==l.state&&void 0!==l.state?l.state:null;l.updater=Jf;b.stateNode=l;l._reactInternalFiber=b;h&&(h=b.stateNode,h.__reactInternalMemoizedUnmaskedChildContext=g,h.__reactInternalMemoizedMaskedChildContext=k);Mf(b,c,d,e);d=!0}else{g=b.stateNode;k=b.memoizedProps;g.props=k;var m=g.context;
h=M(c)?Ge:K.current;h=He(b,h);var t=c.getDerivedStateFromProps;(l="function"===typeof t||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(k!==d||m!==h)&&Lf(b,g,d,h);af=!1;var x=b.memoizedState;m=g.state=x;var z=b.updateQueue;null!==z&&(kf(b,z,d,g,e),m=b.memoizedState);k!==d||x!==m||L.current||af?("function"===typeof t&&(Ff(b,c,t,d),m=b.memoizedState),(k=af||Kf(b,c,k,d,x,m,h))?(l||"function"!==
typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=m),g.props=d,g.state=m,g.context=h,d=k):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,k=
b.memoizedProps,g.props=k,m=g.context,h=M(c)?Ge:K.current,h=He(b,h),t=c.getDerivedStateFromProps,(l="function"===typeof t||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(k!==d||m!==h)&&Lf(b,g,d,h),af=!1,m=b.memoizedState,x=g.state=m,z=b.updateQueue,null!==z&&(kf(b,z,d,g,e),x=b.memoizedState),k!==d||m!==x||L.current||af?("function"===typeof t&&(Ff(b,c,t,d),x=b.memoizedState),(t=af||Kf(b,c,k,d,
m,x,h))?(l||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,x,h),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,h)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||k===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=4),"function"!==
typeof g.getSnapshotBeforeUpdate||k===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=h,d=t):("function"!==typeof g.componentDidUpdate||k===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||k===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=256),d=!1);return ig(a,b,c,d,f,e)}
function ig(a,b,c,d,e,f){fg(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Ne(b,c,!1),eg(a,b,f);d=b.stateNode;cg.current=b;var k=g?null:d.render();b.effectTag|=1;null!==a&&g&&(O(a,b,null,f),b.child=null);O(a,b,k,f);b.memoizedState=d.state;b.memoizedProps=d.props;e&&Ne(b,c,!0);return b.child}function jg(a){var b=a.stateNode;b.pendingContext?Ke(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ke(a,b.context,!1);Af(a,b.containerInfo)}
function ng(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function og(a,b,c,d){null!==a?w("155"):void 0;var e=b.pendingProps;if("object"===typeof c&&null!==c&&"function"===typeof c.then){c=bg(c);var f=c;f="function"===typeof f?Te(f)?3:1:void 0!==f&&null!==f&&f.$$typeof?14:4;f=b.tag=f;var g=ng(c,e);switch(f){case 1:return gg(a,b,c,g,d);case 3:return hg(a,b,c,g,d);case 14:return dg(a,b,c,g,d);default:w("283",c)}}f=He(b,K.current);uf(b,d);f=c(e,f);b.effectTag|=1;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof){b.tag=2;M(c)?
(g=!0,Me(b)):g=!1;b.memoizedState=null!==f.state&&void 0!==f.state?f.state:null;var k=c.getDerivedStateFromProps;"function"===typeof k&&Ff(b,c,k,e);f.updater=Jf;b.stateNode=f;f._reactInternalFiber=b;Mf(b,c,e,d);return ig(a,b,c,!0,g,d)}b.tag=0;O(a,b,f,d);b.memoizedProps=e;return b.child}
function eg(a,b,c){null!==a&&(b.firstContextDependency=a.firstContextDependency);var d=b.childExpirationTime;if(0===d||d>c)return null;null!==a&&b.child!==a.child?w("153"):void 0;if(null!==b.child){a=b.child;c=Ue(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Ue(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function pg(a,b,c){var d=b.expirationTime;if(!L.current&&(0===d||d>c)){switch(b.tag){case 5:jg(b);ag();break;case 7:Cf(b);break;case 2:M(b.type)&&Me(b);break;case 3:M(b.type._reactResult)&&Me(b);break;case 6:Af(b,b.stateNode.containerInfo);break;case 12:sf(b,b.memoizedProps.value)}return eg(a,b,c)}b.expirationTime=0;switch(b.tag){case 4:return og(a,b,b.type,c);case 0:return gg(a,b,b.type,b.pendingProps,c);case 1:var e=b.type._reactResult;d=b.pendingProps;a=gg(a,b,e,ng(e,d),c);b.memoizedProps=d;return a;
case 2:return hg(a,b,b.type,b.pendingProps,c);case 3:return e=b.type._reactResult,d=b.pendingProps,a=hg(a,b,e,ng(e,d),c),b.memoizedProps=d,a;case 5:jg(b);d=b.updateQueue;null===d?w("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;kf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)ag(),b=eg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)Uf=Ce(b.stateNode.containerInfo),Tf=b,e=Vf=!0;e?(b.effectTag|=2,b.child=Sf(b,null,d,c)):(O(a,b,d,c),ag());b=b.child}return b;
case 7:Cf(b);null===a&&Yf(b);d=b.type;e=b.pendingProps;var f=null!==a?a.memoizedProps:null,g=e.children;Ae(d,e)?g=null:null!==f&&Ae(d,f)&&(b.effectTag|=16);fg(a,b);1073741823!==c&&b.mode&1&&e.hidden?(b.expirationTime=1073741823,b.memoizedProps=e,b=null):(O(a,b,g,c),b.memoizedProps=e,b=b.child);return b;case 8:return null===a&&Yf(b),b.memoizedProps=b.pendingProps,null;case 16:return null;case 6:return Af(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Rf(b,null,d,c):O(a,b,d,c),b.memoizedProps=
d,b.child;case 13:return dg(a,b,b.type,b.pendingProps,c);case 14:return e=b.type._reactResult,d=b.pendingProps,a=dg(a,b,e,ng(e,d),c),b.memoizedProps=d,a;case 9:return d=b.pendingProps,O(a,b,d,c),b.memoizedProps=d,b.child;case 10:return d=b.pendingProps.children,O(a,b,d,c),b.memoizedProps=d,b.child;case 15:return d=b.pendingProps,O(a,b,d.children,c),b.memoizedProps=d,b.child;case 12:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;b.memoizedProps=e;sf(b,f);if(null!==g){var k=g.value;
f=k===f&&(0!==k||1/k===1/f)||k!==k&&f!==f?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(k,f):1073741823)|0;if(0===f){if(g.children===e.children&&!L.current){b=eg(a,b,c);break a}}else for(g=b.child,null!==g&&(g.return=b);null!==g;){k=g.firstContextDependency;if(null!==k){do{if(k.context===d&&0!==(k.observedBits&f)){if(2===g.tag||3===g.tag){var h=df(c);h.tag=2;ff(g,h)}if(0===g.expirationTime||g.expirationTime>c)g.expirationTime=c;h=g.alternate;null!==h&&(0===h.expirationTime||
h.expirationTime>c)&&(h.expirationTime=c);for(var l=g.return;null!==l;){h=l.alternate;if(0===l.childExpirationTime||l.childExpirationTime>c)l.childExpirationTime=c,null!==h&&(0===h.childExpirationTime||h.childExpirationTime>c)&&(h.childExpirationTime=c);else if(null!==h&&(0===h.childExpirationTime||h.childExpirationTime>c))h.childExpirationTime=c;else break;l=l.return}}h=g.child;k=k.next}while(null!==k)}else h=12===g.tag?g.type===b.type?null:g.child:g.child;if(null!==h)h.return=g;else for(h=g;null!==
h;){if(h===b){h=null;break}g=h.sibling;if(null!==g){g.return=h.return;h=g;break}h=h.return}g=h}}O(a,b,e.children,c);b=b.child}return b;case 11:return f=b.type,d=b.pendingProps,e=d.children,uf(b,c),f=vf(f,d.unstable_observedBits),e=e(f),b.effectTag|=1,O(a,b,e,c),b.memoizedProps=d,b.child;default:w("156")}}function qg(a){a.effectTag|=4}var rg=void 0,sg=void 0,tg=void 0;rg=function(){};sg=function(a,b,c){(b.updateQueue=c)&&qg(b)};tg=function(a,b,c,d){c!==d&&qg(b)};
function ug(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=mc(c));null!==c&&lc(c.type);b=b.value;null!==a&&2===a.tag&&lc(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function vg(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){wg(a,c)}else b.current=null}
function xg(a){"function"===typeof Pe&&Pe(a);switch(a.tag){case 2:case 3:vg(a);var b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){wg(a,c)}break;case 7:vg(a);break;case 6:yg(a)}}function zg(a){return 7===a.tag||5===a.tag||6===a.tag}
function Ag(a){a:{for(var b=a.return;null!==b;){if(zg(b)){var c=b;break a}b=b.return}w("160");c=void 0}var d=b=void 0;switch(c.tag){case 7:b=c.stateNode;d=!1;break;case 5:b=c.stateNode.containerInfo;d=!0;break;case 6:b=c.stateNode.containerInfo;d=!0;break;default:w("161")}c.effectTag&16&&(oe(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||zg(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;7!==c.tag&&8!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||6===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(7===e.tag||8===e.tag)if(c)if(d){var f=b,g=e.stateNode,k=c;8===f.nodeType?f.parentNode.insertBefore(g,k):f.insertBefore(g,k)}else b.insertBefore(e.stateNode,c);else d?(f=b,g=e.stateNode,8===f.nodeType?(k=f.parentNode,k.insertBefore(g,f)):(k=f,k.appendChild(g)),null===k.onclick&&(k.onclick=we)):b.appendChild(e.stateNode);else if(6!==e.tag&&null!==e.child){e.child.return=
e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function yg(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?w("160"):void 0;switch(c.tag){case 7:d=c.stateNode;e=!1;break a;case 5:d=c.stateNode.containerInfo;e=!0;break a;case 6:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(7===b.tag||8===b.tag){a:for(var f=b,g=f;;)if(xg(g),null!==g.child&&6!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(6===b.tag?(d=b.stateNode.containerInfo,e=!0):xg(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;6===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function Bg(a,b){switch(b.tag){case 2:case 3:break;case 7:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Ja]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Cc(c,d);ue(a,e);b=ue(a,d);for(e=0;e<f.length;e+=2){var g=f[e],k=f[e+1];"style"===g?re(c,k):"dangerouslySetInnerHTML"===g?ne(c,k):"children"===g?oe(c,k):xc(c,g,k,b)}switch(a){case "input":Dc(c,d);break;case "textarea":he(c,d);break;case "select":a=c._wrapperState.wasMultiple,
c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?ee(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?ee(c,!!d.multiple,d.defaultValue,!0):ee(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 8:null===b.stateNode?w("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 5:break;case 15:break;case 16:break;default:w("163")}}function Cg(a,b,c){c=df(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Dg(d);ug(a,b)};return c}
function Eg(a,b,c){c=df(c);c.tag=3;var d=a.stateNode;null!==d&&"function"===typeof d.componentDidCatch&&(c.callback=function(){null===Fg?Fg=new Set([this]):Fg.add(this);var c=b.value,d=b.stack;ug(a,b);this.componentDidCatch(c,{componentStack:null!==d?d:""})});return c}
function Gg(a){switch(a.tag){case 2:M(a.type)&&Ie(a);var b=a.effectTag;return b&1024?(a.effectTag=b&-1025|64,a):null;case 3:return M(a.type._reactResult)&&Ie(a),b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 5:return Bf(a),Je(a),b=a.effectTag,0!==(b&64)?w("285"):void 0,a.effectTag=b&-1025|64,a;case 7:return Df(a),null;case 16:return b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 6:return Bf(a),null;case 12:return tf(a),null;default:return null}}
var Hg={readContext:vf},Ig=Yb.ReactCurrentOwner,Jg=0,Kg=0,Lg=!1,P=null,Mg=null,Q=0,Ng=!1,R=null,Og=!1,Fg=null;function Pg(){if(null!==P)for(var a=P.return;null!==a;){var b=a;switch(b.tag){case 2:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Ie(b);break;case 3:c=b.type._reactResult.childContextTypes;null!==c&&void 0!==c&&Ie(b);break;case 5:Bf(b);Je(b);break;case 7:Df(b);break;case 6:Bf(b);break;case 12:tf(b)}a=a.return}Mg=null;Q=0;Ng=!1;P=null}
function Qg(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&512)){var e=b;b=a;var f=b.pendingProps;switch(b.tag){case 0:case 1:break;case 2:M(b.type)&&Ie(b);break;case 3:M(b.type._reactResult)&&Ie(b);break;case 5:Bf(b);Je(b);f=b.stateNode;f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null);if(null===e||null===e.child)$f(b),b.effectTag&=-3;rg(b);break;case 7:Df(b);var g=zf(yf.current),k=b.type;if(null!==e&&null!=b.stateNode){var h=e.memoizedProps;if(h!==f){var l=
b.stateNode,m=zf(N.current),t=l,x=k;var z=h;var y=f;l=g;var u=null;switch(x){case "input":z=zc(t,z);y=zc(t,y);u=[];break;case "option":z=de(t,z);y=de(t,y);u=[];break;case "select":z=n({},z,{value:void 0});y=n({},y,{value:void 0});u=[];break;case "textarea":z=fe(t,z);y=fe(t,y);u=[];break;default:"function"!==typeof z.onClick&&"function"===typeof y.onClick&&(t.onclick=we)}te(x,y);x=t=void 0;var v=null;for(t in z)if(!y.hasOwnProperty(t)&&z.hasOwnProperty(t)&&null!=z[t])if("style"===t){var r=z[t];for(x in r)r.hasOwnProperty(x)&&
(v||(v={}),v[x]="")}else"dangerouslySetInnerHTML"!==t&&"children"!==t&&"suppressContentEditableWarning"!==t&&"suppressHydrationWarning"!==t&&"autoFocus"!==t&&(sa.hasOwnProperty(t)?u||(u=[]):(u=u||[]).push(t,null));for(t in y){var p=y[t];r=null!=z?z[t]:void 0;if(y.hasOwnProperty(t)&&p!==r&&(null!=p||null!=r))if("style"===t)if(r){for(x in r)!r.hasOwnProperty(x)||p&&p.hasOwnProperty(x)||(v||(v={}),v[x]="");for(x in p)p.hasOwnProperty(x)&&r[x]!==p[x]&&(v||(v={}),v[x]=p[x])}else v||(u||(u=[]),u.push(t,
v)),v=p;else"dangerouslySetInnerHTML"===t?(p=p?p.__html:void 0,r=r?r.__html:void 0,null!=p&&r!==p&&(u=u||[]).push(t,""+p)):"children"===t?r===p||"string"!==typeof p&&"number"!==typeof p||(u=u||[]).push(t,""+p):"suppressContentEditableWarning"!==t&&"suppressHydrationWarning"!==t&&(sa.hasOwnProperty(t)?(null!=p&&ve(l,t),u||r===p||(u=[])):(u=u||[]).push(t,p))}v&&(u=u||[]).push("style",v);sg(e,b,u,k,h,f,g,m)}e.ref!==b.ref&&(b.effectTag|=128)}else if(f){u=zf(N.current);if($f(b)){f=b;l=f.stateNode;e=f.type;
h=f.memoizedProps;m=g;l[Ia]=f;l[Ja]=h;k=void 0;g=l;switch(e){case "iframe":case "object":H("load",g);break;case "video":case "audio":for(l=0;l<fb.length;l++)H(fb[l],g);break;case "source":H("error",g);break;case "img":case "image":case "link":H("error",g);H("load",g);break;case "form":H("reset",g);H("submit",g);break;case "details":H("toggle",g);break;case "input":Bc(g,h);H("invalid",g);ve(m,"onChange");break;case "select":g._wrapperState={wasMultiple:!!h.multiple};H("invalid",g);ve(m,"onChange");
break;case "textarea":ge(g,h),H("invalid",g),ve(m,"onChange")}te(e,h);l=null;for(k in h)h.hasOwnProperty(k)&&(u=h[k],"children"===k?"string"===typeof u?g.textContent!==u&&(l=["children",u]):"number"===typeof u&&g.textContent!==""+u&&(l=["children",""+u]):sa.hasOwnProperty(k)&&null!=u&&ve(m,k));switch(e){case "input":Wb(g);Fc(g,h,!0);break;case "textarea":Wb(g);ie(g,h);break;case "select":case "option":break;default:"function"===typeof h.onClick&&(g.onclick=we)}k=l;f.updateQueue=k;f=null!==k?!0:!1;
f&&qg(b)}else{h=b;e=k;m=f;l=9===g.nodeType?g:g.ownerDocument;u===je.html&&(u=ke(e));u===je.html?"script"===e?(e=l.createElement("div"),e.innerHTML="<script>\x3c/script>",l=e.removeChild(e.firstChild)):"string"===typeof m.is?l=l.createElement(e,{is:m.is}):(l=l.createElement(e),"select"===e&&m.multiple&&(l.multiple=!0)):l=l.createElementNS(u,e);e=l;e[Ia]=h;e[Ja]=f;a:for(h=e,m=b,l=m.child;null!==l;){if(7===l.tag||8===l.tag)h.appendChild(l.stateNode);else if(6!==l.tag&&null!==l.child){l.child.return=
l;l=l.child;continue}if(l===m)break;for(;null===l.sibling;){if(null===l.return||l.return===m)break a;l=l.return}l.sibling.return=l.return;l=l.sibling}m=e;l=k;h=f;t=g;v=ue(l,h);switch(l){case "iframe":case "object":H("load",m);g=h;break;case "video":case "audio":for(g=0;g<fb.length;g++)H(fb[g],m);g=h;break;case "source":H("error",m);g=h;break;case "img":case "image":case "link":H("error",m);H("load",m);g=h;break;case "form":H("reset",m);H("submit",m);g=h;break;case "details":H("toggle",m);g=h;break;
case "input":Bc(m,h);g=zc(m,h);H("invalid",m);ve(t,"onChange");break;case "option":g=de(m,h);break;case "select":m._wrapperState={wasMultiple:!!h.multiple};g=n({},h,{value:void 0});H("invalid",m);ve(t,"onChange");break;case "textarea":ge(m,h);g=fe(m,h);H("invalid",m);ve(t,"onChange");break;default:g=h}te(l,g);u=void 0;z=l;y=m;x=g;for(u in x)x.hasOwnProperty(u)&&(r=x[u],"style"===u?re(y,r):"dangerouslySetInnerHTML"===u?(r=r?r.__html:void 0,null!=r&&ne(y,r)):"children"===u?"string"===typeof r?("textarea"!==
z||""!==r)&&oe(y,r):"number"===typeof r&&oe(y,""+r):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(sa.hasOwnProperty(u)?null!=r&&ve(t,u):null!=r&&xc(y,u,r,v)));switch(l){case "input":Wb(m);Fc(m,h,!1);break;case "textarea":Wb(m);ie(m,h);break;case "option":null!=h.value&&m.setAttribute("value",""+yc(h.value));break;case "select":g=m;g.multiple=!!h.multiple;m=h.value;null!=m?ee(g,!!h.multiple,m,!1):null!=h.defaultValue&&ee(g,!!h.multiple,h.defaultValue,!0);break;
default:"function"===typeof g.onClick&&(m.onclick=we)}(f=ze(k,f))&&qg(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?w("166"):void 0;break;case 8:e&&null!=b.stateNode?tg(e,b,e.memoizedProps,f):("string"!==typeof f&&(null===b.stateNode?w("166"):void 0),g=zf(yf.current),zf(N.current),$f(b)?(f=b,k=f.stateNode,g=f.memoizedProps,k[Ia]=f,(f=k.nodeValue!==g)&&qg(b)):(k=b,f=(9===g.nodeType?g:g.ownerDocument).createTextNode(f),f[Ia]=k,b.stateNode=f));break;case 13:case 14:break;
case 16:break;case 9:break;case 10:break;case 15:break;case 6:Bf(b);rg(b);break;case 12:tf(b);break;case 11:break;case 4:w("167");default:w("156")}b=P=null;f=a;if(1073741823===Q||1073741823!==f.childExpirationTime){k=0;for(g=f.child;null!==g;){e=g.expirationTime;h=g.childExpirationTime;if(0===k||0!==e&&e<k)k=e;if(0===k||0!==h&&h<k)k=h;g=g.sibling}f.childExpirationTime=k}if(null!==b)return b;null!==c&&0===(c.effectTag&512)&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&
(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Gg(a,Q);if(null!==a)return a.effectTag&=511,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=512)}if(null!==d)return d;if(null!==c)a=c;else break}return null}function Rg(a){var b=pg(a.alternate,a,Q);null===b&&(b=Qg(a));Ig.current=null;return b}
function Sg(a,b,c){Lg?w("243"):void 0;Lg=!0;Ig.currentDispatcher=Hg;var d=a.nextExpirationTimeToWorkOn;if(d!==Q||a!==Mg||null===P)Pg(),Mg=a,Q=d,P=Ue(Mg.current,null,Q),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==P&&!Tg();)P=Rg(P);else for(;null!==P;)P=Rg(P)}catch(t){if(null===P)e=!0,Dg(t);else{null===P?w("271"):void 0;var f=P,g=f.return;if(null===g)e=!0,Dg(t);else{a:{var k=g,h=f,l=t;g=Q;h.effectTag|=512;h.firstEffect=h.lastEffect=null;Ng=!0;l=nf(l,h);do{switch(k.tag){case 5:k.effectTag|=
1024;k.expirationTime=g;g=Cg(k,l,g);gf(k,g);break a;case 2:case 3:h=l;var m=k.stateNode;if(0===(k.effectTag&64)&&null!==m&&"function"===typeof m.componentDidCatch&&(null===Fg||!Fg.has(m))){k.effectTag|=1024;k.expirationTime=g;g=Eg(k,h,g);gf(k,g);break a}}k=k.return}while(null!==k)}P=Qg(f);continue}}}break}while(1);Lg=!1;rf=qf=pf=Ig.currentDispatcher=null;if(e)Mg=null,a.finishedWork=null;else if(null!==P)a.finishedWork=null;else{b=a.current.alternate;null===b?w("281"):void 0;Mg=null;if(Ng){e=a.latestPendingTime;
f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e>d||0!==f&&f>d||0!==g&&g>d){a.didError=!1;c=a.latestPingedTime;0!==c&&c<=d&&(a.latestPingedTime=0);c=a.earliestPendingTime;b=a.latestPendingTime;c===d?a.earliestPendingTime=b===d?a.latestPendingTime=0:b:b===d&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;b=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=d:c>d?a.earliestSuspendedTime=d:b<d&&(a.latestSuspendedTime=d);$e(d,a);a.expirationTime=a.expirationTime;return}if(!a.didError&&
!c){a.didError=!0;a.nextExpirationTimeToWorkOn=d;d=a.expirationTime=1;a.expirationTime=d;return}}a.pendingCommitExpirationTime=d;a.finishedWork=b}}
function wg(a,b){var c;a:{Lg&&!Og?w("263"):void 0;for(c=a.return;null!==c;){switch(c.tag){case 2:case 3:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromCatch||"function"===typeof d.componentDidCatch&&(null===Fg||!Fg.has(d))){a=nf(b,a);a=Eg(c,a,1);ff(c,a);If(c,1);c=void 0;break a}break;case 5:a=nf(b,a);a=Cg(c,a,1);ff(c,a);If(c,1);c=void 0;break a}c=c.return}5===a.tag&&(c=nf(b,a),c=Cg(a,c,1),ff(a,c),If(a,1));c=void 0}return c}
function Hf(a,b){0!==Kg?a=Kg:Lg?a=Og?1:Q:b.mode&1?(a=Ug?2+10*(((a-2+15)/10|0)+1):2+25*(((a-2+500)/25|0)+1),null!==Mg&&a===Q&&(a+=1)):a=1;Ug&&(0===Vg||a>Vg)&&(Vg=a);return a}
function If(a,b){a:{if(0===a.expirationTime||a.expirationTime>b)a.expirationTime=b;var c=a.alternate;null!==c&&(0===c.expirationTime||c.expirationTime>b)&&(c.expirationTime=b);var d=a.return;if(null===d&&5===a.tag)a=a.stateNode;else{for(;null!==d;){c=d.alternate;if(0===d.childExpirationTime||d.childExpirationTime>b)d.childExpirationTime=b;null!==c&&(0===c.childExpirationTime||c.childExpirationTime>b)&&(c.childExpirationTime=b);if(null===d.return&&5===d.tag){a=d.stateNode;break a}d=d.return}a=null}}if(null!==
a){!Lg&&0!==Q&&b<Q&&Pg();Ze(a,b);if(!Lg||Og||Mg!==a){b=a;a=a.expirationTime;if(null===b.nextScheduledRoot)b.expirationTime=a,null===T?(U=T=b,b.nextScheduledRoot=b):(T=T.nextScheduledRoot=b,T.nextScheduledRoot=U);else if(c=b.expirationTime,0===c||a<c)b.expirationTime=a;V||(W?Wg&&(Y=b,Z=1,Xg(b,1,!0)):1===a?Yg(1,null):Zg(b,a))}$g>ah&&($g=0,w("185"))}}function bh(a,b,c,d,e){var f=Kg;Kg=1;try{return a(b,c,d,e)}finally{Kg=f}}
var U=null,T=null,ch=0,dh=void 0,V=!1,Y=null,Z=0,Vg=0,eh=!1,fh=!1,gh=null,hh=null,W=!1,Wg=!1,Ug=!1,ih=null,jh=ba.unstable_now(),kh=(jh/10|0)+2,lh=kh,ah=50,$g=0,mh=null,nh=1;function oh(){kh=((ba.unstable_now()-jh)/10|0)+2}function Zg(a,b){if(0!==ch){if(b>ch)return;null!==dh&&ba.unstable_cancelScheduledWork(dh)}ch=b;a=ba.unstable_now()-jh;dh=ba.unstable_scheduleWork(ph,{timeout:10*(b-2)-a})}function Gf(){if(V)return lh;qh();if(0===Z||1073741823===Z)oh(),lh=kh;return lh}
function qh(){var a=0,b=null;if(null!==T)for(var c=T,d=U;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===T?w("244"):void 0;if(d===d.nextScheduledRoot){U=T=d.nextScheduledRoot=null;break}else if(d===U)U=e=d.nextScheduledRoot,T.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===T){T=c;T.nextScheduledRoot=U;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{if(0===a||e<a)a=e,b=d;if(d===T)break;if(1===a)break;
c=d;d=d.nextScheduledRoot}}Y=b;Z=a}function ph(a){if(a.didTimeout&&null!==U){oh();var b=U;do{var c=b.expirationTime;0!==c&&kh>=c&&(b.nextExpirationTimeToWorkOn=kh);b=b.nextScheduledRoot}while(b!==U)}Yg(0,a)}
function Yg(a,b){hh=b;qh();if(null!==hh)for(oh(),lh=kh;null!==Y&&0!==Z&&(0===a||a>=Z)&&(!eh||kh>=Z);)Xg(Y,Z,kh>=Z),qh(),oh(),lh=kh;else for(;null!==Y&&0!==Z&&(0===a||a>=Z);)Xg(Y,Z,!0),qh();null!==hh&&(ch=0,dh=null);0!==Z&&Zg(Y,Z);hh=null;eh=!1;$g=0;mh=null;if(null!==ih)for(a=ih,ih=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){fh||(fh=!0,gh=d)}}if(fh)throw a=gh,gh=null,fh=!1,a;}
function Xg(a,b,c){V?w("245"):void 0;V=!0;if(null===hh||c){var d=a.finishedWork;null!==d?rh(a,d,b):(a.finishedWork=null,Sg(a,!1,c),d=a.finishedWork,null!==d&&rh(a,d,b))}else d=a.finishedWork,null!==d?rh(a,d,b):(a.finishedWork=null,Sg(a,!0,c),d=a.finishedWork,null!==d&&(Tg()?a.finishedWork=d:rh(a,d,b)));V=!1}
function rh(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime<=c&&(null===ih?ih=[d]:ih.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===mh?$g++:(mh=a,$g=0);Og=Lg=!0;a.current===b?w("177"):void 0;c=a.pendingCommitExpirationTime;0===c?w("261"):void 0;a.pendingCommitExpirationTime=0;d=b.expirationTime;var e=b.childExpirationTime;d=0===d||0!==e&&e<d?e:d;a.didError=!1;0===d?(a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=
0,a.latestPingedTime=0):(e=a.latestPendingTime,0!==e&&(e<d?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime<d&&(a.earliestPendingTime=a.latestPendingTime)),e=a.earliestSuspendedTime,0===e?Ze(a,d):d>a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,Ze(a,d)):d<e&&Ze(a,d));$e(0,a);Ig.current=null;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;xe=Gd;e=Td();if(Ud(e)){if("selectionStart"in e)var f=
{start:e.selectionStart,end:e.selectionEnd};else a:{f=(f=e.ownerDocument)&&f.defaultView||window;var g=f.getSelection&&f.getSelection();if(g&&0!==g.rangeCount){f=g.anchorNode;var k=g.anchorOffset,h=g.focusNode;g=g.focusOffset;try{f.nodeType,h.nodeType}catch(Xa){f=null;break a}var l=0,m=-1,t=-1,x=0,z=0,y=e,u=null;b:for(;;){for(var v;;){y!==f||0!==k&&3!==y.nodeType||(m=l+k);y!==h||0!==g&&3!==y.nodeType||(t=l+g);3===y.nodeType&&(l+=y.nodeValue.length);if(null===(v=y.firstChild))break;u=y;y=v}for(;;){if(y===
e)break b;u===f&&++x===k&&(m=l);u===h&&++z===g&&(t=l);if(null!==(v=y.nextSibling))break;y=u;u=y.parentNode}y=v}f=-1===m||-1===t?null:{start:m,end:t}}else f=null}f=f||{start:0,end:0}}else f=null;ye={focusedElem:e,selectionRange:f};Gd=!1;for(R=d;null!==R;){e=!1;f=void 0;try{for(;null!==R;){if(R.effectTag&256){var r=R.alternate;a:switch(k=R,k.tag){case 2:case 3:if(k.effectTag&256&&null!==r){var p=r.memoizedProps,D=r.memoizedState,S=k.stateNode;S.props=k.memoizedProps;S.state=k.memoizedState;var yh=S.getSnapshotBeforeUpdate(p,
D);S.__reactInternalSnapshotBeforeUpdate=yh}break a;case 5:case 7:case 8:case 6:break a;default:w("163")}}R=R.nextEffect}}catch(Xa){e=!0,f=Xa}e&&(null===R?w("178"):void 0,wg(R,f),null!==R&&(R=R.nextEffect))}for(R=d;null!==R;){r=!1;p=void 0;try{for(;null!==R;){var A=R.effectTag;A&16&&oe(R.stateNode,"");if(A&128){var B=R.alternate;if(null!==B){var q=B.ref;null!==q&&("function"===typeof q?q(null):q.current=null)}}switch(A&14){case 2:Ag(R);R.effectTag&=-3;break;case 6:Ag(R);R.effectTag&=-3;Bg(R.alternate,
R);break;case 4:Bg(R.alternate,R);break;case 8:D=R,yg(D),D.return=null,D.child=null,D.alternate&&(D.alternate.child=null,D.alternate.return=null)}R=R.nextEffect}}catch(Xa){r=!0,p=Xa}r&&(null===R?w("178"):void 0,wg(R,p),null!==R&&(R=R.nextEffect))}q=ye;B=Td();A=q.focusedElem;p=q.selectionRange;if(B!==A&&A&&A.ownerDocument&&Sd(A.ownerDocument.documentElement,A)){null!==p&&Ud(A)&&(B=p.start,q=p.end,void 0===q&&(q=B),"selectionStart"in A?(A.selectionStart=B,A.selectionEnd=Math.min(q,A.value.length)):
(r=A.ownerDocument||document,B=(r?r.defaultView:window).getSelection(),D=A.textContent.length,q=Math.min(p.start,D),p=void 0===p.end?q:Math.min(p.end,D),!B.extend&&q>p&&(D=p,p=q,q=D),D=Rd(A,q),S=Rd(A,p),D&&S&&(1!==B.rangeCount||B.anchorNode!==D.node||B.anchorOffset!==D.offset||B.focusNode!==S.node||B.focusOffset!==S.offset)&&(r=r.createRange(),r.setStart(D.node,D.offset),B.removeAllRanges(),q>p?(B.addRange(r),B.extend(S.node,S.offset)):(r.setEnd(S.node,S.offset),B.addRange(r)))));B=[];for(q=A;q=q.parentNode;)1===
q.nodeType&&B.push({element:q,left:q.scrollLeft,top:q.scrollTop});"function"===typeof A.focus&&A.focus();for(A=0;A<B.length;A++)q=B[A],q.element.scrollLeft=q.left,q.element.scrollTop=q.top}ye=null;Gd=!!xe;xe=null;a.current=b;for(R=d;null!==R;){d=!1;A=void 0;try{for(B=c;null!==R;){var Sa=R.effectTag;if(Sa&36){var oc=R.alternate;q=R;r=B;switch(q.tag){case 2:case 3:var X=q.stateNode;if(q.effectTag&4)if(null===oc)X.props=q.memoizedProps,X.state=q.memoizedState,X.componentDidMount();else{var Ih=oc.memoizedProps,
Jh=oc.memoizedState;X.props=q.memoizedProps;X.state=q.memoizedState;X.componentDidUpdate(Ih,Jh,X.__reactInternalSnapshotBeforeUpdate)}var kg=q.updateQueue;null!==kg&&(X.props=q.memoizedProps,X.state=q.memoizedState,lf(q,kg,X,r));break;case 5:var lg=q.updateQueue;if(null!==lg){p=null;if(null!==q.child)switch(q.child.tag){case 7:p=q.child.stateNode;break;case 2:case 3:p=q.child.stateNode}lf(q,lg,p,r)}break;case 7:var Kh=q.stateNode;null===oc&&q.effectTag&4&&ze(q.type,q.memoizedProps)&&Kh.focus();break;
case 8:break;case 6:break;case 15:break;case 16:break;default:w("163")}}if(Sa&128){var Ac=R.ref;if(null!==Ac){var mg=R.stateNode;switch(R.tag){case 7:var Od=mg;break;default:Od=mg}"function"===typeof Ac?Ac(Od):Ac.current=Od}}var Lh=R.nextEffect;R.nextEffect=null;R=Lh}}catch(Xa){d=!0,A=Xa}d&&(null===R?w("178"):void 0,wg(R,A),null!==R&&(R=R.nextEffect))}Lg=Og=!1;"function"===typeof Oe&&Oe(b.stateNode);Sa=b.expirationTime;b=b.childExpirationTime;b=0===Sa||0!==b&&b<Sa?b:Sa;0===b&&(Fg=null);a.expirationTime=
b;a.finishedWork=null}function Tg(){return eh?!0:null===hh||hh.timeRemaining()>nh?!1:eh=!0}function Dg(a){null===Y?w("246"):void 0;Y.expirationTime=0;fh||(fh=!0,gh=a)}function sh(a,b){var c=W;W=!0;try{return a(b)}finally{(W=c)||V||Yg(1,null)}}function th(a,b){if(W&&!Wg){Wg=!0;try{return a(b)}finally{Wg=!1}}return a(b)}function uh(a,b,c){if(Ug)return a(b,c);W||V||0===Vg||(Yg(Vg,null),Vg=0);var d=Ug,e=W;W=Ug=!0;try{return a(b,c)}finally{Ug=d,(W=e)||V||Yg(1,null)}}
function vh(a){if(!a)return Fe;a=a._reactInternalFiber;a:{2!==jd(a)||2!==a.tag&&3!==a.tag?w("170"):void 0;var b=a;do{switch(b.tag){case 5:b=b.stateNode.context;break a;case 2:if(M(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}break;case 3:if(M(b.type._reactResult)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);w("171");b=void 0}if(2===a.tag){var c=a.type;if(M(c))return Le(a,c,b)}else if(3===a.tag&&(c=a.type._reactResult,M(c)))return Le(a,
c,b);return b}function wh(a,b,c,d,e){var f=b.current;c=vh(c);null===b.context?b.context=c:b.pendingContext=c;b=e;e=df(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);ff(f,e);If(f,d);return d}function xh(a,b,c,d){var e=b.current,f=Gf();e=Hf(f,e);return wh(a,b,c,e,d)}function zh(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 7:return a.child.stateNode;default:return a.child.stateNode}}
function Ah(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ac,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Fb=function(a,b,c){switch(b){case "input":Dc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Na(d);e?void 0:w("90");Xb(d);Dc(d,e)}}}break;case "textarea":he(a,c);break;case "select":b=c.value,null!=b&&ee(a,!!c.multiple,b,!1)}};
function Bh(a){var b=2+25*(((Gf()-2+500)/25|0)+1);b<=Jg&&(b=Jg+1);this._expirationTime=Jg=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Bh.prototype.render=function(a){this._defer?void 0:w("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Ch;wh(a,b,null,c,d._onCommit);return d};
Bh.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Bh.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:w("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?w("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;b=c;V?w("253"):void 0;Y=a;Z=b;Xg(a,b,!0);Yg(1,null);b=this._next;this._next=null;b=a.firstBatch=b;null!==
b&&b._hasChildren&&b.render(b._children)}else this._next=null,this._defer=!1};Bh.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Ch(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Ch.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Ch.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?w("191",c):void 0;c()}}};
function Dh(a,b,c){b=new Se(5,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
Dh.prototype.render=function(a,b){var c=this._internalRoot,d=new Ch;b=void 0===b?null:b;null!==b&&d.then(b);xh(a,c,null,d._onCommit);return d};Dh.prototype.unmount=function(a){var b=this._internalRoot,c=new Ch;a=void 0===a?null:a;null!==a&&c.then(a);xh(null,b,null,c._onCommit);return c};Dh.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Ch;c=void 0===c?null:c;null!==c&&e.then(c);xh(b,d,a,e._onCommit);return e};
Dh.prototype.createBatch=function(){var a=new Bh(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime<=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function Eh(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Lb=sh;Mb=uh;Nb=function(){V||0===Vg||(Yg(Vg,null),Vg=0)};
function Fh(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Dh(a,!1,b)}
function Gh(a,b,c,d,e){Eh(c)?void 0:w("200");var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=zh(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Fh(c,d);if("function"===typeof e){var k=e;e=function(){var a=zh(f._internalRoot);k.call(a)}}th(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return zh(f._internalRoot)}
function Hh(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Eh(b)?void 0:w("200");return Ah(a,b,null,c)}
var Mh={createPortal:Hh,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?w("188"):w("268",Object.keys(a)));a=md(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){return Gh(null,a,b,!0,c)},render:function(a,b,c){return Gh(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?w("38"):void 0;return Gh(a,b,c,!1,d)},unmountComponentAtNode:function(a){Eh(a)?
void 0:w("40");return a._reactRootContainer?(th(function(){Gh(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Hh.apply(void 0,arguments)},unstable_batchedUpdates:sh,unstable_interactiveUpdates:uh,flushSync:function(a,b){V?w("187"):void 0;var c=W;W=!0;try{return bh(a,b)}finally{W=c,Yg(1,null)}},unstable_flushControlled:function(a){var b=W;W=!0;try{bh(a)}finally{(W=b)||V||Yg(1,null)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[La,
Ma,Na,qa,Ua,function(a){za(a,Ta)},Jb,Kb,Id,Ga]},unstable_createRoot:function(a,b){Eh(a)?void 0:w("278");return new Dh(a,!0,null!=b&&!0===b.hydrate)}};(function(a){var b=a.findFiberByHostInstance;return Re(n({},a,{findHostInstanceByFiber:function(a){a=md(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ka,bundleType:0,version:"16.5.0",rendererPackageName:"react-dom"});var Nh={default:Mh},Oh=Nh&&Mh||Nh;
module.exports=Oh.default||Oh;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(90);
} else {
  module.exports = require('./cjs/schedule.development.js');
}


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.0
 * schedule.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var d=!("undefined"===typeof window||!window.document||!window.document.createElement),f=Date,g="function"===typeof setTimeout?setTimeout:void 0,h="function"===typeof clearTimeout?clearTimeout:void 0,l="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,m="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,n="object"===typeof performance&&"function"===typeof performance.now;
exports.unstable_now=void 0;if(n){var p=performance;exports.unstable_now=function(){return p.now()}}else exports.unstable_now=function(){return f.now()};exports.unstable_scheduleWork=void 0;exports.unstable_cancelScheduledWork=void 0;
if(d){var q=null,r=null,t=-1,u=!1,v=!1,w=void 0,x=void 0,y=function(a){w=l(function(b){h(x);a(b)});x=g(function(){m(w);a(exports.unstable_now())},100)},z=0,A=33,B=33,C={didTimeout:!1,timeRemaining:function(){var a=z-exports.unstable_now();return 0<a?a:0}},E=function(a,b){var c=a.scheduledCallback,e=!1;try{c(b),e=!0}finally{exports.unstable_cancelScheduledWork(a),e||(u=!0,window.postMessage(D,"*"))}},D="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(a){if(a.source===
window&&a.data===D&&(u=!1,null!==q)){if(null!==q){var b=exports.unstable_now();if(!(-1===t||t>b)){a=-1;for(var c=[],e=q;null!==e;){var k=e.timeoutTime;-1!==k&&k<=b?c.push(e):-1!==k&&(-1===a||k<a)&&(a=k);e=e.next}if(0<c.length)for(C.didTimeout=!0,b=0,e=c.length;b<e;b++)E(c[b],C);t=a}}for(a=exports.unstable_now();0<z-a&&null!==q;)a=q,C.didTimeout=!1,E(a,C),a=exports.unstable_now();null===q||v||(v=!0,y(F))}},!1);var F=function(a){v=!1;var b=a-z+B;b<B&&A<B?(8>b&&(b=8),B=b<A?A:b):A=b;z=a+B;u||(u=!0,window.postMessage(D,
"*"))};exports.unstable_scheduleWork=function(a,b){var c=-1;null!=b&&"number"===typeof b.timeout&&(c=exports.unstable_now()+b.timeout);if(-1===t||-1!==c&&c<t)t=c;a={scheduledCallback:a,timeoutTime:c,prev:null,next:null};null===q?q=a:(b=a.prev=r,null!==b&&(b.next=a));r=a;v||(v=!0,y(F));return a};exports.unstable_cancelScheduledWork=function(a){if(null!==a.prev||q===a){var b=a.next,c=a.prev;a.next=null;a.prev=null;null!==b?null!==c?(c.next=b,b.prev=c):(b.prev=null,q=b):null!==c?(c.next=null,r=c):r=
q=null}}}else{var G=new Map;exports.unstable_scheduleWork=function(a){var b={scheduledCallback:a,timeoutTime:0,next:null,prev:null},c=g(function(){a({timeRemaining:function(){return Infinity},didTimeout:!1})});G.set(a,c);return b};exports.unstable_cancelScheduledWork=function(a){var b=G.get(a.scheduledCallback);G.delete(a);h(b)}};


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui_connect__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui_connect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui_connect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vkontakte_vkui_dist_vkui_css__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vkontakte_vkui_dist_vkui_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__vkontakte_vkui_dist_vkui_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__panels_Home__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__panels_Persik__ = __webpack_require__(96);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var App=function(_React$Component){_inherits(App,_React$Component);function App(props){_classCallCheck(this,App);var _this=_possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).call(this,props));_this.go=function(e){_this.setState({activePanel:e.currentTarget.dataset.to});};_this.state={activePanel:'home',fetchedUser:null};return _this;}_createClass(App,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;__WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui_connect___default.a.subscribe(function(e){switch(e.detail.type){case'VKWebAppGetUserInfoResult':_this2.setState({fetchedUser:e.detail.data});break;default:console.log(e.detail.type);}});__WEBPACK_IMPORTED_MODULE_1__vkontakte_vkui_connect___default.a.send('VKWebAppGetUserInfo',{});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui__["View"],{activePanel:this.state.activePanel},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__panels_Home__["a" /* default */],{id:'home',fetchedUser:this.state.fetchedUser,go:this.go}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__panels_Persik__["a" /* default */],{id:'persik',go:this.go}));}}]);return App;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(93);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui__);
var Home=function Home(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui__["Panel"],{id:props.id},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui__["PanelHeader"],null,'Example'),props.fetchedUser&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui__["Group"],{title:'User Data Fetched with VK Connect'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui__["ListItem"],{before:__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui__["Avatar"],{src:props.fetchedUser.photo_200}),description:props.fetchedUser.city.title},props.fetchedUser.first_name+' '+props.fetchedUser.last_name)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui__["Group"],{title:'Navigation Example'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui__["Div"],null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui__["Button"],{size:'xl',level:'2',onClick:props.go,'data-to':'persik'},'Show me the Persik, please'))));};Home.propTypes={id:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,go:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,fetchedUser:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({photo_200:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,first_name:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,last_name:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,city:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({title:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string})})};/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_persik_png__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_persik_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__img_persik_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Persik_css__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Persik_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Persik_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vkontakte_icons_dist_28_chevron_back__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vkontakte_icons_dist_28_chevron_back___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__vkontakte_icons_dist_28_chevron_back__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vkontakte_icons_dist_24_back__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vkontakte_icons_dist_24_back___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__vkontakte_icons_dist_24_back__);
var osname=Object(__WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui__["platform"])();var Persik=function Persik(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui__["Panel"],{id:props.id},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui__["PanelHeader"],{left:__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui__["HeaderButton"],{onClick:props.go,'data-to':'home'},osname===__WEBPACK_IMPORTED_MODULE_2__vkontakte_vkui__["IOS"]?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__vkontakte_icons_dist_28_chevron_back___default.a,null):__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__vkontakte_icons_dist_24_back___default.a,null))},'Persik'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{className:'Persik',src:__WEBPACK_IMPORTED_MODULE_3__img_persik_png___default.a,alt:'Persik The Cat'}));};Persik.propTypes={id:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,go:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired};/* harmony default export */ __webpack_exports__["a"] = (Persik);

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/persik.4e1ec840.png";

/***/ }),
/* 98 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(3), __webpack_require__(28), __webpack_require__(27));
	else if(typeof define === 'function' && define.amd)
		define(["react", "svg-sprite-loader/runtime/browser-sprite.build", "svg-baker-runtime/browser-symbol"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("svg-sprite-loader/runtime/browser-sprite.build"), require("svg-baker-runtime/browser-symbol")) : factory(root["react"], root["svg-sprite-loader/runtime/browser-sprite.build"], root["svg-baker-runtime/browser-symbol"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _browserSymbol = __webpack_require__(2);

var _browserSymbol2 = _interopRequireDefault(_browserSymbol);

var _browserSprite = __webpack_require__(1);

var _browserSprite2 = _interopRequireDefault(_browserSprite);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var symbol = new _browserSymbol2.default({
  "id": "chevron_back_28",
  "use": "chevron_back_28-usage",
  "viewBox": "0 0 20 28",
  "content": "<symbol viewBox=\"0 0 20 28\" id=\"chevron_back_28\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M0 0h20v28H0z\" /><path d=\"M4.56 12.94L13 4.5a1.414 1.414 0 0 1 2 2L7.5 14l7.5 7.5a1.414 1.414 0 0 1-2 2l-8.44-8.44a1.5 1.5 0 0 1 0-2.12z\" fill=\"currentColor\" /></g></symbol>"
});
var result = _browserSprite2.default.add(symbol);

var width = symbol.viewBox.split(' ')[2];
var height = symbol.viewBox.split(' ')[3];
var size = Math.max(width, height);

function SvgIcon(_ref) {
  var className = _ref.className,
      fill = _ref.fill,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "fill", "style", "getRootRef"]);

  return _react2.default.createElement(
    "div",
    _extends({}, restProps, {
      ref: getRootRef,
      className: 'Icon' + ' Icon--' + size + ' Icon--' + symbol.id + ' ' + (className || ''),
      style: _extends({}, style, { width: width + 'px', height: height + 'px' })
    }),
    _react2.default.createElement(
      "svg",
      { viewBox: symbol.viewBox, width: width, height: height, style: { display: 'block' } },
      _react2.default.createElement("use", { xlinkHref: '#' + symbol.id, style: { fill: 'currentColor', color: fill } })
    )
  );
}
exports.default = SvgIcon;

/***/ })

/******/ });
});

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(3), __webpack_require__(28), __webpack_require__(27));
	else if(typeof define === 'function' && define.amd)
		define(["react", "svg-sprite-loader/runtime/browser-sprite.build", "svg-baker-runtime/browser-symbol"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("svg-sprite-loader/runtime/browser-sprite.build"), require("svg-baker-runtime/browser-symbol")) : factory(root["react"], root["svg-sprite-loader/runtime/browser-sprite.build"], root["svg-baker-runtime/browser-symbol"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 210);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _browserSymbol = __webpack_require__(2);

var _browserSymbol2 = _interopRequireDefault(_browserSymbol);

var _browserSprite = __webpack_require__(1);

var _browserSprite2 = _interopRequireDefault(_browserSprite);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var symbol = new _browserSymbol2.default({
  "id": "back_24",
  "use": "back_24-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol viewBox=\"0 0 24 24\" id=\"back_24\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M24 0H0v24h24z\" /><path d=\"M7.8 11l4.9-4.9a.99.99 0 0 0-1.4-1.4l-6.593 6.593a1 1 0 0 0 0 1.414L11.3 19.3a.99.99 0 0 0 1.4-1.4L7.8 13H20a1 1 0 0 0 0-2H7.8z\" fill=\"currentColor\" /></g></symbol>"
});
var result = _browserSprite2.default.add(symbol);

var width = symbol.viewBox.split(' ')[2];
var height = symbol.viewBox.split(' ')[3];
var size = Math.max(width, height);

function SvgIcon(_ref) {
  var className = _ref.className,
      fill = _ref.fill,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "fill", "style", "getRootRef"]);

  return _react2.default.createElement(
    "div",
    _extends({}, restProps, {
      ref: getRootRef,
      className: 'Icon' + ' Icon--' + size + ' Icon--' + symbol.id + ' ' + (className || ''),
      style: _extends({}, style, { width: width + 'px', height: height + 'px' })
    }),
    _react2.default.createElement(
      "svg",
      { viewBox: symbol.viewBox, width: width, height: height, style: { display: 'block' } },
      _react2.default.createElement("use", { xlinkHref: '#' + symbol.id, style: { fill: 'currentColor', color: fill } })
    )
  );
}
exports.default = SvgIcon;

/***/ })

/******/ });
});

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = register;
/* unused harmony export unregister */
// In production, we register a service worker to serve assets from local cache.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.
// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
function registerValidSW(swUrl){navigator.serviceWorker.register(swUrl).then(function(registration){registration.onupdatefound=function(){var installingWorker=registration.installing;installingWorker.onstatechange=function(){if(installingWorker.state==='installed'){if(navigator.serviceWorker.controller){// At this point, the old content will have been purged and
// the fresh content will have been added to the cache.
// It's the perfect time to display a "New content is
// available; please refresh." message in your web app.
console.log('New content is available; please refresh.');}else{// At this point, everything has been precached.
// It's the perfect time to display a
// "Content is cached for offline use." message.
console.log('Content is cached for offline use.');}}};};}).catch(function(error){console.error('Error during service worker registration:',error);});}function checkValidServiceWorker(swUrl){// Check if the service worker can be found. If it can't reload the page.
fetch(swUrl).then(function(response){// Ensure service worker exists, and that we really are getting a JS file.
if(response.status===404||response.headers.get('content-type').indexOf('javascript')===-1){// No service worker found. Probably a different app. Reload the page.
navigator.serviceWorker.ready.then(function(registration){registration.unregister().then(function(){window.location.reload();});});}else{// Service worker found. Proceed as normal.
registerValidSW(swUrl);}}).catch(function(){console.log('No internet connection found. App is running in offline mode.');});}var isLocalhost=Boolean(window.location.hostname==='localhost'||// [::1] is the IPv6 localhost address.
window.location.hostname==='[::1]'||// 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function register(){if("production"==='production'&&'serviceWorker'in navigator){// The URL constructor is available in all browsers that support SW.
var publicUrl=new URL("",window.location);if(publicUrl.origin!==window.location.origin){// Our service worker won't work if PUBLIC_URL is on a different origin
// from what our page is served on. This might happen if a CDN is used to
// serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
return;}window.addEventListener('load',function(){var swUrl=""+'/service-worker.js';if(isLocalhost){// This is running on localhost. Lets check if a service worker still exists or not.
checkValidServiceWorker(swUrl);// Add some additional logging to localhost, pointing developers to the
// service worker/PWA documentation.
navigator.serviceWorker.ready.then(function(){console.log('This web app is being served cache-first by a service '+'worker. To learn more, visit https://goo.gl/SC7cgQ');});}else{// Is not local host. Just register service worker
registerValidSW(swUrl);}});}}function unregister(){if('serviceWorker'in navigator){navigator.serviceWorker.ready.then(function(registration){registration.unregister();});}}

/***/ })
/******/ ]);
//# sourceMappingURL=main.8b79e155.js.map