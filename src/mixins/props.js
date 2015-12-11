export default props => {
  const propNames = Array.isArray(props) ? props : Object.keys(props)

  const mixin = {
    props,
    watch: {},
    beforeCompile () {
      for (let propName of propNames) {
        const propValue = this[propName]
        const wrapper = props[propName] && props[propName].wrapper
        this.__trois[propName] = wrapper ? wrapper(propValue) : propValue
      }
    }
  }

  for (let propName of propNames) {
    mixin.watch[propName] = function (propValue) {
      const wrapper = props[propName] && props[propName].wrapper
      this.__trois[propName] = wrapper ? wrapper(propValue) : propValue
      this.$dispatch('update')
    }
  }

  return mixin
}
