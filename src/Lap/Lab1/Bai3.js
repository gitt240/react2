import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Bai3 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.viewInput}>
                <Text style={styles.txtTitle}>Title</Text>
                <TextInput style={styles.input1} placeholder='Enter' />
            </View>
            {/* <View style={styles.viewInput}>
                <TextInput style={[!!error ? styles.inputError : styles.input4]} placeholder='Enter Email' value={email} onChangeText={(data) => changeText(data)} />
                {!!error && <Text style={styles.titleError}>{error}</Text>}
            </View> */}
        </View>
    )
}

export default Bai3

const styles = StyleSheet.create({
    input1:{
        height:50,
        width:'100%',
        borderRadius:10,
        borderColor:'#c5c4c6',
        borderWidth:2,
        paddingHorizontal:20
    },
    txtTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'#000',
        marginBottom:10
    },
    titleError:{
        color:'red',
        fontSize:16
    },
    viewInput:{
        marginTop:20
    },
    input4:{
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