import React, { ReactNode } from "react";
import { BackgroundContext } from "../BackgroundProvider";
import {
  backgroundColor,
  BackgroundColorProp,
  color,
} from "../../../styles/color";
import styled from "styled-components";

// TODO: border we add here may match other ones, as well as Gatsby tokens.  Let's check.

type BoxDivProps = {
  bgColor: BackgroundColorProp;
  border: BoxProps["border"];
};
const BoxDiv = styled.div<BoxDivProps>`
  background-color: ${({ bgColor }) => backgroundColor[bgColor]};
  height: 100%;
  border: ${({ border }) => (border ? `solid 1px ${color.gray85}` : "none")};
`;

type BoxProps = {
  border?: boolean;
  children: ReactNode;
};

// A white Box, currently
const Box = ({ border = false, children }: BoxProps) => {
  const bgColor = "white";

  return (
    <BoxDiv bgColor={bgColor} className={`box`} border={border}>
      <BackgroundContext.Provider value={{ bgColor }}>
        {children}
      </BackgroundContext.Provider>
    </BoxDiv>
  );
};

export default Box;
