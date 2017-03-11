require('dotenv').load({ silent: true });

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const BASE_PATH = path.join(__dirname, '..');

module.exports = {
  context: BASE_PATH,
  entry: ['babel-polyfill', './src/index'],
  output: {
    path: path.join(BASE_PATH, 'public'),
    filename: 'application.js',
    publicPath: '/'
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(BASE_PATH, 'src/')
        ]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
         },
         {
           loader: 'css-loader'
         },
         {
           loader: 'sass-loader'
         }
       ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'FIREBASE_API_KEY',
      'FIREBASE_AUTH_DOMAIN',
      'FIREBASE_DATABASE_URL',
      'FIREBASE_STORAGE_BUCKET',
      'FIREBASE_MESSAGING_SENDER_ID'
    ]),
    new ExtractTextPlugin('styles.css')
  ],
  resolve: {
    modules: [path.resolve(BASE_PATH), 'node_modules'],
    extensions: ['.js', '.json']
  },
  devtool: 'source-map'
};
