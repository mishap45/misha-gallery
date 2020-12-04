import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Animated } from 'react-native'

import Gallery_Container from '../components/Gallery/Gallery_Container'
import BigPhoto_Container from '../components/BigPhoto/BigPhoto_Container'

const forFade = ({ current, next }) => {
    const opacity = Animated.add(
        current.progress,
        next ? next.progress : 0
    ).interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, 1, 0],
    });

    return {
        leftButtonStyle: {opacity},
        rightButtonStyle: {opacity},
        titleStyle: {opacity},
        backgroundStyle: {opacity},
    };
};

const Stack = createStackNavigator();

const AppNavigator = () => {

    return (
        <Stack.Navigator
            initialRouteName="Gallery"
            headerMode="screen"
            screenOptions={{
                headerTintColor: '#03DAC5',
                headerStyle: {backgroundColor: '#121212'}
            }}
        >
            <Stack.Screen
                name="Gallery"
                component={Gallery_Container}
                options={{
                    headerStyleInterpolator: forFade
                }}
            />

            <Stack.Screen
                name="BigPhoto"
                component={BigPhoto_Container}
                options={{
                    headerStyleInterpolator: forFade
                }}
            />
        </Stack.Navigator>
    )
};

export default AppNavigator