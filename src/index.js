import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import Routes from './routes';
import createStore from './store';

import './styles/styles.scss';

const history = createHistory();
const store = createStore(history);

const rootEl = document.getElementById('root');
const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route render={({location}) => <Component location={location}/>}/>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    rootEl,
  );
};

render(Routes);
if (module.hot) module.hot.accept('./routes', () => render(require('./routes').default));
