import "./App.css";
import Home from "./components/Home/home";
import Header from "./components/common/Header/header";
import { Container } from "reactstrap";
import Footer from "./components/common/Footer/footer";
import Contact from "./components/Contact/contact";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Container className="App">
      <Header title="Herston Lodge" />
      <Home />
      <Contact title="Message us" />
      <ScrollToTop />
      <Footer
        title="Supported Accomodaton"
        title2="Herston Lodge"
        address="Butterfield Street, Herston"
        ndisTag="Registered NDIS provider"
      />
    </Container>
  );
}

export default App;
