/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import CenteredContainer from '../components/Containers/CenteredContainer';

const HOC = (WrappedComponent) => class extends React.PureComponent {
  render() {
    const myExtraProp = ' extra props ';
    return (
      <WrappedComponent
        extraProp={myExtraProp}
      />
    );
  }
};

const Comp = (props) => (
  <View style={{ backgroundColor: '#dddddd' }}>
    <Text style={{ textAlign: 'center' }}>
      This is how you pass
      {props.extraProp}
      and render JSX properly.
    </Text>
  </View>
);

const RenderingJSX = (props) => {
  const JSXedComp = HOC(Comp);

  return <CenteredContainer><JSXedComp /></CenteredContainer>;
};
export default RenderingJSX;
