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
    var render= () =>{
      requestAnimationFrame( render );
      this.__troisRenderer.render(this.__trois, this.__trois.__troisCamera)
    }
    render();
  },
  methods: {
    render () {
      if (!this.__troisWillRender) {
        this.__troisWillRender = true
        this.$nextTick(() => {
          console.info('render', this.__trois, this.__trois.__troisCamera)
          this.__troisRenderer.render(this.__trois, this.__trois.__troisCamera)
          this.__trois.willRender = false
        })
      }
    }
  },
  events: {
    //update: 'render'
  }
})
