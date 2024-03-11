import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HeaderCustom = ({ leftIcon, title, rightIcon }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnLeft}>
                {leftIcon && <Image style={styles.img} source={leftIcon} />}
            </TouchableOpacity>
            <Text style={styles.txtTitle}>{title}</Text>
            <TouchableOpacity style={styles.btnRight}>
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
    btnRight: {
        width: 34,
        marginLeft: 'auto'
    },
    txtTitle: {
        textAlign: 'center',
        flex: 1
    },
    btnLeft: {
        marginRight: 'auto',
        width: 34
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    }
})