import troisMixin from '../../mixins/trois'
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
    childrenMixin(() => new DirectionalLight()),
    propsMixin({
      color: {
        _troisTransformer: color => new Color(color)
      },
      intensity: Number
    }),
    lightMixin
  ]
})
