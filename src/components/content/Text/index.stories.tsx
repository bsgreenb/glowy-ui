import React from "react";
import Text from ".";

export default {
  component: Text,
  title: "Content/Text",
};

export const TextHeadings = () => (
  <>
    <Text size="h1">Heading 1</Text>
    <Text size="h2">Heading 2</Text>
    <Text size="h3">Heading 3</Text>
    <Text size="h4">Heading 4</Text>
    <Text size="h5">Heading 5</Text>
    <Text size="body">Body</Text>
  </>
);

export const FooterText = () => (
  <Text Tag="span" size="small" lHeight="solid">
    Lorem ipsum for days right here. We Lorem Ipsum in every single way. Can you
    dig it? Come join us.
  </Text>
);
