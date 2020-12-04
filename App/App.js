import React from 'react'
import AppNavigator from './screens/AppNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import Store from './store/Redux'

const App = () => <NavigationContainer>
    <Provider store={Store}>
        <AppNavigator />
    </Provider>
</NavigationContainer>;

export default App