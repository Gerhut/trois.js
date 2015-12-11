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

export function install (Vue, {
  THREE,
  prefix = false
}) {

  Vue.use(materialCache)

  switch (prefix) {

    case true:
      prefix = 'trois-'
    break

    case false:
      prefix = ''
    break

    default:
      if (prefix[prefix.length - 1] !== '-') {
        prefix += '-'
      }
  }

  Vue.component(`${prefix}scene`, Scene(THREE))
  Vue.component(`${prefix}mesh`, Mesh(THREE))

  Vue.component(`${prefix}perspective-camera`, PerspectiveCamera(THREE))

  Vue.component(`${prefix}ambient-light`, AmbientLight(THREE))
  Vue.component(`${prefix}directional-light`, DirectionalLight(THREE))
  Vue.component(`${prefix}point-light`, PointLight(THREE))

  Vue.component(`${prefix}box-geometry`, BoxGeometry(THREE))

  Vue.component(`${prefix}mesh-basic-material`, MeshBasicMaterial(THREE))
  Vue.component(`${prefix}mesh-lambert-material`, MeshLambertMaterial(THREE))
  Vue.component(`${prefix}mesh-phong-material`, MeshPhongMaterial(THREE))

  Vue.component(`${prefix}position`, position)
  Vue.component(`${prefix}rotation`, rotation)
  Vue.component(`${prefix}scale`, scale)
}
