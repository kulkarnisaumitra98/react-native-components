import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyText from './MyText';

const CenterLineText = ({
  contStyle,
  textStyle,

  size,
  text,
}) => (
  <View style={[styles.container, contStyle]}>
    <MyText style={[styles.text, textStyle, { fontSize: size, bottom: -(size / 2) }]}>
      {text}
    </MyText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderTopWidth: 1,
    borderColor: '#72768c',

  },

  text: {
    color: '#72768c',
    paddingLeft: 6,
    paddingRight: 6,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
});

export default CenterLineText;
