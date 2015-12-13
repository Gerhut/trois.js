export default (name, props, transformers = {}) => {
  const propNames = Array.isArray(props) ? props : Object.keys(props)

  const mixin = {
    props,
    watch: {},
    attached () {
      propNames.forEach(propName => {
        const propValue = this[propName]
        if (propValue != null) {
          const transformer = transformers[propName]
          this.$parent.$trois[name][propName] = transformer
            ? transformer(propValue)
            : propValue
          this.$dispatch('update')
        }
      })
    }
  }

  propNames.forEach(propName => {
    const transformer = transformers[propName]
    mixin.watch[propName] = transformer
      ? function (propValue) {
        this.$parent.$trois[name][propName] = transformer(propValue)
        this.$dispatch('update')
      }
      : function (propValue) {
        this.$parent.$trois[name][propName] = propValue
        this.$dispatch('update')
      }
  })

  return mixin
}
