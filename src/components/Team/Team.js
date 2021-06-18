import React from 'react';
import { Image, P, Button } from '../../helpers';
import { TeamWrapper, PersonContainer } from './elements'
import marika from '../../assets/images/marika.png';
import malceva from '../../assets/images/malceva.png';
import rostovceva from '../../assets/images/rostovceva.png';

export const Team = () => {
  return (
    <TeamWrapper>
      <PersonContainer margin={true}>
        <Image bgImage={marika} height="398px" width="398px"/>
        <P marginTop="32px" weight="600" size="32px" height="39px">Чекуришвили Марика</P>
        <P marginTop="10px" weight="400" size="22px" height="27px" color="#8089DC">Руководитель проекта</P>
        <Button marginTop="32px" width="205px">Связаться</Button>
      </PersonContainer>
      <PersonContainer margin={true}>
        <Image bgImage={malceva} height="398px" width="398px"/>
        <P marginTop="32px" weight="600" size="32px" height="39px">Мальцева Дарья</P>
        <P marginTop="10px" weight="400" size="22px" height="27px" color="#8089DC">Специалист по работе с партнёрами</P>
        <Button marginTop="32px" width="205px">Связаться</Button>
      </PersonContainer>
      <PersonContainer>
        <Image bgImage={rostovceva} height="398px" width="398px"/>
        <P marginTop="32px" weight="600" size="32px" height="39px">Ростовцева Дарья</P>
        <P marginTop="10px" weight="400" size="22px" height="27px" color="#8089DC">Специалист по связям с общественностью</P>
        <Button marginTop="32px" width="205px">Связаться</Button>
      </PersonContainer>
    </TeamWrapper>
  );
};
