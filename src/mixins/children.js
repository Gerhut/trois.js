export default factory => ({
  beforeCompile () {
    this.__trois = factory()
  },
  attached () {
    this.$parent.__trois.add(this.__trois)
    this.$dispatch('update')
  },
  detached () {
    this.$parent.__trois.remove(this.__trois)
    this.$dispatch('update')
  },
  destroyed () {
    this.__trois = null
  }
})
