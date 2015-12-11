import Scene from './components/Scene'
import Mesh from './components/Mesh'

import PerspectiveCamera from './components/cameras/PerspectiveCamera'

import AmbientLight from './components/lights/AmbientLight'
import DirectionalLight from './components/lights/DirectionalLight'
import PointLight from './components/lights/PointLight'

import BoxGeometry from './components/geometries/BoxGeometry'

import MeshBasicMaterial from './components/materials/MeshBasicMaterial'
import MeshLambertMaterial from './components/materials/MeshLambertMaterial'
import MeshPhongMaterial from './components/materials/MeshPhongMaterial'

import position from './components/transforms/position'
import rotation from './components/transforms/rotation'
import scale from './components/transforms/scale'

import materialCache from './plugins/materialCache'

export var version = '0.0.0'

export function install (Vue, THREE) {

  Vue.use(materialCache)

  Vue.component('trois-scene', Scene(THREE))
  Vue.component('trois-mesh', Mesh(THREE))

  Vue.component('trois-perspective-camera', PerspectiveCamera(THREE))

  Vue.component('trois-ambient-light', AmbientLight(THREE))
  Vue.component('trois-directional-light', DirectionalLight(THREE))
  Vue.component('trois-point-light', PointLight(THREE))

  Vue.component('trois-box-geometry', BoxGeometry(THREE))

  Vue.component('trois-mesh-basic-material', MeshBasicMaterial(THREE))
  Vue.component('trois-mesh-lambert-material', MeshLambertMaterial(THREE))
  Vue.component('trois-mesh-phong-material', MeshPhongMaterial(THREE))

  Vue.component('trois-position', position)
  Vue.component('trois-rotation', rotation)
  Vue.component('trois-scale', scale)
}
