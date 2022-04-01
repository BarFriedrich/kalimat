import * as React from "react"
import Svg, {Path} from 'react-native-svg';
import { Colors, ICON_SIZE, IconProps } from "./Constants"
export default ({ active }: IconProps) => {
  return (
    <Svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      fill="none"
      stroke={active ? Colors.primary : Colors.border}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <Path d="M9 22V12h6v10" />
    </Svg>
  )
}
