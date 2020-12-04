import React from 'react'
import { View, FlatList } from 'react-native'
import Item from './Item/Item'

const Gallery = ({ gallery, setBigPhoto, navigation }) => {
    return (
        <View style={{ backgroundColor: '#121212' }}>
            <FlatList
                data={gallery}
                renderItem={({ item }) => <Item setBigPhoto={setBigPhoto} navigation={navigation}
                                                userName={item.userName} photo={item.photo} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
};

export default Gallery