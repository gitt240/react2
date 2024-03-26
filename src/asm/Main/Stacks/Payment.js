import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderCustom from '../../HeaderCustom'

const Payment = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderCustom leftIcon={require('../../../../assets/image/asm/together/back.png')} title={'Thanh toán'} goBack={() => navigation.goBack()} />
            <View style={styles.viewBody}>
                <Text style={styles.txtTitle}>Thông tin khách hàng</Text>
                <TextInput style={styles.inputInfor} placeholder='Họ và tên' />
                <TextInput style={styles.inputInfor} placeholder='Email' />
                <TextInput style={styles.inputInfor} placeholder='Địa chỉ' />
                <TextInput style={styles.inputInfor} placeholder='Số diện thoại' />

                <Text style={styles.txtTitle}>Phương thức vận chuyển</Text>
                <View style={styles.viewRow}>
                    <View>
                        <Text style={styles.txtGreen}>Giao hàng Nhanh - 15.000đ</Text>
                        <Text style={styles.txtGrey}>Dự kiến giao hàng 5-7/9</Text>
                    </View>
                    <Image source={require('../../../../assets/image/asm/payment/check.png')} />
                </View>

                <View style={styles.viewRow}>
                    <View>
                        <Text style={styles.txtBlack}>Giao hàng COD - 20.000đ</Text>
                        <Text style={styles.txtGrey}>Dự kiến giao hàng 4-8/9</Text>
                    </View>
                    {/* <Image source={require('../../../../assets/image/asm/payment/check.png')}/> */}
                </View>

                <Text style={styles.txtTitle}>Hình thức thanh toán</Text>
                <View style={styles.viewRow}>
                    <Text style={styles.txtGreen}>Thẻ VISA/MASTERCARD</Text>
                    <Image source={require('../../../../assets/image/asm/payment/check.png')} />
                </View>

                <View style={styles.viewRow}>
                    <Text style={styles.txtBlack}>Thẻ ATM</Text>
                </View>
            </View>

            <View style={styles.viewFooter}>
                <View style={styles.viewRowFooter}>
                    <Text style={styles.txtGrey}>Tạm tính</Text>
                    <Text style={styles.txtBlack}>500.000đ</Text>
                </View>
                <View style={styles.viewRowFooter}>
                    <Text style={styles.txtGrey}>Phí vận chuyển</Text>
                    <Text style={styles.txtBlack}>15.000đ</Text>
                </View>
                <View style={styles.viewRowFooter}>
                    <Text style={styles.txtGrey}>Tổng cộng</Text>
                    <Text style={styles.txtGreen}>515.000đ</Text>
                </View>

                <TouchableOpacity style={styles.btnPay}>
                    <Text style={styles.txtPay}>Tiếp tục</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Payment

const styles = StyleSheet.create({
    txtPay: {
        fontSize: 16,
        color: '#fff'
    },
    btnPay: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007537',
        marginTop: 10,
        borderRadius: 8
    },
    viewRowFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4
    },
    viewFooter: {
        marginTop: 15
    },
    txtBlack: {
        color: '#000',
        fontSize: 14
    },
    txtGrey: {
        color: '#7D7B7B',
        fontSize: 14,
    },
    txtGreen: {
        color: '#007537',
        fontSize: 14,
    },
    viewTimeShip: {

    },
    viewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 5,
        borderBottomColor: '#7D7B7B',
        borderBottomWidth: 1
    },
    inputInfor: {
        color: '#ABABAB',
        paddingBottom: 4,
        borderBottomColor: '#ABABAB',
        borderBottomWidth: 1,
        marginTop: 6,
        fontSize: 14
    },
    txtTitle: {
        fontSize: 16,
        color: '#000',
        fontWeight: '500',
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginTop: 30
    },
    viewBody: {
        marginBottom: 15,
        paddingHorizontal: 24
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: '#fff'
    }
})