import React, { Children } from "react";

export const Card = ({ title, children }) => (
  <div className="card">
    <div className="card-title">
      <span className="title">{title.toUpperCase()}</span>
    </div>
    <div className="card-content">{children}</div>
  </div>
);
