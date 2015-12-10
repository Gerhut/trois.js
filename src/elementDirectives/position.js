export default {
  params: ['x', 'y', 'z'],
  paramWatchers: {
    x (x) {
      this._host.__trois.object3d.position.x = x
      this._host.$dispatch('render')
    },
    y (y) {
      this._host.__trois.object3d.position.y = y
      this._host.$dispatch('render')
    },
    z (z) {
      this._host.__trois.object3d.position.z = z
      this._host.$dispatch('render')
    }
  },
  bind () {
    this._host.__trois.object3d.position.set(
      this.params.x, this.params.y, this.params.z)
    this._host.$dispatch('render')
  }
}
