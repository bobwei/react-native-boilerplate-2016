import R from 'ramda';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import { reset, put } from './index';

export const login = permissions => dispatch => (
  LoginManager
    .logInWithReadPermissions(permissions)
    .then(() => AccessToken.getCurrentAccessToken())
    .then(R.compose(
      dispatch,
      put,
    ))
);

export const logout = () => dispatch => (
  new Promise((resolve) => {
    LoginManager.logOut();
    R.compose(dispatch, reset)();
    resolve();
  })
);
