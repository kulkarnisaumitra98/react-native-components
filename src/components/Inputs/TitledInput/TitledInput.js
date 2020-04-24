import React from 'react';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';

const TitledInput = ({
  containerStyle,
  titleStyle,
  textInputStyle,
  config,
  title,
}) => (
  <View style={[styles.container, containerStyle]}>
    {title ? <Text style={[styles.title, titleStyle]}>{title}</Text> : <></>}
    <TextInput
      style={[styles.inputContainer, textInputStyle]}
      {...config}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 16,
    position: 'relative',
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

    padding: Platform.OS === 'web' ? 12 : 4,
    paddingLeft: Platform.OS === 'web' ? 12 : 8,
    fontSize: Platform.OS === 'web' ? 14 : 12,
  },

  title: {
    fontSize: 12,
    fontFamily: 'sans-serif',
    color: '#2b2d38',
    marginBottom: 8,
  },
});

export default TitledInput;
