import React from "react";
import { fontWeight, fontSize } from "..";

const FontWeightDemo = () => (
  <ul>
    {Object.entries(fontWeight).map(([name, weight], i) => (
      <li key={i}>
        <span style={{ fontSize: fontSize.h4, fontWeight: weight }}>
          {`${name} - ${weight}`}
        </span>
      </li>
    ))}
  </ul>
);

export default FontWeightDemo;
