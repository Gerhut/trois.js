export default name => ({
  attached () {
    this.$parent.$trois[name] = this.$trois
  },
  detached () {
    this.$parent.$trois[name] = null
  }
})
