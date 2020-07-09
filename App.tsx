import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import ImageButton from './src/components/Button/ImageButton';
import FlexedContainer from './src/components/Containers/FlexedContainer';
import store from './src/store';
import { borderStyles, positionStyles } from './src/styles/style';

const App = () => (
  <FlexedContainer contStyle={{ ...positionStyles.alc }}>
    <StatusBar hidden />

    <Provider store={store}>
      <ImageButton
        handlePress={() => {}}
        contStyle={borderStyles.bw_1}
        title="Hello"
        renderIcon={() => (
          <AntDesign name="pluscircleo" size={30} color="black" />
        )}
      />
    </Provider>
  </FlexedContainer>
);

export default App;
