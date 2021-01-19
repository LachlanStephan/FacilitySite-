import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from "reactstrap";
import PdfPrint from "./PdfPrint";
import PdfPageContent from "./PdfPageContent";

export default class PDF_viewer extends Component {
  state = {
    visible: false,
  };

  render() {
    const btnText = this.state.visible ? "hide" : "show";

    return (
      <Container id="pdf" style={{ minHeight: "100vh", paddingTop: "2em" }}>
        <Row>
          <Col>
            <h1 id="blue">{this.props.title}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              style={{ margin: "1em" }}
              onClick={() => {
                this.setState({ visible: !this.state.visible });
              }}
            >
              {btnText}
            </Button>
            {this.state.visible ? <PdfPrint /> : <PdfPageContent />}
          </Col>
        </Row>
      </Container>
    );
  }
}
