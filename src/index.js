import Scene from './components/Scene'
import PerspectiveCamera from './components/PerspectiveCamera'
import Mesh from './components/Mesh'
import BoxGeometry from './components/BoxGeometry'
import MeshBasicMaterial from './components/MeshBasicMaterial'

import position from './components/values/position'
import rotation from './components/values/rotation'
import scale from './components/values/scale'

export var version = '0.0.0'

export function install (Vue, THREE) {
  Vue.component('trois-scene', Scene(THREE))

  Vue.component('trois-perspective-camera', PerspectiveCamera(THREE))

  Vue.component('trois-mesh', Mesh(THREE))

  Vue.component('trois-box-geometry', BoxGeometry(THREE))

  Vue.component('trois-mesh-basic-material', MeshBasicMaterial(THREE))

  Vue.component('trois-position', position)
  Vue.component('trois-rotation', rotation)
  Vue.component('trois-scale', scale)
}
