import React, { useContext } from "react";
import { spacerSizeEm, zIndices } from "../../../styles/layout";
import { backgroundColor, BackgroundColorProp } from "../../../styles/color";
import Nav, { NavProps } from ".";
import { DropdownContext } from "./DropdownProvider";
import { fontColor } from "../../../styles/typography";
import Container from "../../layout/Container";
import styled from "styled-components";
import { BackgroundContext } from "../../layout/BackgroundProvider";

// TODO: transition and fade effects
// TODO: keyboard controls

type NavDropdownDivProps = {
  bgColor: BackgroundColorProp;
  isOpen: boolean;
};

const NavDropdownDiv = styled.div<NavDropdownDivProps>`
  position: absolute;
  margin-top: ${spacerSizeEm.sm};
  margin-left: -${spacerSizeEm.md};
  z-index: ${zIndices.navigation};
  padding: ${spacerSizeEm.md} ${spacerSizeEm.sm} ${spacerSizeEm.md} 0;
  background-color: ${({ bgColor }) => backgroundColor[bgColor]};
  border: solid 1px ${({ bgColor }) => fontColor[bgColor].interactive};
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

// TODO: dynamic styles seperation here and generally?
const NavDropdown = ({ children, ...navProps }: NavProps) => {
  const isOpen = useContext(DropdownContext).isOpen;

  const bgColor = useContext(BackgroundContext).bgColor;

  return (
    <NavDropdownDiv isOpen={isOpen} bgColor={bgColor} aria-label="submenu">
      <Container>
        <Nav {...navProps}>{children}</Nav>
      </Container>
    </NavDropdownDiv>
  );
};

export default NavDropdown;
