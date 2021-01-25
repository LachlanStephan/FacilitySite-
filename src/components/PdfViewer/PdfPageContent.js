import { Container, Row, Col, CardImg } from "reactstrap";
import FakePageImg from "../common/images/FakePageImg.jpg";
import { List } from "reactstrap";

const PdfPageContent = () => {
  return (
    <Container style={{ minHeight: "40vh", marginBottom: "1em" }}>
      <Row>
        <Col sm="12" lg="6" style={{ marginTop: "1em" }}>
          <List type="unstyled" style={{ textAlign: "left" }}>
            <li>Staffed 24 hours a day</li>
            <li>Safe, secure and supportive environemnt</li>
            <li>Single and twin share rooms</li>
            <li>3 nutritous meals per day</li>
            <li>Morning & afternoon supper</li>
            <li>Supervision of medication</li>
            <li> Support with ongoing living skills</li>
            <li>Assitance with adminstration and budgeting</li>
            <li> Regular on-site medical doctor visits</li>
            <li>Regualr podiatrist visits</li>
            <li> Trained cleaning staff employed daily to clean facility</li>
            <li>TV lounge and pool table area</li>
          </List>
        </Col>
        <Col sm="12" lg="6" style={{ marginTop: "1em" }}>
          <CardImg src={FakePageImg} />
        </Col>
      </Row>
    </Container>
  );
};

export default PdfPageContent;
