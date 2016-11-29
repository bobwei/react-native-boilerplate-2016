/* eslint-disable react/prop-types */
import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';

import styles from './styles';

const Root = ({ store }) => (
  <Provider store={store}>
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native!!
      </Text>
      <Text style={styles.instructions}>
        To get started, edit index.ios.js
      </Text>
      <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu
      </Text>
    </View>
  </Provider>
);

export default Root;
