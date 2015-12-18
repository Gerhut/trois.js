import troisMixin from '../../mixins/trois'
import constructorMixin from '../../mixins/constructor'
import childrenMixin from '../../mixins/children'
import propsMixin from '../../mixins/props'
import lightMixin from '../../mixins/light'

export default ({
  DirectionalLight,
  Color
}) => ({
  name: 'DirectionalLight',
  mixins: [
    troisMixin,
    constructorMixin(DirectionalLight),
    childrenMixin,
    propsMixin({
      color: {},
      intensity: Number
    }, {
      color (value) {
        return new Color(value)
      }
    }),
    lightMixin
  ]
})
