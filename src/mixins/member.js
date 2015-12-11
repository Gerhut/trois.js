export default (factory, propName) => ({
  beforeCompile () {
    this.__trois = factory()
  },
  compiled () {
    this.$parent.__trois[propName] = this.__trois
  },
  beforeDestroy () {
    this.$parent.__trois[propName] = null
  },
  destroyed () {
    this.__trois = null
  }
})
