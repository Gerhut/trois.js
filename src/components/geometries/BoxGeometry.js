import troisMixin from '../../mixins/trois'
import constructorMixin from '../../mixins/constructor'
import memberMixin from '../../mixins/member'
import disposeMixin from '../../mixins/dispose'

export default ({
  BoxGeometry
}) => ({
  name: 'BoxGeometry',
  mixins: [
    troisMixin,
    constructorMixin(BoxGeometry, [1, 1, 1]),
    memberMixin('geometry'),
    disposeMixin
  ]
})
