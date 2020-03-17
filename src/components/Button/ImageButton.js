import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'

const ImageButton = ({
    buttonContStyle,
    imageContStyle,
    imageStyle,

    circle,
    size,
    imgSource,
    handlePress,

    config,
}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            style={[styles.container, buttonContStyle]}
        >
            <View style={[imageContStyle, circle ? {borderRadius: size} : {}]}>
                <Image
                    source={imgSource}
                    style={[{width: size, height: size}, circle ? {borderRadius: size} : {}, imageStyle]}
                    {...config}                    
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        
    },        
})

export default ImageButton