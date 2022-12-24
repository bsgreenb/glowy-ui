import React from "react";
import Copyright from ".";
import Container from "../../layout/Container";
import Grid from "../../layout/Grid";
import GridItem from "../../layout/Grid/GridItem";

export default {
  component: Copyright,
  title: "Content/Copyright",
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <Container bgColor="dark">{storyFn()}</Container>
    ),
  ],
};

export const FooterCopyright = () => {
  return (
    <Grid justify="center" gap={0}>
      <GridItem>
        <Copyright companyName="GlowyStuff" />
      </GridItem>
    </Grid>
  );
};
