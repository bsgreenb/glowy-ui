import React from "react";
import BreadCrumbs from ".";
import NavDivider from "../Nav/NavDivider";
import Nav from "../Nav";
import NavLink from "../Nav/NavLink";

export default {
  title: "Navigation/BreadCrumbs",
  component: BreadCrumbs,
};

export const Default = () => (
  <BreadCrumbs>
    <Nav gap="xs" textSize="small" textColor="secondary">
      <NavLink to="#">Flow Toys</NavLink>
      <NavDivider divider="/" />
      <NavLink to="#">Hoops</NavLink>
      <NavDivider divider="/" />
      <NavLink to="#">Gloves</NavLink>
    </Nav>
  </BreadCrumbs>
);
