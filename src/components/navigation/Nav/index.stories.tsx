import React from "react";
import Nav from ".";
import NavItem from "./NavItem";
import NavDivider from "./NavDivider";
import { FontSizeProp } from "../../../styles/typography";
import NavLink from "./NavLink";
import NavDropdown from "./NavDropdown";
import Link from "../Link";
import BackgroundProvider from "../../layout/BackgroundProvider";
import { ShareIcons } from "../../content/SocialIcon/index.stories";
import CommentCount from "../../content/CommentCount";

export default {
  component: Nav,
  title: "Navigation/Nav",
  subcomponents: {
    NavItem,
    NavLink,
    NavDivider,
    NavDropdown,
  },
};

type PageMenuProps = {
  fontSize?: FontSizeProp;
};
export const PageMenu = ({ fontSize = "body" }: PageMenuProps) => (
  <Nav textSize={fontSize} justify="center">
    <NavLink to="#">Learn</NavLink>
    <NavLink to="#">Shop</NavLink>
    <NavLink to="#">Videos</NavLink>
    <NavLink to="#">About</NavLink>
  </Nav>
);

export const CategoryMenu = () => (
  <Nav justify="center" gap="md">
    <NavLink to="#">Gloves</NavLink>
    <NavItem dropdown>
      <Link aria-haspopup="true" to="#">
        Hoops
      </Link>
      <NavDropdown direction="column" gap="md">
        <NavLink to="#">Regular Hoops</NavLink>
        <NavLink to="#">Smart Hoops</NavLink>
      </NavDropdown>
    </NavItem>
    <NavLink to="#">Poi</NavLink>
    <NavLink to="#">Lasers</NavLink>
  </Nav>
);

export const CategoryLinks = () => (
  <Nav textSize="small" textWeight="body" gap="sm">
    <NavLink to="#">Hoops</NavLink>
    <NavDivider divider="|" fade />
    <NavLink to="#">Gloves</NavLink>
    <NavDivider divider="|" fade />
    <NavLink to="#">Poi</NavLink>
    <NavDivider divider="|" fade />
    <NavLink to="#">Lasers</NavLink>
  </Nav>
);

export const VerticalPageNav = () => (
  <BackgroundProvider bgColor="dark">
    <Nav textSize="h3" direction="column" textColor="interactive">
      <NavLink to="#">Learn</NavLink>
      <NavLink to="#">Shop</NavLink>
      <NavLink to="#">Videos</NavLink>
      <NavLink to="#">About</NavLink>
    </Nav>
  </BackgroundProvider>
);

export const ShareAndCommentNav = () => (
  <Nav>
    <NavItem>
      <ShareIcons />
    </NavItem>
    <NavItem>
      <CommentCount>12</CommentCount>
    </NavItem>
  </Nav>
);
