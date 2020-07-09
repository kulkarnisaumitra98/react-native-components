import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TEXT_BLACK, TEXT_BLACK_1 } from '../../styles/colors';
import {
  CommonCompStyles,
  StyText,
  TouchableOpacityOnPress,
} from '../../types/common_types';
import ImageButton from '../Buttons/ImageButton';
import MyText from '../Texts/MyText';

interface Props extends CommonCompStyles {
  title?: string;
  titleStyle?: StyText;
  subTitle?: string;
  subTitleStyle: StyText;
  size?: number;
  iconPress: TouchableOpacityOnPress;
}

const Avatar: React.FC<Props> = ({
  title,
  titleStyle,
  contStyle,
  subTitle,
  subTitleStyle,
  iconPress,
  renderIcon,
  iconSource,
  size,
  iconStyle,
}) => {
  return (
    <View style={[styles.container, contStyle]}>
      <ImageButton
        handlePress={iconPress}
        size={size}
        circle
        renderIcon={renderIcon}
        iconSource={iconSource}
        iconStyle={iconStyle}
      />
      {title ? (
        <View style={styles.titleCont}>
          <MyText style={[styles.title, titleStyle]}>{title}</MyText>
          <MyText style={[styles.subTitle, subTitleStyle]}>{subTitle}</MyText>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    padding: 12,
    position: 'relative',
  },

  titleCont: {
    alignItems: 'center',
    marginTop: 8,
  },

  title: {
    color: TEXT_BLACK,
    fontSize: 13,
  },

  subTitle: {
    color: TEXT_BLACK_1,
    fontSize: 12,
  },
});

export default Avatar;
