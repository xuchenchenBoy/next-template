const withLess = require('@zeit/next-less')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const customWebpack = function(config, { isServer, dev }) {
  config.resolve.alias = {
    '@styles': path.resolve(__dirname, './styles'),
    '@model': path.resolve(__dirname, './model'),
    '@static': path.resolve(__dirname, './static'),
    '@store': path.resolve(__dirname, './store'),
    '@utils': path.resolve(__dirname, './utils'),
    '@components': path.resolve(__dirname, './components'),
    ...config.resolve.alias
  }
  if (
      !isServer 
      && config.optimization.splitChunks.cacheGroups.styles
  ) { // css 文件分离
    delete config.optimization.splitChunks.cacheGroups.styles
  }
  config.plugins.push(new CleanWebpackPlugin())
  if (!dev) {
    config.plugins.push(new OptimizeCSSAssetsPlugin())
  }
  return config;
}

module.exports = withLess({
  cssModules: true,
  distDir: 'dist',
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]__[hash:base64:5]'
  },
  webpack: customWebpack
})