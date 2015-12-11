export default {
  compiled () {
    this.__troisMaterialCacheAdd()
  },
  beforeDestroy () {
    this.__troisMaterialCacheRemove()
  }
}
