import React from "react";
import Link from ".";
import BackgroundProvider from "../../layout/BackgroundProvider";

export default {
  component: Link,
  title: "Navigation/Link",
  decorators: [
    (story: () => React.ReactNode) => (
      <BackgroundProvider bgColor="dark">{story()}</BackgroundProvider>
    ),
  ],
};

export const White = () => <Link to="#">White</Link>;

export const Green = () => (
  <Link to="#" color="interactive">
    Green
  </Link>
);
