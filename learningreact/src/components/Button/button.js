import React from 'react';
import './button.css';

const Button = ({ variant, children, ...props }) => {
  return (
    <button className={`button ${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;