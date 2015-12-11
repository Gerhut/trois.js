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
      color: {
        _troisTransformer: color => new Color(color)
      },
      intensity: Number,
      distance: Number,
      decay: Number
    }),
    lightMixin
  ]
})
