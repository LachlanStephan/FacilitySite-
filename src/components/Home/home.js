import React from "react";
import { Container, Row, Col } from "reactstrap";
// import underMaintenancev3 from "../images/underMaintenancev3.jpg";

import { Card, CardImg, CardText } from "reactstrap";

const home = (props) => {
  return (
    <Container className="homeContainer">
      <Row>
        <Col>
          <h1 className="blueH1">
            <strong>(07) 3257 3488</strong>
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default home;
