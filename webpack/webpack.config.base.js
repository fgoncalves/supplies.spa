const path = require('path');
const BASE_PATH = path.join(__dirname, '..');

module.exports = {
  context: BASE_PATH,
  entry: ['babel-polyfill', './src/index'],
  progress: true,
  output: {
    path: path.join(BASE_PATH, 'public'),
    filename: 'application.js',
    chunkFilename: '[name]-[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(BASE_PATH, 'src')
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.gif|\.jpg|\.png$/,
        loader: 'url-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'file-loader?name=/assets/fonts/[hash].[ext]'
      },
      {
        test: /\.svg$/,
        loaders: [
          'url-loader',
          'svgo-loader?' + svgoConfig
        ]
      }
    ]
  },
  resolve: {
    root: path.resolve(BASE_PATH),
    extensions: ['', '.js', '.json']
  },
  sassLoader: {
    includePaths: [
      path.resolve(BASE_PATH, 'node_modules')
    ]
  },
  devtool: 'source-map'
};
