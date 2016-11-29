/* global __DEV__ */
import { AppRegistry } from 'react-native';
import { compose, withProps } from 'recompose';
import codePush from 'react-native-code-push';
import Config from 'react-native-config';

import Root from './src/components/Root';
import configureStore from './src/stores';
import scenes from './src/scenes';

const {
  CODE_PUSH_DEPLOYMENT_KEY,
} = Config;

const store = configureStore({});

/*
  enable codePush in non development mode
*/
if (!__DEV__) {
  codePush
    .sync({
      checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
      installMode: codePush.InstallMode.IMMEDIATE,
      deploymentKey: CODE_PUSH_DEPLOYMENT_KEY,
    });
}

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
