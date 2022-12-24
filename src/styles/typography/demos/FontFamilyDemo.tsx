import React from "react";
import { fontFamily, fontSize } from "..";

const FontFamilyDemo = () => (
  <div style={{ fontSize: fontSize.h4 }}>
    <p>
      <strong>Primary Font:</strong> {fontFamily.primary}
    </p>
    <p>
      <strong>Font Stack:</strong>
    </p>
    <ul>
      {fontFamily.stack.split(",").map((stackFamily, i) => (
        <li key={i}>
          <span style={{ fontFamily: stackFamily }}>{stackFamily}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default FontFamilyDemo;
