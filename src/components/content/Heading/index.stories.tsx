import React from "react";
import H from ".";

export default {
  component: H,
  title: "Content/Heading",
};

export const Default = () => (
  <>
    <H size="h1" level={1}>
      Heading 1
    </H>
    <H size="h2" level={2}>
      Heading 2
    </H>
    <H size="h3" level={3}>
      Heading 3
    </H>
    <H size="h4" level={4}>
      Heading 4
    </H>
  </>
);

export const ForceTag = () => (
  <H level={1} size="h4">
    H1 Tag but variant h4
  </H>
);

export const FooterHeading = () => (
  <H level={3} size="h4" bottomMargin>
    Footer Heading
  </H>
);
