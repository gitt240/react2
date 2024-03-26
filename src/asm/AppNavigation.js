import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigation from './Main/MainStackNavigation'

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <MainStackNavigation/>
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})