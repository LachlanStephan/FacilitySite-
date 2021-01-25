import React, { useState } from "react";
import "./header.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
} from "reactstrap";
import CR_logo from "../images/CR_logo.png";

const Header = (props) => {
  const navStyle = {
    height: "auto",
    textAlign: "center",
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container style={{ marginTop: "1em" }} id="header">
      <Row>
        <Col>
          <Navbar color="" light expand="md" style={navStyle}>
            <NavbarBrand href="/" id="blue">
              <img src={CR_logo} />
            </NavbarBrand>
            <NavbarToggler
              id="navToggle"
              onClick={toggle}
              style={{ border: "1px solid #ccc" }}
            />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="#contact">
                    <strong>{props.link1}</strong>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pdf">
                    <strong>{props.link2}</strong>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
