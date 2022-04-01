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
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M18 20V10M12 20V4M6 20v-6" />
        </Svg>
    )
}
