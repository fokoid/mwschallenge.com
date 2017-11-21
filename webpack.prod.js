const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: {
    app: './src/index.js'
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new OfflinePlugin({
      ServiceWorker: {
        minify: true
      }
    })
  ]
})
