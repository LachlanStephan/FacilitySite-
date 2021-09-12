import emailjs from "emailjs-com";

export default function sendEmail(e) {
	e.preventDefault();
	emailjs
		.sendForm(
			"service_zikleyp",
			"template_sn9ldze",
			e.target,
			"user_McluR2AIEQNtd0q0ilNGC"
		)
		.then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	e.target.reset();
	alert("Your email has been sent!");
}
