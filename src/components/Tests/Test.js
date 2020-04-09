import React from 'react'
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native'
import CenteredContainer from '../Containers/CenteredContainer'
import TitledInput from '../Inputs/TitledInput/TitledInput'

const width = Dimensions.get("screen").width

const Test = (props) => {
    return (
        <View style={{ flex: 1, borderColor: 'red', borderWidth: 3, width: '100%', alignItems: 'center' }}>
            <View style={{borderWidth: 3, borderColor: 'blue', width}}>
                <ScrollView style={{ width: '80%', borderWidth: 2, borderColor: '#dd3'}}
                    // contentContainerStyle={{ height: 100, borderWidth: 1 }}
                >
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                </ScrollView>
            </View>
        </View>

    )
}

// const Test = (props) => {
//     return (
//         <CenteredContainer>
//             <TitledInput 
//                 title="Hello"
//             />
//             <TitledInput 
//                 title="Hello"
//             />
//             <TitledInput 
//                 title="Hello"
//             />
//             <TitledInput 
//                 title="Hello"
//             />
//             <TitledInput 
//                 title="Hello"
//             />
//             <TitledInput 
//                 title="Hello"
//             />
//             <TitledInput 
//                 title="Hello"
//             />
//             <TitledInput 
//                 title="Hello"
//             />
//         </CenteredContainer>        
//     )
// }

const styles = StyleSheet.create({
    container: {

    }
})

export default Test