import React, { ReactNode, useContext } from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import styled from "styled-components";
import { hoverLinkCss, HoverLinkCssProps } from "../HoverLink";
import { BackgroundContext } from "../../layout/BackgroundProvider";
import { AnalyticsContext } from "./AnalyticsProvider";

type ExternalLinkProps = {
  href: string;
  newTab?: boolean;
  analytics?: boolean;
  children: ReactNode;
} & Pick<HoverLinkCssProps, "color" | "hoverUnderlineColor">;

// TODO: We shouldn't have to rely on text for color functionality..
// CONTINYA:
// Review https://www.learnstorybook.com/design-systems-for-developers/react/en/architecture/ for understanding UI component distinction
// https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/

// LATA: ExternalLink/Link should share all UI.
const HoverAnalyticsLink = styled(OutboundLink)`
  ${hoverLinkCss}
`;

const HoverNonAnalyticsLink = styled.a`
  ${hoverLinkCss}
`;

const ExternalLink = ({
  color,
  hoverUnderlineColor,
  href,
  newTab = false,
  children,
}: ExternalLinkProps) => {
  const bgColor = useContext(BackgroundContext).bgColor;

  const target = newTab ? "_blank" : undefined;
  const rel = newTab ? "noopener noreferrer" : undefined;

  const analytics = useContext(AnalyticsContext).analytics;

  // TODO: could proly refactor further
  if (analytics) {
    return (
      <HoverAnalyticsLink
        color={color}
        bgColor={bgColor}
        hoverUnderlineColor={hoverUnderlineColor}
        href={href}
        target={target}
        rel={rel}
      >
        {children}
      </HoverAnalyticsLink>
    );
  } else {
    return (
      <HoverNonAnalyticsLink
        color={color}
        bgColor={bgColor}
        hoverUnderlineColor={hoverUnderlineColor}
        href={href}
        target={target}
        rel={rel}
      >
        {children}
      </HoverNonAnalyticsLink>
    );
  }
};

export default ExternalLink;
