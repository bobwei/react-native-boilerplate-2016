import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import Root from './src/components/Root';
import configureStore from './src/stores';

const store = configureStore({});

const Comp = () => (
  <Root store={store} />
);

AppRegistry.registerComponent(
  'ReactNativeBoilerplate',
  () => Comp,
);
