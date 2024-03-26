import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HeaderCustom from '../../HeaderCustom'

const History = ({ navigation }) => {
    const [plant, setPlant] = useState(PLANT)
    const renderItem = ({ item }) => {
        const { id, name, property, quantity, image, buy_at, status } = item
        return (
            <View style={styles.viewBody}>
                <Text style={styles.txtTime}>{buy_at}</Text>
                <View style={styles.viewRow}>
                    <View style={styles.viewImg}>
                        <Image style={styles.imgProduct} source={image} />
                    </View>
                    <View style={styles.viewInfo}>
                        {status == 'Đặt hàng thành công' ? <Text style={styles.txtStatus}>{status}</Text> : <Text style={styles.txtStatusCancel}>{status}</Text>}
                        <Text style={styles.txtName}>{name} <Text style={styles.txtName}>|</Text> <Text style={styles.txtProperty}>{property}</Text></Text>
                        <Text style={styles.txtQuantity}>{quantity} sản phẩm</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <HeaderCustom leftIcon={require('../../../../assets/image/asm/together/back.png')} title={"Lịch sử giao dịch"} goBack={() => navigation.goBack()} />
            <FlatList
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
    txtStatusCancel: {
        fontSize: 16,
        color: '#FF0000',
        fontWeight: '500'
    },
    txtStatus: {
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