import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated, { withSpring } from 'react-native-reanimated'
import { useSharedValue } from 'react-native-reanimated'

const Buoi2Animation = () => {
    const width = useSharedValue(50)
    const trucX = useSharedValue(0)
    const handle = () => {
        width.value = width.value + 50
        trucX.value = withSpring(trucX.value + 50)
    }
    return (
        <View>
            <Animated.View style={[styles.box, { transform: [{ translateX: trucX }] }]} />
            <Button title='Click' onPress={handle} />
        </View>
    )
}

export default Buoi2Animation

const styles = StyleSheet.create({
    box: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    }
})