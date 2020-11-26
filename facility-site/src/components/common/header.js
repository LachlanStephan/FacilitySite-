import React from 'react';
import {Container, Row, Col} from 'reactstrap';

function Header() {
    return (
        <Container className="headerContainer">
            <Row>
                <Col>
                    <h1>Facility Site</h1>
                </Col>
                <hr></hr>
            </Row>
        </Container>
    )
}
export default Header;