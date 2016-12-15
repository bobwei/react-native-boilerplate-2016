import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import Button from 'apsl-react-native-button';

import styles from './styles';

export default compose(
  withProps(({ style, textStyle }) => ({
    style: [styles.buttonStyle, style],
    textStyle: [styles.textStyle, textStyle],
  })),
)(Button);
