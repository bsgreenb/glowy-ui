import { objectMap } from "../../utils";
import { color } from "../color";

// TODO: consider basing design tokens around variants?  see what people do.

const BASE_FONT_SIZE_PX = 16;
const EM_PRECISION = 3;
export const formatEm = (em: string | number) =>
  `${Number(em).toFixed(EM_PRECISION)}em`;
export const formatPx = (px: string | number) => `${Number(px).toFixed(0)}px`;
export const pxToEm = (px: number) =>
  (px / BASE_FONT_SIZE_PX).toFixed(EM_PRECISION);
export const emToPx = (em: number) => (em * BASE_FONT_SIZE_PX).toFixed(0);

// Context or backgrounds _might_ be the smart way to implement background rule
export const fontFamily = {
  primary: "CerebriSans",
  stack: "CerebriSans, Helvetica, Arial, sans-serif",
};

export const fontWeight = {
  light: 300,
  body: 400,
  medium: 500,
  bold: 700,
};

export type FontWeightProp = keyof typeof fontWeight;

// TODO: cleanup sizing repeat.
export const fontSizeBaseEm = {
  h1: 2.5, // 40px
  h2: 1.875, // 30px
  h3: 1.375, // 22px
  h4: 1.125, // 18px
  h5: 1.0, // 16px
  body: 1.0, // 16px
  small: 0.875, // 14px -- Fixed size, never shrinks like others in em.
};

export type FontSizeProp = keyof typeof fontSizeBaseEm;

const formatFontSize = (em: string | number) => {
  const fontSizeEm = Number(em);
  if (fontSizeEm == fontSizeBaseEm.small) {
    return `${emToPx(fontSizeEm)}px`;
  } else {
    return formatEm(fontSizeEm);
  }
};

export const fontSize = objectMap(fontSizeBaseEm, formatFontSize);

export const lightFontColor = {
  primary: color.gray23,
  secondary: color.gray44,
  interactive: color.green,
  disabled: color.gray50,
  success: color.green,
  error: color.red,
  warning: color.orange,
};

export const darkFontColor = {
  primary: color.white,
  secondary: color.gray85,
  interactive: color.greenVariant,
  disabled: color.gray80,
  success: color.greenVariant,
  error: color.redVariant,
  warning: color.orangeVariant,
};

// Font Variant links backgrounds to text colors
export const fontColor = {
  light: lightFontColor,
  dark: darkFontColor,
  white: lightFontColor,
};

export type FontColorProp = keyof typeof lightFontColor;

export const formatColorName = (name: string) => name[0] + name.slice(1);

// TODO: add demos for Line Heights and Letter Spacing.

export const lineHeight = {
  solid: 1,
  dense: 1.2,
  heading: 1.2,
  default: 1.4,
  body: 1.4,
  loose: 1.6, // No use for this one yet, just wanna scale it.
};

export type LineHeightProp = keyof typeof lineHeight;

export const letterSpacing = {
  normal: "normal",
  tight: "-0.015em",
  heading: "-0.015em",
};

export type LetterSpacingProp = keyof typeof letterSpacing;
