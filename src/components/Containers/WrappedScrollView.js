import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Container from './Container';

const WrappedScrollView = ({
  contStyle,
  scrollContStyle,
  contentContStyle,

  children,
  config,
}) => (
  <Container style={contStyle}>
    <ScrollView
      style={[styles.container, scrollContStyle]}
      contentContainerStyle={[styles.contentCont, contentContStyle]}
      {...config}
    >
      {children}
    </ScrollView>
  </Container>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    borderColor: 'red',
  },

  contentCont: {
    alignItems: 'center',
  },
});

export default WrappedScrollView;
