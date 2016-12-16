import React from 'react';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';
import APSLButton from 'apsl-react-native-button';

import styles from './styles';

const Button = compose(
  mapProps(({ style, textStyle, bsStyle, ...rest }) => ({
    style: [styles.base, styles[bsStyle], style],
    textStyle: [styles.textStyle, textStyle],
    ...rest,
  })),
)(APSLButton);

Button.defaultProps = {
  bsStyle: 'primary',
};

Button.propTypes = {
  bsStyle: React.PropTypes.string,
};

export default Button;
