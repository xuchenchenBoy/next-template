const withLess = require('@zeit/next-less')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const customWebpack = function(config, { isServer }) {
  config.resolve.alias.styles = path.resolve(__dirname, './styles');
  if (
      !isServer 
      && config.optimization.splitChunks.cacheGroups.styles
    ) {
    delete config.optimization.splitChunks.cacheGroups.styles
  }
  config.plugins.push(new CleanWebpackPlugin())
  return config;
}

module.exports = withLess({
  cssModules: true,
  distDir: 'build',
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]__[hash:base64:5]'
  },
  webpack: customWebpack
})