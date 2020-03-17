import React from 'react'
import { Image, View, StyleSheet, TextInput} from 'react-native';

const iconWidth = 15

const IconInput = ({
    textInputStyle,
    iconSource,
    iconStyle,
    iconContStyle,
    config,
    title,
    titleStyle,
}) => {
    return (
        <View style={styles.searchBox}>
            {title ? <Text style={[styles.title, titleStyle]}>{title}</Text> : <React.Fragment/>}                                         
            <View style={[styles.iconCont, iconContStyle]}>
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
        position: 'relative',
        flexDirection: 'row',        
        elevation: 2,
        padding: 2,
        
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,       
    },

    title: {
        fontSize: 12,
        fontFamily: 'sans-serif',
        color: '#2b2d38',
        marginBottom: 8,
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
        width: iconWidth,
    },

    iconCont: {
        marginLeft: 8,
        marginRight: 8,
    },
})

export default IconInput
