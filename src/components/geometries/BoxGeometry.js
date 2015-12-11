import troisMixin from '../../mixins/trois'
import memberMixin from '../../mixins/member'
import disposeMixin from '../../mixins/dispose'

export default ({
  BoxGeometry
}) => ({
  name: 'BoxGeometry',
  mixins: [
    troisMixin,
    memberMixin(() => new BoxGeometry(1, 1, 1), 'geometry'),
    disposeMixin
  ]
})
