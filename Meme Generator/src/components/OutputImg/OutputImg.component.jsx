import React from "react";
import "./OutputImg.style.scss";

const OutputImg = (props) => {
  return (
    <div className="meme__container">
      <img src={props.url} alt="Random Meme" className="meme-img" />
      <h2 className="meme--text top">{props.top}</h2>
      <h2 className="meme--text bottom">{props.bottom}</h2>
    </div>
  );
};

export default OutputImg;
