import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { P, Image } from '../../helpers';
import { ImagesWrapper, TextWrapper } from './elements'
import photo1 from '../../assets/images/photo-1.png';
import photo2 from '../../assets/images/photo-2.png';
import photo3 from '../../assets/images/photo-3.png';
import photo4 from '../../assets/images/photo-4.png';
import photo5 from '../../assets/images/photo-5.png';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay ]);
export const Description = () => {
  const [currentSlide, setCurrentSlide ] = useState(0);

  const SlideInfo = [
    {
      title: "О проекте",
      info: `Это уникальный проект, объединивший в себе спортивную и культурную сферы жизни<br>
      ФотоВело состоит из двух ингредиентов:<br>
      интересный маршрут и необычные фотозадания<br><br>
      Благодаря этому вы сможете проверить не только свою выносливость, но и креативность.`,
      photo: photo4,
    },
    {
      title: "Механика",
      info: `Летний ФотоВело 2021 - это юбилейный сезон, который проводится в онлайн-формате.
      Основная часть марафона длится 2 дня: 26 и 27 июня. Участники выбирают 1 из этих дней и в своем темпе передвигаются по локациям и делают снимки. До основной части марафона можно проходить задания, которые позволят открыть карту раньше, а не в официальный день начала марафона.
      Это позволит простроить маршрут заранее для большего комфорта.`,
      photo: photo1,
    },
    {
      title: "Правила",
      info: `У каждого проекта есть свои правила, и ФотоВело не исключение.
      Соблюдай каждый пункт и твоё участие пройдёт как по маслу:<br/><br/>
      <ul>
        <li>Использование различных фоторедакторов строго запрещено.</li>
        <li>Основной вид транспорта – велосипед. Однако есть сезоны, где участвовать можно на роликах, скейте, самокате или просто пробежать всю дистанцию. Использовать общественный транспорт или машину запрещается.</li>
        <li>Вы должны прислать боту свои фотографии до 23:59 того дня, в который начали марафон! Иначе фотографии не будут приняты к оценке.</li>
        <li>Соблюдайте правила дорожного движения, следуйте культуре вождения вашего транспортного средства и будьте аккуратны, ведь мы за вас переживаем.</li>
      </ul>`,
      photo: photo5,
    },
    {
      title: "Финиш",
      info: `Когда участники выполнили все фотозадания, то они отправляются на финиш,
      где организаторы фиксируют их время и проверяют наличие всех выполненных фотографий по темам. После участники могут расслабиться на специально оборудованной зоне для отдыха.`,
      photo: photo2,
    },
    {
      title: "Награждение",
      info: `На следующий день для всех желающих организовывается просмотр фотографий с обсуждением, где каждый может рассказать историю создания своего фото. После завершения слайд шоу проходит награждение победителей. Определяются они с помощью компетентного жюри, которое напрямую связаны с фотографией и самим проектом.`,
      photo: photo3,
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
            <TextWrapper> 
              <P weight="500" size="24px" height="29px">{SlideInfo[currentSlide].title}</P>
              <P 
              paddingTop="14px" 
              paddingBottom="40px" 
              weight="400" size="14px"
              width="750px" height="17px" 
              dangerouslySetInnerHTML={{ __html: SlideInfo[currentSlide].info }}>
              </P>
            </TextWrapper>
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
            centeredSlides={true}
            preloadImages={true}
            loopedSlides={30}
            autoplay={{delay: 3000}}
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
