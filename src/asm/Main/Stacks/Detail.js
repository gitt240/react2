import { Image, ImageBackground, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderCustom from '../../HeaderCustom'
import AxiosInstance from '../../helpers/AxiosInstance'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../Redux/LoginSlice'
import { addToOrder } from '../../Redux/API/OrderAPI'
import { getProductDetail } from '../../Redux/API/ProductAPI'

const Detail = ({ navigation, route }) => {
  const id = route.params.id
  // console.log(id);
  const [productDetail, setProductDetail] = useState({})
  const { data } = useSelector(state => state.getProductDetail)
  const dispatch = useDispatch()
  const { loginData } = useSelector(state => state.login)

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        dispatch(getProductDetail(id))
      } catch (error) {
        console.log(error);
      }
    }
    getProductDetails()
  }, [id])

  useEffect(() => {
    try {
      setProductDetail(data)
    } catch (error) {
      console.log(error);
    }
  }, [data])



  const addToCart = async () => {
    try {
      const user = loginData._id
      const product = productDetail._id
      dispatch(addToOrder({ user, product }))
      ToastAndroid.show('Đã thêm sản phẩm vào giỏ hàng', ToastAndroid.SHORT)
      console.log('user:', user);
      // navigation.navigate('Cart')
    } catch (error) {

    }
  }
  const { _id, name, price, quantity, images } = productDetail

  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  })
  return (
    <View style={styles.container}>
      <View style={styles.viewHead}>
        <HeaderCustom
          goBack={() => { navigation.goBack() }}
          leftIcon={require('../../../../assets/image/asm/detail/back.png')}
          title={name}
          rightIcon={require('../../../../assets/image/asm/detail/cart.png')}
          onPress={() => { navigation.navigate('Cart') }}
        />
      </View>

      <View style={styles.imgBackground}>
        <TouchableOpacity style={styles.btnLeft}>
          <Image source={require('../../../../assets/image/asm/detail/left.png')} />
        </TouchableOpacity>
        {images && <Image style={styles.imgProduct} source={{ uri: images[0] }} />}
        <TouchableOpacity style={styles.btnRight}>
          <Image source={require('../../../../assets/image/asm/detail/right.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.viewInfo}>
        <View style={styles.viewPropertyContainer}>
          <View style={styles.viewProperty}>
            <Text style={styles.txtProperty}>Cây trồng</Text>
          </View>
          <View style={styles.viewProperty}>
            <Text style={styles.txtProperty}>Ưa bóng</Text>
          </View>
        </View>

        <Text style={styles.txtPrice}>{VND.format(price)}</Text>
        <Text style={styles.txtDetail}>Chi tiết sản phẩm</Text>

        <View style={styles.viewRow}>
          <Text style={styles.txtBlack}>Kích cỡ</Text>
          <Text style={styles.txtBlack}>Nhỏ</Text>
        </View>
        <View style={styles.viewRow}>
          <Text style={styles.txtBlack}>Xuất xử</Text>
          <Text style={styles.txtBlack}>Châu Phi</Text>
        </View>
        <View style={styles.viewRow}>
          <Text style={styles.txtBlack}>Tình trạng</Text>
          <Text style={styles.txtGreen}>Còn {quantity} sp</Text>
        </View>
      </View>

      <View style={styles.viewBuy}>
        <View style={styles.viewQuantityPrice}>
          <View>
            <Text style={styles.txtOpacity}>Đã chọn 1 sản phẩm</Text>
            <View style={styles.viewQuantity}>
              <TouchableOpacity>
                <Image source={require('../../../../assets/image/asm/detail/reduce.png')} />
              </TouchableOpacity>
              <Text style={styles.txtQuantity}>1</Text>
              <TouchableOpacity>
                <Image source={require('../../../../assets/image/asm/detail/increase.png')} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.txtOpacity}>Tạm tính</Text>
            <Text style={styles.txtPriceBlack}>250.000đ</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btnBuy} onPress={addToCart}>
          <Text style={styles.txtBuy}>Chọn mua</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  viewBuy: {
    paddingHorizontal: 24,
    marginTop: 15
  },
  txtBuy: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500'
  },
  btnBuy: {
    height: 50,
    backgroundColor: '#007537',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtPriceBlack: {
    fontSize: 24,
    color: '#000',
    fontWeight: '500'
  },
  txtQuantity: {
    fontSize: 16,
    color: '#000',
    marginHorizontal: 32
  },
  viewQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7
  },
  txtOpacity: {
    fontSize: 14,
    color: '#000',
    opacity: 0.6,
  },
  viewQuantityPrice: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtGreen: {
    fontSize: 14,
    color: '#007537'
  },
  txtBlack: {
    fontSize: 14,
    color: '#000'
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 5,
    borderBottomColor: '#ABABAB',
    borderBottomWidth: 1,
    marginBottom: 15
  },
  txtDetail: {
    fontSize: 16,
    color: '#000',
    marginVertical: 15,
    paddingBottom: 5,
    borderBottomColor: '#221F1F',
    borderBottomWidth: 1,
    fontWeight: '500'
  },
  txtPrice: {
    fontSize: 24,
    color: '#007537',
    fontWeight: '500'
  },
  txtProperty: {
    fontSize: 14,
    color: '#fff'
  },
  viewProperty: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#007537',
    borderRadius: 4,
    marginRight: 8
  },
  viewPropertyContainer: {
    marginVertical: 15,
    flexDirection: 'row'
  },
  viewInfo: {
    paddingHorizontal: 48,
    paddingTop: 40
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
    height: '33%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 50
  },
  viewHead: {
    paddingHorizontal: 24
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})