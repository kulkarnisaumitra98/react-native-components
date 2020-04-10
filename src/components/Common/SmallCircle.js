/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';

const SmallCircle = ({
  color,
  size,
  contStyle,
  config,
}) => (
  <View
    style={[{
      width: size,
      height: size,
      borderRadius: size,
      backgroundColor: color,
      margin: 4,
    },
    contStyle,
    ]}
    {...config}
  />
);

export default SmallCircle;
