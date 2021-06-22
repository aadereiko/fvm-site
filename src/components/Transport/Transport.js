import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { P, Image } from '../../helpers';
import { ImageDescription } from './elements';
import skate from '../../assets/images/skate.png';
import rolls from '../../assets/images/rolls.png';
import cross from '../../assets/images/cross.png';
import samo from '../../assets/images/samo.png';
import velo from '../../assets/images/velo.png';


export const Transport = () => {
  return (
      <Row>
        <Col md={4}>
          <ImageDescription>
            <Image marginRight="30px" bgImage={skate} width="82px" height="82px"/>
            <div>
              <P weight="600" size="22px" height="27px">На скейтборде</P>
              <P marginTop="7px" weight="400" size="14px" height="17px" width="224px">Для тех, кто хочет пройти маршрут налегке.</P>
            </div>
          </ImageDescription>
        </Col>
        <Col md={4}>
          <ImageDescription>
            <Image marginRight="30px" bgImage={samo} width="82px" height="82px"/>
            <div>
              <P weight="600" size="22px" height="27px">На самокате</P>
              <P marginTop="7px" weight="400" size="14px" height="17px" width="224px">Для тех, кто идёт в ногу со временем.</P>
            </div>
          </ImageDescription>
        </Col>
        <Col md={4}>
          <ImageDescription>
            <Image marginRight="30px" bgImage={cross} width="82px" height="82px"/>
            <div>
              <P weight="600" size="22px" height="27px">На своих ногах :)</P>
              <P marginTop="7px" weight="400" size="14px" height="17px" width="257px">Для тех, кто не боится больших расстояний и трудностей.</P>
            </div>
          </ImageDescription>
        </Col>
        <Col md={4}>
          <ImageDescription>
            <Image marginRight="30px" bgImage={rolls} width="82px" height="82px"/>
            <div>
              <P weight="600" size="22px" height="27px">На роликах</P>
              <P marginTop="7px" weight="400" size="14px" height="17px" width="224px">Для тех, кто с детства увлекался спортом.</P>
            </div>
          </ImageDescription> 
        </Col>
        <Col md={4}>
          <ImageDescription>
            <Image marginRight="30px" bgImage={velo} width="82px" height="82px"/>
            <div>
              <P weight="600" size="22px" height="27px">На велосипеде</P>
              <P marginTop="7px" weight="400" size="14px" height="17px" width="224px">Для тех, кто любит классику.</P>
            </div>
          </ImageDescription>
        </Col>
      </Row>
  );
};
