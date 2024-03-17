import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPass, setErrorPass] = useState('')

    const changeEmail = (data) => {
        setEmail(data)
        setErrorEmail('')
    }

    const changePass = (data) => {
        setPass(data)
        setErrorPass('')
    }

    const checkEmpty = () => {
        if (!email && !pass) {
            setErrorEmail('Vui lòng nhập email')
            setErrorPass('Vui lòng nhập mật khẩu')
            return
        }
        if (!email) {
            setErrorEmail('Vui lòng nhập email')
            return
        }
        if (!pass) {
            setErrorPass('Vui lòng nhập mật khẩu')
            return
        }
        navigation.navigate('Home')
    }
    return (
        <View style={styles.container}>
            {/* <ImageBackground style={styles.imgBackground} source={require('../../assets/image/asm/login_register/background.png')} >
                
            </ImageBackground> */}
            <View>
                <Image style={styles.imgBackground} source={require('../../assets/image/asm/login_register/background.png')} />
                <TouchableOpacity style={styles.btnBack}>
                    <Image source={require('../../assets/image/asm/login_register/back.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.viewCotainer}>
                <Text style={styles.txtHead}>Chào mừng bạn</Text>
                <Text style={styles.txtSubHead}>Đăng nhập tài khoản</Text>
                <View style={styles.viewInput}>
                    <TextInput style={[styles.input, errorEmail ? styles.inputError : styles.input]} placeholder='Nhập email hoặc số điện thoại' onChangeText={(text) => { changeEmail(text) }} />
                    {errorEmail && <Text style={styles.txtError}>{errorEmail}</Text>}
                </View>
                <View style={styles.viewInput}>
                    <View style={styles.viewPass}>
                        <TextInput style={[styles.input, errorPass ? styles.inputError : styles.input]} placeholder='Mật khẩu' onChangeText={(text) => { changePass(text) }} />
                        <TouchableOpacity style={styles.btnEye}>
                            <Image source={require('../../assets/image/asm/login_register/hiden_pass.png')} />
                        </TouchableOpacity>
                    </View>
                    {errorPass && <Text style={styles.txtError}>{errorPass}</Text>}
                </View>

                <View style={styles.viewRememberForget}>
                    <View style={styles.viewRemember}>
                        <Image source={require('../../assets/image/asm/login_register/not_remember.png')} />
                        <Text style={styles.txtRemem}>Nhớ tài khoản</Text>
                    </View>
                    <Text style={styles.txtFoget}>Quên mật khẩu ?</Text>
                </View>

                <TouchableOpacity style={styles.btnLogin} onPress={checkEmpty}>
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
                    <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                        <Text style={styles.txtRegister}>Tạo tài khoán</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    viewInput: {
        marginBottom: 10
    },
    inputError: {
        borderColor: '#CE0000'
    },
    txtError: {
        fontSize: 12,
        color: '#CE0000',
        fontWeight: 'bold',
        marginTop: 4,
    },
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
        marginVertical: 30
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
        fontSize: 12,
        fontFamily: 'Poppins',
        color: '#009245',
        fontWeight: 'bold'
    },
    txtRemem: {
        fontSize: 12,
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
        marginBottom: 20,
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
        fontFamily: 'Poppins-Bold',
        // fontWeight: 'bold',
        color: '#000',
        marginTop: 10,
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
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})