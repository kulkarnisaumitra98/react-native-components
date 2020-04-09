/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { StatusBar } from 'react-native';
import CenteredContainer from './src/components/Containers/CenteredContainer';
import { paddingStyles } from './src/styles/style';
import {
  OFFWHITE, YELLOW, WHITE, BLACK,
} from './src/styles/colors';
import HelpTextAlert from './src/components/Common/HelpTextAlert/HelpTextAlert';

export default function App() {
  return (
    <CenteredContainer
      padding={paddingStyles.p_0}
      contStyle={{
        backgroundColor: OFFWHITE,
        borderColor: YELLOW,
        borderWidth: 3,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <HelpTextAlert
        title="Hello"
        text="Ayyy gandu lavdya"
        size={18}
      />
    </CenteredContainer>
  );
}
