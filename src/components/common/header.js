import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import CR_logo from '../../images/CR_logo.png';
import {CardImg} from 'reactstrap';

function Header() {
    return (
        <Container className="headerContainer">
            <Row>
                <Col>
                    <h1 className="purpleH1">Herston Lodge</h1>
                </Col>
                <Col>
                    <a href="./maintenance.js"><CardImg src={CR_logo} />
                    </a>
                </Col>
            </Row>
        </Container>
    )
}
export default Header;
