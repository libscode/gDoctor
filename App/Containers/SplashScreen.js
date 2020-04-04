import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/SplashScreenStyle'
import { apply } from '../Themes/Osmicsx'

class SplashScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("App")
    }, 1500)
  }

  render () {
    return (
      <View style={apply(["flex", "items-center", "justify-center"])}>
        <Text>This is Splash Sreen!</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
