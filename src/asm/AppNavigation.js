import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigation from './Main/MainStackNavigation'
import UserNavigation from './Authen/UserNavigation'
import { useSelector } from 'react-redux'

const AppNavigation = () => {
  const appState = useSelector(state => state.app)
  return (
    <NavigationContainer>
      {appState.user ? <MainStackNavigation /> : <UserNavigation />}
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})