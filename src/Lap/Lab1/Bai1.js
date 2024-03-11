import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderCustom from './HeaderCustom'

const Bai1 = () => {
    return (
        <View style={styles.container}>
            <HeaderCustom
                leftIcon={require('../../../assets/image/asm/login_register/back.png')}
                title={'Trang chủ'}
                rightIcon={require('../../../assets/image/asm/home/cart.png')}
            />

            <HeaderCustom
                leftIcon={require('../../../assets/image/asm/login_register/back.png')}
                title={'Trang chủ'}
                // rightIcon={require('../../../assets/image/asm/home/cart.png')}
            />
             <HeaderCustom
                // leftIcon={require('../../../assets/image/asm/login_register/back.png')}
                title={'Trang chủ'}
                rightIcon={require('../../../assets/image/asm/home/cart.png')}
            />
             <HeaderCustom
                // leftIcon={require('../../../assets/image/asm/login_register/back.png')}
                title={'Trang chủ'}
                // rightIcon={require('../../../assets/image/asm/home/cart.png')}
            />
             <HeaderCustom
                leftIcon={require('../../../assets/image/asm/login_register/back.png')}
                // title={'Trang chủ'}
                // rightIcon={require('../../../assets/image/asm/home/cart.png')}
            />
            <HeaderCustom
                // leftIcon={require('../../../assets/image/asm/login_register/back.png')}
                // title={'Trang chủ'}
                rightIcon={require('../../../assets/image/asm/home/cart.png')}
            />
        </View>
    )
}

export default Bai1

const styles = StyleSheet.create({
    container:{
        flex:1,
        // paddingHorizontal:20
    },
})