import React, { ReactNode } from "react";
import styled from "styled-components";
import { breakPointPx, BreakPointProp } from "../../../styles/layout";

const HiddenMin = styled.div(
  ({ min }: Pick<HiddenProps, "min">) => `
  display: none;
  height: 100%;

  @media (min-width: ${breakPointPx[min || "xs"]}) {
    display: inherit;
  }
`
);

const HiddenMax = styled.div(
  ({ max }: Pick<HiddenProps, "max">) => `
  display: none;
  height: 100%;

  @media (max-width: ${breakPointPx[max || "md"]}) {
    display: inherit;
  }
`
);

type HiddenProps = {
  min?: BreakPointProp;
  max?: BreakPointProp;
  children: ReactNode;
};

// TODO: this should proly apply both and be cleaner.
const Hidden = ({ min = "md", max, children }: HiddenProps) => {
  // Backwards compatible and convenient

  return max ? (
    <HiddenMax max={max}>{children}</HiddenMax>
  ) : (
    <HiddenMin min={min}>{children}</HiddenMin>
  );
};
export default Hidden;
