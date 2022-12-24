import React from "react";
import { IconName, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSize } from "../../../styles/typography";
import { color, ColorProp } from "../../../styles/color";
import { spacerSizeBaseEm } from "../../../styles/layout";

export type SocialIconProps = {
  icon: IconName;
  hollow?: boolean;
  onClick?: (event: React.MouseEvent) => void;
};

const SocialIcon = ({ icon, hollow = false, onClick }: SocialIconProps) => {
  // const iconLookup: IconLookup = { prefix: "fab", iconName: icon };
  // const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup);

  let circleIcon: IconProp;
  let circleColor: ColorProp;
  let iconColor: ColorProp;
  if (hollow) {
    // This is the hollow style, for share bar on Product/Post
    circleIcon = ["fal", "circle"];
    circleColor = "gray85";
    iconColor = "gray55";
  } else {
    // This is the solid style, for navbars
    circleIcon = "circle";
    circleColor = "gray55";
    iconColor = "white";
  }

  // Note: the negative margin here is a hack for how the SVGs weirdly space themselves on stacked social icons (circle in back).
  const svgHackMargin = `${spacerSizeBaseEm.xs * -1}em`;
  return (
    <span
      className="social-icon fa-stack"
      style={{ marginLeft: svgHackMargin }}
    >
      <FontAwesomeIcon
        className="fa-stack-1x"
        icon={circleIcon}
        style={{ height: fontSize.h2, width: fontSize.h2, cursor: "pointer" }}
        color={color[circleColor]}
        onClick={onClick}
      />
      <FontAwesomeIcon
        className="fa-stack-1x"
        icon={["fab", icon]}
        style={{
          height: fontSize.small,
          width: fontSize.small,
          cursor: "pointer",
        }}
        color={color[iconColor]}
        onClick={onClick}
      />
    </span>
  );
};

export default SocialIcon;
