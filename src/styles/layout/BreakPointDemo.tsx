import React from "react";
import { pxToEm, formatPx, formatEm } from "../../utils";
import { breakPointBasePx } from ".";
import { fontSize } from "../typography";

const BreakPointDemo = () => (
  <ul style={{ fontSize: fontSize.h4 }}>
    {Object.entries(breakPointBasePx).map(([name, px], i) => (
      <li key={i}>{`${name} - ${formatPx(px)} - ${formatEm(pxToEm(px))}`}</li>
    ))}
  </ul>
);

export default BreakPointDemo;
