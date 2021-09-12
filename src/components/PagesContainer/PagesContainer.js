import React from "react";
import {Container, Row, Col, CardImg} from "reactstrap";

const PagesContainer = (props) => {
	const PagesStyle = {
		minHeight: "50vh",
		marginBottom: "2em",
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
					<img src={props.NDISimg} alt={props.ndisAlt} />
				</Col>
			</Row>
			<Row style={{marginBottom: "2em"}}>
				<Col sm="12" style={{marginTop: "1em", textAlign: "left"}}>
					<strong>{props.content}</strong>
				</Col>
			</Row>
			<Row style={{marginTop: "1em"}}>
				<Col sm="12" lg="6" style={{marginBottom: "2em"}}>
					<CardImg src={props.img} alt={props.alt} />
				</Col>
				<Col sm="12" lg="6">
					<p style={{textAlign: "left", fontSize: "16px"}}>
						{props.text}
					</p>
					<div className="listContainer">
						<div>
							<img src={props.arrow} alt={props.ArrowAlt} />
						</div>
						<div style={{textAlign: "left"}}>
							<p>{props.listItem1}</p>
						</div>
					</div>{" "}
					<div className="listContainer">
						<div>
							<img src={props.arrow} alt={props.ArrowAlt} />
						</div>
						<div style={{textAlign: "left"}}>
							<p>{props.listItem2}</p>
						</div>
					</div>{" "}
					<div className="listContainer">
						<div>
							<img src={props.arrow} alt={props.ArrowAlt} />
						</div>
						<div style={{textAlign: "left"}}>
							<p>{props.listItem3}</p>
						</div>
					</div>{" "}
					<div className="listContainer">
						<div>
							<img src={props.arrow} alt={props.ArrowAlt} />
						</div>
						<div style={{textAlign: "left"}}>
							<p>{props.listItem4}</p>
						</div>
					</div>{" "}
					<div className="listContainer">
						<div>
							<img src={props.arrow} alt={props.ArrowAlt} />
						</div>
						<div style={{textAlign: "left"}}>
							<p>{props.listItem5}</p>
						</div>
					</div>{" "}
					<div className="listContainer">
						<div>
							<img src={props.arrow2} alt={props.ArrowAlt} />
						</div>
						<div style={{textAlign: "left"}}>
							<p>{props.listItem6}</p>
						</div>
					</div>
					<div style={{textAlign: "left"}}>
						<p>{props.listItem7}</p>
					</div>
					<p style={{textAlign: "left"}}>{props.lowerText}</p>
				</Col>
			</Row>
		</Container>
	);
};

export default PagesContainer;
