import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { containerStyles } from './src/styles/containers';
import Button from './src/components/Button/Button';
import IconInput from './src/components/Inputs/IconIput/IconInput';
import TitledInput from './src/components/Inputs/TitledInput/TitledInput';
import BasicFlatList from './src/components/Lists/BasicFlatList';
import Row from './src/temp/Row';

export default function App() {
  const [value, setvalue] = useState([
    {id: 1, title: 'Hello', class: 'Bulla'},
    {id: 2, title: 'Hello1', class: 'Bulla1'},
    {id: 3, title: 'Hello2', class: 'Bulla2'},
  ])  
  
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
        />
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
        <Button title="LOG IN"/> */}
        <BasicFlatList
          data={value}
          RowItem={Row}
          unique_key="id"
          containerStyle={{
            borderWidth: 1,
            borderColor:'red',
            width: '90%',
            // padding: 4,
          }}
          listContainerStyle={{
            borderWidth: 1,
            margin: 4,
          }}
          listStyle={{
            // borderWidth: 1
          }}
        />
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
