export default propName => ({
  beforeCompile () {
    this.$trois = this.$parent.$trois[propName]
  },
  destroyed () {
    this.$trois = null
  }
})
