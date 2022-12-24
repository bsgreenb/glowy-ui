import React from "react";
import Stars from ".";

export default {
  component: Stars,
  title: "Content/Stars",
};

export const StarsHalfFull = () => <Stars stars={2.5} />;
export const StarsEmpty = () => <Stars stars={0} />;
export const StarsFull = () => <Stars stars={5} />;
