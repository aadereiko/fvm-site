import React from "react";
import "./TitlePart.css";
import GirlVelo from "./assets/girl_velo.png";

export const TitlePart = () => {
  return (
    <div className="title-wrapper">
      <div className="left-block">
        <h1 className="part-title">ФОТОВЕЛОМАРАФОН</h1>
        <h1 className="part-title">МЫ НА КОЛЁСАХ С 2014 ГОДА</h1>
        <p>Маленькое описание на две длинные строки будет хорошо</p>
        <p>Ну вот примерно как-то так скорее всего. Хех.</p>

        <div className="squares-wrapper">
          <div className="square flex-center">
            <span>20</span>
            <span>дней</span>
          </div>
          <div className="square flex-center">
            <span>20</span>
            <span>часов</span>
          </div>
          <div className="square flex-center">
            <span>20</span>
            <span>минут</span>
          </div>
          <div className="square flex-center">
            <span>20</span>
            <span>секунд</span>
          </div>
        </div>
      </div>
      <div className="right-block">
        <img src={GirlVelo}></img>
      </div>
    </div>
  );
};
