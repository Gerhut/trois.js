export default factory => ({
  beforeCompile () {
    this.__trois = factory()
  },
  compiled () {
    this.$parent.__trois.add(this.__trois)
  },
  beforeDestroy () {
    this.$parent.__trois.remove(this.__trois)
  },
  destroyed () {
    this.__trois = null
  }
})
