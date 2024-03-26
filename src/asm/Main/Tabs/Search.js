import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderCustom from '../../HeaderCustom'

const Search = () => {
    return (
        <View style={styles.container}>
            <HeaderCustom title={'Tìm kiếm'} />
            <View style={styles.viewSearch}>
                <TextInput style={styles.input} placeholder='Tìm kiếm' />
                <TouchableOpacity style={styles.btnSearch}>
                    <Image source={require('../../../../assets/image/asm/tabNavigation/search.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
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
        marginHorizontal: 24,
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: '#fff',
    },
})