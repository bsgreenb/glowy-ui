import React from "react";
import styled from "styled-components";
import { breakPointPx } from "../../../styles/layout";

const LogoDiv = styled.div`
  text-align: center;
`;

const LogoImg = styled.img(
  ({ mobileWidthPx, desktopWidthPx }: Omit<LogoProps, "logoUrl">) => `
  display: inline-block;
  width: ${mobileWidthPx}px;
  @media (min-width: ${breakPointPx.md}) {
    width: ${desktopWidthPx}px;
  }
`
);

type LogoProps = {
  logoUrl: string;
  mobileWidthPx: number;
  desktopWidthPx: number;
};

const Logo = ({ logoUrl, mobileWidthPx, desktopWidthPx }: LogoProps) => {
  return (
    <LogoDiv>
      <LogoImg
        mobileWidthPx={mobileWidthPx}
        desktopWidthPx={desktopWidthPx}
        src={logoUrl}
        alt="Logo"
        className="logo-image"
      />
    </LogoDiv>
  );
};

export default Logo;
