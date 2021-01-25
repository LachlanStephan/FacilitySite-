import "./App.css";
import PagesContainer from "./components/PagesContainer/PagesContainer";
import Header from "./components/common/Header/header";
import { Container } from "reactstrap";
import Footer from "./components/common/Footer/footer";
import Contact from "./components/Contact/contact";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";
import PdfViewer from "./components/PdfViewer/PdfViewer";
import Home from "./components/PagesContainer/Home";
import FakeHomeImg from "./components/common/images/FakeHomeImg.jpg";
import FakePageImg from "./components/common/images/FakePageImg.jpg";

function App() {
  return (
    <Container fluid={true} className="App">
      <Header link1="Message us" link2="PDF" />

      <Home title="Herston Lodge" img={FakeHomeImg} />
      <PagesContainer
        title="Why choose Herston Lodge?"
        content="Herston Lodge is the closest Level 3 Supported Accomodation to the Royal Brisbane Hospital and located on a large, spacious block with BBQ and grassed areas to the rear, backing on to Rasey Park for a beautiful parkland outlook"
        img={FakePageImg}
        text="Excellent transport nearby, with a bus stop at the door and within walking distance of Windsor shops and Fortitude Valley. Four Star Eat Safe Brisbane safety rating - wholesome, nutritous meals prodcued every day. Excellent staff that provide constant support and ecouragement to residents. Serval fully funded community agenices visit Herston Lodge and conduct RSP services and community linking to residents as well as onsite medical Doctor visit."
      />
      <PdfViewer title="Herston Lodge provides you with the following services" />
      <PagesContainer
        title="CareRITE Herston Lodge - NDIS"
        content="CareRITE Herston Lodge is a Registered Supported Residential Services provider and National Disability Insurance Shceme (NDIS) provider that has been established in to provide Supported Accomodation services to people in South East Queensland. Based in Herston, Queensland, CareRITE Herston Lodge provides 24-hour support services to its residetns. In addition to their Supported Accomodation services, CareRITE Herston Lodge provides supports to people across the community sector"
        img={FakePageImg}
        ndisText="CareRITE Herston Lodge provides the following NDIS Supports in accordance to the NDIS scheme to eligible participants"
        listItem1="Assistance with Daily Life Tasks in a Group or Shared Living Arrangement"
        listItem2="Community Participation, including Group and Centre Based Activities"
        listItem3="Development of Daily Living and Life Skills"
        lisItem4="Household Tasks"
        listItem5="Personal Activities"
        listItem6="Transport Assistance"
        lowerText="For more information about these services please call us on (07) 3257 3488 or message us"
      />
      <Contact title="Message us" />
      <ScrollToTop />
      <Footer
        title="Supported Accomodaton"
        title2="Herston Lodge"
        address="Butterfield Street, Herston"
        number="(07) 3257 3488"
        manager="Ann Zemo"
        ndisTag="Registered NDIS provider"
      />
    </Container>
  );
}

export default App;
