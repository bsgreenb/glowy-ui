import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import Grid from "../../layout/Grid";
import GridItem from "../../layout/Grid/GridItem";
import Text from "../Text";

type BylineProps = {
  author: {
    name: string;
    photo: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  updatedAt: string;
  preview: boolean;
};

// TODO: It should vary in size dependening on Category vs Post
// FUTURE: semantic HTML

const Byline = ({ author, updatedAt, preview }: BylineProps) => (
  <Grid wrap="nowrap" gap="xs" alignItems="center">
    <GridItem xs="auto">
      <GatsbyImage
        image={author.photo.gatsbyImageData}
        style={{ borderRadius: "50%", display: "block" }}
        alt={author.name}
      />
    </GridItem>
    <GridItem xs="auto">
      <Grid direction="column" gap={0}>
        <GridItem>
          <Text size="small">{author.name}</Text>
        </GridItem>
        <GridItem>
          <Text weight="light" size="small" color="secondary">
            {preview ? updatedAt : `Last updated ${updatedAt}`}
          </Text>
        </GridItem>
      </Grid>
    </GridItem>
  </Grid>
);

export default Byline;
