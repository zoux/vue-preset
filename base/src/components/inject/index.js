const components = (() => {
  const modulesContext = require.context('./', true, /\.js$/)
  const chunks = modulesContext.keys().reduce((chunks, key) => {
    if (key === './index.js') return chunks
    return Object.assign(chunks, { [/\.\/(.+)\/index\.js/.exec(key)[1]]: modulesContext(key).default })
  }, {})
  const result = Object.keys(chunks).reduce((modules, key) => {
    modules[key] = chunks[key]
    return modules
  }, {})
  return result
})()

export default {
  install (Vue) {
    Object.keys(components).forEach(key => {
      Vue.component(key, components[key])
    })
  }
}
