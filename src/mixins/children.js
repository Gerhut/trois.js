export default factory => ({
  beforeCompile () {
    this.__trois = factory()
  },
  compiled () {
    this.$parent.__trois.add(this.__trois)
    this.$dispatch('update')
  },
  beforeDestroy () {
    this.$parent.__trois.remove(this.__trois)
    this.$dispatch('update')
  },
  destroyed () {
    this.__trois = null
  }
})
