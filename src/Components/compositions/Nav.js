import React from "react";
import { stack as Menu } from "react-burger-menu";
import IconDashboard from "../icons/IconDashboard";
import styled from "styled-components";

const MenuItem = styled.a`
  display: flex;
  width: 216px;
  padding: 9px 0px 9px 30px;
  color: #486382;
  height: 21px;
  transition: 0.4s ease-out;
  &:hover {
    background-color: var(--primary);
    color: #ffffff;
  }
`;

const Item = styled.div`
  font-size: 16px;
  font-weight: bold;

  display: flex;
  text-decoration: none;
`;

const Icon = styled.div`
  width: 14px;
  height: 14px;
  margin-right: 20px;
  object-fit: contain;
`;

const Nav = () => {
  return (
    <Menu isOpen={false} width={"216px"} noOverlay disableCloseOnEsc>
      <MenuItem href="/" className="transition">
        <Item>
          <Icon>
            <IconDashboard />
          </Icon>
          Dashboard
        </Item>
      </MenuItem>

      <MenuItem href="/" className="transition">
        <Item>
          <Icon>
            <IconDashboard />
          </Icon>
          Mentions
        </Item>
      </MenuItem>

      <MenuItem href="/" className="transition">
        <Item>
          <Icon>
            <IconDashboard />
          </Icon>
          Leads
        </Item>
      </MenuItem>

      <MenuItem href="/" className="transition">
        <Item>
          <Icon>
            <IconDashboard />
          </Icon>
          Reports
        </Item>
      </MenuItem>
    </Menu>
  );
};

export default Nav;
