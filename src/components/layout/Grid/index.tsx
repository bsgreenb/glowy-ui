import React, { ReactNode } from "react";
import styled from "styled-components";
import {
  SpacerSizeProp,
  spacerSizeBaseEm,
  spacerSizeEm,
} from "../../../styles/layout";
import {
  DirectionProp,
  JustifyProp,
  AlignContentProp,
  AlignItemsProp,
  WrapProp,
} from "./flex";
import GridGapProvider from "./GridGapProvider";

// Inspired by Material UI Grid component https://material-ui.com/components/grid/
// Though the Grid component has a direction property that allows values of row, row-reverse, column, and column-reverse, there are some features that are not supported within column and column-reverse containers. The properties which define the number of grids the component will use for a given breakpoint (xs, sm, md, lg, and xl) are focused on controlling width and do not have similar effects on height within column and column-reverse containers. If used within column or column-reverse containers, these properties may have undesirable effects on the width of the Grid elements.
// -- https://material-ui.com/components/grid/
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Grid/Grid.js

type GridDivProps = GridProps & {
  gapEm: number;
};

const GridDiv = styled.div(
  ({
    direction,
    wrap,
    justify,
    alignItems,
    alignContent,
    bottomMargin,
    gap,
    gapEm,
    fullHeight,
  }: GridDivProps) => `
  display: flex;
  box-sizing: border-box;
  width: 100%;

  flex-flow: ${direction} ${wrap};
  justify-content: ${justify};
  align-items: ${alignItems};
  align-content: ${alignContent};

  height: ${fullHeight ? "100%" : "auto"};

  margin: ${gapEm * -1}em ${gapEm * -1}em
    ${bottomMargin ? spacerSizeBaseEm.sm : gapEm * -1}em ${gapEm * -1}em;

  width: calc(100% + ${gap ? spacerSizeEm[gap] : 0});
`
);

export type GridProps = {
  children: ReactNode;
  direction?: DirectionProp;
  justify?: JustifyProp;
  alignContent?: AlignContentProp;
  alignItems?: AlignItemsProp;
  wrap?: WrapProp;
  gap?: SpacerSizeProp | 0;
  bottomMargin?: boolean;
  fullHeight?: boolean;
};

const Grid = ({
  children,
  direction = "row",
  justify = "flex-start",
  alignItems = "stretch",
  alignContent = "stretch",
  wrap = "wrap",
  gap = "sm",
  bottomMargin = false,
  fullHeight = false,
}: GridProps) => {
  const gapEm = gap === 0 ? 0 : spacerSizeBaseEm[gap] / 2;

  return (
    <GridGapProvider gapEm={gapEm}>
      <GridDiv
        direction={direction}
        wrap={wrap}
        justify={justify}
        alignItems={alignItems}
        alignContent={alignContent}
        bottomMargin={bottomMargin}
        gap={gap}
        gapEm={gapEm}
        fullHeight={fullHeight}
      >
        {children}
      </GridDiv>
    </GridGapProvider>
  );
};

export default Grid;
