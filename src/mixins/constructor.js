export default (Constructor, args = []) => ({
  beforeCompile () {
    this.$trois = new Constructor(...args)
  },
  destroyed () {
    this.$trois = null
  }
})
