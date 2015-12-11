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
	
	var _Mesh = __webpack_require__(2);
	
	var _Mesh2 = _interopRequireDefault(_Mesh);
	
	var _PerspectiveCamera = __webpack_require__(5);
	
	var _PerspectiveCamera2 = _interopRequireDefault(_PerspectiveCamera);
	
	var _AmbientLight = __webpack_require__(8);
	
	var _AmbientLight2 = _interopRequireDefault(_AmbientLight);
	
	var _DirectionalLight = __webpack_require__(10);
	
	var _DirectionalLight2 = _interopRequireDefault(_DirectionalLight);
	
	var _PointLight = __webpack_require__(11);
	
	var _PointLight2 = _interopRequireDefault(_PointLight);
	
	var _BoxGeometry = __webpack_require__(12);
	
	var _BoxGeometry2 = _interopRequireDefault(_BoxGeometry);
	
	var _MeshBasicMaterial = __webpack_require__(14);
	
	var _MeshBasicMaterial2 = _interopRequireDefault(_MeshBasicMaterial);
	
	var _MeshLambertMaterial = __webpack_require__(16);
	
	var _MeshLambertMaterial2 = _interopRequireDefault(_MeshLambertMaterial);
	
	var _MeshPhongMaterial = __webpack_require__(17);
	
	var _MeshPhongMaterial2 = _interopRequireDefault(_MeshPhongMaterial);
	
	var _position = __webpack_require__(18);
	
	var _position2 = _interopRequireDefault(_position);
	
	var _rotation = __webpack_require__(20);
	
	var _rotation2 = _interopRequireDefault(_rotation);
	
	var _scale = __webpack_require__(21);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	var _materialCache = __webpack_require__(22);
	
	var _materialCache2 = _interopRequireDefault(_materialCache);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var version = exports.version = '0.0.0';
	
	function install(Vue, THREE) {
	
	  Vue.use(_materialCache2.default);
	
	  Vue.component('trois-scene', (0, _Scene2.default)(THREE));
	  Vue.component('trois-mesh', (0, _Mesh2.default)(THREE));
	
	  Vue.component('trois-perspective-camera', (0, _PerspectiveCamera2.default)(THREE));
	
	  Vue.component('trois-ambient-light', (0, _AmbientLight2.default)(THREE));
	  Vue.component('trois-directional-light', (0, _DirectionalLight2.default)(THREE));
	  Vue.component('trois-point-light', (0, _PointLight2.default)(THREE));
	
	  Vue.component('trois-box-geometry', (0, _BoxGeometry2.default)(THREE));
	
	  Vue.component('trois-mesh-basic-material', (0, _MeshBasicMaterial2.default)(THREE));
	  Vue.component('trois-mesh-lambert-material', (0, _MeshLambertMaterial2.default)(THREE));
	  Vue.component('trois-mesh-phong-material', (0, _MeshPhongMaterial2.default)(THREE));
	
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
	    data: function data() {
	      return {
	        realWidth: 0,
	        realHeight: 0
	      };
	    },
	    props: {
	      width: {
	        type: Number,
	        default: 640
	      },
	      height: {
	        type: Number,
	        default: 480
	      }
	    },
	    beforeCompile: function beforeCompile() {
	      this.__trois = new Scene();
	      this.__troisRenderer = new WebGLRenderer({
	        canvas: this.$el
	      });
	    },
	    attached: function attached() {
	      this.setSize();
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
	      },
	      setSize: function setSize() {
	        this.__troisRenderer.setSize(this.width, this.height);
	      }
	    },
	    watch: {
	      width: 'setSize',
	      height: 'setSize'
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
	
	var _children = __webpack_require__(4);
	
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

	'use strict';
	
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
	      this.$dispatch('update');
	    },
	    beforeDestroy: function beforeDestroy() {
	      this.$parent.__trois.remove(this.__trois);
	      this.$dispatch('update');
	    },
	    destroyed: function destroyed() {
	      this.__trois = null;
	    }
	  };
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trois = __webpack_require__(3);
	
	var _trois2 = _interopRequireDefault(_trois);
	
	var _member = __webpack_require__(6);
	
	var _member2 = _interopRequireDefault(_member);
	
	var _props = __webpack_require__(7);
	
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
	      far: Number
	    })],
	    compiled: function compiled() {
	      this.setAspect(this.aspect);
	    },
	
	    computed: {
	      aspect: function aspect() {
	        return this.$parent.width / this.$parent.height;
	      }
	    },
	    methods: {
	      setAspect: function setAspect(aspect) {
	        this.__trois.aspect = aspect;
	        this.updateProjectionMatrix();
	      },
	      updateProjectionMatrix: function updateProjectionMatrix() {
	        this.__trois.updateProjectionMatrix();
	        this.$dispatch('update');
	      }
	    },
	    watch: {
	      fov: 'updateProjectionMatrix',
	      near: 'updateProjectionMatrix',
	      far: 'updateProjectionMatrix',
	      aspect: 'setAspect'
	    }
	  };
	};

/***/ },
/* 6 */
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
/* 7 */
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
	        if (propValue != null) {
	          var wrapper = props[propName] && props[propName].__troisWrapper;
	          _this.__trois[propName] = wrapper ? wrapper(propValue) : propValue;
	        }
	      });
	    }
	  };
	
	  propNames.forEach(function (propName) {
	    var wrapper = props[propName] && props[propName].__troisWrapper;
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trois = __webpack_require__(3);
	
	var _trois2 = _interopRequireDefault(_trois);
	
	var _children = __webpack_require__(4);
	
	var _children2 = _interopRequireDefault(_children);
	
	var _props = __webpack_require__(7);
	
	var _props2 = _interopRequireDefault(_props);
	
	var _light = __webpack_require__(9);
	
	var _light2 = _interopRequireDefault(_light);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var AmbientLight = _ref.AmbientLight;
	  var Color = _ref.Color;
	  return {
	    mixins: [_trois2.default, (0, _children2.default)(function () {
	      return new AmbientLight();
	    }), (0, _props2.default)({
	      color: {
	        __troisWrapper: function __troisWrapper(color) {
	          return new Color(color);
	        }
	      }
	    }), _light2.default]
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
	  compiled: function compiled() {
	    this.__troisMaterialCacheUpdate();
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.__troisMaterialCacheUpdate();
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
	
	var _children = __webpack_require__(4);
	
	var _children2 = _interopRequireDefault(_children);
	
	var _props = __webpack_require__(7);
	
	var _props2 = _interopRequireDefault(_props);
	
	var _light = __webpack_require__(9);
	
	var _light2 = _interopRequireDefault(_light);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var DirectionalLight = _ref.DirectionalLight;
	  var Color = _ref.Color;
	  return {
	    mixins: [_trois2.default, (0, _children2.default)(function () {
	      return new DirectionalLight();
	    }), (0, _props2.default)({
	      color: {
	        __troisWrapper: function __troisWrapper(color) {
	          return new Color(color);
	        }
	      },
	      intensity: Number
	    }), _light2.default]
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
	
	var _children = __webpack_require__(4);
	
	var _children2 = _interopRequireDefault(_children);
	
	var _props = __webpack_require__(7);
	
	var _props2 = _interopRequireDefault(_props);
	
	var _light = __webpack_require__(9);
	
	var _light2 = _interopRequireDefault(_light);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var PointLight = _ref.PointLight;
	  var Color = _ref.Color;
	  return {
	    mixins: [_trois2.default, (0, _children2.default)(function () {
	      return new PointLight();
	    }), (0, _props2.default)({
	      color: {
	        __troisWrapper: function __troisWrapper(color) {
	          return new Color(color);
	        }
	      },
	      intensity: Number,
	      distance: Number,
	      decay: Number
	    }), _light2.default]
	  };
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trois = __webpack_require__(3);
	
	var _trois2 = _interopRequireDefault(_trois);
	
	var _member = __webpack_require__(6);
	
	var _member2 = _interopRequireDefault(_member);
	
	var _dispose = __webpack_require__(13);
	
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
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trois = __webpack_require__(3);
	
	var _trois2 = _interopRequireDefault(_trois);
	
	var _member = __webpack_require__(6);
	
	var _member2 = _interopRequireDefault(_member);
	
	var _props = __webpack_require__(7);
	
	var _props2 = _interopRequireDefault(_props);
	
	var _dispose = __webpack_require__(13);
	
	var _dispose2 = _interopRequireDefault(_dispose);
	
	var _material = __webpack_require__(15);
	
	var _material2 = _interopRequireDefault(_material);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var MeshBasicMaterial = _ref.MeshBasicMaterial;
	  var Color = _ref.Color;
	  return {
	    mixins: [_trois2.default, (0, _member2.default)(function () {
	      return new MeshBasicMaterial();
	    }, 'material'), (0, _props2.default)({
	      color: {
	        __troisWrapper: function __troisWrapper(color) {
	          return new Color(color);
	        }
	      }
	    }), _dispose2.default, _material2.default]
	  };
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  compiled: function compiled() {
	    this.__troisMaterialCacheAdd();
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.__troisMaterialCacheRemove();
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trois = __webpack_require__(3);
	
	var _trois2 = _interopRequireDefault(_trois);
	
	var _member = __webpack_require__(6);
	
	var _member2 = _interopRequireDefault(_member);
	
	var _props = __webpack_require__(7);
	
	var _props2 = _interopRequireDefault(_props);
	
	var _dispose = __webpack_require__(13);
	
	var _dispose2 = _interopRequireDefault(_dispose);
	
	var _material = __webpack_require__(15);
	
	var _material2 = _interopRequireDefault(_material);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var MeshLambertMaterial = _ref.MeshLambertMaterial;
	  var Color = _ref.Color;
	  return {
	    mixins: [_trois2.default, (0, _member2.default)(function () {
	      return new MeshLambertMaterial();
	    }, 'material'), (0, _props2.default)({
	      color: {
	        __troisWrapper: function __troisWrapper(color) {
	          return new Color(color);
	        }
	      }
	    }), _dispose2.default, _material2.default]
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trois = __webpack_require__(3);
	
	var _trois2 = _interopRequireDefault(_trois);
	
	var _member = __webpack_require__(6);
	
	var _member2 = _interopRequireDefault(_member);
	
	var _props = __webpack_require__(7);
	
	var _props2 = _interopRequireDefault(_props);
	
	var _dispose = __webpack_require__(13);
	
	var _dispose2 = _interopRequireDefault(_dispose);
	
	var _material = __webpack_require__(15);
	
	var _material2 = _interopRequireDefault(_material);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var MeshPhongMaterial = _ref.MeshPhongMaterial;
	  var Color = _ref.Color;
	  return {
	    mixins: [_trois2.default, (0, _member2.default)(function () {
	      return new MeshPhongMaterial();
	    }, 'material'), (0, _props2.default)({
	      color: {
	        __troisWrapper: function __troisWrapper(color) {
	          return new Color(color);
	        }
	      }
	    }), _dispose2.default, _material2.default]
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trois = __webpack_require__(3);
	
	var _trois2 = _interopRequireDefault(_trois);
	
	var _value = __webpack_require__(19);
	
	var _value2 = _interopRequireDefault(_value);
	
	var _props = __webpack_require__(7);
	
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
/* 19 */
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trois = __webpack_require__(3);
	
	var _trois2 = _interopRequireDefault(_trois);
	
	var _value = __webpack_require__(19);
	
	var _value2 = _interopRequireDefault(_value);
	
	var _props = __webpack_require__(7);
	
	var _props2 = _interopRequireDefault(_props);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_trois2.default, (0, _value2.default)('rotation'), (0, _props2.default)({
	    x: {
	      type: Number,
	      __troisWrapper: function __troisWrapper(rad) {
	        return rad / 180 * Math.PI;
	      }
	    },
	    y: {
	      type: Number,
	      __troisWrapper: function __troisWrapper(rad) {
	        return rad / 180 * Math.PI;
	      }
	    },
	    z: {
	      type: Number,
	      __troisWrapper: function __troisWrapper(rad) {
	        return rad / 180 * Math.PI;
	      }
	    },
	    order: String
	  })]
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trois = __webpack_require__(3);
	
	var _trois2 = _interopRequireDefault(_trois);
	
	var _value = __webpack_require__(19);
	
	var _value2 = _interopRequireDefault(_value);
	
	var _props = __webpack_require__(7);
	
	var _props2 = _interopRequireDefault(_props);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_trois2.default, (0, _value2.default)('scale'), (0, _props2.default)({
	    x: Number,
	    y: Number,
	    z: Number
	  })]
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    install: function install(Vue) {
	        Object.assign(Vue.prototype, {
	            __troisMaterialCache: {},
	            __troisMaterialCacheAdd: function __troisMaterialCacheAdd() {
	                this.__troisMaterialCache[this._uid] = this;
	            },
	            __troisMaterialCacheRemove: function __troisMaterialCacheRemove() {
	                delete this.__troisMaterialCache[this._uid];
	            },
	            __troisMaterialCacheUpdate: function __troisMaterialCacheUpdate() {
	                for (var uid in this.__troisMaterialCache) {
	                    this.__troisMaterialCache[uid].__trois.needsUpdate = true;
	                }
	            }
	        });
	    }
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=trois.js.map