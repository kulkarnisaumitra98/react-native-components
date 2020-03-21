import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { BLUE_BUTTON, WHITE } from '../../styles/colors'

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
        padding: 4,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: BLUE_BUTTON,
        borderRadius: 4,
        margin: 8,
        elevation: 2,
    },

    text: {
        color: WHITE,
        fontSize: 14,
    },
})

export default Button;