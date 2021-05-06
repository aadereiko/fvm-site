import React from "react";
import { Accordion } from "../general/Accordion/Accordion";
import "./FAQ.css";

export const FAQ = () => {
  return (
    <div className="faq-wrapper flex-center" id="faq">
      <h1 className="part-title">У НАС ЧАСТО СПРАШИВАЮТ</h1>
      <div className="accord-wrapper">
        <Accordion title="Почему мы такие крутые?" content="AAAAAAAAAAAAAAA" />
        <Accordion title="Откуда у нас деньги?" content="AAAAAAAAAAAAAAA" />
        <Accordion title="Когда уйдет Марика?" content="AAAAAAAAAAAAAAA" />
      </div>
    </div>
  );
};
