import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, {
    withSpring,
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    withSequence,
    Easing,
    ReduceMotion,
    withDelay
} from 'react-native-reanimated'

const Lab2Anim6 = () => {
    const trucX = useSharedValue(0)
    const trucY = useSharedValue(0)
    const trucX2 = useSharedValue(0)
    const trucY2 = useSharedValue(0)
    const circle = useSharedValue(0)
    const boxColor = useSharedValue('#4584ff')

    const animatedStyles = useAnimatedStyle(() => ({
        // transform: [{ translateY: trucY.value }, { rotate: `${circle.value}deg` }],
        transform: [{ translateX: trucX.value }, { translateY: trucY.value }],
    }));
    const animatedStyles2 = useAnimatedStyle(() => ({
        transform: [{ translateX: trucX2.value }, { translateY: trucY2.value }, { rotate: `${circle.value}deg` }],
        backgroundColor: boxColor.value
    }))

    React.useEffect(() => {
        trucX.value = withRepeat(
            withSequence(
                withTiming(-312, { duration: 1000, easing: Easing.linear }),
                withTiming(-312, { duration: 1000, easing: Easing.linear }),
                withTiming(0, { duration: 1000, easing: Easing.linear }),
                withTiming(0, { duration: 1000, easing: Easing.linear }),
            ),
            -1,

        );

        trucY.value = withRepeat(
            withSequence(
                withTiming(0, { duration: 1000, easing: Easing.linear }),
                withTiming(-346, { duration: 1000, easing: Easing.linear }),
                withTiming(-346, { duration: 1000, easing: Easing.linear }),
                withTiming(0, { duration: 1000, easing: Easing.linear }),
            ),
            -1,

        );

        trucX2.value = withRepeat(withTiming(312, { duration: 1000 }), -1, true)
        trucY2.value = withRepeat(withTiming(285, { duration: 1000 }), -1, true)
        circle.value = withRepeat(withTiming(360, { duration: 1000 }), -1, true)
        boxColor.value = withRepeat(withTiming('#eb3c3c', { duration: 1000 }), -1, true)
    }, [])
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Animated.View style={[styles.box, animatedStyles2]} />
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <Animated.View style={[styles.box, animatedStyles]} />
            </View>
        </View>
    )
}

export default Lab2Anim6

const styles = StyleSheet.create({
    box: {
        height: 100,
        width: 100,
        backgroundColor: '#b58df1',
    },
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
})