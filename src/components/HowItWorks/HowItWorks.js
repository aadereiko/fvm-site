import React from "react";
import "./HowItWorks.css";
import { ReactComponent as VerifiedIcon } from "../../assets/verified.svg";
import { Button } from "../general/Button";

export const HowItWorks = () => {
  return (
    <div className="how-it-works-wrapper">
      <h1 className="part-title">КАК ЭТО РАБОТАЕТ</h1>

      <div className="mech-wrapper flex-center">
        <div className="mech">
          <div className="mech-top">
            <div className="mech-left">
              <div className="mech-field">
                <div className="mech-check">
                  <VerifiedIcon width="25" height="25" />
                </div>
                <div className="mech-label">Подай заявку</div>
              </div>
              <div className="mech-field">
                <div className="mech-check"></div>
                <div className="mech-label">Приезжай на старт</div>
              </div>
              <div className="mech-field">
                <div className="mech-check"></div>
                <div className="mech-label">Получи карту</div>
              </div>
            </div>
            <div className="mech-right">
              <div className="mech-field">
                <div className="mech-check"></div>
                <div className="mech-label">Отправляйся на точки</div>
              </div>
              <div className="mech-field">
                <div className="mech-check"></div>
                <div className="mech-label">Выполняй задания</div>
              </div>
              <div className="mech-field">
                <div className="mech-check"></div>
                <div className="mech-label">Приходи на награждение</div>
              </div>
            </div>
          </div>
          <div className="flex-center">
            <Button>
              <span>Хочу участвовать</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
