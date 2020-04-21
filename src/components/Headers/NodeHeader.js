import React from 'react';
import {
  View, StyleSheet, TouchableOpacity,
} from 'react-native';
import MyText from '../Texts/MyText';
import { dimensionStyles } from '../../styles/style';

const Header = ({
  title,
  color,

  containerStyle,
  headingStyle,

  leftNav,
  leftNode,
  rightNav,
  rightNode,
}) => (
  <View
    style={[
      styles.container,
      containerStyle,
      { backgroundColor: color },
      dimensionStyles.dw,
    ]}
  >
    <TouchableOpacity onPress={leftNav}>{leftNode}</TouchableOpacity>
    <MyText style={[styles.heading, headingStyle]}>{title}</MyText>
    <TouchableOpacity onPress={rightNav}>{rightNode}</TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },

  heading: {
    color: '#404a57',
    fontSize: 20,
    // fontWeight: 'bold',
  },
});

export default Header;
