import React, { Component } from 'react'
import {
  StatusBar,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native'
import { connect } from 'react-redux'

import {
  IconBack,
  IconBookmark,
  IconChat
} from '../Themes/Svg'

// Styles
import styles from './Styles/DoctorDetailScreenStyle'
import { Images } from '../Themes'
import { apply } from '../Themes/Osmicsx'
import { colors } from 'osmicsx'

class DoctorDetailScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    return (
      <SafeAreaView style={apply(["flex", "bg-white"])}>
        <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />

        <ScrollView style={apply("flex")} contentContainerStyle={apply("pb-7")}>
          <ImageBackground source={Images.detailDoctor} style={styles.imgHeader}>
            <View style={styles.imgHeaderRow}>
              <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
                <IconBack width={30} height={30} />
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={1}>
                <IconBookmark width={30} height={30} />
              </TouchableOpacity>
            </View>
          </ImageBackground>

          <View style={styles.content}>
            <Text style={styles.name}>dr. Gilang Segara Bening</Text>
            <View style={styles.infoWrapper}>
              <Text style={styles.info}>Heart</Text>
              <View style={styles.infoDot} />
              <Text style={styles.info}>Persahabatan Hospital</Text>
            </View>

            <Text style={styles.contentText}>dr. Gilang is one of the best doctors in the Persahabatan Hospital. He has saved more than 1000 patients in the past 3 years. He has also received many awards from domestic and abroad as the best doctors. He is available on a private or schedule.</Text>

            <View style={styles.spec}>
              <View style={styles.specCol}>
                <Text style={styles.specTitle}>Experience</Text>
                <Text style={styles.specContent}>3 <Text style={styles.specHelper}>yr</Text></Text>
              </View>

              <View style={styles.specCol}>
                <Text style={styles.specTitle}>Patient</Text>
                <Text style={styles.specContent}>1221 <Text style={styles.specHelper}>ps</Text></Text>
              </View>

              <View style={[styles.specCol, apply("border-r-0")]}>
                <Text style={styles.specTitle}>Rating</Text>
                <Text style={styles.specContent}>5.0</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableNativeFeedback
          onPress={() => alert("hello!")}
          background={TouchableNativeFeedback.Ripple("rgba(255,255,255, 0.25)")}>
            <View style={styles.btnChat}>
              <IconChat />
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            onPress={() => alert("hello!")}
            background={TouchableNativeFeedback.Ripple("rgba(255,255,255, 0.25)")}>
            <View style={styles.btnAppointment}>
              <Text style={styles.btnFooterLabel}>Make an Appointment</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </SafeAreaView>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorDetailScreen)
