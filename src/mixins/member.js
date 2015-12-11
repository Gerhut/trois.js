export default propName => ({
  attached () {
    this.$parent.$trois[propName] = this.$trois
  },
  detached () {
    this.$parent.$trois[propName] = null
  },
  events: {
    replace () {
      this.$parent.$trois[propName] = this.$trois
    }
  }
})
