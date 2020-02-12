import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TitledInput from './src/components/TitledInput/TitledInput';

export default function App() {
  const [value, setvalue] = useState('')
  
  return (
    <View style={styles.container}>
      <View style={styles.inputCont}>
        <TitledInput
          title="EMAIL ID/ PHONE NUMBER"
          config={{
            value: value,
            placeholder: "Email",
            secureText: false,
            onChangeText: (ipvalue) => setvalue(ipvalue),
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
