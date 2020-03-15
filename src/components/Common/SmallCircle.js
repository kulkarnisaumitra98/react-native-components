import React from 'react'
import {StyleSheet, View, PixelRatio } from 'react-native'

const SmallCircle = (props) => {
    console.log(PixelRatio.get(), "Pixel Ratio")
    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default SmallCircle