import React from 'react';
import { HeaderDiv, UlNav, LiNav, HeaderWrapper } from './elements';



export const Header = ({scrollDirection, scrollY}) => {
  return (
    <HeaderWrapper hide={scrollY > -100 && scrollDirection == 'down'}>
      <div className='container'>
        <HeaderDiv>
          <UlNav>
            <LiNav>
              <a href="#">О проекте</a>
            </LiNav>
            <LiNav>
              <a href="#">Сезоны</a>
            </LiNav>
            <LiNav>
              <a href="#">Мерч</a>
            </LiNav>
            <LiNav>
              <a href="#">FAQ</a>
            </LiNav>
            <LiNav>
              <a href="#">Где нас искать</a>
            </LiNav>
          </UlNav>
        </HeaderDiv>
      </div>
    </HeaderWrapper>
  );
};
