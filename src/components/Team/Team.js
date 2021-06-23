import React, { useState } from 'react';
import { Image, Span, P, Button } from '../../helpers';
import { TeamWrapper, PersonContainer, Tg, Vk, Fb, Links } from './elements'
import marika from '../../assets/images/marika.png';
import malceva from '../../assets/images/malceva.png';
import rostovceva from '../../assets/images/rostovceva.png';

export const Team = () => {
  const [ contact, setContact ] = useState({person: '', active: false});
  
  const contactClick = (type) => {
    setContact({person: type, active: true})
  }

  return (
    <TeamWrapper>
      <PersonContainer margin={true}>
        <Image bgImage={marika} height="288px" width="288px"/>
        <P marginTop="10px" weight="600" size="20px" height="25px">Чекуришвили Марика</P>
        <P weight="400" size="12px" height="15px" color="#8089DC">Руководитель проекта</P>
        <Button 
        onClick={() => contactClick('marika')} 
        contact={contact.active && contact.person === 'marika'} 
        marginTop="32px" 
        width={contact.active && contact.person === 'marika' ? "288px" : "121px"}>{
          <P paddingLeft={contact.active && contact.person === 'marika' && "21px"} size="14px" height="16px" marginRight="auto">Связаться</P>} {
            contact.active && contact.person === 'marika' && 
            <Links>
              <Tg href="https://t.me/marikachek/" target="__blank"/>
              <Vk href="https://vk.com/marikachek/" target="__blank"/>
              <Fb href="https://www.facebook.com/Chekurishvilimarika" target="__blank"/>
            </Links>
        }
        </Button>
      </PersonContainer>
      <PersonContainer margin={true}>
        <Image bgImage={malceva} height="288px" width="288px"/>
        <P marginTop="10px" weight="600" size="20px" height="25px">Мальцева Дарья</P>
        <P weight="400" size="12px" height="15px" color="#8089DC">Специалист по работе с партнёрами</P>
        <Button onClick={() => contactClick('malts')} contact={contact.active && contact.person === 'malts'} marginTop="32px" width={contact.active && contact.person === 'malts' ? "288px" : "121px"}>{
          <P paddingLeft={contact.active && contact.person === 'malts' && "21px"} size="14px" height="16px" marginRight="auto">Связаться</P>} {
            contact.active && contact.person === 'malts' && 
            <Links>
              <Tg href="https://t.me/dashs_mac/" target="__blank"/>
              <Vk href="https://vk.com/dasha__maltseva/" target="__blank"/>
              <Fb href="https://www.facebook.com/dasha.maltseva.984" target="__blank"/>
            </Links>
        }
        </Button>
      </PersonContainer>
      <PersonContainer>
        <Image bgImage={rostovceva} height="288px" width="288px"/>
        <P marginTop="10px" weight="600" size="20px" height="25px">Ростовцева Дарья</P>
        <P weight="400" size="12px" height="15px" color="#8089DC">Специалист по связям с общественностью</P>
        <Button onClick={() => contactClick('rost')} contact={contact.active && contact.person === 'rost'} marginTop="32px" width={contact.active && contact.person === 'rost' ? "288px" : "121px"}>{
          <P paddingLeft={contact.active && contact.person === 'rost' && "21px"} size="14px" height="16px" marginRight="auto">Связаться</P>} {
            contact.active && contact.person === 'rost' && 
            <Links>
              <Tg href="https://t.me/Dasha_R1/" target="__blank"/>
              <Vk href="https://vk.com/id28898999/" target="__blank"/>
              <Fb href="https://www.facebook.com/profile.php?id=100007359399456" target="__blank"/>
            </Links>
        }
        </Button>
      </PersonContainer>
    </TeamWrapper>
  );
};
