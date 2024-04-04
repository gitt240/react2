import { View, Text } from 'react-native'
import React from 'react'


const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
})

export default VND