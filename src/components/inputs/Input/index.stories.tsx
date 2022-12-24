import React, { useCallback, useState } from "react";
import Input from ".";
import { action } from "@storybook/addon-actions";
import Grid from "../../layout/Grid";
import GridItem from "../../layout/Grid/GridItem";
import Button from "../Button";
import Container from "../../layout/Container";

export default {
  component: Input,
  title: "Inputs/Input",
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <Container maxWidth="sm" bgColor="dark">
        {storyFn()}
      </Container>
    ),
  ],
};

export const Default = () => (
  <Input onChange={action("changed")} placeholder="type here" />
);

// TODO
export const FooterSubscribeForm = () => {
  const [email, setEmail] = useState("");

  // TODO: implement storybook actions
  const handleSubscribe = useCallback(() => {
    action("clicked");
    console.log(`${email} submitted!`);
  }, [email]);

  return (
    <Grid alignItems="stretch" wrap="nowrap">
      <GridItem xs="auto" lg>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
        />
      </GridItem>
      <GridItem xs="auto">
        <Button onClick={handleSubscribe}>Subscribe</Button>
      </GridItem>
    </Grid>
  );
};

export const HeaderSubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [visibleInput, setVisibleInput] = useState(false);

  const handleSubmit = useCallback(() => {
    // TODO (kevinb1003): Implement the API part
    setVisibleInput(false);
  }, [email]);

  return (
    <Grid wrap="nowrap" alignItems="stretch">
      {visibleInput ? (
        <GridItem xs>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
          />
        </GridItem>
      ) : null}
      <GridItem>
        <Button
          onClick={() => {
            if (visibleInput) {
              action("handle submit");
              handleSubmit();
            } else {
              action("visible input");
              setVisibleInput(true);
            }
          }}
        >
          Subscribe
        </Button>
      </GridItem>
    </Grid>
  );
};
