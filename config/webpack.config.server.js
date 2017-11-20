const webpack = require('webpack');
const baseConfig = require('./webpack.config');
const fs = require('fs');

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter((x) => {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach((mod) => {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {

  ...baseConfig,

  entry: {
    routes: [
      './src/routes/index.js',
    ],
    server: [
      './server/index.js'
    ]
  },

  target: 'node',
  externals: nodeModules,
  devtool: 'source-map',

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],

};
