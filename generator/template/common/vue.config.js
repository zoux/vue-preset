module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '././',
  outputDir: 'dist',
  assetsDir: 'assets',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/style/variables.scss";`
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
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  }
}
