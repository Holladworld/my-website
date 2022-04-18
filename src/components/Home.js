import React, { Component } from "react";
import Carousel from "./Carousel";
import AnimateSection from "./AnimateSection";
import Bounce from "react-reveal/Bounce";
import { Link } from "react-router-dom";
import ResumePDF from "../images/ResumeWebsite.pdf";

import About from "./About";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="landing">
          <div className="intro">
            <h1>Hi, My name is Olayinka...</h1>
          </div>
        </div>
        <div className="homeSection color">
          <About />
        </div>
        <div className="homeSection bg">
          <span className="homeSection bg-text">
            <span
              style={{
                fontSize: "30px",
              }}
            >
              I'm always looking to
            </span>
            <br />
            CONNECT. <br />
            DEVELOP. <br /> COLLABORATE.
          </span>
        </div>
        <div className="homeSection color">
          <div className="wordColorSize" style={{ float: "left" }}>
            <div className="rotateRight">
              <Bounce top delay={1200}>
                <div
                  style={{
                    backgroundColor: "white",
                    color: "#b8142d",
                  }}
                >
                  I love coding
                </div>
              </Bounce>
            </div>
            <div className="rotateLeft">
              <Bounce top delay={900}>
                <div style={{ margin: "20px" }}>I love travelling</div>
              </Bounce>
            </div>
            <Bounce top delay={600}>
              <div style={{ backgroundColor: "white", color: "#b8142d" }}>
                I love animals
              </div>
            </Bounce>

            <div className="rotateLeft">
              <Bounce top delay={300}>
                <div style={{ margin: "20px" }}>I love meeting new people</div>
              </Bounce>
            </div>
            <Bounce top>
              <div style={{ backgroundColor: "white", color: "#b8142d" }}>
                I love reading
              </div>
            </Bounce>
          </div>

          <div className="words">
            <AnimateSection prefix="fade-in-section" stylename="is-visible">
              I am eager about learning new technologies and am excited by all
              the possibilities in software development.
            </AnimateSection>
          </div>
        </div>

        <div className="homeSection" id="Resume">
          <div className="skills-container">
            <div className="skills-section">
              <h1>Build</h1>
              <p>
                I have always interested in software.
                I hope to transition into Tiny Machine Learning or Artificial Intelligence.
                Before taking the Software Engineering program, I had been designing websites with JavaScript, HTML, CSS, alongside their frameworks.
                I have also built several websites on Wordpress for clients to be able to manage their contents.
                
              </p>
              <h3>Design Tools</h3>
              <div className="flag-container">
                <div className="skill-flag">Figma</div>
                <div className="skill-flag">HTML5/CSS</div>
                <div className="skill-flag">Flow Chart</div>
                <br></br>
                <div className="skill-flag">Lucidchart</div>
                <div className="skill-flag">Balsamiq</div>
                <div className="skill-flag">Pen and Paper</div>
              </div>

              <p style={{ width: "inherit" }}>
                Though I am a beginner in my software enginering backend specialization program,
                 I have always been a lover of doing hard things.
              </p>
            </div>

            <div className="skills-section">
              <h1>Skills</h1>
              <p>
                I am a lover of frontend and backend development. My most notable experience
                involves working with web and mobile applications, database management in several languages. Now, I enjoy C language, python,
                React Native and NodeJS.
              </p>
              <h3>Languages</h3>

              <div className="flag-container">
                <div className="skill-flag">C++</div>
                <div className="skill-flag">Javascript</div>
                <div className="skill-flag">Python</div>
              </div>

              <h3>Tools/Technologies</h3>
              <div className="flag-container">
              <div className="skill-flag">Docker</div>
                <div className="skill-flag">Kubernetes</div>
                <div className="skill-flag">MongoDB</div>
                <div className="skill-flag">Typescript</div>
                <div className="skill-flag">Ruby</div>
                <div className="skill-flag">React-Native</div>
                <div className="skill-flag">NodeJS</div>
                <div className="skill-flag">Typescript</div>
                <div className="skill-flag">Express</div>
                <div className="skill-flag">Flask</div>
                <div className="skill-flag">Postman</div>
                <div className="skill-flag">Git</div>
              </div>
            </div>
            <div className="skills-section">
              <h1>Other</h1>
              <p>
              I am an avid learner who loves working with like-minded people. 
              I am dedicated, detail-oriented, and a hard worker. I am passionate 
              about education and believe in changing lives through technology and knowledge sharing.
              </p>

              <h3>Experiences</h3>
              <p style={{ width: "inherit" }}>
              I've been involved in various software development roles:
              </p>
              <ul>
                <li>
                  Software Developer at Vobels Tech - Contributed to the development of web applications using React, Redux, and Node.js.
                </li>
                <li>
                  Web Developer Intern as Freelancer - Created responsive user interfaces for client projects, focusing on usability and performance.
                </li>
              </ul>
              
              <h3>Soft Skills</h3>
              <div className="flag-container">
                <div className="skill-flag">Teamwork</div>
                <div className="skill-flag">Empathy</div>
                <div className="skill-flag">Adaptable</div>
              </div>
            </div>
          </div>
          <div style={{ width: "100vw" }}>
            <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
              <button className="view-resume">View Resume</button>
            </a>
          </div>
        </div>

        <div className="footer" id="Contact">
          <a href="https://github.com/holladworld"
            target="_blank" rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <i className="fa fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/olayinka212a/"
            target="_blank" rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="mailto:oladimejiolayin@outlook.com"
            style={{ textDecoration: "none" }}
          >
            <i className="fa fa-envelope"></i>
          </a>
          <Link to="/hubpage" style={{ textDecoration: "none", fontSize: "20px" }}>
            <i className="fa fa-archive" style={{ fontSize: "20px" }}></i>
          </Link>
          <div style={{ color: "white", fontSize: ".3em" }}>
            Designed by Oladimeji Olayinka
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
