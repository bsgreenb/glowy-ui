import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { color } from "../../../styles/color";
import { fontSize } from "../../../styles/typography";
import styled from "styled-components";

type NavbarToggleProps = {
  onToggle: (event: React.MouseEvent) => void;
};

const NavbarToggleSpan = styled.span`
  cursor: pointer;
`;

// Future Todo: add aria-* field once we are doing accessibility run.
const NavbarToggle = ({ onToggle }: NavbarToggleProps) => {
  return (
    <NavbarToggleSpan>
      <FontAwesomeIcon
        style={{ height: fontSize.body, width: fontSize.h3 }}
        icon="bars"
        color={color.white}
        onClick={onToggle}
      />
    </NavbarToggleSpan>
  );
};

export default NavbarToggle;
