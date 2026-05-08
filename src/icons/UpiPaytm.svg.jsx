import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

const UpiPaytm = (props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Rect width={24} height={24} rx={4} fill="#00BAF2"/>
    <Path d="M12 4L4 12l8 8 8-8-8-8z" fill="#FFFFFF" opacity={0.3}/>
    <Path d="M7 12l3 3 7-7" stroke="#FFFFFF" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
)

export default UpiPaytm
