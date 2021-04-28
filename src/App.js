import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  // StyleDetail,
  // ProjectDetail,
  Price,
  AboutUs,
} from "./pages";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/about-us">
            <AboutUs />
          </Route>

          <Route path="/price">
            <Price />
          </Route>

          {/* <Route path="/project-detail">
            <ProjectDetail />
          </Route> */}

          {/* <Route path="/style-detail">
            <StyleDetail />
          </Route> */}

          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
