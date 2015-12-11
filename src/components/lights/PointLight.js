import troisMixin from '../../mixins/trois'
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
    childrenMixin(() => new PointLight()),
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
