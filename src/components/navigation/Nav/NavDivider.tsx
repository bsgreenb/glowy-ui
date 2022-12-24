import React from "react";
import styled from "styled-components";
import GridItem from "../../layout/Grid/GridItem";

export type DividerProp = "|" | "/";

type NavDividerProps = {
  divider: DividerProp;
  fade?: boolean;
};

// TODO: add fade prop to TextSymbol so we can use here
const NavDividerDiv = styled.div<NavDividerProps>`
  &::before {
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    content: "${({ divider }) => divider}";
    opacity: ${({ fade }) => (fade ? 0.5 : 1)};
  }
`;

const NavDivider = ({ divider, fade = false }: NavDividerProps) => {
  return (
    <GridItem>
      <NavDividerDiv divider={divider} fade={fade} />
    </GridItem>
  );
};

export default NavDivider;
