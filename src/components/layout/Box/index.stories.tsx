import React from "react";
import Box from ".";
import Grid from "../Grid";
import GridItem from "../Grid/GridItem";
import Byline from "../../content/Byline";
import postFixture from "../../../fixtures/post-fixture";
import productFixture from "../../../fixtures/product-fixture";
import Text from "../../content/Text";
import BoxBody from "./BoxBody";
import Img from "gatsby-image";
import { CategoryBadge } from "../../content/Badge/index.stories";
import H from "../../content/Heading";
import { PostImageBox } from "../../content/ImageBox/index.stories";
import ImageBox from "../../content/ImageBox";
import Container from "../Container";
import ExternalLink from "../../navigation/ExternalLink";
import TextSymbol from "../../content/TextSymbol";
import Hidden from "../Hidden";

export default {
  title: "Layout/Box",
  component: Box,
  subcomponents: {
    BoxBody,
  },
};

export const ProductCard = ({
  text = "Cover that beautiful face of yours from the constant sun.",
}: {
  text?: string;
}) => {
  const { title, featuredImage } = productFixture;

  return (
    <Box border>
      <BoxBody>
        <Hidden min="lg">
          <Grid direction="column" gap="md" wrap="nowrap" fullHeight>
            <GridItem>
              <Img alt={title} fluid={featuredImage.fluid} />
            </GridItem>
            <GridItem>
              <H level={3} size="h4">
                {title}
              </H>
            </GridItem>

            <GridItem xs>{text}</GridItem>

            <GridItem>
              <Text size="small" Tag="span" weight="medium">
                Featured:{" "}
                <ExternalLink href="#" color="interactive">
                  Dorfman Pacific Outback Hat <TextSymbol char="»" />
                </ExternalLink>
              </Text>
            </GridItem>
          </Grid>
        </Hidden>
        <Hidden max="lg">
          <Grid fullHeight>
            <GridItem xs={5}>
              <Img alt={title} fluid={featuredImage.fluid} />
            </GridItem>
            <GridItem xs={7}>
              <Grid direction="column" gap="md" wrap="nowrap" fullHeight>
                <GridItem>
                  <H level={3} size="h4">
                    {title}
                  </H>
                </GridItem>
                <GridItem xs>{text}</GridItem>
                <GridItem>
                  <Text size="small" Tag="span" weight="medium">
                    Featured:{" "}
                    <ExternalLink href="#" color="interactive">
                      Dorfman Pacific Outback Hat <TextSymbol char="»" />
                    </ExternalLink>
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </Hidden>
      </BoxBody>
    </Box>
  );
};
ProductCard.story = {
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <Container maxWidth="xs">{storyFn()}</Container>
    ),
  ],
};

export const TwoProductCards = () => {
  return (
    <Container>
      <Grid gap="md">
        <GridItem xs={12} md={6} lg={4}>
          <ProductCard />
        </GridItem>
        <GridItem xs={12} md={6} lg={4}>
          <ProductCard text="Cover that beautiful face of yours from the constant sun. Cover that beautiful face of yours from the constant sun." />
        </GridItem>
      </Grid>
    </Container>
  );
};

export const PostHeader = () => {
  const {
    author,
    updatedAt,
    title,
    subTitle,
    lead,
    featuredImage,
  } = postFixture;

  return (
    <Box>
      <Grid gap="md">
        <GridItem xs={12} lg={0}>
          <Grid>
            <GridItem xs={12}>
              <H level={1} size="h1">
                {title}
              </H>
            </GridItem>
            <GridItem xs={12}>
              <H level={2} size="h3">
                {subTitle}
              </H>
            </GridItem>
            <GridItem xs={12}>
              <Byline author={author} updatedAt={updatedAt} preview={false} />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem xs={12}>
          <Grid direction="row-reverse">
            <GridItem xs={12} lg={8}>
              <ImageBox
                aspectRatio="wide"
                alt={title}
                featuredImage={featuredImage}
              />
            </GridItem>
            <GridItem xs={12} lg={4}>
              <Grid direction="column" gap="md">
                <GridItem xs={0} lg>
                  <H level={1} size="h1">
                    {title}
                  </H>
                </GridItem>
                <GridItem xs={0} lg>
                  <H level={2} size="h3">
                    {subTitle}
                  </H>
                </GridItem>
                <GridItem xs={0} lg>
                  <Byline
                    author={author}
                    updatedAt={updatedAt}
                    preview={false}
                  />
                </GridItem>
                <GridItem>
                  <Text>{lead?.lead}</Text>
                </GridItem>
                <GridItem>
                  <CategoryBadge />
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export const HeroPostBox = () => {
  const { author, updatedAt, title, lead } = postFixture;

  return (
    <Box>
      <Grid gap={0}>
        <GridItem xs={12} lg>
          <PostImageBox />
        </GridItem>
        <GridItem xs={12} lg>
          <BoxBody>
            <Grid direction="column">
              <GridItem>
                <H level={2} size="h2">
                  {title}
                </H>
              </GridItem>
              <GridItem>
                <Byline author={author} updatedAt={updatedAt} preview={true} />
              </GridItem>
              <GridItem xs={0} md>
                <Text>{lead?.lead}</Text>
              </GridItem>
            </Grid>
          </BoxBody>
        </GridItem>
      </Grid>
    </Box>
  );
};

export const PostBox = () => {
  const { author, updatedAt, title, lead } = postFixture;

  return (
    <Box>
      <Grid gap={0}>
        <GridItem xs={12}>
          <PostImageBox />
        </GridItem>
        <GridItem xs={12}>
          <BoxBody>
            <Grid direction="column">
              <GridItem>
                <H level={2} size="h2">
                  {title}
                </H>
              </GridItem>
              <GridItem>
                <Byline author={author} updatedAt={updatedAt} preview={true} />
              </GridItem>
              <GridItem xs={0} lg>
                <Text>{lead?.lead}</Text>
              </GridItem>
            </Grid>
          </BoxBody>
        </GridItem>
      </Grid>
    </Box>
  );
};

PostBox.story = {
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <Container maxWidth="xs">{storyFn()}</Container>
    ),
  ],
};

export const ProductBox = () => {
  const { title, featuredImage } = productFixture;

  return (
    <Box>
      <Grid gap={0}>
        <GridItem xs={12}>
          <Img alt={title} fluid={featuredImage.fluid} />
        </GridItem>
        <GridItem xs={12}>
          <BoxBody>
            <Grid direction="column">
              <GridItem>
                <H level={2} size="h3" truncateLines={2}>
                  {title}
                </H>
              </GridItem>
              <GridItem>
                <Grid justify="space-between" alignItems="center">
                  <GridItem>
                    <CategoryBadge />
                  </GridItem>
                  <GridItem>
                    <Text size="h4" Tag="span" lHeight="solid">
                      $12.00
                    </Text>
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
          </BoxBody>
        </GridItem>
      </Grid>
    </Box>
  );
};

ProductBox.story = {
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <Container maxWidth="xs">{storyFn()}</Container>
    ),
  ],
};
