import React, { ReactNode } from "react";
import Grid from "../layout/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GridItem from "../layout/Grid/GridItem";
import { backgroundColor } from "../../styles/color";
import { spacerSizeEm, zIndices } from "../../styles/layout";
import Portal from "../Portal";
import { fontSize, darkFontColor } from "../../styles/typography";
import styled from "styled-components";
import BackgroundProvider from "../layout/BackgroundProvider";

type ModalCloseButtonProps = {
  onClose: (event: React.MouseEvent) => void;
};

// todo: To actually match the icon we either need font awesome pro or directly use an SVG.
const ModalCloseButton = ({ onClose }: ModalCloseButtonProps) => (
  <FontAwesomeIcon
    color={darkFontColor.primary}
    icon="times"
    onClick={onClose}
    style={{ height: fontSize.h3, width: fontSize.h3, cursor: "pointer" }}
  />
);

const ModalDiv = styled.div`
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  z-index: ${zIndices.modal};
  left: 0;
  padding: ${spacerSizeEm.md};
  top: 0;
  background-color: ${backgroundColor.dark};
`;

type ModalProps = {
  children: ReactNode;
  onClose: ModalCloseButtonProps["onClose"];
  isOpen: boolean;
};

const Modal = ({ children, isOpen = false, onClose }: ModalProps) => {
  return isOpen
    ? isOpen && (
        <Portal>
          <ModalDiv>
            <Grid justify="flex-end">
              <GridItem>
                <ModalCloseButton onClose={onClose} />
              </GridItem>
            </Grid>
            <Grid>
              <GridItem>
                <BackgroundProvider bgColor="dark">
                  {children}
                </BackgroundProvider>
              </GridItem>
            </Grid>
          </ModalDiv>
        </Portal>
      )
    : null;
};

export default Modal;
