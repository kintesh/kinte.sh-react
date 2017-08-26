import webpack  from 'webpack';
import webpackConfig from '../config/webpack.config.js';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const compiler = webpack(webpackConfig);

const DevServer = (app) => {

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

  return app;
};

export default DevServer;
