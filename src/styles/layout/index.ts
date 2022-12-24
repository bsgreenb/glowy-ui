import { formatEm, objectMap, formatPx } from "../../utils";

/* Breakpoints */
// Based on http://devfacts.com/media-queries-breakpoints-2020/
export const breakPointBasePx = {
  xs: 0,
  sm: 576, // small, landscape
  md: 768, // large / landscape phones
  lg: 992, // desktop
  xl: 1200, // large desktop
  xxl: 1440, // big as we'd ever want
};
export type BreakPointProp = keyof typeof breakPointBasePx;

export const breakPointPx = objectMap(breakPointBasePx, formatPx);

/* Spacing */
export const spacerSizeBaseEm = {
  xs: 0.313, // 5px
  sm: 0.625, // 10px
  md: 1.25, // 20px
  lg: 2.5, // 40px
  xl: 5.0, // 80px
};
export type SpacerSizeProp = keyof typeof spacerSizeBaseEm | 0;

export const spacerSizeEm = objectMap(spacerSizeBaseEm, formatEm);

// QSTN: sidebar here?
export const zIndices = {
  navigation: 5,
  modal: 10,
};

export const borderRadius = "2px";

// Height / Width
export const aspectRatioPaddingTop = {
  square: `${(1 / 1) * 100}%`,
  wide: `${(9 / 16) * 100}%`,
};

export type AspectRatioProp = keyof typeof aspectRatioPaddingTop;
