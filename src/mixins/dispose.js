export default {
  beforeDestroy () {
    this.$trois.dispose()
  },
  events: {
    replace (oldTrois) {
      oldTrois.dispose()
    }
  }
}
