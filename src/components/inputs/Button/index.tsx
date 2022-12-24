import React, { ReactNode } from "react";
import styled from "styled-components";
import { color } from "../../../styles/color";
import {
  spacerSizeEm,
  borderRadius,
  spacerSizeBaseEm,
} from "../../../styles/layout";
import {
  fontSize,
  fontWeight,
  lightFontColor,
  lineHeight,
} from "../../../styles/typography";

type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
  variant?: "nav" | "cta";
};

const NavButton = styled.button`
  font-size: ${fontSize.body};
  border-radius: ${borderRadius};
  border: solid 2px ${color.gray55};
  background: transparent;
  padding: ${spacerSizeEm.xs} ${spacerSizeEm.md};
  cursor: pointer;

  font-weight: ${fontWeight.medium};
  line-height: ${lineHeight.solid};
`;

const CtaButton = styled.button`
  font-size: ${fontSize.h4};
  border-radius: ${borderRadius};
  padding: ${spacerSizeBaseEm.sm * 1.5}em ${spacerSizeEm.md};
  cursor: pointer;
  background-color: ${lightFontColor.interactive};
  border: 0;

  color: ${color.white};
  font-weight: ${fontWeight.medium};
  line-height: ${lineHeight.solid};
`;

const Button = ({ onClick, children, variant = "nav" }: ButtonProps) => {
  if (variant == "nav") {
    return <NavButton onClick={onClick}>{children}</NavButton>;
  } else {
    return <CtaButton onClick={onClick}>{children}</CtaButton>;
  }
};

export default Button;
