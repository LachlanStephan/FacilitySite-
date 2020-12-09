import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {CardImg} from 'reactstrap';
import weHeartNDIS2020v3 from '../../images/weHeartNDIS2020v3.jpg';

const Footer = (props) => {

    return (
        <Container className="footerContainer">
            <Row>
                <Col className="footerHeadings">
                    <h1 className="purpleH1">Supported Accomodation</h1>
                    <h1 className="blueH1">Herston Lodge</h1>
                    <p>
                        <strong>Butterfield Street, Herston</strong>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="logoInfo">
                    <CardImg className="NDIS-logo" width="50" height="50" src={weHeartNDIS2020v3}/>
                    <h4>Registered NDIS Provider</h4>
                    {/* <CardImg src={tagRegisteredProviderv2} /> */}
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;