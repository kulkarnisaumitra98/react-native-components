import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';

const iconWidth = 35

const PasswordInput = ({
    containerStyle,
    titleStyle,
    textInputStyle,    
    config,
    title,    
    iconStyle,
    iconContStyle,
}) => {

    const [visible, setvisible] = useState(true)

    return (
        <View style={[styles.container, containerStyle]}>
            {title ? <Text style={[styles.title, titleStyle]}>{title}</Text> : <React.Fragment/>}                                         
            <TextInput
                style={[styles.inputContainer, textInputStyle]}
                secureTextEntry={visible}
                maxLength={40}
                {...config}
            />
            <TouchableOpacity 
                style={[styles.iconCont, iconContStyle]}
                onPress={() => setvisible((prevState) => !prevState)}>
                <Image
                    style={[styles.icon, iconStyle]}
                    resizeMode="contain"
                    source={require('./eye.png')}
                />
            </TouchableOpacity>     
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        marginTop: 16,
        position: 'relative',   
        backgroundColor: '#fff',             
        // borderWidth: 1,
    },

    inputContainer:{
        borderRadius: 4,
        width: '100%',        
        borderBottomWidth: 0.5,        
        elevation: 2,        
        borderColor: '#ddd',
        letterSpacing: 0.3,
        textAlignVertical: 'center',
        padding: 4,
        paddingLeft: 6,
        fontSize: 12,
        
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

    icon: {
        width: iconWidth,
    },

    iconCont: {
        position: 'absolute',
        right: 0,
        top: 4,                
        zIndex: 1,        
        // borderWidth: 1,
        marginRight: 2,
    },
});

export default PasswordInput;
