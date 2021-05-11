import React from "react";
import "./Transportation.css";

import boardImg from "../../assets/board.png";
import bycImg from "../../assets/byc.png";
import runImg from "../../assets/run.png";
import scooterImg from "../../assets/scooter.png";
import skatingImg from "../../assets/skating.png";

export const Transportation = () => {
  return (
    <div className="flex-center transportation-wrapper">
      <h1 className="part-title">МОЖНО УЧАСТВОВАТЬ ТОЛЬКО НА ВЕЛОСИПЕДЕ?</h1>
      <div className="kinds-wrapper">
        <div className="first-row">
          <div className="kind flex-center">
            <div className="img-wrapper flex-center">
              <img src={boardImg}></img>
            </div>
            <h3>На скейтборде</h3>
            <span>Для тех, кто хочет пройти маршрут налегке.</span>
          </div>
          <div className="kind flex-center">
            <div className="img-wrapper flex-center">
              <img src={bycImg}></img>
            </div>
            <h3>На велосипеде</h3>
            <span>Для тех, кто любит классику.</span>
          </div>
          <div className="kind flex-center">
            <div className="img-wrapper flex-center">
              <img src={scooterImg}></img>
            </div>
            <h3>На самокате</h3>
            <span>Для тех, кто идёт в ногу со временем.</span>
          </div>
        </div>
        <div className="second-row">
          <div className="kind flex-center">
            <div className="img-wrapper flex-center">
              <img src={skatingImg}></img>
            </div>
            <h3>На роликах</h3>
            <span>Для тех, кто с детства увлекался спортом.</span>
          </div>
          <div className="kind flex-center">
            <div className="img-wrapper flex-center">
              <img src={runImg}></img>
            </div>
            <h3>Бегом</h3>
            <span>Для тех, кто не боится больших расстояний и трудностей.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
