import React from 'react';
import {Container, Row, Col} from 'reactstrap';

const Footer = (props) => {

    return (
        <Container className="footerContainer">
            <Row>
              <Col>
                <hr></hr>
                <h1>Something</h1>
              </Col> 
            </Row>
        </Container>
    );
}

export default Footer;