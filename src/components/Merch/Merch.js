import React, { useCallback, useState } from "react";
import "./Merch.css";
import merchImg1 from "../../assets/merch_main_3.png";
import merchImg2 from "../../assets/merch_main_2.png";
import merchImg3 from "../../assets/merch_main_1.png";

import tShirt0 from "../../assets/merch_t_shirt_0.jpg";
import tShirt1 from "../../assets/merch_t_shirt_1.jpg";
import tShirt2 from "../../assets/merch_t_shirt_2.jpg";

import bag0 from "../../assets/merch_bag_0.jpg";
import bag1 from "../../assets/merch_bag_1.jpg";

import ImageViewer from "react-simple-image-viewer";

import { Button } from "../general/Button";

const tShirtLinks = [tShirt0, tShirt1, tShirt2];

const bagLinks = [bag0, bag1];

const images = [tShirtLinks, tShirtLinks, bagLinks];

export const Merch = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = (index) => () => {
    setCurrentImageIndex(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setCurrentImageIndex(null);
    setIsViewerOpen(false);
  };

  return (
    <>
      {isViewerOpen && images[currentImageIndex] && (
        <ImageViewer
          src={images[currentImageIndex]}
          onClose={closeImageViewer}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
        />
      )}
      <div className="flex-center merch-wrapper" id="merch">
        <h1 className="part-title">НАШ МЕРЧ</h1>
        <div className="merch-pictures">
          <div className="merch-card" onClick={openImageViewer(0)}>
            <div className="merch-img">
              <img src={merchImg1}></img>
            </div>
            <div className="merch-label">
              <span>Черная футболка "красота"</span>
            </div>
            <button className="merch-btn">Подробнее</button>
          </div>

          <div className="merch-card" onClick={openImageViewer(1)}>
            <div className="merch-img">
              <img src={merchImg2}></img>
            </div>
            <div className="merch-label">
              <span>Черная футболка "красота"</span>
            </div>
            <button className="merch-btn">Подробнее</button>
          </div>

          <div className="merch-card" onClick={openImageViewer(2)}>
            <div className="merch-img">
              <img src={merchImg3}></img>
            </div>
            <div className="merch-label">
              <span>
                Черный шоппер <br />
                "Фотовеломарафон"
              </span>
            </div>
            <button className="merch-btn">Подробнее</button>
          </div>
        </div>
        <a href="https://t.me/Orlandaa" target="_blank">
          <Button>
            <span>ЗАКАЗАТЬ</span>
          </Button>
        </a>
      </div>
    </>
  );
};
