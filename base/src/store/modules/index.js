import common from './common'

export default {
  ...common,
  modules: (() => {
    const modulesContext = require.context('./', false, /(?<![index]|[common])\.js$/)
    const chunks = modulesContext.keys().reduce((chunks, key) => {
      return Object.assign(chunks, { [key.replace(/(^.*\/)|(\.js$)/g, '')]: modulesContext(key).default })
    }, {})
    return chunks
  })()
}
