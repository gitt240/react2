import { Image, ImageBackground, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../Redux/API/UserAPI'

const Register = ({ navigation }) => {
    const [email, setEmail] = useState('ti1@gmail.com')
    const [password, setPassword] = useState('1')
    const [name, setName] = useState('ti')
    const [phone, setPhone] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPass, setErrorPass] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorPhone, setErrorPhone] = useState('')
    const dispatch = useDispatch()
    const { registerData } = useSelector(state => state.register)

    const changeEmail = (data) => {
        setEmail(data)
        setErrorEmail('')
    }

    const changePass = (data) => {
        setPassword(data)
        setErrorPass('')
    }

    const changeName = (data) => {
        setName(data)
        setErrorName('')
    }

    const changePhone = (data) => {
        setPhone(data)
        setErrorPhone('')
    }

    const handleRegister = async () => {
        try {
            // if (!name) {
            //     setErrorName('Họ tên không được để trống')
            //     return
            // }
            // if (!email) {
            //     setErrorEmail('Vui lòng nhập email')
            //     return
            // }
            // if (!phone) {
            //     setErrorPhone('Số điện thoại không được để trống')
            // }
            // if (!pass) {
            //     setErrorPass('Vui lòng nhập mật khẩu')
            //     return
            // }
            dispatch(register({ email, password, name }))
            // console.log(result);
            // console.log(registerData);
            // if (registerData) {
            //     navigation.goBack()
            //     ToastAndroid.show('Đăng ký thành công', ToastAndroid.SHORT)
            // } else (
            //     ToastAndroid.show('Đăng ký thất bại', ToastAndroid.SHORT)
            // )

        } catch (error) {

        }
    }

    return (
        <View style={styles.container}>
            {/* <ImageBackground style={styles.imgBackground} source={require('../../assets/image/asm/login_register/background2.png')} >
                <TouchableOpacity style={styles.btnBack}>
                    <Image source={require('../../assets/image/asm/login_register/back.png')} />
                </TouchableOpacity>
            </ImageBackground> */}

            <Image style={styles.imgBackground} source={require('../../../assets/image/asm/login_register/background2.png')} />

            <View style={styles.viewCotainer}>
                <Text style={styles.txtHead}>Đăng ký</Text>
                <Text style={styles.txtSubHead}>Tạo tài khoản</Text>
                <View style={styles.viewInput}>
                    <TextInput style={[styles.input, errorName ? styles.inputError : styles.input]} placeholder='Họ tên' value={name} onChangeText={(text) => { changeName(text) }} />
                    {errorName && <Text style={styles.txtError}>{errorName}</Text>}
                </View>
                <View style={styles.viewInput}>
                    <TextInput style={[styles.input, errorEmail ? styles.inputError : styles.input]} placeholder='E-mail' value={email} onChangeText={(text) => { changeEmail(text) }} />
                    {errorEmail && <Text style={styles.txtError}>{errorEmail}</Text>}
                </View>
                <View style={styles.viewInput}>
                    <TextInput style={[styles.input, errorPhone ? styles.inputError : styles.input]} placeholder='Số điện thoại' onChangeText={(text) => { changePhone(text) }} />
                    {errorPhone && <Text style={styles.txtError}>{errorPhone}</Text>}
                </View>
                <View style={styles.viewInput}>
                    <View style={styles.viewPass}>
                        <TextInput style={[styles.input, errorPass ? styles.inputError : styles.input]} placeholder='Mật khẩu' value={password} onChangeText={(text) => { changePass(text) }} />
                        <TouchableOpacity style={styles.btnEye}>
                            <Image source={require('../../../assets/image/asm/login_register/hiden_pass.png')} />
                        </TouchableOpacity>
                    </View>
                    {errorPass && <Text style={styles.txtError}>{errorPass}</Text>}
                </View>

                <Text style={styles.txtRule}>Để đăng ký tài khoản, bạn đồng ý <Text style={styles.txtGreen}>Terms & Conditions</Text> and <Text style={styles.txtGreen}>Privacy Policy</Text></Text>

                <TouchableOpacity style={styles.btnRegister} onPress={handleRegister}>
                    <Text style={styles.txtRegister}>Đăng ký</Text>
                </TouchableOpacity>

                <View style={styles.viewOr}>
                    <Image source={require('../../../assets/image/asm/login_register/line.png')} />
                    <Text style={styles.txtOr}>Hoặc</Text>
                    <Image source={require('../../../assets/image/asm/login_register/line.png')} />
                </View>


                <View style={styles.viewSocial}>
                    <TouchableOpacity style={styles.btnGoogle}>
                        <Image source={require('../../../assets/image/asm/login_register/google.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/image/asm/login_register/facebook.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.viewRegister}>
                    <Text style={styles.txtBlack}>Tôi đã có tài khoản</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                        <Text style={styles.txtLogin}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Register

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
        marginVertical: 25
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
        borderRadius: 10
    },
    txtSubHead: {
        fontSize: 18,
        fontFamily: 'Poppins',
        color: '#000',
        textAlign: 'center',
        marginBottom: 12
    },
    txtHead: {
        fontSize: 30,
        fontFamily: 'Poppins-Bold',
        // fontWeight: 'bold',
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