export const color = {
  green: "#11a817",
  greenVariant: "#68ec6d", // Logo color
  red: "#e34234",
  redVariant: "#ff5445",
  orange: "#d47300",
  orangeVariant: "#ffb35a",
  white: "#ffffff",
  // GrayNN based on HSL Lightness percent
  gray94: "#f0f0f0",
  gray85: "#d6d7d9",
  gray80: "#c4cdd5",
  gray74: "#BBBCBE",
  gray55: "#838b95",
  gray50: "#708090",
  gray44: "#6a6f75",
  gray23: "#343a41", // rgb(52, 58, 65)
  black: "#000000",
};

export type ColorProp = keyof typeof color;

export const backgroundColor = {
  white: color.white,
  light: color.gray94,
  dark: color.gray23,
};
export type BackgroundColorProp = keyof typeof backgroundColor;

export const brandColor = {
  primary: color.green,
  variant: color.greenVariant,
};

export const grayScale = [
  color.white,
  color.gray94,
  color.gray85,
  color.gray80,
  color.gray55,
  color.gray50,
  color.gray44,
  color.gray23,
  color.black,
];

export type BlackFadeProp = 15 | 30;

export const overlayTextShadow = `0 0 6px ${backgroundColor.dark}`;
