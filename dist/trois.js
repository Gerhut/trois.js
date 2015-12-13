(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  factory((global.Trois = {}));
}(this, function (exports) { 'use strict';

  var babelHelpers = {};

  babelHelpers.toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  babelHelpers;
  var Scene = (function (_ref) {
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
  })

  var troisMixin = {
    template: '<slot></slot>',
    replace: false
  };

  var constructorMixin = (function (Constructor) {
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
      vm.$trois = new (Function.prototype.bind.apply(Constructor, [null].concat(babelHelpers.toConsumableArray(args))))();
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
  })

  var childrenMixin = {
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

  var Mesh = (function (_ref) {
    var Mesh = _ref.Mesh;
    return {
      name: 'Mesh',
      mixins: [troisMixin, constructorMixin(Mesh), childrenMixin]
    };
  })

  var memberMixin = (function (propName) {
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
  })

  var propsMixin = (function (props) {
    var transformers = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var propNames = Array.isArray(props) ? props : Object.keys(props);

    var mixin = {
      props: props,
      watch: {},
      compiled: function compiled() {
        var _this = this;

        propNames.forEach(function (propName) {
          var propValue = _this[propName];
          if (propValue != null) {
            var transformer = transformers[propName];
            _this.$trois[propName] = transformer ? transformer(propValue) : propValue;
          }
        });
      }
    };

    propNames.forEach(function (propName) {
      var transformer = transformers[propName];
      mixin.watch[propName] = transformer ? function (propValue) {
        this.$trois[propName] = transformer(propValue);
        this.$dispatch('update');
      } : function (propValue) {
        this.$trois[propName] = propValue;
        this.$dispatch('update');
      };
    });

    return mixin;
  })

  var PerspectiveCamera = (function (_ref) {
    var PerspectiveCamera = _ref.PerspectiveCamera;
    return {
      name: 'PerspectiveCamera',
      mixins: [troisMixin, constructorMixin(PerspectiveCamera), memberMixin('$troisCamera'), propsMixin({
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
  })

  var lightMixin = {
    ready: function ready() {
      this._troisMaterialCacheUpdate();
    },
    beforeDestroy: function beforeDestroy() {
      this._troisMaterialCacheUpdate();
    }
  };

  var AmbientLight = (function (_ref) {
    var AmbientLight = _ref.AmbientLight;
    var Color = _ref.Color;
    return {
      name: 'AmbientLight',
      mixins: [troisMixin, constructorMixin(AmbientLight), childrenMixin, propsMixin(['color'], {
        color: function color(value) {
          return new Color(value);
        }
      }), lightMixin]
    };
  })

  var DirectionalLight = (function (_ref) {
    var DirectionalLight = _ref.DirectionalLight;
    var Color = _ref.Color;
    return {
      name: 'DirectionalLight',
      mixins: [troisMixin, constructorMixin(DirectionalLight), childrenMixin, propsMixin({
        color: {},
        intensity: Number
      }, {
        color: function color(value) {
          return new Color(value);
        }
      }), lightMixin]
    };
  })

  var PointLight = (function (_ref) {
    var PointLight = _ref.PointLight;
    var Color = _ref.Color;
    return {
      name: 'PointLight',
      mixins: [troisMixin, constructorMixin(PointLight), childrenMixin, propsMixin({
        color: {},
        intensity: Number,
        distance: Number,
        decay: Number
      }, {
        color: function color(value) {
          return new Color(value);
        }
      }), lightMixin]
    };
  })

  var disposeMixin = {
    beforeDestroy: function beforeDestroy() {
      this.$trois.dispose();
    },

    events: {
      replace: function replace(oldTrois) {
        oldTrois.dispose();
      }
    }
  };

  var BoxGeometry = (function (_ref) {
    var BoxGeometry = _ref.BoxGeometry;
    return {
      name: 'BoxGeometry',
      mixins: [troisMixin, constructorMixin(BoxGeometry, {
        width: { type: Number, default: 1 },
        height: { type: Number, default: 1 },
        depth: { type: Number, default: 1 }
      }, ['width', 'height', 'depth']), memberMixin('geometry'), disposeMixin]
    };
  })

  var materialMixin = {
    compiled: function compiled() {
      this._troisMaterialCacheAdd();
    },
    beforeDestroy: function beforeDestroy() {
      this._troisMaterialCacheRemove();
    }
  };

  var MeshBasicMaterial = (function (_ref) {
    var MeshBasicMaterial = _ref.MeshBasicMaterial;
    var Color = _ref.Color;
    return {
      name: 'MeshBasicMaterial',
      mixins: [troisMixin, constructorMixin(MeshBasicMaterial), memberMixin('material'), propsMixin(['color'], {
        color: function color(value) {
          return new Color(value);
        }
      }), disposeMixin, materialMixin]
    };
  })

  var MeshLambertMaterial = (function (_ref) {
    var MeshLambertMaterial = _ref.MeshLambertMaterial;
    var Color = _ref.Color;
    return {
      name: 'MeshLambertMaterial',
      mixins: [troisMixin, constructorMixin(MeshLambertMaterial), memberMixin('material'), propsMixin(['color'], {
        color: function color(value) {
          return new Color(value);
        }
      }), disposeMixin, materialMixin]
    };
  })

  var MeshPhongMaterial = (function (_ref) {
    var MeshPhongMaterial = _ref.MeshPhongMaterial;
    var Color = _ref.Color;
    return {
      name: 'MeshPhongMaterial',
      mixins: [troisMixin, constructorMixin(MeshPhongMaterial), memberMixin('material'), propsMixin(['color'], {
        color: function color(value) {
          return new Color(value);
        }
      }), disposeMixin, materialMixin]
    };
  })

  var valuesMixin = (function (name, props) {
    var transformers = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var propNames = Array.isArray(props) ? props : Object.keys(props);

    var mixin = {
      props: props,
      watch: {},
      attached: function attached() {
        var _this = this;

        propNames.forEach(function (propName) {
          var propValue = _this[propName];
          if (propValue != null) {
            var transformer = transformers[propName];
            _this.$parent.$trois[name][propName] = transformer ? transformer(propValue) : propValue;
            _this.$dispatch('update');
          }
        });
      }
    };

    propNames.forEach(function (propName) {
      var transformer = transformers[propName];
      mixin.watch[propName] = transformer ? function (propValue) {
        this.$parent.$trois[name][propName] = transformer(propValue);
        this.$dispatch('update');
      } : function (propValue) {
        this.$parent.$trois[name][propName] = propValue;
        this.$dispatch('update');
      };
    });

    return mixin;
  })

  var position = {
    name: 'position',
    mixins: [troisMixin, valuesMixin('position', {
      x: Number,
      y: Number,
      z: Number
    })]
  };

  var deg2rad = function deg2rad(rad) {
    return rad * Math.PI / 180;
  };

  var rotation = {
    name: 'rotation',
    mixins: [troisMixin, valuesMixin('rotation', {
      x: Number,
      y: Number,
      z: Number,
      order: String
    }, {
      x: deg2rad,
      y: deg2rad,
      z: deg2rad
    })]
  };

  var scale = {
    name: 'scale',
    mixins: [troisMixin, valuesMixin('scale', {
      x: Number,
      y: Number,
      z: Number
    })]
  };

  var materialCache = {
    install: function install(Vue) {
      Vue._troisMaterialCache = {};
      Object.assign(Vue.prototype, {
        _troisMaterialCacheAdd: function _troisMaterialCacheAdd() {
          Vue._troisMaterialCache[this._uid] = this;
        },
        _troisMaterialCacheRemove: function _troisMaterialCacheRemove() {
          delete Vue._troisMaterialCache[this._uid];
        },
        _troisMaterialCacheUpdate: function _troisMaterialCacheUpdate() {
          for (var uid in Vue._troisMaterialCache) {
            Vue._troisMaterialCache[uid].$trois.needsUpdate = true;
          }
        }
      });
    }
  };

  var version = '0.0.0';

  function install(Vue, _ref) {
    var THREE = _ref.THREE;
    var _ref$prefix = _ref.prefix;
    var prefix = _ref$prefix === undefined ? false : _ref$prefix;

    Vue.use(materialCache);

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

    Vue.component(prefix + 'scene', Scene(THREE));
    Vue.component(prefix + 'mesh', Mesh(THREE));

    Vue.component(prefix + 'perspective-camera', PerspectiveCamera(THREE));

    Vue.component(prefix + 'ambient-light', AmbientLight(THREE));
    Vue.component(prefix + 'directional-light', DirectionalLight(THREE));
    Vue.component(prefix + 'point-light', PointLight(THREE));

    Vue.component(prefix + 'box-geometry', BoxGeometry(THREE));

    Vue.component(prefix + 'mesh-basic-material', MeshBasicMaterial(THREE));
    Vue.component(prefix + 'mesh-lambert-material', MeshLambertMaterial(THREE));
    Vue.component(prefix + 'mesh-phong-material', MeshPhongMaterial(THREE));

    Vue.component(prefix + 'position', position);
    Vue.component(prefix + 'rotation', rotation);
    Vue.component(prefix + 'scale', scale);
  }

  exports.version = version;
  exports.install = install;

}));