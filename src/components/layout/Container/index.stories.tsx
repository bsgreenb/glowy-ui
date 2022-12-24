import React from "react";
import Container from ".";

export default {
  title: "Layout/Container",
  component: Container,
};

export const Default = () => (
  <>
    <Container maxWidth="md">Fixed width container</Container>
    <Container maxWidth={false} noGutters>
      Fluid container (no Max Width, no Gutters)
    </Container>
    <Container bgColor="dark">Dark background</Container>
  </>
);
