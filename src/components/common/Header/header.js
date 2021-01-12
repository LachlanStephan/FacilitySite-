// import React from "react";
// import { Container, Row, Col } from "reactstrap";
// import CR_logo from "../../images/CR_logo.png";
// import { CardImg } from "reactstrap";

// const Header = (props) => {
//   return (
//     <Container className="headerContainer" id="header">
//       <Row>
//         <Col className="headerCol">
//           <a href="/header">
//             <CardImg src={CR_logo} />
//           </a>
//         </Col>
//         <Col className="herstonHeading">
//           <h1 className="blueH1">{props.title}</h1>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <a className="links" href="#header">
//             Home
//           </a>
//           <a className="links" href="#contact">
//             Message us
//           </a>
//         </Col>
//       </Row>
//     </Container>
//   );
// };
// export default Header;

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  Row,
  Col,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container>
      <Row></Row>
      <Row>
        <Col>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    GitHub
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <NavbarText>Simple Text</NavbarText>
            </Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
