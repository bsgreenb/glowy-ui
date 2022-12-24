import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GatsbyImageFixedProps, GatsbyImageFluidProps } from "gatsby-image";
import React, { useState } from "react";
import { color } from "../../../styles/color";
import { fontSize } from "../../../styles/typography";
import Grid from "../../layout/Grid";
import GridItem from "../../layout/Grid/GridItem";
import Img from "gatsby-image";

type FluidAndFixedImage = GatsbyImageFluidProps & GatsbyImageFixedProps;

type ImageCarouselProps = {
  images: FluidAndFixedImage[];
  setSelectedImageIndex: React.Dispatch<React.SetStateAction<number>>;
};

const ImageCarousel = ({
  images,
  setSelectedImageIndex,
}: ImageCarouselProps) => {
  const [pageNumber, setPageNumber] = useState(0);

  const pageSize = 3;
  const numPages = images.length / pageSize;

  const startIndex = pageNumber * pageSize;
  const endIndex = startIndex + pageSize;

  const atStart = pageNumber == 0;
  const atFinish = pageNumber >= numPages - 1;

  const previousPage = () => {
    setPageNumber(pageNumber - 1);
  };
  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const imageSelect = (i: number) => {
    return () => {
      setSelectedImageIndex(i);
    };
  };
  const imageDeselect = () => {
    // set it back to featured image
    setSelectedImageIndex(0);
  };

  return (
    <Grid gap="xs" justify="space-around" alignItems="center">
      {numPages > 1 && (
        <GridItem>
          <FontAwesomeIcon
            icon={["fas", "chevron-left"]}
            color={atStart ? color.gray74 : color.black}
            style={{
              height: fontSize.h3,
              width: fontSize.h3,
              cursor: atStart ? "auto" : "pointer",
            }}
            onClick={atStart ? undefined : previousPage}
          />
        </GridItem>
      )}
      {/* TODO: get alts in here, check how we did alts elsewhere for consistency.  title make */}
      {images.map((image, i) => {
        const showImage = i >= startIndex && i < endIndex;
        return (
          <GridItem
            style={{
              display: showImage ? "initial" : "none",
              cursor: i == 0 ? "auto" : "pointer",
            }}
            key={i}
            onEnter={imageSelect(i)}
            onLeave={imageDeselect}
          >
            <Img fixed={image.fixed} />
          </GridItem>
        );
      })}
      {numPages > 1 && (
        <GridItem>
          <FontAwesomeIcon
            icon={["fas", "chevron-right"]}
            color={atFinish ? color.gray74 : color.black}
            style={{
              height: fontSize.h3,
              width: fontSize.h3,
              cursor: "pointer",
            }}
            onClick={atFinish ? undefined : nextPage}
          />
        </GridItem>
      )}
    </Grid>
  );
};

export default ImageCarousel;
