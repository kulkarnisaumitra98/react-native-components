import React from 'react';
import {
  StyleSheet, View, TouchableOpacity, Image,
} from 'react-native';

const ImageButton = ({
  buttonContStyle,
  imageContStyle,
  imageStyle,

  circle,
  size,
  imgSource,
  handlePress,

  config,
}) => (
  <TouchableOpacity
    onPress={handlePress}
    style={[styles.container, buttonContStyle]}
  >
    <View style={[styles.imageCont, imageContStyle, circle ? { borderRadius: size } : null]}>
      <Image
        source={imgSource}
        style={[{ width: size, height: size }, imageStyle, circle ? { borderRadius: size } : null]}
        {...config}
      />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageCont: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImageButton;
