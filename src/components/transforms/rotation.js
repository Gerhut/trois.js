import troisMixin from '../../mixins/trois'
import propsMixin from '../../mixins/props'
import valuesMixin from '../../mixins/values'

const deg2rad = rad => rad * Math.PI / 180

export default {
  name: 'rotation',
  mixins: [
    troisMixin,
    propsMixin({
      x: Number,
      y: Number,
      z: Number,
      order: String
    }, {
      x: deg2rad,
      y: deg2rad,
      z: deg2rad
    }),
    valuesMixin('rotation')
  ]
}
