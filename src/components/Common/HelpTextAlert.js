import React from 'react'
import { StyleSheet, View, Text, Alert, TouchableOpacity, Image } from 'react-native'

const getAlert = (title, text) => {
    Alert.alert(title, text,
        [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { 
                text: 'OK', 
                onPress: () => console.log('Cancel Pressed'), 
            },
        ],
    )
}


const HelpTextAlert = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {props.title}
            </Text>
            <TouchableOpacity onPress={() => getAlert(props.title, props.text)}>
                <View style={{ borderRadius: props.size }}>
                    <Image 
                        style={{ width: props.size, height: props.size }} 
                        source={require('./question.png')}                         
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    title: {
        // fontSize: 20, 
        color: '#2b2d38', 
        marginBottom: 4, 
        marginRight: 4
    }
})

export default HelpTextAlert