import React from "react";
import { Container, Row, Col } from "reactstrap";
import sendEmail from "./common/sendEmail";
import nameError from "./common/errorFunctions/nameError";
import surnameError from "./common/errorFunctions/surnameError";
import messageError from "./common/errorFunctions/messageError";
import emailError from "./common/errorFunctions/emailError";
import numberError from "./common/errorFunctions/numberError";

export default function contact() {
  return (
    <Container className="contactForm">
      <form onSubmit={sendEmail}>
        <fieldset>
          <Row>
            <Col>
              {/* <label htmlFor="name">First name</label> */}
            </Col>
            <Col>
              <input
                type="text"
                name="name"
                placeholder="First name"
                required={true}
                onChange={nameError}
                id="name"
              />
            </Col>
            <Col className="errorCol">
              <p id="nameError">Please enter your first name</p>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* <label htmlFor="surname">Surname</label> */}
            </Col>
            <Col>
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                required={true}
                onChange={surnameError}
                id="surname"
              />
            </Col>
            <Col className="errorCol">
              <p id="surnameError">Please enter your surname</p>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* <label htmlFor="message">Message</label> */}
            </Col>
            <Col>
              <textarea
                type="text"
                name="message"
                id="msg"
                placeholder="Your message"
                required={true}
                onChange={messageError}
              />
            </Col>
            <Col className="errorCol">
              <p id="msgError">Please leave a message</p>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* <label htmlFor="email">Email</label> */}
            </Col>
            <Col>
              <input
                type="email"
                name="email"
                placeholder="hello@gmail.com"
                required={true}
                onChange={emailError}
                id="email"
              />
            </Col>
            <Col className="errorCol">
              <p id="emailError">Please enter a valid email</p>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* <label htmlFor="number">Ph-number</label> */}
            </Col>
            <Col>
              <input
                type="tel"
                name="number"
                placeholder="0123 456 789"
                required={true}
                onChange={numberError}
                id="number"
              />
            </Col>
            <Col className="errorCol">
              <p id="numberError">Please enter a valid number</p>
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
}
