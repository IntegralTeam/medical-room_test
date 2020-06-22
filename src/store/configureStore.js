// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from 'store/rootEpics';
import createRootReducer from 'store/rootReducer';

export default function configureStore(initialState: any = {}, history: any) {
  let composeEnhancers = compose;
  
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    }
  }

  const epicMiddleware = createEpicMiddleware();
  const middlewares = [epicMiddleware, routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );
  
  epicMiddleware.run(rootEpic);
  
  return store;
};
