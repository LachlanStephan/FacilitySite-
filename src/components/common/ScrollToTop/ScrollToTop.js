import react, { useState } from "react";
import { Button } from "reactstrap";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", checkScrollTop);
  return (
    <Button
      onClick={scrollTop}
      className="scrollTop"
      id="btn"
      style={{ display: showScroll ? "flex" : "none" }}
    >
      ^
    </Button>
  );
};
export default ScrollToTop;
