import React, { ReactNode, useContext } from "react";
import {
  fontWeight,
  fontSize,
  fontColor,
  lineHeight,
  letterSpacing,
  FontSizeProp,
  FontWeightProp,
  LineHeightProp,
  LetterSpacingProp,
  FontColorProp,
} from "../../../styles/typography";
import { spacerSizeEm } from "../../../styles/layout";
import { BackgroundContext } from "../../layout/BackgroundProvider";
import { overlayTextShadow } from "../../../styles/color";

export type TextTagProp = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";
export type TextProps = {
  Tag?: TextTagProp;
  size?: FontSizeProp;
  weight?: FontWeightProp;
  lHeight?: LineHeightProp;
  spacing?: LetterSpacingProp;
  color?: FontColorProp;
  bottomMargin?: boolean;
  truncateLines?: number;
  textShadow?: boolean;
  id?: string;
  textAlign?: "center";
  children: ReactNode;
};

// TODO: make sure to set lHeight="solid" on the non body text.

// TODO: add align
const Text = ({
  Tag = "p",
  size = "body",
  color = "primary",
  weight = "body",
  lHeight = "body",
  spacing = "normal",
  bottomMargin = false,
  truncateLines,
  textShadow = false,
  id,
  textAlign,
  children,
}: TextProps) => {
  const bgColor = useContext(BackgroundContext).bgColor;

  const style = {
    fontWeight: fontWeight[weight],
    fontSize: fontSize[size],
    lineHeight: lineHeight[lHeight],
    letterSpacing: letterSpacing[spacing],
    color: fontColor[bgColor][color],
    marginBottom: bottomMargin ? spacerSizeEm.sm : undefined, // TODO: make it scale to font-ize or numeric
    height: truncateLines
      ? `${lineHeight[lHeight] * truncateLines}em`
      : undefined,
    textShadow: textShadow ? overlayTextShadow : undefined,
    textAlign,
  };

  return (
    <Tag id={id} style={style}>
      {children}
    </Tag>
  );
};

export default Text;
