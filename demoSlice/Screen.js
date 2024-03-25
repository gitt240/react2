import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { tang, giam, addItem, removeItem, updateItem } from './redux/Reducer'
import { useDispatch, useSelector } from 'react-redux'

const Screen = () => {
    const dispatch = useDispatch()
    const appState = useSelector((state) => state.app)

    const add = () => {
        dispatch(addItem({
            id: Math.floor(Math.random() * 5),
            name: 'Iphone 11',
            price: 15000,
            quantity: 1
        }))
    }
    const totalPrice = appState.cart.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0)
    return (
        <View>
            <Text style={{ fontSize: 30 }}>SCREEN: {appState.count}</Text>
            <Button title='Tăng' onPress={() => { dispatch(tang()) }} />
            <Button title='Giảm' onPress={() => { dispatch(giam()) }} />
            <Button title='Thêm sản phẩm' onPress={add} />

            {
                appState.cart.map((item) => {
                    const tongTien =()=>{
                    }
                    return (
                        <View key={item.id}>
                            <Text style={{ fontSize: 20 }} key={item.id}>Name: {item.name} - Quantity: {item.quantity} - Price: {item.price}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Button title='Tăng sản phẩm' onPress={() => { dispatch(updateItem({ id: item.id, quantity: 1 })) }} />
                                <Button title='Giảm sản phẩm' onPress={() => { dispatch(updateItem({ id: item.id, quantity: -1 })) }} />
                                <Button title='Xoá sản phẩm' onPress={() => { dispatch(removeItem(item.id)) }} />
                            </View>
                            <Text>Tổng tiền: {totalPrice}</Text>
                        </View>
                    )
                })
            }

        </View>
    )
}

export default Screen

const styles = StyleSheet.create({})