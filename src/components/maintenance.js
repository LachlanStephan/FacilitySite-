import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import underMaintenancev3 from '../images/underMaintenancev3.jpg';

import {
    Card, CardImg, CardText,
    // CardBody,
    CardTitle,
    // CardSubtitle, Button
} from 'reactstrap';

function Maintenance() {
    return (
        <Container className="maintenanceContainer">
            <Row>
                <Col>
                    <Card>
                        <CardImg
                            className="maintenanceImg"
                            top
                            src={underMaintenancev3}
                            alt="Construction worker saying the site is under maintenance"/>
                        <CardText className="contactText">
                            <h2>
                                <i>CareRITE Herston Lodge is building a new website so you can have a better
                                    experience when you make contact with us - in the meantime please call
                                    <strong>
                                        {' '}
                                        Ann Zemo</strong>, our facility manager in relation to
                                    <strong>level 3 supported accomodation {' '}</strong>availability (or for all other enquiries) on -
                                </i>
                            </h2>
                        </CardText>
                    </Card>
                </Col>
                <Col>
                    <h1 className="blueH1">
                        <strong>(07) {' '}3257 3488</strong>
                    </h1>
                </Col>
            </Row>
            <hr></hr>
        </Container>

    )

}

export default Maintenance;