import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Row = (props) => (
  <View style={styles.container}>
    <Text style={[styles.cell, styles.cell1]}>{props.title}</Text>
    <Text style={[styles.cell, styles.cell2]}>{props.info}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
  },

  cell: {
    borderWidth: 0.5,
    borderColor: '#dddddd80',
  },

  cell1: {
    width: '50%',
    padding: 4,
    textAlign: 'center',
  },

  cell2: {
    width: '50%',
    padding: 4,
  },
});

export default Row;
