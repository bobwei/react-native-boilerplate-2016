import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import lifecycle from 'recompose/lifecycle';
import shallowEqual from 'recompose/shallowEqual';
import R from 'ramda';
import Config from 'react-native-config';
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import Button from '../../../../components/Button';
import * as actions from '../../actions/facebook';

const {
  FACEBOOK_READ_PERMISSIONS = 'public_profile,email',
} = Config;

const Login = ({ login }) => (
  <View style={styles.container}>
    <Button onPress={login} style={styles.button} bsStyle="blue">
      Authorize with Facebook
    </Button>
  </View>
);

Login.propTypes = {
  login: React.PropTypes.func,
};

export default compose(
  connect(({ user }) => ({ user })),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (!shallowEqual(this.props.user.data, nextProps.user.data) &&
          !R.isEmpty(nextProps.user.data)) {
        Actions.pop();
      }
    },
  }),
  withProps(({ dispatch }) => ({
    login: R.compose(
      dispatch,
      R.pipe(
        R.split(','),
        r => [r],
        R.partial(actions.login),
      )(FACEBOOK_READ_PERMISSIONS),
    ),
  })),
)(Login);
