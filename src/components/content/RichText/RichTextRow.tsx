import React, { ReactNode } from "react";
import GridItem from "../../layout/Grid/GridItem";

type RichTextRowProps = {
  children: ReactNode;
};
const RichTextRow = ({ children }: RichTextRowProps) => {
  return <GridItem xs={12}>{children}</GridItem>;
};

export default RichTextRow;
