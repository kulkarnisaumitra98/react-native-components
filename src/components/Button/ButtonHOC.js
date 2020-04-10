import React from 'react';
import { TouchableOpacity } from 'react-native';
import { dimensionStyles } from '../../styles/style';

const ButtonHOC = ({
  children,
  handlePress,
  long,
  container,
  containerStyle,
}) => (
  <TouchableOpacity
    style={[container, containerStyle, long ? dimensionStyles.w_100 : null]}
    onPress={handlePress}
  >
    {children}
  </TouchableOpacity>
);

export default ButtonHOC;
