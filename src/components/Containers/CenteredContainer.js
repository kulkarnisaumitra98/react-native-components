import React from 'react'
import {StyleSheet, View, Dimensions } from 'react-native'

const width = Dimensions.get("screen").width

const CenteredContainer = ({
    contStyle,
    children
}) => {
    return (
        <View style={[styles.container, contStyle]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {        
        flex: 1,
        width,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',        
    }
})

export default CenteredContainer