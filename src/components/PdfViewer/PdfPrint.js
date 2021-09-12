import React, {Component} from "react";
import ReactToPrint from "react-to-print";
import Pdf from "./PDF";
import {Container, Row, Col, Button} from "reactstrap";

export default class PDF_print extends Component {
	render() {
		const pdfPageStyle = {
			paddingTop: "2em",
		};

		return (
			<Container style={pdfPageStyle}>
				<Row>
					<Col>
						<ReactToPrint
							trigger={() => {
								// NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
								// to the root node of the returned component as it will be overwritten.
								return (
									<Button
										color="success"
										style={{marginBottom: "2em"}}
									>
										Print this
									</Button>
								);
							}}
							content={() => this.componentRef}
						/>
						<Pdf ref={(el) => (this.componentRef = el)} />
					</Col>
				</Row>
			</Container>
		);
	}
}
