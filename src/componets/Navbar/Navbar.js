import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/movimiento-rectilineo-uniforme.jpg";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="secondary" light expand="md">
        <NavbarBrand href="/">
          <img src={Logo} alt="alt-logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/">
                <strong>Información</strong>
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/simulacion">
                <strong>Simulación</strong>
              </Link>
            </NavItem>
          </Nav>
          <NavbarText>
            <strong>MRU</strong>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
