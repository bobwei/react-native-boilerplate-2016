import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import { Actions } from 'react-native-router-flux';
import R from 'ramda';

import Button from 'components/Button';
import * as authPredicates from 'modules/auth/predicates';
import * as authSelectors from 'modules/auth/selectors';
import * as authActions from 'modules/auth/actions/facebook';
import styles from './styles';

const ProfilePage = ({ user, isAuthenticated, login, logout }) => (
  <View style={styles.container}>
    {!isAuthenticated &&
      <View>
        <Text style={styles.welcome}>
          My Profile
        </Text>
        <Button onPress={login} style={styles.button}>
          Login
        </Button>
      </View>
    }
    {isAuthenticated &&
      <View>
        <Text style={styles.welcome}>
          Hi, {user.data.userID}
        </Text>
        <Button onPress={logout} style={styles.button}>
          Logout
        </Button>
      </View>
    }
  </View>
);

ProfilePage.propTypes = {
  user: React.PropTypes.shape(React.PropTypes.any.isRequired),
  isAuthenticated: React.PropTypes.bool,
  login: React.PropTypes.func,
  logout: React.PropTypes.func,
};

export default compose(
  connect((state) => {
    const user = authSelectors.userSelector()(state);
    return {
      user,
      isAuthenticated: authPredicates.isAuthenticated(user),
    };
  }),
  withProps(({ dispatch }) => ({
    login: Actions.login,
    logout: R.compose(
      dispatch,
      authActions.logout,
    ),
  })),
)(ProfilePage);
