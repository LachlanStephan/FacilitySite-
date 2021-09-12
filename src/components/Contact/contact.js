import React, {useState} from "react";
import {Container, Row, Col} from "reactstrap";
import sendEmail from "./sendEmail";

const Contact = (props) => {
	const formStyle = {
		paddingBottom: "2em",
		width: "100%",
	};

	const contactStyle = {
		minHeight: "50vh",
		paddingTop: "2em",
		marginBottom: "2em",
	};

	const inputStyle = {
		marginTop: "1em",
		height: "3em",
		width: "100%",
		border: "0.1px solid #a9a9a9",
		textAlign: "center",
		borderRadius: "5px",
	};

	// default state for input
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [message, setMessage] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");

	// error messages
	const [nameErr, setNameErr] = useState("");
	const [surnameErr, setSurnameErr] = useState("");
	const [messageErr, setMessageErr] = useState("");
	const [emailErr, setEmailErr] = useState("");
	const [numberErr, setNumberErr] = useState("");

	// Validate name
	const valName = () => {
		if (name.length < 1) {
			setNameErr("Please enter your name");
		} else {
			setNameErr("");
		}
	};

	//Validate surname
	const valSurname = () => {
		if (surname.length < 1) {
			setSurnameErr("Please enter your surname");
		} else {
			setSurnameErr("");
		}
	};

	// Validate message
	const valMessage = () => {
		if (message.length < 5) {
			setMessageErr("Please leave us a message");
		} else {
			setMessageErr("");
		}
	};

	// Validate email
	const valEmail = () => {
		if (!email.includes("@") && !email.includes(".com")) {
			setEmailErr("Please enter a valid email");
		} else {
			setEmailErr("");
		}
	};

	// Validate number
	const valNumber = () => {
		if (number.length <= 9 || number.length >= 13) {
			setNumberErr("Please enter a valid number");
		} else {
			setNumberErr("");
		}
	};

	// conditionally set status of button
	const allowSubmit = () => {
		if (
			name.length < 1 ||
			surname.length < 1 ||
			message.length < 3 ||
			!email.includes("@" && ".com") ||
			number.length <= 9 ||
			number.length >= 13
		) {
			return true;
		} else {
			return false;
		}
	};

	const statusCheck = allowSubmit();

	return (
		<Container
			className="contactContainer"
			id="contact"
			style={contactStyle}
		>
			<h1 id="blue">{props.title}</h1>
			<Row>
				<Col style={{textAlign: "left", marginTop: "1em"}}>
					<strong>{props.text}</strong>
					<strong>{props.text2}</strong>
				</Col>
			</Row>
			<Row>
				<Col>{/* <h5 id="blue">{props.subTitle}</h5> */}</Col>
			</Row>
			<form
				style={formStyle}
				className="contactForm"
				onSubmit={sendEmail}
			>
				<fieldset>
					<Row>
						<Col>
							<input
								type="text"
								name="name"
								placeholder="First name"
								required={true}
								value={name}
								onChange={(e) => setName(e.target.value)}
								onBlur={valName}
								id="name"
								style={inputStyle}
							/>
						</Col>
					</Row>
					<Row>
						<Col id="errRed">{nameErr}</Col>
					</Row>
					<Row>
						<Col>
							<input
								type="text"
								name="surname"
								placeholder="Surname"
								required={true}
								value={surname}
								onChange={(e) => setSurname(e.target.value)}
								onBlur={valSurname}
								id="surname"
								style={inputStyle}
							/>
						</Col>
					</Row>
					<Row>
						<Col id="errRed">{surnameErr}</Col>
					</Row>
					<Row>
						<Col>
							<textarea
								id="txtArea"
								type="text"
								name="message"
								placeholder="Your message"
								required={true}
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								onBlur={valMessage}
								style={inputStyle}
							/>
						</Col>
					</Row>
					<Row>
						<Col id="errRed">{messageErr}</Col>
					</Row>
					<Row>
						<Col>
							<input
								type="email"
								name="email"
								placeholder="hello@gmail.com"
								required={true}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								onBlur={valEmail}
								id="email"
								style={inputStyle}
							/>
						</Col>
					</Row>
					<Row>
						<Col id="errRed">{emailErr}</Col>
					</Row>
					<Row>
						<Col>
							<input
								type="text"
								name="number"
								placeholder="0123 456 789"
								required={true}
								value={number}
								onChange={(e) => setNumber(e.target.value)}
								onBlur={valNumber}
								id="number"
								style={inputStyle}
							/>
						</Col>
					</Row>
					<Row>
						<Col id="errRed">{numberErr}</Col>
					</Row>
					<Row>
						<Col>
							<input
								disabled={statusCheck}
								type="submit"
								value="Submit"
								style={inputStyle}
								id="formSubmit"
							/>
						</Col>
					</Row>
				</fieldset>
			</form>
		</Container>
	);
};

export default Contact;
