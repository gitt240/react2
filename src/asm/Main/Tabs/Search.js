import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderCustom from '../../HeaderCustom'

const Search = () => {
    return (
        <View style={styles.container}>
            <HeaderCustom title={'Tìm kiếm'} />
            <View style={styles.viewBody}>
                <View style={styles.viewSearch}>
                    <TextInput style={styles.input} placeholder='Tìm kiếm' />
                    <TouchableOpacity style={styles.btnSearch}>
                        <Image source={require('../../../../assets/image/asm/tabNavigation/search.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.viewHistory}>
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
                </View>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    txtName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        marginLeft: 10
    },
    viewName: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
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