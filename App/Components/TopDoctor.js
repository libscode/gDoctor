import React from 'react'
import { FlatList, TouchableOpacity, View, Image, Text } from 'react-native'
import NavigationService from '../Services/NavigationService'

import styles from './Styles/TopDoctorStyle'
import { apply } from '../Themes/Osmicsx'
import {
  IconStar5
} from '../Themes/Svg'

const topDoctor = props => {
  const { ...restProps } = props

  return (
    <FlatList
      {...restProps}
      ListHeaderComponent={() => (
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Top Doctors</Text>

          <Text style={styles.headerMore}>View all</Text>
        </View>
      )}
      renderItem={({ item, index }) => (
        <TouchableOpacity
        activeOpacity={0.9}
        style={styles.card}
        onPress={() => NavigationService.navigate("DoctorDetail", {data:item})}>
          <Image source={item.thumb} style={styles.thumb} />

          <View style={apply("flex")}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.infoWrapper}>
              <Text style={styles.info}>{item.role}</Text>
              <View style={styles.infoDot} />
              <Text style={styles.info}>{item.hospital}</Text>
            </View>

            <View style={styles.cardFooter}>
              <View style={styles.reviewWrapper}>
                <IconStar5 width={80} height={16} />
                <Text style={styles.totalReview}>({item.totalReview})</Text>
              </View>

              <View style={[
                styles.status,
                apply(item.open ? "bg-soft-green" : "bg-soft-red")
              ]}>
                <Text style={[
                  styles.statusLabel,
                  apply(item.open ? "text-dark-green" : "text-dark-red")
                ]}>{item.open ? "Open" : "Close"}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default topDoctor
