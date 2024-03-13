import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HeaderCustom = ({ leftIcon, title, rightIcon }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn}>
                {leftIcon && <Image style={styles.img} source={leftIcon} />}
            </TouchableOpacity>
            <Text style={styles.txtTitle}>{title}</Text>
            <TouchableOpacity style={styles.btn}>
                {rightIcon && <Image style={styles.img} source={rightIcon} />}
            </TouchableOpacity>
        </View>
    )
}

export default HeaderCustom

const styles = StyleSheet.create({
    img: {
        width: 34
    },
    btn: {
        width: 34,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginTop: 20,
    }
})