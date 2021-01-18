import React, { Component } from "react";
import H_L_PDF_V2 from "../common/images/H_L_PDF_V2.jpg";
import { Container, Row, Col } from "reactstrap";
import { CardImg } from "reactstrap";

export default class extends Component {
  render() {
    const pdfContainer = {
      minHeight: "100vh",
    };

    return (
      <Container style={pdfContainer}>
        <Row>
          <Col>
            <CardImg src={H_L_PDF_V2} alt="Herston Lodge screening tool" />
          </Col>
        </Row>
      </Container>
    );
  }
}
