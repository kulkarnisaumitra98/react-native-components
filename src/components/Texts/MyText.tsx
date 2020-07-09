import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { FONT_SIZE } from '../../styles/appRelated';

const MyText: React.FC<TextProps> = ({ children, style, onPress }) => {
  return (
    <Text onPress={onPress} style={[styles.container, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: 'ssfpro',
    fontSize: FONT_SIZE,
  },
});

export default MyText;
