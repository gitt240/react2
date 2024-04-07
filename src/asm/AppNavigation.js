import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigation from './Main/MainStackNavigation'
import UserNavigation from './Authen/UserNavigation'
import { useSelector } from 'react-redux'

const AppNavigation = () => {
  const {loginData} = useSelector(state => state.login)
  return (
    <NavigationContainer>
      {loginData? <MainStackNavigation /> : <UserNavigation />}
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})