import React from "react";
import { Container, Row, Col } from "reactstrap";

const home = (props) => {
  const homeStlye = {
    height: "100vh",
  };

  return (
    <Container className="homeContainer" style={homeStlye}>
      <Row>
        <Col>
          <h1 id="blue">Herston Lodge</h1>

          <strong>(07) 3257 3488</strong>
        </Col>
      </Row>
    </Container>
  );
};

export default home;