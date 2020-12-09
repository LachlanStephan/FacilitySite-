import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import CR_logo from '../../images/CR_logo.png';
import {CardImg} from 'reactstrap';

function Header() {
    return (
        <Container className="headerContainer">
            <Row>
                <Col className="headerCol">
                    <a href="./maintenance.js"><CardImg src={CR_logo}/></a>
                </Col>
                <Col className="herstonHeading">
                    <h1 className="blueH1">Herston Lodge</h1>
                </Col>
            </Row>
        </Container>
    )
}
export default Header;
