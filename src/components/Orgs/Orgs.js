import React from "react";
import "./Orgs.css";
import personOneImg from "../../assets/person_1.png";
import personTwoImg from "../../assets/person_2.png";
import personThreeImg from "../../assets/person_3.png";

export const Orgs = () => {
  return (
    <div className="orgs-wrapper flex-center">
      <h1 className="part-title">ОРГАНИЗАТОРЫ</h1>
      <div className="orgs-people">
        <div className="person">
          <div className="person-img">
            <img src={personOneImg} />
          </div>
          <div className="person-description">
            <span className="person-name">Дмитрий Иванов</span>
            <span className="person-role">Специалист по видеокартам</span>
          </div>
          <div className="person-button">
            <button>Биография</button>
          </div>
        </div>
        <div className="person">
          <div className="person-img">
            <img src={personTwoImg} />
          </div>
          <div className="person-description">
            <span className="person-name">Дмитрий Иванов</span>
            <span className="person-role">Специалист по видеокартам</span>
          </div>
          <div className="person-button">
            <button>Биография</button>
          </div>
        </div>
        <div className="person">
          <div className="person-img">
            <img src={personThreeImg} />
          </div>
          <div className="person-description">
            <span className="person-name">Дмитрий Иванов</span>
            <span className="person-role">Специалист по видеокартам</span>
          </div>
          <div className="person-button">
            <button>Биография</button>
          </div>
        </div>
      </div>
    </div>
  );
};
