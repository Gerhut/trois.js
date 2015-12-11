import troisMixin from '../../mixins/trois'
import valuesMixin from '../../mixins/values'

export default {
  name: 'rotation',
  mixins: [
    troisMixin,
    valuesMixin('rotation', {
      x: {
        type: Number,
        _troisTransformer: rad => rad / 180 * Math.PI
      },
      y: {
        type: Number,
        _troisTransformer: rad => rad / 180 * Math.PI
      },
      z: {
        type: Number,
        _troisTransformer: rad => rad / 180 * Math.PI
      },
      order: String
    })
  ]
}
