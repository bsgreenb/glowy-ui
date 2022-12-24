import { css } from "styled-components";
import { BackgroundColorProp } from "../../../styles/color";
import {
  fontColor,
  FontColorProp,
  lightFontColor,
} from "../../../styles/typography";
import { TextProps } from "../../content/Text";

export type UnderlineColorProp = keyof Pick<
  typeof lightFontColor,
  "primary" | "interactive"
>;

const getUnderlineColor = (
  color?: FontColorProp,
  hoverUnderlineColor?: UnderlineColorProp
): UnderlineColorProp => {
  if (hoverUnderlineColor) {
    return hoverUnderlineColor;
  } else {
    if (color && color in ["primary", "interactive"]) {
      return color as UnderlineColorProp;
    } else {
      // Default
      return "interactive";
    }
  }
};

export type HoverLinkCssProps = {
  bgColor: BackgroundColorProp;
  color?: TextProps["color"];
  hoverUnderlineColor?: UnderlineColorProp;
};

export const hoverLinkCss = css<HoverLinkCssProps>`
  color: ${({ color, bgColor }) =>
    bgColor && color ? fontColor[bgColor][color] : "inherit"};
  font-size: inherit;
  font-weight: inherit;

  &:hover {
    text-decoration: underline;
    text-decoration-line: underline;
    text-decoration-color: ${({ color, bgColor, hoverUnderlineColor }) =>
      fontColor[bgColor][getUnderlineColor(color, hoverUnderlineColor)]};
  }
`;
