import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import BasicFlatList from './src/components/Lists/BasicFlatList/BasicFlatList';

export default function App() { 
  return (
    <View style={styles.container}>      
      <BasicFlatList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#dd3',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 24,
  },
});
