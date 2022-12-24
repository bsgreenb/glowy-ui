import React from "react";
import DataRow, { DataRowProps } from "./DataRow";
import styled from "styled-components";
import { color } from "../../../styles/color";

const DataTableTable = styled.table`
  border-spacing: 0px;
  border: solid 2px ${color.gray94};
  border-radius: 3px;
  box-sizing: border-box;
  width: 100%;
  & > *:nth-child(even) {
    background: ${color.gray94};
  }
`;
type DataTableProps = {
  data: Array<DataRowProps>;
};

// TODO: this name collides with the DataTable Contentful model.

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <DataTableTable>
      {data.map((item: DataRowProps, i: number) => (
        <DataRow key={i} title={item.title}>
          {item.children}
        </DataRow>
      ))}
    </DataTableTable>
  );
};

export default DataTable;
