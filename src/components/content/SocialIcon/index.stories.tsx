import React from "react";
import SocialIcon from ".";
import Nav from "../../navigation/Nav";
import NavItem from "../../navigation/Nav/NavItem";

export default {
  component: SocialIcon,
  title: "Content/SocialIcons",
};

export const SocialIcons = () => (
  <Nav justify="center" gap={0}>
    <NavItem>
      <SocialIcon icon="facebook-f" />
    </NavItem>
    <NavItem>
      <SocialIcon icon="instagram" />
    </NavItem>
    <NavItem>
      <SocialIcon icon="twitter" />
    </NavItem>
    <NavItem>
      <SocialIcon icon="youtube" />
    </NavItem>
  </Nav>
);

export const ShareIcons = () => (
  <Nav gap={0}>
    <NavItem>
      <SocialIcon icon="facebook-f" hollow />
    </NavItem>
    <NavItem>
      <SocialIcon icon="twitter" hollow />
    </NavItem>
  </Nav>
);
