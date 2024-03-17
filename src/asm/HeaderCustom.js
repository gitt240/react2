import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HeaderCustom = ({ leftIcon, title, rightIcon, goBack, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={goBack}>
        {leftIcon && <Image style={styles.img} source={leftIcon} />}
      </TouchableOpacity>
      <Text style={styles.txtTitle}>{title}</Text>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        {rightIcon && <Image style={styles.img} source={rightIcon} />}
      </TouchableOpacity>
    </View>
  )
}

export default HeaderCustom

const styles = StyleSheet.create({
  txtTitle: {
    fontSize: 16,
    color: '#000',
    textTransform: 'uppercase',
    fontWeight:'500'
  },
  img: {
    width: 24
  },
  btn: {
    width: 24,
  },
  container: {
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
})