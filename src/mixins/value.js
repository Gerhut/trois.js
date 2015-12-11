export default propName => ({
  beforeCompile () {
    this.__trois = this.$parent.__trois[propName]
  },
  destroyed () {
    this.__trois = null
  }
})
