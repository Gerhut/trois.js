import troisMixin from '../../mixins/trois'
import memberMixin from '../../mixins/member'
import propsMixin from '../../mixins/props'
import disposeMixin from '../../mixins/dispose'
import materialMixin from '../../mixins/material'

export default ({
  MeshPhongMaterial,
  Color
}) => ({
  mixins: [
    troisMixin,
    memberMixin(() => new MeshPhongMaterial(), 'material'),
    propsMixin({
      color: {
        __troisWrapper: color => new Color(color)
      }
    }),
    disposeMixin,
    materialMixin
  ]
})
