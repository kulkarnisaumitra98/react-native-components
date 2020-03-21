import React from 'react'
import {StyleSheet, View } from 'react-native'

const RowContainer = ({
    justifyContent,
    contStyle,
}) => {
    return (
        <View style={[styles.container, contStyle, {justifyContent}]}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 2,
    }
})

export default RowContainer