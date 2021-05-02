import React from "react";

export const Card = ({ title }) => (
  <div className="card">
    <div className="card-title">
      <span className="title">{title.toUpperCase()}</span>
      <span className="card-description">КОГДА ПРОВОДЯТ</span>
    </div>
    <div className="card-content">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  </div>
);
