import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HeaderCustom = ({leftIcon,title,rightIcon}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        {leftIcon&&<Image source={leftIcon}/>}
      </TouchableOpacity>
      <Text>{title}</Text>
      <TouchableOpacity>
        {rightIcon&&<Image source={rightIcon}/>}
      </TouchableOpacity>
    </View>
  )
}

export default HeaderCustom

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
})