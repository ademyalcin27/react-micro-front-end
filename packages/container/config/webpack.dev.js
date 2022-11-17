const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFedarationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')
const devConfig = {
  mode: 'development',
  devServer: {
    port: 8085,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new ModuleFedarationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js'
      },
      shared: packageJson.dependencies
    }),
  ]
}

module.exports = merge(commonConfig, devConfig)