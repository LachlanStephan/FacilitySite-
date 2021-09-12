import {Container, Row, Col, CardImg} from "reactstrap";
import ArrowRight from "../common/images/ArrowRight.png";
import doctor from "../common/images/doctorClipboard.jpg";

const PdfPageContent = () => {
	const arrowAlt = "Arrow icon";
	return (
		<Container style={{minHeight: "40vh", marginBottom: "1em"}}>
			<Row>
				<Col sm="12" lg="6" style={{marginTop: "0.5em"}}>
					<div className="listContainer">
						<div>
							<img src={ArrowRight} alt={arrowAlt} />
						</div>
						<div style={{textAlign: "left"}}>
							<p>
								Closest Level 3 Supported Accomodation to the
								Royal Brisbane Hospital
							</p>
						</div>
					</div>{" "}
					<div className="listContainer">
						<div>
							<img src={ArrowRight} alt={arrowAlt} />
						</div>
						<div style={{textAlign: "left"}}>
							<p>Staffed 24 hours a day</p>
						</div>
					</div>{" "}
					<div className="listContainer">
						<div>
							<img src={ArrowRight} alt={arrowAlt} />
						</div>
						<div style={{textAlign: "left"}}>
							<p>Safe, secure and supportive environemnt</p>
						</div>
					</div>{" "}
					<div className="listContainer">
						<div>
							<img src={ArrowRight} alt={arrowAlt} />
						</div>
						<div style={{textAlign: "left"}}>
							<p>Single and twin share rooms</p>
						</div>
					</div>{" "}
					<div className="listContainer">
						<div>
							<img src={ArrowRight} alt={arrowAlt} />
						</div>
						<div style={{textAlign: "left"}}>
							<p>3 nutritous meals per day</p>
						</div>
					</div>{" "}
					<div className="listContainer">
						<div>
							<img src={ArrowRight} alt={arrowAlt} />
						</div>
						<div style={{textAlign: "left"}}>
							<p>Morning & afternoon supper</p>
						</div>
					</div>{" "}
				</Col>
				<Col>
					<div className="listContainer">
						<div>
							<img src={ArrowRight} alt={arrowAlt} />
						</div>
						<div style={{textAlign: "left"}}>
							<p>Supervision of medication</p>
						</div>
					</div>{" "}
					<div className="listContainer">
						<div>
							<img src={ArrowRight} alt={arrowAlt} />
						</div>
						<div style={{textAlign: "left"}}>
							<p>Support with ongoing living skills</p>
						</div>
					</div>{" "}
					<div className="listContainer">
						<div>
							<img src={ArrowRight} alt={arrowAlt} />
						</div>
						<div style={{textAlign: "left"}}>
							<p>Assitance with adminstration and budgeting</p>
						</div>
					</div>{" "}
					<div className="listContainer">
						<div>
							<img src={ArrowRight} alt={arrowAlt} />
						</div>
						<div style={{textAlign: "left"}}>
							<p>Regular on-site medical doctor visits</p>
						</div>
					</div>{" "}
					<div className="listContainer">
						<div>
							<img src={ArrowRight} alt={arrowAlt} />
						</div>
						<div style={{textAlign: "left"}}>
							<p>Regualr podiatrist visits</p>
						</div>
					</div>{" "}
					<div className="listContainer">
						<div>
							<img src={ArrowRight} alt={arrowAlt} />
						</div>
						<div style={{textAlign: "left"}}>
							<p>
								Trained cleaning staff employed daily to clean
								facility
							</p>
						</div>
					</div>{" "}
					<div className="listContainer">
						<div>
							<img src={ArrowRight} alt={arrowAlt} />
						</div>
						<div style={{textAlign: "left"}}>
							<p>TV lounge and pool table area</p>
						</div>
					</div>
				</Col>
				<Col sm="12" lg="12" style={{margin: "auto"}}>
					<CardImg
						src={doctor}
						alt="Picture of Royal Brisbane Hospital"
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default PdfPageContent;
