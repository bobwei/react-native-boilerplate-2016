import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './styles';

const MainPage = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      {title || 'Welcome to React Native Boilerplate'}
    </Text>
  </View>
);

MainPage.propTypes = {
  title: React.PropTypes.string,
};

export default MainPage;
