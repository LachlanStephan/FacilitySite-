import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col, CardImg } from "reactstrap";
import { List } from "reactstrap";

const PagesContainer = (props) => {
  const PagesStyle = {
    minHeight: "50vh",
    paddingTop: "2em",
    paddingBottom: "2em",
  };

  return (
    <Container className="PagesContainer" style={PagesStyle}>
      <Row>
        <Col sm="12">
          <h1 id="blue">{props.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={props.NDISimg} />
        </Col>
      </Row>
      <Row style={{ marginBottom: "2em" }}>
        <Col sm="12" style={{ marginTop: "1em" }}>
          <strong>{props.content}</strong>
        </Col>
      </Row>
      <Row style={{ marginTop: "1em" }}>
        <Col sm="12" lg="6" style={{ marginBottom: "2em" }}>
          <CardImg src={props.img} />
        </Col>
        <Col sm="12" lg="6">
          <p style={{ textAlign: "left", fontSize: "20px" }}>{props.text}</p>
          <div className="listContainer">
            <div>
              <img src={props.arrow1} />
            </div>
            <div style={{ textAlign: "left" }}>
              <p>{props.listItem1}</p>
            </div>
          </div>{" "}
          <div className="listContainer">
            <div>
              <img src={props.arrow2} />
            </div>
            <div style={{ textAlign: "left" }}>
              <p>{props.listItem2}</p>
            </div>
          </div>{" "}
          <div className="listContainer">
            <div>
              <img src={props.arrow3} />
            </div>
            <div style={{ textAlign: "left" }}>
              <p>{props.listItem3}</p>
            </div>
          </div>{" "}
          <div className="listContainer">
            <div>
              <img src={props.arrow4} />
            </div>
            <div style={{ textAlign: "left" }}>
              <p>{props.listItem4}</p>
            </div>
          </div>{" "}
          <div className="listContainer">
            <div>
              <img src={props.arrow5} />
            </div>
            <div style={{ textAlign: "left" }}>
              <p>{props.listItem5}</p>
            </div>
          </div>{" "}
          <div className="listContainer">
            <div>
              <img src={props.arrow6} />
            </div>
            <div style={{ textAlign: "left" }}>
              <p>{props.listItem6}</p>
            </div>
          </div>
          {/* <List type="unstyled" id="list" style={{ textAlign: "left" }}>
            <Row>
              <Col style={{ width: "1em" }}>
                <img style={ImgStyle} src={props.arrow} />
              </Col>
              <Col>{props.listItem1}</Col>
            </Row>
            <Row>
              <Col>
                <img style={ImgStyle} src={props.arrow} />
                {props.listItem2}
              </Col>
            </Row>{" "}
            <Row>
              <Col>
                <img style={ImgStyle} src={props.arrow} />
                {props.listItem3}
              </Col>
            </Row>{" "}
            <Row>
              <Col>
                <img style={ImgStyle} src={props.arrow} />
                {props.listItem4}
              </Col>
            </Row>{" "}
            <Row>
              <Col>
                <img style={ImgStyle} src={props.arrow} />
                {props.listItem5}
              </Col>
            </Row>
          </List> */}
          <p style={{ textAlign: "left" }}>{props.lowerText}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default PagesContainer;
