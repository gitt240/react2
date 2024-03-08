import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View>
            <ImageBackground source={require('../../assets/image/asm/login_register/background.png')} >
                <TouchableOpacity>
                    <Image source={require('../../assets/image/asm/login_register/back.png')} />
                </TouchableOpacity>
            </ImageBackground>
            <View>

            <Text>Chào mừng bạn</Text>
            <Text>Đăng nhập tài khoản</Text>
            <TextInput placeholder='Nhập email hoặc số điện thoại' />
            <View>
                <TextInput placeholder='Mật khẩu' />
                <TouchableOpacity>
                    <Image source={require('../../assets/image/asm/login_register/hiden_pass.png')} />
                </TouchableOpacity>
            </View>

            <View>
                <View>
                    <Image source={require('../../assets/image/asm/login_register/not_remember.png')} />
                    <Text>Nhớ tài khoản</Text>
                </View>
                <Text>Forgot Password ? </Text>
            </View>

            <TouchableOpacity>
                <Text>Đăng nhập</Text>
            </TouchableOpacity>

            <View>
                <Image source={require('../../assets/image/asm/login_register/line.png')} />
                <Text>Hoặc</Text>
                <Image source={require('../../assets/image/asm/login_register/line.png')} />
            </View>


            <View>
                <TouchableOpacity>
                    <Image source={require('../../assets/image/asm/login_register/google.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/image/asm/login_register/facebook.png')} />
                </TouchableOpacity>
            </View>

            <Text
            >Bạn không có tài khoản
                <TouchableOpacity>
                    <Text>Tạo tài khoán</Text>
                </TouchableOpacity>
            </Text>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    btnLogin:{
        backgroundColor:'#4CAF50',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        height:50
    },
    txtFoget:{
        fontSize:11,
        color:'#009245'
    },
    txtRemem:{
        fontSize:11,
        color:'#949090',
        marginLeft:5
    },
    viewRemember:{
        flexDirection:'row',
        alignItems:'center'
    },
    viewRememberForget:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:25
    },
    input:{
        paddingHorizontal:14,
        height:46,
        width:'100%',
        borderWidth:1,
        borderColor:'#8B8B8B'
    },
    txtSubHead:{
        fontSize:18,
        color:'#000',
        marginBottom:20
    },
    txtHead:{
        fontSize:30,
        fontWeight:'bold',
        color:'#000',
        marginTop:4
    },
    btnBack:{
        position:'absolute',
        left:20,
        top:36
    },
    viewCotainer:{
        paddingHorizontal:30
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})