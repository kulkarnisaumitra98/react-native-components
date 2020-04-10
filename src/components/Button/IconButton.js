import React from 'react';
import {
  StyleSheet, View, TouchableOpacity, Image,
} from 'react-native';
import { containerStyles } from '../../styles/containers';
import { BLUE_BUTTON, WHITE } from '../../styles/colors';
import MyText from '../Texts/MyText';
import { positionStyles, marginStyles, dimensionStyles } from '../../styles/style';

const IconButton = ({
  handlePress,
  title,
  size,
  long,
  tintColor,
  right,

  contStyle,
  textStyle,
  iconSource,
  iconContStyle,
  iconStyle,
  touchConfig,
  textConfig,

}) => (
  <TouchableOpacity
    style={[
      containerStyles.centeredRow,
      styles.container,
      contStyle, right ? positionStyles.fdrr : null,
      long ? dimensionStyles.w_100 : null,
    ]}
    onPress={handlePress}
    {...touchConfig}
  >
    <View style={iconContStyle}>
      <Image
        source={iconSource}
        style={[iconStyle, { width: size, height: size, tintColor }]}
        resizeMode="contain"
      />
    </View>
    <MyText {...textConfig} style={[styles.text, textStyle, right ? marginStyles.mr_4 : null]}>
      {title}
    </MyText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLUE_BUTTON,
    borderRadius: 4,
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    elevation: 2,
  },

  text: {
    color: WHITE,
    marginLeft: 4,
  },
});

export default IconButton;
