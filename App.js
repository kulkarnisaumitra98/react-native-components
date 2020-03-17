import React from 'react';
import { StyleSheet, View} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#dd3',
    backgroundColor: '#dff',
    alignItems: 'center',
    // paddingTop: 24,
    marginTop: 24,
    position: 'relative',
  },

  textCont: {
    position: 'absolute',
    top: 26,
    zIndex: 1,
    backgroundColor: 'red',
    elevation: 3,
  },

  text: {
    
  },

  inputContainer: {
    borderRadius: 4,
    width: '90%',
    // marginTop: 8,
    borderWidth: 1,
    elevation: 2,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    letterSpacing: 0.3,
    textAlignVertical: 'center',
    padding: 4,
    fontSize: 12,    
    height: 38,

    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 3 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
  },

});
