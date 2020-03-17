import React from 'react'
import {StyleSheet, Dimensions, ScrollView } from 'react-native'

const width = Dimensions.get("screen").width

const CenteredContainer = ({
    contStyle,
    contentContStyle,
    
    children,
}) => {
    return (
        <CenteredContainer>
            <ScrollView 
                style={[styles.container, contStyle]} 
                contentContainerStyle={[styles.contentCont, contentContStyle]}
            >
                {children}
            </ScrollView>            
        </CenteredContainer>
    )
}

const styles = StyleSheet.create({
    container: {                
        width,
        alignItems: 'center',                
    },

    contentCont: {
        alignItems: 'center',
    }
})

export default CenteredContainer