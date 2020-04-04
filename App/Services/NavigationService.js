import { StackActions, NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  /** OPTIONAL you can use this navigation object */
  const navigation = _navigator.currentNavProp
  navigation.navigate({ routeName, params })
  // _navigator.props.dispatch(
  //   NavigationActions.navigate({
  //     routeName,
  //     params,
  //   })
  // );
}

function goBack() {
  const navigation = _navigator.currentNavProp
  navigation.goBack()
}

function replace(routeName, params) {
  const navigation = _navigator.currentNavProp
  _navigator.props.dispatch(
    StackActions.replace({
      routeName,
      params
    })
  )
}

function dispatch(action) {
  const navigation = _navigator.currentNavProp
  navigation.dispatch(action)
}

function findActiveScreen(state) {
  const {routes, index} = state
  if (routes && routes[index]) {
    return findActiveScreen(routes[index])
  } else {
    return state
  }
}

function getActiveScreenAndParams() {
  const navigation = _navigator.currentNavProp
  const {state} = navigation
  return findActiveScreen(state, null)
}

// add other navigation functions that you need and export them

export default {
  navigate,
  replace,
  goBack,
  dispatch,
  setTopLevelNavigator,
  getActiveScreenAndParams,
};
