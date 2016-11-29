import { NavBar } from 'react-native-router-flux';
import { compose, withProps } from 'recompose';

import styles from './styles';

export default compose(
  withProps({
    ...styles,
  }),
)(NavBar);
