import troisMixin from '../../mixins/trois'
import valueMixin from '../../mixins/value'
import propsMixin from '../../mixins/props'

export default {
  mixins: [
    troisMixin,
    valueMixin('scale'),
    propsMixin({
      x: Number,
      y: Number,
      z: Number
    })
  ]
}