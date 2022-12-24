import React, { ReactNode, useContext } from "react";
import { breakPointPx, BreakPointProp } from "../../../styles/layout";
import { GridGapContext } from "./GridGapProvider";
import styled from "styled-components";

type ColumnsProp = number | "auto" | boolean;

const NUM_COLUMNS = 12;

// Future: This is repeated, can share it.
// Remove types from T that are not assignable to U
// Filter<"a" | "b" | "c" | "d", "a" | "c" | "f">; // "a" | "c"
type Filter<T, U> = T extends U ? T : never;

type GridBreakPoint = Filter<BreakPointProp, "xs" | "sm" | "md" | "lg" | "xl">;

type BreakPointColumnsProps = {
  [key in GridBreakPoint]?: ColumnsProp;
};

type BreakPointStyles = {
  [key in GridBreakPoint]: {
    display: string;
    flex: string;
    maxWidth: string;
  };
};

const getBreakPointStyles = (
  breakPointColumns: Required<BreakPointColumnsProps>
): BreakPointStyles => {
  return Object.fromEntries(
    Object.entries(breakPointColumns).map(([bp, columns]) => {
      let bpStyles: { display: string; flex: string; maxWidth: string };
      if (columns === false) {
        bpStyles = { display: "", flex: "", maxWidth: "" };
      } else if (columns === true) {
        bpStyles = {
          display: "block",
          flex: "1 1 0",
          maxWidth: "100%",
        };
      } else if (columns === "auto") {
        bpStyles = {
          display: "block",
          flex: "0 1 auto",
          maxWidth: "none",
        };
      } else if (columns === 0) {
        bpStyles = { display: "none", flex: "", maxWidth: "" };
      } else {
        const width = `${Math.round((columns / NUM_COLUMNS) * 10e7) / 10e5}%`;
        bpStyles = {
          display: "block",
          flex: `1 1 ${width}`,
          maxWidth: width,
        };
      }
      return [bp as GridBreakPoint, bpStyles];
    })
  ) as BreakPointStyles;
};

type GridItemProps = {
  children: ReactNode;
  onEnter?: () => void;
  onLeave?: () => void;
} & BreakPointColumnsProps &
  React.HTMLAttributes<HTMLDivElement>;

type GridItemDivProps = {
  breakPointStyles: BreakPointStyles;
  gapEm: number;
} & React.HTMLAttributes<HTMLDivElement>;

const GridItemDiv = styled.div(
  ({ breakPointStyles, gapEm }: GridItemDivProps) => `
  box-sizing: border-box;
  padding: ${gapEm}em;
  @media (min-width: ${breakPointPx.xs}) {
    display: ${breakPointStyles.xs?.display};
    flex: ${breakPointStyles.xs?.flex};
    max-width: ${breakPointStyles.xs?.maxWidth};
  }
  @media (min-width: ${breakPointPx.sm}) {
    display: ${breakPointStyles.sm?.display};
    flex: ${breakPointStyles.sm?.flex};
    max-width: ${breakPointStyles.sm?.maxWidth};
  }
  @media (min-width: ${breakPointPx.md}) {
    display: ${breakPointStyles.md?.display};
    flex: ${breakPointStyles.md?.flex};
    max-width: ${breakPointStyles.md?.maxWidth};
  }
  @media (min-width: ${breakPointPx.lg}) {
    display: ${breakPointStyles.lg?.display};
    flex: ${breakPointStyles.lg?.flex};
    max-width: ${breakPointStyles.lg?.maxWidth};
  }
  @media (min-width: ${breakPointPx.xl}) {
    display: ${breakPointStyles.xl?.display};
    flex: ${breakPointStyles.xl?.flex};
    max-width: ${breakPointStyles.xl?.maxWidth};
  }
`
);

const GridItem = ({
  children,
  onEnter,
  onLeave,
  xs = false,
  sm = false,
  md = false,
  lg = false,
  xl = false,
  ...rest
}: GridItemProps) => {
  const breakPointStyles = getBreakPointStyles({ xs, sm, md, lg, xl });

  const gapEm = useContext(GridGapContext).gapEm;

  return (
    <GridItemDiv
      className="grid-item"
      breakPointStyles={breakPointStyles}
      gapEm={gapEm}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      {...rest}
    >
      {children}
    </GridItemDiv>
  );
};

export default GridItem;
