import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imgBackground} source={require('../../assets/image/asm/login_register/background.png')} >
                <TouchableOpacity style={styles.btnBack}>
                    <Image source={require('../../assets/image/asm/login_register/back.png')} />
                </TouchableOpacity>
            </ImageBackground>

            <View style={styles.viewCotainer}>
                <Text style={styles.txtHead}>Chào mừng bạn</Text>
                <Text style={styles.txtSubHead}>Đăng nhập tài khoản</Text>
                <TextInput style={styles.input} placeholder='Nhập email hoặc số điện thoại' />
                <View style={styles.viewPass}>
                    <TextInput style={styles.input} placeholder='Mật khẩu' />
                    <TouchableOpacity style={styles.btnEye}>
                        <Image source={require('../../assets/image/asm/login_register/hiden_pass.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.viewRememberForget}>
                    <View style={styles.viewRemember}>
                        <Image source={require('../../assets/image/asm/login_register/not_remember.png')} />
                        <Text style={styles.txtRemem}>Nhớ tài khoản</Text>
                    </View>
                    <Text style={styles.txtFoget}>Forgot Password ? </Text>
                </View>

                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.txtLogin}>Đăng nhập</Text>
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
                    <Text style={styles.txtBlack}>Bạn không có tài khoản</Text>
                    <TouchableOpacity style={styles.btnRegister}>
                        <Text style={styles.txtRegister}>Tạo tài khoán</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    viewRegister: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtRegister: {
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
    txtLogin: {
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: '#fff',
    },
    btnLogin: {
        backgroundColor: '#4CAF50',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginBottom: 20
    },
    txtFoget: {
        fontSize: 11,
        fontFamily: 'Poppins',
        color: '#009245',
        fontWeight: 'bold'
    },
    txtRemem: {
        fontSize: 11,
        fontFamily: 'Poppins',
        color: '#949090',
        marginLeft: 5,
        fontWeight: 'bold'
    },
    viewRemember: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewRememberForget: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
        marginTop: 3
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
        marginBottom: 20,
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
        height: 350,
        objectFit: 'cover'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})