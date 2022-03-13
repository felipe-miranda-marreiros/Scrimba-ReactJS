import React from "react";
import "./Footer.scss";

const Footer = (props) => {
  return (
    <div className="media">

      <div className="media__links-items">
        <img src={props.logo1} alt={props.alt1} />
        <img src={props.logo2} alt={props.alt2} />
        <img src={props.logo3} alt={props.alt3} />
        <img src={props.logo4} alt={props.alt4} />
      </div>
      
    </div>
  );
};

export default Footer;
