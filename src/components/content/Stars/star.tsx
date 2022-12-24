import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

export type StarProps = {
  fill: "empty" | "half" | "full" | string;
  key?: number;
};

const getStarSrc = (fill: StarProps["fill"]) => {
  if (fill === "half") {
    return "star-half-alt";
  } else if (fill === "empty") {
    return ["far", "star"] as [IconPrefix, IconName];
  } else {
    return "star";
  }
};
const Star = ({ fill }: StarProps) => {
  const iconSrc = getStarSrc(fill);
  return (
    <FontAwesomeIcon
      style={{ width: "10px", height: "10px", marginLeft: 3 }}
      icon={iconSrc}
    />
  );
};

export default Star;
