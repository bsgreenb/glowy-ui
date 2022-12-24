import React from "react";
import Button from ".";
import { action } from "@storybook/addon-actions";
import BackgroundProvider from "../../layout/BackgroundProvider";
import { ExternalLink } from "../..";

export default {
  component: Button,
  title: "Inputs/Button",
};

export const Subscribe = () => (
  <Button onClick={action("subscribe")}>Subscribe</Button>
);
Subscribe.decorators = [
  (storyFn: () => React.ReactNode) => (
    <BackgroundProvider bgColor="dark">{storyFn()}</BackgroundProvider>
  ),
];

export const BuyButton = () => (
  <ExternalLink href="#">
    <Button variant="cta">View on Amazon</Button>
  </ExternalLink>
);
