const webpack = require('webpack');
const baseConfig = require('./webpack.config');
const fs = require('fs');

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
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
