import React, { useState, dangerouslySetInnerHTML } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { P, Image } from '../../helpers';
import { ImagesWrapper, SwiperImage } from './elements'
import photo1 from '../../assets/images/gal-1.png';
import photo2 from '../../assets/images/photo-2.png';
import photo3 from '../../assets/images/photo-3.png';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCoverflow, EffectFlip, EffectCube  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const Gallery = () => {
  const [currentSlide, setCurrentSlide ] = useState(4);

  const SlideInfo = [
    {
      title: "Механика",
      photo: photo1,
    },
    {
      title: "Финиш",
      photo: photo2,
    },
    {
      title: "Награждение",
      photo: photo3,
    }
  ]


  const slideRender = (info) => {
    return (
      <SwiperImage isActive={info.isActive} isPrev={info.isPrev} isNext={info.isNext} bgImage={info.photo}>
        <div>
          <P weight="500" size="18px" height="22px">{info.title}</P>
        </div>
      </SwiperImage>
      )
  }

  return (
    <>
      <Container className="mt-3">
        <ImagesWrapper>
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            navigation
            loop={true}
            draggable={false}
            effect="coverflow"
            allowTouchMove={false}
            centeredSlides={true}
            onSlideChange={(e) => setCurrentSlide(e.realIndex)}
          >
            {
              SlideInfo.map(slide => 
                <SwiperSlide>
                  {({ isActive, isPrev, isNext }) => slideRender({...slide, isActive, isPrev, isNext })}
                </SwiperSlide>
              )
            }
          </Swiper>
        </ImagesWrapper>
      </Container>
    </>
  );
};
