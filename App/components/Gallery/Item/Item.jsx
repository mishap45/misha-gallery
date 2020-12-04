import React from 'react'
import { Text, View, StyleSheet, ActivityIndicator, Pressable } from 'react-native'
import { Image } from 'react-native-elements'

const Item = ({ photo, userName, setBigPhoto, navigation }) => {
    return (
        <View>
            <Pressable onPress={() => {
                setBigPhoto(photo);
                return navigation.navigate('BigPhoto')
            }}>
                <Image style={styles.photo} source={{
                    uri: photo
                }} PlaceholderContent={<ActivityIndicator />} />
                <Text style={styles.text}>{userName}</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        backgroundColor: '#121212',
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: 16,
        color: '#eee',
        opacity: 0.8
    },
    photo: {
        width: '100%',
        height: 150,
    },
});

export default Item