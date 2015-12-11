import troisMixin from '../../mixins/trois'
import valueMixin from '../../mixins/value'
import propsMixin from '../../mixins/props'

export default {
  mixins: [
    troisMixin,
    valueMixin('rotation'),
    propsMixin({
      x: {
        type: Number,
        __troisWrapper: rad => rad / 180 * Math.PI
      },
      y: {
        type: Number,
        __troisWrapper: rad => rad / 180 * Math.PI
      },
      z: {
        type: Number,
        __troisWrapper: rad => rad / 180 * Math.PI
      },
      order: String
    })
  ]
}
