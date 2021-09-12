import {useState} from "react";
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleUp} from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 500) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 500) {
			setShowScroll(false);
		}
	};
	const scrollTop = () => {
		window.scrollTo({top: 0, behavior: "smooth"});
	};
	window.addEventListener("scroll", checkScrollTop);
	return (
		<Button
			onClick={scrollTop}
			className="scrollTop"
			id="btn"
			style={{display: showScroll ? "flex" : "none"}}
		>
			<FontAwesomeIcon icon={faArrowAltCircleUp} />
		</Button>
	);
};
export default ScrollToTop;
