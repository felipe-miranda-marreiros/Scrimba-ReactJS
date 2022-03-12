import React from "react";
import reactLogo from "./reactjs-icon.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <img src={reactLogo} alt="React Logo"></img>
        <div>ReactFacts</div>
      </div>
      <div className="navbar__content-text">React Course - Project 1</div>
    </nav>
  );
}

export default Navbar;
