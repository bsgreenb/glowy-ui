import React from "react";
import ImageBox from ".";
import categoryFixture from "../../../fixtures/category-fixture";
import postFixture from "../../../fixtures/post-fixture";
import H from "../Heading";
import { CategoryBadge } from "../Badge/index.stories";
import Overlay from "./Overlay";
import Container from "../../layout/Container";
import { BackgroundContext } from "../../layout/BackgroundProvider";

export default {
  component: ImageBox,
  title: "Content/ImageBox",
  subcomponents: { Overlay },
};

export const CategoryImageBox = () => {
  const { title, featuredImage } = categoryFixture;
  return (
    <Container maxWidth="xs">
      <ImageBox aspectRatio="square" alt={title} featuredImage={featuredImage}>
        <Overlay align="center" justify="center" blackFade={30}>
          <BackgroundContext.Provider value={{ bgColor: "dark" }}>
            <H level={3} size="h1" textShadow textAlign="center">
              {title}
            </H>
          </BackgroundContext.Provider>
        </Overlay>
      </ImageBox>
    </Container>
  );
};

export const PostImageBox = () => {
  const { title, featuredImage } = postFixture;

  return (
    <Container maxWidth="sm">
      <ImageBox aspectRatio="wide" alt={title} featuredImage={featuredImage}>
        <Overlay blackFade={15} align="flex-end" justify="flex-end">
          <CategoryBadge />
        </Overlay>
      </ImageBox>
    </Container>
  );
};
