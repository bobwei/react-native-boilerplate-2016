import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const TabIcon = ({ selected, title }) => (
  <View>
    <Text style={selected && styles.selected}>
      {title}
    </Text>
  </View>
);

TabIcon.propTypes = {
  selected: React.PropTypes.bool,
  title: React.PropTypes.string,
};

export default TabIcon;
