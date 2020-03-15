import React, {useState, useEffect} from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import { containerStyles } from '../../../styles/containers'
import Row from './Row'

const MyText = (props) => {
    return (
        <Text style={styles.text}>
            {props.children}
        </Text>
    )
}


const ListHeader = () => {
    return (
        <React.Fragment>
            <MyText>This is a List Header, appers at the top of the list</MyText>
            <MyText>It can have any type of component above the list</MyText>
            <MyText>But this doesnt give us the freedom to style the actual list container</MyText>
            <MyText>Like bordering list container, fixing its height, so for that we have to use flatlist inside scrollview</MyText>
            <MyText>This forms the part of the container</MyText>
        </React.Fragment>
    )
}

const ListFooter = () => {
    return (
        <React.Fragment>
            <MyText>This is a List Footer appears at the bottom of the list</MyText>       
            <MyText>This method should be used when list is large and we want entire view to be scrollable and want to render the entire list as well</MyText>
            <MyText>If the list is short we can use map in scrollview instead of Flatlist</MyText>
            <MyText>We should not nest Flatlist inside Scrollview unless its required</MyText>
        </React.Fragment>
    )
}

const EmptyComponent = () => {
    return (
        <View>
            <Text>List is empty</Text>
        </View>
    )
}


const BasicFlatList = (props) => {
    const [mylist, setMylist] = useState([])

    useEffect(() => {
        const _mylist = []
        for (let i = 0; i < 25; ++i) {
            _mylist.push({
                id: i,
                title: 'title' + i,
                info: 'info' + i,
            })
        }

        setMylist(_mylist)

    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={mylist}
                renderItem={({ item, index }) => <Row {...item} index={index} />}
                keyExtractor={(item) => item.id.toString()}
                
                contentContainerStyle={[containerStyles.alignCenter]}
                style={[]}

                ListHeaderComponent={<ListHeader/>} // This component gets rendered above list
                ListHeaderComponentStyle={styles.listheader}    // Header Component style
                ListFooterComponent={<ListFooter/>} // This component gets rendered below List
                ListFooterComponentStyle={styles.listfooter}    // Footer Component style
                ListEmptyComponent={<EmptyComponent/>} // If no Data is present
                
                

                // extraData={} // Used to rerender list for some external side effect
                // stickyHeaderIndices={[0]}  // Can make any index stick to top
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },

    listheader: {
        borderColor: 'red',
        borderWidth: 1,
        width: '100%',
    },

    listfooter: {
        borderColor: 'red',
        borderWidth: 1,
        width: '100%',
    },

    text: {
        padding: 4,
    }
})

export default BasicFlatList
