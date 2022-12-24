import React, { ReactNode } from "react";
import styled from "styled-components";
import { spacerSizeEm } from "../../../styles/layout";
import Container from "../../layout/Container";

export type BreadCrumbsProps = {
  children: ReactNode;
};

const BreadCrumbsDiv = styled.div`
  padding: ${spacerSizeEm.sm} 0;
`;

const BreadCrumbs = ({ children }: BreadCrumbsProps) => {
  return (
    <Container maxWidth={false} noGutters bgColor="light">
      <Container>
        <BreadCrumbsDiv>{children}</BreadCrumbsDiv>
      </Container>
    </Container>
  );
};

export default BreadCrumbs;
