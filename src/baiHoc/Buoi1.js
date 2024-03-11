import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderCustom from './HeaderCustom'
import SectionView from './SectionView'

const Buoi1 = () => {
    const [email,setEmail] = useState('')
    const [error,setError] = useState('')
    const changeText=(data)=>{
        console.log(data);
        setEmail(data)
        setError('')
    }
    const checkEmpty=()=>{
        if(email==""){
            setError('Vui lòng nhập email')
        }
    }
    return (
        <View style={styles.container}>
            {/* <Text>Buoi1</Text> */}
            <HeaderCustom
                leftIcon={require('../../assets/image/asm/login_register/back.png')}
                title='Trang chủ'
                rightIcon={require('../../assets/image/asm/home/cart.png')}
            />
            <HeaderCustom
                leftIcon={require('../../assets/image/asm/login_register/back.png')}
                title='Trang chủ'
            />
            <HeaderCustom
                leftIcon={require('../../assets/image/asm/login_register/back.png')}
            />

            <SectionView title={'Lịch trình'} data={TRAVEL} />

            <View style={styles.viewInput}>
                <TextInput style={[!!error ? styles.inputError: styles.input]} placeholder='Enter Email' value={email} onChangeText={(data)=>changeText(data)}/>
                {!!error&&<Text style={styles.titleError}>{error}</Text>}
            </View>
            <TouchableOpacity onPress={checkEmpty}>
                <Text>Enter</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Buoi1

const styles = StyleSheet.create({
    titleError:{
        color:'red',
        fontSize:16
    },
    viewInput:{
        marginTop:30
    },
    input:{
        height:50,
        width:'100%',
        borderRadius:10,
        borderColor:'#000',
        borderWidth:1,
        paddingHorizontal:20
    },
    inputError:{
        height:50,
        width:'100%',
        borderRadius:10,
        borderColor:'red',
        borderWidth:1,
        paddingHorizontal:20
    },
    container: {
        flex: 1,
        paddingHorizontal:20
    },
})
var TRAVEL = [
    {
        id: 1,
        address: 'HCM',
        time: '9h'
    },
    {
        id: 2,
        address: 'HN',
        time: '8h'
    },
]