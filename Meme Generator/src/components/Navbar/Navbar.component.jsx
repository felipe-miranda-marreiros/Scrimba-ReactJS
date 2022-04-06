import React from "react";
import "./Navbar.style.scss";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <img src={props.img} alt={props.alt} className="navbar-img" />
        <span className="navbar__content-title">{props.title}</span>
      </div>
      <p className="navbar__content-paragraph">{props.description}</p>
    </nav>
  );
};

export default Navbar;
