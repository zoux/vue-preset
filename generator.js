module.exports = (api, options) => {
  const { template } = options

  const dependencies = {
    'axios': '0.18.1',
    'sass-bem': '*'
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
      .filter(path => ['public/', 'src/', 'tsconfig.json', 'tslint.json'].some(keyword => path.includes(keyword)))
      .forEach(path => delete files[path])
  })
  switch (template) {
    case 'default':
      api.render('./templates/default')
      break
    case 'typescript':
      break
  }
  api.render('./templates/common')
}
