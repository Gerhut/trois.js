export default {
  install (Vue) {
    Object.assign(Vue.prototype, {
      _troisMaterialCache: {},
      _troisMaterialCacheAdd () {
        this._troisMaterialCache[this._uid] = this
      },
      _troisMaterialCacheRemove () {
        delete this._troisMaterialCache[this._uid]
      },
      _troisMaterialCacheUpdate () {
        for (let uid in this._troisMaterialCache) {
          this._troisMaterialCache[uid].$trois.needsUpdate = true
        }
      }
    })
  }
}
