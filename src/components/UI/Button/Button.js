import React from "react";

import "./button.css";
import "./button.scss";

const Button = (props) => {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      className={`custom-btn ${props.btn__type}`}
      onClick={props.clicked}
      style={props.altStyle}
      id={props.id}
    >
      {props.children}
    </button>
  );
};

export default Button;
