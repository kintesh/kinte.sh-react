import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router';
import createHistory from 'history/createMemoryHistory';
import { Provider } from 'react-redux';
import createStore from '../src/store';
import Routes from '../src/routes';

const Renderer = (req, res) => {

  const PROD = process.env.NODE_ENV === 'production';

  global.__CLIENT__ = false;
  global.window = null;

  const history =  createHistory();
  const store = createStore(history);
  const initialState = `window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}`;
  const context = {};

  const root = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Routes />
      </StaticRouter>
    </Provider>
  );

  const html = renderToString(
    <html>
    <head>
      <meta charSet="utf-8"/>
      <title>kinte.sh</title>
    </head>
    <body>
    <script dangerouslySetInnerHTML={{__html: initialState}} />
    <div id="root" dangerouslySetInnerHTML={{__html: root}}>
    </div>
    {PROD && <script src="/static/vendor.js" />}
    <script src="/static/app.js" async />
    </body>
    </html>
  );

  if (context.url) {
    res.writeHead(302, { Location: context.url });
    res.end();
  } else {
    res.write('<!DOCTYPE html>'+html);
    res.end();
  }

};

export default Renderer;
