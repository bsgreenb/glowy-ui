import React, { ReactNode } from "react";
import Container from "../../layout/Container";
import {
  spacerSizeEm,
  breakPointPx,
  zIndices,
  SpacerSizeProp,
} from "../../../styles/layout";
import Sticky from "react-stickynode";
import Hidden from "../../layout/Hidden";
import styled from "styled-components";

const NavBarDiv = styled.div`
  width: 100%;
  padding: ${({ padding }: { padding: SpacerSizeProp }) =>
      spacerSizeEm[padding || "sm"]}
    0;
`;

const MobileSticky = styled.div`
  display: none;
  @media (max-width: ${breakPointPx.md}) {
    display: inherit;
  }
`;

type NavbarProps = {
  children: ReactNode;
  padding?: SpacerSizeProp;
  fixed?: boolean;
};

const Navbar = ({ children, padding = "sm", fixed = false }: NavbarProps) => {
  const navBar = (
    <Container bgColor="dark">
      <NavBarDiv padding={padding}>{children}</NavBarDiv>
    </Container>
  );

  if (fixed) {
    // See https://github.com/yahoo/react-stickynode/issues/50 for explanation of why enabledTransforms={false} is needed to fix safari scroll bug
    return (
      <>
        <MobileSticky>
          <Sticky enableTransforms={false} innerZ={zIndices.navigation}>
            {navBar}
          </Sticky>
        </MobileSticky>
        <Hidden>{navBar}</Hidden>
      </>
    );
  } else {
    return <>{navBar}</>;
  }
};

export default Navbar;
