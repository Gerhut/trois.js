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
    const wrapper = props[propName] && props[propName].wrapper
    mixin.watch[propName] = wrapper
      ? function (propValue) {
        this.__trois[propName] = wrapper(propValue)
        this.$dispatch('update')
      }
      : function (propValue) {
        this.__trois[propName] = propValue
        this.$dispatch('update')
      }
  }

  return mixin
}
