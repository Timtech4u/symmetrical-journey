// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, 'templates/app.html'),
    assetsRoot: path.resolve(__dirname, 'static/'),
    assetsSubDirectory: '/',
    assetsPublicPath: '/',
    productionSourceMap: true
  },
  dev: {
    port: 8888,
    proxyTable: {}
  }
}
