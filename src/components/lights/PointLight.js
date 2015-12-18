import troisMixin from '../../mixins/trois'
import constructorMixin from '../../mixins/constructor'
import childrenMixin from '../../mixins/children'
import propsMixin from '../../mixins/props'
import lightMixin from '../../mixins/light'

export default ({
  PointLight,
  Color
}) => ({
  name: 'PointLight',
  mixins: [
    troisMixin,
    constructorMixin(PointLight),
    childrenMixin,
    propsMixin({
      color: {},
      intensity: Number,
      distance: Number,
      decay: Number
    }, {
      color (value) {
        return new Color(value)
      }
    }),
    lightMixin
  ]
})
