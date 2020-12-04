import React from 'react';
import {Container, Row, Col} from 'reactstrap';

import underMaintenancev2 from '../images/underMaintenancev2.jpg';
import {
    Card, CardImg, CardText,
    // CardBody,
    CardTitle,
    // CardSubtitle, Button
} from 'reactstrap';

function Maintenance() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardImg
                            className="maintenanceImg"
                            top
                            width="360"
                            height="234px"
                            src={underMaintenancev2}
                            alt="Construction worker saying the site is under maintenance"/>
                        <CardText className="contactText">
                            <h2>
                                <i>CareRITE Herston Lodge is building a new website so you can have a better experience when you make contact with us - in the meantime please call
                                    <strong>
                                        {' '}
                                        Ann Zemo</strong>, our facility manager in relation to <strong>level 3 supported accomodation {' '}</strong>availability (or for all other enquiries) on - <br></br><br></br>(07) <strong>3257 3488</strong></i>
                            </h2>
                        </CardText>
                    </Card>
                </Col>
            </Row>
            <hr></hr>
        </Container>

    )

}

export default Maintenance;