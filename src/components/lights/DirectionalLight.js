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
      color: {
        _troisTransformer: color => new Color(color)
      },
      intensity: Number
    }),
    lightMixin
  ]
})
