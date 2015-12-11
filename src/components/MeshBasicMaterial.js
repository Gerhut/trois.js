import troisMixin from '../mixins/trois'
import memberMixin from '../mixins/member'
import propsMixin from '../mixins/props'
import disposeMixin from '../mixins/dispose'

export default ({
  MeshBasicMaterial,
  Color
}) => ({
  mixins: [
    troisMixin,
    memberMixin(() => new MeshBasicMaterial, 'material'),
    propsMixin({
      color: {
        wrapper: color => new Color(color)
      }
    }),
    disposeMixin
  ]
})
