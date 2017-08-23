const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

const webpack  = require('webpack');
const webpackConfig = require('../config/webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
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

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'index.html')));

const server = http.createServer(app);

server.listen(3000, () => {
  const address = server.address();
  console.log(`Listening on: localhost:${address.port}`);
});
