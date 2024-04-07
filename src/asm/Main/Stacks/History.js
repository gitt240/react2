import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderCustom from '../../HeaderCustom'
import { useSelector, useDispatch } from 'react-redux'
import { getCarts } from '../../Redux/API/CartAPI'
import { format, parseISO } from 'date-fns'


const History = ({ navigation }) => {
    const { data } = useSelector(state => state.getCart)
    const { loginData } = useSelector(state => state.login)
    const [plant, setPlant] = useState([])
    const dispatch = useDispatch()
    const user = loginData._id
    // console.log('data: ', data);

    useEffect(() => {
        const getCart = async () => {
            dispatch(getCarts(user))
        }
        getCart()
    }, [])

    useEffect(() => {
        try {
            if (data.length > 0) {
                setPlant(data)
            }
        } catch (error) {
            console.log(error);
        }
    }, [data])

    const renderItem = ({ item }) => {
        const { _id, date, products, status, user } = item
        const datefns = parseISO(date)
        const formatDate = format(datefns, "EEEE, MM/dd/yyyy 'lúc' HH:mm" )
        let statusText, statusStyle
        if (status == 1) {
            statusText = 'Chờ xác nhận'
            statusStyle = styles.txtStatusWait
        } else if (status == 2) {
            statusText = 'Đang giao hàng'
            statusStyle = styles.txtStatusShip
        } else if (status == 3) {
            statusText = 'Đặt hàng thành công'
            statusStyle = styles.txtStatusFinish
        } else if (status == 4) {
            statusText = 'Huỷ đơn hàng'
            statusStyle = styles.txtStatusCancel
        }
        return (
            <View style={styles.viewBody}>
                <Text style={styles.txtTime}>{formatDate}</Text>
                {products.map((product, index) => {
                    const { _id, name, images, property, quantity, price } = product
                    return (
                        < View key={index} style={styles.viewRow} >
                            <View style={styles.viewImg}>
                                <Image style={styles.imgProduct} source={{ uri: images[0] }} />
                            </View>
                            <View style={styles.viewInfo}>
                                <Text style={statusStyle}>{statusText}</Text>
                                <Text style={styles.txtName}>{name} <Text style={styles.txtName}>|</Text> <Text style={styles.txtProperty}>{property}</Text></Text>
                                <Text style={styles.txtQuantity}>{quantity} sản phẩm</Text>
                            </View>
                        </View>
                    )
                })
                }
            </View >
        )
    }
    return (
        <View style={styles.container}>
            <HeaderCustom leftIcon={require('../../../../assets/image/asm/together/back.png')} title={"Lịch sử giao dịch"} goBack={() => navigation.goBack()} />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={plant}
                renderItem={renderItem}
                key={item => item.id}
            />
        </View>
    )
}

export default History

const styles = StyleSheet.create({
    txtQuantity: {
        fontSize: 14,
        color: '#000'
    },
    txtProperty: {
        fontSize: 14,
        color: '#7D7B7B'
    },
    txtName: {
        fontSize: 16,
        color: '#000',
        fontWeight: '500',
        marginVertical: 2
    },
    txtStatusShip: {
        fontSize: 16,
        color: '#4584ff',
        fontWeight: '500'
    },
    txtStatusWait: {
        fontSize: 16,
        color: '#fdc13d',
        fontWeight: '500'
    },
    txtStatusCancel: {
        fontSize: 16,
        color: '#FF0000',
        fontWeight: '500'
    },
    txtStatusFinish: {
        fontSize: 16,
        color: '#007537',
        fontWeight: '500'
    },
    viewInfo: {
        marginLeft: 15,
    },
    imgProduct: {
        width: 77,
        height: 74,
    },
    viewImg: {
        width: 77,
        height: 74,
        backgroundColor: '#F6F6F6'
    },
    viewRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15
    },
    txtTime: {
        fontSize: 16,
        color: '#000',
        fontWeight: '500',
        paddingBottom: 5,
        borderBottomColor: '#7D7B7B',
        borderBottomWidth: 1
    },
    viewBody: {
        marginTop: 15,
        paddingHorizontal: 24
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: '#fff'
    },
})

var PLANT = [
    {
        id: 1,
        name: 'Spider Plant',
        image: require('../../../../assets/image/asm/home/p1.png'),
        property: 'Ưa bóng',
        quantity: 2,
        buy_at: 'Thứ tư, 03/09/2021',
        status: 'Đặt hàng thành công'
    },
    {
        id: 2,
        name: 'Song of India',
        image: require('../../../../assets/image/asm/home/p2.png'),
        property: 'Ưa sáng',
        quantity: 3,
        buy_at: 'Thứ hai, 01/09/2021',
        status: 'Đã huỷ đơn hàng'
    },
]