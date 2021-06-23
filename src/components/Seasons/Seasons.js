import React from 'react';
import { P } from '../../helpers';
import { SeasonsWrapper, NightBlock, SpringBlock, AutumnBlock, InfoBlock } from './elements'


export const Seasons = (props) => {
  return (
    <SeasonsWrapper {...props}>
      <P marginLeft="40px" weight="600" size="34px" height="42px">Сезоны</P>
      <AutumnBlock>
        <InfoBlock>
          <P weight="500" size="24px" height="30px">Осенний</P>
          <P marginTop="17px" weight="400" size="14px" height="17px" width="360px">Традиционно проходит в конце мая. Отличается от других сезонов тем, что участвовать можно не только на велосипеде, но и на скейте, самокате, роликах, а можно и вовсе пробежать всю дистанцию на своих двоих.</P>
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
          <P marginTop="17px" weight="400" size="14px" height="17px" width="302px">Классический сезон ФотоВело, когда принять участие можно исключительно на велосипеде. Отличается от других тем, что маршрут становится более длинным.</P>
       </InfoBlock>
      </SpringBlock>
    </SeasonsWrapper>
  );
};
