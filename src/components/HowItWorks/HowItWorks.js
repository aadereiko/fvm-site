import React from "react";
import "./HowItWorks.css";

export const HowItWorks = () => {
  return (
    <div className="how-it-works-wrapper">
      <h1 className="part-title">КАК ЭТО РАБОТАЕТ</h1>

      <div className="steps-wrapper-desktop">
        <div>01. Подай заявку</div>
        <div>02. Приезжай на старт</div>
        <div>03. Получи карту</div>
        <div>06. Приходи на награждение</div>
        <div>05. Выполняй задания</div>
        <div>04. Отправляйся на точки</div>
      </div>

      <div className="steps-wrapper-mobile">
        <div>01. Подай заявку</div>
        <div>02. Приезжай на старт</div>
        <div>03. Получи карту</div>
        <div>04. Отправляйся на точки</div>
        <div>05. Выполняй задания</div>
        <div>06. Приходи на награждение</div>
      </div>
    </div>
  );
};
