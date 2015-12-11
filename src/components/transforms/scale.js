import troisMixin from '../../mixins/trois'
import valuesMixin from '../../mixins/values'

export default {
  name: 'scale',
  mixins: [
    troisMixin,
    valuesMixin('scale', {
      x: Number,
      y: Number,
      z: Number
    })
  ]
}
