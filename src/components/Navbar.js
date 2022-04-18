import React from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import styles from "../styles/navbar.css";

function Navbar() {
  const location = useLocation();

  // Render the links based on the current location
  const renderLinks = () => {
    if (location.pathname === "/hubpage") {
      return (
        <ul>
          <li>
            <Link smooth to="/">Home</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <Link smooth to="/">Home</Link>
          </li>
          <li>
            <Link smooth to="#About">About</Link>
          </li>
          <li>
            <Link smooth to="#Resume">Resume</Link>
          </li>
          <li>
            <Link smooth to="#Contact">Contact</Link>
          </li>
        </ul>
      );
    }
  };

  return (
    <div id="nav-container">
      <nav className="nav">
        {renderLinks()}
      </nav>
    </div>
  );
}

export default Navbar;
