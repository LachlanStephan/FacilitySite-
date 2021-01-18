import React, { Component, useRef } from "react";
import ReactToPrint from "react-to-print";
import PDF from "./PDF";
import { Container, Row, Col, Button } from "reactstrap";

export default class PDF_toPrint extends Component {
  render() {
    const pdfPageStyle = {
      minHeight: "100vh",
      paddingTop: "2em",
    };

    return (
      <Container style={pdfPageStyle}>
        <Row>
          <Col>
            <ReactToPrint
              trigger={() => {
                // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                // to the root node of the returned component as it will be overwritten.
                return (
                  <Button style={{ marginBottom: "2em" }}>Print this</Button>
                );
              }}
              content={() => this.componentRef}
            />
            <PDF ref={(el) => (this.componentRef = el)} />
          </Col>
        </Row>
      </Container>
    );
  }
}
