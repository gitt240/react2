import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Register = () => {
    return (
        <View style={styles.container}>
            {/* <ImageBackground style={styles.imgBackground} source={require('../../assets/image/asm/login_register/background2.png')} >
                <TouchableOpacity style={styles.btnBack}>
                    <Image source={require('../../assets/image/asm/login_register/back.png')} />
                </TouchableOpacity>
            </ImageBackground> */}

            <Image style={styles.imgBackground} source={require('../../assets/image/asm/login_register/background2.png')} />

            <View style={styles.viewCotainer}>
                <Text style={styles.txtHead}>Đăng ký</Text>
                <Text style={styles.txtSubHead}>Tạo tài khoản</Text>
                <TextInput style={styles.input} placeholder='Họ tên' />
                <TextInput style={styles.input} placeholder='E-mail' />
                <TextInput style={styles.input} placeholder='Số điện thoại' />
                <View style={styles.viewPass}>
                    <TextInput style={styles.input} placeholder='Mật khẩu' />
                    <TouchableOpacity style={styles.btnEye}>
                        <Image source={require('../../assets/image/asm/login_register/hiden_pass.png')} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.txtRule}>Để đăng ký tài khoản, bạn đồng ý <Text style={styles.txtGreen}>Terms & Conditions</Text> and <Text style={styles.txtGreen}>Privacy Policy</Text></Text>

                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.txtRegister}>Đăng ký</Text>
                </TouchableOpacity>

                <View style={styles.viewOr}>
                    <Image source={require('../../assets/image/asm/login_register/line.png')} />
                    <Text style={styles.txtOr}>Hoặc</Text>
                    <Image source={require('../../assets/image/asm/login_register/line.png')} />
                </View>


                <View style={styles.viewSocial}>
                    <TouchableOpacity style={styles.btnGoogle}>
                        <Image source={require('../../assets/image/asm/login_register/google.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/image/asm/login_register/facebook.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.viewRegister}>
                    <Text style={styles.txtBlack}>Tôi đã có tài khoản</Text>
                    <TouchableOpacity>
                        <Text style={styles.txtLogin}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    viewRegister: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtLogin: {
        fontSize: 12,
        fontFamily: 'Poppins',
        color: '#009245',
        marginLeft: 7
    },
    txtBlack: {
        fontSize: 12,
        fontFamily: 'Poppins',
        color: '#000',
        textAlign: 'center',
        alignItems: 'center'
    },
    btnGoogle: {
        marginRight: 30
    },
    viewSocial: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
        marginBottom: 30
    },
    txtOr: {
        fontSize: 12,
        fontFamily: 'Poppins',
        color: '#000',
        marginHorizontal: 10
    },
    viewOr: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtRegister: {
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#fff',
    },
    btnRegister: {
        backgroundColor: '#4CAF50',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginBottom: 20
    },
    txtGreen: {
        color: '#009245',
        textDecorationLine: 'underline'
    },
    txtRule: {
        fontSize: 12,
        color: '#000',
        fontFamily: 'Poppins',
        marginBottom: 20,
        marginTop: 10,
        textAlign: 'center',
        marginHorizontal: 25
    },
    viewPass: {
        flexDirection: 'row'
    },
    btnEye: {
        position: 'absolute',
        right: 10,
        top: 11
    },
    input: {
        paddingHorizontal: 14,
        height: 46,
        width: '100%',
        borderWidth: 1,
        borderColor: '#8B8B8B',
        marginBottom: 10,
        borderRadius: 10
    },
    txtSubHead: {
        fontSize: 18,
        fontFamily: 'Poppins',
        color: '#000',
        marginBottom: 12,
        textAlign: 'center'
    },
    txtHead: {
        fontSize: 30,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#000',
        marginTop: 4,
        textAlign: 'center'
    },
    viewCotainer: {
        paddingHorizontal: 30
    },

    btnBack: {
        position: 'absolute',
        left: 20,
        top: 36
    },
    imgBackground: {
        width: '100%',
        height: 220,
        objectFit: 'cover'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})