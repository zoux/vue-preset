const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  publicPath: isDev ? '/' : '././',
  outputDir: 'dist',
  assetsDir: 'static',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/style/base.scss";'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://cnodejs.org/api/v1',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    deletePreloadPrefetch(config)
    copyStaticToDist(config)
    setMetaVersion(config)
    addVConsole(config)
  }
}

function deletePreloadPrefetch (config) {
  config.plugins.delete('preload')
  config.plugins.delete('prefetch')
}

function copyStaticToDist (config) {
  if (!require('fs').existsSync(require('path').resolve(__dirname, 'static'))) {
    return
  }

  config.plugin('copy').tap(args => {
    args[0].push({
      from: require('path').resolve(__dirname, 'static'),
      to: require('path').resolve(__dirname, 'dist/static'),
      toType: 'dir'
    })
    return args
  })
}

function setMetaVersion (config) {
  config.plugin('html').tap(args => {
    args[0].version = require('./package.json').version
    return args
  })
}

function addVConsole (config) {
  config.plugin('vConsole').use(require('vconsole-webpack-plugin'), [{ enable: isDev }])
}
