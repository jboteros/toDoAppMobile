// @flow

import React, { type ElementConfig } from "react";
import { Text as RNText, StyleSheet, Platform, PixelRatio } from "react-native";
import { sizes, colors } from "@/styles";

const NORMALIZE_FONTS = true;
const SCALE = sizes.deviceWidth / 414;

type Props = ElementConfig<typeof RNText>;

const styles = StyleSheet.create({
  text: {
    color: colors.dark,
  },
  headline1: {
    fontSize: normalize(44),
    fontWeight: "bold",
  },
  headline2: {
    fontWeight: "600",
    fontSize: normalize(32),
    letterSpacing: 0.25,
  },
  headline3: {
    fontWeight: "bold",
    fontSize: normalize(26),
  },
  headline4: {
    fontWeight: "600",
    fontSize: normalize(20),
    letterSpacing: 0.15,
  },
  subtitle: {
    fontSize: normalize(16),
    letterSpacing: 0.15,
    lineHeight: normalize(18),
  },
});

export function Text({ style, ...props }: Props): React$Element<any> {
  return <RNText style={[styles.text, style]} {...props} />;
}

export const withDefaultStyle =
  (defaultStyle: any) =>
  (Component: any) =>
  ({ style, ...props }: Props) =>
    <Component style={[defaultStyle, style]} {...props} />;

Text.H1 = withDefaultStyle(styles.headline1)(Text);
Text.H2 = withDefaultStyle(styles.headline2)(Text);
Text.H3 = withDefaultStyle(styles.headline3)(Text);
Text.H4 = withDefaultStyle(styles.headline4)(Text);

Text.Subtitle = withDefaultStyle(styles.subtitle)(Text);

export function normalize(size: number) {
  if (NORMALIZE_FONTS) {
    const newSize = size * SCALE;
    if (Platform.OS === "ios") {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
  }
}
