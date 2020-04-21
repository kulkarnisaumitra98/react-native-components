import React from 'react';
import {
  Text, View, StyleSheet, TextInput,
} from 'react-native';

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
    padding: 4,
    fontSize: 12,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },

  title: {
    fontSize: 12,
    fontFamily: 'sans-serif',
    color: '#2b2d38',
    marginBottom: 8,
  },
});

export default TitledInput;
