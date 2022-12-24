import React from "react";
import ExternalLink from ".";

export default {
  component: ExternalLink,
  title: "Navigation/ExternalLink",
};

export const Black = () => <ExternalLink href="#">White</ExternalLink>;

export const Green = () => (
  <ExternalLink href="#" color="interactive">
    Green
  </ExternalLink>
);

export const NewTab = () => (
  <ExternalLink href="#" newTab>
    Opens in New Tab
  </ExternalLink>
);
