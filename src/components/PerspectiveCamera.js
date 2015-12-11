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
      this.__trois.aspect = aspect
      this.updateProjectionMatrix()
    },
    updateProjectionMatrix () {
      this.__trois.updateProjectionMatrix()
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
