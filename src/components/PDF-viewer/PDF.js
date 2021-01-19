import React, { Component } from "react";
import H_L_PDF_V3 from "../common/images/H_L_PDF_V3.jpg";
import { Container, Row, Col } from "reactstrap";
import { CardImg } from "reactstrap";

export default class Pdf extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <CardImg src={H_L_PDF_V3} alt="Herston Lodge screening tool" />
          </Col>
        </Row>
      </Container>
    );
  }
}
