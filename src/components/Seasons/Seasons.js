import React from "react";
import { Card } from "./Card";
import "./Seasons.css";

import springImg from "../../assets/spring.jpg";
import autumnImg from "../../assets/autumn.jpg";
import nightImg from "../../assets/night.jpg";

export const Seasons = () => {
  return (
    <div className="seasons-wrapper" id="seasons">
      <h1 className="part-title">СЕЗОНЫ ФОТОВЕЛОМАРАФОНА</h1>
      <div className="cards-wrapper">
        <Card title="Весенний" imgSrc={springImg}>
          Традиционно проходит в конце мая. Отличается от других сезонов тем,
          что участвовать можно не только на велосипеде, но и на скейте,
          самокате, роликах, а можно и вовсе пробежать всю дистанцию на своих
          двоих.
        </Card>
        <Card title="Ночной" imgSrc={nightImg}>
          Проходит жарким летом, когда темнеет поздно, а фото получаются
          особенными. Старт начинается вечером, а на финише обустроена
          специальная зона, чтобы провести целую ночь в компании
          единомышленников.
        </Card>
        <Card title="Осенний" imgSrc={autumnImg}>
          Классический сезон ФотоВело, когда принять участие можно исключительно
          на велосипеде. Отличается от других тем, что маршрут становиться более
          длинным.
        </Card>
      </div>
      {/* <Button>
        <span>АКТУАЛЬНЫЙ СЕЗОН</span>
      </Button> */}
    </div>
  );
};
