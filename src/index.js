import util from './util'

import Scene from './components/Scene'
import PerspectiveCamera from './components/PerspectiveCamera'
import Mesh from './components/Mesh'

import BoxGeometry from './elementDirectives/BoxGeometry'
import MeshBasicMaterial from './elementDirectives/MeshBasicMaterial'
import position from './elementDirectives/position'

export var version = '0.0.0'

export function install (Vue, THREE) {
  Vue.util.extend(Vue.prototype, util)

  Vue.component('trois-scene', Scene(THREE))
  Vue.component('trois-perspective-camera', PerspectiveCamera(THREE))
  Vue.component('trois-mesh', Mesh(THREE))

  Vue.elementDirective('trois-box-geometry', BoxGeometry(THREE))
  Vue.elementDirective('trois-mesh-basic-material', MeshBasicMaterial(THREE))
  Vue.elementDirective('trois-position', position)
}
