import React, { ReactNode } from "react";
import Text from "../Text";
import styled from "styled-components";
import { spacerSizeBaseEm } from "../../../styles/layout";

const DataRowTd = styled.td`
  padding: ${spacerSizeBaseEm.md}em;
  max-width: 50%;
`;

const DataRowTh = styled.th`
  padding: ${spacerSizeBaseEm.md}em;
  text-align: left;
  max-width: 50%;
`;

export type DataRowProps = {
  title: string;
  children: string;
};

const DataRow = ({ title, children }: DataRowProps) => {
  const dataLines = children.split("\n");
  let dataValue: ReactNode;

  if (dataLines.length == 1) {
    dataValue = dataLines[0];
  } else {
    dataValue = dataLines.map((dataLine) => {
      return (
        <>
          {dataLine}
          <br />
        </>
      );
    });
  }

  return (
    <tr>
      <DataRowTh>
        <Text Tag="span" weight="medium">
          {title}
        </Text>
      </DataRowTh>
      <DataRowTd>
        <Text weight="light">{dataValue}</Text>
      </DataRowTd>
    </tr>
  );
};

export default DataRow;
