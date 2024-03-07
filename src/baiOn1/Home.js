import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'

const Home = ({ navigation }) => {
    const [category, setCategory] = useState(CATEGORY)
    const renderCategory = ({ item, index }) => {
        const { id, name } = item
        return (
            <View style={[styles.viewCategory, index == category.length - 1 && styles.itemLast]}>
                <Text style={styles.txtCategory}>{name}</Text>
            </View>
        )
    }
    //
    const [recommend, setRecommend] = useState(RECOMMEND)
    const renderRecommend = ({ item, index }) => {
        const { id, name, author, image } = item
        return (
            <TouchableOpacity onPress={() => { navigation.navigate('Details', item) }} style={[styles.btnImgRecommend, index == recommend.length - 1 && styles.itemLast]}>
                <Image source={image} />
            </TouchableOpacity>
        )
    }
    //
    const [bestSeller, setBestSeller] = useState(BESTSELLER)
    const renderBestSeller = ({ item, index }) => {
        const { id, name, author, image } = item
        return (
            <TouchableOpacity onPress={()=> navigation.navigate('Details', item)} style={[styles.btnSeller, index == bestSeller.length - 1 && styles.itemLast]}>
                <Image style={styles.imgSeller} source={image} />
                <View style={styles.viewSeller}>
                    <Text style={styles.txtNameSeller}>{name}</Text>
                    <Text style={styles.txtSubSeller}>{author}</Text>
                    <Image style={styles.imgRate} source={require('../../assets/image/baiOn1/rating.png')} />
                    <Text style={styles.txtSubSeller}>1,000+ Listeners</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.viewRow}>
                <Image source={require('../../assets/image/baiOn1/logoText.png')} />
                <Image source={require('../../assets/image/baiOn1/setting.png')} />
            </View>
            <View style={[styles.viewTxtCategory, styles.viewRow]}>
                <Text style={styles.txtTitle}>Categories</Text>
                <Text style={styles.txtSeeMore}>See more</Text>
            </View>

            <View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={category}
                    renderItem={renderCategory}
                    key={item => item.id} />
            </View>

            <View style={styles.viewRow}>
                <Text style={styles.txtTitle}>Recommended For You</Text>
                <Text style={styles.txtSeeMore}>See more</Text>
            </View>

            <View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={recommend}
                    renderItem={renderRecommend}
                    key={item => item.id}
                />
            </View>
            <View style={styles.viewRow}>
                <Text style={styles.txtTitle}>Best Seller</Text>
                <Text style={styles.txtSeeMore}>See more</Text>
            </View>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={bestSeller}
                renderItem={renderBestSeller}
                key={item => item.id}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    imgRate: {
        marginTop: 20,
        marginBottom: 8
    },
    txtSubSeller: {
        fontSize: 12,
        color: '#6A6A8B'
    },
    txtNameSeller: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 4
    },
    imgSeller: {
        width: 120,
        height: 120
    },
    viewSeller: {
        marginLeft: 16
    },
    btnSeller: {
        width: 315,
        height: 144,
        backgroundColor: '#F5F5FA',
        borderRadius: 12,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
        marginTop: 16
    },
    btnImgRecommend: {
        marginTop: 16,
        marginRight: 16,
        marginBottom: 32
    },
    itemLast: {
        marginRight: 0
    },
    txtCategory: {
        fontSize: 16,
        color: '#9292A2'
    },
    viewCategory: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#F5F5FA',
        borderRadius: 12,
        marginRight: 12,
        marginBottom: 32
    },
    txtSeeMore: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4838D1'
    },
    txtTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',

    },
    viewTxtCategory: {
        marginTop: 50,
        marginBottom: 16
    },
    viewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        paddingTop: 46
    },
})
var CATEGORY = [
    {
        'id': 1,
        'name': 'Art'
    },
    {
        'id': 2,
        'name': 'Business'
    },
    {
        'id': 3,
        'name': 'Comedy'
    },
    {
        'id': 4,
        'name': 'Drama'
    },
    {
        'id': 5,
        'name': 'Action'
    }

]
var RECOMMEND = [
    {
        id: 1,
        name: 'The Silence',
        author: 'Mark Alpert',
        image: require('../../assets/image/baiOn1/dexuat1.png')
    },
    {
        id: 2,
        name: 'The Speaker',
        author: 'Traci Chee',
        image: require('../../assets/image/baiOn1/dexuat2.png')
    },

]
var BESTSELLER = [
    {
        id: 1,
        name: 'Light Mage',
        author: 'Laurie Forest',
        image: require('../../assets/image/baiOn1/seller1.png')
    },
    {
        id: 2,
        name: 'The Black Witch',
        author: 'Laurie Forest',
        image: require('../../assets/image/baiOn1/seller2.png')
    },
    {
        id: 3,
        name: 'The Fire Queen',
        author: 'Emily R. King',
        image: require('../../assets/image/baiOn1/seller3.png')
    },
]