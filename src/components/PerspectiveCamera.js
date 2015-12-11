import troisMixin from '../mixins/trois'
import memberMixin from '../mixins/member'
import propsMixin from '../mixins/props'

export default ({
  PerspectiveCamera
}) => ({
  mixins: [
    troisMixin,
    memberMixin(() => new PerspectiveCamera(), '__troisCamera'),
    propsMixin({
      fov: Number,
      near: Number,
      aspect: Number,
      far: Number
    })
  ],
  compiled () {
    this.updateProjectionMatrix()
  },
  methods: {
    updateProjectionMatrix () {
      this.__trois.updateProjectionMatrix()
    }
  },
  watch: {
    fov: 'updateProjectionMatrix',
    near: 'updateProjectionMatrix',
    aspect: 'updateProjectionMatrix',
    far: 'updateProjectionMatrix'
  }
})
