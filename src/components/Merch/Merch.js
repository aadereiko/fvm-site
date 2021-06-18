import React from 'react';
import { Image, P, Button } from '../../helpers';
import { FlexWrapper, ImagesContainer, MoreButton } from './elements'
import shoper from '../../assets/images/shoper.png';
import shirt from '../../assets/images/shirt.png';

export const Merch = () => {
  return (
    <>
      <FlexWrapper>
        <Image bgImage={shoper} marginRight="32.5px" height="834px" width="1250px"/>
        <ImagesContainer>
          <Image bgImage={shoper} height="263px" width="395px"/>
          <Image bgImage={shirt} marginTop="22px" height="263px" width="395px"/>
          <Image bgImage={shirt} marginTop="22px" height="263px" width="395px"/>
        </ImagesContainer>
      </FlexWrapper>
      <P marginTop="50px" weight="400" size="24px" height="30px">Чёрный шоппер «FOTOVELOMARAFON»</P>
      <FlexWrapper>
        <Button width="205px">Купить</Button>
        <MoreButton marginLeft="45px" width="205px">Подробнее</MoreButton>
      </FlexWrapper>
    </>
  );
};
