import troisMixin from '../../mixins/trois'
import constructorMixin from '../../mixins/constructor'
import memberMixin from '../../mixins/member'
import propsMixin from '../../mixins/props'
import disposeMixin from '../../mixins/dispose'
import materialMixin from '../../mixins/material'

export default ({
  MeshBasicMaterial,
  Color
}) => ({
  name: 'MeshBasicMaterial',
  mixins: [
    troisMixin,
    constructorMixin(MeshBasicMaterial),
    memberMixin('material'),
    propsMixin({
      color: {
        _troisTransformer: color => new Color(color)
      }
    }),
    disposeMixin,
    materialMixin
  ]
})
