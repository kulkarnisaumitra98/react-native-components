/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

const FilledCircle = ({
  color, size, contStyle, config,
}) => (
  <TouchableOpacity
    style={[
		  {
		    width: size,
		    height: size,
		    borderRadius: size,
		    backgroundColor: color,
		    overflow: 'hidden',
		    margin: 4,
		  },
		  contStyle,
    ]}
    {...config}
  />
);

export default FilledCircle;
