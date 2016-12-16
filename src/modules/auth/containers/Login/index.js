import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';

import styles from './styles';
import Button from '../../../../components/Button';

const Login = ({ login }) => (
  <View style={styles.container}>
    <Button onPress={login} style={styles.button}>
      Login with Facebook
    </Button>
  </View>
);

Login.propTypes = {
  login: React.PropTypes.func,
};

export default compose(
  connect(),
  withProps({
    login() {
      console.log('login');
    },
  }),
)(Login);
