import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';

export default (history) => {
  const middleware = routerMiddleware(history);

  const composeEnhancers = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    combineReducers({
      // ...rootReducer,
      router: routerReducer
    }),
    composeEnhancers(applyMiddleware(middleware)),
  );

  // if (module.hot) {
  //   module.hot.accept('./reducers', () => {
  //     const nextReducers = require('../reducers').default;
  //     const rootReducer = combineReducers({
  //       ...nextReducers,
  //       router: routerReducer
  //     });
  //
  //     store.replaceReducer(rootReducer);
  //   });
  // }

  return store;
}
