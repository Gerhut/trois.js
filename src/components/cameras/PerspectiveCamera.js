import troisMixin from '../../mixins/trois'
import memberMixin from '../../mixins/member'
import propsMixin from '../../mixins/props'

export default ({
  PerspectiveCamera
}) => ({
  name: 'PerspectiveCamera',
  mixins: [
    troisMixin,
    memberMixin(() => new PerspectiveCamera(), '$troisCamera'),
    propsMixin({
      fov: Number,
      near: Number,
      far: Number
    })
  ],
  compiled () {
    this.setAspect(this.aspect)
  },
  computed: {
    aspect () {
      return this.$parent.width / this.$parent.height
    }
  },
  methods: {
    setAspect (aspect) {
      this.$trois.aspect = aspect
      this.updateProjectionMatrix()
    },
    updateProjectionMatrix () {
      this.$trois.updateProjectionMatrix()
      this.$dispatch('update')
    }
  },
  watch: {
    fov: 'updateProjectionMatrix',
    near: 'updateProjectionMatrix',
    far: 'updateProjectionMatrix',
    aspect: 'setAspect'
  }
})
