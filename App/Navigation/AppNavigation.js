import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import BottomNavigation from './BottomNavigation'

import styles from './Styles/NavigationStyles'

import SplashScreen from '../Containers/SplashScreen'

// home stack
import HomeScreen from '../Containers/HomeScreen'
import DoctorDetailScreen from '../Containers/DoctorDetailScreen'

// inbox stack
import InboxScreen from '../Containers/InboxScreen'

// account stack
import AccountScreen from '../Containers/AccountScreen'

// Manifest of possible screens
const AppStack = createStackNavigator({
  MainScreen: {
    screen: BottomNavigation,
    navigationOptions: ({ navigation }) => ({
      headerShown: false
    })
  },

  // Home Stack
  HomeScreen: { screen: HomeScreen },
  DoctorDetail: { screen: DoctorDetailScreen },

  // Inbox Stack
  InboxScreen: { screen: InboxScreen },

  // Account Stack
  AccountScreen: { screen: AccountScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

const MainNav = createSwitchNavigator({
  SplashScreen,
  App: AppStack
}, {
  initialRouteName: 'SplashScreen'
})

export default createAppContainer(MainNav)
