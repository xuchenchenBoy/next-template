const withLess = require('@zeit/next-less')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const customWebpack = function(config, { isServer, dev }) {
  config.resolve.alias = {
    '@styles': path.resolve(__dirname, './styles'),
    '@static': path.resolve(__dirname, './static'),
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
  if (!dev) { // css 文件压缩
    config.plugins.push(new OptimizeCSSAssetsPlugin())
  }
  return config;
}

module.exports = withLess({
  cssModules: true,
  distDir: 'dist', // 构建的文件名
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]__[hash:base64:5]'
  },
  webpack: customWebpack
})