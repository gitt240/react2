import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderCustom from '../../HeaderCustom'

const QAA = ({navigation}) => {
    return (
        <View style={styles.container}>
            <HeaderCustom
                leftIcon={require('../../../../assets/image/asm/together/back.png')}
                title={'Q & A'}
                goBack={()=>{navigation.goBack()}}
            />
            <View  style={styles.viewBody}>
            <Pressable  style={styles.btnItem}>
                <Text  style={styles.txtBlack}>Tôi trộn các chất dinh dưỡng theo thứ tự nào?</Text>
                <Image source={require('../../../../assets/image/asm/qaa/down.png')}/>
            </Pressable>
            <Pressable  style={styles.btnItem}>
                <Text  style={styles.txtBlack}>Tôi có thể giữ dung dịch dinh dưỡng hỗn hợp trong bao lâu?</Text>
                <Image source={require('../../../../assets/image/asm/qaa/down.png')}/>
            </Pressable>
            <Pressable  style={styles.btnItem}>
                <Text  style={styles.txtBlack}>Khi nào tôi thêm bộ điều chỉnh pH?</Text>
                <Image source={require('../../../../assets/image/asm/qaa/down.png')}/>
            </Pressable>
            <Pressable  style={styles.btnItem}>
                <Text  style={styles.txtBlack}>Các chất điều chỉnh tăng trưởng có được sử dụng trong các sản phẩm Planta không?</Text>
                <Image source={require('../../../../assets/image/asm/qaa/down.png')}/>
            </Pressable>
            <Pressable  style={styles.btnItem}>
                <Text  style={styles.txtBlack}>Các sản phẩm Planta có phải là hữu cơ không?</Text>
                <Image source={require('../../../../assets/image/asm/qaa/down.png')}/>
            </Pressable>
            </View>
        </View>
    )
}

export default QAA

const styles = StyleSheet.create({
    txtBlack:{
        width:250,
        fontSize:16,
        fontWeight:'500',
        color:'#000',
        lineHeight:22
    },
    btnItem:{
        marginVertical:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    viewBody:{
        paddingHorizontal:24,
    },
    container:{
        flex:1,
        paddingHorizontal:24,
        backgroundColor:'#fff'
    }
})