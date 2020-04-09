import React from 'react';
import { StyleSheet, View } from 'react-native';
import { positionStyles, dimensionStyles } from '../../styles/style';

const RowContainer = ({
  justifyContent,
  contStyle,
  padding,
  long,
  children,
}) => (
  <View style={[
    styles.container,
    contStyle,
    padding,
    justifyContent ? { justifyContent } : null,
    long ? dimensionStyles.w_100 : null,
  ]}
  >
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 8,
    height: 20,
    marginBottom: 10,
  },
});

export default RowContainer;
