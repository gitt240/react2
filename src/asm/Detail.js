import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderCustom from './HeaderCustom'

const Detail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewHead}>
        <HeaderCustom
          leftIcon={require('../../assets/image/asm/detail/back.png')}
          title={'Spider Plant'}
          rightIcon={require('../../assets/image/asm/detail/cart.png')}
        />
      </View>

      <ImageBackground style={styles.imgBackground}>
        <TouchableOpacity style={styles.btnLeft}>
          <Image source={require('../../assets/image/asm/detail/left.png')} />
        </TouchableOpacity>
        <Image style={styles.imgProduct} source={require('../../assets/image/asm/home/p1.png')} />
        <TouchableOpacity style={styles.btnRight}>
          <Image source={require('../../assets/image/asm/detail/right.png')} />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.viewBody}>
        <View style={styles.viewPropertyContainer}>
          <View style={styles.viewProperty}>
            <Text style={styles.txtProperty}>Cây trồng</Text>
          </View>
          <View style={styles.viewProperty}>
            <Text style={styles.txtProperty}>Ưa bóng</Text>
          </View>
        </View>

        <Text>250.000đ</Text>
        <Text>Chi tiết sản phẩm</Text>
      </View>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  txtProperty:{
    fontSize:14,
    color:'#fff'
  },
  viewProperty: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#009245',
    borderRadius:4,
    marginRight:8
  },
  viewPropertyContainer: {
    marginTop: 15,
    flexDirection: 'row'
  },
  viewBody: {
    paddingHorizontal: 24
  },
  btnLeft: {
    position: 'absolute',
    left: 24
  },
  btnRight: {
    position: 'absolute',
    right: 24,
    // top:'50%'
  },
  imgProduct: {
    height: '100%',
    width: '100%'
  },
  imgBackground: {
    backgroundColor: '#F6F6F6',
    height: 270,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24
  },
  viewHead: {
    paddingHorizontal: 24
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})