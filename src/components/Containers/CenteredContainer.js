import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const CenteredContainer = ({
  contStyle,
  children,
  padding,
}) => (
  <View style={[styles.container, contStyle, padding]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CenteredContainer;
