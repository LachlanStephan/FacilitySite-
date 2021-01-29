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
import weHeartNDIS2020V3 from "./components/common/images/weHeartNDIS2020v3.jpg";
import ArrowRight from "./components/common/images/ArrowRight.png";

function App() {
  return (
    <Container fluid={true} className="App">
      <Header link1="Contact us" link2="Resident Application Form" />

      <Home title="Herston Lodge" img={FakeHomeImg} />
      <PagesContainer
        title="Why choose Herston Lodge?"
        content="Herston Lodge is the closest Level 3 Supported Accomodation to the Royal Brisbane Hospital and located on a large, spacious block with BBQ and grassed areas to the rear, backing on to Rasey Park for a beautiful parkland outlook"
        img={FakePageImg}
        arrow1={ArrowRight}
        arrow2={ArrowRight}
        arrow3={ArrowRight}
        arrow4={ArrowRight}
        arrow5={ArrowRight}
        listItem1="Excellent transport"
        listItem2="Four Star Eat Safe Brisbane safety rating - wholesome, nutritious meals produced everyday"
        listItem3="Excellent staff that provide constant support and ecouragment to residents"
        listItem4="Several full funded community agenices visit Herston Lodge and conduct RSP services and community linking to residents"
        listItem5="Onsite medical Doctor visit"
      />
      <PdfViewer title="Herston Lodge provides you with the following services" />
      <PagesContainer
        title="CareRITE Herston Lodge - NDIS"
        NDISimg={weHeartNDIS2020V3}
        content="CareRITE Herston Lodge is a Registered Supported Residential Services provider and National Disability Insurance Shceme (NDIS) provider that has been established in to provide Supported Accomodation services to people in South East Queensland. Based in Herston, Queensland, CareRITE Herston Lodge provides 24-hour support services to its residetns. In addition to their Supported Accomodation services, CareRITE Herston Lodge provides supports to people across the community sector"
        img={FakePageImg}
        arrow1={ArrowRight}
        arrow2={ArrowRight}
        arrow3={ArrowRight}
        arrow4={ArrowRight}
        arrow5={ArrowRight}
        arrow6={ArrowRight}
        text="CareRITE Herston Lodge provides the following NDIS Supports in accordance to the NDIS scheme to eligible participants"
        listItem1="Assistance with Daily Life Tasks in a Group or Shared Living Arrangement"
        listItem2="Community Participation, including Group and Centre Based Activities"
        listItem3="Development of Daily Living and Life Skills"
        listItem4="Household Tasks"
        listItem5="Personal Activities"
        listItem6="Transport Assistance"
        lowerText="For more information about these services please call us on (07) 3257 3488 or message us"
      />
      <Contact
        title="Contact us"
        subTitle="Message us"
        text="To find out more about Herston Lodge residential care of CareRITE Herston Lodge NDIS please either message us below or call us on 3257 3488 and talk to one of our professional staff"
        text2="Please also find our 'Resident Application Form' at the top of the website which you can complete and send to us in the instance you are making enquiries about accomodation availabilty on behalf of new resident"
      />
      <ScrollToTop />
      <Footer
        title="Supported Accomodaton"
        title2="Herston Lodge"
        address="Butterfield Street, Herston"
        number="(07) 3257 3488"
        manager="Manager - Ann Zemo"
        ndisTag="Registered NDIS provider"
      />
    </Container>
  );
}

export default App;
