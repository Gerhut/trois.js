import object3d from '../mixins/object3d'

export default ({
  Mesh
}) => ({
  template: '<slot></slot>',
  mixins: [object3d],
  beforeCompile () {
    this.__trois = {
      object3d: new Mesh()
    }
  }
})
