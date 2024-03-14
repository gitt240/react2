import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderCustom from './HeaderCustom'

const Cart = () => {
    const [data, setData] = useState(CART)

    const renderItem = ({ item }) => {
        const { id, name, img } = item
        return (
            <View style={styles.viewProduct}>
                <TouchableOpacity>
                    <Image source={require('../../assets/image/asm/cart/checked.png')} />
                </TouchableOpacity>
                <View style={styles.viewImgProduct}>
                    <Image style={styles.imgProduct} source={img} />
                </View>

                <View>
                    <Text style={styles.txtName}>{name} <Text style={styles.txtName}>|</Text> <Text style={styles.txtProperty}>Ưa bóng</Text></Text>
                    <Text style={styles.txtPrice}>250.000đ</Text>
                    <View style={styles.viewRow}>
                        <View style={styles.viewQuantity}>
                            <TouchableOpacity>
                                <Image style={styles.imgQuantity} source={require('../../assets/image/asm/together/reduce.png')} />
                            </TouchableOpacity>
                            <Text style={styles.txtQuantity}>1</Text>
                            <TouchableOpacity>
                                <Image style={styles.imgQuantity} source={require('../../assets/image/asm/together/increase.png')} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.txtRemove}>Xoá</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <HeaderCustom
                leftIcon={require('../../assets/image/asm/together/back.png')}
                title={'Giỏ hàng'}
                rightIcon={require('../../assets/image/asm/together/trash.png')}
            />

            <FlatList
                data={data}
                renderItem={renderItem}
                key={item => item.id}
            />

            <View style={styles.viewRow}>
                <Text>Tạm tính</Text>
                <Text style={styles.txtTotalPrice}>500.000đ</Text>
            </View>

            <TouchableOpacity style={styles.btnPay}>
                <Text style={styles.txtPay}>Tiến hành thanh toán</Text>
                <Image source={require('../../assets/image/asm/cart/right.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    txtPay: {
        fontSize: 18,
        color: '#fff'
    },
    btnPay: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#007537',
        marginVertical: 12
    },
    txtTotalPrice: {
        fontSize: 16,
        color: '#000',
        fontWeight: '500'
    },
    txtRemove: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        textDecorationLine: 'underline'
    },
    txtQuantity: {
        fontSize: 14,
        color: '#000',
        marginHorizontal: 20
    },
    imgQuantity: {
        width: 20,
        height: 20
    },
    viewQuantity: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight:40
    },
    viewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtPrice: {
        fontSize: 16,
        color: '#007537',
        fontWeight: '500',
        marginBottom: 15
    },
    txtProperty: {
        fontSize: 14,
        color: '#7D7B7B',
    },
    txtName: {
        fontSize: 16,
        color: '#000',
        fontWeight: '500',
    },
    imgProduct: {
        width: 77,
        height: 77
    },
    viewImgProduct: {
        backgroundColor: '#F6F6F6',
        marginLeft: 30,
        marginRight: 15,
        borderRadius: 8
    },
    viewProduct: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        marginBottom: 20
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: '#fff'
    },
})

var CART = [
    {
        id: 1,
        name: 'Spider Plant',
        img: require('../../assets/image/asm/home/p1.png')
    }
]