import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const { width } = Dimensions.get('window');
const DateView = ({ title, data }) => {
    const renderDate = (data) => {
        return data.map((item, index) => (
            <View key={index} style={[styles.containerDate, index == 2 && styles.itemLast]}>
                <Text style={styles.txtGrey}>Địa điểm</Text>
                <Text style={styles.txtBlack}>{item.address}</Text>
                <Text style={styles.txtGrey}>Ngày khỏi hành</Text>
                <Text style={styles.txtBlack}>{item.date}</Text>
                <Text style={styles.txtGrey}>Phương tiện di chuyển</Text>
                <Text style={styles.txtBlack}>{item.vehical}</Text>
                <Text style={styles.txtGrey}>Thời gian</Text>
                <Text style={styles.txtBlack}>{item.time}</Text>
                <Text style={styles.txtGrey}>Hình ảnh</Text>
                <Image style={styles.img} source={item.image} />
            </View>
        ))
    }
    return (
        <View>
            <Text style={styles.txtTitle}>{title}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {renderDate(data)}
            </ScrollView>
        </View>
    )
}

export default DateView

const styles = StyleSheet.create({
    itemLast: {
        marginRight: 0
    },
    img: {
        width: '100%',
        height: 170,
        objectFit: 'cover',
        marginBottom: 15
    },
    txtBlack: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 20
    },
    txtGrey: {
        color: '#9d9d9d',
        fontSize: 14,
        fontWeight: 'bold'
    },
    containerDate: {
        width: width - 42,
        // width:'100%',
        padding: 16,
        borderRadius: 20,
        backgroundColor: '#fff',
        elevation: 5,
        marginBottom: 10,
        marginEnd: 20
    },
    txtTitle: {
        fontSize: 28,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 10
    },
})