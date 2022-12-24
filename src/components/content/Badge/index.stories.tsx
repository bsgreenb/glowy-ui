import React from "react";
import Badge from ".";
import categoryFixture from "../../../fixtures/category-fixture";
import Link from "../../navigation/Link";

export default {
  component: Badge,
  title: "Content/Badge",
  decorators: [(storyFn: () => React.ReactNode) => storyFn()],
};

export const CategoryBadge = () => (
  <Link to="#">
    <Badge>{categoryFixture.title}</Badge>
  </Link>
);
