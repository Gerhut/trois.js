export default ({
  Scene,
  WebGLRenderer
}) => ({
  template: '<canvas><slot></slot></canvas>',
  data: () => ({
    realWidth: 0,
    realHeight: 0
  }),
  props: {
    width: {
      type: Number,
      default: 640
    },
    height: {
      type: Number,
      default: 480
    }
  },
  beforeCompile () {
    this.__trois = new Scene()
    this.__troisRenderer = new WebGLRenderer({
      canvas: this.$el
    })
  },
  attached () {
    this.setSize()
    this.__troisWillRender = false
    this.render()
  },
  methods: {
    render () {
      if (!this.__troisWillRender) {
        this.__troisWillRender = true
        this.$nextTick(() => {
          this.__troisRenderer.render(this.__trois, this.__trois.__troisCamera)
          this.__troisWillRender = false
        })
      }
    },
    setSize () {
      this.__troisRenderer.setSize(this.width, this.height)
    }
  },
  watch: {
    width: 'setSize',
    height: 'setSize'
  },
  events: {
    update: 'render'
  }
})
