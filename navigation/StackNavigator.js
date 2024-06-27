import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as NavigationBar from 'expo-navigation-bar';
import HomeIconActive from '../assets/NavigationTab/HomeIconActive.svg'
import HomeIconInactive from '../assets/NavigationTab/HomeIconInactive.svg'
import ReelsIconActive from '../assets/NavigationTab/ReelsIconActive.svg'
import ReelsIconInactive from '../assets/NavigationTab/ReelsIconInactive.svg'
import MoreIconActive from '../assets/NavigationTab/MoreIconActive.svg'
import MoreIconInactive from '../assets/NavigationTab/MoreIconInactive.svg'
import GroupIconActive from '../assets/NavigationTab/GroupIconActive.svg'
import GroupsIconInactive from '../assets/NavigationTab/GroupIconInactive.svg'
import HomeScreen from '../screens/MainPages/HomeScreen'
import Wishlist from '../screens/HomePages/Wishlists/Wishlist';
import Notifications from '../screens/HomePages/Notifications/Notifications';
import Reels from '../screens/MainPages/Reels';
import MyGroups from '../screens/MainPages/MyGroups';
import More from '../screens/MainPages/More';
import OTPScreen from '../screens/HomePages/Modal/OTPScreen'
import Accountcreate from '../screens/HomePages/Modal/Accountcreate'
import RegisterScreen from '../screens/HomePages/Modal/RegisterScreen'
import FAQs from "../components/Morepage/FAQs"


const StackNavigator = () => {

  NavigationBar.setBackgroundColorAsync("white");
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomTabs = () => {
    return(
      <Tab.Navigator
       screenOptions={{keyboardHidesTabBar: true, style:{ position: 'absolute'}}}>
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: {color: "#008E97"},
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HomeIconActive name="Home" width={24} />
            ) : (
              <HomeIconInactive name="Home" width={24} />
            ),
        }} />
        <Tab.Screen name="Reels" component={Reels} 
        options={{
          tabBarLabel: "Reels",
          tabBarLabelStyle: {color: "#008E97"},
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ReelsIconActive name="Reels" width={24} />
            ) : (
              <ReelsIconInactive name="Reels" width={24} />
            ),
        }} />
        <Tab.Screen name="MyGroups" component={MyGroups} 
        options={{
          tabBarLabel: "MyGroups",
          tabBarLabelStyle: {color: "#008E97"},
          headerShown: true,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <GroupIconActive name="MyGroups" width={24}  />
            ) : (
              <GroupsIconInactive name="MyGroups" width={24} />
            ),
        }} />
        <Tab.Screen name="More" component={More} 
        options={{
          tabBarLabel: "More",
          tabBarLabelStyle: {color: "#008E97"},
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MoreIconActive name="More" width={24}  />
            ) : (
              <MoreIconInactive name="More" width={24} />
            ),
        }} />
      </Tab.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" /> 
      
        <Stack.Navigator initialRouteName='Main'>
          <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
          <Stack.Screen name="AccountCreate" component={Accountcreate} options={{ headerShown: true, headerTitle: ''  }}/> 
          <Stack.Screen name="OTPScreen" component={OTPScreen} options={{ headerShown: true, headerTitle: '' }}/>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: true}}/>
          <Stack.Screen name="Wishlist" component={Wishlist} options={{ headerShown: true }}/>
          <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: true }}/>
          <Stack.Screen name="FAQs" component={FAQs} options={{ headerShown: true }}/>
        </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})
//rnfes
