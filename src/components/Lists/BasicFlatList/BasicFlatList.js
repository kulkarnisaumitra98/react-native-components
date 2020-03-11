import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { containerStyles } from '../../../styles/containers'
import Row from './Row'

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
                keyExtractor={(item) => item[unique_key].toString()}
                contentContainerStyle={[containerStyles.alignCenter]}
                style={[]}
                ListHeaderComponent={}
                ListHeaderComponentStyle={{ width, borderWidth: 1, backgroundColor: '#fff' }}
                ListFooterComponent={}
                ListFooterComponentStyle={{ width: '100%' }}
                stickyHeaderIndices={[0]}
                ListEmptyComponent={} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default BasicFlatList
