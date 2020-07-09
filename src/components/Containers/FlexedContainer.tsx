import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { paddingStyles } from '../../styles/style';

const { width } = Dimensions.get('screen');

interface Props {
  contStyle?: StyleProp<ViewStyle>;
  padding?: boolean;
}

const FlexedContainer: React.FC<Props> = ({ children, contStyle, padding }) => (
  <View
    style={[styles.container, padding ? paddingStyles.plr_12 : null, contStyle]}
  >
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    width,
    borderWidth: 1,
  },
});

export default FlexedContainer;
