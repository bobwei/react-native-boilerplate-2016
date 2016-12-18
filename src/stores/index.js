import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import rootReducer from '../reducers';

export default (initialState) => {
  const middlewares = [thunkMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  enhancers.push(autoRehydrate());

  const store = createStore(
    rootReducer,
    initialState,
    compose(...enhancers),
  );

  persistStore(store, { whitelist: ['user'], storage: AsyncStorage }, () => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('state autoRehydrate completed');
    }
  });

  return store;
};
