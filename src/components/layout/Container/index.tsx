import React, { ReactNode } from "react";
import {
  breakPointPx,
  spacerSizeEm,
  BreakPointProp,
} from "../../../styles/layout";
import { BackgroundColorProp } from "../../../styles/color";
import BackgroundProvider from "../BackgroundProvider";
import styled from "styled-components";

// Inspired by Material UI https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Container/Container.js
// FUTURE: potentially Tag prop for semantics lata https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Container/Container.js

type ContainerDivProps = {
  maxWidthPx: string;
  noGutters: boolean;
};

const ContainerDiv = styled.div<ContainerDivProps>`
  display: block;
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
  max-width: ${({ maxWidthPx }) => maxWidthPx};
  padding: ${({ noGutters }) => (noGutters ? "0" : `0 ${spacerSizeEm.md}`)};
`;

type ContainerProps = {
  children: ReactNode;
  bgColor?: BackgroundColorProp;
  maxWidth?: BreakPointProp | false;
  noGutters?: boolean;
};
const Container = ({
  children,
  bgColor,
  maxWidth = "xl",
  noGutters = false,
}: ContainerProps) => {
  let maxWidthPx: string;
  if (maxWidth) {
    if (maxWidth == "xs") {
      // This is min-width 0, so instead, let's utilize a 300px mini size that's still useful
      maxWidthPx = "300px";
    } else {
      maxWidthPx = breakPointPx[maxWidth] as string;
    }
  } else {
    maxWidthPx = "none";
  }

  return (
    <BackgroundProvider bgColor={bgColor}>
      <ContainerDiv maxWidthPx={maxWidthPx} noGutters={noGutters}>
        {children}
      </ContainerDiv>
    </BackgroundProvider>
  );
};

export default Container;
