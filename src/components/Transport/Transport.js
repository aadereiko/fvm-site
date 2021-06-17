import React from 'react';
import { P, Image } from '../../helpers';
import { TransportContainer, ImageDescription, TransportWrapper } from './elements';
import skate from '../../assets/images/skate.png';
import rolls from '../../assets/images/rolls.png';
import cross from '../../assets/images/cross.png';
import samo from '../../assets/images/samo.png';
import velo from '../../assets/images/velo.png';


export const Transport = () => {
  return (
    <TransportWrapper>
      <TransportContainer>
        <ImageDescription>
          <Image marginRight="30px" bgImage={skate} width="133px" height="133px"/>
          <div>
            <P weight="600" size="32px" height="39px">На скейтборде</P>
            <P marginTop="25px" weight="400" size="24px" height="29px" width="367px">Для тех, кто хочет пройти маршрут налегке.</P>
          </div>
        </ImageDescription>
        <ImageDescription>
          <Image marginRight="30px" bgImage={rolls} width="133px" height="133px"/>
          <div>
            <P weight="600" size="32px" height="39px">На скейтборде</P>
            <P marginTop="25px" weight="400" size="24px" height="29px" width="367px">Для тех, кто с детства увлекался спортом.</P>
          </div>
        </ImageDescription>
        <ImageDescription>
          <Image marginRight="30px" bgImage={cross} width="133px" height="133px"/>
          <div>
            <P weight="600" size="32px" height="39px">На скейтборде</P>
            <P marginTop="25px" weight="400" size="24px" height="29px" width="367px">Для тех, кто не боится больших расстояний и трудностей.</P>
          </div>
        </ImageDescription>
      </TransportContainer>
      <TransportContainer>
        <ImageDescription>
          <Image marginRight="30px" bgImage={samo} width="133px" height="133px"/>
          <div>
            <P weight="600" size="32px" height="39px">На скейтборде</P>
            <P marginTop="25px" weight="400" size="24px" height="29px" width="367px">Для тех, кто идёт в ногу со временем.</P>
          </div>
        </ImageDescription>
        <ImageDescription>
          <Image marginRight="30px" bgImage={velo} width="133px" height="133px"/>
          <div>
            <P weight="600" size="32px" height="39px">На скейтборде</P>
            <P marginTop="25px" weight="400" size="24px" height="29px" width="367px">Для тех, кто любит классику.</P>
          </div>
        </ImageDescription>
      </TransportContainer>
    </TransportWrapper>
  );
};
