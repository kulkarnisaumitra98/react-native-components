import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import FlexedContainer from './src/components/Containers/FlexedContainer';
import store from './src/store';
import { positionStyles } from './src/styles/style';

const App = () => (
  <FlexedContainer contStyle={{ ...positionStyles.alc }}>
    <StatusBar hidden />

    <Provider store={store}>
      <></>
    </Provider>
  </FlexedContainer>
);

export default App;
