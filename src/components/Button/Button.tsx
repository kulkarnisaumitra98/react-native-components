import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { BLUE_BUTTON, WHITE, BLACK } from '../../styles/colors';
import { dimensionStyles } from '../../styles/style';
import MyText from '../Texts/MyText';
import { CommonButtonProps } from './types';

interface Props extends CommonButtonProps {}

const Button: React.FC<Props> = ({
  handlePress,
  long,
  title,
  contStyle,
  textStyle,
  touchConfig,
}) => (
  <TouchableOpacity
    style={[styles.container, contStyle, long ? dimensionStyles.w_100 : null]}
    onPress={handlePress}
    {...touchConfig}
  >
    <MyText style={[styles.text, textStyle]}>{title}</MyText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: BLUE_BUTTON,
    borderRadius: 4,
    margin: 8,
    elevation: 2,

    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  text: {
    color: WHITE,
    fontSize: 13,
  },
});

export default Button;
