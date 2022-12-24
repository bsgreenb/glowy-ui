import React from "react";
import TextSymbol from ".";

export default {
  title: "Content/TextSymbol",
  component: TextSymbol,
};

export const ExternalSymbol = () => {
  return <TextSymbol char="»" />;
};

export const DividerSymbol = () => {
  return <TextSymbol char="-" />;
};

export const LongDividerSymbol = () => {
  return <TextSymbol char="—" />;
};
