import React from "react";
import { stack as Menu } from "react-burger-menu";
import IconDashboard from "../icons/IconDashboard";

const Nav = () => {
  return (
    <Menu isOpen={false} width={"216px"} noOverlay disableCloseOnEsc>
      <a id="home" className="menu-item" href="/">
        <IconDashboard /> Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
  );
};

export default Nav;
