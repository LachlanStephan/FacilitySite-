import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import sendEmail from "./common/sendEmail.js";

export default function Contact() {
  return (
    <Container className="contactForm">
      <form onSubmit={sendEmail} noValidate>
        <fieldset>
          <Row>
            <Col>
              <label htmlFor="name">First name</label>
            </Col>
            <Col>
              <input type="text" name="name" id="" placeholder="First name" />
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <label htmlFor="surname">Surname</label>
            </Col>
            <Col>
              <input type="text" name="surname" id="" placeholder="Surname" />
            </Col>
          </Row>
          <Row>
            <Col>
              <label htmlFor="message">Message</label>
            </Col>
            <Col>
              <input
                type="text"
                name="message"
                id="msgBox"
                placeholder="Your message"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <label htmlFor="email">Email</label>
            </Col>
            <Col>
              <input
                type="email"
                name="email"
                id=""
                placeholder="hello@gmail.com"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <label htmlFor="number">Ph-number</label>
            </Col>
            <Col>
              <input
                type="tel"
                name="number"
                id=""
                placeholder="0123 456 789"
              />
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
