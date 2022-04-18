import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, withRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import HubPage from "./components/HubPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename="/">
          <Navbar />
          
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/hubpage" component={HubPage} />
          <Route exact path="/contact" component={Contact} />
        </Router>
      </div>
    );
  }
}

export default App;
