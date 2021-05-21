import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, } from 'reactstrap';
import CartSummary from "../cart/CartSummary";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" style={{marginLeft:"1em"}}>Reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="d-flex justify-content-end " isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/senoldogann">GitHub</NavLink>
            </NavItem>
            <CartSummary />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;