import React, { useState } from "react";
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
    <Container style={{ marginBottom: "5em", marginTop: "1em" }} id="header">
      <Row>
        <Col>
          <Navbar color="" light expand="md" style={navStyle}>
            <NavbarBrand href="/" id="blue">
              <img src={CR_logo} />
            </NavbarBrand>
            <NavbarToggler
              onClick={toggle}
              style={{ border: "1px solid #ccc" }}
            />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="#contact">
                    <strong>Message us</strong>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pdf">
                    <strong>PDF</strong>
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
