import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";
import Text from "../Text";
import { fontSize } from "../../../styles/typography";
import Nav from "../../navigation/Nav";
import NavItem from "../../navigation/Nav/NavItem";

// CommentCount takes children, which with Disqus would be Disqus.CommentCount
export type CommentCountProps = {
  children: ReactNode;
};

const CommentCount = ({ children }: CommentCountProps) => {
  return (
    <Nav gap="xs" alignItems="center">
      <NavItem>
        <FontAwesomeIcon
          style={{ height: fontSize.h3, width: fontSize.h3 }}
          icon={["far", "comment"]}
        />
      </NavItem>
      <NavItem>
        <Text size="small" Tag="span">
          {children}
        </Text>
      </NavItem>
    </Nav>
  );
};

export default CommentCount;
