import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Register = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image style={styles.img} source={require('../../assets/image/baiOn1/logo.png')} />
            </View>
            <Text style={styles.txtHead}>Register</Text>
            <TextInput style={styles.input} placeholder='Email' />
            <TextInput style={styles.input} placeholder='Password' />
            <TextInput style={styles.input} placeholder='Date of Birth' />
            <Text style={styles.txtSub}>By signing up, you agree to our <Text style={styles.txtColor}>Terms, Data Policy</Text> and
                <Text style={styles.txtColor}> Cookies Policy</Text>.</Text>
            <TouchableOpacity style={styles.btnRegis} onPress={() => {navigation.navigate('Home') }}>
                <Text style={styles.txtBtnRegis}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCancel}>
                <Text style={styles.txtBtnCancel}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    txtBtnCancel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4838D1'
    },
    btnCancel: {
        height: 56,
        borderRadius: 8,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#4838D1',
        marginTop: 16
    },
    txtBtnRegis: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    btnRegis: {
        height: 56,
        backgroundColor: '#4838D1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 16
    },
    txtColor: {
        color: '#F77A55',
        fontWeight: 'bold'
    },
    txtSub: {
        fontSize: 15,
        color: '#9292A2',
        marginTop: 16,
        lineHeight: 24,
        marginHorizontal: 11
    },
    input: {
        height: 53,
        backgroundColor: '#F5F5FA',
        paddingHorizontal: 24,
        marginTop: 16,
        borderRadius: 8
    },
    txtHead: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 24
    },
    img: {
        width: 120,
        height: 120,
    },
    viewImg: {
        alignItems: 'center',
        // marginTop: 60
    },
    container: {
        flex: 1,
        paddingHorizontal: 40,
        backgroundColor: '#fff',
        justifyContent: 'center'
    }
})