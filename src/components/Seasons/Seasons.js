import React from 'react';
import { P, Image } from '../../helpers';
import { SeasonsWrapper, NightBlock, SpringBlock, AutumnBlock, InfoBlock } from './elements'
import night from '../../assets/images/night-full.jpg';
import autumn from '../../assets/images/autumn-full.jpg';
import spring from '../../assets/images/spring-full.jpg';

export const Seasons = (props) => {
  return (
    <>
    {props.isLaptop ? 
      <SeasonsWrapper {...props}>
        <P marginLeft="40px" weight="600" size="34px" height="42px">Сезоны</P>
        <AutumnBlock>
          <InfoBlock>
            <P weight="500" size="24px" height="30px">Осенний</P>
            <P marginTop="17px" weight="400" size="14px" height="17px" width="302px">Классический сезон ФотоВело, когда принять участие можно исключительно на велосипеде. Отличается от других тем, что маршрут становится более длинным.</P>
          </InfoBlock>
        </AutumnBlock>
        <NightBlock>
          <InfoBlock>
            <P weight="500" size="24px" height="30px">Ночной</P>
            <P marginTop="17px" weight="400" size="14px" height="17px" width="300px">Проходит жарким летом, когда темнеет поздно, а фото получаются особенными. Старт начинается вечером, а на финише обустроена специальная зона, чтобы провести целую ночь в компании единомышленников.</P>
          </InfoBlock>
        </NightBlock>
        <SpringBlock>
          <InfoBlock>
            <P weight="500" size="24px" height="30px">Весенний</P>
            <P marginTop="17px" weight="400" size="14px" height="17px" width="360px">Традиционно проходит в конце мая. Отличается от других сезонов тем, что участвовать можно не только на велосипеде, но и на скейте, самокате, роликах, а можно и вовсе пробежать всю дистанцию на своих двоих.</P>
        </InfoBlock>
        </SpringBlock>
      </SeasonsWrapper>
    : 
    <>
      <P marginBottom="20px" align="center" weight="600" size="20px" height="24px" color='#fff'>Сезоны</P>
      <Image isLaptop={props.isLaptop} bgImage={autumn} height="200px"/>
      <P marginTop="10px" weight="500" size="18px" height="22px" width="100%" align='center' color="#fff">Осенний</P>
      <P marginTop="10px" marginBottom="20px" weight="400" size="10px" height="12px" width="100%" align='center' color="#fff">Классический сезон ФотоВело, когда принять участие можно исключительно на велосипеде. Отличается от других тем, что маршрут становится более длинным.</P>
       
      <Image isLaptop={props.isLaptop} bgImage={night} height="200px"/>
      <P marginTop="10px" weight="500" size="18px" height="22px" width="100%" align='center' color="#fff">Ночной</P>
      <P marginTop="10px" marginBottom="20px" weight="400" size="10px" height="12px" width="100%" align='center' color="#fff">Проходит жарким летом, когда темнеет поздно, а фото получаются особенными. Старт начинается вечером, а на финише обустроена специальная зона, чтобы провести целую ночь в компании единомышленников.</P>
      
      <Image isLaptop={props.isLaptop} bgImage={spring} height="200px"/>
      <P marginTop="10px" weight="500" size="18px" height="22px" width="100%" align='center' color="#fff">Весенний</P>
      <P marginTop="10px" marginBottom="20px" weight="400" size="10px" height="12px" width="100%" align='center' color="#fff">Традиционно проходит в конце мая. Отличается от других сезонов тем, что участвовать можно не только на велосипеде, но и на скейте, самокате, роликах, а можно и вовсе пробежать всю дистанцию на своих двоих.</P>
         
    </>
    }
    </>
  );
};
