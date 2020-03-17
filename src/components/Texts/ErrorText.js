import React from 'react'
import {StyleSheet, View } from 'react-native'

const ErrorText = ({
    containerStyle,
    text,
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={styles.errorText}>{text}</Text>    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 4,
        marginBottom: 4,
    }
})

export default ErrorText