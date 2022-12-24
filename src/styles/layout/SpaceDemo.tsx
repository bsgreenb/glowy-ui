import React, { ReactNode } from "react";
import { spacerSizeBaseEm, spacerSizeEm } from ".";
import { emToPx, formatEm, formatPx } from "../../utils";
import { fontSize } from "../typography";
import { backgroundColor } from "../color";
import styled from "styled-components";

const SpaceBlockDiv = styled.div<Pick<SpaceBlockProps, "emSize">>`
  margin-bottom: ${spacerSizeEm.md};
  background-color: ${backgroundColor.dark};
  width: ${({ emSize }) => emSize}em;
  height: ${({ emSize }) => emSize}em;
`;

type SpaceBlockProps = {
  emSize: number;
  children: ReactNode;
};
// TODO: special handling for this
const SpaceBlock = ({ emSize, children }: SpaceBlockProps) => {
  return (
    <div style={{ fontSize: fontSize.h4 }}>
      <div>{children}</div>

      <SpaceBlockDiv emSize={emSize} />
    </div>
  );
};

const SpaceDemo = () => (
  <div>
    {Object.entries(spacerSizeBaseEm).map(([name, em], i) => (
      <SpaceBlock emSize={em} key={i}>
        {`${name} - ${formatPx(emToPx(em))} - ${formatEm(em)}`}
      </SpaceBlock>
    ))}
  </div>
);

export default SpaceDemo;
