import React from "react";
import { fontSize, darkFontColor, lightFontColor, formatColorName } from "..";
import { spacerSizeEm } from "../../layout";
import { color, backgroundColor } from "../../color";
import styled from "styled-components";

/* TODO fix padding approach proly, implement w grid or whatev */
// TODO: update to use <Grid> instead of css grid.
// Implementing Jackson's font color demo here: https://app.zeplin.io/project/5de9c728b108ccbc873e77a6/screen/5ebf8716cc8d733270bb7f74
const FontColorDemoDiv = styled.div`
  border: 2px solid ${color.gray94};
  font-size: ${fontSize.h4};
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
`;

const BgCol = styled.div`
  padding: ${spacerSizeEm.md};
  background-color: ${backgroundColor.white};
`;

const FontColorDemo = () => {
  return (
    <FontColorDemoDiv>
      <BgCol style={{ backgroundColor: backgroundColor.white }}>
        {Object.entries(lightFontColor).map(([name, val], i) => (
          <p key={i} style={{ color: val }}>
            {formatColorName(name)}
          </p>
        ))}
      </BgCol>
      <BgCol style={{ backgroundColor: backgroundColor.dark }}>
        {Object.entries(darkFontColor).map(([name, val], i) => (
          <p key={i} style={{ color: val }}>
            {formatColorName(name)}
          </p>
        ))}
      </BgCol>
    </FontColorDemoDiv>
  );
};

export default FontColorDemo;
