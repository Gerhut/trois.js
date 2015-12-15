import troisMixin from '../../mixins/trois'
import propsMixin from '../../mixins/props'
import valuesMixin from '../../mixins/values'

export default {
  name: 'scale',
  mixins: [
    troisMixin,
    propsMixin({
      x: Number,
      y: Number,
      z: Number
    }),
    valuesMixin('scale')
  ]
}
