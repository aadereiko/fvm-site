import React from "react";
import "./WhatIs.css";
import CameraImg from "../../assets/camera.png";
import BorderImg from "../../assets/border.png";

export const WhatIs = () => {
  return (
    <div className="what-is-wrapper" id="about">
      <div className="left-part">
        <img src={BorderImg} className="border-img"></img>
        <img src={CameraImg} className="camera-img"></img>
      </div>
      <div className="right-part">
        <h1 className="part-title">ЧТО ТАКОЕ ФОТОВЕЛО</h1>
        <span className="description">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </span>
      </div>
    </div>
  );
};
