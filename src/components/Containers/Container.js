import React from 'react';
import { StyleSheet, View } from 'react-native';

const Container = ({
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
    width: '100%',
    padding: 8,
  },
});

export default Container;
