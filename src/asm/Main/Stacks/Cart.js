import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderCustom from '../../HeaderCustom'
import { useSelector, useDispatch } from 'react-redux'
import VND from '../../format/FormatCurrency'
import { deleteAllOrder, deleteOrder, getOrder, updateOrder } from '../../Redux/API/OrderAPI'
import AxiosInstance from '../../helpers/AxiosInstance'

const Cart = ({ navigation }) => {
    const { loginData } = useSelector(state => state.login)
    const { getOrderData, getOrderStatus } = useSelector(state => state.getOrder)
    const dispatch = useDispatch()
    const [cart, setCart] = useState([])
    const user = loginData._id
    const products = getOrderData.map(item => item.product)
    const totalPrice = products.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0)


    useEffect(() => {
        const getCart = async () => {
            try {
                dispatch(getOrder(user))
            } catch (error) {
                console.log(error);
            }
        }
        getCart()
    }, [])

    useEffect(() => {
        if (getOrderData.length > 0) {
            setCart(getOrderData);
        }
        if (getOrderData.length === 0) {
            setCart([]);
        }
    }, [getOrderData]);
    // console.log('data: ', getOrderData);

    const handleDeleteOneOrder = async (_id) => {
        const id = _id
        dispatch(deleteOrder(id))
        dispatch(getOrder(user))
    }

    const handleDeleteAllOrder = async () => {
        dispatch(deleteAllOrder(user))
        dispatch(getOrder(user))
        // setCart([])
    }

    const handleChangeQuantity = (_id, quantity) => {
        const id = _id
        const change = quantity
        dispatch(updateOrder({id,change }))
        dispatch(getOrder(user))
    }

    const renderItem = ({ item }) => {
        const { _id, user, product } = item
        const { images, name, price, quantity } = product

        // console.log('item: ', item);
        // console.log(images);
        return (
            <View style={styles.viewProduct}>
                <TouchableOpacity>
                    <Image source={require('../../../../assets/image/asm/cart/checked.png')} />
                </TouchableOpacity>
                <View style={styles.viewImgProduct}>
                    <Image style={styles.imgProduct} source={{ uri: images[0] }} />
                </View>

                <View>
                    <Text style={styles.txtName}>{name} <Text style={styles.txtName}>|</Text> <Text style={styles.txtProperty}>Ưa bóng</Text></Text>
                    <Text style={styles.txtPrice}>{VND.format(price)}</Text>
                    <View style={styles.viewRow}>
                        <View style={styles.viewQuantity}>
                            <TouchableOpacity onPress={() => handleChangeQuantity(_id, -1)} >
                                <Image style={styles.imgQuantity} source={require('../../../../assets/image/asm/together/reduce.png')} />
                            </TouchableOpacity>
                            <Text style={styles.txtQuantity}>{quantity}</Text>
                            <TouchableOpacity onPress={() => handleChangeQuantity(_id, 1)}>
                                <Image style={styles.imgQuantity} source={require('../../../../assets/image/asm/together/increase.png')} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => handleDeleteOneOrder(_id)}>
                            <Text style={styles.txtRemove}>Xoá</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <HeaderCustom
                leftIcon={require('../../../../assets/image/asm/together/back.png')}
                title={'Giỏ hàng'}
                rightIcon={require('../../../../assets/image/asm/together/trash.png')}
                goBack={() => navigation.goBack()}
                onPress={handleDeleteAllOrder}
            />

            <FlatList
            showsVerticalScrollIndicator={false}
                data={cart}
                renderItem={renderItem}
                ListEmptyComponent={<Text style={styles.txtCartEmpty}>Giỏ hàng của bạn hiện đang trống</Text>}
                keyExtractor={item => item._id.toString()}
            />

            {cart.length > 0 &&
                <View style={styles.viewRow}>
                    <Text>Tạm tính</Text>
                    <Text style={styles.txtTotalPrice}>{VND.format(totalPrice)}</Text>
                </View>
            }

            {cart.length > 0 &&
                <TouchableOpacity style={styles.btnPay} onPress={() => { navigation.navigate('Payment') }}>
                    <Text style={styles.txtPay}>Tiến hành thanh toán</Text>
                    <Image source={require('../../../../assets/image/asm/cart/right.png')} />
                </TouchableOpacity>
            }



        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    txtCartEmpty: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 30
    },
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
        marginRight: 40
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
        img: require('../../../../assets/image/asm/home/p1.png')
    }
]