import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import underMaintenancev3 from '../images/underMaintenancev3.jpg';

import {
    Card,
    CardImg,
    CardText,
} from 'reactstrap';

function maintenance() {
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
                            <p>
                                <i>CareRITE Herston Lodge is building a new website so you can have a better
                                    experience when you contact us. In the meantime please call
                                    <strong>
                                        {' '}
                                        Ann Zemo</strong>, our facility manager in relation to
                                    <strong>{' '}level 3 supported accomodation {' '}</strong>availability (or for all other enquiries) on -
                                </i>
                            </p>
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

export default maintenance;