require('dotenv').load({ silent: true })

const path = require('path');
const webpack = require('webpack');
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
  plugins: [
    new webpack.EnvironmentPlugin([
      'FIREBASE_API_KEY',
      'FIREBASE_AUTH_DOMAIN',
      'FIREBASE_DATABASE_URL',
      'FIREBASE_STORAGE_BUCKET',
      'FIREBASE_MESSAGING_SENDER_ID'
    ])
  ],
  resolve: {
    root: path.resolve(BASE_PATH),
    extensions: ['', '.js', '.json']
  },
  devtool: 'source-map'
};
