import React from 'react';
import {
  View, StyleSheet, TouchableOpacity, Image,
} from 'react-native';
import { getSquare, dimensionStyles } from '../../styles/style';
import MyText from '../Texts/MyText';

const Header = ({
  containerStyle,
  headingStyle,
  title,
  color,
  iconSize,

  leftNav,
  iconLeftSource,
  iconLeftStyle,

  rightNav,
  iconRightSource,
  iconRightStyle,
}) => (
  <View style={[
    styles.container,
    containerStyle,
    { backgroundColor: color },
    dimensionStyles.dw,
  ]}
  >
    <TouchableOpacity onPress={leftNav}>

      <Image
        source={iconLeftSource}
        style={[styles.iconLeft, iconLeftStyle, getSquare(iconSize)]}
      />
    </TouchableOpacity>
    <MyText style={[styles.heading, headingStyle]}>{title}</MyText>
    <TouchableOpacity onPress={rightNav}>
      <Image
        source={iconRightSource}
        style={[styles.iconRight, iconRightStyle, getSquare(iconSize)]}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
  },

  iconLeft: {
    width: 30,
    height: 30,
  },

  iconRight: {
    width: 30,
    height: 30,
  },
});

export default Header;
