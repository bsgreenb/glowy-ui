import React from "react";
import DataTable from ".";

export default {
  component: DataTable,
  title: "Content/DataTable",
  decorators: [
    (story: () => React.ReactNode) => (
      <div style={{ width: "50%" }}>{story()}</div>
    ),
  ],
};

const dummyData = [
  {
    title: "Availability",
    children: "23 left in stock",
  },
  {
    title: "Brand",
    children: "Waybelieve",
  },
  {
    title: "On Prime",
    children: "Yes",
  },
  {
    title: "Last Synced",
    children: "July 25 2020, @ 4:40pm",
  },
];

export const ProductTable = () => {
  return <DataTable data={dummyData} />;
};
