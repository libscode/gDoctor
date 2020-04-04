import { scaleWidth } from 'osmicsx'
import { Platform } from 'react-native'

export default {
  "blue-native": "#639AFF",
  "purple-native": "#B79CFF",
  "orange-native": "#FFA188",
  "yellow-native": "#FFB547",
  "green-native": "#1AD37A",
  "cyan-native": "#05D1ED",
  "pink-native": "#FF71C6",
  "red-native": "#FF7070",

  // size
  "text-xxs": { fontSize: 10 },
  "text-7xl": { fontSize: 34 },

  "font-regular": { fontFamily: "Lato-Regular" },
  "font-bold": { fontFamily: "Lato-Bold" },
  "font-black": { fontFamily: "Lato-Black" },

  "text-blue-native": { color: "#639AFF" },
  "bg-blue-native": { backgroundColor: "#639AFF" },

  "text-purple-native": { color: "#B79CFF" },
  "bg-purple-native": { backgroundColor: "#B79CFF" },

  "text-orange-native": { color: "#FFA188" },
  "bg-orange-native": { backgroundColor: "#FFA188" },

  "text-yellow-native": { color: "#FFB547" },
  "bg-yellow-native": { backgroundColor: "#FFB547" },
  "bg-yellow-light": { backgroundColor: "#FFE848" },

  "text-green-native": { color: "#1AD37A" },
  "bg-green-native": { backgroundColor: "#1AD37A" },
  "bg-soft-green": { backgroundColor: "#CCF5E1" },
  "text-dark-green": { color: "#00CC6A" },

  "text-cyan-native": { color: "#05D1ED" },
  "bg-cyan-native": { backgroundColor: "#05D1ED" },

  "text-pink-native": { color: "#FF71C6" },
  "bg-pink-native": { backgroundColor: "#FF71C6" },

  "text-red-native": { color: "#FF7070" },
  "bg-red-native": { backgroundColor: "#FF7070" },
  "text-dark-red": { color: "#CC4900" },
  "bg-soft-red": { backgroundColor: "#F7E4D9" },

  "bg-muted": { backgroundColor: "#CACCCF" },
  "text-muted": { color: "#CACCCF" },

  "bg-background": { backgroundColor: "#F6F6F6" },
  "text-gray-dark": { color: "#A0A4A8" },
  "text-dark": { color: "#25282B" },

  "bg-soft-white": { backgroundColor: "rgba(255,255,255, 0.25)" },

  // Width and Height
  "w-56": { width: 56 },
  "h-56": { height: 56 },
  "w-28": { width: 28 },
  "h-28": { height: 28 },
  "w-88": { width: 88 },
  "h-80": { height: 80 },
  "h-24": { height: 24 },
  "min-w-38": { width: scaleWidth(38) },

  // top right bottom left
  "-top-3": { top: scaleWidth(-3) },
  "-left-3": { left: scaleWidth(Platform.OS == "android" ? 5 : 2) },

  // etc
  "small-dot": { width: 3, height: 3 }
}
