import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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

const Buoi2Animation = () => {
    // const width = useSharedValue(50)
    // const trucX = useSharedValue(0)
    // const handle = () => {
    //     width.value = width.value + 50
    //     trucX.value = withSpring(trucX.value + 50)
    // }
    // return (
    //     <View>
    //         <Animated.View style={[styles.box, { transform: [{ translateX: trucX }] }]} />
    //         <Button title='Click' onPress={handle} />
    //     </View>
    // )

    // const offset = useSharedValue(362);
    const circle = useSharedValue(0)
    const trucX = useSharedValue(0);
    const trucY = useSharedValue(0);
    const width = useSharedValue(150);
    const height = useSharedValue(150);
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateY: trucY.value }, { rotate: `${circle.value}deg` }],
        width: width.value,
        height: height.value
    }));

    // React.useEffect(() => {
    //     offset.value = withRepeat(withTiming(0, { duration: 1500 }),-1)

    // }, [])

    const anim1 = () => {
        width.value = withSequence(withSpring(0, { mass: 1, duration: 150, }), withSpring(300, { mass: 1, duration: 100, }), withSpring(150, { mass: 1, duration: 4000, dampingRatio: 0.2, })),
            height.value = withSequence(withSpring(0, { mass: 1, duration: 150, }), withSpring(300, { mass: 1, duration: 100, }), withSpring(150, { mass: 1, duration: 4000, dampingRatio: 0.2, }))
        // offset.value = withRepeat(
        //     withTiming(-offset.value, { duration: 1500 }),
        //     -1,
        //     true
        // );

        // width.value = 
        //     withSequence(
        //         withTiming(0, { duration: 100 }),
        //         withTiming(150, { duration: 500 })
        //     ),

        // height.value = 
        //     withSequence(
        //         withTiming(0, { duration: 100 }),
        //         withTiming(150, { duration: 500 }),
        //     )


    }

    const anim2 = () => {
        width.value =
            withSequence(
                withTiming(0, { duration: 100 }),
                withTiming(150, { duration: 500 })
            ),

            height.value =
            withSequence(
                withTiming(0, { duration: 100 }),
                withTiming(150, { duration: 500 }),
            )

    }

    const anim3 = () => {
        trucY.value = 0
        trucY.value = withTiming(680, { duration: 2000 })
    }

    const amin4 = () => {
        width.value =
            withSequence(
                withTiming(0, { duration: 100 }),
                withTiming(150, { duration: 500 }),
                withDelay(2000, withSpring(300, { duration: 4000, dampingRatio: 0.15 }),)
            ),

            height.value =
            withSequence(
                withTiming(0, { duration: 100 }),
                withTiming(150, { duration: 500 }),
                withDelay(2000, withSpring(300, { duration: 4000, dampingRatio: 0.15 }))
            )
    }

    const anim5 = () => {
        circle.value = withRepeat(withTiming(80, { duration: 150 }),2,true)
    }
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, animatedStyles]} />
            <View style={{ paddingTop: 400 }}>
                <TouchableOpacity style={styles.btn} onPress={anim1}>
                    <Text style={styles.txtBtn}>anim 1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={anim2}>
                    <Text style={styles.txtBtn}>anim 2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={anim3}>
                    <Text style={styles.txtBtn}>anim 3</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={amin4}>
                    <Text style={styles.txtBtn}>anim 4</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={anim5}>
                    <Text style={styles.txtBtn}>anim 5</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

export default Buoi2Animation

const styles = StyleSheet.create({
    txtBtn: {
        fontSize: 16,
        color: '#fff',

    },
    btn: {
        backgroundColor: '#4584ff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 10
    },
    box: {
        height: 50,
        width: 50,
        backgroundColor: '#b58df1',
        marginBottom: 20,
        // borderRadius: 20,
        position: 'absolute'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})