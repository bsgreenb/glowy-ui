import React from "react";
import BackgroundProvider, { BackgroundContext } from ".";
import Container from "../Container";

export default {
  component: BackgroundProvider,
  subcomponents: { BackgroundContext },
  title: "Layout/Backgrounds",
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <Container maxWidth="md">{storyFn()}</Container>
    ),
  ],
};

export const Default = () => (
  <>
    <BackgroundProvider bgColor="dark">Dark</BackgroundProvider>
    <BackgroundProvider bgColor="light">Light</BackgroundProvider>
    <BackgroundProvider bgColor="white">White</BackgroundProvider>
  </>
);
