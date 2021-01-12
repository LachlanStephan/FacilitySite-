import React from "react";
import { Container, Row, Col } from "reactstrap";
import sendEmail from "./sendEmail";
import nameError from "../errorFunctions/nameError";
import surnameError from "../errorFunctions/surnameError";
import messageError from "../errorFunctions/messageError";
import emailError from "../errorFunctions/emailError";
import numberError from "../errorFunctions/numberError";

const contact = (props) => {
  const errorStyle = {
    display: "none",
    color: "red",
  };

  const formStyle = {
    padding: "2em",
    width: "100%",
  };

  const inputStyle = {
    marginTop: "1em",
    height: "4em",
    width: "100%",
  };

  return (
    <Container className="contactContainer" id="contact">
      <h1 className="blueH1">{props.message}</h1>
      <form style={formStyle} className="contactForm" onSubmit={sendEmail}>
        <fieldset>
          <Row>
            {/* <Col>{/* <label htmlFor="name">First name</label> </Col> */}
            <Col>
              <input
                type="text"
                name="name"
                placeholder="First name"
                required={true}
                onChange={nameError}
                id="name"
                style={inputStyle}
              />
            </Col>
          </Row>
          <Row className="errorCol">
            <Col>
              <p id="nameError" style={errorStyle}>
                Please enter your first name
              </p>
            </Col>
          </Row>
          <Row>
            {/* <Col><label htmlFor="surname">Surname</label></Col> */}
            <Col>
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                required={true}
                onChange={surnameError}
                id="surname"
                style={inputStyle}
              />
            </Col>
          </Row>
          <Row className="errorCol">
            <Col>
              <p id="surnameError" style={errorStyle}>
                Please enter your surname
              </p>
            </Col>
          </Row>
          <Row>
            {/* <Col><label htmlFor="message">Message</label></Col> */}
            <Col>
              <textarea
                type="text"
                name="message"
                id="msg"
                placeholder="Your message"
                required={true}
                onChange={messageError}
                style={inputStyle}
              />
            </Col>
          </Row>
          <Row className="errorCol">
            <Col>
              <p id="msgError" style={errorStyle}>
                Please leave a message
              </p>
            </Col>
          </Row>
          <Row>
            {/* <Col><label htmlFor="email">Email</label></Col> */}
            <Col>
              <input
                type="email"
                name="email"
                placeholder="hello@gmail.com"
                required={true}
                onChange={emailError}
                id="email"
                style={inputStyle}
              />
            </Col>
          </Row>
          <Row className="errorCol">
            <Col>
              <p id="emailError" style={errorStyle}>
                Please enter a valid email
              </p>
            </Col>
          </Row>
          <Row>
            {/* <Col><label htmlFor="number">Ph-number</label></Col> */}
            <Col>
              <input
                type="tel"
                name="number"
                placeholder="0123 456 789"
                required={true}
                onChange={numberError}
                id="number"
                style={inputStyle}
              />
            </Col>
          </Row>
          <Row className="errorCol">
            <Col>
              <p id="numberError" style={errorStyle}>
                Please enter a valid number
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <input type="submit" value="Submit" />
            </Col>
          </Row>
        </fieldset>
      </form>
    </Container>
  );
};

export default contact;
