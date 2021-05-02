import React from "react";
import "./Merch.css";

export const Merch = () => {
  return (
    <div className="flex-center merch-wrapper" id="merch">
      <h1 className="part-title">НАШ МЕРЧ</h1>
      <div className="merch-pictures">
        <div className="merch-card">
          <div className="merch-img"></div>
          <div className="merch-label">
            <span>Черная футболка "красота"</span>
          </div>
        </div>

        <div className="merch-card">
          <div className="merch-img"></div>
          <div className="merch-label">
            <span>Черная футболка "красота"</span>
          </div>
        </div>

        <div className="merch-card">
          <div className="merch-img"></div>
          <div className="merch-label">
            <span>Черная футболка "красота"</span>
          </div>
        </div>
      </div>
    </div>
  );
};
