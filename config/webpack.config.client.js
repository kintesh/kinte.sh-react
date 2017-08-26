const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const baseConfig = require('./webpack.config');

module.exports = {

  ...baseConfig,

  entry: {
    app: [
      './src/index.js',
    ],
    vendor: [
      "history",
      "prop-types",
      "react",
      "react-dom",
      "react-redux",
      "react-router",
      "react-router-dom",
      "react-router-redux",
      "redux"
    ],
  },

  output: {
    filename: '[name]_[hash].js',
    chunkFilename: '[name]_[hash].js',
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/static/',
  },

  devtool: 'source-map',

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity,
    }),
    new AssetsPlugin({
      path: path.resolve(process.cwd(), 'build'),
      filename: 'assets.json',
      includeManifest: 'manifest',
      prettyPrint: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      '__CLIENT__': true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],

};
