/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { marginStyles } from './src/styles/style';

const App = () => (
  <View style={[styles.container, marginStyles.mtsb]} />
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
  },
});

export default App;
