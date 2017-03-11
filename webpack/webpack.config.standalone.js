const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');
const DashboardPlugin = require('webpack-dashboard/plugin');

const basePlugins = baseConfig.plugins || [];

module.exports = Object.assign({}, baseConfig, {
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
