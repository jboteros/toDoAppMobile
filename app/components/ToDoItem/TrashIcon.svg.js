// @flow
import React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "@/styles";

export function TrashIcon({ color }: { color?: string }): React$Element<any> {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-trash">
      <Path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
    </Svg>
  );
}

TrashIcon.defaultProps = { color: colors.primary };
