// @flow

const primary = "#3e80ff";
const softGray = "#d0d2d4";
const fade = "#3b4948";
const accentText = "#8d9ac3";
const light = "#fff";
const dark = "#242424";
const backgroundApp = "#f3f6ff";

const alphaLight = (opacity: number): string => {
  return `rgba(255,255,255,${opacity})`;
};
const alphaDark = (opacity: number): string => {
  return `rgba(0,0,0,${opacity})`;
};
const alphaPrimary = (opacity: number): string => {
  return `rgba(50,169,236,${opacity})`;
};

export const colors = {
  primary,
  softGray,
  fade,
  accentText,
  light,
  dark,
  backgroundApp,
  alphaLight,
  alphaDark,
  alphaPrimary,
};
