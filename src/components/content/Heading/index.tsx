import React from "react";
import { FontSizeProp } from "../../../styles/typography";
import Text, { TextProps, TextTagProp } from "../../content/Text";

// TODO: tired of this hLevel BS, let's make it contextual.

// Require size prop compared to Text, which defaults body.
export type HeadingProps = Pick<
  TextProps,
  | "id"
  | "weight"
  | "color"
  | "truncateLines"
  | "bottomMargin"
  | "textShadow"
  | "children"
  | "textAlign"
> & {
  size: FontSizeProp;
  level: number;
};

const H = ({
  level,
  children,
  weight = "medium",
  ...textProps
}: HeadingProps) => {
  const tag = level < 7 ? `h${level}` : "p";

  return (
    <Text
      Tag={tag as TextTagProp}
      lHeight="heading"
      spacing="heading"
      weight={weight}
      {...textProps}
    >
      {children}
    </Text>
  );
};

export default H;
