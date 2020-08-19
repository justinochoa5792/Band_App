import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./component/Home.jsx";
import Contact from "./component/Contact.jsx";
import Bandcamp from "./component/Bandcamp.jsx";
import Navbar from "./component/Navbar.jsx";
import About from "./component/About.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/bandcamp"
            render={(props) => <Bandcamp {...props} />}
          />
          <Route
            exact
            path="/contact"
            render={(props) => <Contact {...props} />}
          />
          <Route exact path="/about" render={(props) => <About {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
