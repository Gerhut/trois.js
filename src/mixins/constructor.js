export default (Constructor, props = [], order = []) => {
  const propNames = Array.isArray(props) ? props : Object.keys(props)

  const construct = vm => {
    const args = order.map(propName => {
      let propValue = vm[propName]
      const transformer = props[propName] && props[propName]._troisTransformer
      if (transformer) {
        propValue = transformer(propValue)
      }
      return propValue
    })
    vm.$trois = new Constructor(...args)
  }

  const mixin = {
    props,
    watch: {},
    beforeCompile () {
      construct(this)
    },
    destroyed () {
      this.$trois = null
    }
  }

  propNames.forEach(propName => {
    mixin.watch[propName] = function () {
      const oldTrois = this.$trois
      construct(this)
      this.$emit('replace', oldTrois)
      this.$dispatch('update')
    }
  })

  return mixin
}
