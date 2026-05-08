import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

const UpiAmazon = (props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Rect width={24} height={24} rx={4} fill="#FF9900"/>
    <Path d="M12 4a8 8 0 100 16 8 8 0 000-16zm-1 11.5l-3-3 1.4-1.4 1.6 1.6 4-4L16.4 8l-5.4 5.5z" fill="#FFFFFF"/>
  </Svg>
)

export default UpiAmazon
