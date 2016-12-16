import { StyleSheet } from 'react-native';
import {
  navigationBarBackgroundColor, navigationBarTitleColor,
  blueButtonBackgroundColor,
} from '../../styles';

const styles = StyleSheet.create({
  base: {
    height: 36,
  },
  primary: {
    borderColor: navigationBarBackgroundColor,
    backgroundColor: navigationBarBackgroundColor,
  },
  blue: {
    borderColor: blueButtonBackgroundColor,
    backgroundColor: blueButtonBackgroundColor,
  },
  textStyle: {
    color: navigationBarTitleColor,
    fontSize: 15,
  },
});

export default styles;
