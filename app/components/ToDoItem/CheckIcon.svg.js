// @flow
import React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "@/styles";

export function CheckIcon({ color }: { color?: string }): React$Element<any> {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-check">
      <Path d="M20 6L9 17l-5-5" />
    </Svg>
  );
}

CheckIcon.defaultProps = { color: colors.light };
