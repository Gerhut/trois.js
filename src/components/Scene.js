export default ({
  Scene,
  WebGLRenderer
}) => ({
  template: '<canvas><slot></slot></canvas>',
  props: {
    camera: String
  },
  beforeCompile () {
    this.__trois = {
      object3d: new Scene(),
      renderer: new WebGLRenderer({
        canvas: this.$el
      })
    }
  },
  attached () {
    this.render()
  },
  methods: {
    render () {
      if (this.__trois.willRender) {
        return
      }
      this.__trois.willRender = true
      this.$nextTick(() => {
        const camera = this.$findRef(this.camera).__trois.object3d
        this.__trois.renderer.render(this.__trois.object3d, camera)
        this.__trois.willRender = false
      })
    }
  },
  events: {
    render: 'render'
  }
})
