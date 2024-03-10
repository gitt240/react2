import { FlatList, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Home = () => {
    const [plant, setPlant] = useState(PLANT)
    const renderPlant = ({ item }) => {
        const { id, name, image, property } = item
        return (
            <TouchableOpacity style={styles.btnPlant}>
                <ImageBackground style={styles.imgBackgroundProduct}>
                    <Image source={image} />
                </ImageBackground>
                <Text style={styles.txtName}>{name}</Text>
                <Text style={styles.txtProperty}>{property}</Text>
                <Text style={styles.txtPrice}>250.000đ</Text>
            </TouchableOpacity>
        )
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar translucent backgroundColor={'#F6F6F6'} />
            <View style={styles.viewHead}>
                <View style={styles.viewTxtHead}>
                    <Text style={styles.txtHead}>Planta - toả sáng không gian nhà bạn</Text>
                    <TouchableOpacity style={styles.btnXemThem}>
                        <Image source={require('../../assets/image/asm/home/xemthem.png')} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnCart}>
                    <Image source={require('../../assets/image/asm/home/cart.png')} />
                </TouchableOpacity>
                <Image style={styles.imgBackground} source={require('../../assets/image/asm/home/background.png')} />
            </View>

            <View style={styles.viewBody}>
                <Text style={styles.txtBlack}>Cây trồng </Text>
                <FlatList
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    data={plant}
                    renderItem={renderPlant}
                    key={item => item.id}
                />

                <TouchableOpacity style={styles.btnSeenAll}>
                    <Text style={styles.txtSeenAll}>Xem thêm Cây trồng</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    txtSeenAll: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        textDecorationLine: 'underline',
    },
    btnSeenAll: {
        marginVertical: 30,
        alignItems: 'flex-end'
    },
    txtPrice: {
        fontSize: 16,
        fontWeight: '500',
        color: '#007537'
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
    txtBlack: {
        fontSize: 24,
        color: '#000',
        fontWeight: '500'
    },
    viewBody: {
        paddingHorizontal: 24,
    },
    imgBackground: {
        width: '100%',
    },
    btnCart: {
        alignItems: 'flex-end',
        paddingRight: 24
    },
    btnXemThem: {
        marginTop: 7
    },
    txtHead: {
        fontSize: 24,
        color: '#000',
        fontFamily: 'Poppins-Medium',
        width: 250,
    },
    viewTxtHead: {
        position: 'absolute',
        top: 75,
        left: 24,
        zIndex: 1,
    },
    viewHead: {
        backgroundColor: '#F6F6F6',
        paddingTop: 64,
        marginBottom: 30
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})

var PLANT = [
    {
        id: 1,
        name: 'Spider Plant',
        image: require('../../assets/image/asm/home/p1.png'),
        property: 'Ưa bóng'
    },
    {
        id: 2,
        name: 'Song of India',
        image: require('../../assets/image/asm/home/p2.png'),
        property: 'Ưa sáng'
    },
    {
        id: 3,
        name: 'Pink Anthurium',
        image: require('../../assets/image/asm/home/p3.png'),
        property: 'Ưa bóng'
    },
    {
        id: 4,
        name: 'Black Love Anthurium',
        image: require('../../assets/image/asm/home/p4.png'),
        property: 'Ưa bóng'
    },
]