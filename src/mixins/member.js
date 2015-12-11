export default (factory, propName) => ({
  beforeCompile () {
    this.$trois = factory()
  },
  attached () {
    this.$parent.$trois[propName] = this.$trois
  },
  detached () {
    this.$parent.$trois[propName] = null
  },
  destroyed () {
    this.$trois = null
  }
})
