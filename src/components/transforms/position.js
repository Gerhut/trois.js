import troisMixin from '../../mixins/trois'
import valuesMixin from '../../mixins/values'

export default {
  mixins: [
    troisMixin,
    valuesMixin('position', {
      x: Number,
      y: Number,
      z: Number
    })
  ]
}
