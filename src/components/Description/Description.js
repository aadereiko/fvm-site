import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { P, Image } from '../../helpers';
import { ImagesWrapper } from './elements'
import photo1 from '../../assets/images/photo-1.png';
import photo2 from '../../assets/images/photo-2.png';
import photo3 from '../../assets/images/photo-3.png';
import photo4 from '../../assets/images/photo-4.png';


export const Description = () => {
  return (
    <>
      <Row>
        <Col md={12}>
          <Image bgImage={photo1} height="720px">
            <div> 
            <P weight="500" size="24px" height="29px">Проект</P>
            <P marginTop="25px" paddingBottom="60px" weight="400" size="14px" height="17px">
              Это уникальный проект, объединивший в себе спортивную и культурную сферы жизни<br></br>
              ФотоВело состоит из двух ингредиентов:<br></br>
              интересный маршрут и необычные фотозадания<br></br>
              <br></br>
              Благодаря этому вы сможете проверить не только свою выносливость, но и креативность </P>
            </div>
          </Image>
        </Col>
      </Row>
      <Container className="mt-3">
        <Row>
          <Col md={4}>
            <Image bgImage={photo2} height="210px">
              <div>
                <P weight="500" size="18px" height="22px">Механика</P>
              </div>
            </Image>
          </Col>
          <Col md={4}>
            <Image bgImage={photo3} height="210px">
              <div>
                <P weight="500" size="18px" height="22px">Финиш</P>
              </div>
            </Image>
          </Col>
          <Col md={4}>
            <Image bgImage={photo4} height="210px">
              <div>
                <P weight="500" size="18px" height="22px">Награждение</P>
              </div>
            </Image>
          </Col>
        </Row>
      </Container>
    </>
  );
};
