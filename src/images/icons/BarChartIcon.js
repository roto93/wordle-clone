import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BarChartIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5 9.2h3V19H5V9.2ZM10.6 5h2.8v14h-2.8V5Zm5.6 8H19v6h-2.8v-6Z"
      fill={props.color}
    />
  </Svg>
)

export default BarChartIcon

BarChartIcon.defaultProps = {
  color: '#fff'
}