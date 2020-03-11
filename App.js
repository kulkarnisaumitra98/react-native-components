import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { containerStyles } from './src/styles/containers';
import Button from './src/components/Button/Button';
import IconInput from './src/components/Inputs/IconIput/IconInput';
import TitledInput from './src/components/Inputs/TitledInput/TitledInput';
import BasicFlatList from './src/components/Lists/BasicFlatList/BasicFlatList';

export default function App() { 
  return (
    <View style={{ borderWidth: 1, borderColor: 'blue', flex: 1, paddingTop: 24, }}>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // borderWidth: 1,
    borderColor: '#dd3',
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 24,
  },

  inputCont: {
    width: '90%',
    // borderWidth: 1,
  }
});
