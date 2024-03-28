import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Authen/Login'
import Register from './Authen/Register'
import Home from './Main/Tabs/Home'
import Detail from './Main/Stacks/Detail'
import Cart from './Main/Stacks/Cart'
import ListProduct from './Main/Stacks/ListProduct'
const Stack = createNativeStackNavigator()
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Detail' component={Detail} />
        <Stack.Screen name='Cart' component={Cart} />
        <Stack.Screen name='ListProduct' component={ListProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})