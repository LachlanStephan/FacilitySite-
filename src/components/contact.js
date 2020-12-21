import React from "react";
import { Container, Row, Col } from "reactstrap";
import sendEmail from "./common/sendEmail.js";
import { useFormik } from "formik";
// import { Button } from "reactstrap";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 20) {
    errors.name = "Must be 20 characters or less";
  }

  if (!values.surname) {
    errors.surname = "Required";
  } else if (values.surname.length > 20) {
    errors.surname = "Must be 20 characters or less";
  }

  if (!values.message) {
    errors.message = "Required";
  } else if (values.message.length < 3) {
    errors.message = "Please enter a message";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.number) {
    errors.number = "Required";
  } else if (!/^\d{10}$/.test(values.number)) {
    errors.number = "Please provide a 9 digit number with no spaces";
  }

  return errors;
};

const Contact = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      message: "",
      email: "",
      number: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      alert("Your email has been sent!");
    },
  });

  return (
    <Container className="contactForm">
      <form onSubmit={sendEmail} onSubmit={formik.handleSubmit}>
        <fieldset>
          <Row>
            <Col>
              <label htmlFor="name">First name</label>
            </Col>
            <Col>
              <input
                type="text"
                name="name"
                id="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                placeholder="First name"
              />
              <Col className="errorCols">
                {formik.errors.name ? <div>{formik.errors.name}</div> : null}
              </Col>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <label htmlFor="surname">Surname</label>
            </Col>
            <Col>
              <input
                type="text"
                name="surname"
                id="surname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.surname}
                placeholder="Surname"
              />
              <Col className="errorCols">
                {formik.errors.surname ? (
                  <div>{formik.errors.surname}</div>
                ) : null}
              </Col>
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
                id="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                placeholder="Your message"
              />
              <Col className="errorCols">
                {formik.errors.message ? (
                  <div>{formik.errors.message}</div>
                ) : null}
              </Col>
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
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="hello@gmail.com"
              />
              <Col className="errorCols">
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
              </Col>
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
                id="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
                placeholder="0123 456 789"
              />
              <Col className="errorCols">
                {formik.errors.number ? (
                  <div>{formik.errors.number}</div>
                ) : null}
              </Col>
            </Col>
          </Row>
          <Row>
            <Col>
              <input id="btn" type="submit" value="Submit" />
            </Col>
          </Row>
        </fieldset>
      </form>
    </Container>
  );
};

export default Contact;
