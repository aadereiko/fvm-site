import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { P } from '../../helpers';
import { ImagesWrapper, SwiperImage } from './elements'
import photo1 from '../../assets/images/gal-1.png';
import photo2 from '../../assets/images/photo-2.png';
import photo3 from '../../assets/images/photo-3.png';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

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
    },
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
          <P align="center" weight={400} size="14px" height="17px">{ SlideInfo[currentSlide].title }</P>
      </Container>
    </>
  );
};
