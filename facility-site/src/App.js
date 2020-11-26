import './App.css';
import Maintenance from './components/common/maintenance';
import Header from './components/common/header';
import {Container} from 'reactstrap';
import Footer from './components/common/footer';
import Contact from './components/common/contact';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export function Links() {
    return (
        <Container>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/Maintenance">Home</Link>
                            </li>
                            <li>
                                <Link to="/Contact">Contact us</Link>
                            </li>
                        </ul>
                    </nav>
                    <hr></hr>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/Maintenance">
                            <Maintenance/>
                        </Route>
                        <Route path="/Contact">
                            <Contact/>
                        </Route>
                        <Route path="*" component={Maintenance}/>
                    </Switch>
                </div>
            </Router>
        </Container>
    );
}

function App() {
    return (

        <Container className="App">
            <Header/>
            <Links/>
            <Footer/>
        </Container>

    );
}

export default App;
