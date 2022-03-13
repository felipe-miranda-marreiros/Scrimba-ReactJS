import React from "react";

import "./Header.scss";

const Header = (props) => {
  return (
    <header className="header">
      {props.children[0]}
      <h1>Laura Smith</h1>
      <p>Frontend Developer</p>
      <small>laurasmith.website</small>
      {props.children[1]}
    </header>
  );
};

export default Header;
