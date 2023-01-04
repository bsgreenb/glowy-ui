import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React, { ReactNode } from "react";
import Grid from "../../layout/Grid";
import GridItem from "../../layout/Grid/GridItem";
import Text from "../Text";
import ExternalLink from "../../navigation/ExternalLink";

type ImageWithCaptionProps = {
  image: { gatsbyImageData: IGatsbyImageData };
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
  // TODO: dynamic alt
  return (
    <Grid gap="xs">
      <GridItem xs={12}>
        <GatsbyImage alt="" image={image.gatsbyImageData} />
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
