import { AppRegistry } from 'react-native';
import { compose, withProps } from 'recompose';

import Root from './src/components/Root';
import configureStore from './src/stores';
import scenes from './src/scenes';

const store = configureStore({});

AppRegistry.registerComponent(
  'ReactNativeBoilerplate',
  () => (
    compose(
      withProps({
        store,
        scenes,
      }),
    )(Root)
  ),
);
