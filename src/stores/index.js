import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

export default (initialState) => {
  const middlewares = [thunkMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    rootReducer,
    initialState,
    compose(...enhancers),
  );

  return store;
};
