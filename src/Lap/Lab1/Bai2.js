import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DateView from './DateView'
import HotelView from './HotelView'

const Bai2 = () => {
    return (
        <View style={styles.container}>
            <DateView title={'Lịch trình'} data={TRAVEL} />
            <HotelView title={'Khách sạn'} data={HOTEL} />
        </View>
    )
}

export default Bai2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    }
})

var TRAVEL = [
    {
        id: 1,
        address: 'Hồ Tràm, Vũng Tàu',
        date: '09.00 AM - 12.00 AM, 12/12/2024',
        vehical: 'Xe bus',
        time: '21.00 - 22.00',
        image: require('../../../assets/image/Lab/Lab1/travel1.png')
    },
    {
        id: 2,
        address: 'Vườn quốc gia Phong Nha - Kẻ Bàng',
        date: '09.00 AM - 12.00 AM, 12/12/2024',
        vehical: 'Xe bus',
        time: '21.00 - 22.00',
        image: require('../../../assets/image/Lab/Lab1/travel2.png')
    },
    {
        id: 3,
        address: 'Phố cổ Hội An',
        date: '09.00 AM - 12.00 AM, 12/12/2024',
        vehical: 'Xe bus',
        time: '21.00 - 22.00',
        image: require('../../../assets/image/Lab/Lab1/travel3.png')
    }
]

var HOTEL = [
    {
        id: 1,
        address: '234 Quang Trung, Hồ Chí Minh',
        time: '06.00 AM - 12.00 AM',
        name: 'Hồng Quỳnh',
    }
]