import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { P, Image } from '../../helpers';
import { ImagesWrapper } from './elements'
import photo1 from '../../assets/images/photo-1.png';
import photo2 from '../../assets/images/photo-2.png';
import photo3 from '../../assets/images/photo-3.png';
import photo4 from '../../assets/images/photo-4.png';
import photo5 from '../../assets/images/photo-5.png';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export const Description = () => {
  const [currentSlide, setCurrentSlide ] = useState(4);

  const SlideInfo = [
    {
      title: "Механика",
      info: `Это уникальный проект, объединивший в себе спортивную и культурную сферы жизни<br></br>
      ФотоВело состоит из двух ингредиентов:<br></br>
      интересный маршрут и необычные фотозадания<br></br>
      <br></br>
      Благодаря этому вы сможете проверить не только свою выносливость, но и креативность`,
      photo: photo1,
    },
    {
      title: "Финиш",
      info: `Это уникальный проект, объединивший в себе спортивную и культурную сферы жизни<br></br>
      ФотоВело состоит из двух ингредиентов:<br></br>
      интересный маршрут и необычные фотозадания<br></br>
      <br></br>
      Благодаря этому вы сможете проверить не только свою выносливость, но и креативность`,
      photo: photo2,
    },
    {
      title: "Награждение",
      info: `Это уникальный проект, объединивший в себе спортивную и культурную сферы жизни<br></br>
      ФотоВело состоит из двух ингредиентов:<br></br>
      интересный маршрут и необычные фотозадания<br></br>
      <br></br>
      Благодаря этому вы сможете проверить не только свою выносливость, но и креативность`,
      photo: photo3,
    },
    {
      title: "О проекте",
      info: `Это уникальный проект, объединивший в себе спортивную и культурную сферы жизни<br></br>
      ФотоВело состоит из двух ингредиентов:<br></br>
      интересный маршрут и необычные фотозадания<br></br>
      <br></br>
      Благодаря этому вы сможете проверить не только свою выносливость, но и креативность`,
      photo: photo4,
    },
    {
      title: "Правила",
      info: `Это уникальный проект, объединивший в себе спортивную и культурную сферы жизни<br></br>
      ФотоВело состоит из двух ингредиентов:<br></br>
      интересный маршрут и необычные фотозадания<br></br>
      <br></br>
      Благодаря этому вы сможете проверить не только свою выносливость, но и креативность`,
      photo: photo5,
    }
  ]


  const slideRender = (info) => {
    // if(info.isActive && currentSlide.title !== info.title) {
    //   setCurrentSlide(info)
    // } 
    return (
      <Image isActive={info.isActive} bgImage={info.photo} height={info.isActive ? "250px" : "210px"}>
        <div>
          <P weight="500" size="18px" height="22px">{info.title}</P>
        </div>
      </Image>
      )
  }

  return (
    <>
      <Row>
        <Col md={12}>
          <Image bgImage={SlideInfo[currentSlide].photo} height="720px">
            <div> 
              <P weight="500" size="24px" height="29px">{SlideInfo[currentSlide].title}</P>
              <P marginTop="25px" paddingBottom="60px" weight="400" size="14px" height="17px" dangerouslySetInnerHTML={{ __html: SlideInfo[currentSlide].info }}>
              </P>
            </div>
          </Image>
        </Col>
      </Row>
      <Container className="mt-3">
        <ImagesWrapper>
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            navigation
            loop={true}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            centeredSlides={true}
            onSlideChange={(e) => setCurrentSlide(e.realIndex)}
          >
            {
              SlideInfo.map((slide, index) => 
                <SwiperSlide key={index}>
                  {({ isActive }) => slideRender({...slide, isActive })}
                </SwiperSlide>
              )
            }
          </Swiper>
        </ImagesWrapper>
      </Container>
    </>
  );
};
