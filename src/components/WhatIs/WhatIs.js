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
          Это уникальный проект, который объединил в себе спортивную и
          культурную сферы жизни. Проект состоит из двух ингредиентов:
          интересный маршрут и необычные фотозадания. Благодаря этому вы сможете
          проверить не только свою выносливость, но и креативность. Механика
          проекта проста: участники приезжают на точку сбора, после они получают
          свои задания и начинают исследовать город в поисках живописных мест
          для фото. Когда все задания выполнены, а время марафона подходит к
          концу, участники направляются на финиш. На следующий день все
          участники приглашаются на торжественное закрытие, где состоится
          просмотр всех фотографий и награждение победителей.
        </span>
      </div>
    </div>
  );
};
