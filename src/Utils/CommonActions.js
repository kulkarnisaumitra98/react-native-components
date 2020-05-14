/* eslint-disable import/prefer-default-export */
import { Alert } from 'react-native';
import { IS_WEB } from './DeviceInfo';

export const sendAlert = (message, title = 'Alert', onOk, onCancel) => {
  if (IS_WEB) {
    alert(message);
  } else {
    Alert.alert(title, message);
  }
};
