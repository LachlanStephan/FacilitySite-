import React from "react";
import { Container, Row, Col } from "reactstrap";
import weHeartNDIS2020v3 from "../images/weHeartNDIS2020v3.jpg";
// import tagRegisteredProviderv2 from "../images/tagRegisteredProviderv2.jpg";

const Footer = (props) => {
  return (
    <Container className="footerContainer" style={{ marginTop: "2em" }}>
      <Row>
        <Col sm="12">
          <h3 id="purple">{props.title}</h3>
        </Col>
        <Col sm="12">
          <h3 id="blue">{props.title2}</h3>
        </Col>
        <Col sm="12">
          <h6 style={{ color: "#a9a9a9", marginTop: "8px" }}>
            <strong>{props.address}</strong>
          </h6>
        </Col>
      </Row>
      <Row style={{ marginTop: "4em", marginBottom: "4em" }}>
        <Col>
          <img
            src={weHeartNDIS2020v3}
            alt="NDIS logo"
            style={{ padding: "0.5em" }}
          />
          <p>{props.ndisTag}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
