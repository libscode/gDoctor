import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/InboxScreenStyle'

class InboxScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerShown: false
  })

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View></View>
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

export default connect(mapStateToProps, mapDispatchToProps)(InboxScreen)
