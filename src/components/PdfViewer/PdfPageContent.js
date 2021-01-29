import { Container, Row, Col, CardImg } from "reactstrap";
import FakePageImg from "../common/images/FakePageImg.jpg";
import { List } from "reactstrap";
import ArrowRight from "../common/images/ArrowRight.png";

const PdfPageContent = () => {
  return (
    <Container style={{ minHeight: "40vh", marginBottom: "1em" }}>
      <Row>
        <Col sm="12" lg="6" style={{ marginTop: "0.5em" }}>
          <div className="listContainer">
            <div>
              <img src={ArrowRight} />
            </div>
            <div style={{ textAlign: "left" }}>
              <p>Staffed 24 hours a day</p>
            </div>
          </div>{" "}
          <div className="listContainer">
            <div>
              <img src={ArrowRight} />
            </div>
            <div style={{ textAlign: "left" }}>
              <p>Safe, secure and supportive environemnt</p>
            </div>
          </div>{" "}
          <div className="listContainer">
            <div>
              <img src={ArrowRight} />
            </div>
            <div style={{ textAlign: "left" }}>
              <p>Single and twin share rooms</p>
            </div>
          </div>{" "}
          <div className="listContainer">
            <div>
              <img src={ArrowRight} />
            </div>
            <div style={{ textAlign: "left" }}>
              <p>3 nutritous meals per day</p>
            </div>
          </div>{" "}
          <div className="listContainer">
            <div>
              <img src={ArrowRight} />
            </div>
            <div style={{ textAlign: "left" }}>
              <p>Morning & afternoon supper</p>
            </div>
          </div>{" "}
          <div className="listContainer">
            <div>
              <img src={ArrowRight} />
            </div>
            <div style={{ textAlign: "left" }}>
              <p>Supervision of medication</p>
            </div>
          </div>{" "}
          <div className="listContainer">
            <div>
              <img src={ArrowRight} />
            </div>
            <div style={{ textAlign: "left" }}>
              <p>Support with ongoing living skills</p>
            </div>
          </div>{" "}
          <div className="listContainer">
            <div>
              <img src={ArrowRight} />
            </div>
            <div style={{ textAlign: "left" }}>
              <p>Assitance with adminstration and budgeting</p>
            </div>
          </div>{" "}
          <div className="listContainer">
            <div>
              <img src={ArrowRight} />
            </div>
            <div style={{ textAlign: "left" }}>
              <p>Regular on-site medical doctor visits</p>
            </div>
          </div>{" "}
          <div className="listContainer">
            <div>
              <img src={ArrowRight} />
            </div>
            <div style={{ textAlign: "left" }}>
              <p>Regualr podiatrist visits</p>
            </div>
          </div>{" "}
          <div className="listContainer">
            <div>
              <img src={ArrowRight} />
            </div>
            <div style={{ textAlign: "left" }}>
              <p>Trained cleaning staff employed daily to clean facility</p>
            </div>
          </div>{" "}
          <div className="listContainer">
            <div>
              <img src={ArrowRight} />
            </div>
            <div style={{ textAlign: "left" }}>
              <p>TV lounge and pool table area</p>
            </div>
          </div>
        </Col>
        <Col sm="12" lg="6" style={{ marginTop: "1em" }}>
          <CardImg src={FakePageImg} />
        </Col>
      </Row>
    </Container>
  );
};

export default PdfPageContent;
