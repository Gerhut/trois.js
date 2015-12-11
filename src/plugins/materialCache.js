export default {
    install(Vue) {
        Object.assign(Vue.prototype, {
            __troisMaterialCache: {},
            __troisMaterialCacheAdd() {
                this.__troisMaterialCache[this._uid] = this
            },
            __troisMaterialCacheRemove() {
                delete this.__troisMaterialCache[this._uid]
            },
            __troisMaterialCacheUpdate() {
                for (let uid in this.__troisMaterialCache) {
                    this.__troisMaterialCache[uid].__trois.needsUpdate = true
                }
            }
        })
    },
}
