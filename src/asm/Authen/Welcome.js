import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Welcome = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            // navigation.navigate('Login')
        }, 2000);
    }, [])
    return (
        <View>
            <Text>Welcome</Text>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({})