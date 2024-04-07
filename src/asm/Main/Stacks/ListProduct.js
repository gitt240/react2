import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderCustom from '../../HeaderCustom'
import SectionProduct from '../../SectionProduct'
import { useSelector, useDispatch } from 'react-redux'


const ListProduct = ({ navigation }) => {
    const [category, setCategory] = useState(CATEGORY)
    const [selectedCategory, setSelectedCategory] = useState(1)
    const [plant, setPlant] = useState(PLANT)

    const renderCategory = ({ item }) => {
        const { id, name } = item
        return (
            <TouchableOpacity style={id == selectedCategory ? styles.btnCateFocus : styles.btnCategory}>
                <Text style={id == selectedCategory ? styles.txtCateFocus : styles.txtCate}>{name}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <HeaderCustom
                leftIcon={require('../../../../assets/image/asm/together/back.png')}
                title={'Cây Trồng'}
                rightIcon={require('../../../../assets/image/asm/together/cart.png')}
                goBack={() => { navigation.goBack() }}
            />

            <View style={styles.viewCate}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={category}
                    renderItem={renderCategory}
                    key={item => item.id}
                />
            </View>

            <FlatList
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={plant}
                renderItem={({ item }) => (
                    <SectionProduct
                        item={item}
                    />
                )}
                key={item => item.id}
            />
        </View>
    )
}

export default ListProduct

const styles = StyleSheet.create({
    viewCate: {
        marginVertical: 15
    },
    txtCateFocus: {
        color: '#fff',
        fontSize: 14
    },
    btnCateFocus: {
        backgroundColor: '#007537',
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginRight: 8
    },
    txtCate: {
        fontSize: 14,
        color: '#7D7B7B'
    },
    btnCategory: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginRight: 8
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: '#fff'
    }
})

var CATEGORY = [
    {
        id: 1,
        name: 'Tất cả'
    },
    {
        id: 2,
        name: 'Hàng mới về'
    },
    {
        id: 3,
        name: 'Ưa sáng'
    },
    {
        id: 4,
        name: 'Ưa bóng'
    },
]

var PLANT = [
    {
        id: 1,
        name: 'Spider Plant',
        image: require('../../../../assets/image/asm/home/p1.png'),
        property: 'Ưa bóng'
    },
    {
        id: 2,
        name: 'Song of India',
        image: require('../../../../assets/image/asm/home/p2.png'),
        property: 'Ưa sáng'
    },
    {
        id: 3,
        name: 'Pink Anthurium',
        image: require('../../../../assets/image/asm/home/p3.png'),
        property: 'Ưa bóng'
    },
    {
        id: 4,
        name: 'Black Love Anthurium',
        image: require('../../../../assets/image/asm/home/p4.png'),
        property: 'Ưa bóng'
    },
    {
        id: 5,
        name: 'Grey Star Calarthea  ',
        image: require('../../../../assets/image/asm/home/p5.png'),
        property: 'Ưa sáng'
    },
    {
        id: 6,
        name: 'Banana Plant  ',
        image: require('../../../../assets/image/asm/home/p6.png'),
        property: 'Ưa sáng'
    },
]