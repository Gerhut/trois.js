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
    constructorMixin(BoxGeometry, {
      width: { type: Number, default: 1 },
      height: { type: Number, default: 1 },
      depth: { type: Number, default: 1 }
    }, ['width', 'height', 'depth']),
    memberMixin('geometry'),
    disposeMixin
  ]
})
