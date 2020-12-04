import React from 'react'
import { ActivityIndicator, Dimensions, View, StyleSheet, ScrollView } from 'react-native'
import { Image } from 'react-native-elements'

const BigPhoto = ({ bigPhoto }) => {
    return (
        <View style={styles.bc}>
            <ScrollView>
                <Image style={styles.photo}
                       source={{uri: bigPhoto}} PlaceholderContent={<ActivityIndicator /> }/>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    photo: {
        width: '100%',
        height: Dimensions.get('window').height
    },

    bc: {
        backgroundColor: '#121212'
    }
});

export default BigPhoto