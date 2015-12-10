export default ({
  MeshBasicMaterial
}) => ({
  params: ['color'],
  paramWatchers: {
    color (color) {
      this._host.__trois.object3d.material.color = color
      this._host.$dispatch('render')
    }
  },
  bind () {
    this._host.__trois.object3d.material = new MeshBasicMaterial({
      color: this.params.color
    })
    this._host.$dispatch('render')
  },
  unbind () {
    this._host.__trois.object3d.material.dispose()
    this._host.__trois.object3d.material = null
  }
})
