import "./App.css";
import Home from "./components/Home/home";
import Header from "./components/common/Header/header";
import { Container } from "reactstrap";
import Footer from "./components/common/Footer/footer";
import Contact from "./components/Contact/contact";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

// export function Links() {
//   return (
//     <Container>
//       <Router>
//         <div>
//           <nav className="linksContainer">
//             <ul>
//               <li>
//                 <Link className="mainLinks" to="/maintenance">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link className="mainLinks" to="/contact">
//                   Message us
//                 </Link>
//               </li>
//             </ul>
//           </nav>

//           {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//           <Switch>
//             <Route exact path="*/maintenance">
//               <Maintenance />
//             </Route>
//             <Route exact path="*/contact">
//               <Contact />
//             </Route>
//             <Redirect from="*" to="maintenance" />
//           </Switch>
//         </div>
//       </Router>
//     </Container>
//   );
// }

function App() {
  return (
    <Container className="App">
      <Header title="Herston Lodge" />
      <Home />
      <Contact message="Message us" />
      {/* <Links /> */}
      <Footer />
    </Container>
  );
}

export default App;
