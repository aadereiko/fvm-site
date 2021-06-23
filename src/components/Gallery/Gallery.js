import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { P } from '../../helpers';
import { ImagesWrapper, SwiperImage } from './elements'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import image1 from '../../assets/images/photos/image-9.png';
import image2 from '../../assets/images/photos/image-10.png';
import image3 from '../../assets/images/photos/image-11.png';
import image4 from '../../assets/images/photos/image-12.png';
import image5 from '../../assets/images/photos/image-13.png';
import image6 from '../../assets/images/photos/image-14.png';
import image7 from '../../assets/images/photos/image-15.png';
import image8 from '../../assets/images/photos/image-16.png';
import image9 from '../../assets/images/photos/image-17.png';
import image10 from '../../assets/images/photos/image-18.png';
import image11 from '../../assets/images/photos/image-19.png';
import image12 from '../../assets/images/photos/image-20.png';
import image13 from '../../assets/images/photos/image-21.png';
import image14 from '../../assets/images/photos/image-22.png';
import image15 from '../../assets/images/photos/image-23.png';
import image16 from '../../assets/images/photos/image-24.png';
import image17 from '../../assets/images/photos/image-25.png';
import image18 from '../../assets/images/photos/image-26.png';
import image19 from '../../assets/images/photos/image-27.png';
import image20 from '../../assets/images/photos/image-28.png';
import image21 from '../../assets/images/photos/image-29.png';
import image22 from '../../assets/images/photos/image-30.png';
import image23 from '../../assets/images/photos/image-31.png';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export const Gallery = () => {
  const [currentSlide, setCurrentSlide ] = useState(4);

  const SlideInfo = [
    {
      title: "С чистого листа",
      photo: image1,
    },
    {
      title: "Ученье - свет",
      photo: image2,
    },
    {
      title: "Легко ли быть молодым",
      photo: image3,
    },
    {
      title: "Без забот",
      photo: image4,
    },
    {
      title: "Just do it",
      photo: image5,
    },
    {
      title: "Кушать подано",
      photo: image6,
    },
    {
      title: "Жажда стиля",
      photo: image7,
    },
    {
      title: "Городские мотивы",
      photo: image8,
    },
    {
      title: "Волшебство",
      photo: image9,
    },
    {
      title: "70 лет Победы",
      photo: image10,
    },
    {
      title: "Городские легенды",
      photo: image11,
    },
    {
      title: "Сберечь на будущее",
      photo: image12,
    },
    {
      title: "Пламенный свет",
      photo: image13,
    },
    {
      title: "В тесноте да не в обиде",
      photo: image14,
    },
    {
      title: "Эффект розовых очков",
      photo: image15,
    },
    {
      title: "Двойные стандарты",
      photo: image16,
    },
    {
      title: "Искажение",
      photo: image17,
    },
    {
      title: "Непокорность",
      photo: image18,
    },
    {
      title: "Шухер",
      photo: image19,
    },
    {
      title: "Похищенный НЛО",
      photo: image20,
    },
    {
      title: "Очень странные дела",
      photo: image21,
    },
    {
      title: "Новое искусство",
      photo: image22,
    },
    {
      title: "Оглядываясь назад",
      photo: image23,
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
            autoplay={{delay: 3000}}
            loopedSlides={50}
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
          <P align="center" weight={400} size="26px" height="17px">{ SlideInfo[currentSlide].title }</P>
      </Container>
    </>
  );
};
