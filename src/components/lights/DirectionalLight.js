import troisMixin from '../../mixins/trois'
import childrenMixin from '../../mixins/children'
import propsMixin from '../../mixins/props'
import lightMixin from '../../mixins/light'

export default ({
  DirectionalLight,
  Color
}) => ({
  mixins: [
    troisMixin,
    childrenMixin(() => new DirectionalLight()),
    propsMixin({
      color: {
        __troisWrapper: color => new Color(color)
      },
      intensity: Number
    }),
    lightMixin
  ]
})