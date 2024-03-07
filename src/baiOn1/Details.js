import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Details = ({ navigation, route }) => {
    const item = route.params
    const { id, name, author, image } = item
    return (
        <View style={styles.container}>
            <View style={styles.viewHead}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Image source={require('../../assets/image/baiOn1/back.png')} />
                </TouchableOpacity>
                <Text style={styles.txtHead}>{name}</Text>
                <Image source={require('../../assets/image/baiOn1/more.png')} />
            </View>
            <View style={styles.viewImgProduct}>
                <Image style={styles.imgProduct} source={image} />
            </View>

            <Text style={styles.txtName}>{name}</Text>
            <Text style={styles.txtAuthor}>{author}</Text>
            <Image style={styles.imgRate} source={require('../../assets/image/baiOn1/rate.png')} />

            <View style={styles.viewCategoryContainer}>
                <View style={styles.viewCategory}>
                    <Text style={styles.txtCategory}>Fantasy</Text>
                </View>
                <View style={styles.viewCategory}>
                    <Text style={styles.txtCategory}>Drama</Text>
                </View>
                <View style={styles.viewCategory}>
                    <Text style={styles.txtCategory}>Fiction</Text>
                </View>
            </View>

            <View style={styles.viewRow}>
                <TouchableOpacity style={styles.btnPlay}>
                    <Image source={require('../../assets/image/baiOn1/play.png')} />
                    <Text style={styles.txtPlay}>Play Audio</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnRead}>
                    <Image source={require('../../assets/image/baiOn1/read.png')} />
                    <Text style={styles.txtRead}>Read Book</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.txtDes}>Summary</Text>
            <Text style={styles.txtSubDes}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation  sunt nostrud amet.
                Mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt mollit.
            </Text>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    txtSubDes: {
        fontSize: 14,
        color: '#6A6A8B',
        lineHeight: 20
    },
    txtDes: {
        color: '#9292A2',
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 12
    },
    txtRead: {
        marginLeft: 12,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4838D1'
    },
    btnRead: {
        backgroundColor: '#fff',
        width: 148,
        height: 53,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#4838D1'
    },
    txtPlay: {
        marginLeft: 12,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff'
    },
    btnPlay: {
        backgroundColor: '#4838D1',
        width: 148,
        height: 53,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    viewRow: {
        marginVertical: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtCategory: {
        fontSize: 12,
        color: '#6A6A8B',
        fontWeight: 'bold'
    },
    viewCategory: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#6A6A8B',
        marginRight: 8
    },
    viewCategoryContainer: {
        marginTop: 10,
        flexDirection: 'row'
    },
    imgRate: {
        width: 179,
        height: 28
    },
    txtAuthor: {
        fontSize: 16,
        color: '#9292A2',
        marginBottom: 16,
    },
    txtName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 24,
        marginBottom: 4
    },
    imgProduct: {
        width: 260,
        height: 260
    },
    viewImgProduct: {
        alignItems: 'center'
    },
    txtHead: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#9292A2',
        // marginBottom: 20
    },
    viewHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 34
    },
    container: {
        flex: 1,
        paddingHorizontal: 32,
        backgroundColor: '#fff'
    }
})