export default (name) => ({
  attached () {
    this.$trois = this.$parent.$trois[name]
    this._troisApplyProps && this._troisApplyProps()
  },
  detached () {
    this.$trois = null
  }
})
