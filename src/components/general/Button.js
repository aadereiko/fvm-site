import React from "react";
import "./Button.css";

export const Button = ({ children, ...props }) => {
  return (
    <button
      className="border-gradient border-gradient-purple part-button"
      {...props}
    >
      {children}
    </button>
  );
};
