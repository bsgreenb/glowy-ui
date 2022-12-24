import React, { ReactNode } from "react";
import { GatsbyImageFluidProps } from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { AspectRatioProp, aspectRatioPaddingTop } from "../../../styles/layout";

type ImageBoxProps = {
  featuredImage: GatsbyImageFluidProps;
  aspectRatio: AspectRatioProp;
  alt: string;
  children?: ReactNode;
};

const ImageBox = ({
  featuredImage,
  aspectRatio,
  alt,
  children = null,
}: ImageBoxProps) => (
  <BackgroundImage
    fluid={featuredImage.fluid}
    style={{ paddingTop: aspectRatioPaddingTop[aspectRatio], height: 0 }}
    alt={alt}
  >
    {children}
  </BackgroundImage>
);

export default ImageBox;
