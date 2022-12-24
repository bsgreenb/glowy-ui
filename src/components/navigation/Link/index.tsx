import React, { useContext } from "react";
import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import { hoverLinkCss, HoverLinkCssProps } from "../HoverLink";
import { BackgroundContext } from "../../layout/BackgroundProvider";

export type LinkProps = Omit<HoverLinkCssProps, "bgColor"> &
  Omit<GatsbyLinkProps<unknown>, "style" | "ref">;

// TODO: combine with Hover

// CONTINYA:
// Review https://www.learnstorybook.com/design-systems-for-developers/react/en/architecture/ for understanding UI component distinction

const HoverLink = styled(GatsbyLink)`
  ${hoverLinkCss}
`;

const Link = ({ color, hoverUnderlineColor, ...linkProps }: LinkProps) => {
  const bgColor = useContext(BackgroundContext).bgColor;
  return (
    <HoverLink
      color={color}
      bgColor={bgColor}
      hoverUnderlineColor={hoverUnderlineColor}
      activeClassName="active"
      {...linkProps}
    />
  );
};

export default Link;
