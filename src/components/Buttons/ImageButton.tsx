import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { getSquare } from '../../styles/style';
import { CommonButtonProps } from './types';

interface Props extends Omit<CommonButtonProps, 'title'> {
  circle?: boolean;
  size?: number;
}

const ImageButton: React.FC<Props> = ({
  handlePress,
  circle,
  size,

  contStyle,
  iconContStyle,
  iconStyle,
  iconSource,
  renderIcon,
}) => {
  return (
    <TouchableOpacity
      disabled={handlePress === undefined}
      onPress={handlePress}
      style={[styles.container, contStyle]}
    >
      <View style={[iconContStyle, circle ? { borderRadius: size } : null]}>
        {iconSource && size ? (
          <Image
            source={iconSource}
            style={[
              getSquare(size),
              circle ? { borderRadius: size } : null,
              iconStyle,
            ]}
          />
        ) : renderIcon ? (
          renderIcon()
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    position: 'relative',
  },

  iconImageCont: {
    borderWidth: 0,
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    right: 0,
  },
});

export default ImageButton;
