import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Fonts } from '../Themes'
import { Image, Text, View, Platform } from 'react-native'
import { apply, colors } from 'osmicsx'
import Icon from 'react-native-vector-icons/Ionicons'

// Import Styles
import styles from './Styles/NavigationStyles'
import customColor from '../Themes/Namespace'

// Import Screens
import HomeScreen from '../Containers/HomeScreen'
import InboxScreen from '../Containers/InboxScreen'
import AccountScreen from '../Containers/AccountScreen'

const OS = Platform.OS

export default createBottomTabNavigator({
  Home: {
    screen: createStackNavigator({
      HomeScreen
    }, {
      headerMode: 'screen',
      navigationOptions: navigation => ({
        tabBarIcon: ({ focused, tintColor }) =>
          <Icon name="md-home" size={30} color={tintColor} solid />
      })
    })
  },
  Inbox: {
    screen: createStackNavigator({
      InboxScreen
    }, {
      headerMode: 'screen',
      navigationOptions: navigation => ({
        tabBarIcon: ({ focused, tintColor }) =>
          <Icon name="ios-chatbubbles" size={30} color={tintColor} solid />
      })
    })
  },
  Account: {
    screen: createStackNavigator({
      AccountScreen
    }, {
      headerMode: 'screen',
      navigationOptions: navigation => ({
        tabBarIcon: ({ focused, tintColor }) =>
          <Icon name="md-contact" size={30} color={tintColor} solid />
      })
    })
  },
}, {
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: customColor["blue-native"],
    inactiveTintColor: colors["gray-500"],
    style: apply([
      "bg-white",
      "p-4",
      "border-t-0",
      "border=0",
      "shadow-lg"
    ]),
    labelStyle:{
      fontFamily: Fonts.type.regular,
      fontSize: 12
    },
    showLabel: false
  },
  allowFontScaling: false
})
