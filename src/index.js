import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import Routes from './routes';
import createStore from './store';

const history = createHistory();
const store = createStore(history);

const rootEl = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    rootEl,
  );

render(Routes);
if (module.hot) module.hot.accept('./routes', () => render(Routes));
