(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Trois"] = factory();
	else
		root["Trois"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.version = undefined;
	exports.install = install;
	
	var _Scene = __webpack_require__(1);
	
	var _Scene2 = _interopRequireDefault(_Scene);
	
	var _PerspectiveCamera = __webpack_require__(2);
	
	var _PerspectiveCamera2 = _interopRequireDefault(_PerspectiveCamera);
	
	var _Mesh = __webpack_require__(6);
	
	var _Mesh2 = _interopRequireDefault(_Mesh);
	
	var _BoxGeometry = __webpack_require__(8);
	
	var _BoxGeometry2 = _interopRequireDefault(_BoxGeometry);
	
	var _MeshBasicMaterial = __webpack_require__(10);
	
	var _MeshBasicMaterial2 = _interopRequireDefault(_MeshBasicMaterial);
	
	var _position = __webpack_require__(11);
	
	var _position2 = _interopRequireDefault(_position);
	
	var _rotation = __webpack_require__(13);
	
	var _rotation2 = _interopRequireDefault(_rotation);
	
	var _scale = __webpack_require__(14);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var version = exports.version = '0.0.0';
	
	function install(Vue, THREE) {
	  Vue.component('trois-scene', (0, _Scene2.default)(THREE));
	
	  Vue.component('trois-perspective-camera', (0, _PerspectiveCamera2.default)(THREE));
	
	  Vue.component('trois-mesh', (0, _Mesh2.default)(THREE));
	
	  Vue.component('trois-box-geometry', (0, _BoxGeometry2.default)(THREE));
	
	  Vue.component('trois-mesh-basic-material', (0, _MeshBasicMaterial2.default)(THREE));
	
	  Vue.component('trois-position', _position2.default);
	  Vue.component('trois-rotation', _rotation2.default);
	  Vue.component('trois-scale', _scale2.default);
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (_ref) {
	  var Scene = _ref.Scene;
	  var WebGLRenderer = _ref.WebGLRenderer;
	  return {
	    template: '<canvas><slot></slot></canvas>',
	    beforeCompile: function beforeCompile() {
	      this.__trois = new Scene();
	      this.__troisRenderer = new WebGLRenderer({
	        canvas: this.$el
	      });
	    },
	    attached: function attached() {
	      this.__troisWillRender = false;
	      this.render();
	    },
	
	    methods: {
	      render: function render() {
	        var _this = this;
	
	        if (!this.__troisWillRender) {
	          this.__troisWillRender = true;
	          this.$nextTick(function () {
	            _this.__troisRenderer.render(_this.__trois, _this.__trois.__troisCamera);
	            _this.__troisWillRender = false;
	          });
	        }
	      }
	    },
	    events: {
	      update: 'render'
	    }
	  };
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trois = __webpack_require__(3);
	
	var _trois2 = _interopRequireDefault(_trois);
	
	var _member = __webpack_require__(4);
	
	var _member2 = _interopRequireDefault(_member);
	
	var _props = __webpack_require__(5);
	
	var _props2 = _interopRequireDefault(_props);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var PerspectiveCamera = _ref.PerspectiveCamera;
	  return {
	    mixins: [_trois2.default, (0, _member2.default)(function () {
	      return new PerspectiveCamera();
	    }, '__troisCamera'), (0, _props2.default)({
	      fov: Number,
	      near: Number,
	      aspect: Number,
	      far: Number
	    })],
	    compiled: function compiled() {
	      this.updateProjectionMatrix();
	    },
	
	    methods: {
	      updateProjectionMatrix: function updateProjectionMatrix() {
	        this.__trois.updateProjectionMatrix();
	      }
	    },
	    watch: {
	      fov: 'updateProjectionMatrix',
	      near: 'updateProjectionMatrix',
	      aspect: 'updateProjectionMatrix',
	      far: 'updateProjectionMatrix'
	    }
	  };
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  template: '<slot></slot>',
	  replace: false
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (factory, propName) {
	  return {
	    beforeCompile: function beforeCompile() {
	      this.__trois = factory();
	    },
	    compiled: function compiled() {
	      this.$parent.__trois[propName] = this.__trois;
	    },
	    beforeDestroy: function beforeDestroy() {
	      this.$parent.__trois[propName] = null;
	    },
	    destroyed: function destroyed() {
	      this.__trois = null;
	    }
	  };
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (props) {
	  var propNames = Array.isArray(props) ? props : Object.keys(props);
	
	  var mixin = {
	    props: props,
	    watch: {},
	    beforeCompile: function beforeCompile() {
	      var _this = this;
	
	      propNames.forEach(function (propName) {
	        var propValue = _this[propName];
	        var wrapper = props[propName] && props[propName].wrapper;
	        _this.__trois[propName] = wrapper ? wrapper(propValue) : propValue;
	      });
	    }
	  };
	
	  propNames.forEach(function (propName) {
	    var wrapper = props[propName] && props[propName].wrapper;
	    mixin.watch[propName] = wrapper ? function (propValue) {
	      this.__trois[propName] = wrapper(propValue);
	      this.$dispatch('update');
	    } : function (propValue) {
	      this.__trois[propName] = propValue;
	      this.$dispatch('update');
	    };
	  });
	
	  return mixin;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trois = __webpack_require__(3);
	
	var _trois2 = _interopRequireDefault(_trois);
	
	var _children = __webpack_require__(7);
	
	var _children2 = _interopRequireDefault(_children);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var Mesh = _ref.Mesh;
	  return {
	    mixins: [_trois2.default, (0, _children2.default)(function () {
	      return new Mesh();
	    })]
	  };
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (factory) {
	  return {
	    beforeCompile: function beforeCompile() {
	      this.__trois = factory();
	    },
	    compiled: function compiled() {
	      this.$parent.__trois.add(this.__trois);
	    },
	    beforeDestroy: function beforeDestroy() {
	      this.$parent.__trois.remove(this.__trois);
	    },
	    destroyed: function destroyed() {
	      this.__trois = null;
	    }
	  };
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trois = __webpack_require__(3);
	
	var _trois2 = _interopRequireDefault(_trois);
	
	var _member = __webpack_require__(4);
	
	var _member2 = _interopRequireDefault(_member);
	
	var _dispose = __webpack_require__(9);
	
	var _dispose2 = _interopRequireDefault(_dispose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var BoxGeometry = _ref.BoxGeometry;
	  return {
	    mixins: [_trois2.default, (0, _member2.default)(function () {
	      return new BoxGeometry(1, 1, 1);
	    }, 'geometry'), _dispose2.default]
	  };
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  beforeDestroy: function beforeDestroy() {
	    this.__trois.dispose();
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trois = __webpack_require__(3);
	
	var _trois2 = _interopRequireDefault(_trois);
	
	var _member = __webpack_require__(4);
	
	var _member2 = _interopRequireDefault(_member);
	
	var _props = __webpack_require__(5);
	
	var _props2 = _interopRequireDefault(_props);
	
	var _dispose = __webpack_require__(9);
	
	var _dispose2 = _interopRequireDefault(_dispose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var MeshBasicMaterial = _ref.MeshBasicMaterial;
	  var Color = _ref.Color;
	  return {
	    mixins: [_trois2.default, (0, _member2.default)(function () {
	      return new MeshBasicMaterial();
	    }, 'material'), (0, _props2.default)({
	      color: {
	        wrapper: function wrapper(color) {
	          return new Color(color);
	        }
	      }
	    }), _dispose2.default]
	  };
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trois = __webpack_require__(3);
	
	var _trois2 = _interopRequireDefault(_trois);
	
	var _value = __webpack_require__(12);
	
	var _value2 = _interopRequireDefault(_value);
	
	var _props = __webpack_require__(5);
	
	var _props2 = _interopRequireDefault(_props);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_trois2.default, (0, _value2.default)('position'), (0, _props2.default)({
	    x: Number,
	    y: Number,
	    z: Number
	  })]
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (propName) {
	  return {
	    beforeCompile: function beforeCompile() {
	      this.__trois = this.$parent.__trois[propName];
	    },
	    destroyed: function destroyed() {
	      this.__trois = null;
	    }
	  };
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trois = __webpack_require__(3);
	
	var _trois2 = _interopRequireDefault(_trois);
	
	var _value = __webpack_require__(12);
	
	var _value2 = _interopRequireDefault(_value);
	
	var _props = __webpack_require__(5);
	
	var _props2 = _interopRequireDefault(_props);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_trois2.default, (0, _value2.default)('rotation'), (0, _props2.default)({
	    x: Number,
	    y: Number,
	    z: Number,
	    order: String
	  })]
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trois = __webpack_require__(3);
	
	var _trois2 = _interopRequireDefault(_trois);
	
	var _value = __webpack_require__(12);
	
	var _value2 = _interopRequireDefault(_value);
	
	var _props = __webpack_require__(5);
	
	var _props2 = _interopRequireDefault(_props);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_trois2.default, (0, _value2.default)('scale'), (0, _props2.default)({
	    x: Number,
	    y: Number,
	    z: Number
	  })]
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=trois.js.map