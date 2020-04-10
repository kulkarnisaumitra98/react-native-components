import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WHITE } from '../../styles/colors';

const CenteredContainer = ({
  contStyle,
  children,
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
    backgroundColor: WHITE,
    // alignItems: 'center',
    alignSelf: 'baseline',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'blue',
  },
});

export default CenteredContainer;
