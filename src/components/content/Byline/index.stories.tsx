import React from "react";
import Byline from ".";
import postFixture from "../../../fixtures/post-fixture";

export default {
  component: Byline,
  title: "Content/Byline",
};

const { author, updatedAt } = postFixture;
export const PostPreviewByline = () => (
  <Byline author={author} updatedAt={updatedAt} preview={true} />
);

export const PostByline = () => (
  <Byline author={author} updatedAt={updatedAt} preview={false} />
);
