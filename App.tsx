

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import MainStack from './src/baiOn1/MainStack';
import Login from './src/asm/Main/Stacks/Login';
import Register from './src/asm/Main/Stacks/Register';
import Home from './src/asm/Main/Tabs/Home';
import Buoi1 from './src/baiHoc/Buoi1';
import StackNavigation from './src/asm/StackNavigation';
import Detail from './src/asm/Main/Stacks/Detail';
import Cart from './src/asm/Main/Stacks/Cart';
import ListProduct from './src/asm/Main/Stacks/ListProduct';
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
import Payment from './src/asm/Main/Stacks/Payment';
import Profile from './src/asm/Main/Tabs/Profile';
import EditProfile from './src/asm/Main/Stacks/EditProfile';
import History from './src/asm/Main/Stacks/History';
import AppNavigation from './src/asm/AppNavigation';

function App(): React.JSX.Element {

  return (
    <AppNavigation/>
  );
}

const styles = StyleSheet.create({

});

export default App;
