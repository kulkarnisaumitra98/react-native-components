/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';

const SmallCircle = ({
  color,
  size,
  contStyle,
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
  />
);

export default SmallCircle;
