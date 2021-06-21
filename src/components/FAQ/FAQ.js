import React from 'react';
import { P, FaqBlock } from '../../helpers';
import { FaqWrapper } from './elements';


export const FAQ = () => {
  return (
    <FaqWrapper>
      <FaqBlock marginTop="80px" title="Как подать заявку на участие?">
        <P marginTop="24px"  weight="300" size="10px" height="12px">Где можно узнать свежие новости о проекте?<br/><br/>Нигде!<br/><br/>Всё уже, всё...<br/><br/>Отмена!</P>
      </FaqBlock>
      <FaqBlock marginTop="18px" title="Где можно узнать свежие новости о проекте?">
        <P marginTop="24px"  weight="300" size="10px" height="12px">Где можно узнать свежие новости о проекте?<br/><br/>Нигде!<br/><br/>Всё уже, всё...<br/><br/>Отмена!</P>
      </FaqBlock>
      <FaqBlock marginTop="18px" title="Какое расстояние мне придётся проехать во время мероприятияи сколько это займёт времени?">
        <P marginTop="24px"  weight="300" size="10px" height="12px">Где можно узнать свежие новости о проекте?<br/><br/>Нигде!<br/><br/>Всё уже, всё...<br/><br/>Отмена!</P>
      </FaqBlock>
      <FaqBlock marginTop="18px" title="Можно ли участвовать вместе с другом?">
        <P marginTop="24px"  weight="300" size="10px" height="12px">Где можно узнать свежие новости о проекте?<br/><br/>Нигде!<br/><br/>Всё уже, всё...<br/><br/>Отмена!</P>
      </FaqBlock>
    </FaqWrapper>
  );
};