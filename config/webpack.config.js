const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './src/index.js',
    ],
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/static/',
  },

  devtool: 'eval',

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', {'modules': false}],
              'stage-2',
              'react',
            ],
            plugins: [
              'react-hot-loader/babel',
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {loader: 'css-loader'},
            {loader: 'sass-loader'},
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: process.env.NODE_ENV !== 'production',
    }),
  ],

};
