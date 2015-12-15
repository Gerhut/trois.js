export default (Constructor, args = []) => ({
  beforeCompile () {
    this.$trois = new Constructor(...args)
    this._troisApplyProps && this._troisApplyProps()
  },
  destroyed () {
    this.$trois = null
  }
})
