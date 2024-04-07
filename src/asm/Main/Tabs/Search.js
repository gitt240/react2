import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderCustom from '../../HeaderCustom'
import { useSelector, useDispatch } from 'react-redux'
import { searchProduct } from '../../Redux/API/ProductAPI'
import VND from '../../format/FormatCurrency'


const Search = ({navigation}) => {
    const [product, setProduct] = useState([])
    const [keyword, setKeyword] = useState('')
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.searchProduct)

    useEffect(() => {
        const searchProducts = () => {
            try {
                dispatch(searchProduct(keyword))

            } catch (error) {
                console.log(error);
            }
        }
        searchProducts()
    }, [keyword])

    useEffect(() => {
        try {
            setProduct(data)
        } catch (error) {
            console.log();
        }
    }, [data])

    const search = () => {
        setProduct(data)
    }

    const renderItem = ({ item }) => {
        const { _id, name, price, quantity, images } = item
        return (
            <TouchableOpacity style={styles.viewProduct} onPress={()=>{navigation.navigate('Detail', {id:_id})}}>
                <View style={styles.viewImgProduct}>
                    <Image style={styles.imgProduct} source={{ uri: images[0] }} />
                </View>

                <View>
                    <Text style={styles.txtName}>{name} <Text style={styles.txtName}>|</Text> <Text style={styles.txtProperty}>Ưa bóng</Text></Text>
                    <Text style={styles.txtPrice}>{VND.format(price)}</Text>
                    <Text>Còn {quantity} sản phẩm</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <HeaderCustom title={'Tìm kiếm'} />
            <View style={styles.viewBody}>
                <View style={styles.viewSearch}>
                    <TextInput style={styles.input} placeholder='Tìm kiếm' value={keyword} onChangeText={(text) => setKeyword(text)} />
                    <TouchableOpacity style={styles.btnSearch} onPress={search}>
                        <Image source={require('../../../../assets/image/asm/tabNavigation/search.png')} />
                    </TouchableOpacity>
                </View>

                {/* <View style={styles.viewHistory}>
                    <Text style={styles.txtTitle}>Tìm kiếm gần đây</Text>
                    <View style={styles.viewRow}>
                        <View style={styles.viewName}>
                            <Image source={require('../../../../assets/image/asm/search/clock.png')} />
                            <Text style={styles.txtName}>Spider Plant</Text>
                        </View>
                        <Image source={require('../../../../assets/image/asm/together/close.png')} />
                    </View>

                    <View style={styles.viewRow}>
                        <View style={styles.viewName}>
                            <Image source={require('../../../../assets/image/asm/search/clock.png')} />
                            <Text style={styles.txtName}>Song of India</Text>
                        </View>
                        <Image source={require('../../../../assets/image/asm/together/close.png')} />
                    </View>
                </View> */}

                <FlatList
                showsVerticalScrollIndicator={false}
                    data={product}
                    renderItem={renderItem}
                    keyExtractor={item => item._id.toString()}
                />
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    txtName: {
        fontSize: 14,
        color: '#000',
    },
    txtPrice: {
        fontSize: 16,
        color: '#007537',
        fontWeight: '500',
        marginVertical: 2
    },
    txtProperty: {
        fontSize: 14,
        color: '#7D7B7B',
    },
    txtName: {
        fontSize: 16,
        color: '#000',
        fontWeight: '500',
    },
    imgProduct: {
        width: 77,
        height: 77
    },
    viewImgProduct: {
        backgroundColor: '#F6F6F6',
        marginRight: 25,
        borderRadius: 8
    },
    viewProduct: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        marginVertical: 20
    },
    viewName: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
    },

    txtTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
    viewHistory: {
        marginTop: 40
    },
    btnSearch: {
        position: 'absolute',
        right: 0,
        bottom: 10
    },
    input: {
        width: '100%',
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#221F1F'
    },
    viewSearch: {
        flexDirection: 'row'
    },
    viewBody: {
        marginHorizontal: 24,
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: '#fff',
    },
})