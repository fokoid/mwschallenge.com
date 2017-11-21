const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const OfflinePlugin = require('offline-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/index.js'
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new OfflinePlugin({
      ServiceWorker: {
        minify: false
      }
    })
  ]
})
