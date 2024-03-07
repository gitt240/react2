import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register from './Register'
import Home from './Home'
import Details from './Details'

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Details' component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack

const styles = StyleSheet.create({})