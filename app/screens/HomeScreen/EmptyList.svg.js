// @flow
import React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "@/styles";

export function EmptyList({ color }: { color?: string }): React$Element<any> {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={84}
      height={84}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-inbox">
      <Path d="M22 12h-6l-2 3h-4l-2-3H2" />
      <Path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
    </Svg>
  );
}

EmptyList.defaultProps = { color: colors.primary };
