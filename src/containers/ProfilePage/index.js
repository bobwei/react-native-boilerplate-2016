import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import Button from '../../components/Button';
import { isAuthenticated } from '../../modules/auth/predicates';

const ProfilePage = ({ user, login, logout }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      My Profile
    </Text>
    {!isAuthenticated(user) &&
      <Button onPress={login} style={styles.button}>
        Login
      </Button>
    }
    {isAuthenticated(user) &&
      <Button onPress={logout} style={styles.button}>
        Logout
      </Button>
    }
  </View>
);

ProfilePage.propTypes = {
  user: React.PropTypes.shape(React.PropTypes.any.isRequired),
  login: React.PropTypes.func,
  logout: React.PropTypes.func,
};

export default compose(
  connect(({ user }) => ({ user })),
  withProps({
    login() {
      Actions.login();
    },
    logout() {},
  }),
)(ProfilePage);
