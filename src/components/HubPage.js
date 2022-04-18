import React, { useState, useEffect } from "react";
import ConsoleAnimation from "./ConsoleAnimation";
import { Link } from "react-router-dom";
import "../styles/console.css"; // Dark background styles

const HubPage = () => {
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLink(true);
    }, 30000); // 30 seconds delay

    return () => clearTimeout(timer);
  }, []); // Runs only once on component mount

  return (
    <div className="hubpage-container">
      <div className="hubpage-content">
        <ConsoleAnimation />
      </div>
      <div className="hubpage-footer">
        {/* Render the link if showLink is true */}
        {showLink && <Link to="/">Home</Link>}
      </div>
    </div>
  );
};

export default HubPage;
