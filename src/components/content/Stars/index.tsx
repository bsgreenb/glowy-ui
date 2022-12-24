import React from "react";
import Star from "./star";

type StarsProps = {
  stars: number;
};

const getFilling = (whole: number, dec: number, i: number) => {
  if (i < whole) {
    return "full";
  } else if (i === whole) {
    return dec >= 0.5 ? "half" : "empty";
  } else {
    return "empty";
  }
};
const Stars = ({ stars }: StarsProps) => {
  const starsArr = [];
  const whole = Math.floor(stars);
  const dec = stars - whole;
  for (let i = 0; i < 5; i++) {
    starsArr[i] = {
      fill: getFilling(whole, dec, i),
    };
  }
  return (
    <>
      {starsArr.map((item, i) => (
        <Star key={i} fill={item.fill} />
      ))}
    </>
  );
};

export default Stars;
