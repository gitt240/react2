import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderCustom from '../../HeaderCustom'

const EditProfile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <HeaderCustom leftIcon={require('../../../../assets/image/asm/together/back.png')} title={"Chỉnh sửa thông tin"} goBack={()=>navigation.goBack()} />
                <View style={styles.viewBody}>
                    <Image style={styles.imgAvatar} source={require('../../../../assets/image/asm/together/avatarBig.png')} />
                    <Text style={styles.txtHead}>Thông tin sẽ được lưu cho lần mua kế tiếp. Bấm vào thông tin chi tiết để chỉnh sửa.</Text>
                    <TextInput style={styles.input} placeholder='Họ và tên' />
                    <TextInput style={styles.input} placeholder='Email' />
                    <TextInput style={styles.input} placeholder='Địa chỉ' />
                    <TextInput style={styles.input} placeholder='Số điện thoại' />
                </View>
            </View>
            <TouchableOpacity style={styles.btnSave}>
                <Text style={styles.txtSave}>LƯU THÔNG TIN</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    txtSave: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff'
    },
    btnSave: {
        // position: 'absolute',
        // bottom: 30,
        // left: 24,
        // right: 24,
        backgroundColor: '#007537',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 30,
    },
    input: {
        paddingBottom: 5,
        borderBottomColor: '#ABABAB',
        borderBottomWidth: 1,
        marginTop: 15,
        width: '100%'
    },
    txtHead: {
        fontSize: 14,
        color: '#000',
        marginVertical: 40
    },
    imgAvatar: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    viewBody: {
        paddingHorizontal: 24,
        marginTop: 24,
        alignItems: 'center',
        // marginBottom: 'auto'
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    },
})