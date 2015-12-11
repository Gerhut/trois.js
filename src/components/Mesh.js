import troisMixin from '../mixins/trois'
import childrenMixin from '../mixins/children'

export default ({
  Mesh
}) => ({
  name: 'Mesh',
  mixins: [
    troisMixin,
    childrenMixin(() => new Mesh())
  ]
})
