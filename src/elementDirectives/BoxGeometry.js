export default ({
  BoxGeometry
}) => ({
  params: ['width', 'height', 'depth'],
  paramWatchers: {
    width (width) {
      this._host.__trois.object3d.geometry.width = width
      this._host.$dispatch('render')
    },
    height (height) {
      this._host.__trois.object3d.geometry.height = height
      this._host.$dispatch('render')
    },
    depth (depth) {
      this._host.__trois.object3d.geometry.depth = depth
      this._host.$dispatch('render')
    }
  },
  bind () {
    this._host.__trois.object3d.geometry = new BoxGeometry(
      this.params.width, this.params.height, this.params.depth)
    this._host.$dispatch('render')
  },
  unbind () {
    this._host.__trois.object3d.geometry.dispose()
    this._host.__trois.object3d.geometry = null
  }
})
