export default {
  compiled () {
    this._troisMaterialCacheAdd()
  },
  beforeDestroy () {
    this._troisMaterialCacheRemove()
  }
}
