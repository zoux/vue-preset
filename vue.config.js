module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "./node_modules/sass-bem/_bem.scss";`
      }
    }
  }
}
