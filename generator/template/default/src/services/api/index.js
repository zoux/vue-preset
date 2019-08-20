export default (() => {
  const modulesContext = require.context('./modules', false, /\.js$/)
  const chunks = modulesContext.keys().reduce((chunks, key) => {
    return Object.assign(chunks, { [key.replace(/(^.*\/)|(\.js$)/g, '')]: modulesContext(key).default })
  }, {})
  const result = Object.keys(chunks).reduce((modules, key) => {
    Object.assign(modules, chunks[key])
    return modules
  }, {})
  return result
})()
