import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

const UpiPhonePe = (props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Rect width={24} height={24} rx={4} fill="#5F259F"/>
    <Path d="M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4 9h-3v3h-2v-3H8v-2h3V8h2v3h3v2z" fill="#FFFFFF"/>
  </Svg>
)

export default UpiPhonePe
