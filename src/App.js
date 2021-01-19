import "./App.css";
import Home from "./components/Home/home";
import Header from "./components/common/Header/header";
import { Container } from "reactstrap";
import Footer from "./components/common/Footer/footer";
import Contact from "./components/Contact/contact";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";
import PDF_viewer from "./components/PDF-viewer/PdfViewer";
// import PDF from "./components/PDF-viewer/PDF";

function App() {
  return (
    <Container className="App">
      <Header />
      <Home title="Herston Lodge" />
      <Contact title="Message us" />
      <PDF_viewer title="Herston Lodge screening tool" />
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
