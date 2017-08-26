import http from 'http';
import express from 'express';

import Renderer from './Renderer';

const app = express();

import webpack  from 'webpack';
import webpackConfig from '../config/webpack.config.js';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true,
  noInfo: false,
  stats: {
    colors: true,
  },
}));

app.use(webpackHotMiddleware(compiler, {
  reload: true
}));

app.get('*', Renderer);

const server = http.createServer(app);

server.listen(3000, () => {
  const address = server.address();
  console.log(`Listening on: localhost:${address.port}`);
});
