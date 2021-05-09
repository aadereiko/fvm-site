import React from "react";
import "./TitlePart.css";
import GirlVelo from "./assets/girl_velo.png";

export const TitlePart = () => {
  return (
    <div className="title-wrapper">
      <div className="left-block">
        <h1 className="part-title">ФОТОВЕЛОМАРАФОН</h1>
        <h1 className="part-title">01.01.2001, 19:00</h1>

        <p> Совсем скоро стартует новый сезон, </p>
        <p>
          поэтому присоединяйся к ФотоВело, нажав на кнопку
          «Зарегистрироваться».
        </p>
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
