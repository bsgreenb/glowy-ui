import { GatsbyImageFluidProps } from "gatsby-image";
import React, { ReactNode } from "react";
import Grid from "../../layout/Grid";
import GridItem from "../../layout/Grid/GridItem";
import Text from "../Text";
import Img from "gatsby-image";
import ExternalLink from "../../navigation/ExternalLink";

type ImageWithCaptionProps = {
  image: GatsbyImageFluidProps;
  caption: string;
  photoCredit?: string;
  photoCreditUrl?: string;
};

// TODO: add alt text
const ImageWithCaption = ({
  image,
  caption,
  photoCredit,
  photoCreditUrl,
}: ImageWithCaptionProps) => {
  let photoCreditNode: ReactNode = null;

  if (photoCredit) {
    if (photoCreditUrl) {
      photoCreditNode = (
        <>
          <br />
          Photo Credit:{" "}
          <ExternalLink color="interactive" href={photoCreditUrl} newTab>
            {photoCredit}
          </ExternalLink>
        </>
      );
    } else {
      photoCreditNode = (
        <>
          <br />
          {`Photo Credit: ${photoCredit}`}
        </>
      );
    }
  }

  return (
    <Grid gap="xs">
      <GridItem xs={12}>
        <Img fluid={image.fluid} />
      </GridItem>
      <GridItem xs={12}>
        <Text size="small" textAlign="center">
          {caption} {photoCreditNode ? photoCreditNode : null}
        </Text>
      </GridItem>
    </Grid>
  );
};

export default ImageWithCaption;
