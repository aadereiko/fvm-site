import React from 'react';
import { Image, P, Button } from '../../helpers';
import { FlexWrapper, ImagesContainer, MoreButton } from './elements'
import shoper from '../../assets/images/shoper.png';
import shirt from '../../assets/images/shirt.png';

export const Merch = () => {
  return (
    <>
      <FlexWrapper>
        <Image bgImage={shoper} marginRight="32.5px" height="560px" width="840px"/>
        <ImagesContainer>
          <Image bgImage={shoper} height="180px" width="270px"/>
          <Image bgImage={shirt} marginTop="10px" height="180px" width="270px"/>
          <Image bgImage={shirt} marginTop="10px" height="180px" width="270px"/>
        </ImagesContainer>
      </FlexWrapper>
      <P marginTop="50px" weight="400" size="14px" height="17px">Чёрный шоппер «FOTOVELOMARAFON»</P>
      <FlexWrapper>
        <a href="https://www.instagram.com/fotovelomarafon/" target="__blank"><Button width="250px" size="14px" height="16px">Купить</Button></a>
        {/* <MoreButton marginLeft="45px" width="205px">Подробнее</MoreButton> */}
      </FlexWrapper>
    </>
  );
};
