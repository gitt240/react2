import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Tabs/Home'
import Search from './Tabs/Search'
import Notify from './Tabs/Notify'
import Profile from './Tabs/Profile'
import EditProfile from './Stacks/EditProfile'
import Payment from './Stacks/Payment'
import History from './Stacks/History'
import Detail from './Stacks/Detail'
import Cart from './Stacks/Cart'
import ListProduct from './Stacks/ListProduct'
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const MainStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} /> */}
            <Stack.Screen name='MainTap' component={MainTabNavigation} />
            <Stack.Screen name='Detail' component={Detail} />
            <Stack.Screen name='Cart' component={Cart} />
            <Stack.Screen name='ListProduct' component={ListProduct} />
            <Stack.Screen name='EditProfile' component={EditProfile} />
            <Stack.Screen name='Payment' component={Payment} />
            <Stack.Screen name='History' component={History} />
        </Stack.Navigator>
    )
}

const MainTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabBar }}>
            <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.viewTabItem}>
                            <Image source={require('../../../assets/image/asm/tabNavigation/home.png')} />
                            <Image style={[styles.imgCircle, { display: focused ? 'flex' : 'none' }]} source={require('../../../assets/image/asm/tabNavigation/circle.png')} />
                        </View>
                    )
                }} />
            <Tab.Screen name='Search' component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.viewTabItem}>
                            <Image source={require('../../../assets/image/asm/tabNavigation/search.png')} />
                            <Image style={[styles.imgCircle, { display: focused ? 'flex' : 'none' }]} source={require('../../../assets/image/asm/tabNavigation/circle.png')} />
                        </View>
                    )
                }} />
            <Tab.Screen name='Notify' component={Notify}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.viewTabItem}>
                            <Image source={require('../../../assets/image/asm/tabNavigation/bell.png')} />
                            <Image style={[styles.imgCircle, { display: focused ? 'flex' : 'none' }]} source={require('../../../assets/image/asm/tabNavigation/circle.png')} />
                        </View>
                    )
                }} />
            <Tab.Screen name='Profile' component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.viewTabItem}>
                            <Image source={require('../../../assets/image/asm/tabNavigation/user.png')} />
                            <Image style={[styles.imgCircle, { display: focused ? 'flex' : 'none' }]} source={require('../../../assets/image/asm/tabNavigation/circle.png')} />
                        </View>
                    )
                }} />
        </Tab.Navigator>
    )
}

export default MainStackNavigation

const styles = StyleSheet.create({
    imgCircle: {
        marginTop: 2,
    },
    viewTabItem: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabBar: {
        height: 60,
        backgroundColor: '#fff'
    },
})