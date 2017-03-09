const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');
const DashboardPlugin = require('webpack-dashboard/plugin');

const basePlugins = baseConfig.plugins || [];
const baseLoaders = baseConfig.module.loaders;

module.exports = Object.assign({}, baseConfig, {
  module: {
    loaders: baseLoaders.concat([
      {
        test: /\.scss$/,
        loader: 'style!css?sourceMap!sass?sourceMap'
      }
    ])
  },
  plugins: basePlugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin({ port: 3001 })
  ]),
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    noInfo: false,
    stats: { colors: true },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  devtool: 'source-map'
});
