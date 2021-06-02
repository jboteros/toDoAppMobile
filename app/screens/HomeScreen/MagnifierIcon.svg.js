// @flow
import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { colors } from "@/styles";

export function MagnifierIcon({
  color,
}: {
  color?: string,
}): React$Element<any> {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-search">
      <Circle cx={11} cy={11} r={8} />
      <Path d="M21 21l-4.35-4.35" />
    </Svg>
  );
}

MagnifierIcon.defaultProps = { color: colors.dark };
