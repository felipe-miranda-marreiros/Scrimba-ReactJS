import React from "react";
import "./InputText.style.scss";

const InputText = (props) => {
  return (
    <form className="input-text__container" onSubmit={props.makeMeme}>
      <ul className="input-text__inputs">
        <li>
          <input
            type="text"
            placeholder="Top text"
            value={props.topText}
            name={props.name1}
            onChange={props.handleChange}
          />
        </li>
        <li>
          <input
            type="text"
            placeholder="Bottom text"
            value={props.bottomText}
            name={props.name2}
            onChange={props.handleChange}
          />
        </li>
      </ul>
      <button onClick={props.handler} className="input-text__btn">
        {props.text}
      </button>
    </form>
  );
};

export default InputText;
