export default props => {
  const propNames = Array.isArray(props) ? props : Object.keys(props)

  const mixin = {
    props,
    watch: {},
    compiled () {
      propNames.forEach(propName => {
        const propValue = this[propName]
        if (propValue != null) {
          const transformer = props[propName] && props[propName]._troisTransformer
          this.$trois[propName] = transformer ? transformer(propValue) : propValue
        }
      })
    }
  }

  propNames.forEach(propName => {
    const transformer = props[propName] && props[propName]._troisTransformer
    mixin.watch[propName] = transformer
      ? function (propValue) {
        this.$trois[propName] = transformer(propValue)
        this.$dispatch('update')
      }
      : function (propValue) {
        this.$trois[propName] = propValue
        this.$dispatch('update')
      }
  })

  return mixin
}
