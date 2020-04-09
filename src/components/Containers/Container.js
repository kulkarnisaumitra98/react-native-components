import React from 'react';
import { StyleSheet, View } from 'react-native';

const Container = ({
  children,
  contStyle,
  padding,
}) => (
  <View style={[styles.container, contStyle, padding]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default Container;
