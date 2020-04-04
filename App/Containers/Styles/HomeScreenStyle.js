import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'
import { scaleWidth } from 'osmicsx'
import { connect } from '../../Themes/Osmicsx'

export default connect({
  container: [
    "flex",
    "bg-white"
  ],
  greetings: [
    "font-regular",
    "text-dark",
    "text-7xl",
    "mt-7"
  ],
  searchWrapper: [
    "full",
    "row",
    "items-center",
    "justify-between",
    "bg-background",
    "rounded-lg",
    "p-3",
    "px-3",
    "mt-5",
    "mb-1"
  ],
  searchLabel: [
    "font-regular",
    "text-gray-dark",
    "text-sm"
  ],
  categoryCard: [
    "mb-5",
    "min-w-38",
    { marginLeft: scaleWidth(5) }
  ],
  categoryRectangle: [
    "w-56",
    "h-56",
    "items-center",
    "justify-center",
    "rounded-lg"
  ],
  categoryWrapper: [
    "items-center",
    "justify-center"
  ],
  categoryCircle: [
    "bg-soft-white",
    "absolute",
    "rounded-full",
    "w-28",
    "h-28",
    "-top-3",
    "-left-3",
    "z-20"
  ],
  categoryLabel: [
    "font-bold",
    "text-xs",
    "text-dark",
    "mt-3"
  ]
})
