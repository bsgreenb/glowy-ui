import React, { useState } from "react";
import ImageCarousel from ".";
import { Grid, GridItem } from "../..";
import multiImageProductFixture from "../../../fixtures/multi-image-product-fixture";
import { GatsbyImage } from "gatsby-plugin-image";

export default {
  component: ImageCarousel,
  title: "Content/ImagesCarousel",
};

export const ProductImageCarousel = () => {
  const { featuredImage, variantImages } = multiImageProductFixture;

  const images = [featuredImage].concat(variantImages);

  // the image displayed up top, with fluid
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div style={{ width: "300px" }}>
      <Grid gap="md">
        <GridItem xs={12}>
          {images.map((image, i) => {
            const showImage = i == selectedImageIndex;
            // FUTURE: dynamic alt text from contentful fields?
            return (
              <GatsbyImage
                alt=""
                image={image.constrainedImageData}
                key={i}
                style={{ display: showImage ? "block" : "none" }}
              />
            );
          })}
        </GridItem>
        <GridItem xs={12}>
          <ImageCarousel
            images={images}
            setSelectedImageIndex={setSelectedImageIndex}
          />
        </GridItem>
      </Grid>
    </div>
  );
};
