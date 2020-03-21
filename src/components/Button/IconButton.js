import React from 'react'
import {StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native'
import { containerStyles } from '../../styles/containers'
import { BLUE_BUTTON, WHITE } from '../../styles/colors'

const width = 15

const IconButton = ({
    handlePress,
    title,
    size,
    tintColor,

    contStyle,
    textStyle,
    iconSource,
    iconContStyle,
    iconStyle,

}) => {
    return (
        <TouchableOpacity 
            style={[containerStyles.centeredRow, styles.container ,contStyle]}
            onPress={handlePress}
        >
            <View style={[iconContStyle]}>
                <Image
                    source={iconSource}
                    style={[{width}, iconStyle, {width: size, height: size, tintColor}]}
                    resizeMode="contain"
                />
            </View>
            <Text style={[styles.text, textStyle]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: BLUE_BUTTON,
        borderRadius: 4,        
        padding: 4,
        paddingLeft: 16,
        paddingRight: 16,
        elevation: 2,
    },

    text: {
        color: WHITE,
        marginLeft: 8,        
    }
})

export default IconButton