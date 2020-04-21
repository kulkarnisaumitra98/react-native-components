import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const PickerCont = ({
  contStyle,
  textStyle,
  iconStyle,

  text,
  handlePress,
}) => (
  <TouchableOpacity
    onPress={handlePress}
    style={[styles.container, contStyle]}
  >
    <Text style={[styles.text, textStyle]}>
      {text}
    </Text>
    <MaterialIcons name="keyboard-arrow-down" size={20} style={[styles.icon, iconStyle]} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 1,
    borderWidth: 0.5,
    borderColor: '#ddd',
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
