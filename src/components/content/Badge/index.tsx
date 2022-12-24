import React, { ReactNode } from "react";
import { spacerSizeEm, borderRadius } from "../../../styles/layout";
import { color } from "../../../styles/color";
import Text from "../Text";
import styled from "styled-components";

// TODO: let's do sizes, simple as adding a prop Pick'd from text

const BadgeSpan = styled.span`
  display: inline-block;
  border-radius: ${borderRadius};
  padding: 0 ${spacerSizeEm.sm};
  opacity: 0.9;
  background-color: ${color.gray94};
`;

const Badge = ({ children }: { children: ReactNode }) => {
  return (
    <BadgeSpan>
      <Text Tag="span" size="small" lHeight="solid">
        {children}
      </Text>
    </BadgeSpan>
  );
};

export default Badge;
