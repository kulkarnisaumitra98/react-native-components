import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({
    handlePress,
    long,
    title,
    containerStyle,
    textStyle,
}) => {
    return (
        <TouchableOpacity
            style={[styles.container, containerStyle, long ? {width: '100%'} : {}]}
            onPress={handlePress}
        >
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#6495ed',
        borderRadius: 4,
        margin: 8,
    },

    text: {
        color: '#fff',
        fontSize: 14,
    },
})

export default Button;