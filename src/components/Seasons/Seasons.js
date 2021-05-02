import React from "react";
import { Button } from "../general/Button";
import { Card } from "./Card";
import "./Seasons.css";

export const Seasons = () => {
  return (
    <div className="seasons-wrapper" id="seasons">
      <h1 className="part-title">СЕЗОНЫ ФОТОВЕЛОМАРАФОНА</h1>
      <div className="cards-wrapper">
        <Card title="Ночной" />
        <Card title="Весенний" />
        <Card title="Осенний" />
      </div>
      <Button>
        <span>АКТУАЛЬНЫЙ СЕЗОН</span>
      </Button>
    </div>
  );
};
