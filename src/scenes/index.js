import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import NavBar from 'components/NavBar';
import TabIcon from 'components/TabIcon';
import Login from 'modules/auth/containers/Login';
import MainPage from '../containers/MainPage';
import { views } from './views';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="main" initial tabs tabBarStyle={{ backgroundColor: '#fff' }}>
      {views.map(({ title, component = MainPage, ...rest }) => (
        <Scene
          key={title}
          title={title}
          component={component}
          navBar={NavBar}
          icon={TabIcon}
          {...rest}
        />
      ))}
    </Scene>
    <Scene
      key="login"
      title="Login"
      component={Login}
      navBar={NavBar}
      direction="vertical"
      hideBackImage
      backTitle="Back"
    />
  </Scene>,
);

export default scenes;
