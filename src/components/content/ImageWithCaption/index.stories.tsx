import React from "react";
import ImageWithCaption from ".";
import postFixture from "../../../fixtures/post-fixture";
import Grid from "../../layout/Grid";
import GridItem from "../../layout/Grid/GridItem";

export default {
  title: "Content/ImageWithCaption",
  component: ImageWithCaption,
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <Grid justify="center">
        <GridItem xs={9} sm={7}>
          {storyFn()}
        </GridItem>
      </Grid>
    ),
  ],
};

const image = postFixture.featuredImage;

const caption = "One hooper with lots of different hoop sizes.";

export const NoCredit = () => {
  return <ImageWithCaption image={image} caption={caption} />;
};

const photoCredit = "Hoopologie";
export const NoUrl = () => {
  return (
    <ImageWithCaption
      image={image}
      caption={caption}
      photoCredit={photoCredit}
    />
  );
};

export const WithUrl = () => {
  const photoCreditUrl = "https://www.hoopologcie.com/polypro-slinky-kit";

  return (
    <ImageWithCaption
      image={image}
      caption={caption}
      photoCredit={photoCredit}
      photoCreditUrl={photoCreditUrl}
    />
  );
};
