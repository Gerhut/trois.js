import troisMixin from '../../mixins/trois'
import constructorMixin from '../../mixins/constructor'
import childrenMixin from '../../mixins/children'
import propsMixin from '../../mixins/props'
import lightMixin from '../../mixins/light'

export default ({
  AmbientLight,
  Color
}) => ({
  name: 'AmbientLight',
  mixins: [
    troisMixin,
    constructorMixin(AmbientLight),
    childrenMixin,
    propsMixin({
      color: {
        _troisTransformer: color => new Color(color)
      }
    }),
    lightMixin
  ]
})
