import React from "react";
import { Container, Row, Col, CardImg } from "reactstrap";
import { List } from "reactstrap";

const PagesContainer = (props) => {
  const PagesStyle = {
    minHeight: "50vh",
    paddingTop: "2em",
    paddingBottom: "2em",
  };

  return (
    <Container className="PagesContainer" style={PagesStyle}>
      <Row>
        <Col sm="12">
          <h1 id="blue">{props.title}</h1>
        </Col>
      </Row>
      <Row style={{ marginBottom: "5em" }}>
        <Col sm="12" style={{ marginTop: "1em" }}>
          <strong>{props.content}</strong>
        </Col>
      </Row>
      <Row style={{ marginTop: "10%" }}>
        <Col sm="12" lg="6" style={{ marginBottom: "2em" }}>
          <CardImg src={props.img} />
        </Col>
        <Col sm="12" lg="6">
          <p style={{ top: "10%", bottom: "10%" }}>{props.text}</p>
          <p style={{ textAlign: "left", fontSize: "20px" }}>
            {props.ndisText}
          </p>
          <List type="unstyled" style={{ textAlign: "left" }}>
            <li>{props.listItem1}</li>
            <li>{props.listItem2}</li>
            <li>{props.listItem3}</li>
            <li>{props.listItem4}</li>
            <li>{props.listItem5}</li>
            <li>{props.listItem6}</li>
          </List>
          <p style={{ textAlign: "left" }}>{props.lowerText}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default PagesContainer;
