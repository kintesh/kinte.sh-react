const webpack = require('webpack');
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

  devtool: 'source-map',

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      '__CLIENT__': true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],

};
