import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

const ProfilePage = () => (
  <View />
);

export default compose(
  connect(),
)(ProfilePage);
