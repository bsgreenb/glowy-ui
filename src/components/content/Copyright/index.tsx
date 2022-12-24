import React from "react";
import Text from "../../content/Text";

type CopyrightProps = {
  companyName: string;
};

const Copyright = ({ companyName }: CopyrightProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <Text Tag="span" size="small" weight="light">
      Copyright &copy; {companyName} {currentYear}
    </Text>
  );
};

export default Copyright;
