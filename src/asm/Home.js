import { FlatList, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SectionProduct from './SectionProduct'

const Home = ({ navigation }) => {
    const [plant, setPlant] = useState(PLANT)
    const [chau, setChau] = useState(CHAU)
    const [phukien, setPhuKien] = useState(PHUKIEN)
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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
                    renderItem={({ item }) => (
                        <SectionProduct
                            item={item}
                            onPress={() => navigation.navigate('Detail')}
                        />
                    )}
                    key={item => item.id}
                />

                <TouchableOpacity style={styles.btnSeenAll} onPress={() => { navigation.navigate('ListProduct') }}>
                    <Text style={styles.txtSeenAll}>Xem thêm Cây trồng</Text>
                </TouchableOpacity>

                {/*  */}
                <Text style={styles.txtBlack}>Chậu cây trồng </Text>
                <FlatList
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    data={chau}
                    renderItem={({ item }) => (
                        <SectionProduct
                            item={item}
                        />
                    )}
                    key={item => item.id}
                />

                <TouchableOpacity style={styles.btnSeenAll}>
                    <Text style={styles.txtSeenAll}>Xem thêm Chậu cây trồng</Text>
                </TouchableOpacity>

                {/*  */}
                <Text style={styles.txtBlack}>Phụ kiện</Text>
                <FlatList
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    data={phukien}
                    renderItem={({ item }) => (
                        <SectionProduct
                            item={item}
                        />
                    )}
                    key={item => item.id}
                />

                <TouchableOpacity style={styles.btnSeenAll}>
                    <Text style={styles.txtSeenAll}>Xem thêm Phụ kiện</Text>
                </TouchableOpacity>

                {/*  */}
                <Text style={styles.txtBlack}>Combo chăm sóc (mới)</Text>
                <TouchableOpacity style={styles.btnCombo}>
                    <Image style={styles.imgCombo} source={require('../../assets/image/asm/home/combo.png')} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    imgCombo: {
        width: '100%',
        borderRadius: 8
    },
    btnCombo: {
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtSeenAll: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        textDecorationLine: 'underline',
    },
    btnSeenAll: {
        marginBottom: 30,
        marginTop: 15,
        alignItems: 'flex-end'
    },
    txtBlack: {
        fontSize: 24,
        color: '#000',
        fontWeight: '500',
        marginTop: 15
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
        marginBottom: 15
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
var CHAU = [
    {
        id: 1,
        name: 'Planta Trắng ',
        image: require('../../assets/image/asm/home/c1.png'),
    },
    {
        id: 2,
        name: 'Planta Lemon Balm',
        image: require('../../assets/image/asm/home/c2.png'),
    },
    {
        id: 3,
        name: 'Planta Rosewood',
        image: require('../../assets/image/asm/home/c3.png'),
    },
    {
        id: 4,
        name: 'Planta Dove Grey',
        image: require('../../assets/image/asm/home/c4.png'),
    },
]

var PHUKIEN = [
    {
        id: 1,
        name: 'Bình tưới CB2 SAIC',
        image: require('../../assets/image/asm/home/pk1.png'),
    },
    {
        id: 2,
        name: 'Bình xịt Xiaoda ',
        image: require('../../assets/image/asm/home/pk2.png'),
    },
    {
        id: 3,
        name: 'Bộ cuốc xẻng mini',
        image: require('../../assets/image/asm/home/pk3.png'),
    },
    {
        id: 4,
        name: 'Giá đỡ Finn Terrazzo ',
        image: require('../../assets/image/asm/home/pk4.png'),
    },
]