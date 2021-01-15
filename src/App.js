import "./App.css";
import Home from "./components/Home/home";
import Header from "./components/common/Header/header";
import { Container } from "reactstrap";
import Footer from "./components/common/Footer/footer";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <Container className="App">
      <Header title="Herston Lodge" />
      <Home />
      <Contact message="Message us" />
      <Footer
        title="Supported Accomodaton"
        title2="Herston Lodge"
        address="Butterfield Street, Herston"
      />
    </Container>
  );
}

export default App;
