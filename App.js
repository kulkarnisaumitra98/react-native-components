/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Text } from 'react-native';
import {
  paddingStyles,
  borderStyles,
  marginStyles,
} from './src/styles/style';
import { BLUE_BUTTON } from './src/styles/colors';
import RowContainer from './src/components/Containers/RowContainer';
import SmallCircle from './src/components/Common/SmallCircle';
import WrappedScrollView from './src/components/Containers/WrappedScrollView';
import FlexedContainer from './src/components/Containers/FlexedContainer';
import CenteredContainer from './src/components/Containers/CenteredContainer';

export default function App() {
  return (
    <FlexedContainer contStyle={marginStyles.mtsb}>
      <CenteredContainer>
        <WrappedScrollView>
          <RowContainer
            justifyContent="flex-start"
            contStyle={borderStyles.bw_1}
            padding={paddingStyles.p_0}
            long
          >
            <SmallCircle color={BLUE_BUTTON} size={8} />
            <Text>Hello Boi</Text>
          </RowContainer>
          <RowContainer
            justifyContent="flex-start"
            contStyle={borderStyles.bw_1}
            padding={paddingStyles.p_0}
            long
          >
            <SmallCircle color={BLUE_BUTTON} size={8} />
            <Text>Hello Boi</Text>
          </RowContainer>
          <RowContainer
            justifyContent="flex-start"
            contStyle={borderStyles.bw_1}
            padding={paddingStyles.p_0}
            long
          >
            <SmallCircle color={BLUE_BUTTON} size={8} />
            <Text>Hello Boi</Text>
          </RowContainer>
          <RowContainer
            justifyContent="flex-start"
            contStyle={borderStyles.bw_1}
            padding={paddingStyles.p_0}
            long
          >
            <SmallCircle color={BLUE_BUTTON} size={8} />
            <Text>Hello Boi</Text>
          </RowContainer>
          <RowContainer
            justifyContent="flex-start"
            contStyle={borderStyles.bw_1}
            padding={paddingStyles.p_0}
            long
          >
            <SmallCircle color={BLUE_BUTTON} size={8} />
            <Text>Hello Boi</Text>
          </RowContainer>
          <RowContainer
            justifyContent="flex-start"
            contStyle={borderStyles.bw_1}
            padding={paddingStyles.p_0}
            long
          >
            <SmallCircle color={BLUE_BUTTON} size={8} />
            <Text>Hello Boi</Text>
          </RowContainer>
          <RowContainer
            justifyContent="flex-start"
            contStyle={borderStyles.bw_1}
            padding={paddingStyles.p_0}
            long
          >
            <SmallCircle color={BLUE_BUTTON} size={8} />
            <Text>Hello Boi</Text>
          </RowContainer>
          <RowContainer
            justifyContent="flex-start"
            contStyle={borderStyles.bw_1}
            padding={paddingStyles.p_0}
            long
          >
            <SmallCircle color={BLUE_BUTTON} size={8} />
            <Text>Hello Boi</Text>
          </RowContainer>
          <RowContainer
            justifyContent="flex-start"
            contStyle={borderStyles.bw_1}
            padding={paddingStyles.p_0}
            long
          >
            <SmallCircle color={BLUE_BUTTON} size={8} />
            <Text>Hello Boi</Text>
          </RowContainer>
        </WrappedScrollView>
      </CenteredContainer>
    </FlexedContainer>
  );
}
