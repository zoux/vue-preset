const components = (() => {
  const modulesContext = require.context('./', true, /\.vue$/)
  const chunks = modulesContext.keys().reduce((object, key) => {
    return Object.assign(object, { [key.replace(/(^.*\/)|(\.vue$)/g, '')]: modulesContext(key).default })
  }, {})
  return chunks
})()

export default {
  install (Vue) {
    Object.keys(components).forEach((key) => {
      Vue.component(components[key].name, components[key])
    })
  }
}
