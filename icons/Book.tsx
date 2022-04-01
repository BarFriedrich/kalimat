import * as React from "react"
import Svg, { Path, Circle } from 'react-native-svg';
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
            <Path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <Path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </Svg>
    )
}
