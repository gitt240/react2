import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { increment,decrement,incrementByAmount } from './redux/Reducer'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from './redux/Reducer2'

const ReduxToolKitDemo = () => {
    const dispatch = useDispatch()
    const counter = useSelector((state)=> state.counter)
    const number = useSelector((state)=> state.number)
  return (
    <View>
      <Text style={{fontSize:30}}>SCREEN: {counter.count}</Text>
      <Button title='Tăng' onPress={()=>{dispatch(increment())}}/>
      <Button title='Giảm' onPress={()=>{dispatch(decrement())}}/>
      <Button title='Tăng 5' onPress={()=>{dispatch(incrementByAmount(5))}}/>

      {
        number.numbers.map((item,index)=>{
            return <Text style={{fontSize:30}} key={index}>{item}</Text>
          })
      }
      <Button title='Thêm' onPress={()=>{dispatch(addItem(222))}}/>
      <Button title='Xoá' onPress={()=>{dispatch(removeItem())}}/>
    </View>
  )
}

export default ReduxToolKitDemo

const styles = StyleSheet.create({})