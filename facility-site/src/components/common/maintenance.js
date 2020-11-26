import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import underMaintenance from '../../images/underMaintenance.jpg';
import {
    Card,
    CardImg,
    // CardText,
    CardBody,
    CardTitle,
    // CardSubtitle,
    // Button
} from 'reactstrap';

function Maintenance() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardTitle>
                            <p>Some text</p>
                        </CardTitle>
                        <CardImg
                            top
                            width="70%"
                            height=""
                            src={underMaintenance}
                            alt="Construction worker saying the site is under maintenance"/>
                        <CardBody></CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>

    )

}

export default Maintenance;