const components = (() => {
  const modulesContext = require.context('./', true, /\.js$/)
  const chunks = modulesContext.keys().reduce((chunks, key) => {
    if (key === './index.js') return chunks
    return Object.assign(chunks, { [/\.\/(.+)\/index\.js/.exec(key)[1]]: modulesContext(key).default })
  }, {})
  return chunks
})()

export default {
  install (Vue) {
    Object.keys(components).forEach(key => {
      Vue.component(key, components[key])
    })
  }
}
