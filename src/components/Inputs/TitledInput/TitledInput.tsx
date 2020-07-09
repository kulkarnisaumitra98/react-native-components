import React, { useRef } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { BLUE_BUTTON, GREY_2, OFFWHITE, WHITE } from '../../../styles/colors';
import MyText from '../../Texts/MyText';
import ErrorBelow from '../ErrorBelow';

const RED = 'red';
const GREEN = 'green';

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  textInputStyle?: StyleProp<ViewStyle>;
  config?: TextInputProps;
  title?: string;
  err?: { err: boolean };
  typed?: boolean;
}

const TitledInputMessaged: React.FC<Props> = ({
  containerStyle,
  titleStyle,
  textInputStyle,
  config,
  title,
  err,
  typed,
}) => {
  const ipRef = useRef(null);
  const showError = typed && err;

  return (
    <View style={[styles.container, containerStyle]}>
      {title ? (
        <MyText style={[styles.title, titleStyle]}>
          {title.toUpperCase()}
        </MyText>
      ) : (
        <MyText style={[styles.title, titleStyle]} />
      )}
      <TextInput
        ref={ipRef}
        style={[
          styles.inputContainer,
          textInputStyle,
          showError
            ? [{ borderColor: err?.err ? RED : GREEN }, styles.border]
            : null,
          !(config?.editable || true) && { backgroundColor: OFFWHITE },
        ]}
        {...config}
      />
      <ErrorBelow err={err} showError={showError} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    backgroundColor: WHITE,
    borderRadius: 4,
    overflow: 'hidden',
    borderWidth: 0,
    marginBottom: 8,
    paddingBottom: 16,
  },

  inputContainer: {
    borderRadius: 4,
    width: '100%',
    padding: 4,
    paddingLeft: 8,
    fontSize: 12,
    borderColor: GREY_2,
    borderWidth: 0.25,
    height: 28,
  },

  title: {
    color: BLUE_BUTTON,
    marginBottom: 8,
  },

  border: {
    borderWidth: 0.4,
  },
});

export default TitledInputMessaged;
