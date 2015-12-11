export default factory => ({
  beforeCompile () {
    this.$trois = factory()
  },
  attached () {
    this.$parent.$trois.add(this.$trois)
    this.$dispatch('update')
  },
  detached () {
    this.$parent.$trois.remove(this.$trois)
    this.$dispatch('update')
  },
  destroyed () {
    this.$trois = null
  }
})
