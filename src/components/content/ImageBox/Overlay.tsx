import { ReactNode } from "react";
import { BlackFadeProp, color } from "../../../styles/color";
import { hexToRgba } from "../../../utils";
import { AlignItemsProp, JustifyProp } from "../../layout/Grid/flex";
import { spacerSizeEm } from "../../../styles/layout";
import styled from "styled-components";

type OverlayProps = {
  align: AlignItemsProp;
  justify: JustifyProp;
  blackFade?: BlackFadeProp;
  children: ReactNode;
};

// TODO: make sure dis work
const Overlay = styled.div(
  ({ align, justify, blackFade }: OverlayProps) => `
    background-color: ${
      blackFade ? hexToRgba(color.black, blackFade) : undefined
    };
    align-items: ${align};
    justify-content: ${justify};
    display: flex;
    position: absolute;
    top: 0;
    align-items: ${align};
    justify-content: ${justify};
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: ${spacerSizeEm.sm};`
);
export default Overlay;
