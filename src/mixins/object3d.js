export default {
  compiled () {
    this.$parent.__trois.object3d.add(this.__trois.object3d)
  },
  beforeDestroy () {
    this.$parent.__trois.object3d.remove(this.__trios.object3d)
  }
}
