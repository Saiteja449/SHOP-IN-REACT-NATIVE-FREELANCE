import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

const UpiBhim = (props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Rect width={24} height={24} rx={4} fill="#F8981D"/>
    <Path d="M12 5l-7 7 7 7 7-7-7-7z" fill="#FFFFFF"/>
    <Path d="M10 12l2 2 3-3" stroke="#F8981D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
)

export default UpiBhim
