import React, { ReactNode } from "react";
import { getImage, IGatsbyImageData } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";
import { AspectRatioProp, aspectRatioPaddingTop } from "../../../styles/layout";
import { convertToBgImage } from "gbimage-bridge";

type ImageBoxProps = {
  featuredImage: {
    gatsbyImageData: IGatsbyImageData;
  };
  aspectRatio: AspectRatioProp;
  alt: string;
  children?: ReactNode;
};

const ImageBox = ({
  featuredImage,
  aspectRatio,
  alt,
  children = null,
}: ImageBoxProps) => {
  const image = getImage(featuredImage);
  const convertedBgImage = convertToBgImage(image);
  return (
    <BackgroundImage
      {...convertedBgImage}
      style={{ paddingTop: aspectRatioPaddingTop[aspectRatio], height: 0 }}
      alt={alt}
    >
      {children}
    </BackgroundImage>
  );
};

export default ImageBox;
