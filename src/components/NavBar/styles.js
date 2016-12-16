import { StyleSheet } from 'react-native';

import { navigationBarBackgroundColor, navigationBarTitleColor } from '../../styles';

const styles = StyleSheet.create({
  navigationBarStyle: {
    backgroundColor: navigationBarBackgroundColor,
    borderBottomWidth: 0,
  },
  titleStyle: {
    color: navigationBarTitleColor,
  },
  backButtonTextStyle: {
    color: navigationBarTitleColor,
  },
});

export default styles;
