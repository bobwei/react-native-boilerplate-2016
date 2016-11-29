/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-native-router-flux';

const Root = ({ store, scenes }) => (
  <Provider store={store}>
    <Router scenes={scenes} />
  </Provider>
);

export default Root;
