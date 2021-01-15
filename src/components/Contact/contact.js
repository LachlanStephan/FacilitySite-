import React from "react";
import { Container, Row, Col } from "reactstrap";
import sendEmail from "./sendEmail";
import nameError from "../errorFunctions/nameError";
import surnameError from "../errorFunctions/surnameError";
import messageError from "../errorFunctions/messageError";
import emailError from "../errorFunctions/emailError";
import numberError from "../errorFunctions/numberError";
import "./Contact.css";

const contact = (props) => {
  const errorStyle = {
    display: "none",
    color: "red",
  };

  const formStyle = {
    padding: "2em",
    width: "100%",
  };

  const contactStyle = {
    minHeight: "100vh",
    paddingTop: "5em",
    paddingBottom: "5em",
  };

  const inputStyle = {
    marginTop: "1em",
    height: "3em",
    width: "100%",
    border: "0.1px solid #a9a9a9",
    textAlign: "center",
    borderRadius: "5px",
  };

  return (
    <Container className="contactContainer" id="contact" style={contactStyle}>
      <h1 id="blue">{props.title}</h1>
      <form style={formStyle} className="contactForm" onSubmit={sendEmail}>
        <fieldset>
          <Row>
            <Col>
              <input
                type="text"
                name="name"
                placeholder="First name"
                required={true}
                onBlur={nameError}
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
            <Col>
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                required={true}
                onBlur={surnameError}
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
            <Col>
              <textarea
                id="txtArea"
                type="text"
                name="message"
                placeholder="Your message"
                required={true}
                onBlur={messageError}
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
            <Col>
              <input
                type="email"
                name="email"
                placeholder="hello@gmail.com"
                required={true}
                onBlur={emailError}
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
            <Col>
              <input
                type="tel"
                name="number"
                placeholder="0123 456 789"
                required={true}
                onBlur={numberError}
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
              <input type="submit" value="Submit" style={inputStyle} />
            </Col>
          </Row>
        </fieldset>
      </form>
    </Container>
  );
};

export default contact;
