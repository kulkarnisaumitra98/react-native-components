import React from 'react';
import { StyleSheet, View } from 'react-native';

const FlexedContainer = ({
  children,
  contStyle,
  padding,
  config,
}) => (
  <View
    style={[styles.container, contStyle, padding]}
    {...config}
  >
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 8,
    borderWidth: 0,
    borderColor: 'blue',
    backgroundColor: '#fff',
  },
});

export default FlexedContainer;
