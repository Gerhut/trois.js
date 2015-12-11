import troisMixin from '../../mixins/trois'
import memberMixin from '../../mixins/member'
import propsMixin from '../../mixins/props'
import disposeMixin from '../../mixins/dispose'
import materialMixin from '../../mixins/material'

export default ({
  MeshLambertMaterial,
  Color
}) => ({
  name: 'MeshLambertMaterial',
  mixins: [
    troisMixin,
    memberMixin(() => new MeshLambertMaterial(), 'material'),
    propsMixin({
      color: {
        _troisTransformer: color => new Color(color)
      }
    }),
    disposeMixin,
    materialMixin
  ]
})
