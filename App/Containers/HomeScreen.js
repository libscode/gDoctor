import React, { Component } from 'react'
import { StatusBar, SafeAreaView, ScrollView, View, Text, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import {
  IconSearch,
  IconBandage,
  IconCare,
  IconClinic,
  IconHeart,
  IconMedicine,
  IconStethoscope,
  IconSyringe,
  IconTeeth,
} from '../Themes/Svg'

// Styles
import styles from './Styles/HomeScreenStyle'
import { Images } from '../Themes'
import { colors } from 'osmicsx'
import { apply } from '../Themes/Osmicsx'

// Import Components
import TopDoctor from '../Components/TopDoctor'

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let newArr = data

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    newArr.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow = numberOfElementsLastRow + 1;
  }

  return newArr;
};

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerShown: false
  })

  constructor (props) {
    super(props)

    this.state = {
      categories: [{
        name: "Consultation",
        color: "bg-blue-native",
        icon: <IconStethoscope width={24} height={24} />
      }, {
        name: "Dental",
        color: "bg-purple-native",
        icon: <IconTeeth width={24} height={24} />
      }, {
        name: "Heart",
        color: "bg-orange-native",
        icon: <IconHeart width={24} height={24} />
      }, {
        name: "Hospitals",
        color: "bg-yellow-native",
        icon: <IconClinic width={24} height={24} />
      }, {
        name: "Medicines",
        color: "bg-green-native",
        icon: <IconMedicine width={24} height={24} />
      }, {
        name: "Physician",
        color: "bg-cyan-native",
        icon: <IconCare width={24} height={24} />
      }, {
        name: "Skin",
        color: "bg-pink-native",
        icon: <IconBandage width={24} height={24} />
      }, {
        name: "Surgeon",
        color: "bg-red-native",
        icon: <IconSyringe width={24} height={24} />
      }],

      topDoctors: [{
        name: "dr. Gilang Segara Bening",
        thumb: Images.thumbDoctor1,
        role: "Heart",
        hospital: "Persahabatan Hospital",
        open: true,
        star: 5,
        totalReview: 1221
      }, {
        name: "dr. Shabil Chan",
        thumb: Images.thumbDoctor2,
        role: "Dental",
        hospital: "Columbia Asia Hospital",
        open: true,
        star: 5,
        totalReview: 964
      }, {
        name: "dr. Mustakim",
        thumb: Images.thumbDoctor3,
        role: "Eye",
        hospital: "Columbia Asia Hospital",
        open: false,
        star: 5,
        totalReview: 762
      }]
    }
  }

  render () {
    const { categories, topDoctors } = this.state

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={colors["white"]} barStyle="dark-content" />

        <ScrollView>
          <View style={apply("p-5")}>
            <Text style={styles.greetings}>Find <Text style={apply("text-gray-dark")}>your doctor</Text></Text>

            <View style={styles.searchWrapper}>
              <Text style={styles.searchLabel}>Search doctor, medicines etc</Text>

              <IconSearch width={24} height={24} />
            </View>
          </View>

          <FlatList
            data={formatData(categories, 4)}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            numColumns={4}
            contentContainerStyle={apply(["pt-5", "items-center"])}
            renderItem={({ item, index }) => {
              if (item.empty) {
                return <View style={styles.categoryCard} />
              } else {
                return (
                  <TouchableOpacity
                  activeOpacity={0.9}
                  style={[styles.categoryCard, index % 4 === 0 && apply("ml-0")]}>
                    <View style={styles.categoryCircle} />

                    <View style={styles.categoryWrapper}>
                      <View style={[styles.categoryRectangle, apply(item.color)]}>
                        {item.icon}
                      </View>

                      <Text style={styles.categoryLabel}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }
            }}
          />

          <View style={apply("p-5")}>
            <TopDoctor
              data={topDoctors}
              extraData={this.state}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
