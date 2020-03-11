import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import {containerStyles} from '../../styles/containers'

const BasicFlatList = ({
    data,
    unique_key,
    extradata,
    RowItem,
    containerStyle,
    listContainerStyle,
    listStyle,
}) => {
    
    return (
        <View style={[containerStyles.alignCenter, containerStyle]}>
            <FlatList
                data={data}
                renderItem={({item, index}) => <RowItem {...item} index={index}/>}
                keyExtractor={(item) => item[unique_key].toString()}
                extraData={extradata}
                contentContainerStyle={[styles.listCont, listContainerStyle]}
                style={[styles.list, listStyle]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listCont: {

    },

    list: {

    },
})

export default BasicFlatList
