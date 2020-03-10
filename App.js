import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import TitledInput from './src/components/TitledInput/TitledInput';
import { containerStyles } from './src/styles/containers';
import Button from './src/components/Button/Button';
import IconInput from './src/components/Inputs/IconIput/IconInput';

export default function App() {
  const [value, setvalue] = useState('')  
  
  return (
    <View style={styles.container}>
      <View style={[containerStyles.alignCenter, {borderWidth: 0}]}>
        {/* <TitledInput
          title="EMAIL ID/ PHONE NUMBER"
          config={{
            value: value,
            placeholder: "Email",
            secureText: false,
            onChangeText: (ipvalue) => setvalue(ipvalue),
          }}
        /> */}
        <IconInput
          config={{
            value: value,
            placeholder: "Search my employers",
            secureText: false,
            onChangeText: (ipvalue) => setvalue(ipvalue),
            placeholderTextColor: '#7b7c83',
          }}
          iconSource={require('./src/assets/employer.png')}
          iconStyle={{tintColor: '#7b7c83'}}
        />
        {/* <Button title="LOG IN"/> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
    borderColor: '#dd3',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 24,
  },

  inputCont: {
    width: '90%',
    // borderWidth: 1,
  }
});
