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
	
	var _util = __webpack_require__(1);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _Scene = __webpack_require__(2);
	
	var _Scene2 = _interopRequireDefault(_Scene);
	
	var _PerspectiveCamera = __webpack_require__(3);
	
	var _PerspectiveCamera2 = _interopRequireDefault(_PerspectiveCamera);
	
	var _Mesh = __webpack_require__(4);
	
	var _Mesh2 = _interopRequireDefault(_Mesh);
	
	var _BoxGeometry = __webpack_require__(6);
	
	var _BoxGeometry2 = _interopRequireDefault(_BoxGeometry);
	
	var _MeshBasicMaterial = __webpack_require__(7);
	
	var _MeshBasicMaterial2 = _interopRequireDefault(_MeshBasicMaterial);
	
	var _position = __webpack_require__(8);
	
	var _position2 = _interopRequireDefault(_position);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var version = exports.version = '0.0.0';
	
	function install(Vue, THREE) {
	  Vue.util.extend(Vue.prototype, _util2.default);
	
	  Vue.component('trois-scene', (0, _Scene2.default)(THREE));
	  Vue.component('trois-perspective-camera', (0, _PerspectiveCamera2.default)(THREE));
	  Vue.component('trois-mesh', (0, _Mesh2.default)(THREE));
	
	  Vue.elementDirective('trois-box-geometry', (0, _BoxGeometry2.default)(THREE));
	  Vue.elementDirective('trois-mesh-basic-material', (0, _MeshBasicMaterial2.default)(THREE));
	  Vue.elementDirective('trois-position', _position2.default);
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  $findRef: function $findRef(name) {
	    for (var cur = this; cur != null; cur = cur.$parent) {
	      var ref = cur.$refs[name];
	      if (ref != null) {
	        return ref;
	      }
	    }
	    return null;
	  }
	};

/***/ },
/* 2 */
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
	    props: {
	      camera: String
	    },
	    beforeCompile: function beforeCompile() {
	      this.__trois = {
	        object3d: new Scene(),
	        renderer: new WebGLRenderer({
	          canvas: this.$el
	        })
	      };
	    },
	    attached: function attached() {
	      this.render();
	    },
	
	    methods: {
	      render: function render() {
	        var _this = this;
	
	        if (this.__trois.willRender) {
	          return;
	        }
	        this.__trois.willRender = true;
	        this.$nextTick(function () {
	          var camera = _this.$findRef(_this.camera).__trois.object3d;
	          _this.__trois.renderer.render(_this.__trois.object3d, camera);
	          _this.__trois.willRender = false;
	        });
	      }
	    },
	    events: {
	      render: 'render'
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
	
	exports.default = function (_ref) {
	  var PerspectiveCamera = _ref.PerspectiveCamera;
	  return {
	    template: '<slot></slot>',
	    props: {
	      fov: Number,
	      near: Number,
	      far: Number
	    },
	    beforeCompile: function beforeCompile() {
	      var camera = new PerspectiveCamera(this.fov, 1, this.near, this.far);
	      this.__trois = { object3d: camera };
	    }
	  };
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _object3d = __webpack_require__(5);
	
	var _object3d2 = _interopRequireDefault(_object3d);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var Mesh = _ref.Mesh;
	  return {
	    template: '<slot></slot>',
	    mixins: [_object3d2.default],
	    beforeCompile: function beforeCompile() {
	      this.__trois = {
	        object3d: new Mesh()
	      };
	    }
	  };
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  compiled: function compiled() {
	    this.$parent.__trois.object3d.add(this.__trois.object3d);
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.$parent.__trois.object3d.remove(this.__trios.object3d);
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (_ref) {
	  var BoxGeometry = _ref.BoxGeometry;
	  return {
	    params: ['width', 'height', 'depth'],
	    paramWatchers: {
	      width: function width(_width) {
	        this._host.__trois.object3d.geometry.width = _width;
	        this._host.$dispatch('render');
	      },
	      height: function height(_height) {
	        this._host.__trois.object3d.geometry.height = _height;
	        this._host.$dispatch('render');
	      },
	      depth: function depth(_depth) {
	        this._host.__trois.object3d.geometry.depth = _depth;
	        this._host.$dispatch('render');
	      }
	    },
	    bind: function bind() {
	      this._host.__trois.object3d.geometry = new BoxGeometry(this.params.width, this.params.height, this.params.depth);
	      this._host.$dispatch('render');
	    },
	    unbind: function unbind() {
	      this._host.__trois.object3d.geometry.dispose();
	      this._host.__trois.object3d.geometry = null;
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
	
	exports.default = function (_ref) {
	  var MeshBasicMaterial = _ref.MeshBasicMaterial;
	  return {
	    params: ['color'],
	    paramWatchers: {
	      color: function color(_color) {
	        this._host.__trois.object3d.material.color = _color;
	        this._host.$dispatch('render');
	      }
	    },
	    bind: function bind() {
	      this._host.__trois.object3d.material = new MeshBasicMaterial({
	        color: this.params.color
	      });
	      this._host.$dispatch('render');
	    },
	    unbind: function unbind() {
	      this._host.__trois.object3d.material.dispose();
	      this._host.__trois.object3d.material = null;
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
	exports.default = {
	  params: ['x', 'y', 'z'],
	  paramWatchers: {
	    x: function x(_x) {
	      this._host.__trois.object3d.position.x = _x;
	      this._host.$dispatch('render');
	    },
	    y: function y(_y) {
	      this._host.__trois.object3d.position.y = _y;
	      this._host.$dispatch('render');
	    },
	    z: function z(_z) {
	      this._host.__trois.object3d.position.z = _z;
	      this._host.$dispatch('render');
	    }
	  },
	  bind: function bind() {
	    this._host.__trois.object3d.position.set(this.params.x, this.params.y, this.params.z);
	    this._host.$dispatch('render');
	  }
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=trois.js.map