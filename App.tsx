

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import MainStack from './src/baiOn1/MainStack';
import Login from './src/asm/Login';
import Register from './src/asm/Register';
import Home from './src/asm/Home';
import Buoi1 from './src/baiHoc/Buoi1';
import StackNavigation from './src/asm/StackNavigation';
import Detail from './src/asm/Detail';
import Cart from './src/asm/Cart';
import ListProduct from './src/asm/ListProduct';
import Buoi2Animation from './src/baiHoc/Buoi2Animation';
import UploadImage from './src/baiHoc/UploadImage';
import ReduxToolKitDemo from './src/baiHoc/ReduxToolKitDemo';
import { Provider } from 'react-redux';
import store from './src/baiHoc/redux/Store';
import Lab2Anim6 from './src/Lap/Lab2/Lab2Anim6';
import Bai1 from './src/Lap/Lab4/Bai1';
import Bai2TrackPlayer from './src/Lap/Lab4/Bai2TrackPlayer';
import AppStore from './demoSlice/redux/Store'
import Screen from './demoSlice/Screen';
import Payment from './src/asm/Payment';
import Profile from './src/asm/Profile';

function App(): React.JSX.Element {

  return (
    // <Register />
    // <MainStack />
    // <Login/>
    // <Register/>
    // <Home/>
    // <Bai1/>
    // <Bai2/>
    // <Bai3 />
    // <Detail/>
    // <Cart/>
    // <ListProduct/>
    // <Buoi1/>
    // <StackNavigation/>
    // <Buoi2Animation/>
    // <Lab2Anim6/>
    // <Bai1/>
    // <Bai2TrackPlayer/>
    // <UploadImage/>
    // <Provider store={AppStore}>
    //   <Screen />
    // </Provider>
    // <Payment/>
    <Profile/>
  );
}

const styles = StyleSheet.create({

});

export default App;
