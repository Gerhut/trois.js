export default {
  $findRef (name) {
    for (var cur = this; cur != null; cur = cur.$parent) {
      let ref = cur.$refs[name]
      if (ref != null) {
        return ref
      }
    }
    return null
  }
}
