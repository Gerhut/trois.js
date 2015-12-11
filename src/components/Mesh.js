import troisMixin from '../mixins/trois'
import childrenMixin from '../mixins/children'
import propsMixin from '../mixins/props'

export default ({
  Mesh
}) => ({
  mixins: [
    troisMixin,
    childrenMixin(() => new Mesh)
  ]
})
