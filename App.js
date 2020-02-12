import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TitledInput from './src/components/TitledInput/TitledInput';
import { containerStyles } from './src/styles/containers';
import Button from './src/components/Button/Button';

export default function App() {
  const [value, setvalue] = useState('')  
  
  return (
    <View style={styles.container}>
      <View style={[containerStyles.alignCenter, {borderWidth: 1}]}>
        <TitledInput
          title="EMAIL ID/ PHONE NUMBER"
          config={{
            value: value,
            placeholder: "Email",
            secureText: false,
            onChangeText: (ipvalue) => setvalue(ipvalue),
          }}
        />
        <Button title="LOG IN"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
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
