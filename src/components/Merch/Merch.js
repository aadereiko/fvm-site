import React from 'react';
import { Image } from '../../helpers';
import { ImagesWrapper, ImagesContainer } from './elements'
import shoper from '../../assets/images/shoper.png';
import shirt from '../../assets/images/shirt.png';

export const Merch = () => {
  return (
    <ImagesWrapper>
      <Image bgImage={shoper} marginRight="32.5px" height="834px" width="1250px"/>
      <ImagesContainer>
        <Image bgImage={shoper} height="263px" width="395px"/>
        <Image bgImage={shirt} marginTop="22px" height="263px" width="395px"/>
        <Image bgImage={shirt} marginTop="22px" height="263px" width="395px"/>
      </ImagesContainer>
    </ImagesWrapper>
  );
};
