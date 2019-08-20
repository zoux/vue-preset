module.exports = (api, options) => {
  const { template } = options

  const dependencies = {
    'axios': '0.18.1',
    'sass-bem': '*',
    'vue-router': '*',
    'vuex': '*'
  }
  switch (template) {
    case 'default':
      api.extendPackage({
        dependencies
      })
      break
    case 'typescript':
      break
  }

  api.render(files => {
    Object.keys(files)
      .filter(path => ['src/', 'tsconfig.json', 'tslint.json'].some(keyword => path.includes(keyword)))
      .forEach(path => delete files[path])
  })
  switch (template) {
    case 'default':
      api.render('./template/default')
      break
    case 'typescript':
      break
  }
  api.render('./template/common')
}
