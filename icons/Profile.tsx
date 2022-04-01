import * as React from "react"
import Svg, {Path,Circle} from 'react-native-svg';
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
            <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <Circle cx={12} cy={7} r={4} />
        </Svg>
    )
}
