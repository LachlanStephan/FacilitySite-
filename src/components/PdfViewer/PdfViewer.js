import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from "reactstrap";
import PdfPrint from "./PdfPrint";
import PdfPageContent from "./PdfPageContent";

export default class pdfViewer extends Component {
  state = {
    visible: false,
  };

  render() {
    const btnText = this.state.visible
      ? "Click to view our services"
      : "Click to view and or print our 'resident application form'";

    return (
      <Container id="pdf" style={{ marginBottom: "2em" }}>
        <Row>
          <Col>
            <h1 id="blue">{this.props.title}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              color="link"
              style={{ margin: "1em" }}
              onClick={() => {
                this.setState({ visible: !this.state.visible });
              }}
            >
              {btnText}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>{this.state.visible ? <PdfPrint /> : <PdfPageContent />}</Col>
        </Row>
      </Container>
    );
  }
}
