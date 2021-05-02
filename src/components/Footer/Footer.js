import React from "react";
import "./Footer.css";
import vkImg from "../../assets/vk.png";
import facebookImg from "../../assets/facebook.png";
import instImg from "../../assets/instagram.png";
import tgImg from "../../assets/tg.png";

export const Footer = () => {
  return (
    <footer className="footer-wrapper flex-center" id="contacts">
      <a href="https://vk.com/fotovelomarafon" target="_blank">
        <div className="icon-round flex-center">
          <img src={vkImg}></img>
        </div>
      </a>
      <a href="https://vk.com/fotovelomarafon" target="_blank">
        <div className="icon-round flex-center">
          <img src={facebookImg}></img>
        </div>
      </a>
      <a href="https://www.instagram.com/fotovelomarafon/" target="_blank">
        <div className="icon-round flex-center">
          <img src={instImg}></img>
        </div>
      </a>
      <a href="https://t.me/fotovelomarafon" target="_blank">
        <div className="icon-round flex-center tg-icon">
          <img src={tgImg}></img>
        </div>
      </a>
    </footer>
  );
};
