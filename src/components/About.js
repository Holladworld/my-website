import React, { Component } from "react";
import styles from "../styles/home.css";
import AnimateSection from "./AnimateSection";
import { Link } from "react-router-dom";

class About extends Component {
  state = {};
  render() {
    return (
      <div id="About">
        <div className="homeSection">
          <div className="words">
            <AnimateSection prefix="fade-in-section" stylename="is-visible">
              I am currently learning software engineering at ALX School. 
              I am passionate about backend development and I'm constantly 
              searching for ways to grow as an engineer and as a person.
            </AnimateSection>
            <Link to="/hubpage">
              <button className="learn-more-btn">Learn More About Me</button>
            </Link>
          </div>
          <div className="headshot">
            <AnimateSection prefix="fade-in-section" stylename="is-visible">
              <img src={require("../images/headshot.jpg")} alt="Headshot"></img>
            </AnimateSection>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
