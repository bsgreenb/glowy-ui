import React, { ReactNode, useContext } from "react";
import styled from "styled-components";
import { BackgroundContext } from "../../layout/BackgroundProvider";
import { hoverLinkCss, HoverLinkCssProps } from "../HoverLink";

type AnchorLinkProps = {
  anchorSlug: string;
  children: ReactNode;
} & Pick<HoverLinkCssProps, "color" | "hoverUnderlineColor">;

const HoverAnchorLink = styled.a`
  ${hoverLinkCss}
`;

const AnchorLink = ({
  anchorSlug,
  color,
  hoverUnderlineColor = "primary",
  children,
}: AnchorLinkProps) => {
  const bgColor = useContext(BackgroundContext).bgColor;

  return (
    <HoverAnchorLink
      color={color}
      bgColor={bgColor}
      hoverUnderlineColor={hoverUnderlineColor}
      href={`#${anchorSlug}`}
    >
      {children}
    </HoverAnchorLink>
  );
};

export default AnchorLink;
