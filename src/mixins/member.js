export default (factory, propName) => ({
  beforeCompile () {
    this.__trois = factory()
  },
  attached () {
    this.$parent.__trois[propName] = this.__trois
  },
  detached () {
    this.$parent.__trois[propName] = null
  },
  destroyed () {
    this.__trois = null
  }
})
