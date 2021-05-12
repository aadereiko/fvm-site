import React, { useEffect, useState } from "react";
import "./TitlePart.css";
import GirlVelo from "./assets/girl_velo.png";

let interval = null;
// const fotoveloDate = moment('29 05 2021');
// fotoveloDate.setHours(19);

export const TitlePart = () => {
  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null);

  useEffect(() => {
    // interval = setInterval(() => {
    //   console.log("sec");
    //   const diff = Math.abs(fotoveloDate - new Date());
    //   const days = diff / (1000 * 60 * 60 * 24);
    //   setDays(diff / (1000 * 60 * 60 * 24));
    //   setHours(diff / (1000 * 60 * 60));
    // }, 1000);
  }, [setDays]);

  return (
    <div className="title-wrapper">
      <div className="left-block">
        <h1 className="part-title">ФОТОВЕЛОМАРАФОН</h1>
        <h1 className="part-title">29 мая - 30 мая</h1>

        <p> Совсем скоро стартует новый сезон, </p>
        <p>
          поэтому присоединяйся, нажав на кнопку
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
