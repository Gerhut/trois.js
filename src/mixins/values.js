export default (name, props) => {
  const propNames = Array.isArray(props) ? props : Object.keys(props)

  const mixin = {
    props,
    watch: {},
    attached () {
      propNames.forEach(propName => {
        let propValue = this[propName]
        if (propValue != null) {
          if (props[propName] && props[propName]._troisTransformer) {
            propValue = props[propName]._troisTransformer(propValue)
          }
          this.$parent.$trois[name][propName] = propValue
          this.$dispatch('update')
        }
      })
    }
  }

  propNames.forEach(propName => {
    const transformer = props[propName] && props[propName]._troisTransformer
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
