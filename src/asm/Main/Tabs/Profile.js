import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderCustom from '../../HeaderCustom'
import { useDispatch } from 'react-redux'
import { logout } from '../../Redux/LoginSlice'

const Profile = ({ navigation }) => {
    const dispatch = useDispatch()
    const handlelogout = () => {
        dispatch(logout())
    }
    return (
        <View style={styles.container}>
            <HeaderCustom title={'Profile'} />
            <View style={styles.viewProfile}>
                <Image style={styles.imgAvatar} source={require('../../../../assets/image/asm/profile/avatar.png')} />
                <View style={styles.viewInfor}>
                    <Text style={styles.txtBlack}>Trần Minh Trí</Text>
                    <Text style={styles.txtEmail}>tranminhtri@gmail.com</Text>
                </View>
            </View>

            <Text style={styles.txtTitle}>Chung</Text>
            <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('EditProfile') }}>
                <Text style={styles.txtBlack}>Chỉnh sửa thông tin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtBlack}>Cẩm nang trồng cây</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('History') }}>
                <Text style={styles.txtBlack}>Lịch sử giao dịch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('QAA') }}>
                <Text style={styles.txtBlack}> Q & A</Text>
            </TouchableOpacity>

            <Text style={styles.txtTitle}>Bảo mật và Điều khoản</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtBlack}>Điều khoản và điều kiện</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtBlack}>Chính sách quyền riêng tư</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={handlelogout}>
                <Text style={styles.txtRed}>Đăng xuất</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    txtRed: {
        color: '#FF0000',
        fontSize: 16,
        fontWeight: '500'
    },
    btn: {
        marginTop: 15
    },
    txtTitle: {
        fontSize: 16,
        color: '#7F7F7F',
        paddingBottom: 5,
        borderBottomColor: '#ABABAB',
        borderBottomWidth: 1,
        marginTop: 30
    },
    txtEmail: {
        fontSize: 14,
        color: '#7F7F7F'
    },
    txtBlack: {
        fontSize: 16,
        color: '#000',
        fontWeight: '500'
    },
    imgAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    viewInfor: {
        marginLeft: 26
    },
    viewProfile: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15
    },
    container: {
        flex: 1,
        paddingHorizontal: 48,
        backgroundColor: '#fff'
    },
})