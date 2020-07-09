import React from 'react';
import { StyleSheet, View, ViewStyle, StyleProp } from 'react-native';

interface Props {
  contStyle?: StyleProp<ViewStyle>;
}

const Container: React.FC<Props> = ({ children, contStyle }) => (
  <View style={[styles.container, contStyle]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default Container;
