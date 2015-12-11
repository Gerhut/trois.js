import troisMixin from '../mixins/trois'
import constructorMixin from '../mixins/constructor'
import childrenMixin from '../mixins/children'

export default ({
  Mesh
}) => ({
  name: 'Mesh',
  mixins: [
    troisMixin,
    constructorMixin(Mesh),
    childrenMixin
  ]
})
