/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useRef } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SUCCESS_TEXT } from '../../../styles/colors';
import { dimensionStyles } from '../../../styles/style';
import { IS_WEB } from '../../../Utils/DeviceInfo';
import KeyboardViewContext from '../../KeyboardView/KeyboardViewContext';
import ErrorBelow from '../ErrorBelow';

const TitledInput = ({
  containerStyle,
  titleStyle,
  textInputStyle,
  config,
  title,
  info,
  mode, // Specifies if the input is hidden or not
  typed,
}) => {
  const ipRef = useRef(null);

  const responsive = dimensionStyles.dw.width <= 400;

  // Used for keyboard avoiding view
  const context = useContext(KeyboardViewContext);

  const showError = (config.value || typed) && info;

  return (
    <View style={[styles.container, containerStyle]}>
      {title ? <Text style={[styles.title, titleStyle]}>{title}</Text> : null}
      <TextInput
        ref={ipRef}
        style={[
				  styles.inputContainer,
				  textInputStyle,
				  showError
				    ? { borderWidth: 1.2, borderColor: info.err ? 'red' : SUCCESS_TEXT }
				    : null,
				  config.value && { backgroundColor: '#fbfbfb' },
        ]}
        {...config}
        onFocus={() => {
          // On focus set current iput ref, so as to blur later manually
          // And change mode accordingly if input is hidden under keyboard
				  if (responsive) context.toggleMode(mode, ipRef);
        }}
      />
      <ErrorBelow err={info} showError={showError} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: 4,
    overflow: 'hidden',
    paddingBottom: 16,
    borderWidth: 0,
    marginBottom: 8,
  },

  inputContainer: {
    borderRadius: 4,
    width: '100%',
    borderBottomWidth: 0.5,
    elevation: 2,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    letterSpacing: 0.3,
    textAlignVertical: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,

    padding: IS_WEB ? 12 : 4,
    paddingLeft: IS_WEB ? 12 : 8,
    fontSize: IS_WEB ? 14 : 12,
  },

  title: {
    fontSize: 12,
    fontFamily: 'sans-serif',
    color: '#2b2d38',
    marginBottom: 8,
  },
});

export default TitledInput;
