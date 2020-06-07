import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { BLUE_BUTTON, BORDER, WHITE } from '../../../styles/colors';
import ModalPickerContainer from './ModalPickerContainer';

const ModalAndPicker = ({
  contStyle,
  textStyle,
  iconStyle,

  title,
  index,
  handlePressOnPicker,
  handlePressModalOption,
  hideModal,
  rows,
  visible,

  modalContStyle,
}) => (
  <TouchableOpacity
    onPress={handlePressOnPicker}
    style={[styles.pickerCont, contStyle]}
  >
    <Text style={[styles.pickerText, textStyle]}>{rows[index].label}</Text>
    <MaterialIcons
      name="keyboard-arrow-down"
      size={25}
      style={[styles.pickerIcon, iconStyle]}
    />
    <ModalPickerContainer
      container={modalContStyle}
      title={title}
      pickerIndex={index}
      visible={visible}
      handlePress={(idx) => handlePressModalOption(idx)}
      hideModal={hideModal}
      rows={rows}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  pickerCont: {
    flexDirection: 'row',
    backgroundColor: BLUE_BUTTON,
    elevation: 1,
    borderWidth: 0.5,
    borderColor: BORDER,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 0,
    height: 35,
    position: 'relative',
    padding: 8,
    paddingRight: 4,
  },

  pickerIcon: {
    color: WHITE,
  },

  pickerText: {
    marginRight: 8,
    fontSize: 12,
    color: WHITE,
  },
});

export default ModalAndPicker;
