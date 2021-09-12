import React from "react";
import {Container, Row, Col, CardImg} from "reactstrap";

const Home = (props) => {
	const homeStyle = {
		minHeight: "20vh",
		margin: "0",
		marginBottom: "2em",
		padding: "0",
	};

	return (
		<Container fluid={true} style={homeStyle}>
			<Row>
				<Col>
					<h1 id="blue">{props.title}</h1>
				</Col>
			</Row>
			<Row id="imgRow" style={{marginTop: "1em"}}>
				<CardImg src={props.img} alt={props.alt} />
			</Row>
		</Container>
	);
};

export default Home;
