import troisMixin from '../../mixins/trois'
import childrenMixin from '../../mixins/children'
import propsMixin from '../../mixins/props'
import lightMixin from '../../mixins/light'

export default ({
  AmbientLight,
  Color
}) => ({
  mixins: [
    troisMixin,
    childrenMixin(() => new AmbientLight()),
    propsMixin({
      color: {
        _troisTransformer: color => new Color(color)
      }
    }),
    lightMixin
  ]
})
