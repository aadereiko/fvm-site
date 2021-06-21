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
        <Image bgImage={marika} height="288px" width="288px"/>
        <P marginTop="10px" weight="600" size="20px" height="25px">Чекуришвили Марика</P>
        <P weight="400" size="12px" height="15px" color="#8089DC">Руководитель проекта</P>
        <Button marginTop="32px" width="121px">Связаться</Button>
      </PersonContainer>
      <PersonContainer margin={true}>
        <Image bgImage={malceva} height="288px" width="288px"/>
        <P marginTop="10px" weight="600" size="20px" height="25px">Мальцева Дарья</P>
        <P weight="400" size="12px" height="15px" color="#8089DC">Специалист по работе с партнёрами</P>
        <Button marginTop="32px" width="121px">Связаться</Button>
      </PersonContainer>
      <PersonContainer>
        <Image bgImage={rostovceva} height="288px" width="288px"/>
        <P marginTop="10px" weight="600" size="20px" height="25px">Ростовцева Дарья</P>
        <P weight="400" size="12px" height="15px" color="#8089DC">Специалист по связям с общественностью</P>
        <Button marginTop="32px" width="121px">Связаться</Button>
      </PersonContainer>
    </TeamWrapper>
  );
};
