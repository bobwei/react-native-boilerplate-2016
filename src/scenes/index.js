import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import NavBar from '../components/NavBar';
import MainPage from '../containers/MainPage';

const scenes = Actions.create(
  <Scene key="root" navBar={NavBar}>
    <Scene key="main" component={MainPage} title="Main" initial />
  </Scene>,
);

export default scenes;
