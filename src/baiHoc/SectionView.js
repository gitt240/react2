import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SectionView = ({title, data}) => {
    const renderItem=(data)=>{
        return data.map((item,index)=>(
            <View key={index}>
                <Text>Địa điểm</Text>
                <Text>{item.address}</Text>
                <Text>Thời gian</Text>
                <Text>{item.time}</Text>

            </View>
        ))
    }
  return (
    <View>
      <Text>{title}</Text>
    {renderItem(data)}
    </View>
  )
}

export default SectionView

const styles = StyleSheet.create({})