import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { BORDER, WHITE } from '../../styles/colors';
import {
  CommonCompStyles,
  TouchableOpacityOnPress,
} from '../../types/common_types';

interface Props extends CommonCompStyles {
  text: string;
  handlePress?: TouchableOpacityOnPress;
  disabled?: boolean;
}

const PickerCont: React.FC<Props> = ({
  contStyle,
  textStyle,
  iconStyle,

  text,
  handlePress,
  disabled,
}) => (
  <TouchableOpacity
    onPress={handlePress}
    style={[styles.container, contStyle]}
    disabled={disabled}
  >
    <Text style={[styles.text, textStyle]}>{text}</Text>
    <MaterialIcons
      name="keyboard-arrow-down"
      size={20}
      style={[styles.icon, iconStyle]}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: WHITE,
    elevation: 1,
    borderWidth: 0.5,
    borderColor: BORDER,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    position: 'relative',
  },

  icon: {
    borderWidth: 0,
    marginLeft: 4,
    marginRight: 4,
    paddingTop: 4,
  },

  text: {
    marginLeft: 8,
    fontSize: 12,
  },
});

export default PickerCont;
