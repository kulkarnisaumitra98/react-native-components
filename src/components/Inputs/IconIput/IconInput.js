import React from 'react'
import { Image, View, StyleSheet, TextInput} from 'react-native';

const IconInput = ({
    textInputStyle,
    iconSource,
    iconStyle,
    config
}) => {
    return (
        <View style={styles.searchBox}>
            <View style={styles.iconCont}>
                <Image
                    style={[styles.icon, iconStyle]}
                    resizeMode="contain"
                    source={iconSource}
                />
            </View>            
            <TextInput
               style={[styles.inputContainer, textInputStyle]}
                {...config}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBox: {
        width: '100%',
        // marginTop: 16,
        position: 'relative',
        flexDirection: 'row',        
        elevation: 2,
        padding: 2,
        
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,       
    },

    inputContainer: {
        borderRadius: 4,
        flex: 1,
        backgroundColor: '#fff',
        letterSpacing: 0.3,
        textAlignVertical: 'center',
        fontSize: 12
    },

    icon: {
        width: 15,
    },

    iconCont: {
        marginLeft: 8,
        marginRight: 8,
    },
})

export default IconInput
