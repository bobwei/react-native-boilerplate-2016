import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import NavBar from '../components/NavBar';
import TabIcon from '../components/TabIcon';
import MainPage from '../containers/MainPage';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="main" initial tabs tabBarStyle={{ backgroundColor: '#fff' }}>
      {['Explore', 'Favorites', 'Notifications', 'Profile'].map(title => (
        <Scene
          key={title}
          title={title}
          component={MainPage}
          navBar={NavBar}
          icon={TabIcon}
        />
      ))}
    </Scene>
  </Scene>,
);

export default scenes;
