/* eslint-disable import/prefer-default-export */
import ProfilePage from '../containers/ProfilePage';

export const views = [{
  title: 'Explore',
}, {
  title: 'Favorite',
}, {
  title: 'Notification',
}, {
  title: 'Me',
  component: ProfilePage,
  initial: true,
}];
