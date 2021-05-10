import React, { Children } from "react";

export const Card = ({ title, children, imgSrc }) => (
  <div className="card">
    <div className="card-picture">
      <img src={imgSrc} />
    </div>
    <div className="card-info">
      <div className="card-title">
        <span className="title">{title.toUpperCase()}</span>
      </div>
      <div className="card-content">{children}</div>
    </div>
  </div>
);
