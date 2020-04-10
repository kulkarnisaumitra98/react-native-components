/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Text, View } from 'react-native';
import {
  paddingStyles,
  borderStyles,
  marginStyles,
  dimensionStyles,
} from './src/styles/style';
import { BLUE_BUTTON } from './src/styles/colors';
import RowContainer from './src/components/Containers/RowContainer';
import SmallCircle from './src/components/Common/SmallCircle';
import WrappedScrollView from './src/components/Containers/WrappedScrollView';
import FlexedContainer from './src/components/Containers/FlexedContainer';
import CenteredContainer from './src/components/Containers/CenteredContainer';
import Button from './src/components/Button/Button';
import Container from './src/components/Containers/Container';
import IconButton from './src/components/Button/IconButton';
import AlignItemsRule from './src/snippets/AlignItemsRule';

export default function App() {
  return (
  // <CenteredContainer
  //   style={[marginStyles.mtsb, dimensionStyles.w_100, borderStyles.bw_1]}
  // >
  //   <Button title="gay" containerStyle={borderStyles.bw_2} />
  // </CenteredContainer>
    <AlignItemsRule />
  );
}
