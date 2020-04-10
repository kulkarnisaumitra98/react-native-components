import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { borderStyles, marginStyles } from '../styles/style';

const AlignItemsRule = () => (
  <View style={[styles.container, borderStyles.bw_2, { borderColor: 'red' }, marginStyles.mtsb]}>
    <Text style={borderStyles.bw_1}>Hello</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // This line makes the content wrap around itself (Width equal to its contents)
    // If we remove this the Text will have width equal to Parent
    // alignItems: 'center',
  },
});

export default AlignItemsRule;
