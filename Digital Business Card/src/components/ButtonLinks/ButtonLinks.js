import React from "react";
import "./ButtonLinks.scss";

const ButtonLinks = (props) => {
  return (
    <div className="button__links">
      <div>
        <button className="btn btn__link-1">
          <img src={props.btn1} alt={props.alt} />
          <a href={props.href}>Email</a>
        </button>
      </div>

      <div>
        <button className="btn btn__link-2">
          <img src={props.btn2} alt={props.alt} />
          <a href={props.href}>Linkedin</a>
        </button>
      </div>
    </div>
  );
};

export default ButtonLinks;
