const withLess = require('@zeit/next-less')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
const withPlugins = require('next-compose-plugins');

module.exports = {
  webpack: (config, options) => {
    console.log(config)
    config.resolve.alias = {
      styles: path.resolve(__dirname, './styles'),
      ...config.resolve.alias
    }
    return config;
  }
}

// module.exports = {
//   webpack: (config, { buildId, dev }) => {
//     config.plugins.push(
//       new MiniCssExtractPlugin({
//         // note: not sure if this is the correct output, will this conflict with anything next is doing?
//         filename: dev
//           ? path.join(__dirname, ".static/assets/index.css")
//           : ".static/assets/" + buildId + ".css",
//         allChunks: true
//       })
//     );

//     return config;
//   })
// }


// const cssLoaderConfig = require('@zeit/next-css/css-loader-config')

// module.exports = (nextConfig = {}) => {
//   return Object.assign({}, nextConfig, {
//     webpack(config, options) {
//       if (!options.defaultLoaders) {
//         throw new Error(
//           'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
//         )
//       }

//       const { dev, isServer } = options
//       const {
//         cssModules,
//         cssLoaderOptions,
//         postcssLoaderOptions,
//         lessLoaderOptions = {}
//       } = nextConfig

//       options.defaultLoaders.less = cssLoaderConfig(config, {
//         extensions: ['less'],
//         cssModules,
//         cssLoaderOptions,
//         postcssLoaderOptions,
//         dev,
//         isServer,
//         loaders: [
//           {
//             loader: 'less-loader',
//             options: lessLoaderOptions
//           }
//         ]
//       })

//       config.module.rules.push({
//         test: /\.less$/,
//         use: options.defaultLoaders.less
//       })

//       if (typeof nextConfig.webpack === 'function') {
//         return nextConfig.webpack(config, options)
//       }

//       return config
//     }
//   })
// }
