export default props => {
  const propNames = Array.isArray(props) ? props : Object.keys(props)

  const mixin = {
    props,
    watch: {},
    compiled () {
      propNames.forEach(propName => {
        const propValue = this[propName]
        if (propValue != null) {
          const wrapper = props[propName] && props[propName]._troisTransformer
          this.$trois[propName] = wrapper ? wrapper(propValue) : propValue
        }
      })
    }
  }

  propNames.forEach(propName => {
    const wrapper = props[propName] && props[propName]._troisTransformer
    mixin.watch[propName] = wrapper
      ? function (propValue) {
        this.$trois[propName] = wrapper(propValue)
        this.$dispatch('update')
      }
      : function (propValue) {
        this.$trois[propName] = propValue
        this.$dispatch('update')
      }
  })

  return mixin
}
