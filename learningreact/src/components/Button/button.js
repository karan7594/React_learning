import React from "react";
import "./button.css";

const Button = ({ variant, children, ...props }) => {
  return (
    <button
      className={`button ${variant}`}
      {...props}
      onClick={() => console.log("click")}
      
    >
      {children}
    </button>
  );
};

export default Button;
