import React from 'react';
import { Text, View } from 'react-native';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';

import Button from 'components/Button';
import styles from './styles';

const MainPage = ({ title, onPress }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      {title || 'Welcome to React Native Boilerplate'}
    </Text>
    <Button onPress={onPress} style={styles.button}>
      Press Me
    </Button>
  </View>
);

MainPage.propTypes = {
  title: React.PropTypes.string,
  onPress: React.PropTypes.func,
};

export default compose(
  withProps({
    onPress() {
      // eslint-disable-next-line no-alert, no-undef
      alert('Hello World');
    },
  }),
)(MainPage);
