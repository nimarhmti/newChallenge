import React from "react";
import { Logo, NavbarStyle } from "./Navbar.style";
import menu from "../../assets/Icons/menu.png";
export const Navbar = () => {
  return (
    <NavbarStyle>
      <Logo src={menu} />
    </NavbarStyle>
  );
};
