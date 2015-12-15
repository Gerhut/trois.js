export function install (Vue) {
  Vue._troisMaterialCache = {}
  Object.assign(Vue.prototype, {
    _troisMaterialCacheAdd () {
      Vue._troisMaterialCache[this._uid] = this
    },
    _troisMaterialCacheRemove () {
      delete Vue._troisMaterialCache[this._uid]
    },
    _troisMaterialCacheUpdate () {
      for (let uid in Vue._troisMaterialCache) {
        Vue._troisMaterialCache[uid].$trois.needsUpdate = true
      }
    }
  })
}
