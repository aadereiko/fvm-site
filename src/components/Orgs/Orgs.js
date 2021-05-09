import React from "react";
import "./Orgs.css";
import personOneImg from "../../assets/person_1.png";
import personTwoImg from "../../assets/person_2.png";
import personThreeImg from "../../assets/person_3.png";
import { ReactComponent as TgIcon } from "../../assets/telegram.svg";
import { ReactComponent as InstIcon } from "../../assets/inst-svg.svg";
import { ReactComponent as MailIcon } from "../../assets/envelope-fill.svg";
import { ReactComponent as PhoneIcon } from "../../assets/telephone-fill.svg";

const orgList = [
  {
    name: "Марика Чекуришвили",
    inst: "https://www.instagram.com/marikachek/",
    phone: "+375293889970",
    mail: "chekurishvili1marika@gmail.com",
    role: "Руководитель проекта",
    photo: personOneImg,
    tg: "",
  },
  {
    name: "Ростовцева Дарья",
    inst: "https://www.instagram.com/dasha.rostovceva/",
    phone: "+375291309897",
    mail: "dasharostovtseva@gmail.com",
    role: "Специалист по связям с общественностью",
    photo: personTwoImg,
    tg: "",
  },
  {
    name: "Малцьева Дарья",
    inst: "https://www.instagram.com/dasha__maltseva/",
    phone: "+375447503581",
    mail: "daryamaltseva@gmail.com",
    role: "Специалист по работе с партнёрами",
    photo: personThreeImg,
    tg: "",
  },
];

export const Orgs = () => {
  return (
    <div className="orgs-wrapper flex-center">
      <h1 className="part-title">ОРГАНИЗАТОРЫ</h1>
      <div className="orgs-people">
        {orgList.map((org) => (
          <div id={org.name} className="person">
            <div className="person-img">
              <img src={org.photo} />
            </div>
            <div className="person-description">
              <span className="person-name">{org.name}</span>
              <span className="person-role">{org.role}</span>
            </div>
            <div className="person-buttons">
              <a href={org.inst}>
                <div className="person-button">
                  <InstIcon width="20" height="20" />
                </div>
              </a>
              <a href={`https://tg.com/${org.tg}`}>
                <div className="person-button">
                  <TgIcon width="20" height="20" fill="white" />
                </div>
              </a>
              <a href={`mailto:${org.mail}`}>
                <div className="person-button">
                  <MailIcon width="20" height="20" fill="white" />
                </div>
              </a>
              <a href={`tel:${org.phone}`}>
                <div className="person-button">
                  <PhoneIcon width="20" height="20" fill="white" />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
