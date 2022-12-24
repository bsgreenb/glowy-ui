import React, { ReactNode } from "react";
import Grid from ".";
import GridItem from "./GridItem";
import H from "../../content/Heading";

export default {
  component: Grid,
  subcomponents: { GridItem },
  title: "Layout/Grid",
};

const Paper = ({ children }: { children: ReactNode }) => (
  <div
    className="paper"
    style={{ border: "solid 2px", textAlign: "center", padding: "16px" }}
  >
    {children}
  </div>
);

export const Basic = () => (
  <Grid>
    <GridItem xs={12}>
      <Paper>xs=12</Paper>
    </GridItem>
    <GridItem xs={6}>
      <Paper>xs=6</Paper>
    </GridItem>
    <GridItem xs={6}>
      <Paper>xs=6</Paper>
    </GridItem>
    <GridItem xs={3}>
      <Paper>xs=3</Paper>
    </GridItem>
    <GridItem xs={3}>
      <Paper>xs=3</Paper>
    </GridItem>
    <GridItem xs={3}>
      <Paper>xs=3</Paper>
    </GridItem>
    <GridItem xs={3}>
      <Paper>xs=3</Paper>
    </GridItem>
  </Grid>
);

export const WithBreakpoints = () => (
  <Grid>
    <GridItem xs={12}>
      <Paper>xs=12</Paper>
    </GridItem>
    <GridItem xs={12} sm={6}>
      <Paper>xs=12 sm=6</Paper>
    </GridItem>
    <GridItem xs={12} sm={6}>
      <Paper>xs=12 sm=6</Paper>
    </GridItem>
    <GridItem xs={6} sm={3}>
      <Paper>xs=6 sm=3</Paper>
    </GridItem>
    <GridItem xs={6} sm={3}>
      <Paper>xs=6 sm=3</Paper>
    </GridItem>
    <GridItem xs={6} sm={3}>
      <Paper>xs=6 sm=3</Paper>
    </GridItem>
    <GridItem xs={6} sm={3}>
      <Paper>xs=6 sm=3</Paper>
    </GridItem>
  </Grid>
);

export const AutoLayout = () => (
  <>
    <Grid>
      <GridItem xs>
        <Paper>xs</Paper>
      </GridItem>
      <GridItem xs>
        <Paper>xs</Paper>
      </GridItem>
      <GridItem xs>
        <Paper>xs</Paper>
      </GridItem>
    </Grid>
    <Grid>
      <GridItem xs>
        <Paper>xs</Paper>
      </GridItem>
      <GridItem xs={6}>
        <Paper>xs=6</Paper>
      </GridItem>
      <GridItem xs>
        <Paper>xs</Paper>
      </GridItem>
    </Grid>
  </>
);

export const VerticalLayout = () => (
  <Grid direction="column" justify="space-evenly" alignItems="center">
    <GridItem>
      <Paper>Cell 1</Paper>
    </GridItem>
    <GridItem>
      <Paper>Cell 2</Paper>
    </GridItem>
    <GridItem>
      <Paper>Cell 3</Paper>
    </GridItem>
  </Grid>
);

export const VariableGaps = () => (
  <>
    <H size="h3" level={3} bottomMargin>
      Large Gap
    </H>
    <Grid gap="lg">
      <GridItem xs={6}>
        <Paper>xs=6</Paper>
      </GridItem>
      <GridItem xs={6}>
        <Paper>xs=6</Paper>
      </GridItem>
      <GridItem xs={6}>
        <Paper>xs=6</Paper>
      </GridItem>
      <GridItem xs={6}>
        <Paper>xs=6</Paper>
      </GridItem>
    </Grid>
    <br />
    <br />
    <H size="h3" level={3} bottomMargin>
      Xtra-Small Gap
    </H>
    <Grid gap="xs">
      <GridItem xs={6}>
        <Paper>xs=6</Paper>
      </GridItem>
      <GridItem xs={6}>
        <Paper>xs=6</Paper>
      </GridItem>
      <GridItem xs={6}>
        <Paper>xs=6</Paper>
      </GridItem>
      <GridItem xs={6}>
        <Paper>xs=6</Paper>
      </GridItem>
    </Grid>
  </>
);
