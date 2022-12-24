import React, { ReactNode } from "react";
import Text, { TextProps } from "../../content/Text";
import Grid, { GridProps } from "../../layout/Grid";

export type NavProps = {
  children: ReactNode;
  textSize?: TextProps["size"];
  textWeight?: TextProps["weight"];
  textColor?: TextProps["color"];
} & Pick<GridProps, "direction" | "justify" | "gap" | "alignItems">;

const Nav = ({
  children,
  justify,
  alignItems,
  direction,
  gap,
  textSize,
  textWeight = "medium",
  textColor,
}: NavProps) => {
  return (
    <Text
      Tag="span"
      size={textSize}
      weight={textWeight}
      color={textColor}
      lHeight="solid"
    >
      <Grid
        direction={direction}
        wrap="nowrap"
        justify={justify}
        alignItems={alignItems}
        gap={gap}
      >
        {children}
      </Grid>
    </Text>
  );
};

export default Nav;
