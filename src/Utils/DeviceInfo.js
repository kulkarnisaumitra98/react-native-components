import { Dimensions, Platform } from 'react-native';

export const PLATFORM = Platform.OS;
export const IS_WEB = PLATFORM === 'web';

export const { width, height } = Dimensions.get('window');
