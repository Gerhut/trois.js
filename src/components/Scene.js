export default ({
  Scene,
  WebGLRenderer
}) => ({
  name: 'Scene',
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
    this.$trois = new Scene()
    this.$troisRenderer = new WebGLRenderer({
      canvas: this.$el
    })
  },
  attached () {
    this.setSize()
    this._troisWillRender = false
    this.render()
  },
  methods: {
    render () {
      if (!this._troisWillRender) {
        this._troisWillRender = true
        this.$nextTick(() => {
          this.$troisRenderer.render(this.$trois, this.$trois.$troisCamera)
          this._troisWillRender = false
        })
      }
    },
    setSize () {
      this.$troisRenderer.setSize(this.width, this.height)
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
