import { TEXT_GREY, TEXT_GREY_1, WHITE } from '@plootus/common';
import React from 'react';
import {
  StyleSheet,
  View,
  TextStyle,
  ViewStyle,
  StyleProp,
} from 'react-native';
import Button from '../../Buttons/Button';
import ModalWrapper from '../../Containers/ModalWrapper';
import RowContainer from '../../Containers/RowContainer';
import MyText from '../../Texts/MyText';
import { TouchableOpacityOnPress } from '../../../../types/commonTypes';
import { FONT_SIZE } from '../../../styles/appRelated';

interface Props {
  visible: boolean;
  setVisible: any;

  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  textContent?: string;
  textContentStyle?: StyleProp<ViewStyle>;

  otherContent?: JSX.Element;

  buttonLeftPress?: TouchableOpacityOnPress;
  buttonLeftContStyle?: StyleProp<ViewStyle>;
  buttonLeftText: string;
  buttonLeftTextStyle?: StyleProp<TextStyle>;

  buttonRightPress?: TouchableOpacityOnPress;
  buttonRightContStyle?: StyleProp<ViewStyle>;
  buttonRightText: string;
  buttonRightTextStyle?: StyleProp<TextStyle>;
}

const DialogModal: React.FC<Props> = ({
  visible,
  setVisible,

  title,
  titleStyle,
  textContent,
  textContentStyle,

  otherContent,

  buttonLeftPress,
  buttonLeftContStyle,
  buttonLeftText,
  buttonLeftTextStyle,

  buttonRightPress,
  buttonRightContStyle,
  buttonRightText,
  buttonRightTextStyle,
}) => {
  return (
    <ModalWrapper visible={visible} setVisible={setVisible}>
      <View style={styles.container}>
        {title ? (
          <MyText style={[styles.title, titleStyle]}>{title}</MyText>
        ) : null}
        {textContent ? (
          <MyText style={[styles.content, textContentStyle]}>
            {textContent}
          </MyText>
        ) : null}
        {otherContent || null}
        <RowContainer justifyContent="space-between">
          <Button
            handlePress={buttonLeftPress}
            title={buttonLeftText}
            textStyle={buttonLeftTextStyle}
            containerStyle={[styles.button, buttonLeftContStyle]}
          />
          <Button
            handlePress={buttonRightPress}
            title={buttonRightText}
            textStyle={buttonRightTextStyle}
            containerStyle={[styles.button, buttonRightContStyle]}
          />
        </RowContainer>
      </View>
    </ModalWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '85%',
    backgroundColor: WHITE,
    padding: 16,
    borderRadius: 8,
  },

  title: {
    borderWidth: 0,
    padding: 8,
    fontSize: FONT_SIZE + 1,
    color: TEXT_GREY,
  },

  content: {
    borderWidth: 0,
    padding: 8,
    marginBottom: 16,
    color: TEXT_GREY_1,
  },

  button: {
    width: '45%',
    elevation: 0,
    paddingTop: 6,
    paddingBottom: 6,
  },
});

export default DialogModal;
