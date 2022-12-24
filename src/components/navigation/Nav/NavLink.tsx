import React, { ReactNode } from "react";
import NavItem from "./NavItem";
import Link from "../Link";

type NavLinkProps = {
  to: string;
  children: ReactNode;
};

const NavLink = ({ to, children }: NavLinkProps) => {
  return (
    <NavItem>
      <Link to={to}>{children}</Link>
    </NavItem>
  );
};

export default NavLink;
