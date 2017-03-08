const path = require('path');
const BASE_PATH = path.join(__dirname, '..');

module.exports = {
  context: BASE_PATH,
  entry: ['babel-polyfill', './src/index'],
  progress: true,
  output: {
    path: path.join(BASE_PATH, 'public'),
    filename: 'application.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(BASE_PATH, 'src/')
        ]
      }
    ]
  },
  resolve: {
    root: path.resolve(BASE_PATH),
    extensions: ['', '.js', '.json']
  },
  devtool: 'source-map'
};
