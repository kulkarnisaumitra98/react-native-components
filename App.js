import React from 'react';
// import { StyleSheet, View, StatusBar } from 'react-native';
import Button from './src/components/Button/Button';
import CenteredContainer from './src/components/Containers/CenteredContainer';
import { paddingStyles } from './src/styles/spacing';

export default function App() {
  return (
    <CenteredContainer
      padding={paddingStyles.p_8}
      contStyle={{ backgroundColor: '#f8f8f8' }}
    >
      <Button title="Click me" long containerStyle={[paddingStyles.p_8]} />
    </CenteredContainer>
  );
}
