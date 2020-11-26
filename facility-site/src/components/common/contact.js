import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import emailjs from 'emailjs-com';


export default function Contact() {


const userKey = process.env.REACT_APP_USER_KEY;


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_zikleyp', 'template_sn9ldze', e.target, userKey)
               .then((result) =>  {
                console.log(result.text);
              }, (error) => {
                console.log(error.text);
              });
                e.target.reset()
    }


    return (
        <Container className="contactForm">
            <form onSubmit={sendEmail} noValidate={true}>
                <fieldset>
                    <Row>
                        <Col>
                            <label htmlFor="name">First name</label>
                        </Col>
                        <Col>
                            <input type="text" name="name"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label htmlFor="surname">Surname</label>
                        </Col>
                        <Col>
                            <input type="text" name="surname"/></Col>
                    </Row>
                    <Row>
                        <Col>
                            <label htmlFor="message">Message</label>
                        </Col>
                        <Col>
                            <input type="text" name="message" id="msg" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label htmlFor="email">Email</label>
                        </Col>
                        <Col>
                            <input type="email" name="email"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label htmlFor="number">Ph-number</label>
                        </Col>
                        <Col>
                            <input type="tel" name="number"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <input type="submit" value="Submit"/>
                        </Col>
                    </Row>

                </fieldset>
            </form>
        </Container>

    )
    
}
