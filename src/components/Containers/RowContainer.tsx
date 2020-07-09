import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  GestureResponderEvent,
  StyleProp,
} from 'react-native';

interface Props {
  justifyContent?:
    | 'center'
    | 'space-between'
    | 'flex-start'
    | 'flex-end'
    | 'space-around';
  contStyle?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}

const RowContainer: React.FC<Props> = ({
  justifyContent,
  contStyle,

  children,
  onPress = () => {},
  disabled = true,
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[
      styles.container,
      contStyle,
      justifyContent ? { justifyContent } : null,
    ]}
  >
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
  },
});

export default RowContainer;
