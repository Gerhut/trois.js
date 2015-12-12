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
	
	var _PerspectiveCamera = __webpack_require__(6);
	
	var _PerspectiveCamera2 = _interopRequireDefault(_PerspectiveCamera);
	
	var _AmbientLight = __webpack_require__(9);
	
	var _AmbientLight2 = _interopRequireDefault(_AmbientLight);
	
	var _DirectionalLight = __webpack_require__(11);
	
	var _DirectionalLight2 = _interopRequireDefault(_DirectionalLight);
	
	var _PointLight = __webpack_require__(12);
	
	var _PointLight2 = _interopRequireDefault(_PointLight);
	
	var _BoxGeometry = __webpack_require__(13);
	
	var _BoxGeometry2 = _interopRequireDefault(_BoxGeometry);
	
	var _MeshBasicMaterial = __webpack_require__(15);
	
	var _MeshBasicMaterial2 = _interopRequireDefault(_MeshBasicMaterial);
	
	var _MeshLambertMaterial = __webpack_require__(17);
	
	var _MeshLambertMaterial2 = _interopRequireDefault(_MeshLambertMaterial);
	
	var _MeshPhongMaterial = __webpack_require__(18);
	
	var _MeshPhongMaterial2 = _interopRequireDefault(_MeshPhongMaterial);
	
	var _position = __webpack_require__(19);
	
	var _position2 = _interopRequireDefault(_position);
	
	var _rotation = __webpack_require__(21);
	
	var _rotation2 = _interopRequireDefault(_rotation);
	
	var _scale = __webpack_require__(22);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	var _materialCache = __webpack_require__(23);
	
	var _materialCache2 = _interopRequireDefault(_materialCache);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var version = exports.version = '0.0.0';
	
	function install(Vue, _ref) {
	  var THREE = _ref.THREE;
	  var _ref$prefix = _ref.prefix;
	  var prefix = _ref$prefix === undefined ? false : _ref$prefix;
	
	  Vue.use(_materialCache2.default);
	
	  switch (prefix) {
	
	    case true:
	      prefix = 'trois-';
	      break;
	
	    case false:
	      prefix = '';
	      break;
	
	    default:
	      if (prefix[prefix.length - 1] !== '-') {
	        prefix += '-';
	      }
	  }
	
	  Vue.component(prefix + 'scene', (0, _Scene2.default)(THREE));
	  Vue.component(prefix + 'mesh', (0, _Mesh2.default)(THREE));
	
	  Vue.component(prefix + 'perspective-camera', (0, _PerspectiveCamera2.default)(THREE));
	
	  Vue.component(prefix + 'ambient-light', (0, _AmbientLight2.default)(THREE));
	  Vue.component(prefix + 'directional-light', (0, _DirectionalLight2.default)(THREE));
	  Vue.component(prefix + 'point-light', (0, _PointLight2.default)(THREE));
	
	  Vue.component(prefix + 'box-geometry', (0, _BoxGeometry2.default)(THREE));
	
	  Vue.component(prefix + 'mesh-basic-material', (0, _MeshBasicMaterial2.default)(THREE));
	  Vue.component(prefix + 'mesh-lambert-material', (0, _MeshLambertMaterial2.default)(THREE));
	  Vue.component(prefix + 'mesh-phong-material', (0, _MeshPhongMaterial2.default)(THREE));
	
	  Vue.component(prefix + 'position', _position2.default);
	  Vue.component(prefix + 'rotation', _rotation2.default);
	  Vue.component(prefix + 'scale', _scale2.default);
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
	    name: 'Scene',
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
	      this.$trois = new Scene();
	      this.$troisRenderer = new WebGLRenderer({
	        canvas: this.$el
	      });
	    },
	    attached: function attached() {
	      this.setSize();
	      this._troisWillRender = false;
	      this.render();
	    },
	
	    methods: {
	      render: function render() {
	        var _this = this;
	
	        if (!this._troisWillRender) {
	          this._troisWillRender = true;
	          this.$nextTick(function () {
	            _this.$troisRenderer.render(_this.$trois, _this.$trois.$troisCamera);
	            _this._troisWillRender = false;
	          });
	        }
	      },
	      setSize: function setSize() {
	        this.$troisRenderer.setSize(this.width, this.height);
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
	
	var _constructor = __webpack_require__(4);
	
	var _constructor2 = _interopRequireDefault(_constructor);
	
	var _children = __webpack_require__(5);
	
	var _children2 = _interopRequireDefault(_children);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var Mesh = _ref.Mesh;
	  return {
	    name: 'Mesh',
	    mixins: [_trois2.default, (0, _constructor2.default)(Mesh), _children2.default]
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
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	exports.default = function (Constructor) {
	  var props = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	  var order = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
	
	  var propNames = Array.isArray(props) ? props : Object.keys(props);
	
	  var construct = function construct(vm) {
	    var args = order.map(function (propName) {
	      var propValue = vm[propName];
	      var transformer = props[propName] && props[propName]._troisTransformer;
	      if (transformer) {
	        propValue = transformer(propValue);
	      }
	      return propValue;
	    });
	    vm.$trois = new (Function.prototype.bind.apply(Constructor, [null].concat(_toConsumableArray(args))))();
	  };
	
	  var mixin = {
	    props: props,
	    watch: {},
	    beforeCompile: function beforeCompile() {
	      construct(this);
	    },
	    destroyed: function destroyed() {
	      this.$trois = null;
	    }
	  };
	
	  propNames.forEach(function (propName) {
	    mixin.watch[propName] = function () {
	      var oldTrois = this.$trois;
	      construct(this);
	      this.$emit('replace', oldTrois);
	      this.$dispatch('update');
	    };
	  });
	
	  return mixin;
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  attached: function attached() {
	    this.$parent.$trois.add(this.$trois);
	    this.$dispatch('update');
	  },
	  detached: function detached() {
	    this.$parent.$trois.remove(this.$trois);
	    this.$dispatch('update');
	  },
	
	  events: {
	    replace: function replace(oldTrois) {
	      this.$parent.$trois.remove(oldTrois);
	      this.$parent.$troid.add(this.$trois);
	    }
	  }
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
	
	var _constructor = __webpack_require__(4);
	
	var _constructor2 = _interopRequireDefault(_constructor);
	
	var _member = __webpack_require__(7);
	
	var _member2 = _interopRequireDefault(_member);
	
	var _props = __webpack_require__(8);
	
	var _props2 = _interopRequireDefault(_props);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var PerspectiveCamera = _ref.PerspectiveCamera;
	  return {
	    name: 'PerspectiveCamera',
	    mixins: [_trois2.default, (0, _constructor2.default)(PerspectiveCamera), (0, _member2.default)('$troisCamera'), (0, _props2.default)({
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
	        this.$trois.aspect = aspect;
	        this.updateProjectionMatrix();
	      },
	      updateProjectionMatrix: function updateProjectionMatrix() {
	        this.$trois.updateProjectionMatrix();
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
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (propName) {
	  return {
	    attached: function attached() {
	      this.$parent.$trois[propName] = this.$trois;
	    },
	    detached: function detached() {
	      this.$parent.$trois[propName] = null;
	    },
	
	    events: {
	      replace: function replace() {
	        this.$parent.$trois[propName] = this.$trois;
	      }
	    }
	  };
	};

/***/ },
/* 8 */
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
	    compiled: function compiled() {
	      var _this = this;
	
	      propNames.forEach(function (propName) {
	        var propValue = _this[propName];
	        if (propValue != null) {
	          var transformer = props[propName] && props[propName]._troisTransformer;
	          _this.$trois[propName] = transformer ? transformer(propValue) : propValue;
	        }
	      });
	    }
	  };
	
	  propNames.forEach(function (propName) {
	    var transformer = props[propName] && props[propName]._troisTransformer;
	    mixin.watch[propName] = transformer ? function (propValue) {
	      this.$trois[propName] = transformer(propValue);
	      this.$dispatch('update');
	    } : function (propValue) {
	      this.$trois[propName] = propValue;
	      this.$dispatch('update');
	    };
	  });
	
	  return mixin;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trois = __webpack_require__(3);
	
	var _trois2 = _interopRequireDefault(_trois);
	
	var _constructor = __webpack_require__(4);
	
	var _constructor2 = _interopRequireDefault(_constructor);
	
	var _children = __webpack_require__(5);
	
	var _children2 = _interopRequireDefault(_children);
	
	var _props = __webpack_require__(8);
	
	var _props2 = _interopRequireDefault(_props);
	
	var _light = __webpack_require__(10);
	
	var _light2 = _interopRequireDefault(_light);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var AmbientLight = _ref.AmbientLight;
	  var Color = _ref.Color;
	  return {
	    name: 'AmbientLight',
	    mixins: [_trois2.default, (0, _constructor2.default)(AmbientLight), _children2.default, (0, _props2.default)({
	      color: {
	        _troisTransformer: function _troisTransformer(color) {
	          return new Color(color);
	        }
	      }
	    }), _light2.default]
	  };
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  ready: function ready() {
	    this._troisMaterialCacheUpdate();
	  },
	  beforeDestroy: function beforeDestroy() {
	    this._troisMaterialCacheUpdate();
	  }
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
	
	var _constructor = __webpack_require__(4);
	
	var _constructor2 = _interopRequireDefault(_constructor);
	
	var _children = __webpack_require__(5);
	
	var _children2 = _interopRequireDefault(_children);
	
	var _props = __webpack_require__(8);
	
	var _props2 = _interopRequireDefault(_props);
	
	var _light = __webpack_require__(10);
	
	var _light2 = _interopRequireDefault(_light);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var DirectionalLight = _ref.DirectionalLight;
	  var Color = _ref.Color;
	  return {
	    name: 'DirectionalLight',
	    mixins: [_trois2.default, (0, _constructor2.default)(DirectionalLight), _children2.default, (0, _props2.default)({
	      color: {
	        _troisTransformer: function _troisTransformer(color) {
	          return new Color(color);
	        }
	      },
	      intensity: Number
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
	
	var _constructor = __webpack_require__(4);
	
	var _constructor2 = _interopRequireDefault(_constructor);
	
	var _children = __webpack_require__(5);
	
	var _children2 = _interopRequireDefault(_children);
	
	var _props = __webpack_require__(8);
	
	var _props2 = _interopRequireDefault(_props);
	
	var _light = __webpack_require__(10);
	
	var _light2 = _interopRequireDefault(_light);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var PointLight = _ref.PointLight;
	  var Color = _ref.Color;
	  return {
	    name: 'PointLight',
	    mixins: [_trois2.default, (0, _constructor2.default)(PointLight), _children2.default, (0, _props2.default)({
	      color: {
	        _troisTransformer: function _troisTransformer(color) {
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trois = __webpack_require__(3);
	
	var _trois2 = _interopRequireDefault(_trois);
	
	var _constructor = __webpack_require__(4);
	
	var _constructor2 = _interopRequireDefault(_constructor);
	
	var _member = __webpack_require__(7);
	
	var _member2 = _interopRequireDefault(_member);
	
	var _dispose = __webpack_require__(14);
	
	var _dispose2 = _interopRequireDefault(_dispose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var BoxGeometry = _ref.BoxGeometry;
	  return {
	    name: 'BoxGeometry',
	    mixins: [_trois2.default, (0, _constructor2.default)(BoxGeometry, {
	      width: { type: Number, default: 1 },
	      height: { type: Number, default: 1 },
	      depth: { type: Number, default: 1 }
	    }, ['width', 'height', 'depth']), (0, _member2.default)('geometry'), _dispose2.default]
	  };
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  beforeDestroy: function beforeDestroy() {
	    this.$trois.dispose();
	  },
	
	  events: {
	    replace: function replace(oldTrois) {
	      oldTrois.dispose();
	    }
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trois = __webpack_require__(3);
	
	var _trois2 = _interopRequireDefault(_trois);
	
	var _constructor = __webpack_require__(4);
	
	var _constructor2 = _interopRequireDefault(_constructor);
	
	var _member = __webpack_require__(7);
	
	var _member2 = _interopRequireDefault(_member);
	
	var _props = __webpack_require__(8);
	
	var _props2 = _interopRequireDefault(_props);
	
	var _dispose = __webpack_require__(14);
	
	var _dispose2 = _interopRequireDefault(_dispose);
	
	var _material = __webpack_require__(16);
	
	var _material2 = _interopRequireDefault(_material);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var MeshBasicMaterial = _ref.MeshBasicMaterial;
	  var Color = _ref.Color;
	  return {
	    name: 'MeshBasicMaterial',
	    mixins: [_trois2.default, (0, _constructor2.default)(MeshBasicMaterial), (0, _member2.default)('material'), (0, _props2.default)({
	      color: {
	        _troisTransformer: function _troisTransformer(color) {
	          return new Color(color);
	        }
	      }
	    }), _dispose2.default, _material2.default]
	  };
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  compiled: function compiled() {
	    this._troisMaterialCacheAdd();
	  },
	  beforeDestroy: function beforeDestroy() {
	    this._troisMaterialCacheRemove();
	  }
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
	
	var _constructor = __webpack_require__(4);
	
	var _constructor2 = _interopRequireDefault(_constructor);
	
	var _member = __webpack_require__(7);
	
	var _member2 = _interopRequireDefault(_member);
	
	var _props = __webpack_require__(8);
	
	var _props2 = _interopRequireDefault(_props);
	
	var _dispose = __webpack_require__(14);
	
	var _dispose2 = _interopRequireDefault(_dispose);
	
	var _material = __webpack_require__(16);
	
	var _material2 = _interopRequireDefault(_material);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var MeshLambertMaterial = _ref.MeshLambertMaterial;
	  var Color = _ref.Color;
	  return {
	    name: 'MeshLambertMaterial',
	    mixins: [_trois2.default, (0, _constructor2.default)(MeshLambertMaterial), (0, _member2.default)('material'), (0, _props2.default)({
	      color: {
	        _troisTransformer: function _troisTransformer(color) {
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
	
	var _constructor = __webpack_require__(4);
	
	var _constructor2 = _interopRequireDefault(_constructor);
	
	var _member = __webpack_require__(7);
	
	var _member2 = _interopRequireDefault(_member);
	
	var _props = __webpack_require__(8);
	
	var _props2 = _interopRequireDefault(_props);
	
	var _dispose = __webpack_require__(14);
	
	var _dispose2 = _interopRequireDefault(_dispose);
	
	var _material = __webpack_require__(16);
	
	var _material2 = _interopRequireDefault(_material);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var MeshPhongMaterial = _ref.MeshPhongMaterial;
	  var Color = _ref.Color;
	  return {
	    name: 'MeshPhongMaterial',
	    mixins: [_trois2.default, (0, _constructor2.default)(MeshPhongMaterial), (0, _member2.default)('material'), (0, _props2.default)({
	      color: {
	        _troisTransformer: function _troisTransformer(color) {
	          return new Color(color);
	        }
	      }
	    }), _dispose2.default, _material2.default]
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trois = __webpack_require__(3);
	
	var _trois2 = _interopRequireDefault(_trois);
	
	var _values = __webpack_require__(20);
	
	var _values2 = _interopRequireDefault(_values);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'position',
	  mixins: [_trois2.default, (0, _values2.default)('position', {
	    x: Number,
	    y: Number,
	    z: Number
	  })]
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (name, props) {
	  var propNames = Array.isArray(props) ? props : Object.keys(props);
	
	  var mixin = {
	    props: props,
	    watch: {},
	    attached: function attached() {
	      var _this = this;
	
	      propNames.forEach(function (propName) {
	        var propValue = _this[propName];
	        if (propValue != null) {
	          if (props[propName] && props[propName]._troisTransformer) {
	            propValue = props[propName]._troisTransformer(propValue);
	          }
	          _this.$parent.$trois[name][propName] = propValue;
	          _this.$dispatch('update');
	        }
	      });
	    }
	  };
	
	  propNames.forEach(function (propName) {
	    var transformer = props[propName] && props[propName]._troisTransformer;
	    mixin.watch[propName] = transformer ? function (propValue) {
	      this.$parent.$trois[name][propName] = transformer(propValue);
	      this.$dispatch('update');
	    } : function (propValue) {
	      this.$parent.$trois[name][propName] = propValue;
	      this.$dispatch('update');
	    };
	  });
	
	  return mixin;
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
	
	var _values = __webpack_require__(20);
	
	var _values2 = _interopRequireDefault(_values);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'rotation',
	  mixins: [_trois2.default, (0, _values2.default)('rotation', {
	    x: {
	      type: Number,
	      _troisTransformer: function _troisTransformer(rad) {
	        return rad / 180 * Math.PI;
	      }
	    },
	    y: {
	      type: Number,
	      _troisTransformer: function _troisTransformer(rad) {
	        return rad / 180 * Math.PI;
	      }
	    },
	    z: {
	      type: Number,
	      _troisTransformer: function _troisTransformer(rad) {
	        return rad / 180 * Math.PI;
	      }
	    },
	    order: String
	  })]
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _trois = __webpack_require__(3);
	
	var _trois2 = _interopRequireDefault(_trois);
	
	var _values = __webpack_require__(20);
	
	var _values2 = _interopRequireDefault(_values);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'scale',
	  mixins: [_trois2.default, (0, _values2.default)('scale', {
	    x: Number,
	    y: Number,
	    z: Number
	  })]
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  install: function install(Vue) {
	    Object.assign(Vue.prototype, {
	      _troisMaterialCache: {},
	      _troisMaterialCacheAdd: function _troisMaterialCacheAdd() {
	        this._troisMaterialCache[this._uid] = this;
	      },
	      _troisMaterialCacheRemove: function _troisMaterialCacheRemove() {
	        delete this._troisMaterialCache[this._uid];
	      },
	      _troisMaterialCacheUpdate: function _troisMaterialCacheUpdate() {
	        for (var uid in this._troisMaterialCache) {
	          this._troisMaterialCache[uid].$trois.needsUpdate = true;
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