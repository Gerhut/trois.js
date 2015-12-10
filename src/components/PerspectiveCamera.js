export default ({
  PerspectiveCamera
}) => ({
  template: '<slot></slot>',
  props: {
    fov: Number,
    near: Number,
    far: Number
  },
  beforeCompile () {
    const camera = new PerspectiveCamera(this.fov, 1, this.near, this.far)
    this.__trois = { object3d: camera }
  }
})
