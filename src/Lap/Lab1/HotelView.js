import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HotelView = ({ title, data }) => {
    const renderHotel = (data) => {
        return data.map((item, index) => (
            <View key={index} style={styles.containerDate}>
                <Text style={styles.txtGrey}>Tên khách sạn</Text>
                <Text style={styles.txtBlack}>{item.name}</Text>
                <Text style={styles.txtGrey}>Giờ mở cửa</Text>
                <Text style={styles.txtBlack}>{item.time}</Text>
                <Text style={styles.txtGrey}>Địa điểm</Text>
                <Text style={styles.txtBlack}>{item.address}</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.txtBtn}>Chi tiết</Text>
                </TouchableOpacity>
            </View>
        ))
    }
    return (
        <View>
            <Text style={styles.txtTitle}>{title}</Text>
            {renderHotel(data)}
        </View>
    )
}

export default HotelView

const styles = StyleSheet.create({
    txtBtn:{
        color:'#fff',
        fontSize:16,
        textTransform:'uppercase'
    },
    btn: {
        backgroundColor: '#4584ff',
        height:40,
        justifyContent:'center',
        alignItems:'center'
    },
    txtBlack: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 10
    },
    txtGrey: {
        color: '#9d9d9d',
        fontSize: 14,
        fontWeight: 'bold'
    },
    txtTitle: {
        fontSize: 28,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 10
    },
    containerDate: {
        padding: 16,
        borderRadius: 20,
        backgroundColor: '#fff',
        elevation: 8,
    },
})