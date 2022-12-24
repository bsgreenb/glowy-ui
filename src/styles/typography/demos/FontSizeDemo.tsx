import React from "react";
import { Typeset } from "@storybook/addon-docs/blocks";
import { fontFamily, fontSize, fontSizeBaseEm, fontWeight } from "..";
import { emToPx, formatEm, formatPx } from "../../../utils";

const FontSizeDemo = () => (
  <div>
    <ul>
      {Object.entries(fontSizeBaseEm).map(([name, em], i) => (
        <li key={i}>
          {name == "small"
            ? `${name} -  ${formatPx(emToPx(em))}`
            : `${name} - ${formatPx(emToPx(em))} - ${formatEm(em)}
      `}
        </li>
      ))}
    </ul>
    <Typeset
      fontFamily={fontFamily.primary}
      fontSizes={Object.values(fontSize) as string[]}
      fontWeight={Number(fontWeight.body)}
      sampleText="GlowyStuff example text"
    />
  </div>
);

export default FontSizeDemo;
