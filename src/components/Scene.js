export default ({
  Scene,
  WebGLRenderer
}) => ({
  template: '<canvas><slot></slot></canvas>',
  beforeCompile () {
    this.__trois = new Scene()
    this.__troisRenderer = new WebGLRenderer({
      canvas: this.$el
    })
  },
  attached () {
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
    }
  },
  events: {
    update: 'render'
  }
})
