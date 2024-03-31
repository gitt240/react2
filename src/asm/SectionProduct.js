import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SectionProduct = ({ item, index, onPress }) => {
    const { _id, name, images, price, property } = item
    return (
        <TouchableOpacity onPress={onPress} style={styles.btnPlant}>
            <View style={styles.imgBackgroundProduct}>
                <Image style={styles.imgProduct} source={{ uri: images[0] }} />
            </View>
            <Text style={styles.txtName}>{name}</Text>
            {property && <Text style={styles.txtProperty}>{property}</Text>}
            <Text style={styles.txtPrice}>{price}đ</Text>
        </TouchableOpacity>
    )
}

export default SectionProduct

const styles = StyleSheet.create({
    txtPrice: {
        fontSize: 16,
        fontWeight: '500',
        color: '#007537',
        marginBottom: 15
    },
    txtProperty: {
        fontSize: 14,
        fontWeight: '400',
        color: '#7D7B7B'
    },
    txtName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000'
    },
    imgProduct: {
        width: 155,
        height: 134
    },
    imgBackgroundProduct: {
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        marginBottom: 4,
        alignItems: 'center',
        // width:155,
        // height:134
    },
    btnPlant: {
        marginTop: 15,
        width: '48%'
    },
})