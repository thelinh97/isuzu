import React, { useState } from "react";
import logoIsuzu from "../img/logo-2.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img src={logoIsuzu} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto " navbar>
            <NavItem>
              <NavLink className="menu" activeClassName="active" exact to="/">
                trang chủ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="menu" activeClassName="active" to="/intro">
                giới thiệu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="menu" activeClassName="active" to="/pay">
                thanh toán
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="menu" activeClassName="active" to="/offer">
                khuyến mãi
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="menu" activeClassName="active" to="/about">
                liên hệ
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <a className="hotline " href="tel:123-456-7890">
              HOTLINE MUA HÀNG (24/7)
              <br />
              0914 555 798
            </a>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
